"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaintenanceBlockSchema = exports.CreateMaintenanceBlockSchema = exports.MaintenanceBlockSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
/**
 * @fileoverview Reservation maintenance block schema definitions.
 * @module business-mgt/reservation-mgt/maintenance-block
 */
// ============================================================================
// MAINTENANCE BLOCK SCHEMA
// ============================================================================
/**
 * Maintenance block schema.
 * Represents a time period when a reservable resource instance is unavailable.
 *
 * @typedef {Object} MaintenanceBlock
 * @property {string} [locationId] - Business location where maintenance applies
 * @property {string} resourceInstanceId - Physical resource instance under maintenance
 * @property {number} startDate - Maintenance block start as Unix epoch seconds
 * @property {number} endDate - Maintenance block end as Unix epoch seconds
 * @property {string} [reason] - Operational reason for the maintenance block
 */
exports.MaintenanceBlockSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the maintenance block applies. Null applies when the resource is not location-specific."),
    resourceInstanceId: zod_1.z.string().describe("Room/resource ID under maintenance"),
    startDate: zod_1.z.number().describe("Maintenance block start as Unix epoch seconds"),
    endDate: zod_1.z.number().describe("Maintenance block end as Unix epoch seconds"),
    reason: zod_1.z.string().nullable().optional().describe("Reason for maintenance block"),
}).superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
        ctx.addIssue({
            code: "custom",
            path: ["endDate"],
            message: "endDate must be greater than or equal to startDate",
        });
    }
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new maintenance block.
 * Omits auto-generated fields.
 */
exports.CreateMaintenanceBlockSchema = exports.MaintenanceBlockSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing maintenance block.
 * All fields optional except id.
 */
exports.UpdateMaintenanceBlockSchema = exports.CreateMaintenanceBlockSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the maintenance block to update."),
});
