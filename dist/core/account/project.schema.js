"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectSchema = exports.CreateProjectSchema = exports.ProjectSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
/**
 * @fileoverview Project schema definitions for account management.
 * @module account/project
 */
/**
 * Zod schema for project entity.
 *
 * Represents a project within an organization. Projects are used to organize
 * resources, deployments, and configurations within an organizational context.
 *
 * @typedef {Object} ProjectProperties
 * @property {string} id - Unique identifier for the project
 * @property {string} name - Project name (minimum 2 characters)
 * @property {string | undefined} [regionId] - Geographic region ID for this project (optional, can inherit from organization)
 * @property {string} [description] - Optional description of the project's purpose
 * @property {string[]} [compliance] - Optional array of compliance standards this project adheres to
 * @property {string | null} [currentSubscriptionId] - ID of the current subscription plan for this project
 * @property {boolean} isDefault - Whether this is the default project for the organization
 * @property {ServiceStatus} serviceStatus - Current service status (default: ACTIVE)
 * @property {Record<string, any>} [metadata] - Additional custom metadata for the project
 * @property {number} [createdAt] - Timestamp when the project was created
 * @property {number} [updatedAt] - Timestamp when the project was last updated
 *
 * @example
 * ```typescript
 * const project: Project = {
 *   id: '123*',
 *   name: 'Production Environment',
 *   regionId: 'us-west-2',
 *   description: 'Main production deployment project',
 *   compliance: ['SOC2', 'HIPAA'],
 *   isDefault: true,
 *   serviceStatus: ServiceStatus.ACTIVE,
 *   currentSubscriptionId: '789*',
 *   metadata: { environment: 'production' },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
exports.ProjectSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.z.string().min(2).describe("Project name (minimum 2 characters)"),
    regionId: zod_1.z.string().optional().describe("Geographic region ID for this project (optional, can inherit from organization)"),
    description: zod_1.z.string().optional().describe("Optional description of the project's purpose"),
    compliance: zod_1.z.string().array().optional().describe("Array of compliance standards this project adheres to (e.g., SOC2, HIPAA)"),
    currentSubscriptionId: zod_1.z.string().optional().nullable().describe("ID of the current subscription plan for this project"),
    isDefault: zod_1.z.boolean().describe("Whether this is the default project for the organization (system-managed flag, set automatically on creation)"),
    serviceStatus: zod_1.z.enum(type_definitions_1.ServiceStatus).default(type_definitions_1.ServiceStatus.ACTIVE).describe("Current service status of the project"),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().describe("Additional custom metadata for the project"),
});
/**
 * Zod schema for creating a new project.
 *
 * Omits auto-generated fields (id, timestamps) and system-managed fields (isDefault)
 * that are populated by the system.
 *
 * @remarks
 * Use this schema when creating new projects within an organization.
 * All required fields must be provided.
 *
 * @example
 * ```typescript
 * const newProject: CreateProject = {
 *   name: 'Development Environment',
 *   regionId: 'us-east-1',
 *   description: 'Development and testing project',
 *   compliance: ['SOC2'],
 *   serviceStatus: ServiceStatus.ACTIVE,
 *   metadata: { environment: 'development' }
 * };
 * ```
 */
exports.CreateProjectSchema = exports.ProjectSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    isDefault: true,
});
/**
 * Zod schema for updating an existing project.
 *
 * All fields are optional (partial) except id, which is required to identify the project.
 *
 * @remarks
 * Supports partial updates - only include the fields you want to modify.
 *
 * @example
 * ```typescript
 * const updateProject: UpdateProject = {
 *   id: '123*',
 *   name: 'Production Environment v2',
 *   description: 'Updated production deployment',
 *   hasRate: true
 * };
 * ```
 */
exports.UpdateProjectSchema = exports.CreateProjectSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
