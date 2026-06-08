import z from "zod";

/**
 * @fileoverview Display order schema definitions for managing item and category ordering.
 * @module type-definitions/display-order
 */

/**
 * Display order position mode enum.
 */
export const DisplayOrderPositionModeSchema = z.enum([
    "BEGINNING",
    "END",
    "KEEP_CURRENT",
    "BEFORE_ITEM",
    "AFTER_ITEM",
    "ABSOLUTE_INDEX",
]);

/**
 * Display order position intent schema.
 */
export const DisplayOrderPositionIntentSchema = z.object({
    mode: DisplayOrderPositionModeSchema.describe("Positioning mode for the item"),
}).describe("How to place an entity in an ordered list");

/**
 * Validation helper for position intent.
 */
const applyPositionIntentValidation = (
    data: { positionIntent: { mode: z.infer<typeof DisplayOrderPositionModeSchema> }; absoluteIndex: number | null },
    ctx: z.RefinementCtx,
    anchorValue: string | null,
    anchorPath: string,
) => {
    const mode = data.positionIntent.mode;
    const requiresAnchor = mode === "BEFORE_ITEM" || mode === "AFTER_ITEM";
    const requiresAbsoluteIndex = mode === "ABSOLUTE_INDEX";

    if (requiresAnchor && !anchorValue) {
        ctx.addIssue({
            code: "custom",
            path: [anchorPath],
            message: `${anchorPath} is required for BEFORE_ITEM and AFTER_ITEM`,
        });
    }

    if (requiresAbsoluteIndex && data.absoluteIndex === null) {
        ctx.addIssue({
            code: "custom",
            path: ["absoluteIndex"],
            message: "absoluteIndex is required for ABSOLUTE_INDEX",
        });
    }

    if (!requiresAnchor && anchorValue !== null) {
        ctx.addIssue({
            code: "custom",
            path: [anchorPath],
            message: `${anchorPath} must be null unless mode is BEFORE_ITEM or AFTER_ITEM`,
        });
    }

    if (!requiresAbsoluteIndex && data.absoluteIndex !== null) {
        ctx.addIssue({
            code: "custom",
            path: ["absoluteIndex"],
            message: "absoluteIndex must be null unless mode is ABSOLUTE_INDEX",
        });
    }
};

/**
 * Display order request schema for item positioning.
 */
export const DisplayOrderRequestSchema = z.object({
    itemId: z.string().nullable().describe("Target item identifier. Null when creating a new item"),
    targetCategoryId: z.string().min(1).describe("Category where ordering applies"),
    positionIntent: DisplayOrderPositionIntentSchema,
    anchorItemId: z.string().nullable().describe("Required for BEFORE_ITEM and AFTER_ITEM"),
    absoluteIndex: z.number().int().nonnegative().nullable().describe("Required for ABSOLUTE_INDEX (0-based)"),
    idempotencyKey: z.uuid().describe("Client-provided idempotency key (UUID v4)"),
    expectedVersion: z.number().int().nonnegative().describe("Optimistic concurrency version"),
}).superRefine((data, ctx) => {
    applyPositionIntentValidation(data, ctx, data.anchorItemId, "anchorItemId");
}).describe("Configuration for display order of items in listings");

/**
 * Display order response schema.
 */
export const DisplayOrderResponseSchema = z.object({
    itemId: z.string().min(1).describe("Resolved item identifier"),
    targetCategoryId: z.string().min(1).describe("Category where the item is ordered"),
    resolvedDisplayOrder: z.number().int().nonnegative().describe("Persisted display order value"),
    resolvedPosition: z.number().int().positive().optional().describe("Optional 1-based position for UI"),
    categoryVersion: z.number().int().nonnegative().describe("Updated category version after reorder"),
    reindexed: z.boolean().describe("Whether sibling items were normalized/reindexed"),
}).describe("Result of applying display order intent");

/**
 * Create display order placement schema for create-time positioning.
 */
export const CreateDisplayOrderPlacementSchema = z.object({
    placementIntent: DisplayOrderPositionIntentSchema,
    anchorItemId: z.string().nullable().optional().describe("Anchor item for relative positioning"),
    absoluteIndex: z.number().int().nonnegative().nullable().optional().describe("Absolute index for ABSOLUTE_INDEX mode"),
}).superRefine((data, ctx) => {
    applyPositionIntentValidation(
        {
            positionIntent: data.placementIntent,
            absoluteIndex: data.absoluteIndex ?? null,
        },
        ctx,
        data.anchorItemId ?? null,
        "anchorItemId",
    );
}).describe("Optional create-time placement block for resolving displayOrder");

/**
 * Category display order request schema.
 */
export const CategoryDisplayOrderRequestSchema = z.object({
    categoryId: z.string().min(1).describe("Category to move"),
    targetParentCategoryId: z.string().nullable().describe("Target parent category. Null for root-level categories"),
    positionIntent: DisplayOrderPositionIntentSchema,
    anchorCategoryId: z.string().nullable().describe("Required for BEFORE_ITEM and AFTER_ITEM"),
    absoluteIndex: z.number().int().nonnegative().nullable().describe("Required for ABSOLUTE_INDEX (0-based)"),
    idempotencyKey: z.uuid().describe("Client-provided idempotency key (UUID v4)"),
    expectedVersion: z.number().int().nonnegative().describe("Optimistic concurrency version"),
}).superRefine((data, ctx) => {
    applyPositionIntentValidation(data, ctx, data.anchorCategoryId, "anchorCategoryId");
}).describe("Configuration for reordering categories");

/**
 * Category display order response schema.
 */
export const CategoryDisplayOrderResponseSchema = z.object({
    categoryId: z.string().min(1).describe("Resolved category identifier"),
    targetParentCategoryId: z.string().nullable().describe("Resolved parent category. Null for root-level categories"),
    resolvedDisplayOrder: z.number().int().nonnegative().describe("Persisted display order value"),
    resolvedPosition: z.number().int().positive().optional().describe("Optional 1-based position for UI"),
    categoryVersion: z.number().int().nonnegative().describe("Updated category version after reorder"),
    reindexed: z.boolean().describe("Whether sibling categories were normalized/reindexed"),
}).describe("Result of applying category order intent");

/**
 * Category order entry schema for bulk ordering.
 */
export const CategoryOrderEntrySchema = z.object({
    categoryId: z.string().min(1).describe("Category identifier"),
    displayOrder: z.number().int().nonnegative().describe("Target display order for the category"),
});

/**
 * Bulk category display orders request schema.
 */
export const CategoryDisplayOrdersRequestSchema = z.object({
    categoryOrders: z.array(CategoryOrderEntrySchema).min(1).describe("Ordered category display values"),
});

/**
 * Category item order entry schema.
 */
export const CategoryItemOrderEntrySchema = z.object({
    itemId: z.string().min(1).describe("Item identifier"),
    displayOrder: z.number().int().nonnegative().describe("Target display order for the item"),
});

/**
 * Bulk category item display orders request schema.
 */
export const CategoryItemDisplayOrdersRequestSchema = z.object({
    categoryId: z.string().min(1).describe("Category identifier"),
    itemOrders: z.array(CategoryItemOrderEntrySchema).min(1).describe("Ordered item display values for the category"),
});

// Type exports
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
