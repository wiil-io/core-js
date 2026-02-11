"use strict";
/**
 * @fileoverview Account-related type definitions and enumerations.
 * @module account/definitions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessSupportServices = exports.ServiceSuspensionType = exports.ServiceStatus = void 0;
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
var ServiceStatus;
(function (ServiceStatus) {
    /** Service is operational and available */
    ServiceStatus["ACTIVE"] = "active";
    /** Service is not currently in use but can be reactivated */
    ServiceStatus["INACTIVE"] = "inactive";
    /** Service is temporarily suspended and requires intervention to resume */
    ServiceStatus["SUSPENDED"] = "suspended";
})(ServiceStatus || (exports.ServiceStatus = ServiceStatus = {}));
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
var ServiceSuspensionType;
(function (ServiceSuspensionType) {
    /** Service was manually suspended by an administrator or user */
    ServiceSuspensionType["MANUAL"] = "manual";
    /** Service was automatically suspended by the system */
    ServiceSuspensionType["AUTOMATIC"] = "automatic";
    /** Service was suspended due to subscription quota limits being exceeded */
    ServiceSuspensionType["SUBSCRIPTION_QUOTA_EXCEEDED"] = "subscription_quota_exceeded";
    /** Service was suspended due to usage quota limits being exceeded */
    ServiceSuspensionType["QUOTA_EXCEEDED"] = "quota_exceeded";
    /** Service was suspended due to failed payment transaction */
    ServiceSuspensionType["PAYMENT_FAILED"] = "payment_failed";
})(ServiceSuspensionType || (exports.ServiceSuspensionType = ServiceSuspensionType = {}));
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
var BusinessSupportServices;
(function (BusinessSupportServices) {
    /** Appointment scheduling and management functionality */
    BusinessSupportServices["APPOINTMENT_MANAGEMENT"] = "appointment_management";
    /** Inventory tracking and stock management functionality */
    BusinessSupportServices["INVENTORY_MANAGEMENT"] = "inventory_management";
    /** Restaurant menu and food order management functionality */
    BusinessSupportServices["MENU_ORDER_MANAGEMENT"] = "menu_order_management";
    /** E-commerce product order management functionality */
    BusinessSupportServices["PRODUCT_ORDER_MANAGEMENT"] = "product_order_management";
    /** Table and venue reservation management functionality */
    BusinessSupportServices["RESERVATION_MANAGEMENT"] = "reservation_management";
    /** No business support services enabled */
    BusinessSupportServices["NONE"] = "none";
})(BusinessSupportServices || (exports.BusinessSupportServices = BusinessSupportServices = {}));
