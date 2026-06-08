import { z } from 'zod';
/**
 * @fileoverview Menu item variant schema definitions for business management.
 * @module business-mgt/menu-item-variant
 *
 * Includes menu item variants for different sizes/options of the same
 * menu item (e.g., Small, Medium, Large).
 */
/**
 * Menu item variant channel mapping schema.
 * Maps menu item variants to external platform identifiers.
 *
 * @typedef {Object} MenuItemVariantChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalVariantId - External variant ID for synchronization
 * @property {string} [externalMenuItemId] - Optional external parent menu item ID
 */
export declare const MenuItemVariantChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalVariantId: z.ZodString;
    externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Menu item variant schema.
 * Different sizes/options for the same menu item.
 *
 * @typedef {Object} MenuItemVariant
 * @property {string} menuItemId - Parent menu item ID
 * @property {string} name - Variant name (e.g., Small, Medium, Large)
 * @property {string} [description] - Variant description
 * @property {number} price - Variant price
 * @property {boolean} isAvailable - Whether variant is currently available
 * @property {boolean} isActive - Whether variant is active in menu
 * @property {boolean} isDefault - Whether this is the default variant
 * @property {MenuItemVariantChannelMapping[]} [variantChannelMappings] - Per-channel mappings
 * @property {number} [orderCount] - Total orders for this variant (read-only)
 * @property {number} [recentOrderCount] - Orders in last 30 days (read-only)
 * @property {number} [lastOrderedAt] - Unix timestamp of last order (read-only)
 */
export declare const MenuItemVariantSchema: z.ZodObject<{
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
 * Schema for creating a new menu item variant.
 * Omits auto-generated fields.
 */
export declare const CreateMenuItemVariantSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodNumber;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    menuItemId: z.ZodString;
    variantChannelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalVariantId: z.ZodString;
        externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing menu item variant.
 * All fields are optional except id.
 */
export declare const UpdateMenuItemVariantSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    price: z.ZodOptional<z.ZodNumber>;
    isAvailable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    menuItemId: z.ZodOptional<z.ZodString>;
    variantChannelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalVariantId: z.ZodString;
        externalMenuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type MenuItemVariant = z.infer<typeof MenuItemVariantSchema>;
export type CreateMenuItemVariant = z.infer<typeof CreateMenuItemVariantSchema>;
export type UpdateMenuItemVariant = z.infer<typeof UpdateMenuItemVariantSchema>;
export type MenuItemVariantChannelMapping = z.infer<typeof MenuItemVariantChannelMappingSchema>;
/**
 * Menu item variant filter options.
 * @interface MenuItemVariantFilters
 */
export interface MenuItemVariantFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by parent menu item ID */
    menuItemId?: string;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by availability status */
    isAvailable?: boolean;
    /** Filter by price range */
    priceRange?: {
        min?: number;
        max?: number;
    };
}
/**
 * Menu item variant sorting options.
 * @interface MenuItemVariantSorting
 */
export interface MenuItemVariantSorting {
    /** Field to sort by */
    field: 'name' | 'price' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}
/**
 * Menu item variant query options.
 * @interface MenuItemVariantQueryOptions
 */
export interface MenuItemVariantQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: MenuItemVariantFilters;
    /** Optional sorting */
    sorting?: MenuItemVariantSorting;
}
