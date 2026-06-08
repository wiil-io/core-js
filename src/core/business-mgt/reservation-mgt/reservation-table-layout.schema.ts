import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Floor plan schema definitions for table reservations.
 * @module business-mgt/reservation-mgt/table-layout
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Canvas coordinate unit.
 *
 * @enum {string}
 */
export enum CanvasUnit {
    PX = "px",
    FT = "ft",
    M = "m",
}

// ============================================================================
// FLOOR PLAN SCHEMAS
// ============================================================================

/**
 * Canvas dimensions schema.
 * Defines the coordinate space used for floor plan rendering.
 *
 * @typedef {Object} CanvasDimensions
 * @property {number} width - Canvas width
 * @property {number} height - Canvas height
 * @property {CanvasUnit} unit - Coordinate unit
 */
export const CanvasDimensionsSchema = z.object({
    width: z.number().positive().describe("Canvas width"),
    height: z.number().positive().describe("Canvas height"),
    unit: z.enum(CanvasUnit).default(CanvasUnit.PX).describe("Coordinate unit"),
});

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
export const FloorPlanSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID where the floor plan applies. Null applies when the layout is not location-specific."),
    name: z.string().min(1).describe("Floor plan name (e.g., Main Floor, Rooftop)"),
    description: z.string().describe("Floor plan description"),
    imageUrls: z.array(z.url()).nullable().optional().describe("Optional floor plan images for reference"),
    isActive: z.boolean().default(true).describe("Whether floor plan is active"),
    canvasDimensions: CanvasDimensionsSchema.describe("Canvas coordinate space"),
    capacity: z.number().int().positive().describe("Total seating capacity of the floor plan"),
    metadata: z.record(z.string(), z.any()).nullable().optional().describe("Additional floor plan metadata"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new floor plan.
 * Omits auto-generated fields.
 */
export const CreateFloorPlanSchema = FloorPlanSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing floor plan.
 * All fields optional except id.
 */
export const UpdateFloorPlanSchema = CreateFloorPlanSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the floor plan to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type CanvasDimensions = z.infer<typeof CanvasDimensionsSchema>;
export type FloorPlan = z.infer<typeof FloorPlanSchema>;
export type CreateFloorPlan = z.infer<typeof CreateFloorPlanSchema>;
export type UpdateFloorPlan = z.infer<typeof UpdateFloorPlanSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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
