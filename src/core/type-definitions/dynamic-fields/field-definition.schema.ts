import { z } from "zod";
import { DynamicFieldTypes } from "./field-types";

/**
 * Schema for select/multiselect field options
 */
export const FieldOptionSchema = z.object({
    value: z.string(),
    label: z.string(),
    displayOrder: z.number().int().optional(),
});

export type FieldOption = z.infer<typeof FieldOptionSchema>;

/**
 * Validation rules schema for dynamic fields
 */
export const FieldValidationRulesSchema = z.object({
    required: z.boolean().optional(),
    minLength: z.number().int().positive().optional(),
    maxLength: z.number().int().positive().optional(),
    min: z.number().optional(),
    max: z.number().optional(),
    pattern: z.string().optional(),
    patternMessage: z.string().optional(),
});

export type FieldValidationRules = z.infer<typeof FieldValidationRulesSchema>;

/**
 * UI hints schema for field rendering
 */
export const FieldUIHintsSchema = z.object({
    placeholder: z.string().optional(),
    helpText: z.string().optional(),
    displayOrder: z.number().int().optional(),
    width: z.enum(["full", "half", "third"]).optional(),
});

export type FieldUIHints = z.infer<typeof FieldUIHintsSchema>;

/**
 * Condition operators for conditional field visibility
 */
export const FieldConditionOperators = [
    "equals",
    "notEquals",
    "contains",
    "isEmpty",
    "isNotEmpty",
    "greaterThan",
    "lessThan",
] as const;

/**
 * Schema for conditional field visibility
 * Show field X only if field Y meets a condition
 */
export const FieldConditionSchema = z.object({
    dependsOn: z.string(),
    operator: z.enum(FieldConditionOperators),
    value: z.any().optional(),
});

export type FieldCondition = z.infer<typeof FieldConditionSchema>;

/**
 * Schema for field grouping/sections
 * Organize fields into logical groups (e.g., "Contact Info", "Preferences")
 */
export const FieldGroupSchema = z.object({
    groupKey: z.string(),
    label: z.string(),
    description: z.string().optional(),
    displayOrder: z.number().int().optional(),
    collapsible: z.boolean().optional(),
    defaultCollapsed: z.boolean().optional(),
});

export type FieldGroup = z.infer<typeof FieldGroupSchema>;

/**
 * Core field definition schema
 * Defines a single dynamic field with its type, validation, and UI configuration
 */
export const FieldDefinitionSchema = z.object({
    fieldKey: z.string()
        .regex(/^[a-z][a-z0-9_]*$/, "Field key must be lowercase alphanumeric with underscores, starting with a letter"),
    fieldType: z.enum(DynamicFieldTypes),
    label: z.string().min(1),
    description: z.string().optional(),
    validation: FieldValidationRulesSchema.optional(),
    uiHints: FieldUIHintsSchema.optional(),
    options: z.array(FieldOptionSchema).optional(),
    defaultValue: z.any().optional(),
    isActive: z.boolean().optional(),
    condition: FieldConditionSchema.optional(),
    groupKey: z.string().optional(),
});

export type FieldDefinition = z.infer<typeof FieldDefinitionSchema>;

/**
 * Field override schema for service-level customization
 * Allows overriding specific properties of inherited fields
 */
export const FieldOverrideSchema = z.object({
    fieldKey: z.string(),
    label: z.string().optional(),
    validation: FieldValidationRulesSchema.partial().optional(),
    uiHints: FieldUIHintsSchema.partial().optional(),
    defaultValue: z.any().optional(),
    isActive: z.boolean().optional(),
});

export type FieldOverride = z.infer<typeof FieldOverrideSchema>;
