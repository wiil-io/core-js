import { z } from "zod";
/**
 * @fileoverview Menu catalog schema definitions for business management.
 * @module business-mgt/menu-catalog
 *
 * Includes catalog schemas for displaying menu items with variants,
 * modifier groups, and pricing information.
 */
/**
 * Menu item variant catalog schema.
 * Variant schema for catalog display.
 */
export declare const MenuItemVariantCatalogSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    menuItemId: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    variantChannelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalVariantId: z.ZodString;
        externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Menu item catalog schema.
 * Menu item for catalog display - includes variants and modifier groups.
 *
 * @typedef {Object} MenuItemCatalog
 * @property {MenuItemVariantCatalog[]} variants - Menu item variants for selection
 * @property {Object} [priceRange] - Resolved min/max price across variants
 * @property {boolean} isVariantSelectable - Whether this menu item requires variant selection
 * @property {ModifierGroupView[]} modifierGroups - Hydrated modifier groups with options
 */
export declare const MenuItemCatalogSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    categoryId: z.ZodString;
    category: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
    }, z.core.$strip>>;
    ingredients: z.ZodOptional<z.ZodArray<z.ZodString>>;
    allergens: z.ZodOptional<z.ZodArray<z.ZodString>>;
    nutritionalInfo: z.ZodOptional<z.ZodObject<{
        calories: z.ZodOptional<z.ZodNumber>;
        protein: z.ZodOptional<z.ZodNumber>;
        carbs: z.ZodOptional<z.ZodNumber>;
        fat: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    preparationTime: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalMenuItemId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    dayParts: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        startTime: z.ZodString;
        endTime: z.ZodString;
        daysOfWeek: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>>;
    orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    variants: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        menuItemId: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        price: z.ZodNumber;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        variantChannelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalVariantId: z.ZodString;
            externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
    priceRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>>;
    isVariantSelectable: z.ZodDefault<z.ZodBoolean>;
    modifierGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        displayOrder: z.ZodDefault<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalModifierGroupId: z.ZodString;
        }, z.core.$strip>>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        minSelection: z.ZodDefault<z.ZodNumber>;
        maxSelection: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        options: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            priceDelta: z.ZodDefault<z.ZodNumber>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
            displayOrder: z.ZodDefault<z.ZodNumber>;
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalModifierOptionId: z.ZodString;
                externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Menu catalog schema.
 * Represents a category with its menu items and variants.
 *
 * @typedef {Object} MenuCatalog
 * @property {MenuCategory} category - Menu category
 * @property {MenuItemCatalog[]} items - List of menu items with variants
 */
export declare const MenuCatalogSchema: z.ZodObject<{
    category: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        categoryId: z.ZodString;
        category: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            displayOrder: z.ZodOptional<z.ZodNumber>;
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalCategoryId: z.ZodString;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>;
        ingredients: z.ZodOptional<z.ZodArray<z.ZodString>>;
        allergens: z.ZodOptional<z.ZodArray<z.ZodString>>;
        nutritionalInfo: z.ZodOptional<z.ZodObject<{
            calories: z.ZodOptional<z.ZodNumber>;
            protein: z.ZodOptional<z.ZodNumber>;
            carbs: z.ZodOptional<z.ZodNumber>;
            fat: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
        preparationTime: z.ZodOptional<z.ZodNumber>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalMenuItemId: z.ZodString;
            externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        dayParts: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            startTime: z.ZodString;
            endTime: z.ZodString;
            daysOfWeek: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>>;
        orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        variants: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            menuItemId: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            price: z.ZodNumber;
            isAvailable: z.ZodDefault<z.ZodBoolean>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
            variantChannelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalVariantId: z.ZodString;
                externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
            orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>;
        priceRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>>;
        isVariantSelectable: z.ZodDefault<z.ZodBoolean>;
        modifierGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            displayOrder: z.ZodDefault<z.ZodNumber>;
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalModifierGroupId: z.ZodString;
            }, z.core.$strip>>>>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            isRequired: z.ZodDefault<z.ZodBoolean>;
            minSelection: z.ZodDefault<z.ZodNumber>;
            maxSelection: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            options: z.ZodDefault<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                priceDelta: z.ZodDefault<z.ZodNumber>;
                isDefault: z.ZodDefault<z.ZodBoolean>;
                displayOrder: z.ZodDefault<z.ZodNumber>;
                channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                    channelId: z.ZodString;
                    externalModifierOptionId: z.ZodString;
                    externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, z.core.$strip>>>>;
                isActive: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Business menu catalog schema.
 * Full catalog as array of category sections.
 */
export declare const BusinessMenuCatalogSchema: z.ZodArray<z.ZodObject<{
    category: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        categoryId: z.ZodString;
        category: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            displayOrder: z.ZodOptional<z.ZodNumber>;
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalCategoryId: z.ZodString;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>;
        ingredients: z.ZodOptional<z.ZodArray<z.ZodString>>;
        allergens: z.ZodOptional<z.ZodArray<z.ZodString>>;
        nutritionalInfo: z.ZodOptional<z.ZodObject<{
            calories: z.ZodOptional<z.ZodNumber>;
            protein: z.ZodOptional<z.ZodNumber>;
            carbs: z.ZodOptional<z.ZodNumber>;
            fat: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
        preparationTime: z.ZodOptional<z.ZodNumber>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalMenuItemId: z.ZodString;
            externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        dayParts: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            startTime: z.ZodString;
            endTime: z.ZodString;
            daysOfWeek: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>>;
        orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        variants: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            menuItemId: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            price: z.ZodNumber;
            isAvailable: z.ZodDefault<z.ZodBoolean>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
            variantChannelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalVariantId: z.ZodString;
                externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
            orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>;
        priceRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>>;
        isVariantSelectable: z.ZodDefault<z.ZodBoolean>;
        modifierGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            displayOrder: z.ZodDefault<z.ZodNumber>;
            channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                channelId: z.ZodString;
                externalModifierGroupId: z.ZodString;
            }, z.core.$strip>>>>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            isRequired: z.ZodDefault<z.ZodBoolean>;
            minSelection: z.ZodDefault<z.ZodNumber>;
            maxSelection: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            options: z.ZodDefault<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                priceDelta: z.ZodDefault<z.ZodNumber>;
                isDefault: z.ZodDefault<z.ZodBoolean>;
                displayOrder: z.ZodDefault<z.ZodNumber>;
                channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                    channelId: z.ZodString;
                    externalModifierOptionId: z.ZodString;
                    externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, z.core.$strip>>>>;
                isActive: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type MenuItemVariantCatalog = z.infer<typeof MenuItemVariantCatalogSchema>;
export type MenuItemCatalog = z.infer<typeof MenuItemCatalogSchema>;
export type MenuCatalog = z.infer<typeof MenuCatalogSchema>;
export type BusinessMenuCatalog = z.infer<typeof BusinessMenuCatalogSchema>;
