"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServicePersonSchema = exports.CreateServicePersonSchema = exports.ServicePersonSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
/**
 * @fileoverview Service Person schema definitions for service providers/staff.
 * @module business-mgt/service-person
 *
 * Service persons represent staff members who can be assigned to perform services.
 */
// ============================================================================
// SERVICE PERSON SCHEMA
// ============================================================================
/**
 * Service Person schema.
 * Represents a staff member or provider who can perform services.
 *
 * @typedef {Object} ServicePerson
 * @property {string} [locationId] - Location this provider is assigned to
 * @property {string} [userAccountId] - Linked user account ID
 * @property {string} name - Display name for this provider
 * @property {string} [avatar] - Provider avatar URL
 * @property {string} [description] - Provider description/bio
 * @property {Array} [skills] - Skill IDs this provider can perform
 * @property {number} [commissionPercent] - Provider commission percentage (0-100)
 * @property {string} [scheduleId] - Schedule ID for provider availability
 * @property {boolean} bookableOnline - Whether customers can book online
 * @property {boolean} bookableByStaff - Whether staff can assign internally
 * @property {boolean} isActive - Whether this provider is active
 */
exports.ServicePersonSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.default.string().nullable().optional().describe("Location this provider is assigned to. Null for providers available at all locations."),
    userAccountId: zod_1.default.string().nullable().optional().describe("Linked user account ID for staff login and calendar sync."),
    name: zod_1.default.string().min(1).describe("Display name for this provider shown to customers during booking."),
    avatar: zod_1.default.url().nullable().optional().describe("Provider avatar URL for visual identification."),
    description: zod_1.default.string().nullable().optional().describe("Provider description or bio displayed during booking."),
    skills: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("Skill IDs this provider can perform. Used to filter available providers per service."),
    commissionPercent: zod_1.default.number().min(0).max(100).nullable().optional().describe("Provider commission percentage (0-100). Used for payroll calculations."),
    scheduleId: zod_1.default.string().nullable().optional().describe("Schedule ID for provider availability. Links to scheduling system."),
    bookableOnline: zod_1.default.boolean().default(true).describe("Whether customers can book this provider online."),
    bookableByStaff: zod_1.default.boolean().default(true).describe("Whether staff can assign this provider internally."),
    isActive: zod_1.default.boolean().default(true).describe("Whether this provider is active and available for booking."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new service person.
 * Omits auto-generated fields.
 */
exports.CreateServicePersonSchema = exports.ServicePersonSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing service person.
 * All fields optional except id (required).
 */
exports.UpdateServicePersonSchema = exports.CreateServicePersonSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ServicePerson to update"),
});
