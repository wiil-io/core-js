import z from "zod";
import { BaseModelSchema } from "../base.schema";

/**
 * @fileoverview Business service configuration schema definitions.
 * @module business-mgt/business-service-config
 */

/**
 * Business service configuration schema.
 *
 * @typedef {Object} BusinessServiceConfig
 * @property {string} id - Unique identifier for the service
 * @property {string} name - Name of the service offered
 * @property {string} [description] - Detailed description of the service
 * @property {number} duration - Service duration in minutes (max 8 hours)
 * @property {number} bufferTime - Buffer time between appointments in minutes
 * @property {boolean} isBookable - Whether this service can be booked online
 * @property {number} [price] - Service price in account currency
 * @property {boolean} isActive - Whether the service is currently available
 * @property {number} [displayOrder] - Display order in service listings
 */
export const BusinessServiceConfigSchema = BaseModelSchema.safeExtend({
    id: z.string(),
    name: z.string().min(1, "Service name is required"),
    description: z.string().optional(),

    // Scheduling & Duration
    duration: z.number().int().positive().max(480).default(60),
    bufferTime: z.number().int().nonnegative().default(0),
    isBookable: z.boolean().default(true),

    // Pricing
    price: z.number().nonnegative().default(0).optional(),

    // Business Management
    isActive: z.boolean().default(true),
    displayOrder: z.number().int().optional(),
});

/**
 * Service QR code schema for appointment booking.
 *
 * @typedef {Object} ServiceQRCode
 * @property {string} id - Unique identifier for the QR code
 * @property {string} appointmentUrl - Direct link to the appointment page
 * @property {string} [qrCodeImage] - Base64 encoded QR code image
 * @property {string} [serviceId] - Specific service ID for direct appointment
 */
export const ServiceQRCodeSchema = z.object({
    id: z.string(),
    appointmentUrl: z.string().url(),
    qrCodeImage: z.string().optional(),
    serviceId: z.string().optional(),
});

/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
export const CreateBusinessServiceSchema = BusinessServiceConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing business service.
 * All fields are optional except id.
 */
export const UpdateBusinessServiceSchema = CreateBusinessServiceSchema.partial().safeExtend({
    id: z.string(),
});

export type BusinessService = z.infer<typeof BusinessServiceConfigSchema>;
export type ServiceQRCode = z.infer<typeof ServiceQRCodeSchema>;
export type CreateBusinessService = z.infer<typeof CreateBusinessServiceSchema>;
export type UpdateBusinessService = z.infer<typeof UpdateBusinessServiceSchema>;
