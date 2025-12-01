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
 * @property {string} accountId - User account ID of the service person
 * @property {string} [description] - Description of the service person
 * @property {string} serviceId - ID of the service this person provides
 */
export const ServicePersonSchema = BaseModelSchema.safeExtend({
    accountId: z.string().describe("User account ID linking this service provider to platform identity management for authentication, scheduling access, and availability management."),
    description: z.string().optional().describe("Professional bio displayed to customers during booking: qualifications, specializations, experience, languages spoken. Helps customers make informed provider selection."),
    serviceId: z.string().describe("References Business Service from service-config.schema that this person provides. Multiple persons can offer same service, enabling parallel scheduling and staff load distribution."),
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
