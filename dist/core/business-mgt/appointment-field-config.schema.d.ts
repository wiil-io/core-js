import { z } from "zod";
/**
 * @fileoverview Organization-level appointment field configuration schema.
 * @module business-mgt/appointment-field-config
 *
 * This schema represents the **Organization Level** in the dynamic fields hierarchy:
 *
 * ```
 * Organization Level (AppointmentFieldConfigSchema) ← THIS SCHEMA
 *         │
 *         ▼ inherits via appointmentFieldConfigId
 * Service Level (ServiceAppointmentFieldConfigSchema)
 *         │
 *         ▼ stores values
 * Appointment Level (AppointmentAdditionalInfoSchema)
 * ```
 *
 * Defines the base field library that can be reused across multiple services
 * within an organization. Services can inherit fields from this configuration
 * and optionally override specific properties or add service-specific fields.
 *
 * @see ServiceAppointmentFieldConfigSchema - Service-level field customization
 * @see AppointmentAdditionalInfoSchema - Stores captured field values
 */
/**
 * Organization-level appointment field configuration.
 * Defines the base field library available to all services within an organization.
 * Services reference this configuration via `appointmentFieldConfigId` and can
 * selectively inherit, override, or extend the defined fields.
 */
export declare const AppointmentFieldConfigSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    fields: z.ZodDefault<z.ZodArray<z.ZodObject<{
        fieldKey: z.ZodString;
        fieldType: z.ZodEnum<{
            text: import("../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
            textarea: import("../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
            number: import("../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
            boolean: import("../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
            date: import("../type-definitions/dynamic-fields").DynamicFieldType.DATE;
            time: import("../type-definitions/dynamic-fields").DynamicFieldType.TIME;
            datetime: import("../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
            email: import("../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
            phone: import("../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
            select: import("../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
            multiselect: import("../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
    }, z.core.$strip>>>;
    groups: z.ZodDefault<z.ZodArray<z.ZodObject<{
        groupKey: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        collapsible: z.ZodOptional<z.ZodBoolean>;
        defaultCollapsed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    reuseDetails: z.ZodDefault<z.ZodBoolean>;
    ensureEmail: z.ZodDefault<z.ZodBoolean>;
    ensurePhone: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AppointmentFieldConfig = z.infer<typeof AppointmentFieldConfigSchema>;
export declare const CreateAppointmentFieldConfigSchema: z.ZodObject<{
    id: z.ZodString;
    reuseDetails: z.ZodDefault<z.ZodBoolean>;
    fields: z.ZodDefault<z.ZodArray<z.ZodObject<{
        fieldKey: z.ZodString;
        fieldType: z.ZodEnum<{
            text: import("../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
            textarea: import("../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
            number: import("../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
            boolean: import("../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
            date: import("../type-definitions/dynamic-fields").DynamicFieldType.DATE;
            time: import("../type-definitions/dynamic-fields").DynamicFieldType.TIME;
            datetime: import("../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
            email: import("../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
            phone: import("../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
            select: import("../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
            multiselect: import("../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
    }, z.core.$strip>>>;
    groups: z.ZodDefault<z.ZodArray<z.ZodObject<{
        groupKey: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        collapsible: z.ZodOptional<z.ZodBoolean>;
        defaultCollapsed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    ensureEmail: z.ZodDefault<z.ZodBoolean>;
    ensurePhone: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateAppointmentFieldConfig = z.infer<typeof CreateAppointmentFieldConfigSchema>;
export declare const UpdateAppointmentFieldConfigSchema: z.ZodObject<{
    reuseDetails: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    fields: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        fieldKey: z.ZodString;
        fieldType: z.ZodEnum<{
            text: import("../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
            textarea: import("../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
            number: import("../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
            boolean: import("../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
            date: import("../type-definitions/dynamic-fields").DynamicFieldType.DATE;
            time: import("../type-definitions/dynamic-fields").DynamicFieldType.TIME;
            datetime: import("../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
            email: import("../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
            phone: import("../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
            select: import("../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
            multiselect: import("../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
    }, z.core.$strip>>>>;
    groups: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        groupKey: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        collapsible: z.ZodOptional<z.ZodBoolean>;
        defaultCollapsed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>>;
    ensureEmail: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    ensurePhone: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
export type UpdateAppointmentFieldConfig = z.infer<typeof UpdateAppointmentFieldConfigSchema>;
