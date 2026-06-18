import z from "zod";
import { StockStatus } from "../../type-definitions";
/**
 * @fileoverview Product display schema definitions for catalog rendering.
 * @module business-mgt/product-display
 *
 * These schemas are read-optimized and denormalized for efficient UI rendering.
 * They include resolved data like stock status and computed price ranges.
 */
/**
 * Product variant display schema.
 * Extends base variant with computed stock status for UI rendering.
 *
 * @typedef {Object} ProductVariantDisplay
 * @property {string} stockStatus - Resolved stock status (in_stock, low_stock, out_of_stock)
 */
export declare const ProductVariantDisplaySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    productId: z.ZodString;
    axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../../type-definitions").InventoryUnit>>>;
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
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalVariantId: z.ZodString;
        externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    stockStatus: z.ZodEnum<typeof StockStatus>;
}, z.core.$strip>;
/**
 * Product display schema.
 * Extends base product with variants array and computed price range.
 *
 * @typedef {Object} ProductDisplay
 * @property {Array} variants - Product variants with stock status
 * @property {Object} priceRange - Min/max price across all variants
 * @property {boolean} isVariantSelectable - Whether product uses variant selection
 */
export declare const ProductDisplaySchema: z.ZodObject<{
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
    variants: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        productId: z.ZodString;
        axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../../type-definitions").InventoryUnit>>>;
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
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalVariantId: z.ZodString;
            externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockStatus: z.ZodEnum<typeof StockStatus>;
    }, z.core.$strip>>;
    priceRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>>;
    isVariantSelectable: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Product catalog display schema.
 * Represents a category with its complete list of products for catalog rendering.
 *
 * @typedef {Object} ProductCatalogDisplay
 * @property {Object} productCategory - The product category
 * @property {Array} items - Products in this category with variants
 */
export declare const ProductCatalogDisplaySchema: z.ZodObject<{
    productCategory: z.ZodObject<{
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
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
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
        variants: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            productId: z.ZodString;
            axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
            sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../../type-definitions").InventoryUnit>>>;
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
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalVariantId: z.ZodString;
                externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
            orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            stockStatus: z.ZodEnum<typeof StockStatus>;
        }, z.core.$strip>>;
        priceRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>>;
        isVariantSelectable: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Business product catalog display schema.
 * Complete product catalog organized by categories for full catalog rendering.
 *
 * @typedef {Array} BusinessProductCatalogDisplay
 */
export declare const BusinessProductCatalogDisplaySchema: z.ZodArray<z.ZodObject<{
    productCategory: z.ZodObject<{
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
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
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
        variants: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            productRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            productId: z.ZodString;
            axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
            sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../../type-definitions").InventoryUnit>>>;
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
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalVariantId: z.ZodString;
                externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
            orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            stockStatus: z.ZodEnum<typeof StockStatus>;
        }, z.core.$strip>>;
        priceRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>>;
        isVariantSelectable: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type ProductVariantDisplay = z.infer<typeof ProductVariantDisplaySchema>;
export type ProductDisplay = z.infer<typeof ProductDisplaySchema>;
export type ProductCatalogDisplay = z.infer<typeof ProductCatalogDisplaySchema>;
export type BusinessProductCatalogDisplay = z.infer<typeof BusinessProductCatalogDisplaySchema>;
