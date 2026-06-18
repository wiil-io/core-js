import { z } from "zod";
/**
 * @fileoverview Business Location schema definitions.
 * @module business-mgt/business-location
 *
 * A Business Location is a physical or operational site belonging to an
 * organization. It carries contact details, operating hours, geographic
 * coordinates, and lifecycle status, and is referenced by downstream
 * business-management resources.
 */
/**
 * Business location lifecycle status.
 *
 * Single source of truth for whether a location is operational. Replaces any
 * separate boolean active flag.
 *
 * @enum {string}
 */
export declare enum BusinessLocationStatus {
    /** Location is operational and available for use */
    ACTIVE = "ACTIVE",
    /** Location is not currently operational */
    INACTIVE = "INACTIVE"
}
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
export declare const GeoCoordinatesSchema: z.ZodObject<{
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
}, z.core.$strip>;
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
export declare const BusinessLocationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
    externalLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<typeof BusinessLocationStatus>>;
    isPrimary: z.ZodDefault<z.ZodBoolean>;
    timezone: z.ZodOptional<z.ZodString>;
    businessHours: z.ZodRecord<z.ZodString, z.ZodObject<{
        isOpen: z.ZodBoolean;
        startTime: z.ZodString;
        endTime: z.ZodString;
        breakTimes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    address: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, z.core.$strip>>;
    coordinates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
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
export declare const CreateBusinessLocationSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodEmail>;
    code: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<typeof BusinessLocationStatus>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    name: z.ZodString;
    isPrimary: z.ZodDefault<z.ZodBoolean>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    externalLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timezone: z.ZodOptional<z.ZodString>;
    businessHours: z.ZodRecord<z.ZodString, z.ZodObject<{
        isOpen: z.ZodBoolean;
        startTime: z.ZodString;
        endTime: z.ZodString;
        breakTimes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    address: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, z.core.$strip>>;
    coordinates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
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
export declare const UpdateBusinessLocationSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodOptional<z.ZodEmail>>;
    code: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof BusinessLocationStatus>>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    name: z.ZodOptional<z.ZodString>;
    isPrimary: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    phoneNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    externalLocationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    timezone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    businessHours: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        isOpen: z.ZodBoolean;
        startTime: z.ZodString;
        endTime: z.ZodString;
        breakTimes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, z.core.$strip>>>;
    coordinates: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Geographic coordinates inferred from {@link GeoCoordinatesSchema}.
 */
export type GeoCoordinates = z.infer<typeof GeoCoordinatesSchema>;
/**
 * Complete business location record inferred from {@link BusinessLocationSchema}.
 */
export type BusinessLocation = z.infer<typeof BusinessLocationSchema>;
/**
 * Payload for creating a business location, inferred from {@link CreateBusinessLocationSchema}.
 */
export type CreateBusinessLocation = z.infer<typeof CreateBusinessLocationSchema>;
/**
 * Partial update payload (with required `id`) inferred from {@link UpdateBusinessLocationSchema}.
 */
export type UpdateBusinessLocation = z.infer<typeof UpdateBusinessLocationSchema>;
/**
 * Filter options for querying business locations.
 *
 * All filters are optional and combine with AND semantics. Geographic filters
 * (`nearLocation`, `boundingBox`) only match locations that have `coordinates` set.
 *
 * @interface BusinessLocationFilters
 */
export interface BusinessLocationFilters {
    /** Filter by lifecycle status */
    status?: BusinessLocationStatus;
    /** Filter to primary locations only */
    isPrimary?: boolean;
    /** Free-text search across name, code, and address */
    search?: string;
    /** Filter by radius around a geographic point */
    nearLocation?: {
        /** Center latitude in decimal degrees */
        latitude: number;
        /** Center longitude in decimal degrees */
        longitude: number;
        /** Search radius in kilometers */
        radiusKm: number;
    };
    /** Filter by a geographic bounding box */
    boundingBox?: {
        /** Southern boundary latitude */
        minLatitude: number;
        /** Northern boundary latitude */
        maxLatitude: number;
        /** Western boundary longitude */
        minLongitude: number;
        /** Eastern boundary longitude */
        maxLongitude: number;
    };
}
/**
 * Sorting options for business location queries.
 *
 * @interface BusinessLocationSorting
 */
export interface BusinessLocationSorting {
    /** Field to sort by */
    field: "name" | "createdAt" | "updatedAt" | "status";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Pagination, filtering, and sorting options for business location queries.
 *
 * @interface BusinessLocationQueryOptions
 *
 * @example
 * ```typescript
 * const options: BusinessLocationQueryOptions = {
 *   page: 1,
 *   pageSize: 20,
 *   filters: { status: BusinessLocationStatus.ACTIVE, isPrimary: true },
 *   sorting: { field: 'name', direction: 'asc' },
 * };
 * ```
 */
export interface BusinessLocationQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: BusinessLocationFilters;
    /** Optional sorting */
    sorting?: BusinessLocationSorting;
}
