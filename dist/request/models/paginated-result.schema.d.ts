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
export declare const PaginationMetaSchema: z.ZodObject<{
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalCount: z.ZodNumber;
    totalPages: z.ZodNumber;
    hasNextPage: z.ZodBoolean;
    hasPreviousPage: z.ZodBoolean;
}, z.core.$strip>;
/**
 * Generic function to create a paginated result schema.
 * Use this with any data schema to create typed paginated responses.
 *
 * @example
 * const PaginatedCustomers = createPaginatedResultSchema(CustomerSchema);
 */
export declare const createPaginatedResultSchema: <T extends z.ZodTypeAny>(dataSchema: T) => z.ZodObject<{
    data: z.ZodArray<T>;
    meta: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        totalCount: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNextPage: z.ZodBoolean;
        hasPreviousPage: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Basic paginated result schema for any data type.
 * Use this when you need a flexible paginated result without specific data typing.
 *
 * @typedef {Object} BasePaginatedResult
 * @property {Array} data - Array of data items for the current page
 * @property {Object} meta - Pagination metadata including page info and navigation flags
 */
export declare const BasePaginatedResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodAny>;
    meta: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        totalCount: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNextPage: z.ZodBoolean;
        hasPreviousPage: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Schema for paginated account requests.
 *
 * @typedef {Object} PaginatedAccountRequest
 * @property {number} page - Page number to retrieve (1-based)
 * @property {number} pageSize - Number of items per page (max 1000)
 */
export declare const PaginatedAccountRequestSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Generic pagination request schema.
 *
 * @typedef {Object} PaginationRequest
 * @property {number} page - Page number to retrieve (1-based)
 * @property {number} pageSize - Number of items per page (max 1000)
 * @property {string} [sortBy] - Field name to sort by
 * @property {string} sortDirection - Sort direction - ascending or descending
 */
export declare const PaginationRequestSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortDirection: z.ZodDefault<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
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
export declare const SearchablePaginationRequestSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortDirection: z.ZodDefault<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    search: z.ZodOptional<z.ZodString>;
    searchFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
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
