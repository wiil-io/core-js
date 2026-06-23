"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessMenuItemSchema = exports.UpdateMenuCategorySchema = exports.CreateBusinessMenuItemSchema = exports.CreateMenuCategorySchema = exports.BusinessMenuItemSchema = exports.MenuCategorySchema = exports.MenuItemChannelMappingSchema = exports.MenuCategoryChannelMappingSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const order_schema_1 = require("../order.schema");
const menu_item_variant_schema_1 = require("./menu-item-variant.schema");
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
exports.MenuCategoryChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalCategoryId: zod_1.default.string().describe("External category ID for this specific channel"),
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
exports.MenuItemChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalMenuItemId: zod_1.default.string().describe("External menu item ID for this specific channel"),
    externalCategoryId: zod_1.default.string().nullable().optional().describe("External category ID in this channel, if needed for sync payloads"),
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
exports.MenuCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1, "Category name is required").describe("Category name for menu organization (e.g., Appetizers, Main Course, Desserts). Used by AI Powered Services when presenting menu options to customers."),
    description: zod_1.default.string().nullable().optional().describe("Category description providing context about the type of items included. Helps customers navigate the menu."),
    displayOrder: zod_1.default.number().int().optional().describe("Numeric order for category display in menu listings. Lower numbers appear first. Enables custom menu organization."),
    channelMappings: zod_1.default.array(exports.MenuCategoryChannelMappingSchema).nullable().optional().describe("Per-channel category ID mappings for external platform integrations"),
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
exports.BusinessMenuItemSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1, "Menu item name is required").describe("Display name of the menu item shown to customers. Used by AI Powered Services in menu order conversations."),
    description: zod_1.default.string().nullable().optional().describe("Detailed item description including preparation style, ingredients, or special features. Helps customers make informed selections."),
    // Menu-specific fields
    price: zod_1.default.number().nonnegative().describe("Base price for this menu item in the account's currency. Used for order pricing calculations."),
    categoryId: zod_1.default.string().describe("References MenuCategory this item belongs to. Used for menu organization and AI-driven category-based browsing."),
    category: exports.MenuCategorySchema.optional().describe("Populated MenuCategory object for convenient access. Not required during creation; managed by Menu Management."),
    ingredients: zod_1.default.array(zod_1.default.string()).optional().describe("List of primary ingredients for dietary information and AI-powered ingredient-based searches (e.g., 'vegetarian options')."),
    allergens: zod_1.default.array(zod_1.default.string()).optional().describe("Common allergens present (e.g., ['nuts', 'dairy', 'gluten']). Critical for customer safety and AI allergen filtering."),
    nutritionalInfo: zod_1.default.object({
        calories: zod_1.default.number().optional().describe("Caloric content per serving."),
        protein: zod_1.default.number().optional().describe("Protein content in grams."),
        carbs: zod_1.default.number().optional().describe("Carbohydrate content in grams."),
        fat: zod_1.default.number().optional().describe("Fat content in grams."),
    }).optional().describe("Optional nutritional information for health-conscious customers and dietary compliance."),
    // Availability
    isAvailable: zod_1.default.boolean().default(true).describe("Real-time availability status (e.g., sold out, temporarily unavailable). AI Powered Services only presents available items. Defaults to true."),
    preparationTime: zod_1.default.number().int().positive().nullable().optional().describe("Estimated preparation time in minutes. Used for setting customer expectations and order timing in Menu Order workflow."),
    // Business Management
    isActive: zod_1.default.boolean().default(true).describe("Whether item is active in the menu catalog. Inactive items are hidden from customers. Defaults to true."),
    displayOrder: zod_1.default.number().int().optional().describe("Display order within category. Lower numbers appear first. Enables strategic item positioning."),
    channelMappings: zod_1.default.array(exports.MenuItemChannelMappingSchema).nullable().optional().describe("Per-channel menu item ID mappings for external platform integrations"),
    // Daypart availability
    dayParts: zod_1.default.array(order_schema_1.MenuItemDaypartSchema).nullable().optional().describe("Resolved recurring availability dayparts (e.g., Breakfast, Lunch, Dinner windows)"),
    // Ordering analytics (View Model only - not set on create/update)
    orderCount: zod_1.default.number().int().nonnegative().nullable().optional().describe("Total orders for this item (all time)"),
    recentOrderCount: zod_1.default.number().int().nonnegative().nullable().optional().describe("Orders for this item in the last 30 days"),
    lastOrderedAt: zod_1.default.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this item"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new menu category.
 * Omits auto-generated fields.
 */
exports.CreateMenuCategorySchema = exports.MenuCategorySchema.omit({
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
exports.CreateBusinessMenuItemSchema = exports.BusinessMenuItemSchema.omit({
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
    categoryId: zod_1.default.string().nullable().optional(),
    variants: zod_1.default.array(menu_item_variant_schema_1.CreateMenuItemVariantSchema.omit({ menuItemId: true })).min(1, "A menu item must have at least one variant").describe("Variants to create with this menu item. At least one is required; the parent menu item ID is assigned by the server."),
});
/**
 * Schema for updating an existing menu category.
 * All fields optional except id (required).
 */
exports.UpdateMenuCategorySchema = exports.CreateMenuCategorySchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Schema for updating an existing business menu item.
 * All fields optional except id (required).
 */
exports.UpdateBusinessMenuItemSchema = exports.CreateBusinessMenuItemSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
