import z from "zod";
import { MenuOrderType, OrderStatus, PaymentStatus } from "../../type-definitions";
/**
 * @fileoverview Menu order schema definitions for restaurant/food service.
 * @module business-mgt/menu-order
 *
 * Includes menu orders, order items, customizations, and status tracking
 * for dine-in, takeout, and delivery order management.
 */
/**
 * Base menu order item schema.
 *
 * @typedef {Object} MenuOrderItemBase
 * @property {string} menuItemId - Menu item ID being ordered
 * @property {string} variantId - Menu item variant ID being ordered
 * @property {string} [menuSetId] - Original menu set ID if from a set
 * @property {string} itemName - Name of the menu item
 * @property {number} quantity - Quantity ordered
 * @property {number} unitPrice - Price per unit
 * @property {number} totalPrice - Total price for this item
 * @property {string} [specialInstructions] - Special preparation instructions
 * @property {Array} [customizations] - Item customizations with additional costs
 * @property {Array} [modifiers] - Resolved modifiers with names and pricing
 * @property {string} status - Item status
 * @property {number} [preparationTime] - Estimated prep time in minutes
 * @property {string} [notes] - Additional notes
 */
export declare const MenuOrderItemBaseSchema: z.ZodObject<{
    menuItemId: z.ZodString;
    variantId: z.ZodString;
    menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    itemName: z.ZodString;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    customizations: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
        additionalCost: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    modifiers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        modifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        modifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalModifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        groupName: z.ZodString;
        optionName: z.ZodString;
        quantity: z.ZodDefault<z.ZodNumber>;
        priceDelta: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    preparationTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Menu order item schema.
 * Item with IDs (for existing items).
 *
 * @typedef {Object} MenuOrderItem
 * @property {string} id - Unique identifier for this menu order item
 * @property {string} menuOrderId - Parent menu order ID
 */
export declare const MenuOrderItemSchema: z.ZodObject<{
    menuItemId: z.ZodString;
    variantId: z.ZodString;
    menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    itemName: z.ZodString;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    customizations: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
        additionalCost: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    modifiers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        modifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        modifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalModifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        groupName: z.ZodString;
        optionName: z.ZodString;
        quantity: z.ZodDefault<z.ZodNumber>;
        priceDelta: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    preparationTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    id: z.ZodString;
    menuOrderId: z.ZodString;
}, z.core.$strip>;
/**
 * Menu order schema.
 *
 * @typedef {Object} MenuOrder
 * @property {string} [locationId] - Business location ID
 * @property {string} [channelId] - Channel ID for multi-channel orders
 * @property {string} [terminalId] - Terminal/register ID
 * @property {string} [operatorId] - Operator/staff user ID
 * @property {string} [orderNumber] - Human-readable order number
 * @property {string} type - Order type (dine-in, takeout, delivery)
 * @property {string} status - Current order status
 * @property {Array} items - Items in the order
 * @property {string} customerId - ID of the customer placing the order
 * @property {Object} pricing - Pricing details
 * @property {string} paymentStatus - Payment status
 * @property {string} [paymentMethod] - Payment method used
 * @property {string} [paymentReference] - Payment reference number
 * @property {number} orderDate - Order date as Unix timestamp
 * @property {number} [requestedTime] - Requested pickup/delivery time
 * @property {number} [estimatedReadyTime] - Estimated ready time
 * @property {number} [actualReadyTime] - Actual ready time
 * @property {string} [specialInstructions] - Special instructions
 * @property {string[]} [allergies] - Customer allergies
 * @property {string} [tableNumber] - Table number for dine-in
 * @property {Object} [externalRef] - External system reference for synced orders
 * @property {string} [cancelReason] - Reason for cancellation
 * @property {string} [notes] - Additional notes
 * @property {string} [serviceConversationConfigId] - Service conversation config ID
 * @property {Object} [deliveryAddress] - Delivery address if applicable
 * @property {string} [shippingAddressId] - Reference to saved shipping address
 * @property {number} [tip] - Tip amount for the order
 */
export declare const MenuOrderSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    terminalId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    operatorId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    orderNumber: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    type: z.ZodEnum<typeof MenuOrderType>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    items: z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        variantId: z.ZodString;
        menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        itemName: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        customizations: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            additionalCost: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        modifiers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            modifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            modifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            groupName: z.ZodString;
            optionName: z.ZodString;
            quantity: z.ZodDefault<z.ZodNumber>;
            priceDelta: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        preparationTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        id: z.ZodString;
        menuOrderId: z.ZodString;
    }, z.core.$strip>>;
    customerId: z.ZodString;
    pricing: z.ZodObject<{
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
    }, z.core.$strip>;
    paymentStatus: z.ZodDefault<z.ZodEnum<typeof PaymentStatus>>;
    paymentMethod: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paymentReference: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    orderDate: z.ZodNumber;
    requestedTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimatedReadyTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    actualReadyTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    allergies: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    tableNumber: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    cancelReason: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    deliveryAddress: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        postalCode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    shippingAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tip: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Schema for creating a new menu order.
 * Omits auto-generated fields and uses base items without IDs.
 */
export declare const CreateMenuOrderSchema: z.ZodObject<{
    type: z.ZodEnum<typeof MenuOrderType>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customerId: z.ZodString;
    tip: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    terminalId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    operatorId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    pricing: z.ZodObject<{
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
    }, z.core.$strip>;
    paymentStatus: z.ZodDefault<z.ZodEnum<typeof PaymentStatus>>;
    paymentMethod: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paymentReference: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    orderDate: z.ZodNumber;
    requestedTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimatedReadyTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    allergies: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    tableNumber: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    deliveryAddress: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        postalCode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    shippingAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    items: z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        variantId: z.ZodString;
        menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        itemName: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        customizations: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            additionalCost: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        modifiers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            modifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            modifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            groupName: z.ZodString;
            optionName: z.ZodString;
            quantity: z.ZodDefault<z.ZodNumber>;
            priceDelta: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        preparationTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    cancelReason: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing menu order.
 * All fields are optional except id.
 */
export declare const UpdateMenuOrderSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<typeof MenuOrderType>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof OrderStatus>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    customerId: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodNumber>>>;
    channelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    specialInstructions: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    terminalId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    operatorId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
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
    paymentStatus: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof PaymentStatus>>>;
    paymentMethod: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    paymentReference: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    orderDate: z.ZodOptional<z.ZodNumber>;
    requestedTime: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodNumber>>>;
    estimatedReadyTime: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodNumber>>>;
    allergies: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    tableNumber: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    externalRef: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    deliveryAddress: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        postalCode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    shippingAddressId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        variantId: z.ZodString;
        menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        itemName: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        customizations: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            additionalCost: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        modifiers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            modifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            modifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            groupName: z.ZodString;
            optionName: z.ZodString;
            quantity: z.ZodDefault<z.ZodNumber>;
            priceDelta: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        preparationTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    cancelReason: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Quick status update schema for menu orders.
 * Streamlined update for status transitions.
 *
 * @typedef {Object} UpdateMenuOrderStatus
 * @property {string} id - Menu order ID to update
 * @property {OrderStatus} status - New order status
 * @property {number} [estimatedReadyTime] - Updated estimated completion time
 * @property {number} [actualReadyTime] - Actual completion time
 */
export declare const UpdateMenuOrderStatusSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<typeof OrderStatus>;
    estimatedReadyTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    actualReadyTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Menu order pricing preview schema.
 * For validation/preview purposes before order submission.
 *
 * @typedef {Object} MenuOrderPricingPreview
 * @property {boolean} success - Whether pricing calculation was successful
 * @property {MenuOrderItemBase[]} items - Items with calculated pricing
 * @property {OrderPricing} [pricing] - Calculated pricing breakdown
 * @property {string[]} errors - List of errors encountered
 * @property {string[]} warnings - List of warnings (e.g., items unavailable)
 */
export declare const MenuOrderPricingPreviewSchema: z.ZodObject<{
    success: z.ZodBoolean;
    items: z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        variantId: z.ZodString;
        menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        itemName: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        specialInstructions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        customizations: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            additionalCost: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        modifiers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            modifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            modifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            externalModifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            groupName: z.ZodString;
            optionName: z.ZodString;
            quantity: z.ZodDefault<z.ZodNumber>;
            priceDelta: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        preparationTime: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    pricing: z.ZodNullable<z.ZodObject<{
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
    errors: z.ZodArray<z.ZodString>;
    warnings: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type MenuOrderItemBase = z.infer<typeof MenuOrderItemBaseSchema>;
export type MenuOrderItem = z.infer<typeof MenuOrderItemSchema>;
export type MenuOrder = z.infer<typeof MenuOrderSchema>;
export type CreateMenuOrder = z.infer<typeof CreateMenuOrderSchema>;
export type UpdateMenuOrder = z.infer<typeof UpdateMenuOrderSchema>;
export type UpdateMenuOrderStatus = z.infer<typeof UpdateMenuOrderStatusSchema>;
export type MenuOrderPricingPreview = z.infer<typeof MenuOrderPricingPreviewSchema>;
export type CreateMenuOrderItem = z.infer<typeof MenuOrderItemBaseSchema>;
/**
 * Menu order filter options.
 * @interface MenuOrderFilters
 */
export interface MenuOrderFilters {
    /** Text search across order number/customer */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by channel ID */
    channelId?: string;
    /** Filter by terminal ID */
    terminalId?: string;
    /** Filter by operator ID */
    operatorId?: string;
    /** Filter by order type(s) */
    type?: MenuOrderType[];
    /** Filter by order status(es) */
    status?: OrderStatus[];
    /** Filter by payment status(es) */
    paymentStatus?: PaymentStatus[];
    /** Filter by customer ID */
    customerId?: string;
    /** Filter by table number */
    tableNumber?: string;
    /** Filter by external source */
    externalSource?: string;
    /** Filter by date range */
    dateRange?: {
        start?: number;
        end?: number;
    };
}
/**
 * Menu order sorting options.
 * @interface MenuOrderSorting
 */
export interface MenuOrderSorting {
    /** Field to sort by */
    field: 'orderDate' | 'createdAt' | 'totalAmount';
    /** Sort direction */
    direction: 'asc' | 'desc';
}
/**
 * Menu order query options.
 * @interface MenuOrderQueryOptions
 */
export interface MenuOrderQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: MenuOrderFilters;
    /** Optional sorting */
    sorting?: MenuOrderSorting;
}
