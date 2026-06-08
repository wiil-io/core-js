import { z } from "zod";
/**
 * @fileoverview Floor plan section and table placement schema definitions.
 * @module business-mgt/reservation-mgt/section
 */
/**
 * Rendered table shape for floor plan layouts.
 *
 * @enum {string}
 */
export declare enum TableShape {
    ROUND = "round",
    SQUARE = "square",
    BOOTH = "booth",
    RECT = "rect",
    CURVED = "curved",
    HIGH_TOP = "high_top",
    BAR = "bar"
}
/**
 * Two-dimensional point schema.
 * Uses the same coordinate system as table placement x/y values.
 *
 * @typedef {Object} Point2D
 * @property {number} x - Point x position
 * @property {number} y - Point y position
 */
export declare const point2DSchema: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strip>;
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
export declare const SectionGeometrySchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"auto">;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"rect">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotation: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"polygon">;
    points: z.ZodArray<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
    rotation: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>], "kind">;
export type SectionGeometry = z.infer<typeof SectionGeometrySchema>;
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
export declare const TablePlacementSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    tableResourceId: z.ZodString;
    floorPlanSectionId: z.ZodString;
    number: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    shape: z.ZodEnum<typeof TableShape>;
    rotation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    minParty: z.ZodNumber;
    maxParty: z.ZodNumber;
    combinableWith: z.ZodDefault<z.ZodArray<z.ZodString>>;
    serverSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new table placement.
 * Omits auto-generated fields.
 */
export declare const CreateTablePlacementSchema: z.ZodObject<{
    number: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    floorPlanSectionId: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    rotation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    tableResourceId: z.ZodString;
    shape: z.ZodEnum<typeof TableShape>;
    minParty: z.ZodNumber;
    maxParty: z.ZodNumber;
    combinableWith: z.ZodDefault<z.ZodArray<z.ZodString>>;
    serverSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing table placement.
 * All fields optional except id.
 */
export declare const UpdateTablePlacementSchema: z.ZodObject<{
    number: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    floorPlanSectionId: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
    rotation: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    tableResourceId: z.ZodOptional<z.ZodString>;
    shape: z.ZodOptional<z.ZodEnum<typeof TableShape>>;
    minParty: z.ZodOptional<z.ZodNumber>;
    maxParty: z.ZodOptional<z.ZodNumber>;
    combinableWith: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    serverSectionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
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
export declare const SectionSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodString;
    floorPlanId: z.ZodString;
    name: z.ZodString;
    capacity: z.ZodNumber;
    color: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    sortOrder: z.ZodDefault<z.ZodNumber>;
    tables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        tableResourceId: z.ZodString;
        floorPlanSectionId: z.ZodString;
        number: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        shape: z.ZodEnum<typeof TableShape>;
        rotation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minParty: z.ZodNumber;
        maxParty: z.ZodNumber;
        combinableWith: z.ZodDefault<z.ZodArray<z.ZodString>>;
        serverSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    geometry: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"auto">;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotation: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        rotation: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>], "kind">>>;
}, z.core.$strip>;
/**
 * Schema for creating a new floor plan section.
 * Omits auto-generated fields.
 */
export declare const CreateSectionSchema: z.ZodObject<{
    capacity: z.ZodNumber;
    name: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodString;
    sortOrder: z.ZodDefault<z.ZodNumber>;
    floorPlanId: z.ZodString;
    color: z.ZodString;
    tables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        tableResourceId: z.ZodString;
        floorPlanSectionId: z.ZodString;
        number: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        shape: z.ZodEnum<typeof TableShape>;
        rotation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minParty: z.ZodNumber;
        maxParty: z.ZodNumber;
        combinableWith: z.ZodDefault<z.ZodArray<z.ZodString>>;
        serverSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    geometry: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"auto">;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotation: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        rotation: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>], "kind">>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing floor plan section.
 * All fields optional except id.
 */
export declare const UpdateSectionSchema: z.ZodObject<{
    capacity: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    floorPlanId: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    tables: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        tableResourceId: z.ZodString;
        floorPlanSectionId: z.ZodString;
        number: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        shape: z.ZodEnum<typeof TableShape>;
        rotation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minParty: z.ZodNumber;
        maxParty: z.ZodNumber;
        combinableWith: z.ZodDefault<z.ZodArray<z.ZodString>>;
        serverSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    geometry: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"auto">;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotation: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        rotation: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>], "kind">>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type TablePlacement = z.infer<typeof TablePlacementSchema>;
export type CreateTablePlacement = z.infer<typeof CreateTablePlacementSchema>;
export type UpdateTablePlacement = z.infer<typeof UpdateTablePlacementSchema>;
export type Section = z.infer<typeof SectionSchema>;
export type CreateSection = z.infer<typeof CreateSectionSchema>;
export type UpdateSection = z.infer<typeof UpdateSectionSchema>;
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
export declare const TablePlacementWithContextSchema: z.ZodObject<{
    placement: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        tableResourceId: z.ZodString;
        floorPlanSectionId: z.ZodString;
        number: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        shape: z.ZodEnum<typeof TableShape>;
        rotation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minParty: z.ZodNumber;
        maxParty: z.ZodNumber;
        combinableWith: z.ZodDefault<z.ZodArray<z.ZodString>>;
        serverSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    section: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        locationId: z.ZodString;
        floorPlanId: z.ZodString;
        name: z.ZodString;
        capacity: z.ZodNumber;
        color: z.ZodString;
        isActive: z.ZodDefault<z.ZodBoolean>;
        sortOrder: z.ZodDefault<z.ZodNumber>;
        tables: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            tableResourceId: z.ZodString;
            floorPlanSectionId: z.ZodString;
            number: z.ZodString;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            shape: z.ZodEnum<typeof TableShape>;
            rotation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            minParty: z.ZodNumber;
            maxParty: z.ZodNumber;
            combinableWith: z.ZodDefault<z.ZodArray<z.ZodString>>;
            serverSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        geometry: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"auto">;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotation: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>>;
            rotation: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>], "kind">>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TablePlacementWithContext = z.infer<typeof TablePlacementWithContextSchema>;
