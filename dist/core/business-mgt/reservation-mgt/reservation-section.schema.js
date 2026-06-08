"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablePlacementWithContextSchema = exports.UpdateSectionSchema = exports.CreateSectionSchema = exports.SectionSchema = exports.UpdateTablePlacementSchema = exports.CreateTablePlacementSchema = exports.TablePlacementSchema = exports.SectionGeometrySchema = exports.point2DSchema = exports.TableShape = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
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
var TableShape;
(function (TableShape) {
    TableShape["ROUND"] = "round";
    TableShape["SQUARE"] = "square";
    TableShape["BOOTH"] = "booth";
    TableShape["RECT"] = "rect";
    TableShape["CURVED"] = "curved";
    TableShape["HIGH_TOP"] = "high_top";
    TableShape["BAR"] = "bar";
})(TableShape || (exports.TableShape = TableShape = {}));
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
exports.point2DSchema = zod_1.z.object({
    x: zod_1.z.number().describe("Point x position in floor plan coordinate space."),
    y: zod_1.z.number().describe("Point y position in floor plan coordinate space."),
}).describe("Two-dimensional point in floor plan coordinate space");
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
exports.SectionGeometrySchema = zod_1.z.discriminatedUnion("kind", [
    zod_1.z.object({
        kind: zod_1.z.literal("auto").describe("Automatically derive the section geometry from its table placements."),
    }),
    zod_1.z.object({
        kind: zod_1.z.literal("rect"),
        x: zod_1.z.number().describe("Rectangle x position in floor plan coordinate space."),
        y: zod_1.z.number().describe("Rectangle y position in floor plan coordinate space."),
        width: zod_1.z.number().positive().describe("Rectangle width in floor plan coordinate units."),
        height: zod_1.z.number().positive().describe("Rectangle height in floor plan coordinate units."),
        rotation: zod_1.z.number().min(-360).max(360).optional().describe("Optional rectangle rotation in degrees."),
    }),
    zod_1.z.object({
        kind: zod_1.z.literal("polygon"),
        points: zod_1.z.array(exports.point2DSchema).min(3).max(64).describe("Polygon vertices in floor plan coordinate space."),
        rotation: zod_1.z.number().min(-360).max(360).optional().describe("Optional polygon rotation in degrees."),
    }),
]);
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
exports.TablePlacementSchema = base_schema_1.BaseModelSchema.safeExtend({
    tableResourceId: zod_1.z.string().describe("Table resource ID represented by this floor plan placement."),
    floorPlanSectionId: zod_1.z.string().describe("Floor plan section ID that groups this table placement."),
    number: zod_1.z.string().describe("Human-readable table number shown on the floor plan."),
    x: zod_1.z.number().describe("Table x position in layout coordinate space."),
    y: zod_1.z.number().describe("Table y position in layout coordinate space."),
    width: zod_1.z.number().positive().describe("Table width in layout units."),
    height: zod_1.z.number().positive().describe("Table height in layout units."),
    shape: zod_1.z.enum(TableShape).describe("Rendered table shape."),
    rotation: zod_1.z.number().nullable().optional().describe("Optional table rotation in degrees."),
    minParty: zod_1.z.number().int().positive().describe("Minimum party size supported by this table."),
    maxParty: zod_1.z.number().int().positive().describe("Maximum party size supported by this table."),
    combinableWith: zod_1.z.array(zod_1.z.string()).default([]).describe("Table resource IDs that can be combined with this table."),
    serverSectionId: zod_1.z.string().nullable().optional().describe("Optional server section assignment for operations."),
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
exports.CreateTablePlacementSchema = exports.TablePlacementSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing table placement.
 * All fields optional except id.
 */
exports.UpdateTablePlacementSchema = exports.CreateTablePlacementSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the table placement to update."),
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
exports.SectionSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().describe("Business location ID where this floor plan section applies."),
    floorPlanId: zod_1.z.string().describe("Parent floor plan ID that owns this section."),
    name: zod_1.z.string().min(1).describe("Section name (e.g., Patio, Main Dining, Bar)."),
    capacity: zod_1.z.number().int().positive().describe("Total seating capacity of the section."),
    color: zod_1.z.string().regex(/^#[0-9A-Fa-f]{6}$/).describe("Hex color used when rendering this section on the floor plan."),
    isActive: zod_1.z.boolean().default(true).describe("Whether this section is currently active and bookable."),
    sortOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order for section lists and floor plan controls."),
    tables: zod_1.z.array(exports.TablePlacementSchema).default([]).describe("Table placements contained in this section."),
    geometry: exports.SectionGeometrySchema.nullable().optional().describe("Optional boundary geometry for rendering this floor plan section."),
});
/**
 * Schema for creating a new floor plan section.
 * Omits auto-generated fields.
 */
exports.CreateSectionSchema = exports.SectionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing floor plan section.
 * All fields optional except id.
 */
exports.UpdateSectionSchema = exports.CreateSectionSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the floor plan section to update."),
});
/**
 * Table placement with context schema.
 * Returns a table placement together with its containing section.
 *
 * @typedef {Object} TablePlacementWithContext
 * @property {TablePlacement} placement - Table placement
 * @property {Section} section - Containing floor plan section
 */
exports.TablePlacementWithContextSchema = zod_1.z.object({
    placement: exports.TablePlacementSchema,
    section: exports.SectionSchema,
}).describe("Table placement with containing floor plan section context");
