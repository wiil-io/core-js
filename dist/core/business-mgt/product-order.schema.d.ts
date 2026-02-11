import z from "zod";
import { OrderStatus, PaymentStatus } from "../type-definitions";
/**
 * @fileoverview Product order schema definitions for retail/product sales.
 * @module business-mgt/product-order
 */
/**
 * Base product order item schema (without productOrderId for creation).
 *
 * @typedef {Object} ProductOrderItemBase
 * @property {string} productId - Product ID being ordered
 * @property {string} itemName - Name of the product
 * @property {string} [sku] - Product SKU
 * @property {number} quantity - Quantity ordered
 * @property {number} unitPrice - Price per unit
 * @property {number} totalPrice - Total price for this item
 * @property {string} [selectedVariant] - Selected variant (size, color, etc.)
 * @property {string} [warrantyInfo] - Warranty information
 * @property {string} status - Item status
 * @property {string} [notes] - Additional notes
 */
export declare const ProductOrderItemBaseSchema: z.ZodObject<{
    productId: z.ZodString;
    itemName: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    selectedVariant: z.ZodOptional<z.ZodString>;
    warrantyInfo: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Product order item schema with IDs (for existing items).
 */
export declare const ProductOrderItemSchema: z.ZodObject<{
    productId: z.ZodString;
    itemName: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    selectedVariant: z.ZodOptional<z.ZodString>;
    warrantyInfo: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    notes: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    productOrderId: z.ZodString;
}, z.core.$strip>;
/**
 * Product order schema - for retail/product sales.
 *
 * @typedef {Object} ProductOrder
 * @property {string} id - Unique order ID
 * @property {string} [orderNumber] - Human-readable order number
 * @property {string} status - Order status
 * @property {Array} items - Items in the order
 * @property {string} customerId - Customer ID
 * @property {Object} [customer] - Customer information
 * @property {Object} pricing - Pricing details
 * @property {string} paymentStatus - Payment status
 * @property {string} [paymentMethod] - Payment method
 * @property {string} [paymentReference] - Payment reference
 * @property {Object} [billingAddress] - Billing address
 * @property {number} orderDate - Order date
 * @property {number} [requestedDeliveryDate] - Requested delivery date
 * @property {number} [shippedDate] - Shipped date
 * @property {Object} [shippingAddress] - Shipping address
 * @property {number} [deliveredDate] - Delivered date
 * @property {string} [shippingMethod] - Shipping method
 * @property {string} [trackingNumber] - Tracking number
 * @property {string} [shippingCarrier] - Shipping carrier
 * @property {string} [externalOrderId] - External order ID
 * @property {string} source - Order source
 * @property {string} [cancelReason] - Cancellation reason
 * @property {string} [notes] - Additional notes
 * @property {string} [serviceConversationConfigId] - Service conversation config ID
 */
export declare const ProductOrderSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    orderNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        itemName: z.ZodString;
        sku: z.ZodOptional<z.ZodString>;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        selectedVariant: z.ZodOptional<z.ZodString>;
        warrantyInfo: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        notes: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        productOrderId: z.ZodString;
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
    billingAddress: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
        deliveryInstructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    orderDate: z.ZodNumber;
    requestedDeliveryDate: z.ZodOptional<z.ZodNumber>;
    shippedDate: z.ZodOptional<z.ZodNumber>;
    shippingAddress: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
        deliveryInstructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    deliveredDate: z.ZodOptional<z.ZodNumber>;
    shippingMethod: z.ZodOptional<z.ZodString>;
    trackingNumber: z.ZodOptional<z.ZodString>;
    shippingCarrier: z.ZodOptional<z.ZodString>;
    externalOrderId: z.ZodOptional<z.ZodString>;
    source: z.ZodDefault<z.ZodString>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new product order.
 * Omits auto-generated fields and uses base items without IDs.
 */
export declare const CreateProductOrderSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
    customerId: z.ZodString;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    externalOrderId: z.ZodOptional<z.ZodString>;
    source: z.ZodDefault<z.ZodString>;
    billingAddress: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
        deliveryInstructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    requestedDeliveryDate: z.ZodOptional<z.ZodNumber>;
    shippingAddress: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
        deliveryInstructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    shippingMethod: z.ZodOptional<z.ZodString>;
    trackingNumber: z.ZodOptional<z.ZodString>;
    shippingCarrier: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        itemName: z.ZodString;
        sku: z.ZodOptional<z.ZodString>;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        selectedVariant: z.ZodOptional<z.ZodString>;
        warrantyInfo: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing product order.
 * All fields are optional except id.
 */
export declare const UpdateProductOrderSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof OrderStatus>>>;
    customerId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
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
    externalOrderId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    source: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    billingAddress: z.ZodOptional<z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
        deliveryInstructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    requestedDeliveryDate: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    shippingAddress: z.ZodOptional<z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
        deliveryInstructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    shippingMethod: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    trackingNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    shippingCarrier: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        itemName: z.ZodString;
        sku: z.ZodOptional<z.ZodString>;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        totalPrice: z.ZodNumber;
        selectedVariant: z.ZodOptional<z.ZodString>;
        warrantyInfo: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<typeof OrderStatus>>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    id: z.ZodString;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Quick status update schema for product orders.
 */
export declare const UpdateProductOrderStatusSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<typeof OrderStatus>;
    shippedDate: z.ZodOptional<z.ZodNumber>;
    deliveredDate: z.ZodOptional<z.ZodNumber>;
    trackingNumber: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for inventory updates triggered by order fulfillment.
 */
export declare const OrderInventoryUpdateSchema: z.ZodObject<{
    orderId: z.ZodString;
    inventoryAdjustments: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantityUsed: z.ZodNumber;
        reason: z.ZodLiteral<"order_fulfillment">;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProductOrderItemBase = z.infer<typeof ProductOrderItemBaseSchema>;
export type ProductOrderItem = z.infer<typeof ProductOrderItemSchema>;
export type ProductOrder = z.infer<typeof ProductOrderSchema>;
export type CreateProductOrder = z.infer<typeof CreateProductOrderSchema>;
export type UpdateProductOrder = z.infer<typeof UpdateProductOrderSchema>;
export type UpdateProductOrderStatus = z.infer<typeof UpdateProductOrderStatusSchema>;
export type CreateProductOrderItem = z.infer<typeof ProductOrderItemBaseSchema>;
export type OrderInventoryUpdate = z.infer<typeof OrderInventoryUpdateSchema>;
export interface ProductOrderFilters {
    search?: string;
    status?: OrderStatus[];
    paymentStatus?: PaymentStatus[];
    customerId?: string;
    shippingMethod?: string;
    source?: string;
    dateRange?: {
        start?: number;
        end?: number;
    };
}
export interface ProductOrderSorting {
    field: 'orderDate' | 'createdAt' | 'totalAmount';
    direction: 'asc' | 'desc';
}
export interface ProductOrderQueryOptions {
    page: number;
    pageSize: number;
    filters?: ProductOrderFilters;
    sorting?: ProductOrderSorting;
}
