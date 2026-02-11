import { z } from 'zod';
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
export declare const ProjectSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    regionId: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    compliance: z.ZodOptional<z.ZodArray<z.ZodString>>;
    currentSubscriptionId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isDefault: z.ZodBoolean;
    serviceStatus: z.ZodDefault<z.ZodEnum<typeof ServiceStatus>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
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
export declare const CreateProjectSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    serviceStatus: z.ZodDefault<z.ZodEnum<typeof ServiceStatus>>;
    name: z.ZodString;
    regionId: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    compliance: z.ZodOptional<z.ZodArray<z.ZodString>>;
    currentSubscriptionId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
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
export declare const UpdateProjectSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    serviceStatus: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ServiceStatus>>>;
    name: z.ZodOptional<z.ZodString>;
    regionId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    compliance: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    currentSubscriptionId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
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
