"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModelSchemaWithAudit = exports.LanguageCodeSchema = exports.PhoneNumberSchema = exports.phoneRegex = exports.AddressSchema = exports.BaseModelSchema = void 0;
const zod_1 = require("zod");
// import { TimezoneStringSchema } from './platform-regional-config';
/**
 * Zod schema for BaseModel with audit fields
 */
exports.BaseModelSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Unique identifier for the model"),
    createdAt: zod_1.z.number().optional().describe("Date when the model was created"),
    updatedAt: zod_1.z.number().optional().describe("Date when the model was last updated")
});
/**
 * Zod schema for address validation.
 */
exports.AddressSchema = zod_1.z.object({
    street: zod_1.z.string().min(2, { message: "Street must be 2 or more characters long" }).describe("Primary street address including house/building number"),
    street2: zod_1.z.string().optional().describe("Secondary address line for apartment, suite, or unit numbers"),
    city: zod_1.z.string().min(2, { message: "City must be 2 or more characters long" }).describe("City or municipality name"),
    state: zod_1.z.string().min(2, { message: "State must be 2 or more characters long" }).describe("State, province, or region code"),
    postalCode: zod_1.z.string().min(2, { message: "Postal code must be 2 or more characters long" }).describe("ZIP code, postal code, or equivalent"),
    country: zod_1.z.string().min(2, { message: "Country must be 3 or more characters long" }).describe("ISO country code or country name"),
});
exports.phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(\d{1,3}\)[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
/**
 * Reusable phone number schema with international format support.
 * Accepts formats: +1-234-567-8900, (123) 456-7890, 123.456.7890, etc.
 */
exports.PhoneNumberSchema = zod_1.z.string()
    .regex(exports.phoneRegex, { message: "Invalid phone number format" })
    .describe("Phone number in international or local format");
/**
 * Language code schema (ISO 639-1 format)
 */
exports.LanguageCodeSchema = zod_1.z.string().min(2).max(5).describe("ISO 639-1/639-2 language code with optional region (e.g., 'en', 'es', 'zh-CN')"); // e.g., "en", "es", "zh-CN"
/**
 * Extended base model schema with audit trail fields.
 *
 * Provides additional tracking for record creation, modification, and deletion
 * with user attribution and optimistic locking support. Use this schema for
 * entities requiring full audit compliance.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseModelSchema with audit and versioning fields
 * - **Use Cases**: Outbound communications, transactional records, compliance-sensitive data
 * - **Soft Delete**: Uses deletedAt/deletedBy for recoverable deletion
 * - **Optimistic Locking**: Version field prevents concurrent modification conflicts
 */
exports.BaseModelSchemaWithAudit = exports.BaseModelSchema.extend({
    createdBy: zod_1.z.string().optional().describe("User ID or system identifier who created this record, used for audit trails and accountability tracking"),
    updatedBy: zod_1.z.string().optional().describe("User ID or system identifier who last modified this record, updated on every change for change attribution"),
    deletedAt: zod_1.z.number().optional().describe("Unix timestamp in milliseconds when the record was soft-deleted, null if active (supports data recovery and retention policies)"),
    deletedBy: zod_1.z.string().optional().describe("User ID or system identifier who deleted this record, used for deletion audit trails and compliance reporting"),
    uniqueKey: zod_1.z.string().optional().describe("Business-defined unique key for idempotency and deduplication, prevents duplicate record creation from retry operations"),
    version: zod_1.z.number().optional().describe("Optimistic locking version number, incremented on each update to detect and prevent concurrent modification conflicts"),
});
