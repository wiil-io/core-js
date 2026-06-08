"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRentalAssignmentSchema = exports.CreateRentalAssignmentSchema = exports.RentalAssignmentSchema = exports.RentalUnitConditionSchema = exports.RentalAssignmentType = exports.RentalAssignmentStatus = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../../base.schema");
/**
 * @fileoverview Rental assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/rental-assignment
 */
// ============================================================================
// ENUMS
// ============================================================================
/**
 * Rental assignment lifecycle status.
 *
 * @enum {string}
 */
var RentalAssignmentStatus;
(function (RentalAssignmentStatus) {
    RentalAssignmentStatus["ASSIGNED"] = "assigned";
    RentalAssignmentStatus["REASSIGNED"] = "reassigned";
    RentalAssignmentStatus["RELEASED"] = "released";
})(RentalAssignmentStatus || (exports.RentalAssignmentStatus = RentalAssignmentStatus = {}));
/**
 * Rental assignment lock type.
 *
 * @enum {string}
 */
var RentalAssignmentType;
(function (RentalAssignmentType) {
    RentalAssignmentType["SOFT"] = "soft";
    RentalAssignmentType["HARD"] = "hard";
})(RentalAssignmentType || (exports.RentalAssignmentType = RentalAssignmentType = {}));
// ============================================================================
// RENTAL ASSIGNMENT SCHEMAS
// ============================================================================
/**
 * Rental unit condition schema.
 * Captures a condition inspection snapshot at pickup or return.
 *
 * @typedef {Object} RentalUnitCondition
 * @property {number} recordedAt - Condition recording timestamp
 * @property {string} recordedBy - Staff user ID that recorded the condition
 * @property {string} [notes] - Condition notes
 * @property {boolean} damageReported - Whether damage was reported
 * @property {string[]} [imageUrls] - Condition photo URLs
 */
exports.RentalUnitConditionSchema = zod_1.z.object({
    recordedAt: zod_1.z.number().int().positive().describe("Unix timestamp when the condition was recorded."),
    recordedBy: zod_1.z.string().describe("Staff user ID who recorded the condition."),
    notes: zod_1.z.string().nullable().optional().describe("Condition notes recorded during inspection."),
    damageReported: zod_1.z.boolean().default(false).describe("Whether damage was reported during this inspection."),
    imageUrls: zod_1.z.array(zod_1.z.url()).nullable().optional().describe("Condition photo URLs captured during inspection."),
}).describe("Condition snapshot recorded at pickup or return");
/**
 * Rental assignment schema.
 * Records the physical rental unit assigned to a rental reservation.
 *
 * @typedef {Object} RentalAssignment
 * @property {string} [locationId] - Business location where the rental unit is assigned
 * @property {string} reservationId - Rental reservation ID
 * @property {string} rentalInstanceId - Physical rental resource instance ID
 * @property {RentalAssignmentType} assignmentType - Assignment lock type
 * @property {RentalAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {RentalUnitCondition} [conditionAtPickup] - Pickup condition snapshot
 * @property {RentalUnitCondition} [conditionAtReturn] - Return condition snapshot
 * @property {string} [notes] - Operational staff notes
 */
exports.RentalAssignmentSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the assigned rental unit is located."),
    reservationId: zod_1.z.string().describe("RentalReservation ID. This link is immutable after assignment creation."),
    rentalInstanceId: zod_1.z.string().describe("ResourceInstance ID for the specific rental unit assigned to the reservation."),
    assignmentType: zod_1.z.enum(RentalAssignmentType).default(RentalAssignmentType.SOFT).describe("Assignment lock type. Soft assignments may be substituted; hard assignments are customer or staff locked."),
    status: zod_1.z.enum(RentalAssignmentStatus).default(RentalAssignmentStatus.ASSIGNED).describe("Current assignment lifecycle status."),
    assignedAt: zod_1.z.number().int().positive().describe("Unix timestamp when this assignment was made."),
    assignedBy: zod_1.z.string().nullable().optional().describe("Staff user ID who made the assignment."),
    releasedAt: zod_1.z.number().int().positive().nullable().optional().describe("Unix timestamp when this assignment was released or superseded."),
    releasedBy: zod_1.z.string().nullable().optional().describe("Staff user ID who released the assignment."),
    conditionAtPickup: exports.RentalUnitConditionSchema.nullable().optional().describe("Unit condition recorded at customer pickup."),
    conditionAtReturn: exports.RentalUnitConditionSchema.nullable().optional().describe("Unit condition recorded at customer return."),
    notes: zod_1.z.string().nullable().optional().describe("Operational note for staff about this rental assignment."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new rental assignment.
 * Omits auto-generated fields.
 */
exports.CreateRentalAssignmentSchema = exports.RentalAssignmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing rental assignment.
 * All fields optional except id.
 */
exports.UpdateRentalAssignmentSchema = exports.CreateRentalAssignmentSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the rental assignment to update."),
});
