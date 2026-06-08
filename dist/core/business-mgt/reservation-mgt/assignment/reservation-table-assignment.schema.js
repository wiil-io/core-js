"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableAssignmentSchema = exports.CreateTableAssignmentSchema = exports.TableAssignmentSchema = exports.TableAssignmentStatus = exports.TableAssignmentType = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../../base.schema");
/**
 * @fileoverview Table assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/table-assignment
 */
// ============================================================================
// ENUMS
// ============================================================================
/**
 * Table assignment lock type.
 *
 * @enum {string}
 */
var TableAssignmentType;
(function (TableAssignmentType) {
    TableAssignmentType["SOFT"] = "soft";
    TableAssignmentType["HARD"] = "hard";
})(TableAssignmentType || (exports.TableAssignmentType = TableAssignmentType = {}));
/**
 * Table assignment lifecycle status.
 *
 * @enum {string}
 */
var TableAssignmentStatus;
(function (TableAssignmentStatus) {
    TableAssignmentStatus["ASSIGNED"] = "assigned";
    TableAssignmentStatus["REASSIGNED"] = "reassigned";
    TableAssignmentStatus["RELEASED"] = "released";
})(TableAssignmentStatus || (exports.TableAssignmentStatus = TableAssignmentStatus = {}));
// ============================================================================
// TABLE ASSIGNMENT SCHEMA
// ============================================================================
/**
 * Table assignment schema.
 * Records the physical table instance assigned to a table reservation.
 *
 * @typedef {Object} TableAssignment
 * @property {string} [locationId] - Business location where the table is assigned
 * @property {string} reservationId - Table reservation ID
 * @property {string} tableInstanceId - Physical table resource instance ID
 * @property {string} floorPlanId - Floor plan ID captured at assignment time
 * @property {string} [floorPlanSectionId] - Floor plan section ID captured at assignment time
 * @property {TableAssignmentType} assignmentType - Assignment lock type
 * @property {TableAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {string} [notes] - Operational staff notes
 */
exports.TableAssignmentSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the assigned table is located."),
    reservationId: zod_1.z.string().describe("TableReservation ID. This link is immutable after assignment creation."),
    tableInstanceId: zod_1.z.string().describe("ResourceInstance ID for the physical table assigned to the reservation."),
    floorPlanId: zod_1.z.string().describe("Floor plan ID captured at the time of assignment."),
    floorPlanSectionId: zod_1.z.string().nullable().optional().describe("Floor plan section ID captured at the time of assignment."),
    assignmentType: zod_1.z.enum(TableAssignmentType).default(TableAssignmentType.SOFT).describe("Assignment lock type. Soft assignments may be optimized; hard assignments are staff-locked."),
    status: zod_1.z.enum(TableAssignmentStatus).default(TableAssignmentStatus.ASSIGNED).describe("Current assignment lifecycle status."),
    assignedAt: zod_1.z.number().int().positive().describe("Unix timestamp when this assignment was made."),
    assignedBy: zod_1.z.string().nullable().optional().describe("Staff user ID who made the assignment."),
    releasedAt: zod_1.z.number().int().positive().nullable().optional().describe("Unix timestamp when this assignment was released or superseded."),
    releasedBy: zod_1.z.string().nullable().optional().describe("Staff user ID who released the assignment."),
    notes: zod_1.z.string().nullable().optional().describe("Operational note for staff about this table assignment."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new table assignment.
 * Omits auto-generated fields.
 */
exports.CreateTableAssignmentSchema = exports.TableAssignmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing table assignment.
 * All fields optional except id.
 */
exports.UpdateTableAssignmentSchema = exports.CreateTableAssignmentSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the table assignment to update."),
});
