import z from "zod";
import { AppointmentStatus, CalendarProvider } from "../../type-definitions";
/**
 * @fileoverview Service Appointment schema definitions.
 * @module business-mgt/service-appointment
 *
 * Service appointments represent scheduled bookings for services.
 * Supports calendar integration, pricing breakdowns, and multi-channel bookings.
 */
/**
 * Service Appointment schema.
 * Represents a scheduled appointment for a service.
 *
 * @typedef {Object} ServiceAppointment
 * @property {string} businessServiceId - ID of the service being booked
 * @property {string} [locationId] - Business location ID
 * @property {string} [channelId] - Channel ID for multi-channel bookings
 * @property {string} customerId - Customer ID
 * @property {string} [customerName] - Customer's full name
 * @property {string} [customerEmail] - Customer's email address
 * @property {number} startTime - Appointment start time (Unix timestamp)
 * @property {number} [endTime] - Appointment end time (Unix timestamp)
 * @property {number} [duration] - Duration in minutes
 * @property {number} [totalPrice] - Total price for the service
 * @property {Object} [pricing] - Detailed pricing breakdown
 * @property {number} depositPaid - Deposit amount paid
 * @property {string} status - Current appointment status
 * @property {string} [providerId] - Assigned provider ID (ServicePerson ID)
 * @property {string} [serviceProviderId] - Service-provider assignment ID
 * @property {number} [slotIndex] - Slot index for concurrent bookings
 * @property {string} [assignedUserAccountId] - User account managing the appointment
 * @property {string} [calendarId] - Calendar ID where appointment is stored
 * @property {string} [calendarEventId] - External calendar event ID
 * @property {string} [calendarProvider] - Calendar provider type
 * @property {string} [cancelReason] - Reason for cancellation
 * @property {string} [serviceConversationConfigId] - Configuration ID for service conversation
 * @property {Object} [externalRef] - External system reference
 */
export declare const ServiceAppointmentSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    businessServiceId: z.ZodString;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customerId: z.ZodString;
    customerName: z.ZodOptional<z.ZodString>;
    customerEmail: z.ZodOptional<z.ZodEmail>;
    startTime: z.ZodNumber;
    endTime: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    totalPrice: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    pricing: z.ZodOptional<z.ZodObject<{
        subtotalBeforeTax: z.ZodOptional<z.ZodNumber>;
        subtotal: z.ZodNumber;
        appliedPricingRules: z.ZodDefault<z.ZodArray<z.ZodObject<{
            pricingRuleId: z.ZodOptional<z.ZodString>;
            externalPricingRuleId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            applyLevel: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").PricingRuleApplyLevel>>;
            adjustmentType: z.ZodEnum<typeof import("../../type-definitions").PricingRuleAdjustmentType>;
            adjustmentValue: z.ZodNumber;
            baseAmount: z.ZodNumber;
            adjustedAmount: z.ZodNumber;
            deltaAmount: z.ZodNumber;
            appliedAt: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        totalPricingAdjustmentAmount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterPricingRules: z.ZodOptional<z.ZodNumber>;
        appliedDiscounts: z.ZodDefault<z.ZodArray<z.ZodObject<{
            discountRuleId: z.ZodOptional<z.ZodString>;
            externalDiscountId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            code: z.ZodOptional<z.ZodString>;
            scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").DiscountScope>>;
            type: z.ZodEnum<typeof import("../../type-definitions").DiscountType>;
            value: z.ZodNumber;
            discountableAmount: z.ZodNumber;
            discountAmount: z.ZodNumber;
            isStacked: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        totalDiscountAmount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterDiscount: z.ZodOptional<z.ZodNumber>;
        appliedTaxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
            taxRuleId: z.ZodOptional<z.ZodString>;
            externalTaxId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").TaxScope>>;
            rateType: z.ZodEnum<typeof import("../../type-definitions").TaxRateType>;
            rateValue: z.ZodNumber;
            taxableAmount: z.ZodNumber;
            taxAmount: z.ZodNumber;
            isInclusive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        totalTaxAmount: z.ZodDefault<z.ZodNumber>;
        tax: z.ZodDefault<z.ZodNumber>;
        tip: z.ZodDefault<z.ZodNumber>;
        shippingAmount: z.ZodDefault<z.ZodNumber>;
        discount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterTax: z.ZodOptional<z.ZodNumber>;
        total: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>;
    depositPaid: z.ZodDefault<z.ZodNumber>;
    status: z.ZodDefault<z.ZodEnum<typeof AppointmentStatus>>;
    providerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slotIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new service appointment.
 * Omits auto-generated fields and cancelReason (set during cancellation).
 */
export declare const CreateServiceAppointmentSchema: z.ZodObject<{
    duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    status: z.ZodDefault<z.ZodEnum<typeof AppointmentStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customerId: z.ZodString;
    startTime: z.ZodNumber;
    endTime: z.ZodOptional<z.ZodNumber>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    totalPrice: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    pricing: z.ZodOptional<z.ZodObject<{
        subtotalBeforeTax: z.ZodOptional<z.ZodNumber>;
        subtotal: z.ZodNumber;
        appliedPricingRules: z.ZodDefault<z.ZodArray<z.ZodObject<{
            pricingRuleId: z.ZodOptional<z.ZodString>;
            externalPricingRuleId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            applyLevel: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").PricingRuleApplyLevel>>;
            adjustmentType: z.ZodEnum<typeof import("../../type-definitions").PricingRuleAdjustmentType>;
            adjustmentValue: z.ZodNumber;
            baseAmount: z.ZodNumber;
            adjustedAmount: z.ZodNumber;
            deltaAmount: z.ZodNumber;
            appliedAt: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        totalPricingAdjustmentAmount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterPricingRules: z.ZodOptional<z.ZodNumber>;
        appliedDiscounts: z.ZodDefault<z.ZodArray<z.ZodObject<{
            discountRuleId: z.ZodOptional<z.ZodString>;
            externalDiscountId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            code: z.ZodOptional<z.ZodString>;
            scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").DiscountScope>>;
            type: z.ZodEnum<typeof import("../../type-definitions").DiscountType>;
            value: z.ZodNumber;
            discountableAmount: z.ZodNumber;
            discountAmount: z.ZodNumber;
            isStacked: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        totalDiscountAmount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterDiscount: z.ZodOptional<z.ZodNumber>;
        appliedTaxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
            taxRuleId: z.ZodOptional<z.ZodString>;
            externalTaxId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").TaxScope>>;
            rateType: z.ZodEnum<typeof import("../../type-definitions").TaxRateType>;
            rateValue: z.ZodNumber;
            taxableAmount: z.ZodNumber;
            taxAmount: z.ZodNumber;
            isInclusive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        totalTaxAmount: z.ZodDefault<z.ZodNumber>;
        tax: z.ZodDefault<z.ZodNumber>;
        tip: z.ZodDefault<z.ZodNumber>;
        shippingAmount: z.ZodDefault<z.ZodNumber>;
        discount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterTax: z.ZodOptional<z.ZodNumber>;
        total: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    businessServiceId: z.ZodString;
    customerName: z.ZodOptional<z.ZodString>;
    customerEmail: z.ZodOptional<z.ZodEmail>;
    depositPaid: z.ZodDefault<z.ZodNumber>;
    providerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slotIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing service appointment.
 * All fields optional except id (required). Includes cancelReason for cancellation updates.
 */
export declare const UpdateServiceAppointmentSchema: z.ZodObject<{
    duration: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof AppointmentStatus>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    customerId: z.ZodOptional<z.ZodString>;
    startTime: z.ZodOptional<z.ZodNumber>;
    endTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    channelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    totalPrice: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    pricing: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        subtotalBeforeTax: z.ZodOptional<z.ZodNumber>;
        subtotal: z.ZodNumber;
        appliedPricingRules: z.ZodDefault<z.ZodArray<z.ZodObject<{
            pricingRuleId: z.ZodOptional<z.ZodString>;
            externalPricingRuleId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            applyLevel: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").PricingRuleApplyLevel>>;
            adjustmentType: z.ZodEnum<typeof import("../../type-definitions").PricingRuleAdjustmentType>;
            adjustmentValue: z.ZodNumber;
            baseAmount: z.ZodNumber;
            adjustedAmount: z.ZodNumber;
            deltaAmount: z.ZodNumber;
            appliedAt: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        totalPricingAdjustmentAmount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterPricingRules: z.ZodOptional<z.ZodNumber>;
        appliedDiscounts: z.ZodDefault<z.ZodArray<z.ZodObject<{
            discountRuleId: z.ZodOptional<z.ZodString>;
            externalDiscountId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            code: z.ZodOptional<z.ZodString>;
            scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").DiscountScope>>;
            type: z.ZodEnum<typeof import("../../type-definitions").DiscountType>;
            value: z.ZodNumber;
            discountableAmount: z.ZodNumber;
            discountAmount: z.ZodNumber;
            isStacked: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        totalDiscountAmount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterDiscount: z.ZodOptional<z.ZodNumber>;
        appliedTaxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
            taxRuleId: z.ZodOptional<z.ZodString>;
            externalTaxId: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").TaxScope>>;
            rateType: z.ZodEnum<typeof import("../../type-definitions").TaxRateType>;
            rateValue: z.ZodNumber;
            taxableAmount: z.ZodNumber;
            taxAmount: z.ZodNumber;
            isInclusive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        totalTaxAmount: z.ZodDefault<z.ZodNumber>;
        tax: z.ZodDefault<z.ZodNumber>;
        tip: z.ZodDefault<z.ZodNumber>;
        shippingAmount: z.ZodDefault<z.ZodNumber>;
        discount: z.ZodDefault<z.ZodNumber>;
        subtotalAfterTax: z.ZodOptional<z.ZodNumber>;
        total: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>>;
    externalRef: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    businessServiceId: z.ZodOptional<z.ZodString>;
    customerName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    customerEmail: z.ZodOptional<z.ZodOptional<z.ZodEmail>>;
    depositPaid: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    providerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceProviderId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    slotIndex: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    assignedUserAccountId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarEventId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarProvider: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>>;
    id: z.ZodString;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type ServiceAppointment = z.infer<typeof ServiceAppointmentSchema>;
export type CreateServiceAppointment = z.infer<typeof CreateServiceAppointmentSchema>;
export type UpdateServiceAppointment = z.infer<typeof UpdateServiceAppointmentSchema>;
/**
 * Schema for creating an appointment with custom field data.
 * Combines appointment creation with dynamic field values.
 */
export declare const CreateServiceAppointmentWithCustomDataSchema: z.ZodObject<{
    appointment: z.ZodObject<{
        duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        status: z.ZodDefault<z.ZodEnum<typeof AppointmentStatus>>;
        locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customerId: z.ZodString;
        startTime: z.ZodNumber;
        endTime: z.ZodOptional<z.ZodNumber>;
        channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        totalPrice: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        pricing: z.ZodOptional<z.ZodObject<{
            subtotalBeforeTax: z.ZodOptional<z.ZodNumber>;
            subtotal: z.ZodNumber;
            appliedPricingRules: z.ZodDefault<z.ZodArray<z.ZodObject<{
                pricingRuleId: z.ZodOptional<z.ZodString>;
                externalPricingRuleId: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                applyLevel: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").PricingRuleApplyLevel>>;
                adjustmentType: z.ZodEnum<typeof import("../../type-definitions").PricingRuleAdjustmentType>;
                adjustmentValue: z.ZodNumber;
                baseAmount: z.ZodNumber;
                adjustedAmount: z.ZodNumber;
                deltaAmount: z.ZodNumber;
                appliedAt: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            totalPricingAdjustmentAmount: z.ZodDefault<z.ZodNumber>;
            subtotalAfterPricingRules: z.ZodOptional<z.ZodNumber>;
            appliedDiscounts: z.ZodDefault<z.ZodArray<z.ZodObject<{
                discountRuleId: z.ZodOptional<z.ZodString>;
                externalDiscountId: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                code: z.ZodOptional<z.ZodString>;
                scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").DiscountScope>>;
                type: z.ZodEnum<typeof import("../../type-definitions").DiscountType>;
                value: z.ZodNumber;
                discountableAmount: z.ZodNumber;
                discountAmount: z.ZodNumber;
                isStacked: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
            totalDiscountAmount: z.ZodDefault<z.ZodNumber>;
            subtotalAfterDiscount: z.ZodOptional<z.ZodNumber>;
            appliedTaxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
                taxRuleId: z.ZodOptional<z.ZodString>;
                externalTaxId: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").TaxScope>>;
                rateType: z.ZodEnum<typeof import("../../type-definitions").TaxRateType>;
                rateValue: z.ZodNumber;
                taxableAmount: z.ZodNumber;
                taxAmount: z.ZodNumber;
                isInclusive: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
            totalTaxAmount: z.ZodDefault<z.ZodNumber>;
            tax: z.ZodDefault<z.ZodNumber>;
            tip: z.ZodDefault<z.ZodNumber>;
            shippingAmount: z.ZodDefault<z.ZodNumber>;
            discount: z.ZodDefault<z.ZodNumber>;
            subtotalAfterTax: z.ZodOptional<z.ZodNumber>;
            total: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, z.core.$strip>>;
        externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            externalId: z.ZodString;
            source: z.ZodString;
            url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
            syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        businessServiceId: z.ZodString;
        customerName: z.ZodOptional<z.ZodString>;
        customerEmail: z.ZodOptional<z.ZodEmail>;
        depositPaid: z.ZodDefault<z.ZodNumber>;
        providerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        serviceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slotIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
    }, z.core.$strip>;
    customData: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type CreateServiceAppointmentWithCustomData = z.infer<typeof CreateServiceAppointmentWithCustomDataSchema>;
/**
 * Schema for an appointment with its additional info.
 * Used for displaying complete appointment details.
 */
export declare const ServiceAppointmentWithAdditionalInfoSchema: z.ZodObject<{
    appointment: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        businessServiceId: z.ZodString;
        locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customerId: z.ZodString;
        customerName: z.ZodOptional<z.ZodString>;
        customerEmail: z.ZodOptional<z.ZodEmail>;
        startTime: z.ZodNumber;
        endTime: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        totalPrice: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        pricing: z.ZodOptional<z.ZodObject<{
            subtotalBeforeTax: z.ZodOptional<z.ZodNumber>;
            subtotal: z.ZodNumber;
            appliedPricingRules: z.ZodDefault<z.ZodArray<z.ZodObject<{
                pricingRuleId: z.ZodOptional<z.ZodString>;
                externalPricingRuleId: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                applyLevel: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").PricingRuleApplyLevel>>;
                adjustmentType: z.ZodEnum<typeof import("../../type-definitions").PricingRuleAdjustmentType>;
                adjustmentValue: z.ZodNumber;
                baseAmount: z.ZodNumber;
                adjustedAmount: z.ZodNumber;
                deltaAmount: z.ZodNumber;
                appliedAt: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            totalPricingAdjustmentAmount: z.ZodDefault<z.ZodNumber>;
            subtotalAfterPricingRules: z.ZodOptional<z.ZodNumber>;
            appliedDiscounts: z.ZodDefault<z.ZodArray<z.ZodObject<{
                discountRuleId: z.ZodOptional<z.ZodString>;
                externalDiscountId: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                code: z.ZodOptional<z.ZodString>;
                scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").DiscountScope>>;
                type: z.ZodEnum<typeof import("../../type-definitions").DiscountType>;
                value: z.ZodNumber;
                discountableAmount: z.ZodNumber;
                discountAmount: z.ZodNumber;
                isStacked: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
            totalDiscountAmount: z.ZodDefault<z.ZodNumber>;
            subtotalAfterDiscount: z.ZodOptional<z.ZodNumber>;
            appliedTaxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
                taxRuleId: z.ZodOptional<z.ZodString>;
                externalTaxId: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                scope: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").TaxScope>>;
                rateType: z.ZodEnum<typeof import("../../type-definitions").TaxRateType>;
                rateValue: z.ZodNumber;
                taxableAmount: z.ZodNumber;
                taxAmount: z.ZodNumber;
                isInclusive: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>;
            totalTaxAmount: z.ZodDefault<z.ZodNumber>;
            tax: z.ZodDefault<z.ZodNumber>;
            tip: z.ZodDefault<z.ZodNumber>;
            shippingAmount: z.ZodDefault<z.ZodNumber>;
            discount: z.ZodDefault<z.ZodNumber>;
            subtotalAfterTax: z.ZodOptional<z.ZodNumber>;
            total: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, z.core.$strip>>;
        depositPaid: z.ZodDefault<z.ZodNumber>;
        status: z.ZodDefault<z.ZodEnum<typeof AppointmentStatus>>;
        providerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        serviceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slotIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
        cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            externalId: z.ZodString;
            source: z.ZodString;
            url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
            syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    additionalInfo: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        businessServiceId: z.ZodString;
        appointmentId: z.ZodString;
        customerId: z.ZodString;
        data: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ServiceAppointmentWithAdditionalInfo = z.infer<typeof ServiceAppointmentWithAdditionalInfoSchema>;
/**
 * Service appointment filter options.
 * @interface ServiceAppointmentFilters
 */
export interface ServiceAppointmentFilters {
    /** Text search across customer name/email */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by channel ID */
    channelId?: string;
    /** Filter by appointment status(es) */
    status?: AppointmentStatus[];
    /** Filter by service ID */
    businessServiceId?: string;
    /** Filter by customer ID */
    customerId?: string;
    /** Filter by assigned user account ID */
    assignedUserAccountId?: string;
    /** Filter by calendar provider(s) */
    calendarProvider?: CalendarProvider[];
    /** Filter by external source */
    externalSource?: string;
    /** Filter by date range (Unix timestamps) */
    dateRange?: {
        start?: number;
        end?: number;
    };
}
/**
 * Service appointment sorting options.
 * @interface ServiceAppointmentSorting
 */
export interface ServiceAppointmentSorting {
    /** Field to sort by */
    field: "startTime" | "endTime" | "createdAt" | "customerName";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Service appointment query options.
 * @interface ServiceAppointmentQueryOptions
 */
export interface ServiceAppointmentQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ServiceAppointmentFilters;
    /** Optional sorting */
    sorting?: ServiceAppointmentSorting;
}
