import { z } from "zod";
/**
 * @fileoverview Floor plan schema definitions for table reservations.
 * @module business-mgt/reservation-mgt/table-layout
 */
/**
 * Canvas coordinate unit.
 *
 * @enum {string}
 */
export declare enum CanvasUnit {
    PX = "px",
    FT = "ft",
    M = "m"
}
/**
 * Canvas dimensions schema.
 * Defines the coordinate space used for floor plan rendering.
 *
 * @typedef {Object} CanvasDimensions
 * @property {number} width - Canvas width
 * @property {number} height - Canvas height
 * @property {CanvasUnit} unit - Coordinate unit
 */
export declare const CanvasDimensionsSchema: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    unit: z.ZodDefault<z.ZodEnum<typeof CanvasUnit>>;
}, z.core.$strip>;
/**
 * Floor plan schema.
 * Represents a table layout canvas for a reservable business location.
 *
 * @typedef {Object} FloorPlan
 * @property {string} [locationId] - Business location where the floor plan applies
 * @property {string} name - Floor plan name
 * @property {string} description - Floor plan description
 * @property {string[]} [imageUrls] - Optional floor plan reference images
 * @property {boolean} isActive - Whether the floor plan is active
 * @property {CanvasDimensions} canvasDimensions - Floor plan coordinate space
 * @property {number} capacity - Total seating capacity
 * @property {Object} [metadata] - Additional floor plan metadata
 */
export declare const FloorPlanSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodString;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    canvasDimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<typeof CanvasUnit>>;
    }, z.core.$strip>;
    capacity: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new floor plan.
 * Omits auto-generated fields.
 */
export declare const CreateFloorPlanSchema: z.ZodObject<{
    capacity: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    name: z.ZodString;
    description: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    canvasDimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<typeof CanvasUnit>>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Schema for updating an existing floor plan.
 * All fields optional except id.
 */
export declare const UpdateFloorPlanSchema: z.ZodObject<{
    capacity: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    imageUrls: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>>;
    canvasDimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<typeof CanvasUnit>>;
    }, z.core.$strip>>;
    id: z.ZodString;
}, z.core.$strip>;
export type CanvasDimensions = z.infer<typeof CanvasDimensionsSchema>;
export type FloorPlan = z.infer<typeof FloorPlanSchema>;
export type CreateFloorPlan = z.infer<typeof CreateFloorPlanSchema>;
export type UpdateFloorPlan = z.infer<typeof UpdateFloorPlanSchema>;
/**
 * Floor plan filter options.
 * @interface FloorPlanFilters
 */
export interface FloorPlanFilters {
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by active status */
    isActive?: boolean;
}
/**
 * Floor plan query options.
 * @interface FloorPlanQueryOptions
 */
export interface FloorPlanQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: FloorPlanFilters;
}
