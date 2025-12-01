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
    productId: z.string().describe("References Product from product-config.schema being ordered. Links order item to catalog for inventory tracking, fulfillment details, and product information."),
    itemName: z.string().describe("Display name of the product captured at order time. Preserved even if catalog product is later renamed, ensuring historical order accuracy."),
    sku: z.string().optional().describe("Stock Keeping Unit identifier captured at order time for warehouse fulfillment and inventory systems. Links to product catalog SKU for picking and packing."),
    quantity: z.number().int().positive().describe("Number of units ordered for this product. Used for inventory deduction, pricing calculations, and fulfillment quantities."),
    unitPrice: z.number().nonnegative().describe("Price per unit at the time of order. Captures pricing snapshot for order integrity even if catalog prices change later."),
    totalPrice: z.number().nonnegative().describe("Total price for this line item: unitPrice × quantity. Used in order subtotal calculations."),

    // Retail-specific
    selectedVariant: z.string().optional().describe("Selected product variant specification (e.g., 'Large/Blue', 'XL', '128GB'). Captured for fulfillment accuracy and inventory tracking of specific variants."),
    warrantyInfo: z.string().optional().describe("Warranty terms and coverage details captured at purchase time. Preserved for customer reference and service claim validation."),

    status: z.enum(OrderStatus).default(OrderStatus.PENDING).describe("Current fulfillment status of this individual item. Enables per-item tracking in warehouse workflow. Defaults to PENDING."),
    notes: z.string().optional().describe("Internal notes about this item for warehouse or fulfillment staff. Not visible to customers.")
});

/**
 * Product order item schema with IDs (for existing items).
 */
export const ProductOrderItemSchema = ProductOrderItemBaseSchema.safeExtend({
    id: z.string().describe("Unique identifier for this product order item instance."),
    productOrderId: z.string().describe("References parent ProductOrder this item belongs to. Maintains order-item relationship for order management and fulfillment tracking."),
});

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
export const ProductOrderSchema = BaseModelSchema.safeExtend({
    id: z.string().describe("Unique identifier for this product order transaction powered by AI Powered Services."),
    orderNumber: z.string().optional().describe("Human-readable order number displayed to customers and staff (e.g., 'ORD-12345', 'PO-2024-001'). Generated by Product Management for easy reference and communication."),
    status: z.enum(OrderStatus).default(OrderStatus.PENDING).describe("Current order status tracking progression from placement through fulfillment and delivery. Used by warehouse systems and customer notifications. Defaults to PENDING."),
    items: z.array(ProductOrderItemSchema).min(1, "Order must have at least one item").describe("Products in this order with quantities, pricing, and variants. Minimum one item required for valid order."),
    customerId: z.string().describe("References Customer who placed this order. Links to customer profile for order history, preferences, and communication."),

    customer: OrderCustomerSchema.optional().describe("Populated customer information for convenient access. Includes name, contact details, billing and shipping addresses from order.schema.ts."),
    pricing: OrderPricingSchema.describe("Complete pricing breakdown including subtotal, tax, shipping fees, and discounts. From order.schema.ts for consistent pricing across order types."),

    // Payment
    paymentStatus: z.enum(PaymentStatus).default(PaymentStatus.PENDING).describe("Payment processing status. Tracks whether order is paid, pending, failed, or refunded. Defaults to PENDING."),
    paymentMethod: z.string().optional().describe("Payment method used (e.g., 'credit_card', 'paypal', 'bank_transfer'). Captured for accounting and reconciliation."),
    paymentReference: z.string().optional().describe("External payment system reference or transaction ID. Used for payment verification and dispute resolution."),
    billingAddress: OrderAddress.optional().describe("Billing address for payment processing and invoicing. May differ from shipping address. Uses OrderAddress from order.schema.ts with delivery instructions support."),

    // Retail-specific timing
    orderDate: z.number().describe("Unix timestamp when order was placed. Used for order history, analytics, and time-based reporting."),
    requestedDeliveryDate: z.number().optional().describe("Unix timestamp for customer's requested delivery date. Used for logistics planning and shipment scheduling."),
    shippedDate: z.number().optional().describe("Unix timestamp when order was shipped. Triggers customer shipment notifications via AI Powered Services."),
    shippingAddress: OrderAddress.optional().describe("Delivery address for shipment. Uses OrderAddress from order.schema.ts with delivery instructions field for courier guidance."),
    deliveredDate: z.number().optional().describe("Unix timestamp when order was delivered to customer. Used for order completion tracking and delivery performance metrics."),

    // Shipping info
    shippingMethod: z.string().optional().describe("Shipping service level (e.g., 'Standard', 'Express', 'Overnight'). Determines delivery timeframe and shipping cost."),
    trackingNumber: z.string().optional().describe("Carrier tracking number for shipment monitoring. Enables customer self-service tracking and delivery status updates."),
    shippingCarrier: z.string().optional().describe("Shipping carrier name (e.g., 'UPS', 'FedEx', 'USPS'). Links tracking number to carrier's tracking system."),

    // Integration
    externalOrderId: z.string().optional().describe("Order ID from external system (e-commerce platform, marketplace, ERP). Enables order synchronization and cross-platform tracking."),
    source: z.string().default('direct').describe("Order source channel (e.g., 'direct', 'web', 'marketplace', 'wholesale'). Used for attribution tracking and channel analytics. Defaults to 'direct'."),
    cancelReason: z.string().nullable().optional().describe("Reason provided when order is cancelled. Used for analytics, refund processing, and customer service follow-up."),
    notes: z.string().nullable().optional().describe("Internal operational notes about this order. Not visible to customers; used by warehouse and fulfillment staff for coordination."),
    serviceConversationConfigId: z.string().nullable().optional().describe("References the AI Powered Services conversation configuration that powered this order. Links order to deployment channel and conversation history."),
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
    id: z.string().describe("Unique identifier of the ProductOrder to update status for."),
    status: z.enum(OrderStatus).describe("New order status to transition to (e.g., from PENDING to PROCESSING to SHIPPED to DELIVERED). Validates against OrderStatus enum for workflow consistency."),
    shippedDate: z.number().optional().describe("Unix timestamp when order was shipped. Set when status transitions to SHIPPED; triggers customer notification."),
    deliveredDate: z.number().optional().describe("Unix timestamp when order was delivered. Set when status transitions to DELIVERED or COMPLETED; used for performance tracking."),
    trackingNumber: z.string().optional().describe("Carrier tracking number added when order ships. Enables customer shipment monitoring and delivery status updates."),
});

/**
 * Schema for inventory updates triggered by order fulfillment.
 */
export const OrderInventoryUpdateSchema = z.object({
    orderId: z.string().describe("References ProductOrder that triggered this inventory update. Links inventory deductions to specific order for audit trail and reconciliation."),
    inventoryAdjustments: z.array(z.object({
        productId: z.string().describe("References Product from product-config.schema to deduct inventory from. Matches ProductOrderItem.productId for accurate inventory tracking."),
        quantityUsed: z.number().describe("Quantity to deduct from Product.stockQuantity. Matches ordered quantity for standard fulfillment; may differ if partial shipment or backorder occurs."),
        reason: z.literal('order_fulfillment').describe("Fixed reason code for inventory adjustment. Always 'order_fulfillment' for Product Order driven inventory updates."),
    })).describe("Array of inventory deductions required to fulfill this Product Order. Applied to Product Management when order status transitions to PROCESSING or SHIPPED."),
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
