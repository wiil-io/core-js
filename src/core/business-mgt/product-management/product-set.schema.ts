import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { BusinessProductSchema } from "./product-config.schema";

/**
 * @fileoverview Product set schema definitions for bundled products.
 * @module business-mgt/product-set
 *
 * Product sets enable bundling products into packages with flexible pricing
 * and targeting strategies. Sets can use fixed pricing or sum of component prices.
 */


// ============================================================================
// ENUMS
// ============================================================================

/**
 * Product set pricing mode.
 * Determines how the set price is calculated.
 *
 * @enum {string}
 * @property {string} FIXED - Set has a fixed price regardless of component prices
 * @property {string} SUM_OF_ITEMS - Set price is sum of included product prices
 */
export enum ProductSetPricingMode {
    /** Set has a fixed price regardless of component prices */
    FIXED = "FIXED",
    /** Set price is sum of included product prices */
    SUM_OF_ITEMS = "SUM_OF_ITEMS",
}

/**
 * Product set targeting mode.
 * Determines how products are selected for the set.
 *
 * @enum {string}
 * @property {string} EXPLICIT - Set includes explicitly listed products
 * @property {string} SELECTOR - Set includes products matching selector criteria
 */
export enum ProductSetTargetingMode {
    /** Set includes explicitly listed products */
    EXPLICIT = "EXPLICIT",
    /** Set includes products matching selector criteria */
    SELECTOR = "SELECTOR",
}

// ============================================================================
// CHANNEL MAPPING SCHEMA
// ============================================================================

/**
 * Product set channel mapping schema.
 * Maps product sets to external platform identifiers.
 *
 * @typedef {Object} ProductSetChannelMapping
 * @property {string} channelId - Platform identifier (e.g., "shopify", "amazon")
 * @property {string} externalProductSetId - Set ID in external platform
 */
export const ProductSetChannelMappingSchema = z.object({
    channelId: z.string().describe("Platform identifier (e.g., 'shopify', 'amazon'). Used for external system synchronization."),
    externalProductSetId: z.string().describe("Product set ID in the external platform. Enables cross-platform order reconciliation."),
}).describe("Per-channel external product set ID mapping for platform synchronization");

// ============================================================================
// PRODUCT SET ITEM SCHEMA
// ============================================================================

/**
 * Product set item schema.
 * Represents a product included in a set with quantity and requirement specifications.
 *
 * @typedef {Object} ProductSetItem
 * @property {string} productId - Product ID included in set
 * @property {string} [productVariantId] - Specific variant ID if applicable
 * @property {number} quantity - Quantity of this product in set
 * @property {boolean} isRequired - Whether item is required in set
 * @property {number} [displayOrder] - Display order inside set
 */
export const ProductSetItemSchema = z.object({
    productId: z.string().describe("References BusinessProduct included in this set. Links to product catalog for pricing and availability."),
    productVariantId: z.string().nullable().optional().describe("Specific ProductVariant ID when set requires particular variant. Null allows any variant."),
    quantity: z.number().int().positive().describe("Quantity of this product required in the set. Must be positive integer."),
    isRequired: z.boolean().default(true).describe("Whether this item is required for set validity. Optional items can be excluded by customer."),
    displayOrder: z.number().int().optional().describe("Display order within the set. Lower numbers appear first."),
}).describe("Product included in a product set with quantity and requirement specifications");

// ============================================================================
// PRODUCT SET SELECTOR SCHEMA
// ============================================================================

/**
 * Product set selector schema.
 * Defines criteria for dynamically selecting products to include in a set.
 *
 * @typedef {Object} ProductSetSelector
 * @property {Array} productIdsAny - Products where any match satisfies
 * @property {Array} productIdsAll - Products where all must match
 * @property {boolean} allProducts - Include all catalog products
 * @property {number} [quantityExact] - Exact quantity required
 * @property {number} [quantityMin] - Minimum quantity required
 * @property {number} [quantityMax] - Maximum quantity allowed
 */
export const ProductSetSelectorSchema = z.object({
    productIdsAny: z.array(z.string()).max(5000).default([]).describe("Any matching catalog product IDs"),
    productIdsAll: z.array(z.string()).max(5000).default([]).describe("All required catalog product IDs"),
    allProducts: z.boolean().default(false).describe("Includes all catalog products"),
    quantityExact: z.number().int().positive().optional().describe("Requires exact matched quantity"),
    quantityMin: z.number().int().nonnegative().optional().describe("Requires minimum matched quantity"),
    quantityMax: z.number().int().positive().optional().describe("Caps maximum matched quantity"),
}).superRefine((data, ctx) => {
    const selectorModes = [
        data.productIdsAny.length > 0,
        data.productIdsAll.length > 0,
        data.allProducts,
    ].filter(Boolean).length;

    if (selectorModes !== 1) {
        ctx.addIssue({
            code: "custom",
            path: ["productIdsAny"],
            message: "Exactly one of productIdsAny, productIdsAll, or allProducts must be set",
        });
    }

    if (data.quantityExact !== undefined && (data.quantityMin !== undefined || data.quantityMax !== undefined)) {
        ctx.addIssue({
            code: "custom",
            path: ["quantityExact"],
            message: "quantityExact cannot be combined with quantityMin or quantityMax",
        });
    }

    if (
        data.quantityMin !== undefined &&
        data.quantityMax !== undefined &&
        data.quantityMax < data.quantityMin
    ) {
        ctx.addIssue({
            code: "custom",
            path: ["quantityMax"],
            message: "quantityMax must be greater than or equal to quantityMin",
        });
    }
});

// ============================================================================
// PRODUCT SET SCHEMA
// ============================================================================

/**
 * Product set schema.
 * Represents a bundle or set of products with configurable pricing and targeting.
 *
 * @typedef {Object} ProductSet
 * @property {string} [productRevisionId] - Version control for product changes
 * @property {string} [code] - Stable internal code for integration matching
 * @property {string} name - Product set name
 * @property {string} [description] - Product set description
 * @property {Array} [channelMappings] - Per-channel external set ID mappings
 * @property {ProductSetTargetingMode} targetingMode - How set selects members
 * @property {ProductSetPricingMode} pricingMode - How pricing is calculated
 * @property {number} [fixedPrice] - Set price when pricingMode is FIXED
 * @property {Array} [items] - Explicit product members
 * @property {Object} [selector] - Selector definition for dynamic targeting
 * @property {boolean} isActive - Whether product set is active
 * @property {string} [imageUrl] - Public image URL for the set
 * @property {Array} [imageUrls] - Multiple image URLs
 * @property {number} [displayOrder] - Display order in catalog
 */
export const ProductSetSchema = BaseModelSchema.safeExtend({
    productRevisionId: z.string().nullable().optional().describe("Optional product revision ID for version-scoped catalog targeting. Ensures set applies to specific catalog version."),
    code: z.string().min(1).nullable().optional().describe("Stable internal code for idempotent integration matching"),
    name: z.string().min(1, "Product set name is required").describe("Product set name"),
    description: z.string().nullable().optional().describe("Product set description"),
    channelMappings: z.array(ProductSetChannelMappingSchema).nullable().optional().describe("Per-channel product set ID mappings"),
    targetingMode: z.enum(ProductSetTargetingMode).default(ProductSetTargetingMode.EXPLICIT).describe("How this set selects its members"),
    pricingMode: z.enum(ProductSetPricingMode).default(ProductSetPricingMode.SUM_OF_ITEMS).describe("How set pricing is resolved"),
    fixedPrice: z.number().nonnegative().nullable().optional().describe("Set price when pricing mode is FIXED"),
    items: z.array(ProductSetItemSchema).nullable().optional().describe("Explicit product members for EXPLICIT targeting"),
    selector: ProductSetSelectorSchema.nullable().optional().describe("Selector definition for SELECTOR targeting"),
    isActive: z.boolean().default(true).describe("Whether this product set is active"),
    imageUrl: z.string().nullable().optional().describe("Public image URL for the product set"),
    imageUrls: z.array(z.string()).nullable().optional().describe("Public image URLs for the product set"),
    displayOrder: z.number().int().nullable().optional().describe("Display order in catalog"),
}).superRefine((data, ctx) => {
    if (data.pricingMode === ProductSetPricingMode.FIXED && (data.fixedPrice === undefined || data.fixedPrice === null)) {
        ctx.addIssue({
            code: "custom",
            path: ["fixedPrice"],
            message: "fixedPrice is required when pricingMode is FIXED",
        });
    }

    if (data.pricingMode === ProductSetPricingMode.SUM_OF_ITEMS && data.fixedPrice != null) {
        ctx.addIssue({
            code: "custom",
            path: ["fixedPrice"],
            message: "fixedPrice must be null or omitted when pricingMode is SUM_OF_ITEMS",
        });
    }

    if (data.targetingMode === ProductSetTargetingMode.EXPLICIT) {
        if (!data.items || data.items.length === 0) {
            ctx.addIssue({
                code: "custom",
                path: ["items"],
                message: "items is required when targetingMode is EXPLICIT",
            });
        }

        if (data.selector != null) {
            ctx.addIssue({
                code: "custom",
                path: ["selector"],
                message: "selector must be null or omitted when targetingMode is EXPLICIT",
            });
        }
    }

    if (data.targetingMode === ProductSetTargetingMode.SELECTOR) {
        if (data.selector == null) {
            ctx.addIssue({
                code: "custom",
                path: ["selector"],
                message: "selector is required when targetingMode is SELECTOR",
            });
        }

        if (data.items && data.items.length > 0) {
            ctx.addIssue({
                code: "custom",
                path: ["items"],
                message: "items must be empty when targetingMode is SELECTOR",
            });
        }
    }

    if (!data.items || data.items.length === 0) {
        return;
    }

    const seenItemKeys = new Set<string>();
    for (const [index, item] of data.items.entries()) {
        const itemKey = `${item.productId}::${item.productVariantId ?? "*"}`;
        if (seenItemKeys.has(itemKey)) {
            ctx.addIssue({
                code: "custom",
                path: ["items", index],
                message: "Duplicate productId + productVariantId combination is not allowed in a product set",
            });
        }
        seenItemKeys.add(itemKey);
    }
});

export const CreateProductSetSchema = ProductSetSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export const UpdateProductSetSchema = CreateProductSetSchema.partial().safeExtend({
    id: z.string(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ProductSetItem = z.infer<typeof ProductSetItemSchema>;
export type ProductSetChannelMapping = z.infer<typeof ProductSetChannelMappingSchema>;
export type ProductSetSelector = z.infer<typeof ProductSetSelectorSchema>;
export type ProductSet = z.infer<typeof ProductSetSchema>;
export type CreateProductSet = z.infer<typeof CreateProductSetSchema>;
export type UpdateProductSet = z.infer<typeof UpdateProductSetSchema>;

// ============================================================================
// DISPLAY SCHEMAS (read-optimized for catalog rendering)
// ============================================================================

/**
 * Product set item display schema.
 * Extended item schema with resolved product data for UI rendering.
 *
 * @typedef {Object} ProductSetItemDisplay
 * @property {Object} [product] - Resolved BusinessProduct snapshot
 */
export const ProductSetItemDisplaySchema = ProductSetItemSchema.safeExtend({
    product: BusinessProductSchema.optional().describe("Resolved BusinessProduct snapshot for display. Populated server-side for UI rendering."),
}).describe("Product set item with resolved product data for catalog display");

/**
 * Product set display schema.
 * Extended set schema with resolved items and computed pricing for UI rendering.
 *
 * @typedef {Object} ProductSetDisplay
 * @property {Array} items - ProductSetItemDisplay array with resolved data
 * @property {number} [resolvedPrice] - Computed display price for the set
 */
export const ProductSetDisplaySchema = ProductSetSchema.omit({
    items: true,
}).safeExtend({
    items: z.array(ProductSetItemDisplaySchema).nullable().optional().describe("Set items with resolved product snapshots for display"),
    resolvedPrice: z.number().nonnegative().nullable().optional().describe("Computed display price for the set. For SUM_OF_ITEMS: sum of item prices × quantities. For FIXED: the fixedPrice value."),
}).describe("Product set with resolved items and computed pricing for catalog display");

export type ProductSetItemDisplay = z.infer<typeof ProductSetItemDisplaySchema>;
export type ProductSetDisplay = z.infer<typeof ProductSetDisplaySchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Product set filter options.
 * @interface ProductSetFilters
 */
export interface ProductSetFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by product revision ID */
    productRevisionId?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by internal code */
    code?: string;
    /** Filter by targeting mode */
    targetingMode?: ProductSetTargetingMode;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by pricing mode */
    pricingMode?: ProductSetPricingMode;
}

/**
 * Product set sorting options.
 * @interface ProductSetSorting
 */
export interface ProductSetSorting {
    /** Field to sort by */
    field: "name" | "createdAt" | "displayOrder";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Product set query options.
 * @interface ProductSetQueryOptions
 */
export interface ProductSetQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ProductSetFilters;
    /** Optional sorting */
    sorting?: ProductSetSorting;
}

