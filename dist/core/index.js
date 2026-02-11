"use strict";
/**
 * @fileoverview Central export point for all core schemas and utilities.
 * @module core
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
// Base schemas
__exportStar(require("./base.schema"), exports);
// Module exports
__exportStar(require("./account"), exports);
__exportStar(require("./assistant-setups"), exports);
__exportStar(require("./business-mgt"), exports);
__exportStar(require("./conversation"), exports);
__exportStar(require("./service-configuration"), exports);
__exportStar(require("./type-definitions"), exports);
__exportStar(require("./validators"), exports);
