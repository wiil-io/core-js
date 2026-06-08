import z from "zod";
import { BaseModelSchema } from "../../base.schema";

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
export const ServicePersonSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Location this provider is assigned to. Null for providers available at all locations."),
    userAccountId: z.string().nullable().optional().describe("Linked user account ID for staff login and calendar sync."),
    name: z.string().min(1).describe("Display name for this provider shown to customers during booking."),
    avatar: z.url().nullable().optional().describe("Provider avatar URL for visual identification."),
    description: z.string().nullable().optional().describe("Provider description or bio displayed during booking."),
    skills: z.array(z.string()).nullable().optional().describe("Skill IDs this provider can perform. Used to filter available providers per service."),
    commissionPercent: z.number().min(0).max(100).nullable().optional().describe("Provider commission percentage (0-100). Used for payroll calculations."),
    scheduleId: z.string().nullable().optional().describe("Schedule ID for provider availability. Links to scheduling system."),
    bookableOnline: z.boolean().default(true).describe("Whether customers can book this provider online."),
    bookableByStaff: z.boolean().default(true).describe("Whether staff can assign this provider internally."),
    isActive: z.boolean().default(true).describe("Whether this provider is active and available for booking."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new service person.
 * Omits auto-generated fields.
 */
export const CreateServicePersonSchema = ServicePersonSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing service person.
 * All fields optional except id (required).
 */
export const UpdateServicePersonSchema = CreateServicePersonSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ServicePerson to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ServicePerson = z.infer<typeof ServicePersonSchema>;
export type CreateServicePerson = z.infer<typeof CreateServicePersonSchema>;
export type UpdateServicePerson = z.infer<typeof UpdateServicePersonSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Service person filter options.
 * @interface ServicePersonFilters
 */
export interface ServicePersonFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by linked user account ID */
    userAccountId?: string;
    /** Filter by skill ID */
    skillId?: string;
    /** Filter by online bookability */
    bookableOnline?: boolean;
    /** Filter by staff bookability */
    bookableByStaff?: boolean;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Service person sorting options.
 * @interface ServicePersonSorting
 */
export interface ServicePersonSorting {
    /** Field to sort by */
    field: "name" | "commissionPercent" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Service person query options.
 * @interface ServicePersonQueryOptions
 */
export interface ServicePersonQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ServicePersonFilters;
    /** Optional sorting */
    sorting?: ServicePersonSorting;
}
