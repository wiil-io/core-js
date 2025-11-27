/**
 * @fileoverview Account-related type definitions and enumerations.
 * @module account/definitions
 */

/**
 * Service status enumeration for organizations and projects.
 *
 * Defines the operational state of a service within the platform.
 *
 * @enum {string}
 * @readonly
 *
 * @example
 * ```typescript
 * const orgStatus: ServiceStatus = ServiceStatus.ACTIVE;
 * ```
 */
export enum ServiceStatus {
  /** Service is operational and available */
  ACTIVE = 'active',
  /** Service is not currently in use but can be reactivated */
  INACTIVE = 'inactive',
  /** Service is temporarily suspended and requires intervention to resume */
  SUSPENDED = 'suspended'
}

/**
 * Service suspension type enumeration.
 *
 * Indicates the reason or trigger for a service suspension.
 *
 * @enum {string}
 * @readonly
 *
 * @example
 * ```typescript
 * const suspensionReason: ServiceSuspensionType = ServiceSuspensionType.QUOTA_EXCEEDED;
 * ```
 */
export enum ServiceSuspensionType {
  /** Service was manually suspended by an administrator or user */
  MANUAL = 'manual',
  /** Service was automatically suspended by the system */
  AUTOMATIC = 'automatic',
  /** Service was suspended due to subscription quota limits being exceeded */
  SUBSCRIPTION_QUOTA_EXCEEDED = 'subscription_quota_exceeded',
  /** Service was suspended due to usage quota limits being exceeded */
  QUOTA_EXCEEDED = 'quota_exceeded',
  /** Service was suspended due to failed payment transaction */
  PAYMENT_FAILED = 'payment_failed'
}

/**
 * Business support services enumeration.
 *
 * Defines the types of business support services available in the platform
 * for organizations to enable specific industry-focused features.
 *
 * @enum {string}
 * @readonly
 *
 * @example
 * ```typescript
 * const enabledServices: BusinessSupportServices[] = [
 *   BusinessSupportServices.APPOINTMENT_MANAGEMENT,
 *   BusinessSupportServices.INVENTORY_MANAGEMENT
 * ];
 * ```
 */
export enum BusinessSupportServices {
    /** Appointment scheduling and management functionality */
    APPOINTMENT_MANAGEMENT = 'appointment_management',
    /** Inventory tracking and stock management functionality */
    INVENTORY_MANAGEMENT = 'inventory_management',
    /** Restaurant menu and food order management functionality */
    MENU_ORDER_MANAGEMENT = 'menu_order_management',
    /** E-commerce product order management functionality */
    PRODUCT_ORDER_MANAGEMENT = 'product_order_management',
    /** Table and venue reservation management functionality */
    RESERVATION_MANAGEMENT = 'reservation_management',
    /** No business support services enabled */
    NONE = 'none',
}