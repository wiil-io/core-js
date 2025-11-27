import { z } from 'zod';
import { BaseModelSchema } from '../base.schema';

/**
 * @fileoverview Service person schema definitions for managing service providers.
 * @module business-mgt/service-person
 */

/**
 * Service person schema - Complete service person record.
 *
 * @typedef {Object} ServicePerson
 * @property {string} organizationId - Business account ID
 * @property {string} accountId - User account ID of the service person
 * @property {string} [description] - Description of the service person
 * @property {string} serviceId - ID of the service this person provides
 */
export const ServicePersonSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    accountId: z.string(),
    description: z.string().optional(),
    serviceId: z.string(),
});

/**
 * Schema for creating a new service person.
 * Omits auto-generated fields.
 */
export const CreateServicePersonSchema = ServicePersonSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing service person.
 * All fields are optional except id.
 */
export const UpdateServicePersonSchema = CreateServicePersonSchema.partial().safeExtend({
    id: z.string(),
});

// Type exports
export type ServicePerson = z.infer<typeof ServicePersonSchema>;
export type CreateServicePerson = z.infer<typeof CreateServicePersonSchema>;
export type UpdateServicePerson = z.infer<typeof UpdateServicePersonSchema>;
