import { z } from "zod";
/**
 * Schema for select/multiselect field options
 */
export declare const FieldOptionSchema: z.ZodObject<{
    value: z.ZodString;
    label: z.ZodString;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type FieldOption = z.infer<typeof FieldOptionSchema>;
/**
 * Validation rules schema for dynamic fields
 */
export declare const FieldValidationRulesSchema: z.ZodObject<{
    required: z.ZodOptional<z.ZodBoolean>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    pattern: z.ZodOptional<z.ZodString>;
    patternMessage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type FieldValidationRules = z.infer<typeof FieldValidationRulesSchema>;
/**
 * UI hints schema for field rendering
 */
export declare const FieldUIHintsSchema: z.ZodObject<{
    placeholder: z.ZodOptional<z.ZodString>;
    helpText: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodEnum<{
        full: "full";
        half: "half";
        third: "third";
    }>>;
}, z.core.$strip>;
export type FieldUIHints = z.infer<typeof FieldUIHintsSchema>;
/**
 * Condition operators for conditional field visibility
 */
export declare const FieldConditionOperators: readonly ["equals", "notEquals", "contains", "isEmpty", "isNotEmpty", "greaterThan", "lessThan"];
/**
 * Schema for conditional field visibility
 * Show field X only if field Y meets a condition
 */
export declare const FieldConditionSchema: z.ZodObject<{
    dependsOn: z.ZodString;
    operator: z.ZodEnum<{
        equals: "equals";
        notEquals: "notEquals";
        contains: "contains";
        isEmpty: "isEmpty";
        isNotEmpty: "isNotEmpty";
        greaterThan: "greaterThan";
        lessThan: "lessThan";
    }>;
    value: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type FieldCondition = z.infer<typeof FieldConditionSchema>;
/**
 * Schema for field grouping/sections
 * Organize fields into logical groups (e.g., "Contact Info", "Preferences")
 */
export declare const FieldGroupSchema: z.ZodObject<{
    groupKey: z.ZodString;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    collapsible: z.ZodOptional<z.ZodBoolean>;
    defaultCollapsed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type FieldGroup = z.infer<typeof FieldGroupSchema>;
/**
 * Core field definition schema
 * Defines a single dynamic field with its type, validation, and UI configuration
 */
export declare const FieldDefinitionSchema: z.ZodObject<{
    fieldKey: z.ZodString;
    fieldType: z.ZodEnum<{
        text: import("./field-types").DynamicFieldType.TEXT;
        textarea: import("./field-types").DynamicFieldType.TEXTAREA;
        number: import("./field-types").DynamicFieldType.NUMBER;
        boolean: import("./field-types").DynamicFieldType.BOOLEAN;
        date: import("./field-types").DynamicFieldType.DATE;
        time: import("./field-types").DynamicFieldType.TIME;
        datetime: import("./field-types").DynamicFieldType.DATETIME;
        email: import("./field-types").DynamicFieldType.EMAIL;
        phone: import("./field-types").DynamicFieldType.PHONE;
        select: import("./field-types").DynamicFieldType.SELECT;
        multiselect: import("./field-types").DynamicFieldType.MULTISELECT;
    }>;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    validation: z.ZodOptional<z.ZodObject<{
        required: z.ZodOptional<z.ZodBoolean>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        pattern: z.ZodOptional<z.ZodString>;
        patternMessage: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    uiHints: z.ZodOptional<z.ZodObject<{
        placeholder: z.ZodOptional<z.ZodString>;
        helpText: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodEnum<{
            full: "full";
            half: "half";
            third: "third";
        }>>;
    }, z.core.$strip>>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
        displayOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    defaultValue: z.ZodOptional<z.ZodAny>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    condition: z.ZodOptional<z.ZodObject<{
        dependsOn: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
            notEquals: "notEquals";
            contains: "contains";
            isEmpty: "isEmpty";
            isNotEmpty: "isNotEmpty";
            greaterThan: "greaterThan";
            lessThan: "lessThan";
        }>;
        value: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    groupKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type FieldDefinition = z.infer<typeof FieldDefinitionSchema>;
/**
 * Field override schema for service-level customization
 * Allows overriding specific properties of inherited fields
 */
export declare const FieldOverrideSchema: z.ZodObject<{
    fieldKey: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    validation: z.ZodOptional<z.ZodObject<{
        required: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        minLength: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        maxLength: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        min: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        max: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        pattern: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        patternMessage: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>;
    uiHints: z.ZodOptional<z.ZodObject<{
        placeholder: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        helpText: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        width: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            full: "full";
            half: "half";
            third: "third";
        }>>>;
    }, z.core.$strip>>;
    defaultValue: z.ZodOptional<z.ZodAny>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type FieldOverride = z.infer<typeof FieldOverrideSchema>;
