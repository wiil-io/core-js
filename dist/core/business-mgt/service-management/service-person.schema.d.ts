import z from "zod";
/**
 * @fileoverview Service Person schema definitions for service providers/staff.
 * @module business-mgt/service-person
 *
 * Service persons represent staff members who can be assigned to perform services.
 */
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
export declare const ServicePersonSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    skills: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    commissionPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    scheduleId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bookableOnline: z.ZodDefault<z.ZodBoolean>;
    bookableByStaff: z.ZodDefault<z.ZodBoolean>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new service person.
 * Omits auto-generated fields.
 */
export declare const CreateServicePersonSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    skills: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    commissionPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    scheduleId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bookableOnline: z.ZodDefault<z.ZodBoolean>;
    bookableByStaff: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for updating an existing service person.
 * All fields optional except id (required).
 */
export declare const UpdateServicePersonSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    userAccountId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    avatar: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodURL>>>;
    skills: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    commissionPercent: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    scheduleId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    bookableOnline: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    bookableByStaff: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ServicePerson = z.infer<typeof ServicePersonSchema>;
export type CreateServicePerson = z.infer<typeof CreateServicePersonSchema>;
export type UpdateServicePerson = z.infer<typeof UpdateServicePersonSchema>;
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
