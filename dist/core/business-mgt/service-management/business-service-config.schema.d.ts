import z from "zod";
import { ServiceDepositStrategy } from "../bookings.shared.schema";
/**
 * @fileoverview Business Service Configuration schema definitions.
 * @module business-mgt/business-service-config
 *
 * Manages service offerings including pricing, scheduling, availability,
 * and booking rules for appointment-based businesses.
 */
/**
 * Service pricing mode options.
 * @enum {string}
 */
export declare enum ServicePriceMode {
    /** Fixed price for the service */
    FIXED = "FIXED",
    /** Starting price, final may vary */
    STARTS_AT = "STARTS_AT",
    /** Variable pricing based on factors */
    VARIABLE = "VARIABLE"
}
/**
 * Service gratuity mode options.
 * @enum {string}
 */
export declare enum ServiceGratuityMode {
    /** No gratuity accepted */
    NONE = "NONE",
    /** Gratuity is optional */
    OPTIONAL = "OPTIONAL",
    /** Gratuity is required */
    REQUIRED = "REQUIRED"
}
/**
 * Service availability mode options.
 * @enum {string}
 */
export declare enum ServiceAvailabilityMode {
    /** Service available 24/7 */
    ALWAYS = "ALWAYS",
    /** Service follows custom schedule */
    SCHEDULED = "SCHEDULED",
    /** Service inherits business hours */
    INHERIT = "INHERIT"
}
/**
 * Per-channel service category ID mapping.
 * @typedef {Object} ServiceCategoryChannelMapping
 * @property {string} channelId - Channel ID (e.g., yelp, google, mindbody)
 * @property {string} externalCategoryId - External category ID for this specific channel
 */
export declare const ServiceCategoryChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalCategoryId: z.ZodString;
}, z.core.$strip>;
/**
 * Per-channel external service ID mapping.
 * @typedef {Object} ServiceChannelMapping
 * @property {string} channelId - Channel ID (e.g., yelp, google, mindbody)
 * @property {string} externalServiceId - External service ID for this specific channel
 * @property {string|null} [externalCategoryId] - External category ID in this channel, if needed for sync payloads
 */
export declare const ServiceChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalServiceId: z.ZodString;
    externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Service duration segments schema.
 * Breaks down service time into distinct phases.
 * @typedef {Object} ServiceDurationSegments
 * @property {number} prep - Preparation time in minutes
 * @property {number} active - Hands-on active service time in minutes
 * @property {number} processing - Processing/wait time in minutes
 * @property {number} finish - Finishing time in minutes
 * @property {number} turnover - Turnover/reset time in minutes
 */
export declare const ServiceDurationSegmentsSchema: z.ZodObject<{
    prep: z.ZodDefault<z.ZodNumber>;
    active: z.ZodDefault<z.ZodNumber>;
    processing: z.ZodDefault<z.ZodNumber>;
    finish: z.ZodDefault<z.ZodNumber>;
    turnover: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Service date range schema.
 * Defines seasonal availability or blackout periods.
 * @typedef {Object} ServiceDateRange
 * @property {string} startDate - Start date in ISO format (YYYY-MM-DD)
 * @property {string} endDate - End date in ISO format (YYYY-MM-DD)
 * @property {boolean} isExclusion - If true, service is NOT available during this range
 */
export declare const ServiceDateRangeSchema: z.ZodObject<{
    startDate: z.ZodString;
    endDate: z.ZodString;
    isExclusion: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Service availability schema.
 * Configures when a service is available for booking.
 * @typedef {Object} ServiceAvailability
 * @property {ServiceAvailabilityMode} mode - Availability mode: ALWAYS (24/7), SCHEDULED (custom), INHERIT (from business hours)
 * @property {SimpleWeeklySchedule} [weeklySchedule] - Weekly availability schedule (required when mode is SCHEDULED)
 * @property {ServiceDateRange[]} [dateRanges] - Date ranges for seasonal availability or blackout periods
 */
export declare const ServiceAvailabilitySchema: z.ZodObject<{
    mode: z.ZodDefault<z.ZodEnum<typeof ServiceAvailabilityMode>>;
    weeklySchedule: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        isOpen: z.ZodBoolean;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, z.core.$strip>>>;
    dateRanges: z.ZodOptional<z.ZodArray<z.ZodObject<{
        startDate: z.ZodString;
        endDate: z.ZodString;
        isExclusion: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ServiceDateRange = z.infer<typeof ServiceDateRangeSchema>;
export type ServiceAvailability = z.infer<typeof ServiceAvailabilitySchema>;
/**
 * Service-level appointment field configuration (embedded).
 * Inherits from organization-level config and allows service-specific customization.
 * @typedef {Object} ServiceAppointmentFieldConfig
 * @property {string[]} inheritedFieldKeys - Field keys inherited from organization-level config
 * @property {FieldOverride[]} fieldOverrides - Service-specific field overrides
 * @property {FieldDefinition[]} additionalFields - Additional fields specific to this service
 * @property {boolean} isActive - Whether the field configuration is active
 * @property {boolean} reuseDetails - Whether to reuse customer details from previous bookings
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
            text: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
            textarea: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
            number: import("../../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
            boolean: import("../../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
            date: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATE;
            time: import("../../type-definitions/dynamic-fields").DynamicFieldType.TIME;
            datetime: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
            email: import("../../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
            phone: import("../../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
            select: import("../../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
            multiselect: import("../../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
 * Service Category schema.
 * Groups related services for organization and display.
 * @typedef {Object} ServiceCategory
 * @property {string} id - Unique identifier
 * @property {string} [serviceRevisionId] - Optional service revision ID for version-scoped data
 * @property {string} name - Category name (e.g., Hair Services, Spa Treatments)
 * @property {string|null} [description] - Category description
 * @property {string|null} [imageUrl] - Category image URL
 * @property {ServiceCategoryChannelMapping[]|null} [channelMappings] - Per-channel service category ID mappings
 * @property {number|null} [displayOrder] - Display order in listing
 * @property {boolean} isActive - Whether this category is active
 * @property {Date} createdAt - Creation timestamp
 * @property {Date} updatedAt - Last update timestamp
 */
export declare const ServiceCategorySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new service category.
 * Omits auto-generated fields.
 */
export declare const CreateServiceCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing service category.
 * All fields optional except id (required).
 */
export declare const UpdateServiceCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodURL>>>;
    serviceRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ServiceCategoryChannelMapping = z.infer<typeof ServiceCategoryChannelMappingSchema>;
export type ServiceChannelMapping = z.infer<typeof ServiceChannelMappingSchema>;
export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;
export type CreateServiceCategory = z.infer<typeof CreateServiceCategorySchema>;
export type UpdateServiceCategory = z.infer<typeof UpdateServiceCategorySchema>;
/**
 * Business Service Configuration schema.
 * Defines a service offering with pricing, scheduling, and booking rules.
 * @typedef {Object} BusinessService
 * @property {string} id - Unique identifier
 * @property {string} [serviceRevisionId] - Optional service revision ID for version-scoped data
 * @property {string} name - Name of the service offered
 * @property {string|null} [description] - Detailed description of the service
 * @property {string|null} [imageUrl] - Service image URL
 * @property {string|null} [categoryId] - Service category ID
 * @property {string|null} [bookingCode] - Short booking code for quick reference
 * @property {number} duration - Service duration in minutes (max 8 hours)
 * @property {ServiceDurationSegments|null} [durationSegments] - Segmented service duration breakdown
 * @property {number} bufferBefore - Buffer before appointment start in minutes
 * @property {number} bufferAfter - Buffer after appointment end in minutes
 * @property {boolean} isBookable - Whether this service can be booked online
 * @property {boolean|null} [allowsProcessingChairSwap] - Whether client can switch resources during processing segment
 * @property {ServiceAvailability|null} [serviceAvailability] - Service-specific availability schedule
 * @property {number|null} [maxConcurrentBookings] - Max simultaneous bookings for this service
 * @property {number} basePrice - Base service price in account currency
 * @property {ServicePriceMode|null} [priceMode] - Service pricing mode
 * @property {ServiceGratuityMode|null} [gratuityMode] - Gratuity policy for this service
 * @property {boolean} isActive - Whether the service is currently available
 * @property {number|null} [displayOrder] - Display order in service listings
 * @property {ServiceChannelMapping[]|null} [channelMappings] - Per-channel service ID mappings
 * @property {string|null} [primaryServiceUserAccountId] - User account primarily responsible for this service
 * @property {string[]} requiredResources - Required resource IDs for this service
 * @property {ServiceBookingRules|null} [bookingRules] - Service-specific booking constraints
 * @property {ServiceDepositStrategy|null} [depositStrategy] - Deposit strategy for this service
 * @property {number|null} [depositValue] - Deposit amount or percentage depending on strategy
 * @property {number} lateCancelFeePercent - Late cancellation fee percentage
 * @property {number} noShowFeePercent - No-show fee percentage
 * @property {ServiceAppointmentFieldConfig|null} [requiredDatafieldConfig] - Dynamic field configuration
 * @property {Date} createdAt - Creation timestamp
 * @property {Date} updatedAt - Last update timestamp
 */
export declare const BusinessServiceConfigSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bookingCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    duration: z.ZodDefault<z.ZodNumber>;
    durationSegments: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        prep: z.ZodDefault<z.ZodNumber>;
        active: z.ZodDefault<z.ZodNumber>;
        processing: z.ZodDefault<z.ZodNumber>;
        finish: z.ZodDefault<z.ZodNumber>;
        turnover: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    bufferBefore: z.ZodDefault<z.ZodNumber>;
    bufferAfter: z.ZodDefault<z.ZodNumber>;
    isBookable: z.ZodDefault<z.ZodBoolean>;
    allowsProcessingChairSwap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    serviceAvailability: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<typeof ServiceAvailabilityMode>>;
        weeklySchedule: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            isOpen: z.ZodBoolean;
            startTime: z.ZodString;
            endTime: z.ZodString;
        }, z.core.$strip>>>;
        dateRanges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            startDate: z.ZodString;
            endDate: z.ZodString;
            isExclusion: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    maxConcurrentBookings: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    basePrice: z.ZodDefault<z.ZodNumber>;
    priceMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServicePriceMode>>>;
    gratuityMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceGratuityMode>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalServiceId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    primaryServiceUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requiredResources: z.ZodDefault<z.ZodArray<z.ZodString>>;
    bookingRules: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        onlineEnabled: z.ZodDefault<z.ZodBoolean>;
        existingOnly: z.ZodDefault<z.ZodBoolean>;
        requiresConsult: z.ZodDefault<z.ZodBoolean>;
        maxDaysOut: z.ZodDefault<z.ZodNumber>;
        minNoticeHours: z.ZodDefault<z.ZodNumber>;
        lateCancelHours: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    depositStrategy: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>;
    depositValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lateCancelFeePercent: z.ZodDefault<z.ZodNumber>;
    noShowFeePercent: z.ZodDefault<z.ZodNumber>;
    requiredDatafieldConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
                text: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
                textarea: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
                number: import("../../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
                boolean: import("../../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
                date: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATE;
                time: import("../../type-definitions/dynamic-fields").DynamicFieldType.TIME;
                datetime: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
                email: import("../../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
                phone: import("../../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
                select: import("../../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
                multiselect: import("../../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
}, z.core.$strip>;
/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
export declare const CreateBusinessServiceSchema: z.ZodObject<{
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    duration: z.ZodDefault<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalServiceId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    bookingRules: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        onlineEnabled: z.ZodDefault<z.ZodBoolean>;
        existingOnly: z.ZodDefault<z.ZodBoolean>;
        requiresConsult: z.ZodDefault<z.ZodBoolean>;
        maxDaysOut: z.ZodDefault<z.ZodNumber>;
        minNoticeHours: z.ZodDefault<z.ZodNumber>;
        lateCancelHours: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    depositStrategy: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>;
    serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bookingCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    durationSegments: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        prep: z.ZodDefault<z.ZodNumber>;
        active: z.ZodDefault<z.ZodNumber>;
        processing: z.ZodDefault<z.ZodNumber>;
        finish: z.ZodDefault<z.ZodNumber>;
        turnover: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    bufferBefore: z.ZodDefault<z.ZodNumber>;
    bufferAfter: z.ZodDefault<z.ZodNumber>;
    isBookable: z.ZodDefault<z.ZodBoolean>;
    allowsProcessingChairSwap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    serviceAvailability: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<typeof ServiceAvailabilityMode>>;
        weeklySchedule: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            isOpen: z.ZodBoolean;
            startTime: z.ZodString;
            endTime: z.ZodString;
        }, z.core.$strip>>>;
        dateRanges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            startDate: z.ZodString;
            endDate: z.ZodString;
            isExclusion: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    maxConcurrentBookings: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    basePrice: z.ZodDefault<z.ZodNumber>;
    priceMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServicePriceMode>>>;
    gratuityMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceGratuityMode>>>;
    primaryServiceUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requiredResources: z.ZodDefault<z.ZodArray<z.ZodString>>;
    depositValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lateCancelFeePercent: z.ZodDefault<z.ZodNumber>;
    noShowFeePercent: z.ZodDefault<z.ZodNumber>;
    requiredDatafieldConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
                text: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
                textarea: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
                number: import("../../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
                boolean: import("../../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
                date: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATE;
                time: import("../../type-definitions/dynamic-fields").DynamicFieldType.TIME;
                datetime: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
                email: import("../../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
                phone: import("../../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
                select: import("../../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
                multiselect: import("../../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing business service.
 * All fields optional except id (required).
 */
export declare const UpdateBusinessServiceSchema: z.ZodObject<{
    categoryId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalServiceId: z.ZodString;
        externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodURL>>>;
    bookingRules: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        onlineEnabled: z.ZodDefault<z.ZodBoolean>;
        existingOnly: z.ZodDefault<z.ZodBoolean>;
        requiresConsult: z.ZodDefault<z.ZodBoolean>;
        maxDaysOut: z.ZodDefault<z.ZodNumber>;
        minNoticeHours: z.ZodDefault<z.ZodNumber>;
        lateCancelHours: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    depositStrategy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>>;
    serviceRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    bookingCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    durationSegments: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        prep: z.ZodDefault<z.ZodNumber>;
        active: z.ZodDefault<z.ZodNumber>;
        processing: z.ZodDefault<z.ZodNumber>;
        finish: z.ZodDefault<z.ZodNumber>;
        turnover: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    bufferBefore: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    bufferAfter: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    isBookable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    allowsProcessingChairSwap: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    serviceAvailability: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<typeof ServiceAvailabilityMode>>;
        weeklySchedule: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            isOpen: z.ZodBoolean;
            startTime: z.ZodString;
            endTime: z.ZodString;
        }, z.core.$strip>>>;
        dateRanges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            startDate: z.ZodString;
            endDate: z.ZodString;
            isExclusion: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>>;
    maxConcurrentBookings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    basePrice: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    priceMode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServicePriceMode>>>>;
    gratuityMode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceGratuityMode>>>>;
    primaryServiceUserAccountId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    requiredResources: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    depositValue: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    lateCancelFeePercent: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    noShowFeePercent: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    requiredDatafieldConfig: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
                text: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
                textarea: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
                number: import("../../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
                boolean: import("../../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
                date: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATE;
                time: import("../../type-definitions/dynamic-fields").DynamicFieldType.TIME;
                datetime: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
                email: import("../../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
                phone: import("../../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
                select: import("../../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
                multiselect: import("../../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
    }, z.core.$strip>>>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type BusinessService = z.infer<typeof BusinessServiceConfigSchema>;
export type CreateBusinessService = z.infer<typeof CreateBusinessServiceSchema>;
export type UpdateBusinessService = z.infer<typeof UpdateBusinessServiceSchema>;
export type ServiceDurationSegments = z.infer<typeof ServiceDurationSegmentsSchema>;
/**
 * Service catalog schema.
 * Represents a category with its associated services.
 * @typedef {Object} ServiceCatalog
 * @property {ServiceCategory} serviceCategory - The service category
 * @property {BusinessService[]} services - List of services in this category
 */
export declare const ServiceCatalogSchema: z.ZodObject<{
    serviceCategory: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>;
    services: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        bookingCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        duration: z.ZodDefault<z.ZodNumber>;
        durationSegments: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            prep: z.ZodDefault<z.ZodNumber>;
            active: z.ZodDefault<z.ZodNumber>;
            processing: z.ZodDefault<z.ZodNumber>;
            finish: z.ZodDefault<z.ZodNumber>;
            turnover: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        bufferBefore: z.ZodDefault<z.ZodNumber>;
        bufferAfter: z.ZodDefault<z.ZodNumber>;
        isBookable: z.ZodDefault<z.ZodBoolean>;
        allowsProcessingChairSwap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        serviceAvailability: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<typeof ServiceAvailabilityMode>>;
            weeklySchedule: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                isOpen: z.ZodBoolean;
                startTime: z.ZodString;
                endTime: z.ZodString;
            }, z.core.$strip>>>;
            dateRanges: z.ZodOptional<z.ZodArray<z.ZodObject<{
                startDate: z.ZodString;
                endDate: z.ZodString;
                isExclusion: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
        maxConcurrentBookings: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        basePrice: z.ZodDefault<z.ZodNumber>;
        priceMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServicePriceMode>>>;
        gratuityMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceGratuityMode>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalServiceId: z.ZodString;
            externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        primaryServiceUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requiredResources: z.ZodDefault<z.ZodArray<z.ZodString>>;
        bookingRules: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            onlineEnabled: z.ZodDefault<z.ZodBoolean>;
            existingOnly: z.ZodDefault<z.ZodBoolean>;
            requiresConsult: z.ZodDefault<z.ZodBoolean>;
            maxDaysOut: z.ZodDefault<z.ZodNumber>;
            minNoticeHours: z.ZodDefault<z.ZodNumber>;
            lateCancelHours: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        depositStrategy: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>;
        depositValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lateCancelFeePercent: z.ZodDefault<z.ZodNumber>;
        noShowFeePercent: z.ZodDefault<z.ZodNumber>;
        requiredDatafieldConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
                    text: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
                    textarea: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
                    number: import("../../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
                    boolean: import("../../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
                    date: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATE;
                    time: import("../../type-definitions/dynamic-fields").DynamicFieldType.TIME;
                    datetime: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
                    email: import("../../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
                    phone: import("../../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
                    select: import("../../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
                    multiselect: import("../../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Business service catalog schema.
 * Array of service categories with their services.
 * @typedef {ServiceCatalog[]} BusinessServiceCatalog
 */
export declare const BusinessServiceCatalogSchema: z.ZodArray<z.ZodObject<{
    serviceCategory: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalCategoryId: z.ZodString;
        }, z.core.$strip>>>>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>;
    services: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        serviceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        bookingCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        duration: z.ZodDefault<z.ZodNumber>;
        durationSegments: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            prep: z.ZodDefault<z.ZodNumber>;
            active: z.ZodDefault<z.ZodNumber>;
            processing: z.ZodDefault<z.ZodNumber>;
            finish: z.ZodDefault<z.ZodNumber>;
            turnover: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        bufferBefore: z.ZodDefault<z.ZodNumber>;
        bufferAfter: z.ZodDefault<z.ZodNumber>;
        isBookable: z.ZodDefault<z.ZodBoolean>;
        allowsProcessingChairSwap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        serviceAvailability: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<typeof ServiceAvailabilityMode>>;
            weeklySchedule: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                isOpen: z.ZodBoolean;
                startTime: z.ZodString;
                endTime: z.ZodString;
            }, z.core.$strip>>>;
            dateRanges: z.ZodOptional<z.ZodArray<z.ZodObject<{
                startDate: z.ZodString;
                endDate: z.ZodString;
                isExclusion: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
        maxConcurrentBookings: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        basePrice: z.ZodDefault<z.ZodNumber>;
        priceMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServicePriceMode>>>;
        gratuityMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceGratuityMode>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalServiceId: z.ZodString;
            externalCategoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        primaryServiceUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requiredResources: z.ZodDefault<z.ZodArray<z.ZodString>>;
        bookingRules: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            onlineEnabled: z.ZodDefault<z.ZodBoolean>;
            existingOnly: z.ZodDefault<z.ZodBoolean>;
            requiresConsult: z.ZodDefault<z.ZodBoolean>;
            maxDaysOut: z.ZodDefault<z.ZodNumber>;
            minNoticeHours: z.ZodDefault<z.ZodNumber>;
            lateCancelHours: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        depositStrategy: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>;
        depositValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lateCancelFeePercent: z.ZodDefault<z.ZodNumber>;
        noShowFeePercent: z.ZodDefault<z.ZodNumber>;
        requiredDatafieldConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
                    text: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXT;
                    textarea: import("../../type-definitions/dynamic-fields").DynamicFieldType.TEXTAREA;
                    number: import("../../type-definitions/dynamic-fields").DynamicFieldType.NUMBER;
                    boolean: import("../../type-definitions/dynamic-fields").DynamicFieldType.BOOLEAN;
                    date: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATE;
                    time: import("../../type-definitions/dynamic-fields").DynamicFieldType.TIME;
                    datetime: import("../../type-definitions/dynamic-fields").DynamicFieldType.DATETIME;
                    email: import("../../type-definitions/dynamic-fields").DynamicFieldType.EMAIL;
                    phone: import("../../type-definitions/dynamic-fields").DynamicFieldType.PHONE;
                    select: import("../../type-definitions/dynamic-fields").DynamicFieldType.SELECT;
                    multiselect: import("../../type-definitions/dynamic-fields").DynamicFieldType.MULTISELECT;
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
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type ServiceCatalog = z.infer<typeof ServiceCatalogSchema>;
export type BusinessServiceCatalog = z.infer<typeof BusinessServiceCatalogSchema>;
/**
 * Business service filter options.
 * @interface BusinessServiceFilters
 */
export interface BusinessServiceFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by category ID */
    categoryId?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by bookable status */
    isBookable?: boolean;
    /** Filter by price range */
    priceRange?: {
        min?: number;
        max?: number;
    };
    /** Include soft-deleted records */
    includeDeleted?: boolean;
}
/**
 * Business service sorting options.
 * @interface BusinessServiceSorting
 */
export interface BusinessServiceSorting {
    /** Field to sort by */
    field: 'name' | 'price' | 'duration' | 'createdAt' | 'displayOrder';
    /** Sort direction */
    direction: 'asc' | 'desc';
}
/**
 * Business service query options.
 * @interface BusinessServiceQueryOptions
 */
export interface BusinessServiceQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: BusinessServiceFilters;
    /** Optional sorting */
    sorting?: BusinessServiceSorting;
}
