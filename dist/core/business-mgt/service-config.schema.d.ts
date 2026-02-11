import z from "zod";
/**
 * @fileoverview Business service configuration schema definitions.
 * @module business-mgt/business-service-config
 */
/**
 * Service-level appointment field configuration (embedded in BusinessServiceConfigSchema).
 *
 * This schema represents the **Service Level** in the dynamic fields hierarchy:
 *
 * ```
 * Organization Level (AppointmentFieldConfigSchema)
 *         │
 *         ▼ inherits via appointmentFieldConfigId
 * Service Level (ServiceAppointmentFieldConfigSchema) ← THIS SCHEMA
 *         │
 *         ▼ stores values
 * Appointment Level (AppointmentAdditionalInfoSchema)
 * ```
 *
 * Allows services to:
 * - Inherit specific fields from the organization-level configuration
 * - Override properties of inherited fields (e.g., make a field required)
 * - Add service-specific fields not in the organization config
 *
 * @see AppointmentFieldConfigSchema - Organization-level field definitions
 * @see AppointmentAdditionalInfoSchema - Stores captured field values
 */
export declare const ServiceAppointmentFieldConfigSchema: z.ZodObject<{
    inheritedFieldKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
    fieldOverrides: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
    additionalFields: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    isActive: z.ZodDefault<z.ZodBoolean>;
    reuseDetails: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type ServiceAppointmentFieldConfig = z.infer<typeof ServiceAppointmentFieldConfigSchema>;
/**
 * Business service configuration schema.
 *
 * @typedef {Object} BusinessServiceConfig
 * @property {string} id - Unique identifier for the service
 * @property {string} name - Name of the service offered
 * @property {string} [description] - Detailed description of the service
 * @property {number} duration - Service duration in minutes (max 8 hours)
 * @property {number} bufferTime - Buffer time between appointments in minutes
 * @property {boolean} isBookable - Whether this service can be booked online
 * @property {number} [price] - Service price in account currency
 * @property {boolean} isActive - Whether the service is currently available

 */
export declare const BusinessServiceConfigSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    duration: z.ZodDefault<z.ZodNumber>;
    bufferTime: z.ZodDefault<z.ZodNumber>;
    isBookable: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    requiredDatafieldConfig: z.ZodOptional<z.ZodObject<{
        inheritedFieldKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
        fieldOverrides: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
        additionalFields: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        isActive: z.ZodDefault<z.ZodBoolean>;
        reuseDetails: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Service QR code schema for appointment booking.
 *
 * @typedef {Object} ServiceQRCode
 * @property {string} id - Unique identifier for the QR code
 * @property {string} appointmentUrl - Direct link to the appointment page
 * @property {string} [qrCodeImage] - Base64 encoded QR code image
 * @property {string} [serviceId] - Specific service ID for direct appointment
 */
export declare const ServiceQRCodeSchema: z.ZodObject<{
    id: z.ZodString;
    appointmentUrl: z.ZodString;
    qrCodeImage: z.ZodOptional<z.ZodString>;
    serviceId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
export declare const CreateBusinessServiceSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    duration: z.ZodDefault<z.ZodNumber>;
    bufferTime: z.ZodDefault<z.ZodNumber>;
    isBookable: z.ZodDefault<z.ZodBoolean>;
    requiredDatafieldConfig: z.ZodOptional<z.ZodObject<{
        inheritedFieldKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
        fieldOverrides: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
        additionalFields: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        isActive: z.ZodDefault<z.ZodBoolean>;
        reuseDetails: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing business service.
 * All fields are optional except id.
 */
export declare const UpdateBusinessServiceSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    price: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    bufferTime: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    isBookable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    requiredDatafieldConfig: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        inheritedFieldKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
        fieldOverrides: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
        additionalFields: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        isActive: z.ZodDefault<z.ZodBoolean>;
        reuseDetails: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type BusinessService = z.infer<typeof BusinessServiceConfigSchema>;
export type ServiceQRCode = z.infer<typeof ServiceQRCodeSchema>;
export type CreateBusinessService = z.infer<typeof CreateBusinessServiceSchema>;
export type UpdateBusinessService = z.infer<typeof UpdateBusinessServiceSchema>;
