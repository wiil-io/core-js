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

 */
export const BusinessServiceConfigSchema = BaseModelSchema.safeExtend({
    id: z.string().describe("Unique identifier for this business service in the catalog managed by Appointment Management."),
    name: z.string().min(1, "Service name is required").describe("Display name of the service offered (e.g., 'Haircut', 'Massage', 'Consultation'). Used by AI Powered Services when presenting booking options to customers."),
    description: z.string().describe("Detailed description of the service including what's included, benefits, or special instructions. Helps customers understand the service before booking via Service Appointment workflow."),

    // Scheduling & Duration
    duration: z.number().int().positive().max(480).default(60).describe("Service duration in minutes with maximum of 480 minutes (8 hours). Used by AI Powered Services to calculate appointment end times and availability slots. Defaults to 60 minutes."),
    bufferTime: z.number().int().nonnegative().default(0).describe("Buffer time in minutes between consecutive appointments for cleanup, preparation, or transition. Ensures adequate spacing in Service Person schedules. Defaults to 0."),
    isBookable: z.boolean().default(true).describe("Whether this service can be booked online through AI Powered Services conversations. Services marked false require manual booking or are for internal use only. Defaults to true."),

    // Pricing
    price: z.number().nonnegative().default(0).optional().describe("Service price in the account's currency. Used for Service Appointment pricing and customer quotes during AI conversations. Defaults to 0 for complimentary services."),
    // Business Management
    isActive: z.boolean().default(true).describe("Whether the service is currently active and available for booking. Inactive services are hidden from customers and AI Powered Services. Defaults to true."),

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
    id: z.string().describe("Unique identifier for this QR code instance."),
    appointmentUrl: z.string().url().describe("URL to the appointment booking interface accessed by scanning this QR code. Links to service selection and scheduling flow powered by AI Powered Services."),
    qrCodeImage: z.string().optional().describe("Base64 encoded QR code image for printing or digital display (posters, flyers, websites). Generated from appointmentUrl."),
    serviceId: z.string().optional().describe("Optional specific Business Service ID for direct appointment booking. When provided, QR code bypasses service selection and goes directly to scheduling for this service."),
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
