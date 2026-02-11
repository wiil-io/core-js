import { z } from 'zod';
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
export declare const ServicePersonSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    accountId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    serviceId: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new service person.
 * Omits auto-generated fields.
 */
export declare const CreateServicePersonSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    serviceId: z.ZodString;
    accountId: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing service person.
 * All fields are optional except id.
 */
export declare const UpdateServicePersonSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    serviceId: z.ZodOptional<z.ZodString>;
    accountId: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
export type ServicePerson = z.infer<typeof ServicePersonSchema>;
export type CreateServicePerson = z.infer<typeof CreateServicePersonSchema>;
export type UpdateServicePerson = z.infer<typeof UpdateServicePersonSchema>;
