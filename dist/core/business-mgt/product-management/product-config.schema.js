"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryWithDescendantsSchema = exports.BusinessProductCatalogSchema = exports.ProductCatalogSchema = exports.UpdateBusinessProductSchema = exports.CreateBusinessProductSchema = exports.UpdateProductCategorySchema = exports.CreateProductCategorySchema = exports.UpdateAttributeDefSchema = exports.CreateAttributeDefSchema = exports.BusinessProductSchema = exports.ProductCategorySchema = exports.ProductChannelMappingSchema = exports.ProductCategoryChannelMappingSchema = exports.ProductAttributeValueSchema = exports.CategoryAttributeBindingSchema = exports.AttributeDefSchema = exports.BarcodeFormat = exports.CategoryLocationScope = exports.AttributeDefType = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const display_order_1 = require("../../type-definitions/display-order");
const product_variant_schema_1 = require("./product-variant.schema");
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
var AttributeDefType;
(function (AttributeDefType) {
    AttributeDefType["STRING"] = "string";
    AttributeDefType["NUMBER"] = "number";
    AttributeDefType["BOOLEAN"] = "boolean";
    AttributeDefType["ENUM"] = "enum";
    AttributeDefType["DATE"] = "date";
    AttributeDefType["URL"] = "url";
})(AttributeDefType || (exports.AttributeDefType = AttributeDefType = {}));
/**
 * Category location scope.
 * Determines whether category is inherited across locations or local.
 *
 * @enum {string}
 */
var CategoryLocationScope;
(function (CategoryLocationScope) {
    /** Category is inherited from parent organization */
    CategoryLocationScope["INHERITED"] = "inherited";
    /** Category is local to specific location */
    CategoryLocationScope["LOCAL"] = "local";
})(CategoryLocationScope || (exports.CategoryLocationScope = CategoryLocationScope = {}));
/**
 * Barcode format types.
 * Supported barcode formats for product identifiers.
 *
 * @enum {string}
 */
var BarcodeFormat;
(function (BarcodeFormat) {
    BarcodeFormat["UPC_A"] = "UPC_A";
    BarcodeFormat["UPC_E"] = "UPC_E";
    BarcodeFormat["EAN_13"] = "EAN_13";
    BarcodeFormat["EAN_8"] = "EAN_8";
    BarcodeFormat["CODE_128"] = "CODE_128";
    BarcodeFormat["CODE_39"] = "CODE_39";
    BarcodeFormat["ITF_14"] = "ITF_14";
    BarcodeFormat["QR"] = "QR";
})(BarcodeFormat || (exports.BarcodeFormat = BarcodeFormat = {}));
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
exports.AttributeDefSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1).describe("Attribute name (e.g., 'Voltage', 'Warranty Months'). Used for product specification display."),
    slug: zod_1.default.string().min(1).describe("URL-friendly slug for the attribute. Used for filtering and API queries."),
    type: zod_1.default.enum(AttributeDefType).describe("Attribute value type determining validation and display formatting."),
    unit: zod_1.default.string().nullable().optional().describe("Unit of measurement (e.g., 'V', 'kg', 'cm'). Displayed alongside attribute value."),
    enumValues: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("Allowed values for enum type. Only applicable when type is ENUM."),
    isActive: zod_1.default.boolean().default(true).describe("Whether this attribute definition is active and available for use."),
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
exports.CategoryAttributeBindingSchema = zod_1.default.object({
    attributeDefId: zod_1.default.string().describe("Reference to AttributeDef.id. Links category to organization-level attribute definition."),
    required: zod_1.default.boolean().default(false).describe("Whether this attribute is required for products in this category."),
    displayOrder: zod_1.default.number().int().default(0).describe("Display order for this attribute in the category. Lower numbers appear first."),
}).describe("Category-to-attribute binding with category-specific settings");
/**
 * Product attribute value schema.
 * Stores actual attribute values for products.
 *
 * @typedef {Object} ProductAttributeValue
 * @property {string} attributeDefId - Reference to AttributeDef.id
 * @property {string|number|boolean} value - Attribute value
 */
exports.ProductAttributeValueSchema = zod_1.default.object({
    attributeDefId: zod_1.default.string().describe("Reference to AttributeDef.id. Links value to attribute definition for validation."),
    value: zod_1.default.union([zod_1.default.string(), zod_1.default.number(), zod_1.default.boolean()]).describe("Attribute value. Type must match AttributeDef.type."),
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
exports.ProductCategoryChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., 'shopify', 'amazon'). Platform identifier for external system."),
    externalCategoryId: zod_1.default.string().describe("External category ID for this specific channel. Used for synchronization."),
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
exports.ProductChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., 'shopify', 'amazon'). Platform identifier for external system."),
    externalProductId: zod_1.default.string().describe("External product ID for this specific channel. Used for order reconciliation."),
    externalCategoryId: zod_1.default.string().nullable().optional().describe("External category ID in this channel, if needed for sync payloads."),
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
exports.ProductCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    productRevisionId: zod_1.default.string().optional().describe("Optional product revision ID for version-scoped data. Ensures category applies to specific catalog version."),
    parentId: zod_1.default.string().nullable().optional().describe("Parent category ID for nested hierarchy. Null for root categories."),
    name: zod_1.default.string().min(1, "Category name is required").describe("Category name for product organization (e.g., Electronics, Clothing). Used by AI Powered Services when presenting product options."),
    slug: zod_1.default.string().min(1).nullable().optional().describe("URL-friendly slug for the category. Used for SEO and deep linking."),
    description: zod_1.default.string().nullable().optional().describe("Category description providing context about products included. Helps customers navigate the catalog."),
    channelMappings: zod_1.default.array(exports.ProductCategoryChannelMappingSchema).nullable().optional().describe("Per-channel category ID mappings for external platform synchronization."),
    // Media
    iconId: zod_1.default.string().nullable().optional().describe("Icon image ID for category. Used in navigation menus and category lists."),
    heroImageId: zod_1.default.string().nullable().optional().describe("Hero/banner image ID for category. Used on category landing pages."),
    // Display
    displayOrder: zod_1.default.number().int().nullable().optional().describe("Numeric order for category display in catalog. Lower numbers appear first."),
    isDefault: zod_1.default.boolean().default(false).describe("Whether this is the default category for uncategorized products."),
    // Attribute Bindings
    attributeBindings: zod_1.default.array(exports.CategoryAttributeBindingSchema).nullable().optional().describe("Attribute bindings defining which attributes apply to products in this category."),
    // Default Axes
    defaultAxisIds: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("Default variant axis IDs for products in this category (e.g., Size, Color)."),
    // Distribution
    defaultChannelIds: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("Default channel IDs for products in this category. Products inherit these channels."),
    // Tax & Margin
    taxClassId: zod_1.default.string().nullable().optional().describe("Tax class ID for products in this category. Determines tax calculation rules."),
    targetMargin: zod_1.default.number().min(0).max(1).nullable().optional().describe("Target profit margin (0-1) for products in this category. Used for pricing guidance."),
    // Business Rules
    ageRestricted: zod_1.default.boolean().nullable().optional().describe("Whether products in this category are age-restricted. Triggers age verification."),
    requireImage: zod_1.default.boolean().nullable().optional().describe("Whether products in this category must have an image before publishing."),
    // Location Scope
    locationScope: zod_1.default.enum(CategoryLocationScope).nullable().optional().describe("Whether category is inherited across locations or local to specific location."),
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
exports.BusinessProductSchema = base_schema_1.BaseModelSchema.safeExtend({
    productRevisionId: zod_1.default.string().optional().describe("Optional product revision ID for version-scoped data. Ensures product applies to specific catalog version."),
    channelMappings: zod_1.default.array(exports.ProductChannelMappingSchema).nullable().optional().describe("Per-channel product ID mappings for external platform synchronization."),
    name: zod_1.default.string().min(1, "Product name is required").describe("Display name of the product shown to customers. Used by AI Powered Services in order conversations."),
    description: zod_1.default.string().nullable().optional().describe("Detailed product description including features and benefits. Enables AI-powered recommendations."),
    imageUrl: zod_1.default.url().nullable().optional().describe("Public image URL for the product. Primary image shown in catalog and search results."),
    imageUrls: zod_1.default.array(zod_1.default.url()).nullable().optional().describe("Public image URLs for the product gallery. Additional images for product detail page."),
    tags: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("List of product tags for search and filtering. Enables faceted navigation."),
    // Pricing
    price: zod_1.default.number().nonnegative().describe("Base price for this product in the account's currency. Used for order pricing calculations."),
    cost: zod_1.default.number().nonnegative().nullable().optional().describe("Cost of goods for margin calculation. Used for profitability reporting."),
    compareAtPrice: zod_1.default.number().nonnegative().nullable().optional().describe("Original price for sale/strikethrough display. Shows discount to customers."),
    // Identifiers
    sku: zod_1.default.string().nullable().optional().describe("Stock Keeping Unit identifier for inventory tracking. Unique alphanumeric code for warehouse operations."),
    skuPattern: zod_1.default.string().nullable().optional().describe("SKU template/pattern for generating variant SKUs (e.g., 'PROD-{size}-{color}')."),
    barcode: zod_1.default.string().nullable().optional().describe("Product barcode for point-of-sale scanning and inventory management."),
    barcodeFormat: zod_1.default.enum(BarcodeFormat).nullable().optional().describe("Barcode format used for product identifiers (UPC-A, EAN-13, etc.)."),
    // Classification
    isAlcoholic: zod_1.default.boolean().nullable().optional().default(false).describe("Whether this product is alcoholic. Triggers age verification requirements."),
    categoryId: zod_1.default.string().describe("References ProductCategory this product belongs to. Used for organization and browsing."),
    category: exports.ProductCategorySchema.nullable().optional().describe("Populated ProductCategory object. Not required during creation."),
    brand: zod_1.default.string().nullable().optional().describe("Product brand or manufacturer name for brand-based filtering."),
    brandId: zod_1.default.string().nullable().optional().describe("Product brand ID for linking to brand entity."),
    // Inventory
    trackInventory: zod_1.default.boolean().default(false).describe("Whether inventory tracking is enabled. When true, stockQuantity is enforced."),
    stockQuantity: zod_1.default.number().int().nonnegative().nullable().optional().describe("Current available stock quantity. Updated by orders and adjustments."),
    lowStockThreshold: zod_1.default.number().int().nonnegative().nullable().optional().describe("Stock level that triggers low inventory alerts."),
    stockedAt: zod_1.default.number().int().nullable().optional().describe("Unix timestamp when stock was last received or updated."),
    reorderPoint: zod_1.default.number().int().nonnegative().nullable().optional().describe("Inventory threshold that should trigger replenishment order."),
    leadTime: zod_1.default.number().int().nonnegative().nullable().optional().describe("Supplier lead time in days. Used for reorder timing."),
    supplierId: zod_1.default.string().nullable().optional().describe("Preferred supplier ID for this product."),
    // Physical Attributes
    weight: zod_1.default.number().positive().nullable().optional().describe("Product weight for shipping calculations and carrier integration."),
    dimensions: zod_1.default.object({
        length: zod_1.default.number().positive().describe("Product length in specified units."),
        width: zod_1.default.number().positive().describe("Product width in specified units."),
        height: zod_1.default.number().positive().describe("Product height in specified units."),
        unit: zod_1.default.enum(['inches', 'cm']).default('inches').describe("Measurement unit for dimensions."),
    }).nullable().optional().describe("Physical dimensions for shipping cost estimation and warehouse management."),
    // Shipping
    shippingClassId: zod_1.default.string().nullable().optional().describe("Shipping class ID for the product. Determines shipping rates and methods."),
    HSCode: zod_1.default.string().nullable().optional().describe("Harmonized System Code for international shipping and customs."),
    // Attributes
    attributes: zod_1.default.array(exports.ProductAttributeValueSchema).nullable().optional().describe("Product attribute values referencing category attribute definitions."),
    // Tax
    taxRuleIds: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("Tax rule IDs applicable to this product. Overrides category tax settings."),
    // Business Management
    isActive: zod_1.default.boolean().default(true).describe("Whether product is active and available for sale. Inactive products are hidden."),
    displayOrder: zod_1.default.number().int().nullable().optional().describe("Numeric order for product display within its category."),
    // Ordering Analytics (Read Model only)
    orderCount: zod_1.default.number().int().nonnegative().nullable().optional().describe("Total orders for this product (all time). Computed server-side."),
    recentOrderCount: zod_1.default.number().int().nonnegative().nullable().optional().describe("Orders for this product in the last 30 days. Computed server-side."),
    lastOrderedAt: zod_1.default.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this product. Computed server-side."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new attribute definition.
 * Omits auto-generated fields.
 */
exports.CreateAttributeDefSchema = exports.AttributeDefSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing attribute definition.
 * All fields optional except id (required).
 */
exports.UpdateAttributeDefSchema = exports.CreateAttributeDefSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the AttributeDef to update"),
});
/**
 * Schema for creating a new product category.
 * Omits auto-generated fields.
 */
exports.CreateProductCategorySchema = exports.ProductCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
});
/**
 * Schema for updating an existing product category.
 * All fields optional except id (required).
 */
exports.UpdateProductCategorySchema = exports.CreateProductCategorySchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ProductCategory to update"),
});
/**
 * Schema for creating a new business product.
 * Omits auto-generated fields, category object, and analytics.
 *
 * @remarks
 * A product must be created with at least one variant. Nested variants use the
 * product variant create schema with `productId` omitted; the parent link is
 * assigned by the server once the product is created.
 */
exports.CreateBusinessProductSchema = exports.BusinessProductSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    categoryId: true,
    orderCount: true,
    recentOrderCount: true,
    lastOrderedAt: true,
}).safeExtend({
    categoryId: zod_1.default.string().optional().describe("Category ID this product belongs to"),
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
    variants: zod_1.default.array(product_variant_schema_1.CreateProductVariantSchema.omit({ productId: true })).min(1, "A product must have at least one variant").describe("Variants to create with this product. At least one is required; the parent product ID is assigned by the server."),
});
/**
 * Schema for updating an existing business product.
 * All fields optional except id (required).
 */
exports.UpdateBusinessProductSchema = exports.CreateBusinessProductSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the BusinessProduct to update"),
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
exports.ProductCatalogSchema = zod_1.default.object({
    productCategory: exports.ProductCategorySchema.describe("The category for this catalog section"),
    items: zod_1.default.array(exports.BusinessProductSchema).describe("List of products in this category"),
}).describe("Schema representing a product category and its items");
/**
 * Business product catalog schema.
 * Full catalog as array of category sections.
 */
exports.BusinessProductCatalogSchema = zod_1.default.array(exports.ProductCatalogSchema).describe("Schema representing a complete business product catalog");
/**
 * Product category with descendants schema.
 * Read model only. Use when ProductCategoryFilters.includeDescendants is true.
 */
exports.ProductCategoryWithDescendantsSchema = zod_1.default.lazy(() => exports.ProductCategorySchema.safeExtend({
    descendants: zod_1.default.array(exports.ProductCategoryWithDescendantsSchema).optional()
        .describe("Nested descendant categories"),
    descendantIds: zod_1.default.array(zod_1.default.string()).optional()
        .describe("Flattened list of descendant category IDs"),
    descendantCount: zod_1.default.number().int().nonnegative().optional()
        .describe("Total number of descendants"),
}));
