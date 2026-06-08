import z from "zod";
import { BaseModelSchemaWithAudit } from "../../../base.schema";
import { ExternalRefSchema } from "../../../definitions/general";
import { OrderStatus, PaymentStatus, ProductOrderType } from "../../constants";
import { OrderAddress, OrderCustomerSchema, OrderPricingSchema } from "../order.schema";




// Base product order item schema (without productOrderId for creation)
export const ProductOrderItemBaseSchema = z.object({
    productId: z.string().describe("Product ID being ordered"),
    variantId: z.string().describe("Product variant ID being ordered"),
    productSetId: z.string().nullable().optional().describe("Original product set ID if this item came from a set"),
    itemName: z.string().describe("Name of the product"),
    sku: z.string().nullable().default(null).describe("Product SKU"),
    quantity: z.number().int().positive().describe("Quantity ordered"),
    unitPrice: z.number().nonnegative().describe("Price per unit"),
    totalPrice: z.number().nonnegative().describe("Total price for this item"),
    priceEntryId: z.string().nullable().default(null).describe("Price entry ID that determined this unit price"),

    // Retail-specific
    warrantyInfo: z.string().nullable().default(null).describe("Warranty information"),

    status: z.enum(OrderStatus).default(OrderStatus.PENDING).describe("Item status"),
    notes: z.string().nullable().default(null).describe("Additional notes")
});

// Product order item schema with IDs (for existing items)
export const ProductOrderItemSchema = ProductOrderItemBaseSchema.safeExtend({
    id: z.string().describe("Unique order item ID"),
    productOrderId: z.string().describe("Product order ID this item belongs to"),
});

// Product Order Schema - for retail/product sales
export const ProductOrderSchema = BaseModelSchemaWithAudit.safeExtend({
    id: z.string().describe("Unique order ID"),
    organizationId: z.string().describe("Business account ID"),
    locationId: z.string().nullable().optional().describe("Business location ID"),
    channelId: z.string().nullable().optional().describe("Channel ID for multi-channel orders (e.g., doordash, uber-eats)"),
    terminalId: z.string().nullable().default(null).describe("Terminal/register ID that created the order"),
    operatorId: z.string().nullable().default(null).describe("Operator/staff user ID that created the order"),
    orderNumber: z.string().nullable().default(null).describe("Human-readable order number"),
    // type: z.enum(ProductOrderType).describe("Product order type (online, in-store, pickup)"),
    status: z.enum(OrderStatus).default(OrderStatus.PENDING),
    items: z.array(ProductOrderItemSchema).min(1, "Order must have at least one item"),

    // Pricing context
    priceListId: z.string().nullable().default(null).describe("Price list used for this order"),

    customerId: z.string().describe("ID of the customer placing the order"),

    customer: OrderCustomerSchema.nullable().optional().describe("Customer details for the order"),
    pricing: OrderPricingSchema.describe("Pricing details for the order"),

    // Payment
    paymentStatus: z.enum(PaymentStatus).default(PaymentStatus.PENDING),
    paymentMethod: z.string().nullable().default(null),
    paymentReference: z.string().nullable().default(null),
    billingAddress: OrderAddress.nullable().optional(),

    // Retail-specific timing
    orderDate: z.number(),
    requestedDeliveryDate: z.number().nullable().default(null),
    shippedDate: z.number().nullable().default(null),
    shippingAddress: OrderAddress.nullable().optional(),
    shippingAddressId: z.string().nullable().optional().describe("Reference to a saved shipping address"),
    deliveredDate: z.number().nullable().default(null),

    // Shipping info
    shippingMethod: z.string().nullable().default(null),
    trackingNumber: z.string().nullable().default(null),
    shippingCarrier: z.string().nullable().default(null),

    // Integration
    externalRef: ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced)"),
    cancelReason: z.string().nullable().default(null).describe("Reason for cancellation, if applicable"),
    notes: z.string().nullable().default(null).describe("Additional notes"),
    serviceConversationConfigId: z.string().nullable().default(null).describe("Configuration ID for service conversation"),
});

// Create schemas
export const CreateProductOrderSchema = ProductOrderSchema.omit({
    id: true,
    orderNumber: true,
    createdAt: true,
    updatedAt: true,
    createdBy: true,
    updatedBy: true,
    deletedAt: true,
    deletedBy: true,
    uniqueKey: true,
    version: true,
    deliveredDate: true,
    shippedDate: true,
    customer: true,
    items: true, // Omit items with IDs
    cancelReason: true
}).safeExtend({
    items: z.array(ProductOrderItemBaseSchema).min(1, "Order must have at least one item").describe("Items to order"),
});

// Update schemas
export const UpdateProductOrderSchema = CreateProductOrderSchema.partial().safeExtend({
    id: z.string(),
    cancelReason: z.string().nullable().default(null).describe("Reason for cancellation, if applicable"),
});

// Quick status update schemas
export const UpdateProductOrderStatusSchema = z.object({
    id: z.string(),
    status: z.enum(OrderStatus),
    shippedDate: z.number().nullable().default(null),
    deliveredDate: z.number().nullable().default(null),
    trackingNumber: z.string().nullable().default(null),
});

export const ProductOrderPricingPreviewSchema = z.object({
    success: z.boolean(),
    items: z.array(ProductOrderItemBaseSchema),
    pricing: OrderPricingSchema.nullable(),
    errors: z.array(z.string()),
    warnings: z.array(z.string()),
});




// Add to your order completion logic
export const OrderInventoryUpdateSchema = z.object({
    orderId: z.string().describe("Order ID triggering inventory update"),
    orderStatus: z.enum(OrderStatus).describe("Status of the order triggering the inventory adjustment"),
    inventoryAdjustments: z.array(z.object({
        productId: z.string().describe("Product ID to adjust"),
        variantId: z.string().describe("Variant ID to adjust"),
        quantity: z.number().describe("Quantity to adjust in inventory"),
        reason: z.literal('order_fulfillment').describe("Reason for adjustment"),
    })).describe("List of inventory adjustments"),
});


// Type exports
export type ProductOrderItemBase = z.infer<typeof ProductOrderItemBaseSchema>;
export type ProductOrderItem = z.infer<typeof ProductOrderItemSchema>;
export type ProductOrder = z.infer<typeof ProductOrderSchema>;
export type CreateProductOrder = z.infer<typeof CreateProductOrderSchema>;
export type UpdateProductOrder = z.infer<typeof UpdateProductOrderSchema>;
export type UpdateProductOrderStatus = z.infer<typeof UpdateProductOrderStatusSchema>;
export type ProductOrderPricingPreview = z.infer<typeof ProductOrderPricingPreviewSchema>;
export type CreateProductOrderItem = z.infer<typeof ProductOrderItemBaseSchema>;

export type OrderInventoryUpdate = z.infer<typeof OrderInventoryUpdateSchema>;


// Query Options
export interface ProductOrderFilters {
    search?: string;
    locationId?: string;
    channelId?: string;
    terminalId?: string;
    operatorId?: string;
    status?: OrderStatus[];
    paymentStatus?: PaymentStatus[];
    customerId?: string;
    shippingMethod?: string;
    externalSource?: string;
    dateRange?: { start?: number; end?: number; };
    includeDeleted?: boolean;
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
