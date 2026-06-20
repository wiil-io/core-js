import { z } from "zod";
/**
 * @fileoverview Reservation resource instance schema definitions.
 * @module business-mgt/reservation-mgt/resource-instance
 */
/**
 * Operational status of a physical resource instance.
 *
 * @enum {string}
 */
export declare enum ResourceInstanceStatus {
    AVAILABLE = "available",
    RESERVED = "reserved",
    OCCUPIED = "occupied",
    MAINTENANCE = "maintenance",
    CLEANING = "cleaning",
    OUT_OF_SERVICE = "out_of_service"
}
/**
 * Resource instance attribute schema.
 * Stores flexible key/value attributes on physical reservation inventory.
 *
 * @typedef {Object} ResourceInstanceAttribute
 * @property {string} key - Attribute key
 * @property {string} value - Attribute value
 */
export declare const ResourceInstanceAttributeSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
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
export declare const ResourceInstanceSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    resourceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodString;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<typeof ResourceInstanceStatus>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new resource instance.
 * Omits auto-generated fields.
 */
export declare const CreateResourceInstanceSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<typeof ResourceInstanceStatus>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>;
    resourceId: z.ZodString;
    resourceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing resource instance.
 * All fields optional except id.
 */
export declare const UpdateResourceInstanceSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    name: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isAvailable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    attributes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>>;
    resourceId: z.ZodOptional<z.ZodString>;
    resourceRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<typeof ResourceInstanceStatus>>;
}, z.core.$strip>;
export type ResourceInstanceAttribute = z.infer<typeof ResourceInstanceAttributeSchema>;
export type ResourceInstance = z.infer<typeof ResourceInstanceSchema>;
export type CreateResourceInstance = z.infer<typeof CreateResourceInstanceSchema>;
export type UpdateResourceInstance = z.infer<typeof UpdateResourceInstanceSchema>;
/**
 * Resource instance filter options.
 * @interface ResourceInstanceFilters
 */
export interface ResourceInstanceFilters {
    /** Filter by parent resource ID */
    resourceId?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by operational statuses */
    status?: ResourceInstanceStatus[];
    /** Filter by assignment availability */
    isAvailable?: boolean;
}
/**
 * Resource instance sorting options.
 * @interface ResourceInstanceSorting
 */
export interface ResourceInstanceSorting {
    /** Field to sort by */
    field: "name" | "status" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Resource instance query options.
 * @interface ResourceInstanceQueryOptions
 */
export interface ResourceInstanceQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ResourceInstanceFilters;
    /** Optional sorting */
    sorting?: ResourceInstanceSorting;
}
