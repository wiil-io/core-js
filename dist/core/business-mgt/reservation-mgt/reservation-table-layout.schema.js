"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFloorPlanSchema = exports.CreateFloorPlanSchema = exports.FloorPlanSchema = exports.CanvasDimensionsSchema = exports.CanvasUnit = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
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
var CanvasUnit;
(function (CanvasUnit) {
    CanvasUnit["PX"] = "px";
    CanvasUnit["FT"] = "ft";
    CanvasUnit["M"] = "m";
})(CanvasUnit || (exports.CanvasUnit = CanvasUnit = {}));
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
exports.CanvasDimensionsSchema = zod_1.z.object({
    width: zod_1.z.number().positive().describe("Canvas width"),
    height: zod_1.z.number().positive().describe("Canvas height"),
    unit: zod_1.z.enum(CanvasUnit).default(CanvasUnit.PX).describe("Coordinate unit"),
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
exports.FloorPlanSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the floor plan applies. Null applies when the layout is not location-specific."),
    name: zod_1.z.string().min(1).describe("Floor plan name (e.g., Main Floor, Rooftop)"),
    description: zod_1.z.string().describe("Floor plan description"),
    imageUrls: zod_1.z.array(zod_1.z.url()).nullable().optional().describe("Optional floor plan images for reference"),
    isActive: zod_1.z.boolean().default(true).describe("Whether floor plan is active"),
    canvasDimensions: exports.CanvasDimensionsSchema.describe("Canvas coordinate space"),
    capacity: zod_1.z.number().int().positive().describe("Total seating capacity of the floor plan"),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).nullable().optional().describe("Additional floor plan metadata"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new floor plan.
 * Omits auto-generated fields.
 */
exports.CreateFloorPlanSchema = exports.FloorPlanSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing floor plan.
 * All fields optional except id.
 */
exports.UpdateFloorPlanSchema = exports.CreateFloorPlanSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the floor plan to update."),
});
