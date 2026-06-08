/**
 * @fileoverview Central export point for business management schemas.
 * @module business-mgt
 */

// ============================================================================
// SHARED SCHEMAS
// ============================================================================

export * from './bookings.shared.schema';
export * from './discount-rule.schema';
export * from './order.schema';
export * from './pricing-rule.shared.schema';
export * from './tax-rule.schema';

// ============================================================================
// DOMAIN MODULES
// ============================================================================

export * from './customer-management';
export * from './menu-management';
export * from './product-management';
export * from './property-management';
export * from './reservation-mgt';
export * from './service-management';
