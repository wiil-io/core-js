"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPaginatedTimestampQuerySchema = exports.TimestampQuerySchema = void 0;
const zod_1 = __importDefault(require("zod"));
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
exports.TimestampQuerySchema = zod_1.default.object({
    fromTimestamp: zod_1.default.number(),
    toTimestamp: zod_1.default.number().optional(),
});
/**
 * Schema for paginated queries based on a specific timestamp.
 *
 * @typedef {Object} AccountPaginatedTimestampQuery
 * @property {number} fromTimestamp - Unix timestamp to filter records
 * @property {number} [toTimestamp] - Optional end Unix timestamp
 * @property {number} page - Page number for pagination, starting from 1
 * @property {number} pageSize - Number of records per page, max 100
 */
exports.AccountPaginatedTimestampQuerySchema = exports.TimestampQuerySchema.safeExtend({
    page: zod_1.default.number().min(1).default(1),
    pageSize: zod_1.default.number().min(1).max(100).default(20),
});
