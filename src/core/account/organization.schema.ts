import { z } from 'zod';
import { ServiceStatus, ServiceSuspensionType } from '../type-definitions';
import { BaseModelSchema } from '../base.schema';
import { SUPPORTED_BUSINESS_VERTICALS } from './supported-business-verticals';

/**
 * @fileoverview Organization schema definitions for account management.
 * @module account/organization
 */

/**
 * Zod schema for organization service status history records.
 *
 * Tracks all status changes for an organization over time, providing
 * an audit trail of service state transitions.
 *
 * @typedef {Object} OrganizationServiceStatusRecordProperties
 * @property {string} id - Unique identifier for the status record
 * @property {ServiceStatus} status - Current status at the time of this record
 * @property {ServiceStatus | null} previousStatus - Previous status before this change
 * @property {ServiceSuspensionType | null} suspensionType - Type of suspension if status is SUSPENDED
 * @property {number} timestamp - Unix timestamp when the status change occurred
 * @property {string} reason - Explanation for the status change
 * @property {string} changedBy - User ID who initiated the status change
 * @property {boolean} isCurrent - Whether this is the current active status record (default: true)
 * @property {number} [createdAt] - Timestamp when the record was created
 * @property {number} [updatedAt] - Timestamp when the record was last updated
 *
 * @example
 * ```typescript
 * const statusRecord: OrganizationServiceStatusRecord = {
 *   id: '123*',
 *   status: ServiceStatus.SUSPENDED,
 *   previousStatus: ServiceStatus.ACTIVE,
 *   suspensionType: ServiceSuspensionType.QUOTA_EXCEEDED,
 *   timestamp: Date.now(),
 *   reason: 'Monthly usage quota exceeded',
 *   changedBy: 'system',
 *   isCurrent: true,
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const OrganizationServiceStatusRecordSchema = BaseModelSchema.safeExtend({
    status: z.enum(ServiceStatus).describe("Current status at the time of this record"),
    previousStatus: z.enum(ServiceStatus).nullable().describe("Previous status before this change"),
    suspensionType: z.enum(ServiceSuspensionType).nullable().describe("Type of suspension if status is SUSPENDED"),
    timestamp: z.number().describe("Unix timestamp when the status change occurred"),
    reason: z.string().describe("Explanation for the status change"),
    changedBy: z.string().describe("User ID who initiated the status change"),
    isCurrent: z.boolean().default(true).describe("Whether this is the current active status record"),
});


export type OrganizationServiceStatusRecord = z.infer<typeof OrganizationServiceStatusRecordSchema>;

/**
 * Zod schema for organization entity.
 *
 * Represents a complete organization (company/business account) within the platform,
 * including service status tracking and configuration.
 *
 * @typedef {Object} OrganizationProperties
 * @property {string} id - Unique identifier for the organization
 * @property {string} companyName - Organization's company name (minimum 2 characters)
 * @property {string} primaryRegionId - Primary geographic region ID for the organization (minimum 3 characters)
 * @property {SupportedBusinessVerticalId | null} [businessVerticalId] - Business industry vertical classification ID
 * @property {Record<string, any>} [metadata] - Additional custom metadata for the organization
 * @property {ServiceStatus} serviceStatus - Current service status (default: ACTIVE)
 * @property {number | null} [lastServiceStatusChanged] - Timestamp of last service status change
 * @property {OrganizationServiceStatusRecord[] | null} [serviceStatusHistory] - Complete history of service status changes
 * @property {string | null} [platformEmail] - Organization's platform contact email
 * @property {number} [createdAt] - Timestamp when the organization was created
 * @property {number} [updatedAt] - Timestamp when the organization was last updated
 *
 * @example
 * ```typescript
 * const organization: Organization = {
 *   id: '123*',
 *   companyName: 'Acme Corporation',
 *   primaryRegionId: 'us-west',
 *   businessVerticalId: 'technology',
 *   serviceStatus: ServiceStatus.ACTIVE,
 *   platformEmail: 'admin@acme.com',
 *   metadata: { industry: 'technology' },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const OrganizationSchema = BaseModelSchema.safeExtend({
    companyName: z.string().min(2).describe("Organization's company name (minimum 2 characters)"),
    businessVerticalId: z.enum(SUPPORTED_BUSINESS_VERTICALS).nullable().optional().describe("Business industry vertical classification ID (healthcare, retail, technology, etc.)"),
    metadata: z.record(z.string(), z.any()).optional().describe("Additional custom metadata for the organization"),
    serviceStatus: z.enum(ServiceStatus).default(ServiceStatus.ACTIVE).describe("Current service status of the organization"),
    lastServiceStatusChanged: z.number().nullable().optional().describe("Timestamp of last service status change"),
    serviceStatusHistory: z.array(OrganizationServiceStatusRecordSchema).nullable().optional().describe("Complete history of service status changes"),
    platformEmail: z.string().nullable().optional().describe("Organization's platform contact email"),
});


export type Organization = z.infer<typeof OrganizationSchema>;