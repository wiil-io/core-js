import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Floor plan section and table placement schema definitions.
 * @module business-mgt/reservation-mgt/section
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Rendered table shape for floor plan layouts.
 *
 * @enum {string}
 */
export enum TableShape {
    ROUND = "round",
    SQUARE = "square",
    BOOTH = "booth",
    RECT = "rect",
    CURVED = "curved",
    HIGH_TOP = "high_top",
    BAR = "bar",
}

// ============================================================================
// GEOMETRY SCHEMAS
// ============================================================================

/**
 * Two-dimensional point schema.
 * Uses the same coordinate system as table placement x/y values.
 *
 * @typedef {Object} Point2D
 * @property {number} x - Point x position
 * @property {number} y - Point y position
 */
export const point2DSchema = z.object({
    x: z.number().describe("Point x position in floor plan coordinate space."),
    y: z.number().describe("Point y position in floor plan coordinate space."),
}).describe("Two-dimensional point in floor plan coordinate space");

export type Point2D = z.infer<typeof point2DSchema>;

/**
 * Section geometry schema.
 * Supports automatic, rectangular, and polygon-based section boundaries.
 *
 * @typedef {Object} SectionGeometry
 * @property {string} kind - Geometry mode
 * @property {number} [x] - Rectangle x position
 * @property {number} [y] - Rectangle y position
 * @property {number} [width] - Rectangle width
 * @property {number} [height] - Rectangle height
 * @property {Point2D[]} [points] - Polygon vertices
 * @property {number} [rotation] - Optional rotation in degrees
 */
export const SectionGeometrySchema = z.discriminatedUnion("kind", [
    z.object({
        kind: z.literal("auto").describe("Automatically derive the section geometry from its table placements."),
    }),
    z.object({
        kind: z.literal("rect"),
        x: z.number().describe("Rectangle x position in floor plan coordinate space."),
        y: z.number().describe("Rectangle y position in floor plan coordinate space."),
        width: z.number().positive().describe("Rectangle width in floor plan coordinate units."),
        height: z.number().positive().describe("Rectangle height in floor plan coordinate units."),
        rotation: z.number().min(-360).max(360).optional().describe("Optional rectangle rotation in degrees."),
    }),
    z.object({
        kind: z.literal("polygon"),
        points: z.array(point2DSchema).min(3).max(64).describe("Polygon vertices in floor plan coordinate space."),
        rotation: z.number().min(-360).max(360).optional().describe("Optional polygon rotation in degrees."),
    }),
]);

export type SectionGeometry = z.infer<typeof SectionGeometrySchema>;

// ============================================================================
// TABLE PLACEMENT SCHEMA
// ============================================================================

/**
 * Table placement schema.
 * Represents a physical table's position and seating constraints within a floor plan section.
 *
 * @typedef {Object} TablePlacement
 * @property {string} tableResourceId - Table resource represented by this placement
 * @property {string} floorPlanSectionId - Floor plan section containing the table
 * @property {string} number - Human-readable table number
 * @property {number} x - Table x position
 * @property {number} y - Table y position
 * @property {number} width - Table width
 * @property {number} height - Table height
 * @property {TableShape} shape - Rendered table shape
 * @property {number} [rotation] - Optional rotation in degrees
 * @property {number} minParty - Minimum supported party size
 * @property {number} maxParty - Maximum supported party size
 * @property {string[]} combinableWith - Table IDs that can be combined with this table
 * @property {string} [serverSectionId] - Optional server section assignment
 */
export const TablePlacementSchema = BaseModelSchema.safeExtend({
    tableResourceId: z.string().describe("Table resource ID represented by this floor plan placement."),
    floorPlanSectionId: z.string().describe("Floor plan section ID that groups this table placement."),
    number: z.string().describe("Human-readable table number shown on the floor plan."),
    x: z.number().describe("Table x position in layout coordinate space."),
    y: z.number().describe("Table y position in layout coordinate space."),
    width: z.number().positive().describe("Table width in layout units."),
    height: z.number().positive().describe("Table height in layout units."),
    shape: z.enum(TableShape).describe("Rendered table shape."),
    rotation: z.number().nullable().optional().describe("Optional table rotation in degrees."),
    minParty: z.number().int().positive().describe("Minimum party size supported by this table."),
    maxParty: z.number().int().positive().describe("Maximum party size supported by this table."),
    combinableWith: z.array(z.string()).default([]).describe("Table resource IDs that can be combined with this table."),
    serverSectionId: z.string().nullable().optional().describe("Optional server section assignment for operations."),
}).superRefine((data, ctx) => {
    if (data.maxParty < data.minParty) {
        ctx.addIssue({
            code: "custom",
            path: ["maxParty"],
            message: "maxParty must be greater than or equal to minParty",
        });
    }

    if (data.combinableWith.includes(data.tableResourceId)) {
        ctx.addIssue({
            code: "custom",
            path: ["combinableWith"],
            message: "combinableWith cannot include the table itself",
        });
    }
});

/**
 * Schema for creating a new table placement.
 * Omits auto-generated fields.
 */
export const CreateTablePlacementSchema = TablePlacementSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing table placement.
 * All fields optional except id.
 */
export const UpdateTablePlacementSchema = CreateTablePlacementSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the table placement to update."),
});

// ============================================================================
// SECTION SCHEMA
// ============================================================================

/**
 * Section schema.
 * Represents a named seating area within a floor plan, including its tables and boundary geometry.
 *
 * @typedef {Object} Section
 * @property {string} locationId - Business location where the section applies
 * @property {string} floorPlanId - Parent floor plan ID
 * @property {string} name - Section name
 * @property {number} capacity - Total seating capacity
 * @property {string} color - Hex color used for rendering
 * @property {boolean} isActive - Whether the section is active
 * @property {number} sortOrder - Display order
 * @property {TablePlacement[]} tables - Table placements in this section
 * @property {SectionGeometry} [geometry] - Optional section boundary geometry
 */
export const SectionSchema = BaseModelSchema.safeExtend({
    locationId: z.string().describe("Business location ID where this floor plan section applies."),
    floorPlanId: z.string().describe("Parent floor plan ID that owns this section."),
    name: z.string().min(1).describe("Section name (e.g., Patio, Main Dining, Bar)."),
    capacity: z.number().int().positive().describe("Total seating capacity of the section."),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).describe("Hex color used when rendering this section on the floor plan."),
    isActive: z.boolean().default(true).describe("Whether this section is currently active and bookable."),
    sortOrder: z.number().int().nonnegative().default(0).describe("Display order for section lists and floor plan controls."),
    tables: z.array(TablePlacementSchema).default([]).describe("Table placements contained in this section."),
    geometry: SectionGeometrySchema.nullable().optional().describe("Optional boundary geometry for rendering this floor plan section."),
});

/**
 * Schema for creating a new floor plan section.
 * Omits auto-generated fields.
 */
export const CreateSectionSchema = SectionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing floor plan section.
 * All fields optional except id.
 */
export const UpdateSectionSchema = CreateSectionSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the floor plan section to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type TablePlacement = z.infer<typeof TablePlacementSchema>;
export type CreateTablePlacement = z.infer<typeof CreateTablePlacementSchema>;
export type UpdateTablePlacement = z.infer<typeof UpdateTablePlacementSchema>;
export type Section = z.infer<typeof SectionSchema>;
export type CreateSection = z.infer<typeof CreateSectionSchema>;
export type UpdateSection = z.infer<typeof UpdateSectionSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Floor plan section filter options.
 * @interface SectionFilters
 */
export interface SectionFilters {
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Floor plan section query options.
 * @interface SectionQueryOptions
 */
export interface SectionQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: SectionFilters;
}

/**
 * Table placement with context schema.
 * Returns a table placement together with its containing section.
 *
 * @typedef {Object} TablePlacementWithContext
 * @property {TablePlacement} placement - Table placement
 * @property {Section} section - Containing floor plan section
 */
export const TablePlacementWithContextSchema = z.object({
    placement: TablePlacementSchema,
    section: SectionSchema,
}).describe("Table placement with containing floor plan section context");

export type TablePlacementWithContext = z.infer<typeof TablePlacementWithContextSchema>;
