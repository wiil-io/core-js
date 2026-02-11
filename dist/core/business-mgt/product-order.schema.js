"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInventoryUpdateSchema = exports.UpdateProductOrderStatusSchema = exports.UpdateProductOrderSchema = exports.CreateProductOrderSchema = exports.ProductOrderSchema = exports.ProductOrderItemSchema = exports.ProductOrderItemBaseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
const order_schema_1 = require("./order.schema");
const type_definitions_1 = require("../type-definitions");
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
exports.ProductOrderItemBaseSchema = zod_1.default.object({
    productId: zod_1.default.string().describe("References Product from product-config.schema being ordered. Links order item to catalog for inventory tracking, fulfillment details, and product information."),
    itemName: zod_1.default.string().describe("Display name of the product captured at order time. Preserved even if catalog product is later renamed, ensuring historical order accuracy."),
    sku: zod_1.default.string().optional().describe("Stock Keeping Unit identifier captured at order time for warehouse fulfillment and inventory systems. Links to product catalog SKU for picking and packing."),
    quantity: zod_1.default.number().int().positive().describe("Number of units ordered for this product. Used for inventory deduction, pricing calculations, and fulfillment quantities."),
    unitPrice: zod_1.default.number().nonnegative().describe("Price per unit at the time of order. Captures pricing snapshot for order integrity even if catalog prices change later."),
    totalPrice: zod_1.default.number().nonnegative().describe("Total price for this line item: unitPrice × quantity. Used in order subtotal calculations."),
    // Retail-specific
    selectedVariant: zod_1.default.string().optional().describe("Selected product variant specification (e.g., 'Large/Blue', 'XL', '128GB'). Captured for fulfillment accuracy and inventory tracking of specific variants."),
    warrantyInfo: zod_1.default.string().optional().describe("Warranty terms and coverage details captured at purchase time. Preserved for customer reference and service claim validation."),
    status: zod_1.default.enum(type_definitions_1.OrderStatus).default(type_definitions_1.OrderStatus.PENDING).describe("Current fulfillment status of this individual item. Enables per-item tracking in warehouse workflow. Defaults to PENDING."),
    notes: zod_1.default.string().optional().describe("Internal notes about this item for warehouse or fulfillment staff. Not visible to customers.")
});
/**
 * Product order item schema with IDs (for existing items).
 */
exports.ProductOrderItemSchema = exports.ProductOrderItemBaseSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this product order item instance."),
    productOrderId: zod_1.default.string().describe("References parent ProductOrder this item belongs to. Maintains order-item relationship for order management and fulfillment tracking."),
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
exports.ProductOrderSchema = base_schema_1.BaseModelSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this product order transaction powered by AI Powered Services."),
    orderNumber: zod_1.default.string().optional().describe("Human-readable order number displayed to customers and staff (e.g., 'ORD-12345', 'PO-2024-001'). Generated by Product Management for easy reference and communication."),
    status: zod_1.default.enum(type_definitions_1.OrderStatus).default(type_definitions_1.OrderStatus.PENDING).describe("Current order status tracking progression from placement through fulfillment and delivery. Used by warehouse systems and customer notifications. Defaults to PENDING."),
    items: zod_1.default.array(exports.ProductOrderItemSchema).min(1, "Order must have at least one item").describe("Products in this order with quantities, pricing, and variants. Minimum one item required for valid order."),
    customerId: zod_1.default.string().describe("References Customer who placed this order. Links to customer profile for order history, preferences, and communication."),
    customer: order_schema_1.OrderCustomerSchema.optional().describe("Populated customer information for convenient access. Includes name, contact details, billing and shipping addresses from order.schema.ts."),
    pricing: order_schema_1.OrderPricingSchema.describe("Complete pricing breakdown including subtotal, tax, shipping fees, and discounts. From order.schema.ts for consistent pricing across order types."),
    // Payment
    paymentStatus: zod_1.default.enum(type_definitions_1.PaymentStatus).default(type_definitions_1.PaymentStatus.PENDING).describe("Payment processing status. Tracks whether order is paid, pending, failed, or refunded. Defaults to PENDING."),
    paymentMethod: zod_1.default.string().optional().describe("Payment method used (e.g., 'credit_card', 'paypal', 'bank_transfer'). Captured for accounting and reconciliation."),
    paymentReference: zod_1.default.string().optional().describe("External payment system reference or transaction ID. Used for payment verification and dispute resolution."),
    billingAddress: order_schema_1.OrderAddress.optional().describe("Billing address for payment processing and invoicing. May differ from shipping address. Uses OrderAddress from order.schema.ts with delivery instructions support."),
    // Retail-specific timing
    orderDate: zod_1.default.number().describe("Unix timestamp when order was placed. Used for order history, analytics, and time-based reporting."),
    requestedDeliveryDate: zod_1.default.number().optional().describe("Unix timestamp for customer's requested delivery date. Used for logistics planning and shipment scheduling."),
    shippedDate: zod_1.default.number().optional().describe("Unix timestamp when order was shipped. Triggers customer shipment notifications via AI Powered Services."),
    shippingAddress: order_schema_1.OrderAddress.optional().describe("Delivery address for shipment. Uses OrderAddress from order.schema.ts with delivery instructions field for courier guidance."),
    deliveredDate: zod_1.default.number().optional().describe("Unix timestamp when order was delivered to customer. Used for order completion tracking and delivery performance metrics."),
    // Shipping info
    shippingMethod: zod_1.default.string().optional().describe("Shipping service level (e.g., 'Standard', 'Express', 'Overnight'). Determines delivery timeframe and shipping cost."),
    trackingNumber: zod_1.default.string().optional().describe("Carrier tracking number for shipment monitoring. Enables customer self-service tracking and delivery status updates."),
    shippingCarrier: zod_1.default.string().optional().describe("Shipping carrier name (e.g., 'UPS', 'FedEx', 'USPS'). Links tracking number to carrier's tracking system."),
    // Integration
    externalOrderId: zod_1.default.string().optional().describe("Order ID from external system (e-commerce platform, marketplace, ERP). Enables order synchronization and cross-platform tracking."),
    source: zod_1.default.string().default('direct').describe("Order source channel (e.g., 'direct', 'web', 'marketplace', 'wholesale'). Used for attribution tracking and channel analytics. Defaults to 'direct'."),
    cancelReason: zod_1.default.string().nullable().optional().describe("Reason provided when order is cancelled. Used for analytics, refund processing, and customer service follow-up."),
    notes: zod_1.default.string().nullable().optional().describe("Internal operational notes about this order. Not visible to customers; used by warehouse and fulfillment staff for coordination."),
    serviceConversationConfigId: zod_1.default.string().nullable().optional().describe("References the AI Powered Services conversation configuration that powered this order. Links order to deployment channel and conversation history."),
});
/**
 * Schema for creating a new product order.
 * Omits auto-generated fields and uses base items without IDs.
 */
exports.CreateProductOrderSchema = exports.ProductOrderSchema.omit({
    id: true,
    orderNumber: true,
    createdAt: true,
    updatedAt: true,
    deliveredDate: true,
    shippedDate: true,
    customer: true,
    items: true,
    cancelReason: true,
    serviceConversationConfigId: true,
}).safeExtend({
    items: zod_1.default.array(exports.ProductOrderItemBaseSchema).min(1, "Order must have at least one item"),
});
/**
 * Schema for updating an existing product order.
 * All fields are optional except id.
 */
exports.UpdateProductOrderSchema = exports.CreateProductOrderSchema.partial().safeExtend({
    id: zod_1.default.string(),
    cancelReason: zod_1.default.string().nullable().optional(),
});
/**
 * Quick status update schema for product orders.
 */
exports.UpdateProductOrderStatusSchema = zod_1.default.object({
    id: zod_1.default.string().describe("Unique identifier of the ProductOrder to update status for."),
    status: zod_1.default.enum(type_definitions_1.OrderStatus).describe("New order status to transition to (e.g., from PENDING to PROCESSING to SHIPPED to DELIVERED). Validates against OrderStatus enum for workflow consistency."),
    shippedDate: zod_1.default.number().optional().describe("Unix timestamp when order was shipped. Set when status transitions to SHIPPED; triggers customer notification."),
    deliveredDate: zod_1.default.number().optional().describe("Unix timestamp when order was delivered. Set when status transitions to DELIVERED or COMPLETED; used for performance tracking."),
    trackingNumber: zod_1.default.string().optional().describe("Carrier tracking number added when order ships. Enables customer shipment monitoring and delivery status updates."),
});
/**
 * Schema for inventory updates triggered by order fulfillment.
 */
exports.OrderInventoryUpdateSchema = zod_1.default.object({
    orderId: zod_1.default.string().describe("References ProductOrder that triggered this inventory update. Links inventory deductions to specific order for audit trail and reconciliation."),
    inventoryAdjustments: zod_1.default.array(zod_1.default.object({
        productId: zod_1.default.string().describe("References Product from product-config.schema to deduct inventory from. Matches ProductOrderItem.productId for accurate inventory tracking."),
        quantityUsed: zod_1.default.number().describe("Quantity to deduct from Product.stockQuantity. Matches ordered quantity for standard fulfillment; may differ if partial shipment or backorder occurs."),
        reason: zod_1.default.literal('order_fulfillment').describe("Fixed reason code for inventory adjustment. Always 'order_fulfillment' for Product Order driven inventory updates."),
    })).describe("Array of inventory deductions required to fulfill this Product Order. Applied to Product Management when order status transitions to PROCESSING or SHIPPED."),
});
