import { z } from 'zod';
import { BaseModelSchema } from '../base.schema';
import { ServiceStatus } from '../type-definitions';

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
 * @property {string} [regionId] - Geographic region ID for this project (optional, can inherit from organization)
 * @property {string} [description] - Optional description of the project's purpose
 * @property {string[]} [compliance] - Optional array of compliance standards this project adheres to
 * @property {boolean} [hasQuota=false] - Whether quota limits are enforced for this project
 * @property {boolean} [hasRate=false] - Whether rate limits are enforced for this project
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
 *   hasQuota: true,
 *   hasRate: true,
 *   isDefault: true,
 *   serviceStatus: ServiceStatus.ACTIVE,
 *   currentSubscriptionId: '789*',
 *   metadata: { environment: 'production' },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const ProjectSchema = BaseModelSchema.safeExtend({
    name: z.string().min(2).describe("Project name (minimum 2 characters)"),
    regionId: z.string().optional().describe("Geographic region ID for this project (optional, can inherit from organization)"),
    description: z.string().optional().describe("Optional description of the project's purpose"),
    compliance: z.string().array().optional().describe("Array of compliance standards this project adheres to (e.g., SOC2, HIPAA)"),
    hasQuota: z.boolean().optional().default(false).describe("Whether quota limits are enforced for this project"),
    hasRate: z.boolean().optional().default(false).describe("Whether rate limits are enforced for this project"),
    currentSubscriptionId: z.string().optional().nullable().describe("ID of the current subscription plan for this project"),
    isDefault: z.boolean().describe("Whether this is the default project for the organization (system-managed flag, set automatically on creation)"),
    serviceStatus: z.enum(ServiceStatus).default(ServiceStatus.ACTIVE).describe("Current service status of the project"),
    metadata: z.record(z.string(), z.any()).optional().describe("Additional custom metadata for the project"),
});

/**
 * Zod schema for creating a new project.
 *
 * Omits auto-generated fields (id, timestamps) that are populated by the system.
 * The isDefault field is included and can be set during creation for system operations.
 *
 * @remarks
 * Use this schema when creating new projects within an organization.
 * The isDefault flag should typically be set by system operations to designate
 * the default project for an organization.
 *
 * @example
 * ```typescript
 * const newProject: CreateProject = {
 *   name: 'Development Environment',
 *   regionId: 'us-east-1',
 *   description: 'Development and testing project',
 *   compliance: ['SOC2'],
 *   hasQuota: true,
 *   hasRate: false,
 *   isDefault: false,
 *   serviceStatus: ServiceStatus.ACTIVE,
 *   metadata: { environment: 'development' }
 * };
 * ```
 */
export const CreateProjectSchema = ProjectSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
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
export const UpdateProjectSchema = CreateProjectSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Type definition for a complete project entity.
 */
export type Project = z.infer<typeof ProjectSchema>;

/**
 * Type definition for creating a new project.
 */
export type CreateProject = z.infer<typeof CreateProjectSchema>;

/**
 * Type definition for updating an existing project.
 */
export type UpdateProject = z.infer<typeof UpdateProjectSchema>;
