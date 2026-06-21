import { z } from "zod";
import { TableShape } from "./reservation-section.schema";
/**
 * @fileoverview Aggregate floor plan definition schemas.
 * @module business-mgt/reservation-mgt/floor-plan-definition
 *
 * Composes the floor plan, its sections, and nested table placements into a single
 * graph. The Create* variants support atomic creation of a floor plan together with
 * its sections and tables in one payload, while the response variant returns the
 * fully hydrated graph.
 */
export declare const CreateFloorPlanTablePlacementInputSchema: z.ZodObject<{
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
export declare const CreateFloorPlanSectionInputSchema: z.ZodObject<{
    name: z.ZodString;
    capacity: z.ZodNumber;
    color: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    sortOrder: z.ZodDefault<z.ZodNumber>;
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
    tables: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CreateFloorPlanDefinitionSchema: z.ZodObject<{
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
        unit: z.ZodDefault<z.ZodEnum<typeof import("./reservation-table-layout.schema").CanvasUnit>>;
    }, z.core.$strip>;
    sections: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        capacity: z.ZodNumber;
        color: z.ZodString;
        isActive: z.ZodDefault<z.ZodBoolean>;
        sortOrder: z.ZodDefault<z.ZodNumber>;
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
        tables: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateFloorPlanTablePlacementInput = z.infer<typeof CreateFloorPlanTablePlacementInputSchema>;
export type CreateFloorPlanSectionInput = z.infer<typeof CreateFloorPlanSectionInputSchema>;
export type CreateFloorPlanDefinition = z.infer<typeof CreateFloorPlanDefinitionSchema>;
export declare const FloorPlanDefinitionSchema: z.ZodObject<{
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
        unit: z.ZodDefault<z.ZodEnum<typeof import("./reservation-table-layout.schema").CanvasUnit>>;
    }, z.core.$strip>;
    capacity: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    sections: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type FloorPlanDefinition = z.infer<typeof FloorPlanDefinitionSchema>;
