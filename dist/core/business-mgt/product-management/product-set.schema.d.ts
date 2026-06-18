import z from "zod";
/**
 * @fileoverview Product set schema definitions for bundled products.
 * @module business-mgt/product-set
 *
 * Product sets enable bundling products into packages with flexible pricing
 * and targeting strategies. Sets can use fixed pricing or sum of component prices.
 */
/**
 * Product set pricing mode.
 * Determines how the set price is calculated.
 *
 * @enum {string}
 * @property {string} FIXED - Set has a fixed price regardless of component prices
 * @property {string} SUM_OF_ITEMS - Set price is sum of included product prices
 */
export declare enum ProductSetPricingMode {
    /** Set has a fixed price regardless of component prices */
    FIXED = "FIXED",
    /** Set price is sum of included product prices */
    SUM_OF_ITEMS = "SUM_OF_ITEMS"
}
/**
 * Product set targeting mode.
 * Determines how products are selected for the set.
 *
 * @enum {string}
 * @property {string} EXPLICIT - Set includes explicitly listed products
 * @property {string} SELECTOR - Set includes products matching selector criteria
 */
export declare enum ProductSetTargetingMode {
    /** Set includes explicitly listed products */
    EXPLICIT = "EXPLICIT",
    /** Set includes products matching selector criteria */
    SELECTOR = "SELECTOR"
}
/**
 * Product set channel mapping schema.
 * Maps product sets to external platform identifiers.
 *
 * @typedef {Object} ProductSetChannelMapping
 * @property {string} channelId - Platform identifier (e.g., "shopify", "amazon")
 * @property {string} externalProductSetId - Set ID in external platform
 */
export declare const ProductSetChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalProductSetId: z.ZodString;
}, z.core.$strip>;
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
export declare const ProductSetItemSchema: z.ZodObject<{
    productId: z.ZodString;
    productVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantity: z.ZodNumber;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const ProductSetSelectorSchema: z.ZodObject<{
    productIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
    productIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
    allProducts: z.ZodDefault<z.ZodBoolean>;
    quantityExact: z.ZodOptional<z.ZodNumber>;
    quantityMin: z.ZodOptional<z.ZodNumber>;
    quantityMax: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const ProductSetSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalProductSetId: z.ZodString;
    }, z.core.$strip>>>>;
    targetingMode: z.ZodDefault<z.ZodEnum<typeof ProductSetTargetingMode>>;
    pricingMode: z.ZodDefault<z.ZodEnum<typeof ProductSetPricingMode>>;
    fixedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    items: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        productVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        productIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allProducts: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const CreateProductSetSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalProductSetId: z.ZodString;
    }, z.core.$strip>>>>;
    items: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        productVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>>;
    targetingMode: z.ZodDefault<z.ZodEnum<typeof ProductSetTargetingMode>>;
    pricingMode: z.ZodDefault<z.ZodEnum<typeof ProductSetPricingMode>>;
    fixedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        productIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allProducts: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const UpdateProductSetSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    code: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalProductSetId: z.ZodString;
    }, z.core.$strip>>>>>;
    items: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        productVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>>>;
    targetingMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ProductSetTargetingMode>>>;
    pricingMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ProductSetPricingMode>>>;
    fixedPrice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    selector: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        productIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allProducts: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    imageUrls: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    productRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ProductSetItem = z.infer<typeof ProductSetItemSchema>;
export type ProductSetChannelMapping = z.infer<typeof ProductSetChannelMappingSchema>;
export type ProductSetSelector = z.infer<typeof ProductSetSelectorSchema>;
export type ProductSet = z.infer<typeof ProductSetSchema>;
export type CreateProductSet = z.infer<typeof CreateProductSetSchema>;
export type UpdateProductSet = z.infer<typeof UpdateProductSetSchema>;
/**
 * Product set item display schema.
 * Extended item schema with resolved product data for UI rendering.
 *
 * @typedef {Object} ProductSetItemDisplay
 * @property {Object} [product] - Resolved BusinessProduct snapshot
 */
export declare const ProductSetItemDisplaySchema: z.ZodObject<{
    productId: z.ZodString;
    productVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantity: z.ZodNumber;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    product: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
        barcodeFormat: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("./product-config.schema").BarcodeFormat>>>;
        isAlcoholic: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        categoryId: z.ZodString;
        category: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
            locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("./product-config.schema").CategoryLocationScope>>>;
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
 * Product set display schema.
 * Extended set schema with resolved items and computed pricing for UI rendering.
 *
 * @typedef {Object} ProductSetDisplay
 * @property {Array} items - ProductSetItemDisplay array with resolved data
 * @property {number} [resolvedPrice] - Computed display price for the set
 */
export declare const ProductSetDisplaySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalProductSetId: z.ZodString;
    }, z.core.$strip>>>>;
    targetingMode: z.ZodDefault<z.ZodEnum<typeof ProductSetTargetingMode>>;
    pricingMode: z.ZodDefault<z.ZodEnum<typeof ProductSetPricingMode>>;
    fixedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        productIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allProducts: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    items: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        productVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
            barcodeFormat: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("./product-config.schema").BarcodeFormat>>>;
            isAlcoholic: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
            categoryId: z.ZodString;
            category: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                createdAt: z.ZodOptional<z.ZodNumber>;
                updatedAt: z.ZodOptional<z.ZodNumber>;
                productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
                locationScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("./product-config.schema").CategoryLocationScope>>>;
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
    }, z.core.$strip>>>>;
    resolvedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type ProductSetItemDisplay = z.infer<typeof ProductSetItemDisplaySchema>;
export type ProductSetDisplay = z.infer<typeof ProductSetDisplaySchema>;
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
