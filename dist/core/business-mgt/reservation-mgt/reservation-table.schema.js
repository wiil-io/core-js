"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableReAssignmentSchema = exports.UpdateTableReservationSchema = exports.CreateTableReservationSchema = exports.TableReservationSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
/**
 * @fileoverview Table reservation schema definitions.
 * @module business-mgt/reservation-mgt/table-reservation
 */
// ============================================================================
// TABLE RESERVATION SCHEMA
// ============================================================================
/**
 * Table reservation schema.
 * Represents a reservation request for a table-based venue such as a restaurant.
 *
 * @typedef {Object} TableReservation
 * @property {string} [locationId] - Business location where the table reservation is booked
 * @property {string} [channelId] - Channel that created or owns the booking
 * @property {string} resourceId - Table resource or category being reserved
 * @property {string} customerId - Customer who owns the reservation
 * @property {string} [floorPlanId] - Floor plan used for table placement
 * @property {string} [floorPlanSectionId] - Preferred or assigned floor plan section
 * @property {number} personsNumber - Number of guests in the party
 * @property {number} time - Reservation start timestamp
 * @property {number} duration - Reservation duration in minutes
 * @property {ReservationStatus} status - Current table reservation status
 * @property {string} [source] - Source or channel label for the reservation
 * @property {string} [notes] - Internal staff notes
 * @property {boolean} isVip - Whether the reservation is marked as VIP
 * @property {string} [specialRequests] - Customer-facing special requests
 * @property {Object} [externalRef] - External platform reference
 */
exports.TableReservationSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the table reservation is booked. Null applies when the reservation is not location-specific."),
    channelId: zod_1.z.string().nullable().optional().describe("Channel ID for multi-channel bookings (e.g., web, marketplace, partner)"),
    resourceId: zod_1.z.string().describe("Table type/category ID"),
    customerId: zod_1.z.string().describe("Customer ID"),
    floorPlanId: zod_1.z.string().nullable().optional().describe("Floor plan ID for table layout"),
    floorPlanSectionId: zod_1.z.string().nullable().optional().describe("Floor plan section ID for table grouping"),
    personsNumber: zod_1.z.number().int().positive().describe("Party size"),
    time: zod_1.z.number().describe("Reservation start timestamp"),
    duration: zod_1.z.number().int().positive().describe("Expected reservation duration in minutes"),
    status: zod_1.z.enum(type_definitions_1.ReservationStatus).default(type_definitions_1.ReservationStatus.PENDING).describe("Table reservation lifecycle status"),
    source: zod_1.z.string().nullable().optional().describe("Source/channel of the reservation"),
    notes: zod_1.z.string().nullable().optional().describe("Internal notes"),
    isVip: zod_1.z.boolean().default(false).describe("Indicates whether the party is VIP"),
    specialRequests: zod_1.z.string().nullable().optional().describe("Guest special requests"),
    externalRef: type_definitions_1.ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced)"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new table reservation.
 * Omits auto-generated fields.
 */
exports.CreateTableReservationSchema = exports.TableReservationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing table reservation.
 * All fields optional except id.
 */
exports.UpdateTableReservationSchema = exports.CreateTableReservationSchema.partial().extend({
    id: zod_1.z.string().describe("Unique identifier of the table reservation to update."),
    // Re-declared without the base `.default()` so partial updates don't inject a status the caller never set
    status: zod_1.z.enum(type_definitions_1.ReservationStatus).nullable().optional().describe("Table reservation lifecycle status"),
});
// ============================================================================
// REASSIGNMENT SCHEMA
// ============================================================================
/**
 * Schema for reassigning a table reservation to a different table instance.
 */
exports.TableReAssignmentSchema = zod_1.z.object({
    reservationId: zod_1.z.string().describe("Table reservation ID being reassigned."),
    toTableInstanceId: zod_1.z.string().describe("Target table instance ID the reservation is being moved to."),
    fromTableInstanceId: zod_1.z.string().nullable().optional().describe("Current table instance ID the reservation is being moved from."),
    reason: zod_1.z.string().nullable().optional().describe("Optional reason for the reassignment."),
});
