"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessLocationSchema = exports.CreateBusinessLocationSchema = exports.BusinessLocationSchema = exports.GeoCoordinatesSchema = exports.BusinessLocationStatus = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const business_definitions_1 = require("../type-definitions/business-definitions");
/**
 * @fileoverview Business Location schema definitions.
 * @module business-mgt/business-location
 *
 * A Business Location is a physical or operational site belonging to an
 * organization. It carries contact details, operating hours, geographic
 * coordinates, and lifecycle status, and is referenced by downstream
 * business-management resources.
 */
// ============================================================================
// ENUMS
// ============================================================================
/**
 * Business location lifecycle status.
 *
 * Single source of truth for whether a location is operational. Replaces any
 * separate boolean active flag.
 *
 * @enum {string}
 */
var BusinessLocationStatus;
(function (BusinessLocationStatus) {
    /** Location is operational and available for use */
    BusinessLocationStatus["ACTIVE"] = "ACTIVE";
    /** Location is not currently operational */
    BusinessLocationStatus["INACTIVE"] = "INACTIVE";
})(BusinessLocationStatus || (exports.BusinessLocationStatus = BusinessLocationStatus = {}));
// ============================================================================
// BUSINESS LOCATION SCHEMA
// ============================================================================
/**
 * Zod schema for geographic coordinates.
 *
 * Represents a single point on the Earth's surface in decimal degrees, used to
 * place a business location on a map and to support proximity and bounding-box
 * queries.
 *
 * @typedef {Object} GeoCoordinates
 * @property {number} latitude - Latitude in decimal degrees, constrained to [-90, 90]
 * @property {number} longitude - Longitude in decimal degrees, constrained to [-180, 180]
 *
 * @example
 * ```typescript
 * const coordinates: GeoCoordinates = {
 *   latitude: 39.7817,
 *   longitude: -89.6501,
 * };
 * ```
 */
exports.GeoCoordinatesSchema = zod_1.z.object({
    latitude: zod_1.z.number().min(-90).max(90).describe("Latitude coordinate in decimal degrees."),
    longitude: zod_1.z.number().min(-180).max(180).describe("Longitude coordinate in decimal degrees."),
}).describe("Geographic coordinates of the location.");
/**
 * Zod schema for Business Location validation.
 *
 * A Business Location is a physical or operational site belonging to an organization.
 * It captures the operating context for that site — contact details, weekly operating
 * hours, mailing address, geographic coordinates, and lifecycle status — and is
 * referenced by downstream business-management resources.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: {@link BaseModelSchema} (inherits `id`, `createdAt`, `updatedAt`)
 * - **Composes**: {@link AddressSchema} (mailing address), {@link WeeklyScheduleSchema}
 *   (operating hours), {@link GeoCoordinatesSchema} (map placement)
 * - **Lifecycle**: Governed by {@link BusinessLocationStatus}; `status` is the single
 *   source of truth for active state (there is no separate `isActive` flag)
 *
 * **Field Notes:**
 * - `businessHours` is required — every location must declare a weekly schedule
 * - Geographic filters require `coordinates` to be populated in order to match
 * - `externalLocationId` links the record to an external system when synced or imported
 *
 * @typedef {Object} BusinessLocationProperties
 * @property {string} id - Unique identifier for the location (inherited from base model)
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when created (inherited)
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when last updated (inherited)
 * @property {string} name - Human-readable location name (e.g., 'Downtown Branch')
 * @property {string} [code] - Short internal code used to reference the location
 * @property {string|null} [externalLocationId] - Identifier in an external system, if synced or imported
 * @property {BusinessLocationStatus} status - Lifecycle status (default: ACTIVE)
 * @property {boolean} isPrimary - Whether this is the organization's primary location (default: false)
 * @property {string} [timezone] - IANA timezone identifier (e.g., 'America/New_York')
 * @property {WeeklySchedule} businessHours - Weekly operating hours for the location
 * @property {string} [phoneNumber] - Primary contact phone number
 * @property {string} [email] - Primary contact email
 * @property {Address} [address] - Physical mailing address
 * @property {GeoCoordinates|null} [coordinates] - Geographic coordinates of the location
 * @property {Record<string, any>} [metadata] - Additional metadata for organization, tagging, and filtering
 *
 * @example
 * ```typescript
 * const location: BusinessLocation = {
 *   id: 'loc_downtown',
 *   name: 'Downtown Branch',
 *   code: 'DTWN',
 *   status: BusinessLocationStatus.ACTIVE,
 *   isPrimary: true,
 *   timezone: 'America/New_York',
 *   businessHours: {
 *     '1': { isOpen: true, startTime: '09:00', endTime: '17:00' },
 *   },
 *   phoneNumber: '+15551234567',
 *   email: 'downtown@example.com',
 *   coordinates: { latitude: 39.7817, longitude: -89.6501 },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now(),
 * };
 * ```
 */
exports.BusinessLocationSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.z.string().min(1).describe("Human-readable location name (e.g., 'Downtown Branch')."),
    code: zod_1.z.string().optional().describe("Short internal code used to reference the location."),
    externalLocationId: zod_1.z.string().nullable().optional().describe("Identifier for this location in an external system, if synced or imported."),
    status: zod_1.z.enum(BusinessLocationStatus).default(BusinessLocationStatus.ACTIVE).describe("Lifecycle status of the location."),
    isPrimary: zod_1.z.boolean().default(false).describe("Whether this is the organization's primary location."),
    timezone: zod_1.z.string().optional().describe("IANA timezone identifier for the location (e.g., 'America/New_York')."),
    businessHours: business_definitions_1.WeeklyScheduleSchema.describe("Weekly operating hours for the location."),
    phoneNumber: zod_1.z.string().optional().describe("Primary contact phone number for the location."),
    email: zod_1.z.email().optional().describe("Primary contact email for the location."),
    address: base_schema_1.AddressSchema.optional().describe("Physical mailing address of the location."),
    coordinates: exports.GeoCoordinatesSchema.nullable().optional().describe("Geographic coordinates of the location."),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().describe("Additional metadata for organization, tagging, and filtering."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Zod schema for creating a new business location.
 *
 * Omits the system-managed fields (`id`, `createdAt`, `updatedAt`) that are
 * populated automatically during creation, while enforcing all required fields.
 *
 * @example
 * ```typescript
 * const newLocation: CreateBusinessLocation = {
 *   name: 'Airport Kiosk',
 *   status: BusinessLocationStatus.ACTIVE,
 *   isPrimary: false,
 *   timezone: 'America/Chicago',
 *   businessHours: {
 *     '1': { isOpen: true, startTime: '06:00', endTime: '22:00' },
 *   },
 * };
 * ```
 */
exports.CreateBusinessLocationSchema = exports.BusinessLocationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Zod schema for updating an existing business location.
 *
 * All fields from {@link CreateBusinessLocationSchema} are made optional (partial),
 * with `id` required to identify the record to update. Only the provided fields
 * are modified.
 *
 * @example
 * ```typescript
 * const updatePayload: UpdateBusinessLocation = {
 *   id: 'loc_downtown',
 *   status: BusinessLocationStatus.INACTIVE,
 * };
 * ```
 */
exports.UpdateBusinessLocationSchema = exports.CreateBusinessLocationSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the business location to update."),
});
