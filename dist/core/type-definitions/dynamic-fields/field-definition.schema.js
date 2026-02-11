"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldOverrideSchema = exports.FieldDefinitionSchema = exports.FieldGroupSchema = exports.FieldConditionSchema = exports.FieldConditionOperators = exports.FieldUIHintsSchema = exports.FieldValidationRulesSchema = exports.FieldOptionSchema = void 0;
const zod_1 = require("zod");
const field_types_1 = require("./field-types");
/**
 * Schema for select/multiselect field options
 */
exports.FieldOptionSchema = zod_1.z.object({
    value: zod_1.z.string(),
    label: zod_1.z.string(),
    displayOrder: zod_1.z.number().int().optional(),
});
/**
 * Validation rules schema for dynamic fields
 */
exports.FieldValidationRulesSchema = zod_1.z.object({
    required: zod_1.z.boolean().optional(),
    minLength: zod_1.z.number().int().positive().optional(),
    maxLength: zod_1.z.number().int().positive().optional(),
    min: zod_1.z.number().optional(),
    max: zod_1.z.number().optional(),
    pattern: zod_1.z.string().optional(),
    patternMessage: zod_1.z.string().optional(),
});
/**
 * UI hints schema for field rendering
 */
exports.FieldUIHintsSchema = zod_1.z.object({
    placeholder: zod_1.z.string().optional(),
    helpText: zod_1.z.string().optional(),
    displayOrder: zod_1.z.number().int().optional(),
    width: zod_1.z.enum(["full", "half", "third"]).optional(),
});
/**
 * Condition operators for conditional field visibility
 */
exports.FieldConditionOperators = [
    "equals",
    "notEquals",
    "contains",
    "isEmpty",
    "isNotEmpty",
    "greaterThan",
    "lessThan",
];
/**
 * Schema for conditional field visibility
 * Show field X only if field Y meets a condition
 */
exports.FieldConditionSchema = zod_1.z.object({
    dependsOn: zod_1.z.string(),
    operator: zod_1.z.enum(exports.FieldConditionOperators),
    value: zod_1.z.any().optional(),
});
/**
 * Schema for field grouping/sections
 * Organize fields into logical groups (e.g., "Contact Info", "Preferences")
 */
exports.FieldGroupSchema = zod_1.z.object({
    groupKey: zod_1.z.string(),
    label: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    displayOrder: zod_1.z.number().int().optional(),
    collapsible: zod_1.z.boolean().optional(),
    defaultCollapsed: zod_1.z.boolean().optional(),
});
/**
 * Core field definition schema
 * Defines a single dynamic field with its type, validation, and UI configuration
 */
exports.FieldDefinitionSchema = zod_1.z.object({
    fieldKey: zod_1.z.string()
        .regex(/^[a-z][a-z0-9_]*$/, "Field key must be lowercase alphanumeric with underscores, starting with a letter"),
    fieldType: zod_1.z.enum(field_types_1.DynamicFieldTypes),
    label: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    validation: exports.FieldValidationRulesSchema.optional(),
    uiHints: exports.FieldUIHintsSchema.optional(),
    options: zod_1.z.array(exports.FieldOptionSchema).optional(),
    defaultValue: zod_1.z.any().optional(),
    isActive: zod_1.z.boolean().optional(),
    condition: exports.FieldConditionSchema.optional(),
    groupKey: zod_1.z.string().optional(),
});
/**
 * Field override schema for service-level customization
 * Allows overriding specific properties of inherited fields
 */
exports.FieldOverrideSchema = zod_1.z.object({
    fieldKey: zod_1.z.string(),
    label: zod_1.z.string().optional(),
    validation: exports.FieldValidationRulesSchema.partial().optional(),
    uiHints: exports.FieldUIHintsSchema.partial().optional(),
    defaultValue: zod_1.z.any().optional(),
    isActive: zod_1.z.boolean().optional(),
});
