"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRevisionContextSchema = exports.DeriveResourceRevisionResultSchema = exports.DeriveResourceRevisionRequestSchema = exports.UpdateResourceRevisionSchema = exports.CreateResourceRevisionSchema = exports.UpdateResourceDefinitionSchema = exports.CreateResourceDefinitionSchema = exports.ResourceRevisionSchema = exports.ResourceDefinitionSchema = exports.ResourceRevisionDeriveStrategy = exports.ResourceRevisionStatus = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../../base.schema");
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
var ResourceRevisionStatus;
(function (ResourceRevisionStatus) {
    ResourceRevisionStatus["DRAFT"] = "draft";
    ResourceRevisionStatus["ACTIVE"] = "active";
    ResourceRevisionStatus["ARCHIVED"] = "archived";
})(ResourceRevisionStatus || (exports.ResourceRevisionStatus = ResourceRevisionStatus = {}));
/**
 * Strategy for deriving a new resource revision.
 *
 * @enum {string}
 */
var ResourceRevisionDeriveStrategy;
(function (ResourceRevisionDeriveStrategy) {
    ResourceRevisionDeriveStrategy["COPY_CURRENT"] = "copy_current";
    ResourceRevisionDeriveStrategy["EMPTY"] = "empty";
})(ResourceRevisionDeriveStrategy || (exports.ResourceRevisionDeriveStrategy = ResourceRevisionDeriveStrategy = {}));
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
exports.ResourceDefinitionSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1).describe("Display name for the versioned resource definition."),
    description: zod_1.default.string().nullable().optional().describe("Optional description of the resource definition and its intended reservation use."),
    isActive: zod_1.default.boolean().default(true).describe("Whether this resource definition is active and available for revision management."),
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
exports.ResourceRevisionSchema = base_schema_1.BaseModelSchema.safeExtend({
    resourceId: zod_1.default.string().describe("Resource definition ID that owns this revision."),
    label: zod_1.default.string().nullable().optional().describe("Human-readable revision label, such as 'Summer layout' or 'Q4 rental fleet'."),
    status: zod_1.default.enum(ResourceRevisionStatus).default(ResourceRevisionStatus.DRAFT).describe("Lifecycle status for this resource revision."),
    derivedFromRevisionId: zod_1.default.string().nullable().optional().describe("Source revision ID when this revision was derived from an existing revision."),
    publishedAt: zod_1.default.number().int().positive().nullable().optional().describe("Unix timestamp when this revision was published."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new resource definition.
 * Omits auto-generated fields.
 */
exports.CreateResourceDefinitionSchema = exports.ResourceDefinitionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing resource definition.
 * All fields optional except id.
 */
exports.UpdateResourceDefinitionSchema = exports.CreateResourceDefinitionSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the resource definition to update."),
});
/**
 * Schema for creating a new resource revision.
 * Omits auto-generated fields.
 */
exports.CreateResourceRevisionSchema = exports.ResourceRevisionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing resource revision.
 * All fields optional except id.
 */
exports.UpdateResourceRevisionSchema = exports.CreateResourceRevisionSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the resource revision to update."),
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
exports.DeriveResourceRevisionRequestSchema = zod_1.default.object({
    resourceId: zod_1.default.string().describe("Resource definition ID to derive a revision for."),
    sourceRevisionId: zod_1.default.string().nullable().optional().describe("Optional source revision ID used when strategy is COPY_CURRENT."),
    strategy: zod_1.default.enum(ResourceRevisionDeriveStrategy).default(ResourceRevisionDeriveStrategy.COPY_CURRENT).describe("Derivation strategy for the new revision."),
    label: zod_1.default.string().nullable().optional().describe("Optional label for the derived revision."),
});
/**
 * Result schema returned after deriving a resource revision.
 *
 * @typedef {Object} DeriveResourceRevisionResult
 * @property {string} resourceId - Resource definition ID
 * @property {string} resourceRevisionId - Created revision ID
 */
exports.DeriveResourceRevisionResultSchema = zod_1.default.object({
    resourceId: zod_1.default.string().describe("Resource definition ID that owns the derived revision."),
    resourceRevisionId: zod_1.default.string().describe("Newly created resource revision ID."),
});
/**
 * Resource revision context schema.
 * Identifies a resource definition and the revision currently in use.
 *
 * @typedef {Object} ResourceRevisionContext
 * @property {string} resourceId - Resource definition ID
 * @property {string} resourceRevisionId - Resource revision ID
 */
exports.ResourceRevisionContextSchema = zod_1.default.object({
    resourceId: zod_1.default.string().describe("Resource definition ID."),
    resourceRevisionId: zod_1.default.string().describe("Resource revision ID."),
});
