import z from "zod";
/**
 * @fileoverview Business menu configuration schema definitions.
 * @module business-mgt/business-menu-config
 */
export declare const MenuCategorySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const BusinessMenuItemSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    categoryId: z.ZodString;
    category: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    ingredients: z.ZodOptional<z.ZodArray<z.ZodString>>;
    allergens: z.ZodOptional<z.ZodArray<z.ZodString>>;
    nutritionalInfo: z.ZodOptional<z.ZodObject<{
        calories: z.ZodOptional<z.ZodNumber>;
        protein: z.ZodOptional<z.ZodNumber>;
        carbs: z.ZodOptional<z.ZodNumber>;
        fat: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    preparationTime: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const MenuQRCodeSchema: z.ZodObject<{
    id: z.ZodString;
    menuUrl: z.ZodURL;
    qrCodeImage: z.ZodOptional<z.ZodString>;
    tableNumber: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Zod schema for creating a new menu category.
 *
 * Omits auto-generated fields.
 */
export declare const CreateMenuCategorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Zod schema for creating a new business menu item.
 *
 * Omits auto-generated fields and allows optional category specification.
 */
export declare const CreateBusinessMenuItemSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodNumber;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    ingredients: z.ZodOptional<z.ZodArray<z.ZodString>>;
    allergens: z.ZodOptional<z.ZodArray<z.ZodString>>;
    nutritionalInfo: z.ZodOptional<z.ZodObject<{
        calories: z.ZodOptional<z.ZodNumber>;
        protein: z.ZodOptional<z.ZodNumber>;
        carbs: z.ZodOptional<z.ZodNumber>;
        fat: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    preparationTime: z.ZodOptional<z.ZodNumber>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Zod schema for updating an existing menu category.
 *
 * All fields are optional (partial) except id.
 */
export declare const UpdateMenuCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Zod schema for updating an existing business menu item.
 *
 * All fields are optional (partial) except id.
 */
export declare const UpdateBusinessMenuItemSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    price: z.ZodOptional<z.ZodNumber>;
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    ingredients: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    allergens: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    nutritionalInfo: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        calories: z.ZodOptional<z.ZodNumber>;
        protein: z.ZodOptional<z.ZodNumber>;
        carbs: z.ZodOptional<z.ZodNumber>;
        fat: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    isAvailable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    preparationTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    categoryId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
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
export interface BusinessMenuItemFilters {
    search?: string;
    categoryId?: string;
    isActive?: boolean;
    isAvailable?: boolean;
    allergens?: string[];
    priceRange?: {
        min?: number;
        max?: number;
    };
}
export interface BusinessMenuItemSorting {
    field: 'name' | 'price' | 'createdAt' | 'displayOrder';
    direction: 'asc' | 'desc';
}
export interface BusinessMenuItemQueryOptions {
    page: number;
    pageSize: number;
    filters?: BusinessMenuItemFilters;
    sorting?: BusinessMenuItemSorting;
}
