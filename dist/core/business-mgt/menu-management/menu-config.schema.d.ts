import z from "zod";
/**
 * @fileoverview Business menu configuration schema definitions.
 * @module business-mgt/business-menu-config
 *
 * Includes menu categories, menu items, channel mappings,
 * and nutritional information for restaurant/food service businesses.
 */
/**
 * Menu category channel mapping schema.
 * Maps menu categories to external platform identifiers.
 *
 * @typedef {Object} MenuCategoryChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalCategoryId - External category ID for synchronization
 */
export declare const MenuCategoryChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalCategoryId: z.ZodString;
}, z.core.$strip>;
/**
 * Menu item channel mapping schema.
 * Maps menu items to external platform identifiers.
 *
 * @typedef {Object} MenuItemChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalMenuItemId - External menu item ID for synchronization
 * @property {string} [externalCategoryId] - Optional external category ID in channel
 */
export declare const MenuItemChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalMenuItemId: z.ZodString;
    externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Menu category schema.
 * Categories for organizing menu items (e.g., Appetizers, Main Course, Desserts).
 *
 * @typedef {Object} MenuCategory
 * @property {string} name - Category name for menu organization
 * @property {string} [description] - Category description
 * @property {number} [displayOrder] - Numeric order for display
 * @property {MenuCategoryChannelMapping[]} [channelMappings] - Per-channel mappings
 */
export declare const MenuCategorySchema: z.ZodObject<{
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
/**
 * Business menu item schema.
 * Individual menu items available for ordering.
 *
 * @typedef {Object} BusinessMenuItem
 * @property {string} name - Display name of the menu item
 * @property {string} [description] - Detailed item description
 * @property {number} price - Base price for this menu item
 * @property {string} categoryId - References MenuCategory this item belongs to
 * @property {MenuCategory} [category] - Populated MenuCategory object
 * @property {string[]} [ingredients] - List of primary ingredients
 * @property {string[]} [allergens] - Common allergens present
 * @property {Object} [nutritionalInfo] - Nutritional information
 * @property {boolean} isAvailable - Real-time availability status
 * @property {number} [preparationTime] - Estimated preparation time in minutes
 * @property {boolean} isActive - Whether item is active in the menu catalog
 * @property {number} [displayOrder] - Display order within category
 * @property {MenuItemChannelMapping[]} [channelMappings] - Per-channel mappings
 * @property {Array} [dayParts] - Recurring availability dayparts
 * @property {number} [orderCount] - Total orders for this item (read-only)
 * @property {number} [recentOrderCount] - Orders in the last 30 days (read-only)
 * @property {number} [lastOrderedAt] - Unix timestamp of the last order (read-only)
 */
export declare const BusinessMenuItemSchema: z.ZodObject<{
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
}, z.core.$strip>;
/**
 * Schema for creating a new menu category.
 * Omits auto-generated fields.
 */
export declare const CreateMenuCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new business menu item.
 * Omits auto-generated fields and allows optional category specification.
 *
 * @remarks
 * A menu item must be created with at least one variant. Nested variants use the
 * menu item variant create schema with `menuItemId` omitted; the parent link is
 * assigned by the server once the menu item is created.
 */
export declare const CreateBusinessMenuItemSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodNumber;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalMenuItemId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    ingredients: z.ZodOptional<z.ZodArray<z.ZodString>>;
    allergens: z.ZodOptional<z.ZodArray<z.ZodString>>;
    nutritionalInfo: z.ZodOptional<z.ZodObject<{
        calories: z.ZodOptional<z.ZodNumber>;
        protein: z.ZodOptional<z.ZodNumber>;
        carbs: z.ZodOptional<z.ZodNumber>;
        fat: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    preparationTime: z.ZodOptional<z.ZodNumber>;
    dayParts: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        startTime: z.ZodString;
        endTime: z.ZodString;
        daysOfWeek: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    variants: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        price: z.ZodNumber;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
        variantChannelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalVariantId: z.ZodString;
            externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing menu category.
 * All fields optional except id (required).
 */
export declare const UpdateMenuCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing business menu item.
 * All fields optional except id (required).
 */
export declare const UpdateBusinessMenuItemSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    price: z.ZodOptional<z.ZodNumber>;
    isAvailable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalMenuItemId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>>;
    ingredients: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    allergens: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    nutritionalInfo: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        calories: z.ZodOptional<z.ZodNumber>;
        protein: z.ZodOptional<z.ZodNumber>;
        carbs: z.ZodOptional<z.ZodNumber>;
        fat: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    preparationTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    dayParts: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        startTime: z.ZodString;
        endTime: z.ZodString;
        daysOfWeek: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>>>;
    categoryId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        price: z.ZodNumber;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
        variantChannelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalVariantId: z.ZodString;
            externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type MenuCategory = z.infer<typeof MenuCategorySchema>;
export type BusinessMenuItem = z.infer<typeof BusinessMenuItemSchema>;
export type CreateMenuCategory = z.infer<typeof CreateMenuCategorySchema>;
export type CreateBusinessMenuItem = z.infer<typeof CreateBusinessMenuItemSchema>;
export type UpdateMenuCategory = z.infer<typeof UpdateMenuCategorySchema>;
export type UpdateBusinessMenuItem = z.infer<typeof UpdateBusinessMenuItemSchema>;
export type MenuCategoryChannelMapping = z.infer<typeof MenuCategoryChannelMappingSchema>;
export type MenuItemChannelMapping = z.infer<typeof MenuItemChannelMappingSchema>;
/**
 * Business menu item filter options.
 * @interface BusinessMenuItemFilters
 */
export interface BusinessMenuItemFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by category ID */
    categoryId?: string;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by availability status */
    isAvailable?: boolean;
    /** Filter by allergens */
    allergens?: string[];
}
/**
 * Business menu item sorting options.
 * @interface BusinessMenuItemSorting
 */
export interface BusinessMenuItemSorting {
    /** Field to sort by */
    field: 'name' | 'price' | 'createdAt' | 'displayOrder';
    /** Sort direction */
    direction: 'asc' | 'desc';
}
/**
 * Business menu item query options.
 * @interface BusinessMenuItemQueryOptions
 */
export interface BusinessMenuItemQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: BusinessMenuItemFilters;
    /** Optional sorting */
    sorting?: BusinessMenuItemSorting;
}
