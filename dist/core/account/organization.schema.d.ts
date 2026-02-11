import { z } from 'zod';
import { ServiceStatus, ServiceSuspensionType } from '../type-definitions';
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
export declare const OrganizationServiceStatusRecordSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    status: z.ZodEnum<typeof ServiceStatus>;
    previousStatus: z.ZodNullable<z.ZodEnum<typeof ServiceStatus>>;
    suspensionType: z.ZodNullable<z.ZodEnum<typeof ServiceSuspensionType>>;
    timestamp: z.ZodNumber;
    reason: z.ZodString;
    changedBy: z.ZodString;
    isCurrent: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const OrganizationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    companyName: z.ZodString;
    businessVerticalId: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        healthcare: "healthcare";
        "health-wellness": "health-wellness";
        retail: "retail";
        finance: "finance";
        "real-estate": "real-estate";
        technology: "technology";
        education: "education";
        legal: "legal";
        automotive: "automotive";
        hospitality: "hospitality";
        professional: "professional";
        others: "others";
    }>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    serviceStatus: z.ZodDefault<z.ZodEnum<typeof ServiceStatus>>;
    lastServiceStatusChanged: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    serviceStatusHistory: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        status: z.ZodEnum<typeof ServiceStatus>;
        previousStatus: z.ZodNullable<z.ZodEnum<typeof ServiceStatus>>;
        suspensionType: z.ZodNullable<z.ZodEnum<typeof ServiceSuspensionType>>;
        timestamp: z.ZodNumber;
        reason: z.ZodString;
        changedBy: z.ZodString;
        isCurrent: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>>;
    platformEmail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Organization = z.infer<typeof OrganizationSchema>;
