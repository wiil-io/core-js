"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryItemDisplayOrdersRequestSchema = exports.CategoryItemOrderEntrySchema = exports.CategoryDisplayOrdersRequestSchema = exports.CategoryOrderEntrySchema = exports.CategoryDisplayOrderResponseSchema = exports.CategoryDisplayOrderRequestSchema = exports.CreateDisplayOrderPlacementSchema = exports.DisplayOrderResponseSchema = exports.DisplayOrderRequestSchema = exports.DisplayOrderPositionIntentSchema = exports.DisplayOrderPositionModeSchema = void 0;
const zod_1 = __importDefault(require("zod"));
/**
 * @fileoverview Display order schema definitions for managing item and category ordering.
 * @module type-definitions/display-order
 */
/**
 * Display order position mode enum.
 */
exports.DisplayOrderPositionModeSchema = zod_1.default.enum([
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
exports.DisplayOrderPositionIntentSchema = zod_1.default.object({
    mode: exports.DisplayOrderPositionModeSchema.describe("Positioning mode for the item"),
}).describe("How to place an entity in an ordered list");
/**
 * Validation helper for position intent.
 */
const applyPositionIntentValidation = (data, ctx, anchorValue, anchorPath) => {
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
exports.DisplayOrderRequestSchema = zod_1.default.object({
    itemId: zod_1.default.string().nullable().describe("Target item identifier. Null when creating a new item"),
    targetCategoryId: zod_1.default.string().min(1).describe("Category where ordering applies"),
    positionIntent: exports.DisplayOrderPositionIntentSchema,
    anchorItemId: zod_1.default.string().nullable().describe("Required for BEFORE_ITEM and AFTER_ITEM"),
    absoluteIndex: zod_1.default.number().int().nonnegative().nullable().describe("Required for ABSOLUTE_INDEX (0-based)"),
    idempotencyKey: zod_1.default.uuid().describe("Client-provided idempotency key (UUID v4)"),
    expectedVersion: zod_1.default.number().int().nonnegative().describe("Optimistic concurrency version"),
}).superRefine((data, ctx) => {
    applyPositionIntentValidation(data, ctx, data.anchorItemId, "anchorItemId");
}).describe("Configuration for display order of items in listings");
/**
 * Display order response schema.
 */
exports.DisplayOrderResponseSchema = zod_1.default.object({
    itemId: zod_1.default.string().min(1).describe("Resolved item identifier"),
    targetCategoryId: zod_1.default.string().min(1).describe("Category where the item is ordered"),
    resolvedDisplayOrder: zod_1.default.number().int().nonnegative().describe("Persisted display order value"),
    resolvedPosition: zod_1.default.number().int().positive().optional().describe("Optional 1-based position for UI"),
    categoryVersion: zod_1.default.number().int().nonnegative().describe("Updated category version after reorder"),
    reindexed: zod_1.default.boolean().describe("Whether sibling items were normalized/reindexed"),
}).describe("Result of applying display order intent");
/**
 * Create display order placement schema for create-time positioning.
 */
exports.CreateDisplayOrderPlacementSchema = zod_1.default.object({
    placementIntent: exports.DisplayOrderPositionIntentSchema,
    anchorItemId: zod_1.default.string().nullable().optional().describe("Anchor item for relative positioning"),
    absoluteIndex: zod_1.default.number().int().nonnegative().nullable().optional().describe("Absolute index for ABSOLUTE_INDEX mode"),
}).superRefine((data, ctx) => {
    applyPositionIntentValidation({
        positionIntent: data.placementIntent,
        absoluteIndex: data.absoluteIndex ?? null,
    }, ctx, data.anchorItemId ?? null, "anchorItemId");
}).describe("Optional create-time placement block for resolving displayOrder");
/**
 * Category display order request schema.
 */
exports.CategoryDisplayOrderRequestSchema = zod_1.default.object({
    categoryId: zod_1.default.string().min(1).describe("Category to move"),
    targetParentCategoryId: zod_1.default.string().nullable().describe("Target parent category. Null for root-level categories"),
    positionIntent: exports.DisplayOrderPositionIntentSchema,
    anchorCategoryId: zod_1.default.string().nullable().describe("Required for BEFORE_ITEM and AFTER_ITEM"),
    absoluteIndex: zod_1.default.number().int().nonnegative().nullable().describe("Required for ABSOLUTE_INDEX (0-based)"),
    idempotencyKey: zod_1.default.uuid().describe("Client-provided idempotency key (UUID v4)"),
    expectedVersion: zod_1.default.number().int().nonnegative().describe("Optimistic concurrency version"),
}).superRefine((data, ctx) => {
    applyPositionIntentValidation(data, ctx, data.anchorCategoryId, "anchorCategoryId");
}).describe("Configuration for reordering categories");
/**
 * Category display order response schema.
 */
exports.CategoryDisplayOrderResponseSchema = zod_1.default.object({
    categoryId: zod_1.default.string().min(1).describe("Resolved category identifier"),
    targetParentCategoryId: zod_1.default.string().nullable().describe("Resolved parent category. Null for root-level categories"),
    resolvedDisplayOrder: zod_1.default.number().int().nonnegative().describe("Persisted display order value"),
    resolvedPosition: zod_1.default.number().int().positive().optional().describe("Optional 1-based position for UI"),
    categoryVersion: zod_1.default.number().int().nonnegative().describe("Updated category version after reorder"),
    reindexed: zod_1.default.boolean().describe("Whether sibling categories were normalized/reindexed"),
}).describe("Result of applying category order intent");
/**
 * Category order entry schema for bulk ordering.
 */
exports.CategoryOrderEntrySchema = zod_1.default.object({
    categoryId: zod_1.default.string().min(1).describe("Category identifier"),
    displayOrder: zod_1.default.number().int().nonnegative().describe("Target display order for the category"),
});
/**
 * Bulk category display orders request schema.
 */
exports.CategoryDisplayOrdersRequestSchema = zod_1.default.object({
    categoryOrders: zod_1.default.array(exports.CategoryOrderEntrySchema).min(1).describe("Ordered category display values"),
});
/**
 * Category item order entry schema.
 */
exports.CategoryItemOrderEntrySchema = zod_1.default.object({
    itemId: zod_1.default.string().min(1).describe("Item identifier"),
    displayOrder: zod_1.default.number().int().nonnegative().describe("Target display order for the item"),
});
/**
 * Bulk category item display orders request schema.
 */
exports.CategoryItemDisplayOrdersRequestSchema = zod_1.default.object({
    categoryId: zod_1.default.string().min(1).describe("Category identifier"),
    itemOrders: zod_1.default.array(exports.CategoryItemOrderEntrySchema).min(1).describe("Ordered item display values for the category"),
});
