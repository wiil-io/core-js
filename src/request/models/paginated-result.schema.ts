import { z } from 'zod';

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
export const PaginationMetaSchema = z.object({
    page: z.number().int().positive(),
    pageSize: z.number().int().positive().max(1000),
    totalCount: z.number().int().nonnegative(),
    totalPages: z.number().int().nonnegative(),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean(),
});

/**
 * Generic function to create a paginated result schema.
 * Use this with any data schema to create typed paginated responses.
 *
 * @example
 * const PaginatedCustomers = createPaginatedResultSchema(CustomerSchema);
 */
export const createPaginatedResultSchema = <T extends z.ZodTypeAny>(dataSchema: T) => {
    return z.object({
        data: z.array(dataSchema),
        meta: PaginationMetaSchema,
    });
};

/**
 * Basic paginated result schema for any data type.
 * Use this when you need a flexible paginated result without specific data typing.
 *
 * @typedef {Object} BasePaginatedResult
 * @property {Array} data - Array of data items for the current page
 * @property {Object} meta - Pagination metadata including page info and navigation flags
 */
export const BasePaginatedResultSchema = z.object({
    data: z.array(z.any()),
    meta: PaginationMetaSchema,
});

/**
 * Schema for paginated account requests.
 *
 * @typedef {Object} PaginatedAccountRequest
 * @property {string} organizationId - Account ID to filter results by
 * @property {number} page - Page number to retrieve (1-based)
 * @property {number} pageSize - Number of items per page (max 1000)
 */
export const PaginatedAccountRequestSchema = z.object({
    organizationId: z.string(),
    page: z.number().int().positive().default(1),
    pageSize: z.number().int().positive().max(1000).default(20),
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
export const PaginationRequestSchema = z.object({
    page: z.number().int().positive().default(1),
    pageSize: z.number().int().positive().max(1000).default(20),
    sortBy: z.string().optional(),
    sortDirection: z.enum(['asc', 'desc']).default('asc'),
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
export const SearchablePaginationRequestSchema = PaginationRequestSchema.safeExtend({
    search: z.string().optional(),
    searchFields: z.array(z.string()).optional(),
});

// Type exports
export type PaginationMetaType = z.infer<typeof PaginationMetaSchema>;
export type BasePaginatedResult = z.infer<typeof BasePaginatedResultSchema>;
export type PaginatedAccountRequest = z.infer<typeof PaginatedAccountRequestSchema>;
export type PaginationRequest = z.infer<typeof PaginationRequestSchema>;
export type SearchablePaginationRequest = z.infer<typeof SearchablePaginationRequestSchema>;

/**
 * Helper type for creating typed paginated results.
 */
export type PaginatedResultType<T> = {
    data: T[];
    meta: PaginationMetaType;
};
