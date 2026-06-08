import z from "zod";
/**
 * @fileoverview Display order schema definitions for managing item and category ordering.
 * @module type-definitions/display-order
 */
/**
 * Display order position mode enum.
 */
export declare const DisplayOrderPositionModeSchema: z.ZodEnum<{
    BEGINNING: "BEGINNING";
    END: "END";
    KEEP_CURRENT: "KEEP_CURRENT";
    BEFORE_ITEM: "BEFORE_ITEM";
    AFTER_ITEM: "AFTER_ITEM";
    ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
}>;
/**
 * Display order position intent schema.
 */
export declare const DisplayOrderPositionIntentSchema: z.ZodObject<{
    mode: z.ZodEnum<{
        BEGINNING: "BEGINNING";
        END: "END";
        KEEP_CURRENT: "KEEP_CURRENT";
        BEFORE_ITEM: "BEFORE_ITEM";
        AFTER_ITEM: "AFTER_ITEM";
        ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
    }>;
}, z.core.$strip>;
/**
 * Display order request schema for item positioning.
 */
export declare const DisplayOrderRequestSchema: z.ZodObject<{
    itemId: z.ZodNullable<z.ZodString>;
    targetCategoryId: z.ZodString;
    positionIntent: z.ZodObject<{
        mode: z.ZodEnum<{
            BEGINNING: "BEGINNING";
            END: "END";
            KEEP_CURRENT: "KEEP_CURRENT";
            BEFORE_ITEM: "BEFORE_ITEM";
            AFTER_ITEM: "AFTER_ITEM";
            ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
        }>;
    }, z.core.$strip>;
    anchorItemId: z.ZodNullable<z.ZodString>;
    absoluteIndex: z.ZodNullable<z.ZodNumber>;
    idempotencyKey: z.ZodUUID;
    expectedVersion: z.ZodNumber;
}, z.core.$strip>;
/**
 * Display order response schema.
 */
export declare const DisplayOrderResponseSchema: z.ZodObject<{
    itemId: z.ZodString;
    targetCategoryId: z.ZodString;
    resolvedDisplayOrder: z.ZodNumber;
    resolvedPosition: z.ZodOptional<z.ZodNumber>;
    categoryVersion: z.ZodNumber;
    reindexed: z.ZodBoolean;
}, z.core.$strip>;
/**
 * Create display order placement schema for create-time positioning.
 */
export declare const CreateDisplayOrderPlacementSchema: z.ZodObject<{
    placementIntent: z.ZodObject<{
        mode: z.ZodEnum<{
            BEGINNING: "BEGINNING";
            END: "END";
            KEEP_CURRENT: "KEEP_CURRENT";
            BEFORE_ITEM: "BEFORE_ITEM";
            AFTER_ITEM: "AFTER_ITEM";
            ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
        }>;
    }, z.core.$strip>;
    anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Category display order request schema.
 */
export declare const CategoryDisplayOrderRequestSchema: z.ZodObject<{
    categoryId: z.ZodString;
    targetParentCategoryId: z.ZodNullable<z.ZodString>;
    positionIntent: z.ZodObject<{
        mode: z.ZodEnum<{
            BEGINNING: "BEGINNING";
            END: "END";
            KEEP_CURRENT: "KEEP_CURRENT";
            BEFORE_ITEM: "BEFORE_ITEM";
            AFTER_ITEM: "AFTER_ITEM";
            ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
        }>;
    }, z.core.$strip>;
    anchorCategoryId: z.ZodNullable<z.ZodString>;
    absoluteIndex: z.ZodNullable<z.ZodNumber>;
    idempotencyKey: z.ZodUUID;
    expectedVersion: z.ZodNumber;
}, z.core.$strip>;
/**
 * Category display order response schema.
 */
export declare const CategoryDisplayOrderResponseSchema: z.ZodObject<{
    categoryId: z.ZodString;
    targetParentCategoryId: z.ZodNullable<z.ZodString>;
    resolvedDisplayOrder: z.ZodNumber;
    resolvedPosition: z.ZodOptional<z.ZodNumber>;
    categoryVersion: z.ZodNumber;
    reindexed: z.ZodBoolean;
}, z.core.$strip>;
/**
 * Category order entry schema for bulk ordering.
 */
export declare const CategoryOrderEntrySchema: z.ZodObject<{
    categoryId: z.ZodString;
    displayOrder: z.ZodNumber;
}, z.core.$strip>;
/**
 * Bulk category display orders request schema.
 */
export declare const CategoryDisplayOrdersRequestSchema: z.ZodObject<{
    categoryOrders: z.ZodArray<z.ZodObject<{
        categoryId: z.ZodString;
        displayOrder: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Category item order entry schema.
 */
export declare const CategoryItemOrderEntrySchema: z.ZodObject<{
    itemId: z.ZodString;
    displayOrder: z.ZodNumber;
}, z.core.$strip>;
/**
 * Bulk category item display orders request schema.
 */
export declare const CategoryItemDisplayOrdersRequestSchema: z.ZodObject<{
    categoryId: z.ZodString;
    itemOrders: z.ZodArray<z.ZodObject<{
        itemId: z.ZodString;
        displayOrder: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DisplayOrderPositionMode = z.infer<typeof DisplayOrderPositionModeSchema>;
export type DisplayOrderPositionIntent = z.infer<typeof DisplayOrderPositionIntentSchema>;
export type CreateDisplayOrderPlacement = z.infer<typeof CreateDisplayOrderPlacementSchema>;
export type DisplayOrderRequest = z.infer<typeof DisplayOrderRequestSchema>;
export type DisplayOrderResponse = z.infer<typeof DisplayOrderResponseSchema>;
export type CategoryDisplayOrderRequest = z.infer<typeof CategoryDisplayOrderRequestSchema>;
export type CategoryDisplayOrderResponse = z.infer<typeof CategoryDisplayOrderResponseSchema>;
export type CategoryOrderEntry = z.infer<typeof CategoryOrderEntrySchema>;
export type CategoryDisplayOrdersRequest = z.infer<typeof CategoryDisplayOrdersRequestSchema>;
export type CategoryItemOrderEntry = z.infer<typeof CategoryItemOrderEntrySchema>;
export type CategoryItemDisplayOrdersRequest = z.infer<typeof CategoryItemDisplayOrdersRequestSchema>;
