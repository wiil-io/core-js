"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCodeSchema = exports.AddressSchema = exports.BaseModelSchema = void 0;
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
/**
 * Language code schema (ISO 639-1 format)
 */
exports.LanguageCodeSchema = zod_1.z.string().min(2).max(5).describe("ISO 639-1/639-2 language code with optional region (e.g., 'en', 'es', 'zh-CN')"); // e.g., "en", "es", "zh-CN"
