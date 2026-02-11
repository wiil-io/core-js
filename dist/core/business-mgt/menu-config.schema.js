"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessMenuItemSchema = exports.UpdateMenuCategorySchema = exports.CreateBusinessMenuItemSchema = exports.CreateMenuCategorySchema = exports.MenuQRCodeSchema = exports.BusinessMenuItemSchema = exports.MenuCategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
/**
 * @fileoverview Business menu configuration schema definitions.
 * @module business-mgt/business-menu-config
 */
exports.MenuCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1, "Category name is required").describe("Category name for menu organization (e.g., Appetizers, Main Course, Desserts). Used by AI Powered Services when presenting menu options to customers."),
    description: zod_1.default.string().optional().describe("Category description providing context about the type of items included. Helps customers navigate the menu."),
    displayOrder: zod_1.default.number().int().optional().describe("Numeric order for category display in menu listings. Lower numbers appear first. Enables custom menu organization."),
});
exports.BusinessMenuItemSchema = base_schema_1.BaseModelSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this menu item in the catalog managed by Menu Management."),
    name: zod_1.default.string().min(1, "Menu item name is required").describe("Display name of the menu item shown to customers. Used by AI Powered Services in menu order conversations."),
    description: zod_1.default.string().optional().describe("Detailed item description including preparation style, ingredients, or special features. Helps customers make informed selections."),
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
    preparationTime: zod_1.default.number().int().positive().optional().describe("Estimated preparation time in minutes. Used for setting customer expectations and order timing in Menu Order workflow."),
    // Business Management
    isActive: zod_1.default.boolean().default(true).describe("Whether item is active in the menu catalog. Inactive items are hidden from customers. Defaults to true."),
    displayOrder: zod_1.default.number().int().optional().describe("Display order within category. Lower numbers appear first. Enables strategic item positioning."),
});
// Simple QR code for menu
exports.MenuQRCodeSchema = zod_1.default.object({
    id: zod_1.default.string().describe("Unique identifier for this QR code instance."),
    menuUrl: zod_1.default.url().describe("URL to the digital menu accessed by scanning this QR code. Links to menu browsing interface."),
    qrCodeImage: zod_1.default.string().optional().describe("Base64 encoded QR code image for printing or digital display. Generated from menuUrl."),
    tableNumber: zod_1.default.string().optional().describe("Optional table number for dine-in scenarios. Associates QR code with specific table for order attribution."),
});
/**
 * Zod schema for creating a new menu category.
 *
 * Omits auto-generated fields.
 */
exports.CreateMenuCategorySchema = exports.MenuCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Zod schema for creating a new business menu item.
 *
 * Omits auto-generated fields and allows optional category specification.
 */
exports.CreateBusinessMenuItemSchema = exports.BusinessMenuItemSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    categoryId: true,
}).safeExtend({
    categoryId: zod_1.default.string().nullable().optional(),
});
/**
 * Zod schema for updating an existing menu category.
 *
 * All fields are optional (partial) except id.
 */
exports.UpdateMenuCategorySchema = exports.CreateMenuCategorySchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Zod schema for updating an existing business menu item.
 *
 * All fields are optional (partial) except id.
 */
exports.UpdateBusinessMenuItemSchema = exports.CreateBusinessMenuItemSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
