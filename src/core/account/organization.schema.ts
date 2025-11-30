import { z } from 'zod';
import { ServiceStatus, ServiceSuspensionType } from '../type-definitions';
import { BaseModelSchema } from '../base.schema';

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
 * @property {string} organizationId - ID of the organization this status record belongs to
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
 *   organizationId: '456*',
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
    organizationId: z.string(),
    status: z.enum(ServiceStatus),
    previousStatus: z.enum(ServiceStatus).nullable(),
    suspensionType: z.enum(ServiceSuspensionType).nullable(),
    timestamp: z.number(),
    reason: z.string(),
    changedBy: z.string(),
    isCurrent: z.boolean().default(true),
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
 * @property {string | null} [businessVerticalId] - Business industry vertical classification ID
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
 *   businessVerticalId: 'tech-saas',
 *   serviceStatus: ServiceStatus.ACTIVE,
 *   platformEmail: 'admin@acme.com',
 *   metadata: { industry: 'technology' },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const OrganizationSchema = BaseModelSchema.safeExtend({
    companyName: z.string().min(2),
    primaryRegionId: z.string().min(3),
    businessVerticalId: z.string().nullable().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    serviceStatus: z.enum(ServiceStatus).default(ServiceStatus.ACTIVE),
    lastServiceStatusChanged: z.number().nullable().optional(),
    serviceStatusHistory: z.array(OrganizationServiceStatusRecordSchema).nullable().optional(),
    platformEmail: z.string().nullable().optional(),
});


export type Organization = z.infer<typeof OrganizationSchema>;