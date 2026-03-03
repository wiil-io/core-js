"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePropertyInquiryStatusSchema = exports.UpdatePropertyInquirySchema = exports.CreatePropertyInquirySchema = exports.PropertyInquirySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
const customer_schema_1 = require("./customer.schema");
/**
 * @fileoverview Property inquiry schema definitions for real estate lead management.
 * @module business-mgt/property-inquiry
 */
/**
 * Property inquiry schema for tracking customer interest in properties.
 *
 * @typedef {Object} PropertyInquiry
 * @property {string} organizationId - Business account ID
 * @property {string} propertyId - ID of the property being inquired about
 * @property {string} [customerId] - ID of existing contact in system
 * @property {Object} customer - Contact details of the inquirer
 * @property {PropertyInquiryType} inquiryType - Type of inquiry
 * @property {string} [message] - Inquiry message from the contact
 * @property {string} source - Source of the inquiry
 * @property {PropertyInquiryStatus} status - Current status of the inquiry
 * @property {number} [preferredViewingDate] - Contact's preferred viewing date
 * @property {string} [preferredViewingTime] - Contact's preferred viewing time
 * @property {number} [scheduledViewingDate] - Scheduled viewing date
 * @property {boolean} viewingCompleted - Whether the viewing has been completed
 * @property {string} [viewingNotes] - Notes from the viewing
 * @property {number} [followUpDate] - Next follow-up date
 * @property {string} [followUpNotes] - Notes for follow-up
 * @property {string} [assignedAgentId] - ID of the assigned agent
 * @property {boolean} convertedToTransaction - Whether inquiry converted to a transaction
 * @property {string} [transactionId] - ID of the resulting transaction
 * @property {string} [transactionType] - Type of transaction (purchase or lease)
 * @property {boolean} interestedInBuying - Whether contact is interested in buying
 * @property {boolean} interestedInRenting - Whether contact is interested in renting
 * @property {number} [budgetMin] - Minimum budget
 * @property {number} [budgetMax] - Maximum budget
 * @property {string} [notes] - Internal notes about the inquiry
 */
exports.PropertyInquirySchema = base_schema_1.BaseModelSchema.safeExtend({
    organizationId: zod_1.default.string().describe("Business account ID"),
    propertyId: zod_1.default.string().describe("ID of the property being inquired about"),
    // Contact Information
    customerId: zod_1.default.string().nullable().optional().describe("ID of existing contact in system"),
    customer: customer_schema_1.CustomerSchema.describe("Contact details of the inquirer"),
    // Inquiry Details
    inquiryType: zod_1.default.enum(type_definitions_1.PropertyInquiryType).describe("Type of inquiry"),
    message: zod_1.default.string().nullable().optional().describe("Inquiry message from the contact"),
    source: zod_1.default.string().default('direct').describe("Source of the inquiry (website, referral, agent, etc.)"),
    // Status
    status: zod_1.default.enum(type_definitions_1.PropertyInquiryStatus).default(type_definitions_1.PropertyInquiryStatus.NEW).describe("Current status of the inquiry"),
    // Scheduling
    preferredViewingDate: zod_1.default.number().nullable().optional().describe("Contact's preferred viewing date (timestamp)"),
    preferredViewingTime: zod_1.default.string().nullable().optional().describe("Contact's preferred viewing time"),
    scheduledViewingDate: zod_1.default.number().nullable().optional().describe("Scheduled viewing date (timestamp)"),
    viewingCompleted: zod_1.default.boolean().default(false).describe("Whether the viewing has been completed"),
    viewingNotes: zod_1.default.string().nullable().optional().describe("Notes from the viewing"),
    // Follow-up
    followUpDate: zod_1.default.number().nullable().optional().describe("Next follow-up date (timestamp)"),
    followUpNotes: zod_1.default.string().nullable().optional().describe("Notes for follow-up"),
    assignedAgentId: zod_1.default.string().nullable().optional().describe("ID of the assigned agent"),
    // Conversion Tracking
    convertedToTransaction: zod_1.default.boolean().default(false).describe("Whether inquiry converted to a transaction"),
    transactionId: zod_1.default.string().nullable().optional().describe("ID of the resulting transaction"),
    transactionType: zod_1.default.enum(['purchase', 'lease']).nullable().optional().describe("Type of transaction (purchase or lease)"),
    // Interest Details
    interestedInBuying: zod_1.default.boolean().default(false).describe("Whether contact is interested in buying"),
    interestedInRenting: zod_1.default.boolean().default(false).describe("Whether contact is interested in renting"),
    budgetMin: zod_1.default.number().nonnegative().nullable().optional().describe("Minimum budget"),
    budgetMax: zod_1.default.number().nonnegative().nullable().optional().describe("Maximum budget"),
    // Notes
    notes: zod_1.default.string().nullable().optional().describe("Internal notes about the inquiry"),
    // Calendar Integration
    assignedUserAccountId: zod_1.default.string().nullable().optional().describe("User account managing the appointment"),
    calendarId: zod_1.default.string().nullable().optional().describe("Calendar ID where appointment is stored"),
    calendarEventId: zod_1.default.string().nullable().optional().describe("External calendar event ID"),
    calendarProvider: zod_1.default.enum(type_definitions_1.CalendarProvider).nullable().optional().describe("Calendar provider type"),
    cancelReason: zod_1.default.string().nullable().optional().describe("Reason for cancellation, if applicable"),
    serviceConversationConfigId: zod_1.default.string().nullable().optional().describe("Configuration ID for service conversation"),
});
/**
 * Schema for creating a new property inquiry.
 * Omits auto-generated fields.
 */
exports.CreatePropertyInquirySchema = exports.PropertyInquirySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing property inquiry.
 * All fields are optional except id.
 */
exports.UpdatePropertyInquirySchema = exports.CreatePropertyInquirySchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Quick status update schema for property inquiries.
 * Allows updating status and viewing/follow-up details without full update.
 */
exports.UpdatePropertyInquiryStatusSchema = zod_1.default.object({
    id: zod_1.default.string().describe("Inquiry ID"),
    status: zod_1.default.enum(type_definitions_1.PropertyInquiryStatus).describe("New status"),
    scheduledViewingDate: zod_1.default.number().nullable().optional().describe("Scheduled viewing date"),
    viewingCompleted: zod_1.default.boolean().optional().describe("Whether viewing is completed"),
    viewingNotes: zod_1.default.string().nullable().optional().describe("Viewing notes"),
    followUpDate: zod_1.default.number().nullable().optional().describe("Follow-up date"),
    followUpNotes: zod_1.default.string().nullable().optional().describe("Follow-up notes"),
});
