import z from "zod";
/**
 * @fileoverview Resource versioning schema definitions for reservation resources.
 * @module business-mgt/reservation-mgt/resource-versioning
 */
/**
 * Resource revision lifecycle status.
 *
 * @enum {string}
 */
export declare enum ResourceRevisionStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    ARCHIVED = "archived"
}
/**
 * Strategy for deriving a new resource revision.
 *
 * @enum {string}
 */
export declare enum ResourceRevisionDeriveStrategy {
    COPY_CURRENT = "copy_current",
    EMPTY = "empty"
}
/**
 * Resource definition schema.
 * Represents the stable identity for a versioned reservation resource catalog.
 *
 * @typedef {Object} ResourceDefinition
 * @property {string} name - Resource definition display name
 * @property {string} [description] - Resource definition description
 * @property {boolean} isActive - Whether this definition is active
 */
export declare const ResourceDefinitionSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const ResourceRevisionSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    resourceId: z.ZodString;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<typeof ResourceRevisionStatus>>;
    derivedFromRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Schema for creating a new resource definition.
 * Omits auto-generated fields.
 */
export declare const CreateResourceDefinitionSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for updating an existing resource definition.
 * All fields optional except id.
 */
export declare const UpdateResourceDefinitionSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new resource revision.
 * Omits auto-generated fields.
 */
export declare const CreateResourceRevisionSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof ResourceRevisionStatus>>;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodString;
    derivedFromRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing resource revision.
 * All fields optional except id.
 */
export declare const UpdateResourceRevisionSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ResourceRevisionStatus>>>;
    label: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    resourceId: z.ZodOptional<z.ZodString>;
    derivedFromRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    publishedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Request schema for deriving a new resource revision.
 *
 * @typedef {Object} DeriveResourceRevisionRequest
 * @property {string} resourceId - Resource definition ID
 * @property {string} [sourceRevisionId] - Source revision ID
 * @property {ResourceRevisionDeriveStrategy} strategy - Derivation strategy
 * @property {string} [label] - Optional derived revision label
 */
export declare const DeriveResourceRevisionRequestSchema: z.ZodObject<{
    resourceId: z.ZodString;
    sourceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    strategy: z.ZodDefault<z.ZodEnum<typeof ResourceRevisionDeriveStrategy>>;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Result schema returned after deriving a resource revision.
 *
 * @typedef {Object} DeriveResourceRevisionResult
 * @property {string} resourceId - Resource definition ID
 * @property {string} resourceRevisionId - Created revision ID
 */
export declare const DeriveResourceRevisionResultSchema: z.ZodObject<{
    resourceId: z.ZodString;
    resourceRevisionId: z.ZodString;
}, z.core.$strip>;
/**
 * Resource revision context schema.
 * Identifies a resource definition and the revision currently in use.
 *
 * @typedef {Object} ResourceRevisionContext
 * @property {string} resourceId - Resource definition ID
 * @property {string} resourceRevisionId - Resource revision ID
 */
export declare const ResourceRevisionContextSchema: z.ZodObject<{
    resourceId: z.ZodString;
    resourceRevisionId: z.ZodString;
}, z.core.$strip>;
export type ResourceDefinition = z.infer<typeof ResourceDefinitionSchema>;
export type ResourceRevision = z.infer<typeof ResourceRevisionSchema>;
export type CreateResourceDefinition = z.infer<typeof CreateResourceDefinitionSchema>;
export type UpdateResourceDefinition = z.infer<typeof UpdateResourceDefinitionSchema>;
export type CreateResourceRevision = z.infer<typeof CreateResourceRevisionSchema>;
export type UpdateResourceRevision = z.infer<typeof UpdateResourceRevisionSchema>;
export type DeriveResourceRevisionRequest = z.infer<typeof DeriveResourceRevisionRequestSchema>;
export type DeriveResourceRevisionResult = z.infer<typeof DeriveResourceRevisionResultSchema>;
export type ResourceRevisionContext = z.infer<typeof ResourceRevisionContextSchema>;
