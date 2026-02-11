"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuOrderStatusSchema = exports.UpdateMenuOrderSchema = exports.CreateMenuOrderSchema = exports.MenuOrderSchema = exports.MenuOrderItemSchema = exports.MenuOrderItemBaseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
const order_schema_1 = require("./order.schema");
const type_definitions_1 = require("../type-definitions");
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
exports.MenuOrderItemBaseSchema = zod_1.default.object({
    menuItemId: zod_1.default.string().describe("References MenuItem from menu-config.schema that is being ordered. Links order item to catalog for pricing, availability, and preparation details."),
    itemName: zod_1.default.string().describe("Display name of the menu item captured at order time. Preserved even if catalog item is later renamed, ensuring historical order accuracy."),
    quantity: zod_1.default.number().int().positive().describe("Number of units ordered for this menu item. Used for pricing calculations and kitchen preparation quantities."),
    unitPrice: zod_1.default.number().nonnegative().describe("Price per unit at the time of order. Captures pricing snapshot for order integrity even if catalog prices change later."),
    totalPrice: zod_1.default.number().nonnegative().describe("Total price for this line item: unitPrice × quantity + customization costs. Used in order subtotal calculations."),
    // Restaurant-specific
    specialInstructions: zod_1.default.string().optional().describe("Customer's special preparation requests (e.g., 'no onions', 'extra sauce', 'well done'). Communicated to kitchen staff for customized preparation."),
    customizations: zod_1.default.array(zod_1.default.object({
        name: zod_1.default.string().describe("Customization option name (e.g., 'Extra Cheese', 'Gluten-Free Bread', 'Add Bacon')."),
        value: zod_1.default.string().describe("Selected customization value or specification (e.g., 'Yes', 'Large', 'On the side')."),
        additionalCost: zod_1.default.number().nonnegative().default(0).describe("Extra charge for this customization. Defaults to 0 for no-cost modifications.")
    })).optional().describe("Item customizations with pricing. Enables upselling and personalization in AI-powered Menu Order conversations."),
    status: zod_1.default.enum(type_definitions_1.OrderStatus).default(type_definitions_1.OrderStatus.PENDING).describe("Current preparation status of this individual item. Enables per-item tracking in kitchen workflow. Defaults to PENDING."),
    preparationTime: zod_1.default.number().int().positive().optional().describe("Estimated preparation time in minutes for this specific item. Used for kitchen scheduling and customer ready-time estimates."),
    notes: zod_1.default.string().optional().describe("Internal notes about this item for kitchen or service staff. Not visible to customers.")
});
/**
 * Menu order item schema with IDs (for existing items).
 */
exports.MenuOrderItemSchema = exports.MenuOrderItemBaseSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this menu order item instance."),
    menuOrderId: zod_1.default.string().describe("References parent MenuOrder this item belongs to. Maintains order-item relationship for order management and fulfillment tracking."),
});
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
exports.MenuOrderSchema = base_schema_1.BaseModelSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this menu order transaction powered by AI Powered Services."),
    orderNumber: zod_1.default.string().optional().describe("Human-readable order number displayed to customers and staff (e.g., '#1234', 'A-42'). Generated by Menu Management for easy reference and communication."),
    type: zod_1.default.enum(type_definitions_1.MenuOrderType).describe("Order fulfillment type: DINE_IN (eat at restaurant), TAKEOUT (customer pickup), or DELIVERY (courier delivery). Determines workflow and address requirements."),
    status: zod_1.default.enum(type_definitions_1.OrderStatus).default(type_definitions_1.OrderStatus.PENDING).describe("Current order status tracking progression from placement to fulfillment. Used by kitchen display systems and customer notifications. Defaults to PENDING."),
    items: zod_1.default.array(exports.MenuOrderItemSchema).min(1, "Order must have at least one item").describe("Menu items in this order with quantities, pricing, and customizations. Minimum one item required for valid order."),
    customerId: zod_1.default.string().describe("References Customer who placed this order. Links to customer profile for order history, preferences, and communication."),
    customer: order_schema_1.OrderCustomerSchema.optional().describe("Populated customer information for convenient access. Includes name, contact details, and delivery address from order.schema.ts."),
    pricing: order_schema_1.OrderPricingSchema.describe("Complete pricing breakdown including subtotal, tax, tip, delivery fees, and discounts. From order.schema.ts for consistent pricing across order types."),
    // Payment
    paymentStatus: zod_1.default.enum(type_definitions_1.PaymentStatus).default(type_definitions_1.PaymentStatus.PENDING).describe("Payment processing status. Tracks whether order is paid, pending, failed, or refunded. Defaults to PENDING."),
    paymentMethod: zod_1.default.string().optional().describe("Payment method used (e.g., 'credit_card', 'cash', 'digital_wallet'). Captured for accounting and reconciliation."),
    paymentReference: zod_1.default.string().optional().describe("External payment system reference or transaction ID. Used for payment verification and dispute resolution."),
    // Restaurant-specific timing
    orderDate: zod_1.default.number().describe("Unix timestamp when order was placed. Used for order history, analytics, and time-based reporting."),
    requestedTime: zod_1.default.number().optional().describe("Unix timestamp for customer's requested pickup or delivery time. Used for scheduling kitchen preparation and delivery coordination."),
    estimatedReadyTime: zod_1.default.number().optional().describe("Unix timestamp when kitchen estimates order will be ready. Communicated to customers via AI Powered Services and used for pickup/delivery scheduling."),
    actualReadyTime: zod_1.default.number().optional().describe("Unix timestamp when order was actually completed and ready. Used for performance tracking and customer communication accuracy."),
    // Restaurant-specific requests
    specialInstructions: zod_1.default.string().optional().describe("Order-level special instructions from customer (e.g., 'ring doorbell', 'leave at door', 'call upon arrival'). Applies to entire order vs item-specific instructions."),
    allergies: zod_1.default.array(zod_1.default.string()).optional().describe("Customer's allergy information for this order (e.g., ['peanuts', 'shellfish']). Critical for kitchen safety protocols and cross-contamination prevention."),
    tableNumber: zod_1.default.string().optional().describe("Table number for DINE_IN orders. Links order to physical location for server delivery and bill management."),
    // Integration
    externalOrderId: zod_1.default.string().optional().describe("Order ID from external system (third-party delivery platform, POS system). Enables order synchronization and cross-platform tracking."),
    source: zod_1.default.string().default('direct').describe("Order source channel (e.g., 'direct', 'web', 'phone', 'third_party_platform'). Used for attribution tracking and channel analytics. Defaults to 'direct'."),
    cancelReason: zod_1.default.string().nullable().optional().describe("Reason provided when order is cancelled. Used for analytics, process improvement, and customer service follow-up."),
    notes: zod_1.default.string().nullable().optional().describe("Internal operational notes about this order. Not visible to customers; used by staff for coordination and special handling."),
    serviceConversationConfigId: zod_1.default.string().nullable().optional().describe("References the AI Powered Services conversation configuration that powered this order. Links order to deployment channel and conversation history."),
    deliveryAddress: zod_1.default.object({
        street: zod_1.default.string().describe("Delivery street address for DELIVERY type orders. Primary location for courier navigation."),
        city: zod_1.default.string().optional().describe("Delivery city for regional routing and delivery fee calculation."),
        postalCode: zod_1.default.string().optional().describe("Delivery postal code for address validation and delivery zone determination."),
    }).optional().describe("Delivery address for DELIVERY type orders. Required when type is DELIVERY; unused for DINE_IN or TAKEOUT."),
});
/**
 * Schema for creating a new menu order.
 * Omits auto-generated fields and uses base items without IDs.
 */
exports.CreateMenuOrderSchema = exports.MenuOrderSchema.omit({
    id: true,
    orderNumber: true,
    createdAt: true,
    updatedAt: true,
    actualReadyTime: true,
    items: true,
    cancelReason: true,
    serviceConversationConfigId: true,
}).safeExtend({
    items: zod_1.default.array(exports.MenuOrderItemBaseSchema).min(1, "Order must have at least one item"),
    cancelReason: zod_1.default.string().nullable().optional(),
});
/**
 * Schema for updating an existing menu order.
 * All fields are optional except id.
 */
exports.UpdateMenuOrderSchema = exports.CreateMenuOrderSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Quick status update schema for menu orders.
 */
exports.UpdateMenuOrderStatusSchema = zod_1.default.object({
    id: zod_1.default.string().describe("Unique identifier of the MenuOrder to update status for."),
    status: zod_1.default.enum(type_definitions_1.OrderStatus).describe("New order status to transition to (e.g., from PENDING to PREPARING to READY). Validates against OrderStatus enum for workflow consistency."),
    estimatedReadyTime: zod_1.default.number().optional().describe("Updated Unix timestamp for estimated completion. Used when kitchen adjusts timing based on current workload or delays."),
    actualReadyTime: zod_1.default.number().optional().describe("Unix timestamp when order was actually completed. Set when status transitions to READY or COMPLETED for performance tracking."),
});
