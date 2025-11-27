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
    menuItemId: z.string(),
    itemName: z.string(),
    quantity: z.number().int().positive(),
    unitPrice: z.number().nonnegative(),
    totalPrice: z.number().nonnegative(),

    // Restaurant-specific
    specialInstructions: z.string().optional(),
    customizations: z.array(z.object({
        name: z.string(),
        value: z.string(),
        additionalCost: z.number().nonnegative().default(0)
    })).optional(),

    status: z.enum(OrderStatus).default(OrderStatus.PENDING),
    preparationTime: z.number().int().positive().optional(),
    notes: z.string().optional()
});

/**
 * Menu order item schema with IDs (for existing items).
 */
export const MenuOrderItemSchema = MenuOrderItemBaseSchema.safeExtend({
    id: z.string(),
    menuOrderId: z.string(),
});

/**
 * Menu order schema - for restaurants/food service.
 *
 * @typedef {Object} MenuOrder
 * @property {string} id - Unique order ID
 * @property {string} organizationId - Business account ID
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
    id: z.string(),
    organizationId: z.string(),
    orderNumber: z.string().optional(),

    type: z.enum(MenuOrderType),
    status: z.enum(OrderStatus).default(OrderStatus.PENDING),
    items: z.array(MenuOrderItemSchema).min(1, "Order must have at least one item"),
    customerId: z.string(),
    customer: OrderCustomerSchema.optional(),
    pricing: OrderPricingSchema,

    // Payment
    paymentStatus: z.enum(PaymentStatus).default(PaymentStatus.PENDING),
    paymentMethod: z.string().optional(),
    paymentReference: z.string().optional(),

    // Restaurant-specific timing
    orderDate: z.number(),
    requestedTime: z.number().optional(),
    estimatedReadyTime: z.number().optional(),
    actualReadyTime: z.number().optional(),

    // Restaurant-specific requests
    specialInstructions: z.string().optional(),
    allergies: z.array(z.string()).optional(),
    tableNumber: z.string().optional(), // For dine-in

    // Integration
    externalOrderId: z.string().optional(),
    source: z.string().default('direct'),
    cancelReason: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
    serviceConversationConfigId: z.string().nullable().optional(),
    deliveryAddress: z.object({
        street: z.string(),
        city: z.string().optional(),
        postalCode: z.string().optional(),
    }).optional(),
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
    cancelReason: true
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
    id: z.string(),
    status: z.enum(OrderStatus),
    estimatedReadyTime: z.number().optional(),
    actualReadyTime: z.number().optional(),
});

// Type exports
export type MenuOrderItemBase = z.infer<typeof MenuOrderItemBaseSchema>;
export type MenuOrderItem = z.infer<typeof MenuOrderItemSchema>;
export type MenuOrder = z.infer<typeof MenuOrderSchema>;
export type CreateMenuOrder = z.infer<typeof CreateMenuOrderSchema>;
export type UpdateMenuOrder = z.infer<typeof UpdateMenuOrderSchema>;
export type UpdateMenuOrderStatus = z.infer<typeof UpdateMenuOrderStatusSchema>;
export type CreateMenuOrderItem = z.infer<typeof MenuOrderItemBaseSchema>;
