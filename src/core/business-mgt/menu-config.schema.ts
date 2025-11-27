import z from "zod";
import { BaseModelSchema } from "../base.schema";

/**
 * @fileoverview Business menu configuration schema definitions.
 * @module business-mgt/business-menu-config
 */


export const MenuCategorySchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    name: z.string().min(1, "Category name is required"),
    description: z.string().optional(),
    displayOrder: z.number().int().optional(),
    isDefault: z.boolean().default(false),
});

export const BusinessMenuItemSchema = BaseModelSchema.safeExtend({
    id: z.string(),
    organizationId: z.string(),
    name: z.string().min(1, "Menu item name is required"),
    description: z.string().optional(),

    // Menu-specific fields
    price: z.number().nonnegative(),
    categoryId: z.string(),
    category: MenuCategorySchema.optional(),
    ingredients: z.array(z.string()).optional(),
    allergens: z.array(z.string()).optional(),
    nutritionalInfo: z.object({
        calories: z.number().optional(),
        protein: z.number().optional(),
        carbs: z.number().optional(),
        fat: z.number().optional(),
    }).optional(),

    // Availability
    isAvailable: z.boolean().default(true),
    preparationTime: z.number().int().positive().optional(),

    // Business Management
    isActive: z.boolean().default(true),
    displayOrder: z.number().int().optional(),
});

// Simple QR code for menu
export const MenuQRCodeSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    menuUrl: z.string().url(),
    qrCodeImage: z.string().optional(),
    tableNumber: z.string().optional(),
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
    category: z.string().nullable().optional(),
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