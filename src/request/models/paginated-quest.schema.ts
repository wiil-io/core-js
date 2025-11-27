import z from "zod";

/**
 * @fileoverview Timestamp-based query schema definitions for filtering records.
 * @module request/models/paginated-quest
 */

/**
 * Schema for queries based on a specific timestamp.
 *
 * @typedef {Object} TimestampQuery
 * @property {number} fromTimestamp - Unix timestamp to filter records (e.g., for fetching updates since this time)
 * @property {number} [toTimestamp] - Optional end Unix timestamp to filter records up to this time
 */
export const TimestampQuerySchema = z.object({
    fromTimestamp: z.number(),
    toTimestamp: z.number().optional(),
});

export type TimestampQuery = z.infer<typeof TimestampQuerySchema>;

/**
 * Schema for paginated queries based on a specific timestamp.
 *
 * @typedef {Object} AccountPaginatedTimestampQuery
 * @property {number} fromTimestamp - Unix timestamp to filter records
 * @property {number} [toTimestamp] - Optional end Unix timestamp
 * @property {number} page - Page number for pagination, starting from 1
 * @property {number} pageSize - Number of records per page, max 100
 */
export const AccountPaginatedTimestampQuerySchema = TimestampQuerySchema.safeExtend({
    page: z.number().min(1).default(1),
    pageSize: z.number().min(1).max(100).default(20),
});

export type AccountPaginatedTimestampQuery = z.infer<typeof AccountPaginatedTimestampQuerySchema>;
