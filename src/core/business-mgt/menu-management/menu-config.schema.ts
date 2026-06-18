import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { MenuItemDaypartSchema } from "../order.schema";
import { CreateMenuItemVariantSchema } from "./menu-item-variant.schema";

/**
 * @fileoverview Business menu configuration schema definitions.
 * @module business-mgt/business-menu-config
 *
 * Includes menu categories, menu items, channel mappings,
 * and nutritional information for restaurant/food service businesses.
 */

// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================

/**
 * Menu category channel mapping schema.
 * Maps menu categories to external platform identifiers.
 *
 * @typedef {Object} MenuCategoryChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalCategoryId - External category ID for synchronization
 */
export const MenuCategoryChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalCategoryId: z.string().describe("External category ID for this specific channel"),
}).describe("Per-channel external category ID mapping");

/**
 * Menu item channel mapping schema.
 * Maps menu items to external platform identifiers.
 *
 * @typedef {Object} MenuItemChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalMenuItemId - External menu item ID for synchronization
 * @property {string} [externalCategoryId] - Optional external category ID in channel
 */
export const MenuItemChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalMenuItemId: z.string().describe("External menu item ID for this specific channel"),
    externalCategoryId: z.string().nullable().optional().describe("External category ID in this channel, if needed for sync payloads"),
}).describe("Per-channel external menu item ID mapping");

// ============================================================================
// MENU CATEGORY SCHEMA
// ============================================================================

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
export const MenuCategorySchema = BaseModelSchema.safeExtend({
    name: z.string().min(1, "Category name is required").describe("Category name for menu organization (e.g., Appetizers, Main Course, Desserts). Used by AI Powered Services when presenting menu options to customers."),
    description: z.string().optional().describe("Category description providing context about the type of items included. Helps customers navigate the menu."),
    displayOrder: z.number().int().optional().describe("Numeric order for category display in menu listings. Lower numbers appear first. Enables custom menu organization."),
    channelMappings: z.array(MenuCategoryChannelMappingSchema).nullable().optional().describe("Per-channel category ID mappings for external platform integrations"),
});

// ============================================================================
// BUSINESS MENU ITEM SCHEMA
// ============================================================================

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
export const BusinessMenuItemSchema = BaseModelSchema.safeExtend({
    name: z.string().min(1, "Menu item name is required").describe("Display name of the menu item shown to customers. Used by AI Powered Services in menu order conversations."),
    description: z.string().optional().describe("Detailed item description including preparation style, ingredients, or special features. Helps customers make informed selections."),

    // Menu-specific fields
    price: z.number().nonnegative().describe("Base price for this menu item in the account's currency. Used for order pricing calculations."),
    categoryId: z.string().describe("References MenuCategory this item belongs to. Used for menu organization and AI-driven category-based browsing."),
    category: MenuCategorySchema.optional().describe("Populated MenuCategory object for convenient access. Not required during creation; managed by Menu Management."),
    ingredients: z.array(z.string()).optional().describe("List of primary ingredients for dietary information and AI-powered ingredient-based searches (e.g., 'vegetarian options')."),
    allergens: z.array(z.string()).optional().describe("Common allergens present (e.g., ['nuts', 'dairy', 'gluten']). Critical for customer safety and AI allergen filtering."),
    nutritionalInfo: z.object({
        calories: z.number().optional().describe("Caloric content per serving."),
        protein: z.number().optional().describe("Protein content in grams."),
        carbs: z.number().optional().describe("Carbohydrate content in grams."),
        fat: z.number().optional().describe("Fat content in grams."),
    }).optional().describe("Optional nutritional information for health-conscious customers and dietary compliance."),

    // Availability
    isAvailable: z.boolean().default(true).describe("Real-time availability status (e.g., sold out, temporarily unavailable). AI Powered Services only presents available items. Defaults to true."),
    preparationTime: z.number().int().positive().optional().describe("Estimated preparation time in minutes. Used for setting customer expectations and order timing in Menu Order workflow."),

    // Business Management
    isActive: z.boolean().default(true).describe("Whether item is active in the menu catalog. Inactive items are hidden from customers. Defaults to true."),
    displayOrder: z.number().int().optional().describe("Display order within category. Lower numbers appear first. Enables strategic item positioning."),
    channelMappings: z.array(MenuItemChannelMappingSchema).nullable().optional().describe("Per-channel menu item ID mappings for external platform integrations"),

    // Daypart availability
    dayParts: z.array(MenuItemDaypartSchema).nullable().optional().describe("Resolved recurring availability dayparts (e.g., Breakfast, Lunch, Dinner windows)"),

    // Ordering analytics (View Model only - not set on create/update)
    orderCount: z.number().int().nonnegative().nullable().optional().describe("Total orders for this item (all time)"),
    recentOrderCount: z.number().int().nonnegative().nullable().optional().describe("Orders for this item in the last 30 days"),
    lastOrderedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this item"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new menu category.
 * Omits auto-generated fields.
 */
export const CreateMenuCategorySchema = MenuCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});


/**
 * Schema for creating a new business menu item.
 * Omits auto-generated fields and allows optional category specification.
 *
 * @remarks
 * A menu item must be created with at least one variant. Nested variants use the
 * menu item variant create schema with `menuItemId` omitted; the parent link is
 * assigned by the server once the menu item is created.
 */
export const CreateBusinessMenuItemSchema = BusinessMenuItemSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    categoryId: true,
    // Omit analytics fields (view model only)
    orderCount: true,
    recentOrderCount: true,
    lastOrderedAt: true,
}).safeExtend({
    categoryId: z.string().nullable().optional(),
    variants: z.array(CreateMenuItemVariantSchema.omit({ menuItemId: true })).min(1, "A menu item must have at least one variant").describe("Variants to create with this menu item. At least one is required; the parent menu item ID is assigned by the server."),
});

/**
 * Schema for updating an existing menu category.
 * All fields optional except id (required).
 */
export const UpdateMenuCategorySchema = CreateMenuCategorySchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Schema for updating an existing business menu item.
 * All fields optional except id (required).
 */
export const UpdateBusinessMenuItemSchema = CreateBusinessMenuItemSchema.partial().safeExtend({
    id: z.string(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type MenuCategory = z.infer<typeof MenuCategorySchema>;
export type BusinessMenuItem = z.infer<typeof BusinessMenuItemSchema>;
export type CreateMenuCategory = z.infer<typeof CreateMenuCategorySchema>;
export type CreateBusinessMenuItem = z.infer<typeof CreateBusinessMenuItemSchema>;
export type UpdateMenuCategory = z.infer<typeof UpdateMenuCategorySchema>;
export type UpdateBusinessMenuItem = z.infer<typeof UpdateBusinessMenuItemSchema>;
export type MenuCategoryChannelMapping = z.infer<typeof MenuCategoryChannelMappingSchema>;
export type MenuItemChannelMapping = z.infer<typeof MenuItemChannelMappingSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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