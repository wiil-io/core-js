import { z } from "zod";
import { CreateFloorPlanSchema, FloorPlanSchema } from "./reservation-table-layout.schema";
import { TableShape, SectionGeometrySchema, SectionSchema } from "./reservation-section.schema";

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

export const CreateFloorPlanTablePlacementInputSchema = z.object({
    number: z.string().describe("Human-readable table number"),
    x: z.number().describe("Table x position in layout coordinate space"),
    y: z.number().describe("Table y position in layout coordinate space"),
    width: z.number().positive().describe("Table width in layout units"),
    height: z.number().positive().describe("Table height in layout units"),
    shape: z.enum(TableShape).describe("Rendered table shape"),
    rotation: z.number().nullable().optional().describe("Optional table rotation in degrees"),
    minParty: z.number().int().positive().describe("Minimum supported party size"),
    maxParty: z.number().int().positive().describe("Maximum supported party size"),
    combinableWith: z.array(z.string()).default([]).describe("Table numbers that can be combined with this table"),
    serverSectionId: z.string().nullable().optional().describe("Server section assignment"),
}).superRefine((data, ctx) => {
    if (data.maxParty < data.minParty) {
        ctx.addIssue({
            code: "custom",
            path: ["maxParty"],
            message: "maxParty must be greater than or equal to minParty",
        });
    }
});

export const CreateFloorPlanSectionInputSchema = z.object({
    name: z.string().min(1).describe("Section name (e.g., Patio, Main Dining, Bar)"),
    capacity: z.number().int().positive().describe("Total seating capacity of the section"),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).describe("Hex color for floor plan rendering"),
    isActive: z.boolean().default(true).describe("Whether section is currently active"),
    sortOrder: z.number().int().nonnegative().default(0).describe("Display order in lists"),
    geometry: SectionGeometrySchema.nullable().optional(),
    tables: z.array(CreateFloorPlanTablePlacementInputSchema).min(1, "Each section must have at least one table").describe("Tables in this section"),
}).superRefine((data, ctx) => {
    if (!Array.isArray(data.tables) || data.tables.length === 0) return;
    const tablesMaxPartySum = data.tables.reduce((sum, table) => sum + (table?.maxParty ?? 0), 0);
    if (tablesMaxPartySum !== data.capacity) {
        ctx.addIssue({
            code: "custom",
            path: ["capacity"],
            message: `Section capacity (${data.capacity}) must equal the sum of its table maxParty values (${tablesMaxPartySum})`,
        });
    }
});

export const CreateFloorPlanDefinitionSchema = CreateFloorPlanSchema.extend({
    sections: z.array(CreateFloorPlanSectionInputSchema).min(1, "At least one section must be defined").describe("Sections with nested table placements"),
}).superRefine((data, ctx) => {
    if (!Array.isArray(data.sections) || data.sections.length === 0) return;
    const sectionsCapacitySum = data.sections.reduce((sum, section) => sum + (section?.capacity ?? 0), 0);
    if (sectionsCapacitySum !== data.capacity) {
        ctx.addIssue({
            code: "custom",
            path: ["capacity"],
            message: `Floor plan capacity (${data.capacity}) must equal the sum of its section capacities (${sectionsCapacitySum})`,
        });
    }
});

export type CreateFloorPlanTablePlacementInput = z.infer<typeof CreateFloorPlanTablePlacementInputSchema>;
export type CreateFloorPlanSectionInput = z.infer<typeof CreateFloorPlanSectionInputSchema>;
export type CreateFloorPlanDefinition = z.infer<typeof CreateFloorPlanDefinitionSchema>;

// === FloorPlanDefinition: Graph response with nested sections and tables ===

export const FloorPlanDefinitionSchema = FloorPlanSchema.extend({
    sections: z.array(SectionSchema).default([]).describe("Sections with nested table placements"),
});

export type FloorPlanDefinition = z.infer<typeof FloorPlanDefinitionSchema>;
