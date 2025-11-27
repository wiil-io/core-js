import z from "zod";
import { BaseModelSchema } from "../base.schema";
import { OrderAddress, OrderCustomerSchema, OrderPricingSchema } from "./order.schema";
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
export const ProductOrderItemBaseSchema = z.object({
    productId: z.string(),
    itemName: z.string(),
    sku: z.string().optional(),
    quantity: z.number().int().positive(),
    unitPrice: z.number().nonnegative(),
    totalPrice: z.number().nonnegative(),

    // Retail-specific
    selectedVariant: z.string().optional(),
    warrantyInfo: z.string().optional(),

    status: z.enum(OrderStatus).default(OrderStatus.PENDING),
    notes: z.string().optional()
});

/**
 * Product order item schema with IDs (for existing items).
 */
export const ProductOrderItemSchema = ProductOrderItemBaseSchema.safeExtend({
    id: z.string(),
    productOrderId: z.string(),
});

/**
 * Product order schema - for retail/product sales.
 *
 * @typedef {Object} ProductOrder
 * @property {string} id - Unique order ID
 * @property {string} organizationId - Business account ID
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
export const ProductOrderSchema = BaseModelSchema.safeExtend({
    id: z.string(),
    organizationId: z.string(),
    orderNumber: z.string().optional(),
    status: z.enum(OrderStatus).default(OrderStatus.PENDING),
    items: z.array(ProductOrderItemSchema).min(1, "Order must have at least one item"),
    customerId: z.string(),

    customer: OrderCustomerSchema.optional(),
    pricing: OrderPricingSchema,

    // Payment
    paymentStatus: z.enum(PaymentStatus).default(PaymentStatus.PENDING),
    paymentMethod: z.string().optional(),
    paymentReference: z.string().optional(),
    billingAddress: OrderAddress.optional(),

    // Retail-specific timing
    orderDate: z.number(),
    requestedDeliveryDate: z.number().optional(),
    shippedDate: z.number().optional(),
    shippingAddress: OrderAddress.optional(),
    deliveredDate: z.number().optional(),

    // Shipping info
    shippingMethod: z.string().optional(),
    trackingNumber: z.string().optional(),
    shippingCarrier: z.string().optional(),

    // Integration
    externalOrderId: z.string().optional(),
    source: z.string().default('direct'),
    cancelReason: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
    serviceConversationConfigId: z.string().nullable().optional(),
});

/**
 * Schema for creating a new product order.
 * Omits auto-generated fields and uses base items without IDs.
 */
export const CreateProductOrderSchema = ProductOrderSchema.omit({
    id: true,
    orderNumber: true,
    createdAt: true,
    updatedAt: true,
    deliveredDate: true,
    shippedDate: true,
    customer: true,
    items: true,
    cancelReason: true
}).safeExtend({
    items: z.array(ProductOrderItemBaseSchema).min(1, "Order must have at least one item"),
});

/**
 * Schema for updating an existing product order.
 * All fields are optional except id.
 */
export const UpdateProductOrderSchema = CreateProductOrderSchema.partial().safeExtend({
    id: z.string(),
    cancelReason: z.string().nullable().optional(),
});

/**
 * Quick status update schema for product orders.
 */
export const UpdateProductOrderStatusSchema = z.object({
    id: z.string(),
    status: z.enum(OrderStatus),
    shippedDate: z.number().optional(),
    deliveredDate: z.number().optional(),
    trackingNumber: z.string().optional(),
});

/**
 * Schema for inventory updates triggered by order fulfillment.
 */
export const OrderInventoryUpdateSchema = z.object({
    orderId: z.string(),
    inventoryAdjustments: z.array(z.object({
        productId: z.string(),
        quantityUsed: z.number(),
        reason: z.literal('order_fulfillment'),
    })),
});

// Type exports
export type ProductOrderItemBase = z.infer<typeof ProductOrderItemBaseSchema>;
export type ProductOrderItem = z.infer<typeof ProductOrderItemSchema>;
export type ProductOrder = z.infer<typeof ProductOrderSchema>;
export type CreateProductOrder = z.infer<typeof CreateProductOrderSchema>;
export type UpdateProductOrder = z.infer<typeof UpdateProductOrderSchema>;
export type UpdateProductOrderStatus = z.infer<typeof UpdateProductOrderStatusSchema>;
export type CreateProductOrderItem = z.infer<typeof ProductOrderItemBaseSchema>;
export type OrderInventoryUpdate = z.infer<typeof OrderInventoryUpdateSchema>;
