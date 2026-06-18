"use strict";
/**
 * @fileoverview Central export point for business management schemas.
 * @module business-mgt
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================================
// SHARED SCHEMAS
// ============================================================================
__exportStar(require("./bookings.shared.schema"), exports);
__exportStar(require("./business-location.schema"), exports);
__exportStar(require("./discount-rule.schema"), exports);
__exportStar(require("./order.schema"), exports);
__exportStar(require("./pricing-rule.shared.schema"), exports);
__exportStar(require("./tax-rule.schema"), exports);
// ============================================================================
// DOMAIN MODULES
// ============================================================================
__exportStar(require("./customer-management"), exports);
__exportStar(require("./menu-management"), exports);
__exportStar(require("./product-management"), exports);
__exportStar(require("./property-management"), exports);
__exportStar(require("./reservation-mgt"), exports);
__exportStar(require("./service-management"), exports);
