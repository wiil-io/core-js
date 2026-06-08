"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuItemVariantSchema = exports.CreateMenuItemVariantSchema = exports.MenuItemVariantSchema = exports.MenuItemVariantChannelMappingSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
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
exports.MenuItemVariantChannelMappingSchema = zod_1.z.object({
    channelId: zod_1.z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalVariantId: zod_1.z.string().describe("External variant ID for this specific channel"),
    externalMenuItemId: zod_1.z.string().nullable().optional().describe("Optional external parent menu item ID in this channel"),
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
exports.MenuItemVariantSchema = base_schema_1.BaseModelSchema.safeExtend({
    menuItemId: zod_1.z.string().describe("Parent menu item ID this variant belongs to"),
    name: zod_1.z.string().min(1, "Variant name is required").describe("Variant name (e.g., Small, Medium, Large, Regular, Family Size)"),
    description: zod_1.z.string().nullable().optional().describe("Variant description with additional details"),
    price: zod_1.z.number().nonnegative().describe("Variant price in the account's currency"),
    isAvailable: zod_1.z.boolean().default(true).describe("Whether variant is currently available for ordering"),
    isActive: zod_1.z.boolean().default(true).describe("Whether variant is active in the menu catalog"),
    isDefault: zod_1.z.boolean().default(false).describe("Whether this is the default variant for the menu item"),
    variantChannelMappings: zod_1.z.array(exports.MenuItemVariantChannelMappingSchema).nullable().optional().describe("Per-channel variant ID mappings for external platform integrations"),
    // Ordering analytics (View Model only - not set on create/update)
    orderCount: zod_1.z.number().int().nonnegative().nullable().optional().describe("Total orders for this variant (all time)"),
    recentOrderCount: zod_1.z.number().int().nonnegative().nullable().optional().describe("Orders for this variant in the last 30 days"),
    lastOrderedAt: zod_1.z.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this variant"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new menu item variant.
 * Omits auto-generated fields.
 */
exports.CreateMenuItemVariantSchema = exports.MenuItemVariantSchema.omit({
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
exports.UpdateMenuItemVariantSchema = exports.CreateMenuItemVariantSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
