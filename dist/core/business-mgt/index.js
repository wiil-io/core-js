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
__exportStar(require("./customer.schema"), exports);
__exportStar(require("./menu-config.schema"), exports);
__exportStar(require("./menu.order.schema"), exports);
__exportStar(require("./order.schema"), exports);
__exportStar(require("./product-config.schema"), exports);
__exportStar(require("./product-order.schema"), exports);
__exportStar(require("./reservation.schema"), exports);
__exportStar(require("./reservation-resource.schema"), exports);
__exportStar(require("./service-appointment.schema"), exports);
__exportStar(require("./service-config.schema"), exports);
__exportStar(require("./service-person.schema"), exports);
