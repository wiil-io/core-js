import { z } from 'zod';
import { BaseModelSchema } from '../../base.schema';

/**
 * @fileoverview Menu item variant schema definitions for business management.
 * @module business-mgt/menu-item-variant
 *
 * Includes menu item variants for different sizes/options of the same
 * menu item (e.g., Small, Medium, Large).
 */

// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================

/**
 * Menu item variant channel mapping schema.
 * Maps menu item variants to external platform identifiers.
 *
 * @typedef {Object} MenuItemVariantChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalVariantId - External variant ID for synchronization
 * @property {string} [externalMenuItemId] - Optional external parent menu item ID
 */
export const MenuItemVariantChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalVariantId: z.string().describe("External variant ID for this specific channel"),
    externalMenuItemId: z.string().nullable().optional().describe("Optional external parent menu item ID in this channel"),
}).describe("Per-channel external menu variant ID mapping");

// ============================================================================
// MENU ITEM VARIANT SCHEMA
// ============================================================================

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
export const MenuItemVariantSchema = BaseModelSchema.safeExtend({
    menuItemId: z.string().describe("Parent menu item ID this variant belongs to"),

    name: z.string().min(1, "Variant name is required").describe("Variant name (e.g., Small, Medium, Large, Regular, Family Size)"),
    description: z.string().nullable().optional().describe("Variant description with additional details"),
    price: z.number().nonnegative().describe("Variant price in the account's currency"),

    isAvailable: z.boolean().default(true).describe("Whether variant is currently available for ordering"),
    isActive: z.boolean().default(true).describe("Whether variant is active in the menu catalog"),
    isDefault: z.boolean().default(false).describe("Whether this is the default variant for the menu item"),

    variantChannelMappings: z.array(MenuItemVariantChannelMappingSchema).nullable().optional().describe("Per-channel variant ID mappings for external platform integrations"),

    // Ordering analytics (View Model only - not set on create/update)
    orderCount: z.number().int().nonnegative().nullable().optional().describe("Total orders for this variant (all time)"),
    recentOrderCount: z.number().int().nonnegative().nullable().optional().describe("Orders for this variant in the last 30 days"),
    lastOrderedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this variant"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new menu item variant.
 * Omits auto-generated fields.
 */
export const CreateMenuItemVariantSchema = MenuItemVariantSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    // Omit analytics fields (view model only)
    orderCount: true,
    recentOrderCount: true,
    lastOrderedAt: true,
});

/**
 * Schema for updating an existing menu item variant.
 * All fields are optional except id.
 */
export const UpdateMenuItemVariantSchema = CreateMenuItemVariantSchema.partial().safeExtend({
    id: z.string(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type MenuItemVariant = z.infer<typeof MenuItemVariantSchema>;
export type CreateMenuItemVariant = z.infer<typeof CreateMenuItemVariantSchema>;
export type UpdateMenuItemVariant = z.infer<typeof UpdateMenuItemVariantSchema>;
export type MenuItemVariantChannelMapping = z.infer<typeof MenuItemVariantChannelMappingSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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
    priceRange?: { min?: number; max?: number };
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
