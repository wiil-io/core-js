"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceProviderTimeOffSchema = exports.CreateServiceProviderTimeOffSchema = exports.ServiceProviderTimeOffSchema = exports.ServiceProviderTimeOffRecurrenceSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
/**
 * @fileoverview Service Provider Time Off schema definitions.
 * @module business-mgt/service-time-off
 *
 * Time off records represent periods when service providers are unavailable.
 * Supports both recurring (weekly) and specific (one-time) time off entries.
 */
// ============================================================================
// RECURRENCE SCHEMA
// ============================================================================
/**
 * Recurrence rule for recurring time off.
 * Defines which days of the week the time off applies.
 *
 * @typedef {Object} ServiceProviderTimeOffRecurrence
 * @property {string[]} dayOfWeek - Days of week (0=Sunday ... 6=Saturday)
 */
exports.ServiceProviderTimeOffRecurrenceSchema = zod_1.default.object({
    dayOfWeek: zod_1.default.array(zod_1.default.string().regex(/^[0-6]$/, "Day must be 0-6")).min(1).describe("Recurring days of week (0=Sunday ... 6=Saturday)"),
}).describe("Recurrence rule for recurring time off");
// ============================================================================
// SERVICE PROVIDER TIME OFF SCHEMA
// ============================================================================
/**
 * Service Provider Time Off schema.
 * Represents a time period when a provider is unavailable for appointments.
 *
 * @typedef {Object} ServiceProviderTimeOff
 * @property {string} providerId - Provider ID (ServicePerson ID)
 * @property {string} type - Time-off type (recurring or specific)
 * @property {number} startDate - Start date/time as Unix epoch seconds
 * @property {number} endDate - End date/time as Unix epoch seconds
 * @property {string} [reason] - Optional reason for time off
 * @property {string} status - Approval status
 * @property {Object} [recurrence] - Recurrence rule for recurring time off
 */
exports.ServiceProviderTimeOffSchema = base_schema_1.BaseModelSchema.safeExtend({
    providerId: zod_1.default.string().describe("Provider ID (ServicePerson ID)"),
    type: zod_1.default.enum(type_definitions_1.ServiceProviderTimeOffType).describe("Time-off type (recurring or specific)"),
    startDate: zod_1.default.number().int().positive().describe("Start date/time as Unix epoch seconds"),
    endDate: zod_1.default.number().int().positive().describe("End date/time as Unix epoch seconds"),
    reason: zod_1.default.string().nullable().optional().describe("Optional reason for time off"),
    status: zod_1.default.enum(type_definitions_1.ServiceProviderTimeOffStatus).default(type_definitions_1.ServiceProviderTimeOffStatus.PENDING).describe("Approval status"),
    recurrence: exports.ServiceProviderTimeOffRecurrenceSchema.nullable().optional().describe("Recurrence rule for recurring time off"),
}).superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
        ctx.addIssue({
            code: "custom",
            path: ["endDate"],
            message: "endDate must be greater than or equal to startDate",
        });
    }
    if (data.type === type_definitions_1.ServiceProviderTimeOffType.RECURRING && !data.recurrence) {
        ctx.addIssue({
            code: "custom",
            path: ["recurrence"],
            message: "recurrence is required when type is recurring",
        });
    }
    if (data.type === type_definitions_1.ServiceProviderTimeOffType.SPECIFIC && data.recurrence) {
        ctx.addIssue({
            code: "custom",
            path: ["recurrence"],
            message: "recurrence must be empty for specific time off",
        });
    }
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new service provider time off record.
 * Omits auto-generated fields.
 */
exports.CreateServiceProviderTimeOffSchema = exports.ServiceProviderTimeOffSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing service provider time off record.
 * All fields optional except id (required).
 */
exports.UpdateServiceProviderTimeOffSchema = exports.CreateServiceProviderTimeOffSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ServiceProviderTimeOff to update"),
});
