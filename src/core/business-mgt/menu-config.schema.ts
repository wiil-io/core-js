import z from "zod";
import { BaseModelSchema } from "../base.schema";

/**
 * @fileoverview Business menu configuration schema definitions.
 * @module business-mgt/business-menu-config
 */


export const MenuCategorySchema = BaseModelSchema.safeExtend({
    name: z.string().min(1, "Category name is required").describe("Category name for menu organization (e.g., Appetizers, Main Course, Desserts). Used by AI Powered Services when presenting menu options to customers."),
    description: z.string().optional().describe("Category description providing context about the type of items included. Helps customers navigate the menu."),
    displayOrder: z.number().int().optional().describe("Numeric order for category display in menu listings. Lower numbers appear first. Enables custom menu organization."),
});

export const BusinessMenuItemSchema = BaseModelSchema.safeExtend({
    id: z.string().describe("Unique identifier for this menu item in the catalog managed by Menu Management."),
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
});

// Simple QR code for menu
export const MenuQRCodeSchema = z.object({
    id: z.string().describe("Unique identifier for this QR code instance."),
    menuUrl: z.string().url().describe("URL to the digital menu accessed by scanning this QR code. Links to menu browsing interface."),
    qrCodeImage: z.string().optional().describe("Base64 encoded QR code image for printing or digital display. Generated from menuUrl."),
    tableNumber: z.string().optional().describe("Optional table number for dine-in scenarios. Associates QR code with specific table for order attribution."),
});


/**
 * Zod schema for creating a new menu category.
 *
 * Omits auto-generated fields.
 */
export const CreateMenuCategorySchema = MenuCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});


/**
 * Zod schema for creating a new business menu item.
 *
 * Omits auto-generated fields and allows optional category specification.
 */
export const CreateBusinessMenuItemSchema = BusinessMenuItemSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    categoryId: true,
}).safeExtend({
    categoryId: z.string().nullable().optional(),
});

/**
 * Zod schema for updating an existing menu category.
 *
 * All fields are optional (partial) except id.
 */
export const UpdateMenuCategorySchema = CreateMenuCategorySchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Zod schema for updating an existing business menu item.
 *
 * All fields are optional (partial) except id.
 */
export const UpdateBusinessMenuItemSchema = CreateBusinessMenuItemSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Type definition for menu category.
 */
export type MenuCategory = z.infer<typeof MenuCategorySchema>;

/**
 * Type definition for business menu item.
 */
export type BusinessMenuItem = z.infer<typeof BusinessMenuItemSchema>;

/**
 * Type definition for menu QR code.
 */
export type MenuQRCode = z.infer<typeof MenuQRCodeSchema>;

/**
 * Type definition for creating a menu category.
 */
export type CreateMenuCategory = z.infer<typeof CreateMenuCategorySchema>;

/**
 * Type definition for creating a business menu item.
 */
export type CreateBusinessMenuItem = z.infer<typeof CreateBusinessMenuItemSchema>;

/**
 * Type definition for updating a menu category.
 */
export type UpdateMenuCategory = z.infer<typeof UpdateMenuCategorySchema>;

/**
 * Type definition for updating a business menu item.
 */
export type UpdateBusinessMenuItem = z.infer<typeof UpdateBusinessMenuItemSchema>;