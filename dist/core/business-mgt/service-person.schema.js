"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServicePersonSchema = exports.CreateServicePersonSchema = exports.ServicePersonSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
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
exports.ServicePersonSchema = base_schema_1.BaseModelSchema.safeExtend({
    accountId: zod_1.z.string().describe("User account ID linking this service provider to platform identity management for authentication, scheduling access, and availability management."),
    description: zod_1.z.string().optional().describe("Professional bio displayed to customers during booking: qualifications, specializations, experience, languages spoken. Helps customers make informed provider selection."),
    serviceId: zod_1.z.string().describe("References Business Service from service-config.schema that this person provides. Multiple persons can offer same service, enabling parallel scheduling and staff load distribution."),
});
/**
 * Schema for creating a new service person.
 * Omits auto-generated fields.
 */
exports.CreateServicePersonSchema = exports.ServicePersonSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing service person.
 * All fields are optional except id.
 */
exports.UpdateServicePersonSchema = exports.CreateServicePersonSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
