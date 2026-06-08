"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSetViewSchema = exports.MenuSetItemViewSchema = exports.UpdateMenuSetSchema = exports.CreateMenuSetSchema = exports.MenuSetSchema = exports.MenuSetSelectorSchema = exports.MenuSetItemSchema = exports.MenuSetChannelMappingSchema = exports.MenuSetTargetingMode = exports.MenuSetPricingMode = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const menu_config_schema_1 = require("./menu-config.schema");
/**
 * @fileoverview Menu set schema definitions for bundled menu items.
 * @module business-mgt/menu-set
 *
 * Includes menu sets (bundles/combos), pricing modes, targeting modes,
 * and selectors for dynamic set membership.
 */
// ============================================================================
// ENUMS
// ============================================================================
/**
 * Menu set pricing mode.
 * Determines how set pricing is calculated.
 *
 * @enum {string}
 */
var MenuSetPricingMode;
(function (MenuSetPricingMode) {
    MenuSetPricingMode["FIXED"] = "FIXED";
    MenuSetPricingMode["SUM_OF_ITEMS"] = "SUM_OF_ITEMS";
})(MenuSetPricingMode || (exports.MenuSetPricingMode = MenuSetPricingMode = {}));
/**
 * Menu set targeting mode.
 * Determines how set members are selected.
 *
 * @enum {string}
 */
var MenuSetTargetingMode;
(function (MenuSetTargetingMode) {
    MenuSetTargetingMode["EXPLICIT"] = "EXPLICIT";
    MenuSetTargetingMode["SELECTOR"] = "SELECTOR";
})(MenuSetTargetingMode || (exports.MenuSetTargetingMode = MenuSetTargetingMode = {}));
// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================
/**
 * Menu set channel mapping schema.
 * Maps menu sets to external platform identifiers.
 *
 * @typedef {Object} MenuSetChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalMenuSetId - External menu set ID for synchronization
 */
exports.MenuSetChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalMenuSetId: zod_1.default.string().describe("External menu set ID for this specific channel"),
}).describe("Per-channel external menu set ID mapping");
// ============================================================================
// MENU SET ITEM SCHEMA
// ============================================================================
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
exports.MenuSetItemSchema = zod_1.default.object({
    menuItemId: zod_1.default.string().describe("Menu item ID included in the set"),
    menuItemVariantId: zod_1.default.string().describe("Menu item variant ID included in the set"),
    quantity: zod_1.default.number().int().positive().describe("Quantity of this menu item in the set"),
    isRequired: zod_1.default.boolean().default(true).describe("Whether this item is required in the set"),
    displayOrder: zod_1.default.number().int().nullable().optional().describe("Display order inside the set"),
});
// ============================================================================
// MENU SET SELECTOR SCHEMA
// ============================================================================
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
exports.MenuSetSelectorSchema = zod_1.default.object({
    menuItemIdsAny: zod_1.default.array(zod_1.default.string()).max(5000).default([]).describe("Any matching catalog menu item IDs"),
    menuItemIdsAll: zod_1.default.array(zod_1.default.string()).max(5000).default([]).describe("All required catalog menu item IDs"),
    allMenuItems: zod_1.default.boolean().default(false).describe("Includes all catalog menu items"),
    quantityExact: zod_1.default.number().int().positive().optional().describe("Requires exact matched quantity"),
    quantityMin: zod_1.default.number().int().nonnegative().optional().describe("Requires minimum matched quantity"),
    quantityMax: zod_1.default.number().int().positive().optional().describe("Caps maximum matched quantity"),
}).superRefine((data, ctx) => {
    const selectorModes = [
        data.menuItemIdsAny.length > 0,
        data.menuItemIdsAll.length > 0,
        data.allMenuItems,
    ].filter(Boolean).length;
    if (selectorModes !== 1) {
        ctx.addIssue({
            code: "custom",
            path: ["menuItemIdsAny"],
            message: "Exactly one of menuItemIdsAny, menuItemIdsAll, or allMenuItems must be set",
        });
    }
    if (data.quantityExact !== undefined && (data.quantityMin !== undefined || data.quantityMax !== undefined)) {
        ctx.addIssue({
            code: "custom",
            path: ["quantityExact"],
            message: "quantityExact cannot be combined with quantityMin or quantityMax",
        });
    }
    if (data.quantityMin !== undefined &&
        data.quantityMax !== undefined &&
        data.quantityMax < data.quantityMin) {
        ctx.addIssue({
            code: "custom",
            path: ["quantityMax"],
            message: "quantityMax must be greater than or equal to quantityMin",
        });
    }
});
// ============================================================================
// MENU SET SCHEMA
// ============================================================================
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
exports.MenuSetSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.default.string().nullable().optional().describe("Location ID for location-specific menu sets"),
    menuRevisionId: zod_1.default.string().nullable().optional().describe("Optional menu revision ID for version-scoped data"),
    code: zod_1.default.string().min(1).nullable().optional().describe("Stable internal code for idempotent integration matching"),
    name: zod_1.default.string().min(1, "Menu set name is required").describe("Menu set name"),
    description: zod_1.default.string().nullable().optional().describe("Menu set description"),
    channelMappings: zod_1.default.array(exports.MenuSetChannelMappingSchema).nullable().optional().describe("Per-channel menu set ID mappings"),
    targetingMode: zod_1.default.enum(MenuSetTargetingMode).default(MenuSetTargetingMode.EXPLICIT).describe("How this set selects its members"),
    pricingMode: zod_1.default.enum(MenuSetPricingMode).default(MenuSetPricingMode.SUM_OF_ITEMS).describe("How set pricing is resolved"),
    fixedPrice: zod_1.default.number().nonnegative().nullable().optional().describe("Set price when pricing mode is FIXED"),
    items: zod_1.default.array(exports.MenuSetItemSchema).nullable().optional().describe("Explicit menu members for EXPLICIT targeting"),
    selector: exports.MenuSetSelectorSchema.nullable().optional().describe("Selector definition for SELECTOR targeting"),
    isActive: zod_1.default.boolean().default(true).describe("Whether this menu set is active"),
    imageUrl: zod_1.default.string().nullable().optional().describe("Public image URL for the menu set"),
    imageUrls: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("Public image URLs for the menu set"),
    displayOrder: zod_1.default.number().int().nullable().optional().describe("Display order in catalog"),
}).superRefine((data, ctx) => {
    if (data.pricingMode === MenuSetPricingMode.FIXED && (data.fixedPrice === undefined || data.fixedPrice === null)) {
        ctx.addIssue({
            code: "custom",
            path: ["fixedPrice"],
            message: "fixedPrice is required when pricingMode is FIXED",
        });
    }
    if (data.pricingMode === MenuSetPricingMode.SUM_OF_ITEMS && data.fixedPrice != null) {
        ctx.addIssue({
            code: "custom",
            path: ["fixedPrice"],
            message: "fixedPrice must be null or omitted when pricingMode is SUM_OF_ITEMS",
        });
    }
    if (data.targetingMode === MenuSetTargetingMode.EXPLICIT) {
        if (!data.items || data.items.length === 0) {
            ctx.addIssue({
                code: "custom",
                path: ["items"],
                message: "items is required when targetingMode is EXPLICIT",
            });
        }
        if (data.selector != null) {
            ctx.addIssue({
                code: "custom",
                path: ["selector"],
                message: "selector must be null or omitted when targetingMode is EXPLICIT",
            });
        }
    }
    if (data.targetingMode === MenuSetTargetingMode.SELECTOR) {
        if (data.selector == null) {
            ctx.addIssue({
                code: "custom",
                path: ["selector"],
                message: "selector is required when targetingMode is SELECTOR",
            });
        }
        if (data.items && data.items.length > 0) {
            ctx.addIssue({
                code: "custom",
                path: ["items"],
                message: "items must be empty when targetingMode is SELECTOR",
            });
        }
    }
    if (!data.items || data.items.length === 0) {
        return;
    }
    const seenItemKeys = new Set();
    for (const [index, item] of data.items.entries()) {
        const itemKey = `${item.menuItemId}::${item.menuItemVariantId}`;
        if (seenItemKeys.has(itemKey)) {
            ctx.addIssue({
                code: "custom",
                path: ["items", index],
                message: "Duplicate menuItemId + menuItemVariantId combination is not allowed in a menu set",
            });
        }
        seenItemKeys.add(itemKey);
    }
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new menu set.
 * Omits auto-generated fields.
 */
exports.CreateMenuSetSchema = exports.MenuSetSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing menu set.
 * All fields optional except id (required).
 */
exports.UpdateMenuSetSchema = exports.CreateMenuSetSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
// ============================================================================
// VIEW SCHEMAS
// ============================================================================
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
exports.MenuSetItemViewSchema = exports.MenuSetItemSchema.safeExtend({
    menuItem: menu_config_schema_1.BusinessMenuItemSchema.nullable().optional().describe("Resolved menu item snapshot"),
});
/**
 * Menu set view schema.
 * Read-optimized view with resolved items and pricing.
 *
 * @typedef {Object} MenuSetView
 * @property {MenuSetItemView[]} [items] - Resolved menu set items
 * @property {number} [resolvedPrice] - Computed display price for the set
 */
exports.MenuSetViewSchema = exports.MenuSetSchema.omit({
    items: true,
}).safeExtend({
    items: zod_1.default.array(exports.MenuSetItemViewSchema).nullable().optional(),
    resolvedPrice: zod_1.default.number().nonnegative().nullable().optional().describe("Computed display price for the set"),
});
