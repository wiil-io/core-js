"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchablePaginationRequestSchema = exports.PaginationRequestSchema = exports.PaginatedAccountRequestSchema = exports.BasePaginatedResultSchema = exports.createPaginatedResultSchema = exports.PaginationMetaSchema = void 0;
const zod_1 = require("zod");
/**
 * @fileoverview Pagination schema definitions for paginated API responses.
 * @module request/models/paginated-result
 */
/**
 * Pagination metadata schema.
 *
 * @typedef {Object} PaginationMeta
 * @property {number} page - Current page number (1-based indexing)
 * @property {number} pageSize - Number of items per page - limited to 1000 for performance
 * @property {number} totalCount - Total number of items across all pages
 * @property {number} totalPages - Total number of pages available
 * @property {boolean} hasNextPage - Whether there is a next page available for navigation
 * @property {boolean} hasPreviousPage - Whether there is a previous page available for navigation
 */
exports.PaginationMetaSchema = zod_1.z.object({
    page: zod_1.z.number().int().positive(),
    pageSize: zod_1.z.number().int().positive().max(1000),
    totalCount: zod_1.z.number().int().nonnegative(),
    totalPages: zod_1.z.number().int().nonnegative(),
    hasNextPage: zod_1.z.boolean(),
    hasPreviousPage: zod_1.z.boolean(),
});
/**
 * Generic function to create a paginated result schema.
 * Use this with any data schema to create typed paginated responses.
 *
 * @example
 * const PaginatedCustomers = createPaginatedResultSchema(CustomerSchema);
 */
const createPaginatedResultSchema = (dataSchema) => {
    return zod_1.z.object({
        data: zod_1.z.array(dataSchema),
        meta: exports.PaginationMetaSchema,
    });
};
exports.createPaginatedResultSchema = createPaginatedResultSchema;
/**
 * Basic paginated result schema for any data type.
 * Use this when you need a flexible paginated result without specific data typing.
 *
 * @typedef {Object} BasePaginatedResult
 * @property {Array} data - Array of data items for the current page
 * @property {Object} meta - Pagination metadata including page info and navigation flags
 */
exports.BasePaginatedResultSchema = zod_1.z.object({
    data: zod_1.z.array(zod_1.z.any()),
    meta: exports.PaginationMetaSchema,
});
/**
 * Schema for paginated account requests.
 *
 * @typedef {Object} PaginatedAccountRequest
 * @property {number} page - Page number to retrieve (1-based)
 * @property {number} pageSize - Number of items per page (max 1000)
 */
exports.PaginatedAccountRequestSchema = zod_1.z.object({
    page: zod_1.z.number().int().positive().default(1),
    pageSize: zod_1.z.number().int().positive().max(1000).default(20),
});
/**
 * Generic pagination request schema.
 *
 * @typedef {Object} PaginationRequest
 * @property {number} page - Page number to retrieve (1-based)
 * @property {number} pageSize - Number of items per page (max 1000)
 * @property {string} [sortBy] - Field name to sort by
 * @property {string} sortDirection - Sort direction - ascending or descending
 */
exports.PaginationRequestSchema = zod_1.z.object({
    page: zod_1.z.number().int().positive().default(1),
    pageSize: zod_1.z.number().int().positive().max(1000).default(20),
    sortBy: zod_1.z.string().optional(),
    sortDirection: zod_1.z.enum(['asc', 'desc']).default('asc'),
});
/**
 * Schema for search-enabled pagination requests.
 *
 * @typedef {Object} SearchablePaginationRequest
 * @property {number} page - Page number to retrieve
 * @property {number} pageSize - Number of items per page
 * @property {string} [sortBy] - Field name to sort by
 * @property {string} sortDirection - Sort direction
 * @property {string} [search] - Search query to filter results
 * @property {string[]} [searchFields] - Specific fields to search within
 */
exports.SearchablePaginationRequestSchema = exports.PaginationRequestSchema.safeExtend({
    search: zod_1.z.string().optional(),
    searchFields: zod_1.z.array(zod_1.z.string()).optional(),
});
