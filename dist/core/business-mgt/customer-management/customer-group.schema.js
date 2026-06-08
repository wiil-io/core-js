"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerGroupSchema = exports.CreateCustomerGroupSchema = exports.CustomerGroupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
/**
 * @fileoverview Customer Group schema definitions for business management.
 * @module business-mgt/customer-group
 *
 * Customer groups enable segmentation for pricing tiers and special terms
 * (e.g., Retail, Wholesale, VIP, Gold Tier).
 */
// ============================================================================
// CUSTOMER GROUP SCHEMA
// ============================================================================
/**
 * Customer Group schema.
 * Groups customers for pricing tiers and special terms.
 *
 * @typedef {Object} CustomerGroup
 * @property {string} name - Group name (e.g., Retail, Wholesale, VIP)
 * @property {string} [description] - Group description
 * @property {string} [code] - Short code (e.g., WS, VIP, GOLD)
 * @property {boolean} isDefault - Whether this is the default group
 */
exports.CustomerGroupSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1, "Group name is required").describe("Customer group name (e.g., Retail, Wholesale, VIP, Gold Tier)"),
    description: zod_1.default.string().nullable().optional().describe("Group description"),
    code: zod_1.default.string().nullable().optional().describe("Short code for the group (e.g., WS, VIP, GOLD)"),
    isDefault: zod_1.default.boolean().default(false).describe("Whether this is the default customer group"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new customer group.
 * Omits auto-generated fields.
 */
exports.CreateCustomerGroupSchema = exports.CustomerGroupSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing customer group.
 * All fields optional except id (required).
 */
exports.UpdateCustomerGroupSchema = exports.CreateCustomerGroupSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the CustomerGroup to update"),
});
