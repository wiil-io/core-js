"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessMenuCatalogSchema = exports.MenuCatalogSchema = exports.MenuItemCatalogSchema = exports.MenuItemVariantCatalogSchema = void 0;
const zod_1 = require("zod");
const menu_config_schema_1 = require("./menu-config.schema");
const menu_item_variant_schema_1 = require("./menu-item-variant.schema");
const modifier_schema_1 = require("./modifier.schema");
/**
 * @fileoverview Menu catalog schema definitions for business management.
 * @module business-mgt/menu-catalog
 *
 * Includes catalog schemas for displaying menu items with variants,
 * modifier groups, and pricing information.
 */
// ============================================================================
// CATALOG SCHEMAS
// ============================================================================
/**
 * Menu item variant catalog schema.
 * Variant schema for catalog display.
 */
exports.MenuItemVariantCatalogSchema = menu_item_variant_schema_1.MenuItemVariantSchema;
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
exports.MenuItemCatalogSchema = menu_config_schema_1.BusinessMenuItemSchema.safeExtend({
    variants: zod_1.z.array(exports.MenuItemVariantCatalogSchema).min(1, "Every menu item must have at least one variant").describe("Menu item variants for selection"),
    priceRange: zod_1.z.object({
        min: zod_1.z.number().nonnegative().describe("Minimum price across variants"),
        max: zod_1.z.number().nonnegative().describe("Maximum price across variants"),
    }).nullable().optional().describe("Resolved min/max price across variants"),
    isVariantSelectable: zod_1.z.boolean().default(true).describe("Whether this menu item requires/uses variant selection"),
    modifierGroups: zod_1.z.array(modifier_schema_1.ModifierGroupViewSchema).default([]).describe("Hydrated modifier groups with merged binding overrides and options"),
});
/**
 * Menu catalog schema.
 * Represents a category with its menu items and variants.
 *
 * @typedef {Object} MenuCatalog
 * @property {MenuCategory} category - Menu category
 * @property {MenuItemCatalog[]} items - List of menu items with variants
 */
exports.MenuCatalogSchema = zod_1.z.object({
    category: menu_config_schema_1.MenuCategorySchema.describe("Menu category"),
    items: zod_1.z.array(exports.MenuItemCatalogSchema).describe("List of menu items with variants"),
}).describe("Schema representing a menu category and its items with variants");
/**
 * Business menu catalog schema.
 * Full catalog as array of category sections.
 */
exports.BusinessMenuCatalogSchema = zod_1.z.array(exports.MenuCatalogSchema).describe("Schema representing a business menu catalog");
