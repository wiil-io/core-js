"use strict";
/**
 * Dynamic Field Types
 *
 * Defines the supported field types for dynamic form field definitions.
 * Used across appointment and other configurable form schemas.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicFieldTypeToAgentToolParam = exports.DynamicFieldTypes = exports.DynamicFieldType = void 0;
var DynamicFieldType;
(function (DynamicFieldType) {
    /** Single-line text input */
    DynamicFieldType["TEXT"] = "text";
    /** Multi-line text input */
    DynamicFieldType["TEXTAREA"] = "textarea";
    /** Numeric input */
    DynamicFieldType["NUMBER"] = "number";
    /** Boolean checkbox/toggle */
    DynamicFieldType["BOOLEAN"] = "boolean";
    /** Date picker (date only) */
    DynamicFieldType["DATE"] = "date";
    /** Time picker (time only) */
    DynamicFieldType["TIME"] = "time";
    /** DateTime picker (date and time) */
    DynamicFieldType["DATETIME"] = "datetime";
    /** Email input with validation */
    DynamicFieldType["EMAIL"] = "email";
    /** Phone number input */
    DynamicFieldType["PHONE"] = "phone";
    /** Single selection dropdown */
    DynamicFieldType["SELECT"] = "select";
    /** Multiple selection input */
    DynamicFieldType["MULTISELECT"] = "multiselect";
})(DynamicFieldType || (exports.DynamicFieldType = DynamicFieldType = {}));
/** Array of all dynamic field types for Zod enum usage */
exports.DynamicFieldTypes = [
    DynamicFieldType.TEXT,
    DynamicFieldType.TEXTAREA,
    DynamicFieldType.NUMBER,
    DynamicFieldType.BOOLEAN,
    DynamicFieldType.DATE,
    DynamicFieldType.TIME,
    DynamicFieldType.DATETIME,
    DynamicFieldType.EMAIL,
    DynamicFieldType.PHONE,
    DynamicFieldType.SELECT,
    DynamicFieldType.MULTISELECT,
];
/**
 * Maps DynamicFieldType to agent tool call parameter types
 * Used to generate tool call schemas for LLM agents
 */
exports.DynamicFieldTypeToAgentToolParam = {
    [DynamicFieldType.TEXT]: {
        type: 'string',
        description: 'Single-line text value',
    },
    [DynamicFieldType.TEXTAREA]: {
        type: 'string',
        description: 'Multi-line text value',
    },
    [DynamicFieldType.NUMBER]: {
        type: 'number',
        description: 'Numeric value',
    },
    [DynamicFieldType.BOOLEAN]: {
        type: 'boolean',
        description: 'True or false value',
    },
    [DynamicFieldType.DATE]: {
        type: 'string',
        format: 'date',
        description: 'Date in ISO 8601 format (YYYY-MM-DD)',
    },
    [DynamicFieldType.TIME]: {
        type: 'string',
        format: 'time',
        description: 'Time in 24-hour format (HH:MM)',
    },
    [DynamicFieldType.DATETIME]: {
        type: 'string',
        format: 'date-time',
        description: 'Date and time in ISO 8601 format (YYYY-MM-DDTHH:MM:SS)',
    },
    [DynamicFieldType.EMAIL]: {
        type: 'string',
        format: 'email',
        description: 'Valid email address',
    },
    [DynamicFieldType.PHONE]: {
        type: 'string',
        format: 'phone',
        description: 'Phone number with country code',
    },
    [DynamicFieldType.SELECT]: {
        type: 'string',
        description: 'Single selection from available options',
    },
    [DynamicFieldType.MULTISELECT]: {
        type: 'array',
        items: { type: 'string' },
        description: 'Multiple selections from available options',
    },
};
