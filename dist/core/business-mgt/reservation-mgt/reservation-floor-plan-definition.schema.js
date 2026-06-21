"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloorPlanDefinitionSchema = exports.CreateFloorPlanDefinitionSchema = exports.CreateFloorPlanSectionInputSchema = exports.CreateFloorPlanTablePlacementInputSchema = void 0;
const zod_1 = require("zod");
const reservation_table_layout_schema_1 = require("./reservation-table-layout.schema");
const reservation_section_schema_1 = require("./reservation-section.schema");
/**
 * @fileoverview Aggregate floor plan definition schemas.
 * @module business-mgt/reservation-mgt/floor-plan-definition
 *
 * Composes the floor plan, its sections, and nested table placements into a single
 * graph. The Create* variants support atomic creation of a floor plan together with
 * its sections and tables in one payload, while the response variant returns the
 * fully hydrated graph.
 */
// === CreateFloorPlanDefinition: Atomic creation of floor plan with nested sections and tables ===
exports.CreateFloorPlanTablePlacementInputSchema = zod_1.z.object({
    number: zod_1.z.string().describe("Human-readable table number"),
    x: zod_1.z.number().describe("Table x position in layout coordinate space"),
    y: zod_1.z.number().describe("Table y position in layout coordinate space"),
    width: zod_1.z.number().positive().describe("Table width in layout units"),
    height: zod_1.z.number().positive().describe("Table height in layout units"),
    shape: zod_1.z.enum(reservation_section_schema_1.TableShape).describe("Rendered table shape"),
    rotation: zod_1.z.number().nullable().optional().describe("Optional table rotation in degrees"),
    minParty: zod_1.z.number().int().positive().describe("Minimum supported party size"),
    maxParty: zod_1.z.number().int().positive().describe("Maximum supported party size"),
    combinableWith: zod_1.z.array(zod_1.z.string()).default([]).describe("Table numbers that can be combined with this table"),
    serverSectionId: zod_1.z.string().nullable().optional().describe("Server section assignment"),
}).superRefine((data, ctx) => {
    if (data.maxParty < data.minParty) {
        ctx.addIssue({
            code: "custom",
            path: ["maxParty"],
            message: "maxParty must be greater than or equal to minParty",
        });
    }
});
exports.CreateFloorPlanSectionInputSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).describe("Section name (e.g., Patio, Main Dining, Bar)"),
    capacity: zod_1.z.number().int().positive().describe("Total seating capacity of the section"),
    color: zod_1.z.string().regex(/^#[0-9A-Fa-f]{6}$/).describe("Hex color for floor plan rendering"),
    isActive: zod_1.z.boolean().default(true).describe("Whether section is currently active"),
    sortOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order in lists"),
    geometry: reservation_section_schema_1.SectionGeometrySchema.nullable().optional(),
    tables: zod_1.z.array(exports.CreateFloorPlanTablePlacementInputSchema).min(1, "Each section must have at least one table").describe("Tables in this section"),
}).superRefine((data, ctx) => {
    if (!Array.isArray(data.tables) || data.tables.length === 0)
        return;
    const tablesMaxPartySum = data.tables.reduce((sum, table) => sum + (table?.maxParty ?? 0), 0);
    if (tablesMaxPartySum !== data.capacity) {
        ctx.addIssue({
            code: "custom",
            path: ["capacity"],
            message: `Section capacity (${data.capacity}) must equal the sum of its table maxParty values (${tablesMaxPartySum})`,
        });
    }
});
exports.CreateFloorPlanDefinitionSchema = reservation_table_layout_schema_1.CreateFloorPlanSchema.extend({
    sections: zod_1.z.array(exports.CreateFloorPlanSectionInputSchema).min(1, "At least one section must be defined").describe("Sections with nested table placements"),
}).superRefine((data, ctx) => {
    if (!Array.isArray(data.sections) || data.sections.length === 0)
        return;
    const sectionsCapacitySum = data.sections.reduce((sum, section) => sum + (section?.capacity ?? 0), 0);
    if (sectionsCapacitySum !== data.capacity) {
        ctx.addIssue({
            code: "custom",
            path: ["capacity"],
            message: `Floor plan capacity (${data.capacity}) must equal the sum of its section capacities (${sectionsCapacitySum})`,
        });
    }
});
// === FloorPlanDefinition: Graph response with nested sections and tables ===
exports.FloorPlanDefinitionSchema = reservation_table_layout_schema_1.FloorPlanSchema.extend({
    sections: zod_1.z.array(reservation_section_schema_1.SectionSchema).default([]).describe("Sections with nested table placements"),
});
