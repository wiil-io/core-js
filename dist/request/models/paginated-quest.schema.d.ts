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
export declare const TimestampQuerySchema: z.ZodObject<{
    fromTimestamp: z.ZodNumber;
    toTimestamp: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const AccountPaginatedTimestampQuerySchema: z.ZodObject<{
    fromTimestamp: z.ZodNumber;
    toTimestamp: z.ZodOptional<z.ZodNumber>;
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export type AccountPaginatedTimestampQuery = z.infer<typeof AccountPaginatedTimestampQuerySchema>;
