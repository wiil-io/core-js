import z from "zod";
import { MenuOrderType, OrderStatus, PaymentStatus } from "../type-definitions";
/**
 * @fileoverview Menu order schema definitions for restaurant/food service.
 * @module business-mgt/menu-order
 */
/**
 * Base menu order item schema (without IDs for creation).
 *
 * @typedef {Object} MenuOrderItemBase
 * @property {string} menuItemId - Menu item ID being ordered
 * @property {string} itemName - Name of the menu item
 * @property {number} quantity - Quantity ordered
 * @property {number} unitPrice - Price per unit
 * @property {number} totalPrice - Total price for this item
 * @property {string} [specialInstructions] - Special preparation instructions
 * @property {Array} [customizations] - Item customizations with additional costs
 * @property {string} status - Item status
 * @property {number} [preparationTime] - Estimated prep time in minutes
 * @property {string} [notes] - Additional notes
 */
export declare const MenuOrderItemBaseSchema: z.ZodObject<{
    menuItemId: z.ZodString;
    itemName: z.ZodString;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specialInstructions: z.ZodOptional<z.ZodString>;
    customizations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
        additionalCost: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    preparationTime: z.ZodOptional<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Menu order item schema with IDs (for existing items).
 */
export declare const MenuOrderItemSchema: z.ZodObject<{
    menuItemId: z.ZodString;
    itemName: z.ZodString;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specialInstructions: z.ZodOptional<z.ZodString>;
    customizations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
        additionalCost: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    preparationTime: z.ZodOptional<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    menuOrderId: z.ZodString;
}, z.core.$strip>;
/**
 * Menu order schema - for restaurants/food service.
 *
 * @typedef {Object} MenuOrder
 * @property {string} id - Unique order ID
 * @property {string} [orderNumber] - Human-readable order number
 * @property {string} type - Order type (dine-in, takeout, delivery)
 * @property {string} status - Current order status
 * @property {Array} items - Items in the order
 * @property {string} customerId - ID of the customer placing the order
 * @property {Object} [customer] - Customer information
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
 * @property {string} [externalOrderId] - External order ID for integrations
 * @property {string} source - Order source
 * @property {string} [cancelReason] - Reason for cancellation
 * @property {string} [notes] - Additional notes
 * @property {string} [serviceConversationConfigId] - Service conversation config ID
 * @property {Object} [deliveryAddress] - Delivery address if applicable
 */
export declare const MenuOrderSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    orderNumber: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<typeof MenuOrderType>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    items: z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        itemName: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        specialInstructions: z.ZodOptional<z.ZodString>;
        customizations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            additionalCost: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        preparationTime: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        menuOrderId: z.ZodString;
    }, z.core.$strip>>;
    customerId: z.ZodString;
    customer: z.ZodOptional<z.ZodObject<{
        customerId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodEmail>;
        address: z.ZodOptional<z.ZodObject<{
            street: z.ZodString;
            street2: z.ZodOptional<z.ZodString>;
            city: z.ZodString;
            state: z.ZodString;
            postalCode: z.ZodString;
            country: z.ZodString;
            deliveryInstructions: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    pricing: z.ZodObject<{
        subtotal: z.ZodNumber;
        tax: z.ZodDefault<z.ZodNumber>;
        tip: z.ZodDefault<z.ZodNumber>;
        shippingAmount: z.ZodDefault<z.ZodNumber>;
        discount: z.ZodDefault<z.ZodNumber>;
        total: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>;
    paymentStatus: z.ZodDefault<z.ZodEnum<typeof PaymentStatus>>;
    paymentMethod: z.ZodOptional<z.ZodString>;
    paymentReference: z.ZodOptional<z.ZodString>;
    orderDate: z.ZodNumber;
    requestedTime: z.ZodOptional<z.ZodNumber>;
    estimatedReadyTime: z.ZodOptional<z.ZodNumber>;
    actualReadyTime: z.ZodOptional<z.ZodNumber>;
    specialInstructions: z.ZodOptional<z.ZodString>;
    allergies: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tableNumber: z.ZodOptional<z.ZodString>;
    externalOrderId: z.ZodOptional<z.ZodString>;
    source: z.ZodDefault<z.ZodString>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    deliveryAddress: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for creating a new menu order.
 * Omits auto-generated fields and uses base items without IDs.
 */
export declare const CreateMenuOrderSchema: z.ZodObject<{
    type: z.ZodEnum<typeof MenuOrderType>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    customerId: z.ZodString;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tableNumber: z.ZodOptional<z.ZodString>;
    specialInstructions: z.ZodOptional<z.ZodString>;
    customer: z.ZodOptional<z.ZodObject<{
        customerId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodEmail>;
        address: z.ZodOptional<z.ZodObject<{
            street: z.ZodString;
            street2: z.ZodOptional<z.ZodString>;
            city: z.ZodString;
            state: z.ZodString;
            postalCode: z.ZodString;
            country: z.ZodString;
            deliveryInstructions: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    pricing: z.ZodObject<{
        subtotal: z.ZodNumber;
        tax: z.ZodDefault<z.ZodNumber>;
        tip: z.ZodDefault<z.ZodNumber>;
        shippingAmount: z.ZodDefault<z.ZodNumber>;
        discount: z.ZodDefault<z.ZodNumber>;
        total: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>;
    paymentStatus: z.ZodDefault<z.ZodEnum<typeof PaymentStatus>>;
    paymentMethod: z.ZodOptional<z.ZodString>;
    paymentReference: z.ZodOptional<z.ZodString>;
    orderDate: z.ZodNumber;
    requestedTime: z.ZodOptional<z.ZodNumber>;
    estimatedReadyTime: z.ZodOptional<z.ZodNumber>;
    allergies: z.ZodOptional<z.ZodArray<z.ZodString>>;
    externalOrderId: z.ZodOptional<z.ZodString>;
    source: z.ZodDefault<z.ZodString>;
    deliveryAddress: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    items: z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        itemName: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        specialInstructions: z.ZodOptional<z.ZodString>;
        customizations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            additionalCost: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        preparationTime: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing menu order.
 * All fields are optional except id.
 */
export declare const UpdateMenuOrderSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<typeof MenuOrderType>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof OrderStatus>>>;
    customerId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    tableNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    specialInstructions: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    customer: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        customerId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodEmail>;
        address: z.ZodOptional<z.ZodObject<{
            street: z.ZodString;
            street2: z.ZodOptional<z.ZodString>;
            city: z.ZodString;
            state: z.ZodString;
            postalCode: z.ZodString;
            country: z.ZodString;
            deliveryInstructions: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    pricing: z.ZodOptional<z.ZodObject<{
        subtotal: z.ZodNumber;
        tax: z.ZodDefault<z.ZodNumber>;
        tip: z.ZodDefault<z.ZodNumber>;
        shippingAmount: z.ZodDefault<z.ZodNumber>;
        discount: z.ZodDefault<z.ZodNumber>;
        total: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>;
    paymentStatus: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof PaymentStatus>>>;
    paymentMethod: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    paymentReference: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    orderDate: z.ZodOptional<z.ZodNumber>;
    requestedTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    estimatedReadyTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    allergies: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    externalOrderId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    source: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    deliveryAddress: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodString;
        itemName: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        specialInstructions: z.ZodOptional<z.ZodString>;
        customizations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            additionalCost: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        preparationTime: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    cancelReason: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Quick status update schema for menu orders.
 */
export declare const UpdateMenuOrderStatusSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<typeof OrderStatus>;
    estimatedReadyTime: z.ZodOptional<z.ZodNumber>;
    actualReadyTime: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MenuOrderItemBase = z.infer<typeof MenuOrderItemBaseSchema>;
export type MenuOrderItem = z.infer<typeof MenuOrderItemSchema>;
export type MenuOrder = z.infer<typeof MenuOrderSchema>;
export type CreateMenuOrder = z.infer<typeof CreateMenuOrderSchema>;
export type UpdateMenuOrder = z.infer<typeof UpdateMenuOrderSchema>;
export type UpdateMenuOrderStatus = z.infer<typeof UpdateMenuOrderStatusSchema>;
export type CreateMenuOrderItem = z.infer<typeof MenuOrderItemBaseSchema>;
export interface MenuOrderFilters {
    search?: string;
    type?: MenuOrderType[];
    status?: OrderStatus[];
    paymentStatus?: PaymentStatus[];
    customerId?: string;
    tableNumber?: string;
    source?: string;
    dateRange?: {
        start?: number;
        end?: number;
    };
}
export interface MenuOrderSorting {
    field: 'orderDate' | 'createdAt' | 'totalAmount';
    direction: 'asc' | 'desc';
}
export interface MenuOrderQueryOptions {
    page: number;
    pageSize: number;
    filters?: MenuOrderFilters;
    sorting?: MenuOrderSorting;
}
