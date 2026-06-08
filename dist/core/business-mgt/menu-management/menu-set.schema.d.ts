import z from "zod";
/**
 * @fileoverview Menu set schema definitions for bundled menu items.
 * @module business-mgt/menu-set
 *
 * Includes menu sets (bundles/combos), pricing modes, targeting modes,
 * and selectors for dynamic set membership.
 */
/**
 * Menu set pricing mode.
 * Determines how set pricing is calculated.
 *
 * @enum {string}
 */
export declare enum MenuSetPricingMode {
    FIXED = "FIXED",
    SUM_OF_ITEMS = "SUM_OF_ITEMS"
}
/**
 * Menu set targeting mode.
 * Determines how set members are selected.
 *
 * @enum {string}
 */
export declare enum MenuSetTargetingMode {
    EXPLICIT = "EXPLICIT",
    SELECTOR = "SELECTOR"
}
/**
 * Menu set channel mapping schema.
 * Maps menu sets to external platform identifiers.
 *
 * @typedef {Object} MenuSetChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalMenuSetId - External menu set ID for synchronization
 */
export declare const MenuSetChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalMenuSetId: z.ZodString;
}, z.core.$strip>;
/**
 * Menu set item schema.
 * Individual item within a menu set.
 *
 * @typedef {Object} MenuSetItem
 * @property {string} menuItemId - Menu item ID included in the set
 * @property {string} menuItemVariantId - Menu item variant ID included in the set
 * @property {number} quantity - Quantity of this menu item in the set
 * @property {boolean} isRequired - Whether this item is required in the set
 * @property {number} [displayOrder] - Display order inside the set
 */
export declare const MenuSetItemSchema: z.ZodObject<{
    menuItemId: z.ZodString;
    menuItemVariantId: z.ZodString;
    quantity: z.ZodNumber;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Menu set selector schema.
 * Defines dynamic rules for set membership.
 *
 * @typedef {Object} MenuSetSelector
 * @property {string[]} menuItemIdsAny - Any matching catalog menu item IDs
 * @property {string[]} menuItemIdsAll - All required catalog menu item IDs
 * @property {boolean} allMenuItems - Includes all catalog menu items
 * @property {number} [quantityExact] - Requires exact matched quantity
 * @property {number} [quantityMin] - Requires minimum matched quantity
 * @property {number} [quantityMax] - Caps maximum matched quantity
 */
export declare const MenuSetSelectorSchema: z.ZodObject<{
    menuItemIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
    menuItemIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
    allMenuItems: z.ZodDefault<z.ZodBoolean>;
    quantityExact: z.ZodOptional<z.ZodNumber>;
    quantityMin: z.ZodOptional<z.ZodNumber>;
    quantityMax: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Menu set schema.
 * Bundled menu items (combos, deals, meal sets).
 *
 * @typedef {Object} MenuSet
 * @property {string} [locationId] - Location ID for location-specific menu sets
 * @property {string} [menuRevisionId] - Menu revision ID for version-scoped data
 * @property {string} [code] - Stable internal code for integration matching
 * @property {string} name - Menu set name
 * @property {string} [description] - Menu set description
 * @property {MenuSetChannelMapping[]} [channelMappings] - Per-channel mappings
 * @property {MenuSetTargetingMode} targetingMode - How this set selects its members
 * @property {MenuSetPricingMode} pricingMode - How set pricing is resolved
 * @property {number} [fixedPrice] - Set price when pricing mode is FIXED
 * @property {MenuSetItem[]} [items] - Explicit menu members for EXPLICIT targeting
 * @property {MenuSetSelector} [selector] - Selector definition for SELECTOR targeting
 * @property {boolean} isActive - Whether this menu set is active
 * @property {string} [imageUrl] - Public image URL for the menu set
 * @property {string[]} [imageUrls] - Public image URLs for the menu set
 * @property {number} [displayOrder] - Display order in catalog
 */
export declare const MenuSetSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    menuRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalMenuSetId: z.ZodString;
    }, z.core.$strip>>>>;
    targetingMode: z.ZodDefault<z.ZodEnum<typeof MenuSetTargetingMode>>;
    pricingMode: z.ZodDefault<z.ZodEnum<typeof MenuSetPricingMode>>;
    fixedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    items: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        menuItemVariantId: z.ZodString;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        menuItemIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        menuItemIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allMenuItems: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Schema for creating a new menu set.
 * Omits auto-generated fields.
 */
export declare const CreateMenuSetSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalMenuSetId: z.ZodString;
    }, z.core.$strip>>>>;
    items: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        menuItemVariantId: z.ZodString;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    menuRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetingMode: z.ZodDefault<z.ZodEnum<typeof MenuSetTargetingMode>>;
    pricingMode: z.ZodDefault<z.ZodEnum<typeof MenuSetPricingMode>>;
    fixedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        menuItemIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        menuItemIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allMenuItems: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing menu set.
 * All fields optional except id (required).
 */
export declare const UpdateMenuSetSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    code: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalMenuSetId: z.ZodString;
    }, z.core.$strip>>>>>;
    items: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        menuItemVariantId: z.ZodString;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>>;
    menuRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    targetingMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof MenuSetTargetingMode>>>;
    pricingMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof MenuSetPricingMode>>>;
    fixedPrice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    selector: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        menuItemIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        menuItemIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allMenuItems: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    imageUrls: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type MenuSetItem = z.infer<typeof MenuSetItemSchema>;
export type MenuSetChannelMapping = z.infer<typeof MenuSetChannelMappingSchema>;
export type MenuSetSelector = z.infer<typeof MenuSetSelectorSchema>;
export type MenuSet = z.infer<typeof MenuSetSchema>;
export type CreateMenuSet = z.infer<typeof CreateMenuSetSchema>;
export type UpdateMenuSet = z.infer<typeof UpdateMenuSetSchema>;
/**
 * Menu set item view schema.
 * Read-optimized view with resolved menu item.
 *
 * @typedef {Object} MenuSetItemView
 * @property {string} menuItemId - Menu item ID
 * @property {string} menuItemVariantId - Menu item variant ID
 * @property {number} quantity - Quantity in set
 * @property {boolean} isRequired - Whether required
 * @property {number} [displayOrder] - Display order
 * @property {BusinessMenuItem} [menuItem] - Resolved menu item snapshot
 */
export declare const MenuSetItemViewSchema: z.ZodObject<{
    menuItemId: z.ZodString;
    menuItemVariantId: z.ZodString;
    quantity: z.ZodNumber;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    menuItem: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Menu set view schema.
 * Read-optimized view with resolved items and pricing.
 *
 * @typedef {Object} MenuSetView
 * @property {MenuSetItemView[]} [items] - Resolved menu set items
 * @property {number} [resolvedPrice] - Computed display price for the set
 */
export declare const MenuSetViewSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalMenuSetId: z.ZodString;
    }, z.core.$strip>>>>;
    menuRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetingMode: z.ZodDefault<z.ZodEnum<typeof MenuSetTargetingMode>>;
    pricingMode: z.ZodDefault<z.ZodEnum<typeof MenuSetPricingMode>>;
    fixedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        menuItemIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        menuItemIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
        allMenuItems: z.ZodDefault<z.ZodBoolean>;
        quantityExact: z.ZodOptional<z.ZodNumber>;
        quantityMin: z.ZodOptional<z.ZodNumber>;
        quantityMax: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    items: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        menuItemVariantId: z.ZodString;
        quantity: z.ZodNumber;
        isRequired: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        menuItem: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        }, z.core.$strip>>>;
    }, z.core.$strip>>>>;
    resolvedPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type MenuSetItemView = z.infer<typeof MenuSetItemViewSchema>;
export type MenuSetView = z.infer<typeof MenuSetViewSchema>;
/**
 * Menu set filter options.
 * @interface MenuSetFilters
 */
export interface MenuSetFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by menu revision ID */
    menuRevisionId?: string;
    /** Filter by internal code */
    code?: string;
    /** Filter by targeting mode */
    targetingMode?: MenuSetTargetingMode;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by pricing mode */
    pricingMode?: MenuSetPricingMode;
}
/**
 * Menu set sorting options.
 * @interface MenuSetSorting
 */
export interface MenuSetSorting {
    /** Field to sort by */
    field: "name" | "createdAt" | "displayOrder";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Menu set query options.
 * @interface MenuSetQueryOptions
 */
export interface MenuSetQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: MenuSetFilters;
    /** Optional sorting */
    sorting?: MenuSetSorting;
}
