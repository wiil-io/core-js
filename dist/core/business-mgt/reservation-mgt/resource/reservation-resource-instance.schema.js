"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResourceInstanceSchema = exports.CreateResourceInstanceSchema = exports.ResourceInstanceSchema = exports.ResourceInstanceAttributeSchema = exports.ResourceInstanceStatus = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../../base.schema");
/**
 * @fileoverview Reservation resource instance schema definitions.
 * @module business-mgt/reservation-mgt/resource-instance
 */
// ============================================================================
// ENUMS
// ============================================================================
/**
 * Operational status of a physical resource instance.
 *
 * @enum {string}
 */
var ResourceInstanceStatus;
(function (ResourceInstanceStatus) {
    ResourceInstanceStatus["AVAILABLE"] = "available";
    ResourceInstanceStatus["RESERVED"] = "reserved";
    ResourceInstanceStatus["OCCUPIED"] = "occupied";
    ResourceInstanceStatus["MAINTENANCE"] = "maintenance";
    ResourceInstanceStatus["CLEANING"] = "cleaning";
    ResourceInstanceStatus["OUT_OF_SERVICE"] = "out_of_service";
})(ResourceInstanceStatus || (exports.ResourceInstanceStatus = ResourceInstanceStatus = {}));
// ============================================================================
// RESOURCE INSTANCE SCHEMAS
// ============================================================================
/**
 * Resource instance attribute schema.
 * Stores flexible key/value attributes on physical reservation inventory.
 *
 * @typedef {Object} ResourceInstanceAttribute
 * @property {string} key - Attribute key
 * @property {string} value - Attribute value
 */
exports.ResourceInstanceAttributeSchema = zod_1.z.object({
    key: zod_1.z.string().describe("Attribute key used by operations or integrations."),
    value: zod_1.z.string().describe("Attribute value for the instance-specific key."),
});
/**
 * Resource instance schema.
 * Represents a physical table, room, rental unit, or other reservable unit.
 *
 * @typedef {Object} ResourceInstance
 * @property {string} [resourceRevisionId] - Version control for resource instance changes
 * @property {string} [locationId] - Business location where the instance is located
 * @property {string} resourceId - Parent resource ID
 * @property {string} [name] - Instance display name
 * @property {string} [code] - Instance code or number
 * @property {ResourceInstanceStatus} status - Current operational status
 * @property {boolean} isAvailable - Whether the instance can be assigned
 * @property {ResourceInstanceAttribute[]} [attributes] - Instance-level attributes
 */
exports.ResourceInstanceSchema = base_schema_1.BaseModelSchema.safeExtend({
    resourceRevisionId: zod_1.z.string().nullable().optional().describe("Optional resource revision ID for version-scoped data"),
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where this resource instance is located. Null applies when the instance is not location-specific."),
    resourceId: zod_1.z.string().describe("Parent resource ID that defines this physical instance."),
    name: zod_1.z.string().nullable().optional().describe("Instance name/label"),
    code: zod_1.z.string().nullable().optional().describe("Optional instance code/number"),
    status: zod_1.z.enum(ResourceInstanceStatus).default(ResourceInstanceStatus.AVAILABLE).describe("Current operational status"),
    isAvailable: zod_1.z.boolean().default(true).describe("Quick availability toggle for assignment"),
    attributes: zod_1.z.array(exports.ResourceInstanceAttributeSchema).nullable().optional().describe("Instance-level attributes"),
}).superRefine((data, ctx) => {
    if (data.status !== ResourceInstanceStatus.AVAILABLE && data.isAvailable) {
        ctx.addIssue({
            code: "custom",
            path: ["isAvailable"],
            message: "isAvailable should be false when status is not available",
        });
    }
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new resource instance.
 * Omits auto-generated fields.
 */
exports.CreateResourceInstanceSchema = exports.ResourceInstanceSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing resource instance.
 * All fields optional except id.
 */
exports.UpdateResourceInstanceSchema = exports.CreateResourceInstanceSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the resource instance to update."),
});
