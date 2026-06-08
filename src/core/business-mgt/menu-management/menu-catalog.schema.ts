import { z } from "zod";
import { BusinessMenuItemSchema, MenuCategorySchema } from "./menu-config.schema";
import { MenuItemVariantSchema } from "./menu-item-variant.schema";
import { ModifierGroupViewSchema } from "./modifier.schema";

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
export const MenuItemVariantCatalogSchema = MenuItemVariantSchema;

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
export const MenuItemCatalogSchema = BusinessMenuItemSchema.safeExtend({
    variants: z.array(MenuItemVariantCatalogSchema).min(1, "Every menu item must have at least one variant").describe("Menu item variants for selection"),
    priceRange: z.object({
        min: z.number().nonnegative().describe("Minimum price across variants"),
        max: z.number().nonnegative().describe("Maximum price across variants"),
    }).nullable().optional().describe("Resolved min/max price across variants"),
    isVariantSelectable: z.boolean().default(true).describe("Whether this menu item requires/uses variant selection"),
    modifierGroups: z.array(ModifierGroupViewSchema).default([]).describe("Hydrated modifier groups with merged binding overrides and options"),
});

/**
 * Menu catalog schema.
 * Represents a category with its menu items and variants.
 *
 * @typedef {Object} MenuCatalog
 * @property {MenuCategory} category - Menu category
 * @property {MenuItemCatalog[]} items - List of menu items with variants
 */
export const MenuCatalogSchema = z.object({
    category: MenuCategorySchema.describe("Menu category"),
    items: z.array(MenuItemCatalogSchema).describe("List of menu items with variants"),
}).describe("Schema representing a menu category and its items with variants");

/**
 * Business menu catalog schema.
 * Full catalog as array of category sections.
 */
export const BusinessMenuCatalogSchema = z.array(MenuCatalogSchema).describe("Schema representing a business menu catalog");

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type MenuItemVariantCatalog = z.infer<typeof MenuItemVariantCatalogSchema>;
export type MenuItemCatalog = z.infer<typeof MenuItemCatalogSchema>;
export type MenuCatalog = z.infer<typeof MenuCatalogSchema>;
export type BusinessMenuCatalog = z.infer<typeof BusinessMenuCatalogSchema>;
