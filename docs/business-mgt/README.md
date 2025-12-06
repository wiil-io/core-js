[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.29**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../README.md) / business-mgt

# business-mgt

## Fileoverview

Central export point for business management schemas.

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [CreateCustomer](type-aliases/CreateCustomer.md) | Schema for creating a new customer. Omits auto-generated fields. |
| [UpdateCustomer](type-aliases/UpdateCustomer.md) | Schema for updating an existing customer. All fields are optional except id. |
| [Customer](type-aliases/Customer.md) | Customer schema - Individual customer record. |
| [MenuCategory](type-aliases/MenuCategory.md) | Type definition for menu category. |
| [BusinessMenuItem](type-aliases/BusinessMenuItem.md) | Type definition for business menu item. |
| [MenuQRCode](type-aliases/MenuQRCode.md) | Type definition for menu QR code. |
| [CreateMenuCategory](type-aliases/CreateMenuCategory.md) | Type definition for creating a menu category. |
| [CreateBusinessMenuItem](type-aliases/CreateBusinessMenuItem.md) | Type definition for creating a business menu item. |
| [UpdateMenuCategory](type-aliases/UpdateMenuCategory.md) | Type definition for updating a menu category. |
| [UpdateBusinessMenuItem](type-aliases/UpdateBusinessMenuItem.md) | Type definition for updating a business menu item. |
| [MenuOrderItemBase](type-aliases/MenuOrderItemBase.md) | Base menu order item schema (without IDs for creation). |
| [MenuOrderItem](type-aliases/MenuOrderItem.md) | Menu order item schema with IDs (for existing items). |
| [MenuOrder](type-aliases/MenuOrder.md) | Menu order schema - for restaurants/food service. |
| [CreateMenuOrder](type-aliases/CreateMenuOrder.md) | Schema for creating a new menu order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateMenuOrder](type-aliases/UpdateMenuOrder.md) | Schema for updating an existing menu order. All fields are optional except id. |
| [UpdateMenuOrderStatus](type-aliases/UpdateMenuOrderStatus.md) | Quick status update schema for menu orders. |
| [CreateMenuOrderItem](type-aliases/CreateMenuOrderItem.md) | Base menu order item schema (without IDs for creation). |
| [OrderAddress](type-aliases/OrderAddress.md) | Order address schema extending base address with delivery instructions. |
| [OrderCustomer](type-aliases/OrderCustomer.md) | Shared customer schema for orders. |
| [OrderPricing](type-aliases/OrderPricing.md) | Shared pricing schema for orders. |
| [ProductCategory](type-aliases/ProductCategory.md) | Product category schema. |
| [CreateProductCategory](type-aliases/CreateProductCategory.md) | Schema for creating a new product category. Omits auto-generated fields. |
| [UpdateProductCategory](type-aliases/UpdateProductCategory.md) | Schema for updating an existing product category. All fields are optional except id. |
| [BusinessProduct](type-aliases/BusinessProduct.md) | Business product schema. |
| [CreateBusinessProduct](type-aliases/CreateBusinessProduct.md) | Schema for creating a new business product. Omits auto-generated fields and category object. |
| [UpdateBusinessProduct](type-aliases/UpdateBusinessProduct.md) | Schema for updating an existing business product. All fields are optional except id. |
| [ProductOrderItemBase](type-aliases/ProductOrderItemBase.md) | Base product order item schema (without productOrderId for creation). |
| [ProductOrderItem](type-aliases/ProductOrderItem.md) | Product order item schema with IDs (for existing items). |
| [ProductOrder](type-aliases/ProductOrder.md) | Product order schema - for retail/product sales. |
| [CreateProductOrder](type-aliases/CreateProductOrder.md) | Schema for creating a new product order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateProductOrder](type-aliases/UpdateProductOrder.md) | Schema for updating an existing product order. All fields are optional except id. |
| [UpdateProductOrderStatus](type-aliases/UpdateProductOrderStatus.md) | Quick status update schema for product orders. |
| [CreateProductOrderItem](type-aliases/CreateProductOrderItem.md) | Base product order item schema (without productOrderId for creation). |
| [OrderInventoryUpdate](type-aliases/OrderInventoryUpdate.md) | Schema for inventory updates triggered by order fulfillment. |
| [Resource](type-aliases/Resource.md) | Main resource schema for managing reservable resources. |
| [CreateResource](type-aliases/CreateResource.md) | Schema for creating a new resource. Omits auto-generated fields. |
| [UpdateResource](type-aliases/UpdateResource.md) | Schema for updating an existing resource. All fields are optional except id. |
| [ReservationSettings](type-aliases/ReservationSettings.md) | Reservation settings schema. |
| [UpdateReservationSettings](type-aliases/UpdateReservationSettings.md) | Schema for updating existing reservation settings. All fields are optional except id. |
| [Reservation](type-aliases/Reservation.md) | Reservation schema for managing bookings. |
| [CreateReservation](type-aliases/CreateReservation.md) | Schema for creating a new reservation. Omits auto-generated fields. |
| [UpdateReservation](type-aliases/UpdateReservation.md) | Schema for updating an existing reservation. All fields are optional except id. |
| [ServiceAppointment](type-aliases/ServiceAppointment.md) | Service appointment schema. |
| [CreateServiceAppointment](type-aliases/CreateServiceAppointment.md) | Schema for creating a new service appointment. Omits auto-generated fields. |
| [UpdateServiceAppointment](type-aliases/UpdateServiceAppointment.md) | Schema for updating an existing service appointment. All fields are optional except id. |
| [BusinessService](type-aliases/BusinessService.md) | Business service configuration schema. |
| [ServiceQRCode](type-aliases/ServiceQRCode.md) | Service QR code schema for appointment booking. |
| [CreateBusinessService](type-aliases/CreateBusinessService.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [UpdateBusinessService](type-aliases/UpdateBusinessService.md) | Schema for updating an existing business service. All fields are optional except id. |
| [ServicePerson](type-aliases/ServicePerson.md) | Service person schema - Complete service person record. |
| [CreateServicePerson](type-aliases/CreateServicePerson.md) | Schema for creating a new service person. Omits auto-generated fields. |
| [UpdateServicePerson](type-aliases/UpdateServicePerson.md) | Schema for updating an existing service person. All fields are optional except id. |

## Variables

| Variable | Description |
| ------ | ------ |
| [CustomerSchema](variables/CustomerSchema.md) | Customer schema - Individual customer record. |
| [CreateCustomerSchema](variables/CreateCustomerSchema.md) | Schema for creating a new customer. Omits auto-generated fields. |
| [UpdateCustomerSchema](variables/UpdateCustomerSchema.md) | Schema for updating an existing customer. All fields are optional except id. |
| [MenuCategorySchema](variables/MenuCategorySchema.md) | - |
| [BusinessMenuItemSchema](variables/BusinessMenuItemSchema.md) | - |
| [MenuQRCodeSchema](variables/MenuQRCodeSchema.md) | - |
| [CreateMenuCategorySchema](variables/CreateMenuCategorySchema.md) | Zod schema for creating a new menu category. |
| [CreateBusinessMenuItemSchema](variables/CreateBusinessMenuItemSchema.md) | Zod schema for creating a new business menu item. |
| [UpdateMenuCategorySchema](variables/UpdateMenuCategorySchema.md) | Zod schema for updating an existing menu category. |
| [UpdateBusinessMenuItemSchema](variables/UpdateBusinessMenuItemSchema.md) | Zod schema for updating an existing business menu item. |
| [MenuOrderItemBaseSchema](variables/MenuOrderItemBaseSchema.md) | Base menu order item schema (without IDs for creation). |
| [MenuOrderItemSchema](variables/MenuOrderItemSchema.md) | Menu order item schema with IDs (for existing items). |
| [MenuOrderSchema](variables/MenuOrderSchema.md) | Menu order schema - for restaurants/food service. |
| [CreateMenuOrderSchema](variables/CreateMenuOrderSchema.md) | Schema for creating a new menu order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateMenuOrderSchema](variables/UpdateMenuOrderSchema.md) | Schema for updating an existing menu order. All fields are optional except id. |
| [UpdateMenuOrderStatusSchema](variables/UpdateMenuOrderStatusSchema.md) | Quick status update schema for menu orders. |
| [OrderAddress](variables/OrderAddress.md) | Order address schema extending base address with delivery instructions. |
| [OrderCustomerSchema](variables/OrderCustomerSchema.md) | Shared customer schema for orders. |
| [OrderPricingSchema](variables/OrderPricingSchema.md) | Shared pricing schema for orders. |
| [ProductCategorySchema](variables/ProductCategorySchema.md) | Product category schema. |
| [BusinessProductSchema](variables/BusinessProductSchema.md) | Business product schema. |
| [CreateProductCategorySchema](variables/CreateProductCategorySchema.md) | Schema for creating a new product category. Omits auto-generated fields. |
| [UpdateProductCategorySchema](variables/UpdateProductCategorySchema.md) | Schema for updating an existing product category. All fields are optional except id. |
| [CreateBusinessProductSchema](variables/CreateBusinessProductSchema.md) | Schema for creating a new business product. Omits auto-generated fields and category object. |
| [UpdateBusinessProductSchema](variables/UpdateBusinessProductSchema.md) | Schema for updating an existing business product. All fields are optional except id. |
| [ProductOrderItemBaseSchema](variables/ProductOrderItemBaseSchema.md) | Base product order item schema (without productOrderId for creation). |
| [ProductOrderItemSchema](variables/ProductOrderItemSchema.md) | Product order item schema with IDs (for existing items). |
| [ProductOrderSchema](variables/ProductOrderSchema.md) | Product order schema - for retail/product sales. |
| [CreateProductOrderSchema](variables/CreateProductOrderSchema.md) | Schema for creating a new product order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateProductOrderSchema](variables/UpdateProductOrderSchema.md) | Schema for updating an existing product order. All fields are optional except id. |
| [UpdateProductOrderStatusSchema](variables/UpdateProductOrderStatusSchema.md) | Quick status update schema for product orders. |
| [OrderInventoryUpdateSchema](variables/OrderInventoryUpdateSchema.md) | Schema for inventory updates triggered by order fulfillment. |
| [RoomResourceSchema](variables/RoomResourceSchema.md) | Room resource schema for hotel/accommodation bookings. |
| [RentalResourceSchema](variables/RentalResourceSchema.md) | Rental resource schema for hourly rentals. |
| [ResourceSchema](variables/ResourceSchema.md) | Main resource schema for managing reservable resources. |
| [CreateResourceSchema](variables/CreateResourceSchema.md) | Schema for creating a new resource. Omits auto-generated fields. |
| [UpdateResourceSchema](variables/UpdateResourceSchema.md) | Schema for updating an existing resource. All fields are optional except id. |
| [ReservationSettingsSchema](variables/ReservationSettingsSchema.md) | Reservation settings schema. |
| [UpdateReservationSettingsSchema](variables/UpdateReservationSettingsSchema.md) | Schema for updating existing reservation settings. All fields are optional except id. |
| [ReservationSchema](variables/ReservationSchema.md) | Reservation schema for managing bookings. |
| [CreateReservationSchema](variables/CreateReservationSchema.md) | Schema for creating a new reservation. Omits auto-generated fields. |
| [UpdateReservationSchema](variables/UpdateReservationSchema.md) | Schema for updating an existing reservation. All fields are optional except id. |
| [ServiceAppointmentSchema](variables/ServiceAppointmentSchema.md) | Service appointment schema. |
| [CreateServiceAppointmentSchema](variables/CreateServiceAppointmentSchema.md) | Schema for creating a new service appointment. Omits auto-generated fields. |
| [UpdateServiceAppointmentSchema](variables/UpdateServiceAppointmentSchema.md) | Schema for updating an existing service appointment. All fields are optional except id. |
| [BusinessServiceConfigSchema](variables/BusinessServiceConfigSchema.md) | Business service configuration schema. |
| [ServiceQRCodeSchema](variables/ServiceQRCodeSchema.md) | Service QR code schema for appointment booking. |
| [CreateBusinessServiceSchema](variables/CreateBusinessServiceSchema.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [UpdateBusinessServiceSchema](variables/UpdateBusinessServiceSchema.md) | Schema for updating an existing business service. All fields are optional except id. |
| [ServicePersonSchema](variables/ServicePersonSchema.md) | Service person schema - Complete service person record. |
| [CreateServicePersonSchema](variables/CreateServicePersonSchema.md) | Schema for creating a new service person. Omits auto-generated fields. |
| [UpdateServicePersonSchema](variables/UpdateServicePersonSchema.md) | Schema for updating an existing service person. All fields are optional except id. |
