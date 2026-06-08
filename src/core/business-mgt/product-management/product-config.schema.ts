import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../type-definitions/display-order";

/**
 * @fileoverview Product configuration schema definitions for business management.
 * @module business-mgt/product-config
 *
 * Includes categories, products, attribute definitions, and channel mappings
 * for multi-platform product catalog management.
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Attribute definition type.
 * Determines the data type of attribute values.
 *
 * @enum {string}
 */
export enum AttributeDefType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ENUM = "enum",
    DATE = "date",
    URL = "url",
}

/**
 * Category location scope.
 * Determines whether category is inherited across locations or local.
 *
 * @enum {string}
 */
export enum CategoryLocationScope {
    /** Category is inherited from parent organization */
    INHERITED = "inherited",
    /** Category is local to specific location */
    LOCAL = "local",
}

/**
 * Barcode format types.
 * Supported barcode formats for product identifiers.
 *
 * @enum {string}
 */
export enum BarcodeFormat {
    UPC_A = "UPC_A",
    UPC_E = "UPC_E",
    EAN_13 = "EAN_13",
    EAN_8 = "EAN_8",
    CODE_128 = "CODE_128",
    CODE_39 = "CODE_39",
    ITF_14 = "ITF_14",
    QR = "QR",
}

// ============================================================================
// ATTRIBUTE DEFINITION SCHEMAS
// ============================================================================

/**
 * Attribute definition schema.
 * Organization-level attribute definitions for products.
 *
 * @typedef {Object} AttributeDef
 * @property {string} name - Attribute name (e.g., 'Voltage', 'Warranty Months')
 * @property {string} slug - URL-friendly slug for the attribute
 * @property {AttributeDefType} type - Attribute value type
 * @property {string} [unit] - Unit of measurement
 * @property {Array} [enumValues] - Allowed values for enum type
 * @property {boolean} isActive - Whether attribute definition is active
 */
export const AttributeDefSchema = BaseModelSchema.safeExtend({
    name: z.string().min(1).describe("Attribute name (e.g., 'Voltage', 'Warranty Months'). Used for product specification display."),
    slug: z.string().min(1).describe("URL-friendly slug for the attribute. Used for filtering and API queries."),
    type: z.enum(AttributeDefType).describe("Attribute value type determining validation and display formatting."),
    unit: z.string().nullable().optional().describe("Unit of measurement (e.g., 'V', 'kg', 'cm'). Displayed alongside attribute value."),
    enumValues: z.array(z.string()).nullable().optional().describe("Allowed values for enum type. Only applicable when type is ENUM."),
    isActive: z.boolean().default(true).describe("Whether this attribute definition is active and available for use."),
});

/**
 * Category attribute binding schema.
 * Links categories to attribute definitions with category-specific settings.
 *
 * @typedef {Object} CategoryAttributeBinding
 * @property {string} attributeDefId - Reference to AttributeDef.id
 * @property {boolean} required - Whether attribute is required for products
 * @property {number} displayOrder - Display order for this attribute
 */
export const CategoryAttributeBindingSchema = z.object({
    attributeDefId: z.string().describe("Reference to AttributeDef.id. Links category to organization-level attribute definition."),
    required: z.boolean().default(false).describe("Whether this attribute is required for products in this category."),
    displayOrder: z.number().int().default(0).describe("Display order for this attribute in the category. Lower numbers appear first."),
}).describe("Category-to-attribute binding with category-specific settings");

/**
 * Product attribute value schema.
 * Stores actual attribute values for products.
 *
 * @typedef {Object} ProductAttributeValue
 * @property {string} attributeDefId - Reference to AttributeDef.id
 * @property {string|number|boolean} value - Attribute value
 */
export const ProductAttributeValueSchema = z.object({
    attributeDefId: z.string().describe("Reference to AttributeDef.id. Links value to attribute definition for validation."),
    value: z.union([z.string(), z.number(), z.boolean()]).describe("Attribute value. Type must match AttributeDef.type."),
}).describe("Product attribute value referencing a category attribute definition");

// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================

/**
 * Product category channel mapping schema.
 * Maps categories to external platform identifiers.
 *
 * @typedef {Object} ProductCategoryChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalCategoryId - External category ID
 */
export const ProductCategoryChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., 'shopify', 'amazon'). Platform identifier for external system."),
    externalCategoryId: z.string().describe("External category ID for this specific channel. Used for synchronization."),
}).describe("Per-channel external category ID mapping");

/**
 * Product channel mapping schema.
 * Maps products to external platform identifiers.
 *
 * @typedef {Object} ProductChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalProductId - External product ID
 * @property {string} [externalCategoryId] - External category ID in channel
 */
export const ProductChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., 'shopify', 'amazon'). Platform identifier for external system."),
    externalProductId: z.string().describe("External product ID for this specific channel. Used for order reconciliation."),
    externalCategoryId: z.string().nullable().optional().describe("External category ID in this channel, if needed for sync payloads."),
}).describe("Per-channel external product ID mapping");

// ============================================================================
// PRODUCT CATEGORY SCHEMA
// ============================================================================

/**
 * Product category schema.
 *
 * @typedef {Object} ProductCategory
 * @property {string} [productRevisionId] - Version control for category changes
 * @property {string} [parentId] - Parent category ID for nested hierarchy
 * @property {string} name - Category name
 * @property {string} [slug] - URL-friendly slug
 * @property {string} [description] - Category description
 * @property {Array} [channelMappings] - Per-channel category ID mappings
 * @property {string} [iconId] - Icon image ID
 * @property {string} [heroImageId] - Hero/banner image ID
 * @property {number} [displayOrder] - Display order in catalog
 * @property {boolean} isDefault - Whether this is the default category
 * @property {Array} [attributeBindings] - Attribute bindings for products
 * @property {Array} [defaultAxisIds] - Default variant axis IDs
 * @property {Array} [defaultChannelIds] - Default channel IDs
 * @property {string} [taxClassId] - Tax class ID
 * @property {number} [targetMargin] - Target profit margin (0-1)
 * @property {boolean} [ageRestricted] - Whether products are age-restricted
 * @property {boolean} [requireImage] - Whether products must have an image
 * @property {CategoryLocationScope} [locationScope] - Location inheritance scope
 */
export const ProductCategorySchema = BaseModelSchema.safeExtend({
    productRevisionId: z.string().optional().describe("Optional product revision ID for version-scoped data. Ensures category applies to specific catalog version."),
    parentId: z.string().nullable().optional().describe("Parent category ID for nested hierarchy. Null for root categories."),
    name: z.string().min(1, "Category name is required").describe("Category name for product organization (e.g., Electronics, Clothing). Used by AI Powered Services when presenting product options."),
    slug: z.string().min(1).nullable().optional().describe("URL-friendly slug for the category. Used for SEO and deep linking."),
    description: z.string().nullable().optional().describe("Category description providing context about products included. Helps customers navigate the catalog."),
    channelMappings: z.array(ProductCategoryChannelMappingSchema).nullable().optional().describe("Per-channel category ID mappings for external platform synchronization."),

    // Media
    iconId: z.string().nullable().optional().describe("Icon image ID for category. Used in navigation menus and category lists."),
    heroImageId: z.string().nullable().optional().describe("Hero/banner image ID for category. Used on category landing pages."),

    // Display
    displayOrder: z.number().int().nullable().optional().describe("Numeric order for category display in catalog. Lower numbers appear first."),
    isDefault: z.boolean().default(false).describe("Whether this is the default category for uncategorized products."),

    // Attribute Bindings
    attributeBindings: z.array(CategoryAttributeBindingSchema).nullable().optional().describe("Attribute bindings defining which attributes apply to products in this category."),

    // Default Axes
    defaultAxisIds: z.array(z.string()).nullable().optional().describe("Default variant axis IDs for products in this category (e.g., Size, Color)."),

    // Distribution
    defaultChannelIds: z.array(z.string()).nullable().optional().describe("Default channel IDs for products in this category. Products inherit these channels."),

    // Tax & Margin
    taxClassId: z.string().nullable().optional().describe("Tax class ID for products in this category. Determines tax calculation rules."),
    targetMargin: z.number().min(0).max(1).nullable().optional().describe("Target profit margin (0-1) for products in this category. Used for pricing guidance."),

    // Business Rules
    ageRestricted: z.boolean().nullable().optional().describe("Whether products in this category are age-restricted. Triggers age verification."),
    requireImage: z.boolean().nullable().optional().describe("Whether products in this category must have an image before publishing."),

    // Location Scope
    locationScope: z.enum(CategoryLocationScope).nullable().optional().describe("Whether category is inherited across locations or local to specific location."),
});

// ============================================================================
// BUSINESS PRODUCT SCHEMA
// ============================================================================

/**
 * Business product schema.
 *
 * @typedef {Object} BusinessProduct
 * @property {string} [productRevisionId] - Version control for product changes
 * @property {Array} [channelMappings] - Per-channel product ID mappings
 * @property {string} name - Product name
 * @property {string} [description] - Product description
 * @property {string} [imageUrl] - Public image URL
 * @property {Array} [imageUrls] - Product gallery image URLs
 * @property {Array} [tags] - Product tags for search and filtering
 * @property {number} price - Product price
 * @property {number} [cost] - Cost of goods
 * @property {number} [compareAtPrice] - Original price for sale display
 * @property {string} [sku] - Stock Keeping Unit identifier
 * @property {string} [skuPattern] - SKU template for variant generation
 * @property {string} [barcode] - Product barcode
 * @property {BarcodeFormat} [barcodeFormat] - Barcode format
 * @property {boolean} [isAlcoholic] - Whether product is alcoholic
 * @property {string} categoryId - Category ID
 * @property {Object} [category] - Product category
 * @property {string} [brand] - Product brand name
 * @property {string} [brandId] - Product brand ID
 * @property {boolean} trackInventory - Whether to track inventory
 * @property {number} [stockQuantity] - Current stock quantity
 * @property {number} [lowStockThreshold] - Low stock alert threshold
 * @property {number} [stockedAt] - Unix timestamp when stock was last updated
 * @property {number} [reorderPoint] - Inventory threshold for replenishment
 * @property {number} [leadTime] - Supplier lead time in days
 * @property {string} [supplierId] - Preferred supplier ID
 * @property {number} [weight] - Product weight
 * @property {Object} [dimensions] - Product dimensions
 * @property {string} [shippingClassId] - Shipping class ID
 * @property {string} [HSCode] - Harmonized System Code
 * @property {Array} [attributes] - Product attribute values
 * @property {Array} [taxRuleIds] - Tax rule IDs
 * @property {boolean} isActive - Whether product is available for sale
 * @property {number} [displayOrder] - Display order in category
 */
export const BusinessProductSchema = BaseModelSchema.safeExtend({
    productRevisionId: z.string().optional().describe("Optional product revision ID for version-scoped data. Ensures product applies to specific catalog version."),
    channelMappings: z.array(ProductChannelMappingSchema).nullable().optional().describe("Per-channel product ID mappings for external platform synchronization."),
    name: z.string().min(1, "Product name is required").describe("Display name of the product shown to customers. Used by AI Powered Services in order conversations."),
    description: z.string().nullable().optional().describe("Detailed product description including features and benefits. Enables AI-powered recommendations."),
    imageUrl: z.url().nullable().optional().describe("Public image URL for the product. Primary image shown in catalog and search results."),
    imageUrls: z.array(z.url()).nullable().optional().describe("Public image URLs for the product gallery. Additional images for product detail page."),
    tags: z.array(z.string()).nullable().optional().describe("List of product tags for search and filtering. Enables faceted navigation."),

    // Pricing
    price: z.number().nonnegative().describe("Base price for this product in the account's currency. Used for order pricing calculations."),
    cost: z.number().nonnegative().nullable().optional().describe("Cost of goods for margin calculation. Used for profitability reporting."),
    compareAtPrice: z.number().nonnegative().nullable().optional().describe("Original price for sale/strikethrough display. Shows discount to customers."),

    // Identifiers
    sku: z.string().nullable().optional().describe("Stock Keeping Unit identifier for inventory tracking. Unique alphanumeric code for warehouse operations."),
    skuPattern: z.string().nullable().optional().describe("SKU template/pattern for generating variant SKUs (e.g., 'PROD-{size}-{color}')."),
    barcode: z.string().nullable().optional().describe("Product barcode for point-of-sale scanning and inventory management."),
    barcodeFormat: z.enum(BarcodeFormat).nullable().optional().describe("Barcode format used for product identifiers (UPC-A, EAN-13, etc.)."),

    // Classification
    isAlcoholic: z.boolean().nullable().optional().default(false).describe("Whether this product is alcoholic. Triggers age verification requirements."),
    categoryId: z.string().describe("References ProductCategory this product belongs to. Used for organization and browsing."),
    category: ProductCategorySchema.nullable().optional().describe("Populated ProductCategory object. Not required during creation."),
    brand: z.string().nullable().optional().describe("Product brand or manufacturer name for brand-based filtering."),
    brandId: z.string().nullable().optional().describe("Product brand ID for linking to brand entity."),

    // Inventory
    trackInventory: z.boolean().default(false).describe("Whether inventory tracking is enabled. When true, stockQuantity is enforced."),
    stockQuantity: z.number().int().nonnegative().nullable().optional().describe("Current available stock quantity. Updated by orders and adjustments."),
    lowStockThreshold: z.number().int().nonnegative().nullable().optional().describe("Stock level that triggers low inventory alerts."),
    stockedAt: z.number().int().nullable().optional().describe("Unix timestamp when stock was last received or updated."),
    reorderPoint: z.number().int().nonnegative().nullable().optional().describe("Inventory threshold that should trigger replenishment order."),
    leadTime: z.number().int().nonnegative().nullable().optional().describe("Supplier lead time in days. Used for reorder timing."),
    supplierId: z.string().nullable().optional().describe("Preferred supplier ID for this product."),

    // Physical Attributes
    weight: z.number().positive().nullable().optional().describe("Product weight for shipping calculations and carrier integration."),
    dimensions: z.object({
        length: z.number().positive().describe("Product length in specified units."),
        width: z.number().positive().describe("Product width in specified units."),
        height: z.number().positive().describe("Product height in specified units."),
        unit: z.enum(['inches', 'cm']).default('inches').describe("Measurement unit for dimensions."),
    }).nullable().optional().describe("Physical dimensions for shipping cost estimation and warehouse management."),

    // Shipping
    shippingClassId: z.string().nullable().optional().describe("Shipping class ID for the product. Determines shipping rates and methods."),
    HSCode: z.string().nullable().optional().describe("Harmonized System Code for international shipping and customs."),

    // Attributes
    attributes: z.array(ProductAttributeValueSchema).nullable().optional().describe("Product attribute values referencing category attribute definitions."),

    // Tax
    taxRuleIds: z.array(z.string()).nullable().optional().describe("Tax rule IDs applicable to this product. Overrides category tax settings."),

    // Business Management
    isActive: z.boolean().default(true).describe("Whether product is active and available for sale. Inactive products are hidden."),
    displayOrder: z.number().int().nullable().optional().describe("Numeric order for product display within its category."),

    // Ordering Analytics (Read Model only)
    orderCount: z.number().int().nonnegative().nullable().optional().describe("Total orders for this product (all time). Computed server-side."),
    recentOrderCount: z.number().int().nonnegative().nullable().optional().describe("Orders for this product in the last 30 days. Computed server-side."),
    lastOrderedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this product. Computed server-side."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new attribute definition.
 * Omits auto-generated fields.
 */
export const CreateAttributeDefSchema = AttributeDefSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing attribute definition.
 * All fields optional except id (required).
 */
export const UpdateAttributeDefSchema = CreateAttributeDefSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the AttributeDef to update"),
});

/**
 * Schema for creating a new product category.
 * Omits auto-generated fields.
 */
export const CreateProductCategorySchema = ProductCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
});

/**
 * Schema for updating an existing product category.
 * All fields optional except id (required).
 */
export const UpdateProductCategorySchema = CreateProductCategorySchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ProductCategory to update"),
});

/**
 * Schema for creating a new business product.
 * Omits auto-generated fields, category object, and analytics.
 */
export const CreateBusinessProductSchema = BusinessProductSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    categoryId: true,
    orderCount: true,
    recentOrderCount: true,
    lastOrderedAt: true,
}).safeExtend({
    categoryId: z.string().optional().describe("Category ID this product belongs to"),
    placement: CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
});

/**
 * Schema for updating an existing business product.
 * All fields optional except id (required).
 */
export const UpdateBusinessProductSchema = CreateBusinessProductSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the BusinessProduct to update"),
});

// ============================================================================
// CATALOG SCHEMAS
// ============================================================================

/**
 * Product catalog schema.
 * Represents a category with its list of products.
 *
 * @typedef {Object} ProductCatalog
 * @property {Object} productCategory - The ProductCategory object
 * @property {Array} items - List of products in this category
 */
export const ProductCatalogSchema = z.object({
    productCategory: ProductCategorySchema.describe("The category for this catalog section"),
    items: z.array(BusinessProductSchema).describe("List of products in this category"),
}).describe("Schema representing a product category and its items");

/**
 * Business product catalog schema.
 * Full catalog as array of category sections.
 */
export const BusinessProductCatalogSchema = z.array(ProductCatalogSchema).describe("Schema representing a complete business product catalog");

// ============================================================================
// HIERARCHY SCHEMAS
// ============================================================================

type ProductCategoryBase = z.infer<typeof ProductCategorySchema>;

/**
 * Product category with descendants type.
 * Used when querying categories with nested hierarchy.
 */
export type ProductCategoryWithDescendants = ProductCategoryBase & {
    /** Nested descendant categories */
    descendants?: ProductCategoryWithDescendants[];
    /** Flattened list of descendant category IDs */
    descendantIds?: string[];
    /** Total number of descendants */
    descendantCount?: number;
};

/**
 * Product category with descendants schema.
 * Read model only. Use when ProductCategoryFilters.includeDescendants is true.
 */
export const ProductCategoryWithDescendantsSchema: z.ZodType<ProductCategoryWithDescendants> = z.lazy(() =>
    ProductCategorySchema.safeExtend({
        descendants: z.array(ProductCategoryWithDescendantsSchema).optional()
            .describe("Nested descendant categories"),
        descendantIds: z.array(z.string()).optional()
            .describe("Flattened list of descendant category IDs"),
        descendantCount: z.number().int().nonnegative().optional()
            .describe("Total number of descendants"),
    })
);

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type AttributeDef = z.infer<typeof AttributeDefSchema>;
export type CreateAttributeDef = z.infer<typeof CreateAttributeDefSchema>;
export type UpdateAttributeDef = z.infer<typeof UpdateAttributeDefSchema>;
export type CategoryAttributeBinding = z.infer<typeof CategoryAttributeBindingSchema>;
export type ProductAttributeValue = z.infer<typeof ProductAttributeValueSchema>;
export type ProductCategoryChannelMapping = z.infer<typeof ProductCategoryChannelMappingSchema>;
export type ProductChannelMapping = z.infer<typeof ProductChannelMappingSchema>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type CreateProductCategory = z.infer<typeof CreateProductCategorySchema>;
export type UpdateProductCategory = z.infer<typeof UpdateProductCategorySchema>;
export type BusinessProduct = z.infer<typeof BusinessProductSchema>;
export type CreateBusinessProduct = z.infer<typeof CreateBusinessProductSchema>;
export type UpdateBusinessProduct = z.infer<typeof UpdateBusinessProductSchema>;
export type ProductCatalog = z.infer<typeof ProductCatalogSchema>;
export type BusinessProductCatalog = z.infer<typeof BusinessProductCatalogSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Attribute definition filter options.
 * @interface AttributeDefFilters
 */
export interface AttributeDefFilters {
    /** Text search across name/slug */
    search?: string;
    /** Filter by attribute type */
    type?: AttributeDefType;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Attribute definition sorting options.
 * @interface AttributeDefSorting
 */
export interface AttributeDefSorting {
    /** Field to sort by */
    field: 'name' | 'slug' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Attribute definition query options.
 * @interface AttributeDefQueryOptions
 */
export interface AttributeDefQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: AttributeDefFilters;
    /** Optional sorting */
    sorting?: AttributeDefSorting;
}

/**
 * Product category filter options.
 * @interface ProductCategoryFilters
 */
export interface ProductCategoryFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by parent category ID (null = root categories only) */
    parentId?: string | null;
    /** Whether to include descendant categories in search */
    includeDescendants?: boolean;
    /** Filter by location scope */
    locationScope?: CategoryLocationScope;
    /** Filter by age-restricted status */
    ageRestricted?: boolean;
}

/**
 * Product category sorting options.
 * @interface ProductCategorySorting
 */
export interface ProductCategorySorting {
    /** Field to sort by */
    field: 'name' | 'displayOrder' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Product category query options.
 * @interface ProductCategoryQueryOptions
 */
export interface ProductCategoryQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ProductCategoryFilters;
    /** Optional sorting */
    sorting?: ProductCategorySorting;
}

/**
 * Business product filter options.
 * @interface BusinessProductFilters
 */
export interface BusinessProductFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by category ID */
    categoryId?: string;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by brand name */
    brand?: string;
    /** Filter by brand ID */
    brandId?: string;
    /** Filter by inventory tracking status */
    trackInventory?: boolean;
    /** Filter by price range */
    priceRange?: { min?: number; max?: number; };
    /** Filter products at or below low stock threshold */
    lowStock?: boolean;
    /** Filter by alcoholic status */
    isAlcoholic?: boolean;
    /** Filter by tags */
    tags?: string[];
}

/**
 * Business product sorting options.
 * @interface BusinessProductSorting
 */
export interface BusinessProductSorting {
    /** Field to sort by */
    field: 'name' | 'price' | 'createdAt' | 'displayOrder';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Business product query options.
 * @interface BusinessProductQueryOptions
 */
export interface BusinessProductQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: BusinessProductFilters;
    /** Optional sorting */
    sorting?: BusinessProductSorting;
}
