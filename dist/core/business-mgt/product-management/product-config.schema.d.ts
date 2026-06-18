import z from "zod";
/**
 * @fileoverview Product configuration schema definitions for business management.
 * @module business-mgt/product-config
 *
 * Includes categories, products, attribute definitions, and channel mappings
 * for multi-platform product catalog management.
 */
/**
 * Attribute definition type.
 * Determines the data type of attribute values.
 *
 * @enum {string}
 */
export declare enum AttributeDefType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ENUM = "enum",
    DATE = "date",
    URL = "url"
}
/**
 * Category location scope.
 * Determines whether category is inherited across locations or local.
 *
 * @enum {string}
 */
export declare enum CategoryLocationScope {
    /** Category is inherited from parent organization */
    INHERITED = "inherited",
    /** Category is local to specific location */
    LOCAL = "local"
}
/**
 * Barcode format types.
 * Supported barcode formats for product identifiers.
 *
 * @enum {string}
 */
export declare enum BarcodeFormat {
    UPC_A = "UPC_A",
    UPC_E = "UPC_E",
    EAN_13 = "EAN_13",
    EAN_8 = "EAN_8",
    CODE_128 = "CODE_128",
    CODE_39 = "CODE_39",
    ITF_14 = "ITF_14",
    QR = "QR"
}
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
export declare const AttributeDefSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    slug: z.ZodString;
    type: z.ZodEnum<typeof AttributeDefType>;
    unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enumValues: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Category attribute binding schema.
 * Links categories to attribute definitions with category-specific settings.
 *
 * @typedef {Object} CategoryAttributeBinding
 * @property {string} attributeDefId - Reference to AttributeDef.id
 * @property {boolean} required - Whether attribute is required for products
 * @property {number} displayOrder - Display order for this attribute
 */
export declare const CategoryAttributeBindingSchema: z.ZodObject<{
    attributeDefId: z.ZodString;
    required: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Product attribute value schema.
 * Stores actual attribute values for products.
 *
 * @typedef {Object} ProductAttributeValue
 * @property {string} attributeDefId - Reference to AttributeDef.id
 * @property {string|number|boolean} value - Attribute value
 */
export declare const ProductAttributeValueSchema: z.ZodObject<{
    attributeDefId: z.ZodString;
    value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
}, z.core.$strip>;
/**
 * Product category channel mapping schema.
 * Maps categories to external platform identifiers.
 *
 * @typedef {Object} ProductCategoryChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalCategoryId - External category ID
 */
export declare const ProductCategoryChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalCategoryId: z.ZodString;
}, z.core.$strip>;
/**
 * Product channel mapping schema.
 * Maps products to external platform identifiers.
 *
 * @typedef {Object} ProductChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalProductId - External product ID
 * @property {string} [externalCategoryId] - External category ID in channel
 */
export declare const ProductChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalProductId: z.ZodString;
    externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
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
export declare const ProductCategorySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>;
    iconId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    heroImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    attributeBindings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        attributeDefId: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    defaultAxisIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    defaultChannelIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    taxClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ageRestricted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    requireImage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>;
}, z.core.$strip>;
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
export declare const BusinessProductSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalProductId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    price: z.ZodNumber;
    cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    skuPattern: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcodeFormat: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof BarcodeFormat>>>;
    isAlcoholic: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    categoryId: z.ZodString;
    category: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        productRevisionId: z.ZodOptional<z.ZodString>;
        parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
        iconId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        heroImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        attributeBindings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            attributeDefId: z.ZodString;
            required: z.ZodDefault<z.ZodBoolean>;
            displayOrder: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        defaultAxisIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        defaultChannelIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        taxClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        targetMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ageRestricted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        requireImage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>;
    }, z.core.$strip>>>;
    brand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    brandId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    trackInventory: z.ZodDefault<z.ZodBoolean>;
    stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    stockedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reorderPoint: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    leadTime: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    supplierId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>>;
    shippingClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    HSCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        attributeDefId: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    }, z.core.$strip>>>>;
    taxRuleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Schema for creating a new attribute definition.
 * Omits auto-generated fields.
 */
export declare const CreateAttributeDefSchema: z.ZodObject<{
    type: z.ZodEnum<typeof AttributeDefType>;
    name: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodString;
    enumValues: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing attribute definition.
 * All fields optional except id (required).
 */
export declare const UpdateAttributeDefSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<typeof AttributeDefType>>;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    unit: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    slug: z.ZodOptional<z.ZodString>;
    enumValues: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new product category.
 * Omits auto-generated fields.
 */
export declare const CreateProductCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iconId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    heroImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attributeBindings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        attributeDefId: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    defaultAxisIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    defaultChannelIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    taxClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ageRestricted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    requireImage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>;
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing product category.
 * All fields optional except id (required).
 */
export declare const UpdateProductCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>>;
    productRevisionId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    slug: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    parentId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    iconId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    heroImageId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    attributeBindings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        attributeDefId: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>>;
    defaultAxisIds: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    defaultChannelIds: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    taxClassId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    targetMargin: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    ageRestricted: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    requireImage: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    locationScope: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new business product.
 * Omits auto-generated fields, category object, and analytics.
 *
 * @remarks
 * A product must be created with at least one variant. Nested variants use the
 * product variant create schema with `productId` omitted; the parent link is
 * assigned by the server once the product is created.
 */
export declare const CreateBusinessProductSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodNumber;
    tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalProductId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>>;
    skuPattern: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcodeFormat: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof BarcodeFormat>>>;
    isAlcoholic: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    brand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    brandId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    trackInventory: z.ZodDefault<z.ZodBoolean>;
    stockedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reorderPoint: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    leadTime: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    supplierId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shippingClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    HSCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        attributeDefId: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    }, z.core.$strip>>>>;
    taxRuleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    categoryId: z.ZodOptional<z.ZodString>;
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
    variants: z.ZodArray<z.ZodObject<{
        isDefault: z.ZodDefault<z.ZodBoolean>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalVariantId: z.ZodString;
            externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        productRevisionId: z.ZodOptional<z.ZodString>;
        axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../..").InventoryUnit>>>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            length: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            unit: z.ZodDefault<z.ZodEnum<{
                cm: "cm";
                inches: "inches";
            }>>;
        }, z.core.$strip>>>;
        imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing business product.
 * All fields optional except id (required).
 */
export declare const UpdateBusinessProductSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    price: z.ZodOptional<z.ZodNumber>;
    tags: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalProductId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodURL>>>;
    imageUrls: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>>;
    productRevisionId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    sku: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    barcode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    cost: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    compareAtPrice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    stockQuantity: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    lowStockThreshold: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    weight: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    dimensions: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>>>;
    skuPattern: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    barcodeFormat: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof BarcodeFormat>>>>;
    isAlcoholic: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>>;
    brand: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    brandId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    trackInventory: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    stockedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    reorderPoint: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    leadTime: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    supplierId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    shippingClassId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    HSCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    attributes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        attributeDefId: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    }, z.core.$strip>>>>>;
    taxRuleIds: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    categoryId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        isDefault: z.ZodDefault<z.ZodBoolean>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalVariantId: z.ZodString;
            externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        productRevisionId: z.ZodOptional<z.ZodString>;
        axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../..").InventoryUnit>>>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            length: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            unit: z.ZodDefault<z.ZodEnum<{
                cm: "cm";
                inches: "inches";
            }>>;
        }, z.core.$strip>>>;
        imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Product catalog schema.
 * Represents a category with its list of products.
 *
 * @typedef {Object} ProductCatalog
 * @property {Object} productCategory - The ProductCategory object
 * @property {Array} items - List of products in this category
 */
export declare const ProductCatalogSchema: z.ZodObject<{
    productCategory: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        productRevisionId: z.ZodOptional<z.ZodString>;
        parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
        iconId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        heroImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        attributeBindings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            attributeDefId: z.ZodString;
            required: z.ZodDefault<z.ZodBoolean>;
            displayOrder: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        defaultAxisIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        defaultChannelIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        taxClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        targetMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ageRestricted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        requireImage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>;
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        productRevisionId: z.ZodOptional<z.ZodString>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalProductId: z.ZodString;
            externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
        tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        price: z.ZodNumber;
        cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        skuPattern: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcodeFormat: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof BarcodeFormat>>>;
        isAlcoholic: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        categoryId: z.ZodString;
        category: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            productRevisionId: z.ZodOptional<z.ZodString>;
            parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodString;
            slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalCategoryId: z.ZodString;
            }, z.core.$strip>>>>;
            iconId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            heroImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
            attributeBindings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                attributeDefId: z.ZodString;
                required: z.ZodDefault<z.ZodBoolean>;
                displayOrder: z.ZodDefault<z.ZodNumber>;
            }, z.core.$strip>>>>;
            defaultAxisIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            defaultChannelIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            taxClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            targetMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ageRestricted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            requireImage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>;
        }, z.core.$strip>>>;
        brand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        brandId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        trackInventory: z.ZodDefault<z.ZodBoolean>;
        stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        reorderPoint: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        leadTime: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        supplierId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            length: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            unit: z.ZodDefault<z.ZodEnum<{
                cm: "cm";
                inches: "inches";
            }>>;
        }, z.core.$strip>>>;
        shippingClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        HSCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            attributeDefId: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
        }, z.core.$strip>>>>;
        taxRuleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Business product catalog schema.
 * Full catalog as array of category sections.
 */
export declare const BusinessProductCatalogSchema: z.ZodArray<z.ZodObject<{
    productCategory: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        productRevisionId: z.ZodOptional<z.ZodString>;
        parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
        iconId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        heroImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        attributeBindings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            attributeDefId: z.ZodString;
            required: z.ZodDefault<z.ZodBoolean>;
            displayOrder: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        defaultAxisIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        defaultChannelIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        taxClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        targetMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ageRestricted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        requireImage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>;
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        productRevisionId: z.ZodOptional<z.ZodString>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalProductId: z.ZodString;
            externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
        tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        price: z.ZodNumber;
        cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        skuPattern: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcodeFormat: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof BarcodeFormat>>>;
        isAlcoholic: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        categoryId: z.ZodString;
        category: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            productRevisionId: z.ZodOptional<z.ZodString>;
            parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodString;
            slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalCategoryId: z.ZodString;
            }, z.core.$strip>>>>;
            iconId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            heroImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
            attributeBindings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                attributeDefId: z.ZodString;
                required: z.ZodDefault<z.ZodBoolean>;
                displayOrder: z.ZodDefault<z.ZodNumber>;
            }, z.core.$strip>>>>;
            defaultAxisIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            defaultChannelIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            taxClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            targetMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ageRestricted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            requireImage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CategoryLocationScope>>>;
        }, z.core.$strip>>>;
        brand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        brandId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        trackInventory: z.ZodDefault<z.ZodBoolean>;
        stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        reorderPoint: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        leadTime: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        supplierId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            length: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            unit: z.ZodDefault<z.ZodEnum<{
                cm: "cm";
                inches: "inches";
            }>>;
        }, z.core.$strip>>>;
        shippingClassId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        HSCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            attributeDefId: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
        }, z.core.$strip>>>>;
        taxRuleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
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
export declare const ProductCategoryWithDescendantsSchema: z.ZodType<ProductCategoryWithDescendants>;
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
    priceRange?: {
        min?: number;
        max?: number;
    };
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
export {};
