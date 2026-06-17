"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoomAssignmentSchema = exports.CreateRoomAssignmentSchema = exports.RoomAssignmentSchema = exports.RoomAssignmentType = exports.RoomAssignmentStatus = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../../base.schema");
/**
 * @fileoverview Room assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/room-assignment
 */
// ============================================================================
// ENUMS
// ============================================================================
/**
 * Room assignment lifecycle status.
 *
 * @enum {string}
 */
var RoomAssignmentStatus;
(function (RoomAssignmentStatus) {
    RoomAssignmentStatus["ASSIGNED"] = "assigned";
    RoomAssignmentStatus["REASSIGNED"] = "reassigned";
    RoomAssignmentStatus["RELEASED"] = "released";
})(RoomAssignmentStatus || (exports.RoomAssignmentStatus = RoomAssignmentStatus = {}));
/**
 * Room assignment lock type.
 *
 * @enum {string}
 */
var RoomAssignmentType;
(function (RoomAssignmentType) {
    RoomAssignmentType["SOFT"] = "soft";
    RoomAssignmentType["HARD"] = "hard";
})(RoomAssignmentType || (exports.RoomAssignmentType = RoomAssignmentType = {}));
// ============================================================================
// ROOM ASSIGNMENT SCHEMA
// ============================================================================
/**
 * Room assignment schema.
 * Records the physical room instance assigned to a room reservation.
 *
 * @typedef {Object} RoomAssignment
 * @property {string} [locationId] - Business location where the room is assigned
 * @property {string} reservationId - Room reservation ID
 * @property {string} roomInstanceId - Physical room resource instance ID
 * @property {number} slotStart - Reservation slot start, copied from reservation at assignment time
 * @property {number} slotEnd - Reservation slot end, copied from reservation at assignment time
 * @property {RoomAssignmentType} assignmentType - Assignment lock type
 * @property {RoomAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {string} [housekeepingNotes] - Housekeeping handoff notes
 * @property {string} [notes] - Operational staff notes
 */
exports.RoomAssignmentSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the assigned room is located."),
    reservationId: zod_1.z.string().describe("RoomReservation ID. This link is immutable after assignment creation."),
    roomInstanceId: zod_1.z.string().describe("ResourceInstance ID for the physical room assigned to the reservation."),
    slotStart: zod_1.z.number().int().positive().describe("Reservation slot start — copied from reservation at assignment time"),
    slotEnd: zod_1.z.number().int().positive().describe("Reservation slot end — copied from reservation at assignment time"),
    assignmentType: zod_1.z.enum(RoomAssignmentType).default(RoomAssignmentType.SOFT).describe("Assignment lock type. Soft assignments may be optimized; hard assignments are staff-locked."),
    status: zod_1.z.enum(RoomAssignmentStatus).default(RoomAssignmentStatus.ASSIGNED).describe("Current assignment lifecycle status."),
    assignedAt: zod_1.z.number().int().positive().describe("Unix timestamp when this assignment was made."),
    assignedBy: zod_1.z.string().nullable().optional().describe("Staff user ID who made the assignment."),
    releasedAt: zod_1.z.number().int().positive().nullable().optional().describe("Unix timestamp when this assignment was released or superseded."),
    releasedBy: zod_1.z.string().nullable().optional().describe("Staff user ID who released the assignment."),
    housekeepingNotes: zod_1.z.string().nullable().optional().describe("Housekeeping handoff notes for this room and guest pairing."),
    notes: zod_1.z.string().nullable().optional().describe("Operational note for staff about this room assignment."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new room assignment.
 * Omits auto-generated fields.
 */
exports.CreateRoomAssignmentSchema = exports.RoomAssignmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing room assignment.
 * All fields optional except id.
 */
exports.UpdateRoomAssignmentSchema = exports.CreateRoomAssignmentSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the room assignment to update."),
});
