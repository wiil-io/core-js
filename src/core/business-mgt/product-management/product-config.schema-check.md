import z from "zod";
import { BaseModelSchemaWithAudit } from "../../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../../definitions/display-order";

// ============================================================================
// ATTRIBUTE DEFINITION SCHEMA
// Organization-level attribute definitions for products
// ============================================================================

export enum AttributeDefType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ENUM = "enum",
    DATE = "date",
    URL = "url",
}

export const AttributeDefSchema = BaseModelSchemaWithAudit.safeExtend({
    organizationId: z.string().describe("Business account ID"),
    name: z.string().min(1).describe("Attribute name (e.g., 'Voltage', 'Warranty Months')"),
    slug: z.string().min(1).describe("URL-friendly slug for the attribute"),
    type: z.enum(AttributeDefType).describe("Attribute value type"),
    unit: z.string().nullable().optional().describe("Unit of measurement (e.g., 'V', 'kg', 'cm')"),
    enumValues: z.array(z.string()).nullable().optional().describe("Allowed values for enum type"),
    isActive: z.boolean().default(true).describe("Whether this attribute definition is active"),
});

export type AttributeDef = z.infer<typeof AttributeDefSchema>;

// ============================================================================
// CATEGORY ATTRIBUTE BINDING SCHEMA
// Links categories to attribute definitions with category-specific settings
// ============================================================================

export const CategoryAttributeBindingSchema = z.object({
    attributeDefId: z.string().describe("Reference to AttributeDef.id"),
    required: z.boolean().default(false).describe("Whether this attribute is required for products in this category"),
    displayOrder: z.number().int().default(0).describe("Display order for this attribute in the category"),
}).describe("Category-to-attribute binding with category-specific settings");

export type CategoryAttributeBinding = z.infer<typeof CategoryAttributeBindingSchema>;

// ============================================================================
// ATTRIBUTE DEF CREATE/UPDATE SCHEMAS
// ============================================================================

export const CreateAttributeDefSchema = AttributeDefSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    createdBy: true,
    updatedBy: true,
    deletedAt: true,
    deletedBy: true,
    uniqueKey: true,
    version: true,
});

export const UpdateAttributeDefSchema = CreateAttributeDefSchema.partial().safeExtend({
    id: z.string(),
});

export type CreateAttributeDef = z.infer<typeof CreateAttributeDefSchema>;
export type UpdateAttributeDef = z.infer<typeof UpdateAttributeDefSchema>;

export const ProductAttributeValueSchema = z.object({
    attributeDefId: z.string().describe("Reference to AttributeDef.id"),
    value: z.union([z.string(), z.number(), z.boolean()]).describe("Attribute value"),
}).describe("Product attribute value referencing a category attribute definition");

export type ProductAttributeValue = z.infer<typeof ProductAttributeValueSchema>;

// ============================================================================
// CATEGORY LOCATION SCOPE
// ============================================================================

export enum CategoryLocationScope {
    INHERITED = "inherited",
    LOCAL = "local",
}

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

export const ProductCategoryChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalCategoryId: z.string().describe("External category ID for this specific channel"),
}).describe("Per-channel external category ID mapping");

export const ProductChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalProductId: z.string().describe("External product ID for this specific channel"),
    externalCategoryId: z.string().nullable().optional().describe("External category ID in this channel, if needed for sync payloads"),
}).describe("Per-channel external product ID mapping");

// ============================================================================
// PRODUCT CATEGORY SCHEMA
// ============================================================================

export const ProductCategorySchema = BaseModelSchemaWithAudit.safeExtend({
    organizationId: z.string().describe("Business account ID"),
    productRevisionId: z.string().optional().describe("Optional product revision ID for version-scoped data"),
    parentId: z.string().nullable().optional().describe("Parent category ID for nested hierarchy"),
    name: z.string().min(1, "Category name is required").describe("Category name (e.g., Electronics, Clothing)"),
    slug: z.string().min(1).nullable().optional().describe("URL-friendly slug for the category"),
    description: z.string().nullable().optional().describe("Category description"),
    channelMappings: z.array(ProductCategoryChannelMappingSchema).nullable().optional().describe("Per-channel category ID mappings"),

    // Media
    iconId: z.string().nullable().optional().describe("Icon image ID for category"),
    heroImageId: z.string().nullable().optional().describe("Hero/banner image ID for category"),

    // Display
    displayOrder: z.number().int().nullable().optional().describe("Display order in catalog"),
    isDefault: z.boolean().default(false).describe("Whether this is the default category"),

    // Attribute Bindings - references to organization-level attribute definitions
    attributeBindings: z.array(CategoryAttributeBindingSchema).nullable().optional().describe("Attribute bindings for products in this category"),

    // Default Axes - variant axes that products in this category typically use
    defaultAxisIds: z.array(z.string()).nullable().optional().describe("Default variant axis IDs for products in this category"),

    // Distribution
    defaultChannelIds: z.array(z.string()).nullable().optional().describe("Default channel IDs for products in this category"),

    // Tax & Margin
    taxClassId: z.string().nullable().optional().describe("Tax class ID for products in this category"),
    targetMargin: z.number().min(0).max(1).nullable().optional().describe("Target profit margin (0-1) for products in this category"),

    // Business Rules
    ageRestricted: z.boolean().nullable().optional().describe("Whether products in this category are age-restricted"),
    requireImage: z.boolean().nullable().optional().describe("Whether products in this category must have an image"),

    // Location Scope
    locationScope: z.enum(CategoryLocationScope).nullable().optional().describe("Whether category is inherited across locations or local"),
});

export const BusinessProductSchema = BaseModelSchemaWithAudit.safeExtend({
    organizationId: z.string().describe("Business account ID"),
    productRevisionId: z.string().optional().describe("Optional product revision ID for version-scoped data"),
    channelMappings: z.array(ProductChannelMappingSchema).nullable().optional().describe("Per-channel product ID mappings"),
    name: z.string().min(1, "Product name is required").describe("Product name"),
    description: z.string().nullable().optional().describe("Product description"),
    imageUrl: z.url().nullable().optional().describe("Public image URL for the product"),
    imageUrls: z.array(z.url()).nullable().optional().describe("Public image URLs for the product gallery"),
    tags: z.array(z.string()).nullable().optional().describe("List of product tags for search and filtering"),

    // Pricing
    price: z.number().nonnegative().describe("Product price"),
    cost: z.number().nonnegative().nullable().optional().describe("Cost of goods (for margin calculation)"),
    compareAtPrice: z.number().nonnegative().nullable().optional().describe("Original price for sale/strikethrough display"),

    // Identifiers
    skuPattern: z.string().nullable().optional().describe("SKU template/pattern used for generating variant SKUs"),
    barcodeFormat: z.enum(BarcodeFormat).nullable().optional().describe("Barcode format used for product identifiers"),

    isAlcoholic: z.boolean().nullable().optional().default(false).describe("Whether this product is alcoholic"),
    categoryId: z.string().describe("ID of the category this product belongs to"),
    category: ProductCategorySchema.nullable().optional().describe("Product category"),
    brand: z.string().nullable().optional().describe("Product brand name"),
    brandId: z.string().nullable().optional().describe("Product brand ID"),

    // Inventory
    trackInventory: z.boolean().default(false).describe("Whether to track inventory for this product"),
    stockedAt: z.number().int().nullable().optional().describe("Unix timestamp when stock was last received or updated"),
    reorderPoint: z.number().int().nonnegative().nullable().optional().describe("Inventory threshold that should trigger replenishment"),
    leadTime: z.number().int().nonnegative().nullable().optional().describe("Supplier lead time in days"),
    supplierId: z.string().nullable().optional().describe("Preferred supplier ID for this product"),

    // Business Management
    isActive: z.boolean().default(true).describe("Whether product is available for sale"),
    displayOrder: z.number().int().nullable().optional().describe("Display order in category"),

    // Ordering analytics
    orderCount: z.number().int().nonnegative().nullable().optional().describe("Total orders for this product (all time)"),
    recentOrderCount: z.number().int().nonnegative().nullable().optional().describe("Orders for this product in the last 30 days"),
    lastOrderedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this product"),

    //Shipping info
    shippingClassId: z.string().nullable().optional().describe("Shipping class ID for the product"),
    HSCode: z.string().nullable().optional().describe("Harmonized System Code for international shipping"),

    // Product attributes (linked to category AttributeDef)
    attributes: z.array(ProductAttributeValueSchema).nullable().optional().describe("Product attribute values referencing category attribute definitions"),

    // Tax
    taxRuleIds: z.array(z.string()).nullable().optional().describe("Tax rule IDs applicable to this product"),

});

export const CreateProductCategorySchema = ProductCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    createdBy: true,
    updatedBy: true,
    deletedAt: true,
    deletedBy: true,
    uniqueKey: true,
    version: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional(),
});

export const UpdateProductCategorySchema = CreateProductCategorySchema.partial().safeExtend({
    id: z.string(),

});

// Create schemas (omit generated fields)
export const CreateBusinessProductSchema = BusinessProductSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    createdBy: true,
    updatedBy: true,
    deletedAt: true,
    deletedBy: true,
    uniqueKey: true,
    version: true,
    category: true,

    categoryId: true,
}).safeExtend({
    categoryId: z.string().describe("ID of the category this product belongs to"),
    category: z.string().nullable().optional().describe("Product category this product belongs to (for create/update only - can specify by ID or name)"),
    placement: CreateDisplayOrderPlacementSchema.optional(),
});



// Update schemas (make all fields optional except id)
export const UpdateBusinessProductSchema = CreateBusinessProductSchema.partial().omit({
    category: true,
}).safeExtend({
    id: z.string(),
});

type ProductCategoryBase = z.infer<typeof ProductCategorySchema>;

export type ProductCategoryWithDescendants = ProductCategoryBase & {
    descendants?: ProductCategoryWithDescendants[];
    descendantIds?: string[];
    descendantCount?: number;
};

// Read model only. Use when ProductCategoryFilters.includeDescendants is true.
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

// Type exports
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type ProductCategoryChannelMapping = z.infer<typeof ProductCategoryChannelMappingSchema>;
export type ProductChannelMapping = z.infer<typeof ProductChannelMappingSchema>;
export type CreateProductCategory = z.infer<typeof CreateProductCategorySchema>;
export type UpdateProductCategory = z.infer<typeof UpdateProductCategorySchema>;
export type BusinessProduct = z.infer<typeof BusinessProductSchema>;
export type CreateBusinessProduct = z.infer<typeof CreateBusinessProductSchema>;
export type UpdateBusinessProduct = z.infer<typeof UpdateBusinessProductSchema>;


export const ProductCatalogSchema = z.object({
    productCategory: ProductCategorySchema,
    items: z.array(BusinessProductSchema).describe("List of products in this category"),
}).describe("Schema representing a product category and its items");

export const BusinessProductCatalogSchema = z.array(ProductCatalogSchema).describe("Schema representing a business product catalog");

export type ProductCatalog = z.infer<typeof ProductCatalogSchema>;
export type BusinessProductCatalog = z.infer<typeof BusinessProductCatalogSchema>;


// Query Options
export interface BusinessProductFilters {
    search?: string;
    locationId?: string;
    categoryId?: string;
    isActive?: boolean;
    brand?: string;
    trackInventory?: boolean;
    priceRange?: { min?: number; max?: number; };
    includeDeleted?: boolean;
}

export interface BusinessProductSorting {
    field: 'name' | 'price' | 'createdAt' | 'displayOrder';
    direction: 'asc' | 'desc';
}

export interface BusinessProductQueryOptions {
    page: number;
    pageSize: number;
    filters?: BusinessProductFilters;
    sorting?: BusinessProductSorting;
}

// Category Query Options
export interface ProductCategoryFilters {
    search?: string;
    organizationId?: string;
    parentId?: string | null;  // null = root categories only
    includeDescendants?: boolean; // whether to include descendant categories in search
    locationScope?: CategoryLocationScope;
    ageRestricted?: boolean;
    includeDeleted?: boolean;
}

export interface ProductCategorySorting {
    field: 'name' | 'displayOrder' | 'createdAt';
    direction: 'asc' | 'desc';
}

export interface ProductCategoryQueryOptions {
    page: number;
    pageSize: number;
    filters?: ProductCategoryFilters;
    sorting?: ProductCategorySorting;
}

// Attribute Definition Query Options
export interface AttributeDefFilters {
    search?: string;
    organizationId?: string;
    type?: AttributeDefType;
    isActive?: boolean;
    includeDeleted?: boolean;
}

export interface AttributeDefSorting {
    field: 'name' | 'slug' | 'createdAt';
    direction: 'asc' | 'desc';
}

export interface AttributeDefQueryOptions {
    page: number;
    pageSize: number;
    filters?: AttributeDefFilters;
    sorting?: AttributeDefSorting;
}

