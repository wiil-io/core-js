import z from "zod";
import { BaseModelSchema } from "../base.schema";
import { OrderCustomerSchema, OrderPricingSchema } from "./order.schema";
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
export const MenuOrderItemBaseSchema = z.object({
    menuItemId: z.string().describe("References MenuItem from menu-config.schema that is being ordered. Links order item to catalog for pricing, availability, and preparation details."),
    itemName: z.string().describe("Display name of the menu item captured at order time. Preserved even if catalog item is later renamed, ensuring historical order accuracy."),
    quantity: z.number().int().positive().describe("Number of units ordered for this menu item. Used for pricing calculations and kitchen preparation quantities."),
    unitPrice: z.number().nonnegative().describe("Price per unit at the time of order. Captures pricing snapshot for order integrity even if catalog prices change later."),
    totalPrice: z.number().nonnegative().describe("Total price for this line item: unitPrice × quantity + customization costs. Used in order subtotal calculations."),

    // Restaurant-specific
    specialInstructions: z.string().optional().describe("Customer's special preparation requests (e.g., 'no onions', 'extra sauce', 'well done'). Communicated to kitchen staff for customized preparation."),
    customizations: z.array(z.object({
        name: z.string().describe("Customization option name (e.g., 'Extra Cheese', 'Gluten-Free Bread', 'Add Bacon')."),
        value: z.string().describe("Selected customization value or specification (e.g., 'Yes', 'Large', 'On the side')."),
        additionalCost: z.number().nonnegative().default(0).describe("Extra charge for this customization. Defaults to 0 for no-cost modifications.")
    })).optional().describe("Item customizations with pricing. Enables upselling and personalization in AI-powered Menu Order conversations."),

    status: z.enum(OrderStatus).default(OrderStatus.PENDING).describe("Current preparation status of this individual item. Enables per-item tracking in kitchen workflow. Defaults to PENDING."),
    preparationTime: z.number().int().positive().optional().describe("Estimated preparation time in minutes for this specific item. Used for kitchen scheduling and customer ready-time estimates."),
    notes: z.string().optional().describe("Internal notes about this item for kitchen or service staff. Not visible to customers.")
});

/**
 * Menu order item schema with IDs (for existing items).
 */
export const MenuOrderItemSchema = MenuOrderItemBaseSchema.safeExtend({
    id: z.string().describe("Unique identifier for this menu order item instance."),
    menuOrderId: z.string().describe("References parent MenuOrder this item belongs to. Maintains order-item relationship for order management and fulfillment tracking."),
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
export const MenuOrderSchema = BaseModelSchema.safeExtend({
    id: z.string().describe("Unique identifier for this menu order transaction powered by AI Powered Services."),
    orderNumber: z.string().optional().describe("Human-readable order number displayed to customers and staff (e.g., '#1234', 'A-42'). Generated by Menu Management for easy reference and communication."),

    type: z.enum(MenuOrderType).describe("Order fulfillment type: DINE_IN (eat at restaurant), TAKEOUT (customer pickup), or DELIVERY (courier delivery). Determines workflow and address requirements."),
    status: z.enum(OrderStatus).default(OrderStatus.PENDING).describe("Current order status tracking progression from placement to fulfillment. Used by kitchen display systems and customer notifications. Defaults to PENDING."),
    items: z.array(MenuOrderItemSchema).min(1, "Order must have at least one item").describe("Menu items in this order with quantities, pricing, and customizations. Minimum one item required for valid order."),
    customerId: z.string().describe("References Customer who placed this order. Links to customer profile for order history, preferences, and communication."),
    customer: OrderCustomerSchema.optional().describe("Populated customer information for convenient access. Includes name, contact details, and delivery address from order.schema.ts."),
    pricing: OrderPricingSchema.describe("Complete pricing breakdown including subtotal, tax, tip, delivery fees, and discounts. From order.schema.ts for consistent pricing across order types."),

    // Payment
    paymentStatus: z.enum(PaymentStatus).default(PaymentStatus.PENDING).describe("Payment processing status. Tracks whether order is paid, pending, failed, or refunded. Defaults to PENDING."),
    paymentMethod: z.string().optional().describe("Payment method used (e.g., 'credit_card', 'cash', 'digital_wallet'). Captured for accounting and reconciliation."),
    paymentReference: z.string().optional().describe("External payment system reference or transaction ID. Used for payment verification and dispute resolution."),

    // Restaurant-specific timing
    orderDate: z.number().describe("Unix timestamp when order was placed. Used for order history, analytics, and time-based reporting."),
    requestedTime: z.number().optional().describe("Unix timestamp for customer's requested pickup or delivery time. Used for scheduling kitchen preparation and delivery coordination."),
    estimatedReadyTime: z.number().optional().describe("Unix timestamp when kitchen estimates order will be ready. Communicated to customers via AI Powered Services and used for pickup/delivery scheduling."),
    actualReadyTime: z.number().optional().describe("Unix timestamp when order was actually completed and ready. Used for performance tracking and customer communication accuracy."),

    // Restaurant-specific requests
    specialInstructions: z.string().optional().describe("Order-level special instructions from customer (e.g., 'ring doorbell', 'leave at door', 'call upon arrival'). Applies to entire order vs item-specific instructions."),
    allergies: z.array(z.string()).optional().describe("Customer's allergy information for this order (e.g., ['peanuts', 'shellfish']). Critical for kitchen safety protocols and cross-contamination prevention."),
    tableNumber: z.string().optional().describe("Table number for DINE_IN orders. Links order to physical location for server delivery and bill management."),

    // Integration
    externalOrderId: z.string().optional().describe("Order ID from external system (third-party delivery platform, POS system). Enables order synchronization and cross-platform tracking."),
    source: z.string().default('direct').describe("Order source channel (e.g., 'direct', 'web', 'phone', 'third_party_platform'). Used for attribution tracking and channel analytics. Defaults to 'direct'."),
    cancelReason: z.string().nullable().optional().describe("Reason provided when order is cancelled. Used for analytics, process improvement, and customer service follow-up."),
    notes: z.string().nullable().optional().describe("Internal operational notes about this order. Not visible to customers; used by staff for coordination and special handling."),
    serviceConversationConfigId: z.string().nullable().optional().describe("References the AI Powered Services conversation configuration that powered this order. Links order to deployment channel and conversation history."),
    deliveryAddress: z.object({
        street: z.string().describe("Delivery street address for DELIVERY type orders. Primary location for courier navigation."),
        city: z.string().optional().describe("Delivery city for regional routing and delivery fee calculation."),
        postalCode: z.string().optional().describe("Delivery postal code for address validation and delivery zone determination."),
    }).optional().describe("Delivery address for DELIVERY type orders. Required when type is DELIVERY; unused for DINE_IN or TAKEOUT."),
});

/**
 * Schema for creating a new menu order.
 * Omits auto-generated fields and uses base items without IDs.
 */
export const CreateMenuOrderSchema = MenuOrderSchema.omit({
    id: true,
    orderNumber: true,
    createdAt: true,
    updatedAt: true,
    actualReadyTime: true,
    items: true,
    cancelReason: true,
    serviceConversationConfigId: true,
}).safeExtend({
    items: z.array(MenuOrderItemBaseSchema).min(1, "Order must have at least one item"),
    cancelReason: z.string().nullable().optional(),
});

/**
 * Schema for updating an existing menu order.
 * All fields are optional except id.
 */
export const UpdateMenuOrderSchema = CreateMenuOrderSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Quick status update schema for menu orders.
 */
export const UpdateMenuOrderStatusSchema = z.object({
    id: z.string().describe("Unique identifier of the MenuOrder to update status for."),
    status: z.enum(OrderStatus).describe("New order status to transition to (e.g., from PENDING to PREPARING to READY). Validates against OrderStatus enum for workflow consistency."),
    estimatedReadyTime: z.number().optional().describe("Updated Unix timestamp for estimated completion. Used when kitchen adjusts timing based on current workload or delays."),
    actualReadyTime: z.number().optional().describe("Unix timestamp when order was actually completed. Set when status transitions to READY or COMPLETED for performance tracking."),
});

// Type exports
export type MenuOrderItemBase = z.infer<typeof MenuOrderItemBaseSchema>;
export type MenuOrderItem = z.infer<typeof MenuOrderItemSchema>;
export type MenuOrder = z.infer<typeof MenuOrderSchema>;
export type CreateMenuOrder = z.infer<typeof CreateMenuOrderSchema>;
export type UpdateMenuOrder = z.infer<typeof UpdateMenuOrderSchema>;
export type UpdateMenuOrderStatus = z.infer<typeof UpdateMenuOrderStatusSchema>;
export type CreateMenuOrderItem = z.infer<typeof MenuOrderItemBaseSchema>;
