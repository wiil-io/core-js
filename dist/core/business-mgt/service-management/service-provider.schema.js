"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceProviderSchema = exports.CreateServiceProviderSchema = exports.ServiceProviderSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
/**
 * @fileoverview Service Provider join schema for service-to-provider assignments.
 * @module business-mgt/service-provider
 *
 * Many-to-many relationship between services and providers with per-provider overrides.
 */
// ============================================================================
// SERVICE PROVIDER SCHEMA
// ============================================================================
/**
 * Service Provider join schema.
 * Links services to providers with optional price/duration overrides.
 *
 * @typedef {Object} ServiceProvider
 * @property {string} serviceId - Service ID being assigned
 * @property {string} providerId - Provider ID (typically ServicePerson ID)
 * @property {number} [priceOverride] - Provider-specific price override
 * @property {number} [durationOverride] - Provider-specific duration override in minutes
 * @property {boolean} active - Whether this assignment is active
 */
exports.ServiceProviderSchema = base_schema_1.BaseModelSchema.safeExtend({
    serviceId: zod_1.default.string().describe("Service ID being assigned to the provider"),
    providerId: zod_1.default.string().describe("Provider ID (typically ServicePerson ID)"),
    priceOverride: zod_1.default.number().nonnegative().nullable().optional().describe("Provider-specific price override. Null means use service default price."),
    durationOverride: zod_1.default.number().int().positive().nullable().optional().describe("Provider-specific duration override in minutes. Null means use service default duration."),
    active: zod_1.default.boolean().default(true).describe("Whether this provider assignment is active"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new service provider assignment.
 * Omits auto-generated fields.
 */
exports.CreateServiceProviderSchema = exports.ServiceProviderSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing service provider assignment.
 * All fields optional except id (required).
 */
exports.UpdateServiceProviderSchema = exports.CreateServiceProviderSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ServiceProvider to update"),
});
