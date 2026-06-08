import z from "zod";
import { BaseModelSchema } from "../../../base.schema";

/**
 * @fileoverview Resource versioning schema definitions for reservation resources.
 * @module business-mgt/reservation-mgt/resource-versioning
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Resource revision lifecycle status.
 *
 * @enum {string}
 */
export enum ResourceRevisionStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    ARCHIVED = "archived",
}

/**
 * Strategy for deriving a new resource revision.
 *
 * @enum {string}
 */
export enum ResourceRevisionDeriveStrategy {
    COPY_CURRENT = "copy_current",
    EMPTY = "empty",
}

// ============================================================================
// RESOURCE VERSIONING SCHEMAS
// ============================================================================

/**
 * Resource definition schema.
 * Represents the stable identity for a versioned reservation resource catalog.
 *
 * @typedef {Object} ResourceDefinition
 * @property {string} name - Resource definition display name
 * @property {string} [description] - Resource definition description
 * @property {boolean} isActive - Whether this definition is active
 */
export const ResourceDefinitionSchema = BaseModelSchema.safeExtend({
    name: z.string().min(1).describe("Display name for the versioned resource definition."),
    description: z.string().nullable().optional().describe("Optional description of the resource definition and its intended reservation use."),
    isActive: z.boolean().default(true).describe("Whether this resource definition is active and available for revision management."),
});

/**
 * Resource revision schema.
 * Represents a specific editable or published version of a resource definition.
 *
 * @typedef {Object} ResourceRevision
 * @property {string} resourceId - Resource definition ID
 * @property {string} [label] - Human-readable revision label
 * @property {ResourceRevisionStatus} status - Current revision status
 * @property {string} [derivedFromRevisionId] - Source revision ID
 * @property {number} [publishedAt] - Publication timestamp
 */
export const ResourceRevisionSchema = BaseModelSchema.safeExtend({
    resourceId: z.string().describe("Resource definition ID that owns this revision."),
    label: z.string().nullable().optional().describe("Human-readable revision label, such as 'Summer layout' or 'Q4 rental fleet'."),
    status: z.enum(ResourceRevisionStatus).default(ResourceRevisionStatus.DRAFT).describe("Lifecycle status for this resource revision."),
    derivedFromRevisionId: z.string().nullable().optional().describe("Source revision ID when this revision was derived from an existing revision."),
    publishedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp when this revision was published."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new resource definition.
 * Omits auto-generated fields.
 */
export const CreateResourceDefinitionSchema = ResourceDefinitionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing resource definition.
 * All fields optional except id.
 */
export const UpdateResourceDefinitionSchema = CreateResourceDefinitionSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the resource definition to update."),
});

/**
 * Schema for creating a new resource revision.
 * Omits auto-generated fields.
 */
export const CreateResourceRevisionSchema = ResourceRevisionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing resource revision.
 * All fields optional except id.
 */
export const UpdateResourceRevisionSchema = CreateResourceRevisionSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the resource revision to update."),
});

// ============================================================================
// DERIVATION SCHEMAS
// ============================================================================

/**
 * Request schema for deriving a new resource revision.
 *
 * @typedef {Object} DeriveResourceRevisionRequest
 * @property {string} resourceId - Resource definition ID
 * @property {string} [sourceRevisionId] - Source revision ID
 * @property {ResourceRevisionDeriveStrategy} strategy - Derivation strategy
 * @property {string} [label] - Optional derived revision label
 */
export const DeriveResourceRevisionRequestSchema = z.object({
    resourceId: z.string().describe("Resource definition ID to derive a revision for."),
    sourceRevisionId: z.string().nullable().optional().describe("Optional source revision ID used when strategy is COPY_CURRENT."),
    strategy: z.enum(ResourceRevisionDeriveStrategy).default(ResourceRevisionDeriveStrategy.COPY_CURRENT).describe("Derivation strategy for the new revision."),
    label: z.string().nullable().optional().describe("Optional label for the derived revision."),
});

/**
 * Result schema returned after deriving a resource revision.
 *
 * @typedef {Object} DeriveResourceRevisionResult
 * @property {string} resourceId - Resource definition ID
 * @property {string} resourceRevisionId - Created revision ID
 */
export const DeriveResourceRevisionResultSchema = z.object({
    resourceId: z.string().describe("Resource definition ID that owns the derived revision."),
    resourceRevisionId: z.string().describe("Newly created resource revision ID."),
});

/**
 * Resource revision context schema.
 * Identifies a resource definition and the revision currently in use.
 *
 * @typedef {Object} ResourceRevisionContext
 * @property {string} resourceId - Resource definition ID
 * @property {string} resourceRevisionId - Resource revision ID
 */
export const ResourceRevisionContextSchema = z.object({
    resourceId: z.string().describe("Resource definition ID."),
    resourceRevisionId: z.string().describe("Resource revision ID."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ResourceDefinition = z.infer<typeof ResourceDefinitionSchema>;
export type ResourceRevision = z.infer<typeof ResourceRevisionSchema>;
export type CreateResourceDefinition = z.infer<typeof CreateResourceDefinitionSchema>;
export type UpdateResourceDefinition = z.infer<typeof UpdateResourceDefinitionSchema>;
export type CreateResourceRevision = z.infer<typeof CreateResourceRevisionSchema>;
export type UpdateResourceRevision = z.infer<typeof UpdateResourceRevisionSchema>;
export type DeriveResourceRevisionRequest = z.infer<typeof DeriveResourceRevisionRequestSchema>;
export type DeriveResourceRevisionResult = z.infer<typeof DeriveResourceRevisionResultSchema>;
export type ResourceRevisionContext = z.infer<typeof ResourceRevisionContextSchema>;
