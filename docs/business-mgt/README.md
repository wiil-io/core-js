[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../README.md) / business-mgt

# business-mgt

## Fileoverview

Central export point for business management schemas.

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ServiceDepositStrategy](enumerations/ServiceDepositStrategy.md) | Service deposit strategy options. |
| [ReservationType](enumerations/ReservationType.md) | Reservation type options. |
| [BusinessLocationStatus](enumerations/BusinessLocationStatus.md) | Business location lifecycle status. |
| [MenuSetPricingMode](enumerations/MenuSetPricingMode.md) | Menu set pricing mode. Determines how set pricing is calculated. |
| [MenuSetTargetingMode](enumerations/MenuSetTargetingMode.md) | Menu set targeting mode. Determines how set members are selected. |
| [AttributeDefType](enumerations/AttributeDefType.md) | Attribute definition type. Determines the data type of attribute values. |
| [CategoryLocationScope](enumerations/CategoryLocationScope.md) | Category location scope. Determines whether category is inherited across locations or local. |
| [BarcodeFormat](enumerations/BarcodeFormat.md) | Barcode format types. Supported barcode formats for product identifiers. |
| [ProductSetPricingMode](enumerations/ProductSetPricingMode.md) | Product set pricing mode. Determines how the set price is calculated. |
| [ProductSetTargetingMode](enumerations/ProductSetTargetingMode.md) | Product set targeting mode. Determines how products are selected for the set. |
| [RentalAssignmentStatus](enumerations/RentalAssignmentStatus.md) | Rental assignment lifecycle status. |
| [RentalAssignmentType](enumerations/RentalAssignmentType.md) | Rental assignment lock type. |
| [RoomAssignmentStatus](enumerations/RoomAssignmentStatus.md) | Room assignment lifecycle status. |
| [RoomAssignmentType](enumerations/RoomAssignmentType.md) | Room assignment lock type. |
| [TableAssignmentType](enumerations/TableAssignmentType.md) | Table assignment lock type. |
| [TableAssignmentStatus](enumerations/TableAssignmentStatus.md) | Table assignment lifecycle status. |
| [RentalReservationStatus](enumerations/RentalReservationStatus.md) | Rental reservation lifecycle status. |
| [TableShape](enumerations/TableShape.md) | Rendered table shape for floor plan layouts. |
| [CanvasUnit](enumerations/CanvasUnit.md) | Canvas coordinate unit. |
| [ResourceInstanceStatus](enumerations/ResourceInstanceStatus.md) | Operational status of a physical resource instance. |
| [ResourceRevisionStatus](enumerations/ResourceRevisionStatus.md) | Resource revision lifecycle status. |
| [ResourceRevisionDeriveStrategy](enumerations/ResourceRevisionDeriveStrategy.md) | Strategy for deriving a new resource revision. |
| [ServicePriceMode](enumerations/ServicePriceMode.md) | Service pricing mode options. |
| [ServiceGratuityMode](enumerations/ServiceGratuityMode.md) | Service gratuity mode options. |
| [ServiceAvailabilityMode](enumerations/ServiceAvailabilityMode.md) | Service availability mode options. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BusinessLocationFilters](interfaces/BusinessLocationFilters.md) | Filter options for querying business locations. |
| [BusinessLocationSorting](interfaces/BusinessLocationSorting.md) | Sorting options for business location queries. |
| [BusinessLocationQueryOptions](interfaces/BusinessLocationQueryOptions.md) | Pagination, filtering, and sorting options for business location queries. |
| [CustomerGroupFilters](interfaces/CustomerGroupFilters.md) | Customer group filter options. CustomerGroupFilters |
| [CustomerGroupSorting](interfaces/CustomerGroupSorting.md) | Customer group sorting options. CustomerGroupSorting |
| [CustomerGroupQueryOptions](interfaces/CustomerGroupQueryOptions.md) | Customer group query options. CustomerGroupQueryOptions |
| [CustomerFilters](interfaces/CustomerFilters.md) | Customer filter options. CustomerFilters |
| [CustomerSorting](interfaces/CustomerSorting.md) | Customer sorting options. CustomerSorting |
| [CustomerQueryOptions](interfaces/CustomerQueryOptions.md) | Customer query options. CustomerQueryOptions |
| [ShippingAddressFilters](interfaces/ShippingAddressFilters.md) | Shipping address filter options. ShippingAddressFilters |
| [ShippingAddressSorting](interfaces/ShippingAddressSorting.md) | Shipping address sorting options. ShippingAddressSorting |
| [ShippingAddressQueryOptions](interfaces/ShippingAddressQueryOptions.md) | Shipping address query options. ShippingAddressQueryOptions |
| [DiscountRuleFilters](interfaces/DiscountRuleFilters.md) | Discount rule filter options. DiscountRuleFilters |
| [DiscountRuleSorting](interfaces/DiscountRuleSorting.md) | Discount rule sorting options. DiscountRuleSorting |
| [DiscountRuleQueryOptions](interfaces/DiscountRuleQueryOptions.md) | Discount rule query options. DiscountRuleQueryOptions |
| [BusinessMenuItemFilters](interfaces/BusinessMenuItemFilters.md) | Business menu item filter options. BusinessMenuItemFilters |
| [BusinessMenuItemSorting](interfaces/BusinessMenuItemSorting.md) | Business menu item sorting options. BusinessMenuItemSorting |
| [BusinessMenuItemQueryOptions](interfaces/BusinessMenuItemQueryOptions.md) | Business menu item query options. BusinessMenuItemQueryOptions |
| [MenuItemVariantFilters](interfaces/MenuItemVariantFilters.md) | Menu item variant filter options. MenuItemVariantFilters |
| [MenuItemVariantSorting](interfaces/MenuItemVariantSorting.md) | Menu item variant sorting options. MenuItemVariantSorting |
| [MenuItemVariantQueryOptions](interfaces/MenuItemVariantQueryOptions.md) | Menu item variant query options. MenuItemVariantQueryOptions |
| [MenuPricingRuleFilters](interfaces/MenuPricingRuleFilters.md) | Menu pricing rule filter options. MenuPricingRuleFilters |
| [MenuPricingRuleSorting](interfaces/MenuPricingRuleSorting.md) | Menu pricing rule sorting options. MenuPricingRuleSorting |
| [MenuPricingRuleQueryOptions](interfaces/MenuPricingRuleQueryOptions.md) | Menu pricing rule query options. MenuPricingRuleQueryOptions |
| [MenuSetFilters](interfaces/MenuSetFilters.md) | Menu set filter options. MenuSetFilters |
| [MenuSetSorting](interfaces/MenuSetSorting.md) | Menu set sorting options. MenuSetSorting |
| [MenuSetQueryOptions](interfaces/MenuSetQueryOptions.md) | Menu set query options. MenuSetQueryOptions |
| [MenuOrderFilters](interfaces/MenuOrderFilters.md) | Menu order filter options. MenuOrderFilters |
| [MenuOrderSorting](interfaces/MenuOrderSorting.md) | Menu order sorting options. MenuOrderSorting |
| [MenuOrderQueryOptions](interfaces/MenuOrderQueryOptions.md) | Menu order query options. MenuOrderQueryOptions |
| [ModifierGroupFilters](interfaces/ModifierGroupFilters.md) | Modifier group filter options. ModifierGroupFilters |
| [ModifierGroupSorting](interfaces/ModifierGroupSorting.md) | Modifier group sorting options. ModifierGroupSorting |
| [ModifierGroupQueryOptions](interfaces/ModifierGroupQueryOptions.md) | Modifier group query options. ModifierGroupQueryOptions |
| [ModifierOptionFilters](interfaces/ModifierOptionFilters.md) | Modifier option filter options. ModifierOptionFilters |
| [ModifierOptionSorting](interfaces/ModifierOptionSorting.md) | Modifier option sorting options. ModifierOptionSorting |
| [ModifierOptionQueryOptions](interfaces/ModifierOptionQueryOptions.md) | Modifier option query options. ModifierOptionQueryOptions |
| [ItemModifierBindingFilters](interfaces/ItemModifierBindingFilters.md) | Item modifier binding filter options. ItemModifierBindingFilters |
| [ItemModifierBindingSorting](interfaces/ItemModifierBindingSorting.md) | Item modifier binding sorting options. ItemModifierBindingSorting |
| [ItemModifierBindingQueryOptions](interfaces/ItemModifierBindingQueryOptions.md) | Item modifier binding query options. ItemModifierBindingQueryOptions |
| [AttributeDefFilters](interfaces/AttributeDefFilters.md) | Attribute definition filter options. AttributeDefFilters |
| [AttributeDefSorting](interfaces/AttributeDefSorting.md) | Attribute definition sorting options. AttributeDefSorting |
| [AttributeDefQueryOptions](interfaces/AttributeDefQueryOptions.md) | Attribute definition query options. AttributeDefQueryOptions |
| [ProductCategoryFilters](interfaces/ProductCategoryFilters.md) | Product category filter options. ProductCategoryFilters |
| [ProductCategorySorting](interfaces/ProductCategorySorting.md) | Product category sorting options. ProductCategorySorting |
| [ProductCategoryQueryOptions](interfaces/ProductCategoryQueryOptions.md) | Product category query options. ProductCategoryQueryOptions |
| [BusinessProductFilters](interfaces/BusinessProductFilters.md) | Business product filter options. BusinessProductFilters |
| [BusinessProductSorting](interfaces/BusinessProductSorting.md) | Business product sorting options. BusinessProductSorting |
| [BusinessProductQueryOptions](interfaces/BusinessProductQueryOptions.md) | Business product query options. BusinessProductQueryOptions |
| [ProductOrderFilters](interfaces/ProductOrderFilters.md) | Product order filter options. ProductOrderFilters |
| [ProductOrderSorting](interfaces/ProductOrderSorting.md) | Product order sorting options. ProductOrderSorting |
| [ProductOrderQueryOptions](interfaces/ProductOrderQueryOptions.md) | Product order query options. ProductOrderQueryOptions |
| [ProductPricingRuleFilters](interfaces/ProductPricingRuleFilters.md) | Product pricing rule filter options. ProductPricingRuleFilters |
| [ProductPricingRuleSorting](interfaces/ProductPricingRuleSorting.md) | Product pricing rule sorting options. ProductPricingRuleSorting |
| [ProductPricingRuleQueryOptions](interfaces/ProductPricingRuleQueryOptions.md) | Product pricing rule query options. ProductPricingRuleQueryOptions |
| [ProductSetFilters](interfaces/ProductSetFilters.md) | Product set filter options. ProductSetFilters |
| [ProductSetSorting](interfaces/ProductSetSorting.md) | Product set sorting options. ProductSetSorting |
| [ProductSetQueryOptions](interfaces/ProductSetQueryOptions.md) | Product set query options. ProductSetQueryOptions |
| [VariantAxisFilters](interfaces/VariantAxisFilters.md) | Variant axis filter options. VariantAxisFilters |
| [VariantAxisSorting](interfaces/VariantAxisSorting.md) | Variant axis sorting options. VariantAxisSorting |
| [VariantAxisQueryOptions](interfaces/VariantAxisQueryOptions.md) | Variant axis query options. VariantAxisQueryOptions |
| [ProductVariantFilters](interfaces/ProductVariantFilters.md) | Product variant filter options. ProductVariantFilters |
| [ProductVariantSorting](interfaces/ProductVariantSorting.md) | Product variant sorting options. ProductVariantSorting |
| [ProductVariantQueryOptions](interfaces/ProductVariantQueryOptions.md) | Product variant query options. ProductVariantQueryOptions |
| [PropertyFilters](interfaces/PropertyFilters.md) | Property filter options. PropertyFilters |
| [PropertySorting](interfaces/PropertySorting.md) | Property sorting options. PropertySorting |
| [PropertyQueryOptions](interfaces/PropertyQueryOptions.md) | Property query options. PropertyQueryOptions |
| [PropertyAddressFilters](interfaces/PropertyAddressFilters.md) | Property address filter options. PropertyAddressFilters |
| [PropertyAddressSorting](interfaces/PropertyAddressSorting.md) | Property address sorting options. PropertyAddressSorting |
| [PropertyAddressQueryOptions](interfaces/PropertyAddressQueryOptions.md) | Property address query options. PropertyAddressQueryOptions |
| [PropertyInquiryFilters](interfaces/PropertyInquiryFilters.md) | Property inquiry filter options. PropertyInquiryFilters |
| [PropertyInquirySorting](interfaces/PropertyInquirySorting.md) | Property inquiry sorting options. PropertyInquirySorting |
| [PropertyInquiryQueryOptions](interfaces/PropertyInquiryQueryOptions.md) | Property inquiry query options. PropertyInquiryQueryOptions |
| [RentalAssignmentFilters](interfaces/RentalAssignmentFilters.md) | Rental assignment filter options. RentalAssignmentFilters |
| [RentalAssignmentSorting](interfaces/RentalAssignmentSorting.md) | Rental assignment sorting options. RentalAssignmentSorting |
| [RentalAssignmentQueryOptions](interfaces/RentalAssignmentQueryOptions.md) | Rental assignment query options. RentalAssignmentQueryOptions |
| [RoomAssignmentFilters](interfaces/RoomAssignmentFilters.md) | Room assignment filter options. RoomAssignmentFilters |
| [RoomAssignmentSorting](interfaces/RoomAssignmentSorting.md) | Room assignment sorting options. RoomAssignmentSorting |
| [RoomAssignmentQueryOptions](interfaces/RoomAssignmentQueryOptions.md) | Room assignment query options. RoomAssignmentQueryOptions |
| [TableAssignmentFilters](interfaces/TableAssignmentFilters.md) | Table assignment filter options. TableAssignmentFilters |
| [TableAssignmentSorting](interfaces/TableAssignmentSorting.md) | Table assignment sorting options. TableAssignmentSorting |
| [TableAssignmentQueryOptions](interfaces/TableAssignmentQueryOptions.md) | Table assignment query options. TableAssignmentQueryOptions |
| [MaintenanceBlockFilters](interfaces/MaintenanceBlockFilters.md) | Maintenance block filter options. MaintenanceBlockFilters |
| [MaintenanceBlockSorting](interfaces/MaintenanceBlockSorting.md) | Maintenance block sorting options. MaintenanceBlockSorting |
| [MaintenanceBlockQueryOptions](interfaces/MaintenanceBlockQueryOptions.md) | Maintenance block query options. MaintenanceBlockQueryOptions |
| [RentalReservationFilters](interfaces/RentalReservationFilters.md) | Rental reservation filter options. RentalReservationFilters |
| [RentalReservationSorting](interfaces/RentalReservationSorting.md) | Rental reservation sorting options. RentalReservationSorting |
| [RentalReservationQueryOptions](interfaces/RentalReservationQueryOptions.md) | Rental reservation query options. RentalReservationQueryOptions |
| [RoomReservationFilters](interfaces/RoomReservationFilters.md) | Room reservation filter options. RoomReservationFilters |
| [RoomReservationSorting](interfaces/RoomReservationSorting.md) | Room reservation sorting options. RoomReservationSorting |
| [RoomReservationQueryOptions](interfaces/RoomReservationQueryOptions.md) | Room reservation query options. RoomReservationQueryOptions |
| [SectionFilters](interfaces/SectionFilters.md) | Floor plan section filter options. SectionFilters |
| [SectionQueryOptions](interfaces/SectionQueryOptions.md) | Floor plan section query options. SectionQueryOptions |
| [ReservationSettingsFilters](interfaces/ReservationSettingsFilters.md) | Reservation settings filter options. ReservationSettingsFilters |
| [ReservationSettingsQueryOptions](interfaces/ReservationSettingsQueryOptions.md) | Reservation settings query options. ReservationSettingsQueryOptions |
| [FloorPlanFilters](interfaces/FloorPlanFilters.md) | Floor plan filter options. FloorPlanFilters |
| [FloorPlanQueryOptions](interfaces/FloorPlanQueryOptions.md) | Floor plan query options. FloorPlanQueryOptions |
| [TableReservationFilters](interfaces/TableReservationFilters.md) | Table reservation filter options. TableReservationFilters |
| [TableReservationSorting](interfaces/TableReservationSorting.md) | Table reservation sorting options. TableReservationSorting |
| [TableReservationQueryOptions](interfaces/TableReservationQueryOptions.md) | Table reservation query options. TableReservationQueryOptions |
| [ResourceCategoryFilters](interfaces/ResourceCategoryFilters.md) | Resource category filter options. ResourceCategoryFilters |
| [ResourceCategorySorting](interfaces/ResourceCategorySorting.md) | Resource category sorting options. ResourceCategorySorting |
| [ResourceCategoryQueryOptions](interfaces/ResourceCategoryQueryOptions.md) | Resource category query options. ResourceCategoryQueryOptions |
| [ResourceInstanceFilters](interfaces/ResourceInstanceFilters.md) | Resource instance filter options. ResourceInstanceFilters |
| [ResourceInstanceSorting](interfaces/ResourceInstanceSorting.md) | Resource instance sorting options. ResourceInstanceSorting |
| [ResourceInstanceQueryOptions](interfaces/ResourceInstanceQueryOptions.md) | Resource instance query options. ResourceInstanceQueryOptions |
| [ResourceFilters](interfaces/ResourceFilters.md) | Resource filter options. ResourceFilters |
| [ResourceSorting](interfaces/ResourceSorting.md) | Resource sorting options. ResourceSorting |
| [ResourceQueryOptions](interfaces/ResourceQueryOptions.md) | Resource query options. ResourceQueryOptions |
| [AppointmentAdditionalInfoFilters](interfaces/AppointmentAdditionalInfoFilters.md) | Appointment additional info filter options. AppointmentAdditionalInfoFilters |
| [AppointmentAdditionalInfoSorting](interfaces/AppointmentAdditionalInfoSorting.md) | Appointment additional info sorting options. AppointmentAdditionalInfoSorting |
| [AppointmentAdditionalInfoQueryOptions](interfaces/AppointmentAdditionalInfoQueryOptions.md) | Appointment additional info query options. AppointmentAdditionalInfoQueryOptions |
| [AppointmentFieldConfigFilters](interfaces/AppointmentFieldConfigFilters.md) | Appointment field config filter options. AppointmentFieldConfigFilters |
| [AppointmentFieldConfigSorting](interfaces/AppointmentFieldConfigSorting.md) | Appointment field config sorting options. AppointmentFieldConfigSorting |
| [AppointmentFieldConfigQueryOptions](interfaces/AppointmentFieldConfigQueryOptions.md) | Appointment field config query options. AppointmentFieldConfigQueryOptions |
| [BusinessServiceFilters](interfaces/BusinessServiceFilters.md) | Business service filter options. BusinessServiceFilters |
| [BusinessServiceSorting](interfaces/BusinessServiceSorting.md) | Business service sorting options. BusinessServiceSorting |
| [BusinessServiceQueryOptions](interfaces/BusinessServiceQueryOptions.md) | Business service query options. BusinessServiceQueryOptions |
| [ServiceAppointmentFilters](interfaces/ServiceAppointmentFilters.md) | Service appointment filter options. ServiceAppointmentFilters |
| [ServiceAppointmentSorting](interfaces/ServiceAppointmentSorting.md) | Service appointment sorting options. ServiceAppointmentSorting |
| [ServiceAppointmentQueryOptions](interfaces/ServiceAppointmentQueryOptions.md) | Service appointment query options. ServiceAppointmentQueryOptions |
| [ServicePersonFilters](interfaces/ServicePersonFilters.md) | Service person filter options. ServicePersonFilters |
| [ServicePersonSorting](interfaces/ServicePersonSorting.md) | Service person sorting options. ServicePersonSorting |
| [ServicePersonQueryOptions](interfaces/ServicePersonQueryOptions.md) | Service person query options. ServicePersonQueryOptions |
| [ServicePricingRuleFilters](interfaces/ServicePricingRuleFilters.md) | Service pricing rule filter options. ServicePricingRuleFilters |
| [ServicePricingRuleSorting](interfaces/ServicePricingRuleSorting.md) | Service pricing rule sorting options. ServicePricingRuleSorting |
| [ServicePricingRuleQueryOptions](interfaces/ServicePricingRuleQueryOptions.md) | Service pricing rule query options. ServicePricingRuleQueryOptions |
| [ServiceProviderFilters](interfaces/ServiceProviderFilters.md) | Service provider filter options. ServiceProviderFilters |
| [ServiceProviderSorting](interfaces/ServiceProviderSorting.md) | Service provider sorting options. ServiceProviderSorting |
| [ServiceProviderQueryOptions](interfaces/ServiceProviderQueryOptions.md) | Service provider query options. ServiceProviderQueryOptions |
| [ServiceProviderTimeOffFilters](interfaces/ServiceProviderTimeOffFilters.md) | Service provider time off filter options. ServiceProviderTimeOffFilters |
| [ServiceProviderTimeOffSorting](interfaces/ServiceProviderTimeOffSorting.md) | Service provider time off sorting options. ServiceProviderTimeOffSorting |
| [ServiceProviderTimeOffQueryOptions](interfaces/ServiceProviderTimeOffQueryOptions.md) | Service provider time off query options. ServiceProviderTimeOffQueryOptions |
| [TaxRuleFilters](interfaces/TaxRuleFilters.md) | Tax rule filter options. TaxRuleFilters |
| [TaxRuleSorting](interfaces/TaxRuleSorting.md) | Tax rule sorting options. TaxRuleSorting |
| [TaxRuleQueryOptions](interfaces/TaxRuleQueryOptions.md) | Tax rule query options. TaxRuleQueryOptions |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ServiceBookingRules](type-aliases/ServiceBookingRules.md) | Service booking rules schema. Configures online booking availability, customer restrictions, and cancellation policies. |
| [GeoCoordinates](type-aliases/GeoCoordinates.md) | Geographic coordinates inferred from [GeoCoordinatesSchema](variables/GeoCoordinatesSchema.md). |
| [BusinessLocation](type-aliases/BusinessLocation.md) | Complete business location record inferred from [BusinessLocationSchema](variables/BusinessLocationSchema.md). |
| [CreateBusinessLocation](type-aliases/CreateBusinessLocation.md) | Payload for creating a business location, inferred from [CreateBusinessLocationSchema](variables/CreateBusinessLocationSchema.md). |
| [UpdateBusinessLocation](type-aliases/UpdateBusinessLocation.md) | Partial update payload (with required `id`) inferred from [UpdateBusinessLocationSchema](variables/UpdateBusinessLocationSchema.md). |
| [CustomerGroup](type-aliases/CustomerGroup.md) | Customer Group schema. Groups customers for pricing tiers and special terms. |
| [CreateCustomerGroup](type-aliases/CreateCustomerGroup.md) | Schema for creating a new customer group. Omits auto-generated fields. |
| [UpdateCustomerGroup](type-aliases/UpdateCustomerGroup.md) | Schema for updating an existing customer group. All fields optional except id (required). |
| [Customer](type-aliases/Customer.md) | Customer schema. Individual customer record with contact info and preferences. |
| [CreateCustomer](type-aliases/CreateCustomer.md) | Schema for creating a new customer. Omits auto-generated fields and channelId (set by system). |
| [UpdateCustomer](type-aliases/UpdateCustomer.md) | Schema for updating an existing customer. All fields optional except id (required). |
| [ShippingAddress](type-aliases/ShippingAddress.md) | Shipping Address schema. Customer shipping address record with delivery details. |
| [CreateShippingAddress](type-aliases/CreateShippingAddress.md) | Schema for creating a new shipping address. Omits auto-generated fields. |
| [UpdateShippingAddress](type-aliases/UpdateShippingAddress.md) | Schema for updating an existing shipping address. All fields optional except id (required). |
| [DiscountRule](type-aliases/DiscountRule.md) | Discount rule schema. Defines discount configurations for orders including percentage and fixed amount discounts. |
| [CreateDiscountRule](type-aliases/CreateDiscountRule.md) | Schema for creating a new discount rule. Omits auto-generated fields. |
| [UpdateDiscountRule](type-aliases/UpdateDiscountRule.md) | Schema for updating an existing discount rule. All fields optional except id. |
| [MenuItemVariantCatalog](type-aliases/MenuItemVariantCatalog.md) | Menu item variant catalog schema. Variant schema for catalog display. |
| [MenuItemCatalog](type-aliases/MenuItemCatalog.md) | Menu item catalog schema. Menu item for catalog display - includes variants and modifier groups. |
| [MenuCatalog](type-aliases/MenuCatalog.md) | Menu catalog schema. Represents a category with its menu items and variants. |
| [BusinessMenuCatalog](type-aliases/BusinessMenuCatalog.md) | Business menu catalog schema. Full catalog as array of category sections. |
| [MenuCategory](type-aliases/MenuCategory.md) | Menu category schema. Categories for organizing menu items (e.g., Appetizers, Main Course, Desserts). |
| [BusinessMenuItem](type-aliases/BusinessMenuItem.md) | Business menu item schema. Individual menu items available for ordering. |
| [CreateMenuCategory](type-aliases/CreateMenuCategory.md) | Schema for creating a new menu category. Omits auto-generated fields. |
| [CreateBusinessMenuItem](type-aliases/CreateBusinessMenuItem.md) | Schema for creating a new business menu item. Omits auto-generated fields and allows optional category specification. |
| [UpdateMenuCategory](type-aliases/UpdateMenuCategory.md) | Schema for updating an existing menu category. All fields optional except id (required). |
| [UpdateBusinessMenuItem](type-aliases/UpdateBusinessMenuItem.md) | Schema for updating an existing business menu item. All fields optional except id (required). |
| [MenuCategoryChannelMapping](type-aliases/MenuCategoryChannelMapping.md) | Menu category channel mapping schema. Maps menu categories to external platform identifiers. |
| [MenuItemChannelMapping](type-aliases/MenuItemChannelMapping.md) | Menu item channel mapping schema. Maps menu items to external platform identifiers. |
| [MenuItemVariant](type-aliases/MenuItemVariant.md) | Menu item variant schema. Different sizes/options for the same menu item. |
| [CreateMenuItemVariant](type-aliases/CreateMenuItemVariant.md) | Schema for creating a new menu item variant. Omits auto-generated fields. |
| [UpdateMenuItemVariant](type-aliases/UpdateMenuItemVariant.md) | Schema for updating an existing menu item variant. All fields are optional except id. |
| [MenuItemVariantChannelMapping](type-aliases/MenuItemVariantChannelMapping.md) | Menu item variant channel mapping schema. Maps menu item variants to external platform identifiers. |
| [MenuPricingRuleBaseCondition](type-aliases/MenuPricingRuleBaseCondition.md) | Menu pricing rule base condition schema. Base conditions for menu pricing rules including time and amount restrictions. |
| [MenuPricingRuleCondition](type-aliases/MenuPricingRuleCondition.md) | Menu pricing rule condition schema. Menu-specific conditions for pricing rule application. |
| [MenuPricingRule](type-aliases/MenuPricingRule.md) | Menu pricing rule schema. Defines pricing rules for menu-specific discounts and promotions. |
| [CreateMenuPricingRule](type-aliases/CreateMenuPricingRule.md) | Schema for creating a new menu pricing rule. Omits auto-generated fields. |
| [UpdateMenuPricingRule](type-aliases/UpdateMenuPricingRule.md) | Schema for updating an existing menu pricing rule. All fields optional except id (required). |
| [MenuSetItem](type-aliases/MenuSetItem.md) | Menu set item schema. Individual item within a menu set. |
| [MenuSetChannelMapping](type-aliases/MenuSetChannelMapping.md) | Menu set channel mapping schema. Maps menu sets to external platform identifiers. |
| [MenuSetSelector](type-aliases/MenuSetSelector.md) | Menu set selector schema. Defines dynamic rules for set membership. |
| [MenuSet](type-aliases/MenuSet.md) | Menu set schema. Bundled menu items (combos, deals, meal sets). |
| [CreateMenuSet](type-aliases/CreateMenuSet.md) | Schema for creating a new menu set. Omits auto-generated fields. |
| [UpdateMenuSet](type-aliases/UpdateMenuSet.md) | Schema for updating an existing menu set. All fields optional except id (required). |
| [MenuSetItemView](type-aliases/MenuSetItemView.md) | Menu set item view schema. Read-optimized view with resolved menu item. |
| [MenuSetView](type-aliases/MenuSetView.md) | Menu set view schema. Read-optimized view with resolved items and pricing. |
| [MenuOrderItemBase](type-aliases/MenuOrderItemBase.md) | Base menu order item schema. |
| [MenuOrderItem](type-aliases/MenuOrderItem.md) | Menu order item schema. Item with IDs (for existing items). |
| [MenuOrder](type-aliases/MenuOrder.md) | Menu order schema. |
| [CreateMenuOrder](type-aliases/CreateMenuOrder.md) | Schema for creating a new menu order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateMenuOrder](type-aliases/UpdateMenuOrder.md) | Schema for updating an existing menu order. All fields are optional except id. |
| [UpdateMenuOrderStatus](type-aliases/UpdateMenuOrderStatus.md) | Quick status update schema for menu orders. Streamlined update for status transitions. |
| [MenuOrderPricingPreview](type-aliases/MenuOrderPricingPreview.md) | Menu order pricing preview schema. For validation/preview purposes before order submission. |
| [CreateMenuOrderItem](type-aliases/CreateMenuOrderItem.md) | Base menu order item schema. |
| [ModifierOption](type-aliases/ModifierOption.md) | Modifier option schema. Individual option within a modifier group. |
| [ModifierGroup](type-aliases/ModifierGroup.md) | Modifier group schema. Group of related modifier options (e.g., Size, Add-ons, Toppings). |
| [ModifierOptionOverride](type-aliases/ModifierOptionOverride.md) | Modifier option override schema. Per-option override within a binding. |
| [ItemModifierBinding](type-aliases/ItemModifierBinding.md) | Item modifier binding schema. Links modifier groups to menu items or sets. |
| [AppliedModifier](type-aliases/AppliedModifier.md) | Applied modifier schema. Modifier selected on an order item. |
| [ModifierOptionView](type-aliases/ModifierOptionView.md) | Modifier option view schema. Simplified view for display purposes. |
| [ModifierGroupView](type-aliases/ModifierGroupView.md) | Modifier group view schema. Simplified view for display purposes. |
| [ModifierGroupChannelMapping](type-aliases/ModifierGroupChannelMapping.md) | Modifier group channel mapping schema. Maps modifier groups to external platform identifiers. |
| [ModifierOptionChannelMapping](type-aliases/ModifierOptionChannelMapping.md) | Modifier option channel mapping schema. Maps modifier options to external platform identifiers. |
| [CreateModifierOption](type-aliases/CreateModifierOption.md) | Schema for creating a new modifier option. Omits auto-generated fields. |
| [CreateModifierGroupOption](type-aliases/CreateModifierGroupOption.md) | - |
| [CreateModifierGroup](type-aliases/CreateModifierGroup.md) | Schema for creating a new modifier group. Omits auto-generated fields. |
| [CreateItemModifierBinding](type-aliases/CreateItemModifierBinding.md) | Schema for creating a new item modifier binding. Omits auto-generated fields. |
| [UpdateModifierOption](type-aliases/UpdateModifierOption.md) | Schema for updating an existing modifier option. All fields optional except id (required). |
| [UpdateModifierGroup](type-aliases/UpdateModifierGroup.md) | Schema for updating an existing modifier group. All fields optional except id (required). |
| [UpdateItemModifierBinding](type-aliases/UpdateItemModifierBinding.md) | Schema for updating an existing item modifier binding. All fields optional except id (required). |
| [OrderAddress](type-aliases/OrderAddress.md) | Order address schema. Extends base address with delivery-specific instructions. |
| [AppliedDiscount](type-aliases/AppliedDiscount.md) | Applied discount schema. Captures a discount applied to an order with calculated amounts. |
| [AppliedPricingRule](type-aliases/AppliedPricingRule.md) | Applied pricing rule schema. Captures a pricing rule applied to an order with calculated adjustments. |
| [AppliedTax](type-aliases/AppliedTax.md) | Applied tax schema. Captures a tax applied to an order with calculated amounts. |
| [OrderCustomer](type-aliases/OrderCustomer.md) | Order customer schema. Captures customer information for order identification and communication. |
| [OrderPricing](type-aliases/OrderPricing.md) | Order pricing schema. Comprehensive pricing breakdown including subtotals, discounts, taxes, and fees. |
| [MenuItemDaypart](type-aliases/MenuItemDaypart.md) | Menu item daypart schema. Defines time-based availability windows for menu items. |
| [PricingRuleChannelMapping](type-aliases/PricingRuleChannelMapping.md) | Pricing rule channel mapping schema. Maps pricing rules to external platform pricing rule IDs. |
| [PricingRuleCommonCondition](type-aliases/PricingRuleCommonCondition.md) | Pricing rule common condition schema. Defines when a pricing rule should be applied based on time, day, customer, and channel. |
| [PricingRuleAction](type-aliases/PricingRuleAction.md) | Pricing rule action schema. Defines the price adjustment to apply when rule conditions are met. |
| [ProductAxisBinding](type-aliases/ProductAxisBinding.md) | Product axis binding schema. Links products to their applicable variant axes, defining which axes apply to each product. |
| [CreateProductAxisBinding](type-aliases/CreateProductAxisBinding.md) | Schema for creating a new product axis binding. Omits auto-generated fields. |
| [UpdateProductAxisBinding](type-aliases/UpdateProductAxisBinding.md) | Schema for updating an existing product axis binding. All fields optional except id (required). |
| [ProductCategoryWithDescendants](type-aliases/ProductCategoryWithDescendants.md) | Product category with descendants type. Used when querying categories with nested hierarchy. |
| [AttributeDef](type-aliases/AttributeDef.md) | Attribute definition schema. Organization-level attribute definitions for products. |
| [CreateAttributeDef](type-aliases/CreateAttributeDef.md) | Schema for creating a new attribute definition. Omits auto-generated fields. |
| [UpdateAttributeDef](type-aliases/UpdateAttributeDef.md) | Schema for updating an existing attribute definition. All fields optional except id (required). |
| [CategoryAttributeBinding](type-aliases/CategoryAttributeBinding.md) | Category attribute binding schema. Links categories to attribute definitions with category-specific settings. |
| [ProductAttributeValue](type-aliases/ProductAttributeValue.md) | Product attribute value schema. Stores actual attribute values for products. |
| [ProductCategoryChannelMapping](type-aliases/ProductCategoryChannelMapping.md) | Product category channel mapping schema. Maps categories to external platform identifiers. |
| [ProductChannelMapping](type-aliases/ProductChannelMapping.md) | Product channel mapping schema. Maps products to external platform identifiers. |
| [ProductCategory](type-aliases/ProductCategory.md) | Product category schema. |
| [CreateProductCategory](type-aliases/CreateProductCategory.md) | Schema for creating a new product category. Omits auto-generated fields. |
| [UpdateProductCategory](type-aliases/UpdateProductCategory.md) | Schema for updating an existing product category. All fields optional except id (required). |
| [BusinessProduct](type-aliases/BusinessProduct.md) | Business product schema. |
| [CreateBusinessProduct](type-aliases/CreateBusinessProduct.md) | Schema for creating a new business product. Omits auto-generated fields, category object, and analytics. |
| [UpdateBusinessProduct](type-aliases/UpdateBusinessProduct.md) | Schema for updating an existing business product. All fields optional except id (required). |
| [ProductCatalog](type-aliases/ProductCatalog.md) | Product catalog schema. Represents a category with its list of products. |
| [BusinessProductCatalog](type-aliases/BusinessProductCatalog.md) | Business product catalog schema. Full catalog as array of category sections. |
| [ProductVariantDisplay](type-aliases/ProductVariantDisplay.md) | Product variant display schema. Extends base variant with computed stock status for UI rendering. |
| [ProductDisplay](type-aliases/ProductDisplay.md) | Product display schema. Extends base product with variants array and computed price range. |
| [ProductCatalogDisplay](type-aliases/ProductCatalogDisplay.md) | Product catalog display schema. Represents a category with its complete list of products for catalog rendering. |
| [BusinessProductCatalogDisplay](type-aliases/BusinessProductCatalogDisplay.md) | Business product catalog display schema. Complete product catalog organized by categories for full catalog rendering. |
| [ProductOrderItemBase](type-aliases/ProductOrderItemBase.md) | Base product order item schema (without productOrderId for creation). |
| [ProductOrderItem](type-aliases/ProductOrderItem.md) | Product order item schema with IDs (for existing items). |
| [ProductOrder](type-aliases/ProductOrder.md) | Product order schema - for retail/product sales. |
| [CreateProductOrder](type-aliases/CreateProductOrder.md) | Schema for creating a new product order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateProductOrder](type-aliases/UpdateProductOrder.md) | Schema for updating an existing product order. All fields are optional except id. |
| [UpdateProductOrderStatus](type-aliases/UpdateProductOrderStatus.md) | Quick status update schema for product orders. |
| [CreateProductOrderItem](type-aliases/CreateProductOrderItem.md) | Base product order item schema (without productOrderId for creation). |
| [ProductPricingRuleCondition](type-aliases/ProductPricingRuleCondition.md) | Product pricing rule condition schema. Extends common pricing conditions with product set targeting. |
| [ProductPricingRule](type-aliases/ProductPricingRule.md) | Product pricing rule schema. Defines promotional pricing logic applied to product orders. |
| [CreateProductPricingRule](type-aliases/CreateProductPricingRule.md) | Schema for creating a new product pricing rule. Omits auto-generated fields. |
| [UpdateProductPricingRule](type-aliases/UpdateProductPricingRule.md) | Schema for updating an existing product pricing rule. All fields optional except id (required). |
| [ProductSetItem](type-aliases/ProductSetItem.md) | Product set item schema. Represents a product included in a set with quantity and requirement specifications. |
| [ProductSetChannelMapping](type-aliases/ProductSetChannelMapping.md) | Product set channel mapping schema. Maps product sets to external platform identifiers. |
| [ProductSetSelector](type-aliases/ProductSetSelector.md) | Product set selector schema. Defines criteria for dynamically selecting products to include in a set. |
| [ProductSet](type-aliases/ProductSet.md) | Product set schema. Represents a bundle or set of products with configurable pricing and targeting. |
| [CreateProductSet](type-aliases/CreateProductSet.md) | - |
| [UpdateProductSet](type-aliases/UpdateProductSet.md) | - |
| [ProductSetItemDisplay](type-aliases/ProductSetItemDisplay.md) | Product set item display schema. Extended item schema with resolved product data for UI rendering. |
| [ProductSetDisplay](type-aliases/ProductSetDisplay.md) | Product set display schema. Extended set schema with resolved items and computed pricing for UI rendering. |
| [VariantAxisValue](type-aliases/VariantAxisValue.md) | Variant axis value schema. Represents a single selectable value within a variant axis. |
| [VariantAxis](type-aliases/VariantAxis.md) | Variant axis schema. Defines a dimension along which products can vary (e.g., Size, Color, Material). |
| [CreateVariantAxis](type-aliases/CreateVariantAxis.md) | Schema for creating a new variant axis. Omits auto-generated fields. |
| [UpdateVariantAxis](type-aliases/UpdateVariantAxis.md) | Schema for updating an existing variant axis. All fields optional except id (required). |
| [VariantAxisDisplay](type-aliases/VariantAxisDisplay.md) | Variant axis display schema. Optimized schema for UI rendering with display order. |
| [ProductVariantChannelMapping](type-aliases/ProductVariantChannelMapping.md) | Product variant channel mapping schema. Maps variants to external platform identifiers for multi-channel synchronization. |
| [ProductVariant](type-aliases/ProductVariant.md) | Product variant schema. Represents an individual SKU-level variant with axis value selections. Variants can override parent product attributes for pricing, inventory, and physical properties. |
| [CreateProductVariant](type-aliases/CreateProductVariant.md) | Schema for creating a new product variant. Omits auto-generated fields and analytics (view model only). |
| [UpdateProductVariant](type-aliases/UpdateProductVariant.md) | Schema for updating an existing product variant. All fields optional except id (required). |
| [PropertyCategory](type-aliases/PropertyCategory.md) | Property category schema. Organizes properties into logical groups (e.g., Luxury Homes, Commercial Offices). |
| [CreatePropertyCategory](type-aliases/CreatePropertyCategory.md) | Schema for creating a new property category. |
| [UpdatePropertyCategory](type-aliases/UpdatePropertyCategory.md) | Schema for updating an existing property category. |
| [PropertyAddress](type-aliases/PropertyAddress.md) | Property address schema. Standalone address entity for property locations with verification support. |
| [CreatePropertyAddress](type-aliases/CreatePropertyAddress.md) | Schema for creating a new property address. |
| [UpdatePropertyAddress](type-aliases/UpdatePropertyAddress.md) | Schema for updating an existing property address. |
| [PropertyFeatures](type-aliases/PropertyFeatures.md) | Property features schema. Shared features across all property types. |
| [ResidentialDetails](type-aliases/ResidentialDetails.md) | Residential details schema. Details for houses, apartments, condos, townhouses, villas. |
| [CommercialDetails](type-aliases/CommercialDetails.md) | Commercial details schema. Details for office, retail, warehouse, industrial properties. |
| [LandDetails](type-aliases/LandDetails.md) | Land details schema. Details for lots, farms, and acreage properties. |
| [Property](type-aliases/Property.md) | Property schema. Main property listing with pricing, details, and type-specific information. |
| [CreateProperty](type-aliases/CreateProperty.md) | Schema for creating a new property. |
| [UpdateProperty](type-aliases/UpdateProperty.md) | Schema for updating an existing property. |
| [PropertyCatalog](type-aliases/PropertyCatalog.md) | Property Catalog schema. Category with its property listings. |
| [BusinessPropertyCatalog](type-aliases/BusinessPropertyCatalog.md) | Business Property Catalog schema. Full property catalog array. |
| [PropertyInquiry](type-aliases/PropertyInquiry.md) | Property Inquiry schema. Tracks customer inquiries about properties with viewing and follow-up management. |
| [CreatePropertyInquiry](type-aliases/CreatePropertyInquiry.md) | Schema for creating a new property inquiry. |
| [UpdatePropertyInquiry](type-aliases/UpdatePropertyInquiry.md) | Schema for updating an existing property inquiry. |
| [UpdatePropertyInquiryStatus](type-aliases/UpdatePropertyInquiryStatus.md) | Schema for quick status update on property inquiry. |
| [RentalUnitCondition](type-aliases/RentalUnitCondition.md) | Rental unit condition schema. Captures a condition inspection snapshot at pickup or return. |
| [RentalAssignment](type-aliases/RentalAssignment.md) | Rental assignment schema. Records the physical rental unit assigned to a rental reservation. |
| [RoomAssignment](type-aliases/RoomAssignment.md) | Room assignment schema. Records the physical room instance assigned to a room reservation. |
| [TableAssignment](type-aliases/TableAssignment.md) | Table assignment schema. Records the physical table instance assigned to a table reservation. |
| [MaintenanceBlock](type-aliases/MaintenanceBlock.md) | Maintenance block schema. Represents a time period when a reservable resource instance is unavailable. |
| [CreateMaintenanceBlock](type-aliases/CreateMaintenanceBlock.md) | Schema for creating a new maintenance block. Omits auto-generated fields. |
| [UpdateMaintenanceBlock](type-aliases/UpdateMaintenanceBlock.md) | Schema for updating an existing maintenance block. All fields optional except id. |
| [RentalReservationPayment](type-aliases/RentalReservationPayment.md) | Rental reservation payment schema. Captures rental charge and security deposit state for a rental booking. |
| [ChecklistCompletion](type-aliases/ChecklistCompletion.md) | Checklist completion schema. Tracks completion of checklist items defined on Resource.checklistTemplate. |
| [WaiverRef](type-aliases/WaiverRef.md) | Waiver reference schema. Captures waiver document status for rental reservations that require signed waivers. |
| [IDRef](type-aliases/IDRef.md) | Identity verification reference schema. Captures the external identity verification record for a rental reservation. |
| [RentalReservation](type-aliases/RentalReservation.md) | Rental reservation schema. Represents a time-bounded rental booking with payment, waiver, and inspection state. |
| [CreateRentalReservation](type-aliases/CreateRentalReservation.md) | Schema for creating a new rental reservation. Omits auto-generated fields. |
| [UpdateRentalReservation](type-aliases/UpdateRentalReservation.md) | Schema for updating an existing rental reservation. All fields optional except id. |
| [RoomRatePerNight](type-aliases/RoomRatePerNight.md) | Room rate per night schema. Captures the nightly rate snapshot for a room reservation. |
| [RoomReservation](type-aliases/RoomReservation.md) | Room reservation schema. Represents a lodging reservation with check-in/check-out dates and nightly pricing. |
| [CreateRoomReservation](type-aliases/CreateRoomReservation.md) | Schema for creating a new room reservation. Omits auto-generated fields. |
| [UpdateRoomReservation](type-aliases/UpdateRoomReservation.md) | Schema for updating an existing room reservation. All fields optional except id. |
| [Point2D](type-aliases/Point2D.md) | Two-dimensional point schema. Uses the same coordinate system as table placement x/y values. |
| [SectionGeometry](type-aliases/SectionGeometry.md) | Section geometry schema. Supports automatic, rectangular, and polygon-based section boundaries. |
| [TablePlacement](type-aliases/TablePlacement.md) | Table placement schema. Represents a physical table's position and seating constraints within a floor plan section. |
| [CreateTablePlacement](type-aliases/CreateTablePlacement.md) | Schema for creating a new table placement. Omits auto-generated fields. |
| [UpdateTablePlacement](type-aliases/UpdateTablePlacement.md) | Schema for updating an existing table placement. All fields optional except id. |
| [Section](type-aliases/Section.md) | Section schema. Represents a named seating area within a floor plan, including its tables and boundary geometry. |
| [CreateSection](type-aliases/CreateSection.md) | Schema for creating a new floor plan section. Omits auto-generated fields. |
| [UpdateSection](type-aliases/UpdateSection.md) | Schema for updating an existing floor plan section. All fields optional except id. |
| [TablePlacementWithContext](type-aliases/TablePlacementWithContext.md) | Table placement with context schema. Returns a table placement together with its containing section. |
| [RentalTierDefinition](type-aliases/RentalTierDefinition.md) | Rental tier definition schema. Defines an available rental duration tier for reservation pricing and slot generation. |
| [TableReservationSettings](type-aliases/TableReservationSettings.md) | Table reservation settings schema. Configures slot duration, turnover, party limits, and booking window for table reservations. |
| [RoomReservationSettings](type-aliases/RoomReservationSettings.md) | Room reservation settings schema. Configures stay length, check-in/check-out defaults, and booking window for room reservations. |
| [RentalReservationSettings](type-aliases/RentalReservationSettings.md) | Rental reservation settings schema. Configures rental tiers, waiver requirements, identity verification, and deposits. |
| [ReservationSettings](type-aliases/ReservationSettings.md) | Reservation settings schema. Stores location-level reservation configuration for table, room, and rental bookings. |
| [CreateReservationSettings](type-aliases/CreateReservationSettings.md) | Schema for creating reservation settings. Omits auto-generated fields. |
| [UpdateReservationSettings](type-aliases/UpdateReservationSettings.md) | Schema for updating reservation settings. All fields optional except id. |
| [ReservationLocalDate](type-aliases/ReservationLocalDate.md) | Reservation local date schema. Validates business-local dates in YYYY-MM-DD format. |
| [ReservationTimeOfDayValue](type-aliases/ReservationTimeOfDayValue.md) | Reservation time-of-day value schema. Validates human-readable 12-hour local times such as "9:30 AM". |
| [ReservationSlotResourceType](type-aliases/ReservationSlotResourceType.md) | Reservation slot resource type schema. Restricts slot queries to supported reservation resource types. |
| [TableReservationSlotQueryRequest](type-aliases/TableReservationSlotQueryRequest.md) | Table reservation slot query request schema. Requests candidate table reservation slots for a business-local date. |
| [RoomReservationSlotQueryRequest](type-aliases/RoomReservationSlotQueryRequest.md) | Room reservation slot query request schema. Requests candidate room stay slots for a business-local check-in date. |
| [RentalReservationSlotQueryRequest](type-aliases/RentalReservationSlotQueryRequest.md) | Rental reservation slot query request schema. Requests candidate rental slots for intra-day or multi-day rental periods. |
| [ReservationSlotQueryRequest](type-aliases/ReservationSlotQueryRequest.md) | Reservation slot query request schema. Discriminated union of supported slot query request types. |
| [ReservationCandidateSlot](type-aliases/ReservationCandidateSlot.md) | Reservation candidate slot schema. Shared time-of-day window model for table availability candidates. |
| [RoomCandidateSlot](type-aliases/RoomCandidateSlot.md) | Room candidate slot schema. Date-range model for room availability candidates measured in nights. |
| [RentalCandidateSlot](type-aliases/RentalCandidateSlot.md) | Rental candidate slot schema. Hybrid model supporting both intra-day time windows and multi-day date ranges. |
| [TableReservationSlotQueryResponse](type-aliases/TableReservationSlotQueryResponse.md) | Table reservation slot query response schema. Returns generated table slot candidates for the requested date. |
| [RoomReservationSlotQueryResponse](type-aliases/RoomReservationSlotQueryResponse.md) | Room reservation slot query response schema. Returns generated room slot candidates for the requested stay. |
| [RentalReservationSlotQueryResponse](type-aliases/RentalReservationSlotQueryResponse.md) | Rental reservation slot query response schema. Returns generated rental slot candidates for the requested period. |
| [ReservationSlotQueryResponse](type-aliases/ReservationSlotQueryResponse.md) | Reservation slot query response schema. Discriminated union of supported slot query response types. |
| [CanvasDimensions](type-aliases/CanvasDimensions.md) | Canvas dimensions schema. Defines the coordinate space used for floor plan rendering. |
| [FloorPlan](type-aliases/FloorPlan.md) | Floor plan schema. Represents a table layout canvas for a reservable business location. |
| [CreateFloorPlan](type-aliases/CreateFloorPlan.md) | Schema for creating a new floor plan. Omits auto-generated fields. |
| [UpdateFloorPlan](type-aliases/UpdateFloorPlan.md) | Schema for updating an existing floor plan. All fields optional except id. |
| [TableReservation](type-aliases/TableReservation.md) | Table reservation schema. Represents a reservation request for a table-based venue such as a restaurant. |
| [CreateTableReservation](type-aliases/CreateTableReservation.md) | Schema for creating a new table reservation. Omits auto-generated fields. |
| [UpdateTableReservation](type-aliases/UpdateTableReservation.md) | Schema for updating an existing table reservation. All fields optional except id. |
| [ResourceCategoryChannelMapping](type-aliases/ResourceCategoryChannelMapping.md) | Resource category channel mapping schema. Maps reservation resource categories to external platform category IDs. |
| [ResourceCategory](type-aliases/ResourceCategory.md) | Resource category schema. Groups reservation resources by type, location, channel mapping, and display order. |
| [CreateResourceCategory](type-aliases/CreateResourceCategory.md) | Schema for creating a new resource category. Omits auto-generated fields. |
| [UpdateResourceCategory](type-aliases/UpdateResourceCategory.md) | Schema for updating an existing resource category. All fields optional except id. |
| [ResourceInstanceAttribute](type-aliases/ResourceInstanceAttribute.md) | Resource instance attribute schema. Stores flexible key/value attributes on physical reservation inventory. |
| [ResourceInstance](type-aliases/ResourceInstance.md) | Resource instance schema. Represents a physical table, room, rental unit, or other reservable unit. |
| [CreateResourceInstance](type-aliases/CreateResourceInstance.md) | Schema for creating a new resource instance. Omits auto-generated fields. |
| [UpdateResourceInstance](type-aliases/UpdateResourceInstance.md) | Schema for updating an existing resource instance. All fields optional except id. |
| [ChecklistTemplateItem](type-aliases/ChecklistTemplateItem.md) | Checklist template item schema. Defines a pickup or return inspection item used by rental reservations. |
| [ResourceChannelMapping](type-aliases/ResourceChannelMapping.md) | Resource channel mapping schema. Maps a reservation resource to an external platform resource ID. |
| [Resource](type-aliases/Resource.md) | Resource schema. Defines a reservable resource category such as a table type, room type, or rental item type. |
| [CreateResource](type-aliases/CreateResource.md) | Schema for creating a new reservation resource. |
| [UpdateResource](type-aliases/UpdateResource.md) | Schema for updating an existing reservation resource. All fields optional except id. The create-time instance requirement is not enforced on update. |
| [ResourceCapacity](type-aliases/ResourceCapacity.md) | Resource capacity schema. Discriminated union of mode-specific reservation capacity models. |
| [ResourcePricingStrategy](type-aliases/ResourcePricingStrategy.md) | Resource pricing strategy schema. Discriminated union of supported reservation pricing models. |
| [ResourceInstanceRef](type-aliases/ResourceInstanceRef.md) | - |
| [BusinessResourceCatalog](type-aliases/BusinessResourceCatalog.md) | Business resource catalog schema. Represents the complete reservation resource catalog for a business context. |
| [ResourceDefinition](type-aliases/ResourceDefinition.md) | Resource definition schema. Represents the stable identity for a versioned reservation resource catalog. |
| [ResourceRevision](type-aliases/ResourceRevision.md) | Resource revision schema. Represents a specific editable or published version of a resource definition. |
| [CreateResourceDefinition](type-aliases/CreateResourceDefinition.md) | Schema for creating a new resource definition. Omits auto-generated fields. |
| [UpdateResourceDefinition](type-aliases/UpdateResourceDefinition.md) | Schema for updating an existing resource definition. All fields optional except id. |
| [CreateResourceRevision](type-aliases/CreateResourceRevision.md) | Schema for creating a new resource revision. Omits auto-generated fields. |
| [UpdateResourceRevision](type-aliases/UpdateResourceRevision.md) | Schema for updating an existing resource revision. All fields optional except id. |
| [DeriveResourceRevisionRequest](type-aliases/DeriveResourceRevisionRequest.md) | Request schema for deriving a new resource revision. |
| [DeriveResourceRevisionResult](type-aliases/DeriveResourceRevisionResult.md) | Result schema returned after deriving a resource revision. |
| [ResourceRevisionContext](type-aliases/ResourceRevisionContext.md) | Resource revision context schema. Identifies a resource definition and the revision currently in use. |
| [DynamicFieldValue](type-aliases/DynamicFieldValue.md) | Schema for dynamic field value types. Accepts any value type to support the various DynamicFieldType values (text, number, boolean, date, select options, etc.) |
| [AppointmentAdditionalInfo](type-aliases/AppointmentAdditionalInfo.md) | Appointment Additional Info schema. Stores dynamic field values captured during appointment booking. |
| [CreateAppointmentAdditionalInfo](type-aliases/CreateAppointmentAdditionalInfo.md) | Schema for creating appointment additional info. Omits auto-generated fields. |
| [UpdateAppointmentAdditionalInfo](type-aliases/UpdateAppointmentAdditionalInfo.md) | Schema for updating appointment additional info. All fields optional except id (required). |
| [AppointmentFieldConfig](type-aliases/AppointmentFieldConfig.md) | Appointment Field Config schema. Organization-level field library for appointment booking forms. |
| [CreateAppointmentFieldConfig](type-aliases/CreateAppointmentFieldConfig.md) | Schema for creating an appointment field config. Omits auto-generated fields. |
| [UpdateAppointmentFieldConfig](type-aliases/UpdateAppointmentFieldConfig.md) | Schema for updating an appointment field config. All fields optional except id (required). |
| [ServiceDateRange](type-aliases/ServiceDateRange.md) | Service date range schema. Defines seasonal availability or blackout periods. |
| [ServiceAvailability](type-aliases/ServiceAvailability.md) | Service availability schema. Configures when a service is available for booking. |
| [ServiceAppointmentFieldConfig](type-aliases/ServiceAppointmentFieldConfig.md) | Service-level appointment field configuration (embedded). Inherits from organization-level config and allows service-specific customization. |
| [ServiceCategoryChannelMapping](type-aliases/ServiceCategoryChannelMapping.md) | Per-channel service category ID mapping. |
| [ServiceChannelMapping](type-aliases/ServiceChannelMapping.md) | Per-channel external service ID mapping. |
| [ServiceCategory](type-aliases/ServiceCategory.md) | Service Category schema. Groups related services for organization and display. |
| [CreateServiceCategory](type-aliases/CreateServiceCategory.md) | Schema for creating a new service category. Omits auto-generated fields. |
| [UpdateServiceCategory](type-aliases/UpdateServiceCategory.md) | Schema for updating an existing service category. All fields optional except id (required). |
| [BusinessService](type-aliases/BusinessService.md) | Business Service Configuration schema. Defines a service offering with pricing, scheduling, and booking rules. |
| [CreateBusinessService](type-aliases/CreateBusinessService.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [UpdateBusinessService](type-aliases/UpdateBusinessService.md) | Schema for updating an existing business service. All fields optional except id (required). |
| [ServiceDurationSegments](type-aliases/ServiceDurationSegments.md) | Service duration segments schema. Breaks down service time into distinct phases. |
| [ServiceCatalog](type-aliases/ServiceCatalog.md) | Service catalog schema. Represents a category with its associated services. |
| [BusinessServiceCatalog](type-aliases/BusinessServiceCatalog.md) | Business service catalog schema. Array of service categories with their services. |
| [ServiceAppointment](type-aliases/ServiceAppointment.md) | Service Appointment schema. Represents a scheduled appointment for a service. |
| [CreateServiceAppointment](type-aliases/CreateServiceAppointment.md) | Schema for creating a new service appointment. Omits auto-generated fields and cancelReason (set during cancellation). |
| [UpdateServiceAppointment](type-aliases/UpdateServiceAppointment.md) | Schema for updating an existing service appointment. All fields optional except id (required). Includes cancelReason for cancellation updates. |
| [CreateServiceAppointmentWithCustomData](type-aliases/CreateServiceAppointmentWithCustomData.md) | Schema for creating an appointment with custom field data. Combines appointment creation with dynamic field values. |
| [ServiceAppointmentWithAdditionalInfo](type-aliases/ServiceAppointmentWithAdditionalInfo.md) | Schema for an appointment with its additional info. Used for displaying complete appointment details. |
| [ServicePerson](type-aliases/ServicePerson.md) | Service Person schema. Represents a staff member or provider who can perform services. |
| [CreateServicePerson](type-aliases/CreateServicePerson.md) | Schema for creating a new service person. Omits auto-generated fields. |
| [UpdateServicePerson](type-aliases/UpdateServicePerson.md) | Schema for updating an existing service person. All fields optional except id (required). |
| [ServicePricingRuleCondition](type-aliases/ServicePricingRuleCondition.md) | Service pricing rule condition schema. Extends common pricing conditions with service-specific targeting. |
| [ServicePricingRule](type-aliases/ServicePricingRule.md) | Service Pricing Rule schema. Defines a pricing rule for service-based pricing adjustments. |
| [CreateServicePricingRule](type-aliases/CreateServicePricingRule.md) | Schema for creating a new service pricing rule. Omits auto-generated fields, includes optional placement for ordering. |
| [UpdateServicePricingRule](type-aliases/UpdateServicePricingRule.md) | Schema for updating an existing service pricing rule. All fields optional except id (required). |
| [ServiceProvider](type-aliases/ServiceProvider.md) | Service Provider join schema. Links services to providers with optional price/duration overrides. |
| [CreateServiceProvider](type-aliases/CreateServiceProvider.md) | Schema for creating a new service provider assignment. Omits auto-generated fields. |
| [UpdateServiceProvider](type-aliases/UpdateServiceProvider.md) | Schema for updating an existing service provider assignment. All fields optional except id (required). |
| [LocalDate](type-aliases/LocalDate.md) | Local date format schema (YYYY-MM-DD). |
| [Timezone](type-aliases/Timezone.md) | Timezone identifier schema. |
| [TimeOfDayValue](type-aliases/TimeOfDayValue.md) | Time of day value schema (h:mm AM/PM format). |
| [ServiceSlotQueryRequest](type-aliases/ServiceSlotQueryRequest.md) | Service slot query request schema. Used to request available appointment slots for a service. |
| [ServiceCandidateSlot](type-aliases/ServiceCandidateSlot.md) | Service candidate slot schema. Represents an available time slot for booking. |
| [ServiceSlotQueryResponse](type-aliases/ServiceSlotQueryResponse.md) | Service slot query response schema. Contains available slots for the requested date. |
| [ServiceProviderTimeOffRecurrence](type-aliases/ServiceProviderTimeOffRecurrence.md) | Recurrence rule for recurring time off. Defines which days of the week the time off applies. |
| [ServiceProviderTimeOff](type-aliases/ServiceProviderTimeOff.md) | Service Provider Time Off schema. Represents a time period when a provider is unavailable for appointments. |
| [CreateServiceProviderTimeOff](type-aliases/CreateServiceProviderTimeOff.md) | Schema for creating a new service provider time off record. Omits auto-generated fields. |
| [UpdateServiceProviderTimeOff](type-aliases/UpdateServiceProviderTimeOff.md) | Schema for updating an existing service provider time off record. All fields optional except id (required). |
| [TaxRule](type-aliases/TaxRule.md) | Tax rule schema. Defines tax configurations for orders including percentage and fixed amount taxes. |
| [CreateTaxRule](type-aliases/CreateTaxRule.md) | Schema for creating a new tax rule. Omits auto-generated fields. |
| [UpdateTaxRule](type-aliases/UpdateTaxRule.md) | Schema for updating an existing tax rule. All fields optional except id. |

## Variables

| Variable | Description |
| ------ | ------ |
| [ServiceBookingRulesSchema](variables/ServiceBookingRulesSchema.md) | Service booking rules schema. Configures online booking availability, customer restrictions, and cancellation policies. |
| [GeoCoordinatesSchema](variables/GeoCoordinatesSchema.md) | Zod schema for geographic coordinates. |
| [BusinessLocationSchema](variables/BusinessLocationSchema.md) | Zod schema for Business Location validation. |
| [CreateBusinessLocationSchema](variables/CreateBusinessLocationSchema.md) | Zod schema for creating a new business location. |
| [UpdateBusinessLocationSchema](variables/UpdateBusinessLocationSchema.md) | Zod schema for updating an existing business location. |
| [CustomerGroupSchema](variables/CustomerGroupSchema.md) | Customer Group schema. Groups customers for pricing tiers and special terms. |
| [CreateCustomerGroupSchema](variables/CreateCustomerGroupSchema.md) | Schema for creating a new customer group. Omits auto-generated fields. |
| [UpdateCustomerGroupSchema](variables/UpdateCustomerGroupSchema.md) | Schema for updating an existing customer group. All fields optional except id (required). |
| [CustomerSchema](variables/CustomerSchema.md) | Customer schema. Individual customer record with contact info and preferences. |
| [CreateCustomerSchema](variables/CreateCustomerSchema.md) | Schema for creating a new customer. Omits auto-generated fields and channelId (set by system). |
| [UpdateCustomerSchema](variables/UpdateCustomerSchema.md) | Schema for updating an existing customer. All fields optional except id (required). |
| [ShippingAddressSchema](variables/ShippingAddressSchema.md) | Shipping Address schema. Customer shipping address record with delivery details. |
| [CreateShippingAddressSchema](variables/CreateShippingAddressSchema.md) | Schema for creating a new shipping address. Omits auto-generated fields. |
| [UpdateShippingAddressSchema](variables/UpdateShippingAddressSchema.md) | Schema for updating an existing shipping address. All fields optional except id (required). |
| [DiscountRuleSchema](variables/DiscountRuleSchema.md) | Discount rule schema. Defines discount configurations for orders including percentage and fixed amount discounts. |
| [CreateDiscountRuleSchema](variables/CreateDiscountRuleSchema.md) | Schema for creating a new discount rule. Omits auto-generated fields. |
| [UpdateDiscountRuleSchema](variables/UpdateDiscountRuleSchema.md) | Schema for updating an existing discount rule. All fields optional except id. |
| [MenuItemVariantCatalogSchema](variables/MenuItemVariantCatalogSchema.md) | Menu item variant catalog schema. Variant schema for catalog display. |
| [MenuItemCatalogSchema](variables/MenuItemCatalogSchema.md) | Menu item catalog schema. Menu item for catalog display - includes variants and modifier groups. |
| [MenuCatalogSchema](variables/MenuCatalogSchema.md) | Menu catalog schema. Represents a category with its menu items and variants. |
| [BusinessMenuCatalogSchema](variables/BusinessMenuCatalogSchema.md) | Business menu catalog schema. Full catalog as array of category sections. |
| [MenuCategoryChannelMappingSchema](variables/MenuCategoryChannelMappingSchema.md) | Menu category channel mapping schema. Maps menu categories to external platform identifiers. |
| [MenuItemChannelMappingSchema](variables/MenuItemChannelMappingSchema.md) | Menu item channel mapping schema. Maps menu items to external platform identifiers. |
| [MenuCategorySchema](variables/MenuCategorySchema.md) | Menu category schema. Categories for organizing menu items (e.g., Appetizers, Main Course, Desserts). |
| [BusinessMenuItemSchema](variables/BusinessMenuItemSchema.md) | Business menu item schema. Individual menu items available for ordering. |
| [CreateMenuCategorySchema](variables/CreateMenuCategorySchema.md) | Schema for creating a new menu category. Omits auto-generated fields. |
| [CreateBusinessMenuItemSchema](variables/CreateBusinessMenuItemSchema.md) | Schema for creating a new business menu item. Omits auto-generated fields and allows optional category specification. |
| [UpdateMenuCategorySchema](variables/UpdateMenuCategorySchema.md) | Schema for updating an existing menu category. All fields optional except id (required). |
| [UpdateBusinessMenuItemSchema](variables/UpdateBusinessMenuItemSchema.md) | Schema for updating an existing business menu item. All fields optional except id (required). |
| [MenuItemVariantChannelMappingSchema](variables/MenuItemVariantChannelMappingSchema.md) | Menu item variant channel mapping schema. Maps menu item variants to external platform identifiers. |
| [MenuItemVariantSchema](variables/MenuItemVariantSchema.md) | Menu item variant schema. Different sizes/options for the same menu item. |
| [CreateMenuItemVariantSchema](variables/CreateMenuItemVariantSchema.md) | Schema for creating a new menu item variant. Omits auto-generated fields. |
| [UpdateMenuItemVariantSchema](variables/UpdateMenuItemVariantSchema.md) | Schema for updating an existing menu item variant. All fields are optional except id. |
| [MenuPricingRuleBaseConditionSchema](variables/MenuPricingRuleBaseConditionSchema.md) | Menu pricing rule base condition schema. Base conditions for menu pricing rules including time and amount restrictions. |
| [MenuPricingRuleConditionSchema](variables/MenuPricingRuleConditionSchema.md) | Menu pricing rule condition schema. Menu-specific conditions for pricing rule application. |
| [MenuPricingRuleSchema](variables/MenuPricingRuleSchema.md) | Menu pricing rule schema. Defines pricing rules for menu-specific discounts and promotions. |
| [CreateMenuPricingRuleSchema](variables/CreateMenuPricingRuleSchema.md) | Schema for creating a new menu pricing rule. Omits auto-generated fields. |
| [UpdateMenuPricingRuleSchema](variables/UpdateMenuPricingRuleSchema.md) | Schema for updating an existing menu pricing rule. All fields optional except id (required). |
| [MenuSetChannelMappingSchema](variables/MenuSetChannelMappingSchema.md) | Menu set channel mapping schema. Maps menu sets to external platform identifiers. |
| [MenuSetItemSchema](variables/MenuSetItemSchema.md) | Menu set item schema. Individual item within a menu set. |
| [MenuSetSelectorSchema](variables/MenuSetSelectorSchema.md) | Menu set selector schema. Defines dynamic rules for set membership. |
| [MenuSetSchema](variables/MenuSetSchema.md) | Menu set schema. Bundled menu items (combos, deals, meal sets). |
| [CreateMenuSetSchema](variables/CreateMenuSetSchema.md) | Schema for creating a new menu set. Omits auto-generated fields. |
| [UpdateMenuSetSchema](variables/UpdateMenuSetSchema.md) | Schema for updating an existing menu set. All fields optional except id (required). |
| [MenuSetItemViewSchema](variables/MenuSetItemViewSchema.md) | Menu set item view schema. Read-optimized view with resolved menu item. |
| [MenuSetViewSchema](variables/MenuSetViewSchema.md) | Menu set view schema. Read-optimized view with resolved items and pricing. |
| [MenuOrderItemBaseSchema](variables/MenuOrderItemBaseSchema.md) | Base menu order item schema. |
| [MenuOrderItemSchema](variables/MenuOrderItemSchema.md) | Menu order item schema. Item with IDs (for existing items). |
| [MenuOrderSchema](variables/MenuOrderSchema.md) | Menu order schema. |
| [CreateMenuOrderSchema](variables/CreateMenuOrderSchema.md) | Schema for creating a new menu order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateMenuOrderSchema](variables/UpdateMenuOrderSchema.md) | Schema for updating an existing menu order. All fields are optional except id. |
| [UpdateMenuOrderStatusSchema](variables/UpdateMenuOrderStatusSchema.md) | Quick status update schema for menu orders. Streamlined update for status transitions. |
| [MenuOrderPricingPreviewSchema](variables/MenuOrderPricingPreviewSchema.md) | Menu order pricing preview schema. For validation/preview purposes before order submission. |
| [ModifierGroupChannelMappingSchema](variables/ModifierGroupChannelMappingSchema.md) | Modifier group channel mapping schema. Maps modifier groups to external platform identifiers. |
| [ModifierOptionChannelMappingSchema](variables/ModifierOptionChannelMappingSchema.md) | Modifier option channel mapping schema. Maps modifier options to external platform identifiers. |
| [ModifierOptionSchema](variables/ModifierOptionSchema.md) | Modifier option schema. Individual option within a modifier group. |
| [ModifierGroupSchema](variables/ModifierGroupSchema.md) | Modifier group schema. Group of related modifier options (e.g., Size, Add-ons, Toppings). |
| [ModifierOptionOverrideSchema](variables/ModifierOptionOverrideSchema.md) | Modifier option override schema. Per-option override within a binding. |
| [ItemModifierBindingSchema](variables/ItemModifierBindingSchema.md) | Item modifier binding schema. Links modifier groups to menu items or sets. |
| [AppliedModifierSchema](variables/AppliedModifierSchema.md) | Applied modifier schema. Modifier selected on an order item. |
| [ModifierOptionViewSchema](variables/ModifierOptionViewSchema.md) | Modifier option view schema. Simplified view for display purposes. |
| [ModifierGroupViewSchema](variables/ModifierGroupViewSchema.md) | Modifier group view schema. Simplified view for display purposes. |
| [CreateModifierOptionSchema](variables/CreateModifierOptionSchema.md) | Schema for creating a new modifier option. Omits auto-generated fields. |
| [CreateModifierGroupOptionSchema](variables/CreateModifierGroupOptionSchema.md) | - |
| [CreateModifierGroupSchema](variables/CreateModifierGroupSchema.md) | Schema for creating a new modifier group. Omits auto-generated fields. |
| [CreateItemModifierBindingSchema](variables/CreateItemModifierBindingSchema.md) | Schema for creating a new item modifier binding. Omits auto-generated fields. |
| [UpdateModifierOptionSchema](variables/UpdateModifierOptionSchema.md) | Schema for updating an existing modifier option. All fields optional except id (required). |
| [UpdateModifierGroupSchema](variables/UpdateModifierGroupSchema.md) | Schema for updating an existing modifier group. All fields optional except id (required). |
| [UpdateItemModifierBindingSchema](variables/UpdateItemModifierBindingSchema.md) | Schema for updating an existing item modifier binding. All fields optional except id (required). |
| [OrderAddress](variables/OrderAddress.md) | Order address schema. Extends base address with delivery-specific instructions. |
| [OrderCustomerSchema](variables/OrderCustomerSchema.md) | Order customer schema. Captures customer information for order identification and communication. |
| [AppliedDiscountSchema](variables/AppliedDiscountSchema.md) | Applied discount schema. Captures a discount applied to an order with calculated amounts. |
| [AppliedPricingRuleSchema](variables/AppliedPricingRuleSchema.md) | Applied pricing rule schema. Captures a pricing rule applied to an order with calculated adjustments. |
| [AppliedTaxSchema](variables/AppliedTaxSchema.md) | Applied tax schema. Captures a tax applied to an order with calculated amounts. |
| [OrderPricingSchema](variables/OrderPricingSchema.md) | Order pricing schema. Comprehensive pricing breakdown including subtotals, discounts, taxes, and fees. |
| [MenuItemDaypartSchema](variables/MenuItemDaypartSchema.md) | Menu item daypart schema. Defines time-based availability windows for menu items. |
| [DEFAULT\_MENU\_ITEM\_DAYPARTS](variables/DEFAULT_MENU_ITEM_DAYPARTS.md) | Default menu item dayparts. Standard time windows for meal periods. |
| [PricingRuleChannelMappingSchema](variables/PricingRuleChannelMappingSchema.md) | Pricing rule channel mapping schema. Maps pricing rules to external platform pricing rule IDs. |
| [PricingRuleCommonConditionSchema](variables/PricingRuleCommonConditionSchema.md) | Pricing rule common condition schema. Defines when a pricing rule should be applied based on time, day, customer, and channel. |
| [PricingRuleActionSchema](variables/PricingRuleActionSchema.md) | Pricing rule action schema. Defines the price adjustment to apply when rule conditions are met. |
| [ProductAxisBindingSchema](variables/ProductAxisBindingSchema.md) | Product axis binding schema. Links products to their applicable variant axes, defining which axes apply to each product. |
| [CreateProductAxisBindingSchema](variables/CreateProductAxisBindingSchema.md) | Schema for creating a new product axis binding. Omits auto-generated fields. |
| [UpdateProductAxisBindingSchema](variables/UpdateProductAxisBindingSchema.md) | Schema for updating an existing product axis binding. All fields optional except id (required). |
| [AttributeDefSchema](variables/AttributeDefSchema.md) | Attribute definition schema. Organization-level attribute definitions for products. |
| [CategoryAttributeBindingSchema](variables/CategoryAttributeBindingSchema.md) | Category attribute binding schema. Links categories to attribute definitions with category-specific settings. |
| [ProductAttributeValueSchema](variables/ProductAttributeValueSchema.md) | Product attribute value schema. Stores actual attribute values for products. |
| [ProductCategoryChannelMappingSchema](variables/ProductCategoryChannelMappingSchema.md) | Product category channel mapping schema. Maps categories to external platform identifiers. |
| [ProductChannelMappingSchema](variables/ProductChannelMappingSchema.md) | Product channel mapping schema. Maps products to external platform identifiers. |
| [ProductCategorySchema](variables/ProductCategorySchema.md) | Product category schema. |
| [BusinessProductSchema](variables/BusinessProductSchema.md) | Business product schema. |
| [CreateAttributeDefSchema](variables/CreateAttributeDefSchema.md) | Schema for creating a new attribute definition. Omits auto-generated fields. |
| [UpdateAttributeDefSchema](variables/UpdateAttributeDefSchema.md) | Schema for updating an existing attribute definition. All fields optional except id (required). |
| [CreateProductCategorySchema](variables/CreateProductCategorySchema.md) | Schema for creating a new product category. Omits auto-generated fields. |
| [UpdateProductCategorySchema](variables/UpdateProductCategorySchema.md) | Schema for updating an existing product category. All fields optional except id (required). |
| [CreateBusinessProductSchema](variables/CreateBusinessProductSchema.md) | Schema for creating a new business product. Omits auto-generated fields, category object, and analytics. |
| [UpdateBusinessProductSchema](variables/UpdateBusinessProductSchema.md) | Schema for updating an existing business product. All fields optional except id (required). |
| [ProductCatalogSchema](variables/ProductCatalogSchema.md) | Product catalog schema. Represents a category with its list of products. |
| [BusinessProductCatalogSchema](variables/BusinessProductCatalogSchema.md) | Business product catalog schema. Full catalog as array of category sections. |
| [ProductCategoryWithDescendantsSchema](variables/ProductCategoryWithDescendantsSchema.md) | Product category with descendants schema. Read model only. Use when ProductCategoryFilters.includeDescendants is true. |
| [ProductVariantDisplaySchema](variables/ProductVariantDisplaySchema.md) | Product variant display schema. Extends base variant with computed stock status for UI rendering. |
| [ProductDisplaySchema](variables/ProductDisplaySchema.md) | Product display schema. Extends base product with variants array and computed price range. |
| [ProductCatalogDisplaySchema](variables/ProductCatalogDisplaySchema.md) | Product catalog display schema. Represents a category with its complete list of products for catalog rendering. |
| [BusinessProductCatalogDisplaySchema](variables/BusinessProductCatalogDisplaySchema.md) | Business product catalog display schema. Complete product catalog organized by categories for full catalog rendering. |
| [ProductOrderItemBaseSchema](variables/ProductOrderItemBaseSchema.md) | Base product order item schema (without productOrderId for creation). |
| [ProductOrderItemSchema](variables/ProductOrderItemSchema.md) | Product order item schema with IDs (for existing items). |
| [ProductOrderSchema](variables/ProductOrderSchema.md) | Product order schema - for retail/product sales. |
| [CreateProductOrderSchema](variables/CreateProductOrderSchema.md) | Schema for creating a new product order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateProductOrderSchema](variables/UpdateProductOrderSchema.md) | Schema for updating an existing product order. All fields are optional except id. |
| [UpdateProductOrderStatusSchema](variables/UpdateProductOrderStatusSchema.md) | Quick status update schema for product orders. |
| [ProductPricingRuleConditionSchema](variables/ProductPricingRuleConditionSchema.md) | Product pricing rule condition schema. Extends common pricing conditions with product set targeting. |
| [ProductPricingRuleSchema](variables/ProductPricingRuleSchema.md) | Product pricing rule schema. Defines promotional pricing logic applied to product orders. |
| [CreateProductPricingRuleSchema](variables/CreateProductPricingRuleSchema.md) | Schema for creating a new product pricing rule. Omits auto-generated fields. |
| [UpdateProductPricingRuleSchema](variables/UpdateProductPricingRuleSchema.md) | Schema for updating an existing product pricing rule. All fields optional except id (required). |
| [ProductSetChannelMappingSchema](variables/ProductSetChannelMappingSchema.md) | Product set channel mapping schema. Maps product sets to external platform identifiers. |
| [ProductSetItemSchema](variables/ProductSetItemSchema.md) | Product set item schema. Represents a product included in a set with quantity and requirement specifications. |
| [ProductSetSelectorSchema](variables/ProductSetSelectorSchema.md) | Product set selector schema. Defines criteria for dynamically selecting products to include in a set. |
| [ProductSetSchema](variables/ProductSetSchema.md) | Product set schema. Represents a bundle or set of products with configurable pricing and targeting. |
| [CreateProductSetSchema](variables/CreateProductSetSchema.md) | - |
| [UpdateProductSetSchema](variables/UpdateProductSetSchema.md) | - |
| [ProductSetItemDisplaySchema](variables/ProductSetItemDisplaySchema.md) | Product set item display schema. Extended item schema with resolved product data for UI rendering. |
| [ProductSetDisplaySchema](variables/ProductSetDisplaySchema.md) | Product set display schema. Extended set schema with resolved items and computed pricing for UI rendering. |
| [VariantAxisValueSchema](variables/VariantAxisValueSchema.md) | Variant axis value schema. Represents a single selectable value within a variant axis. |
| [VariantAxisSchema](variables/VariantAxisSchema.md) | Variant axis schema. Defines a dimension along which products can vary (e.g., Size, Color, Material). |
| [CreateVariantAxisSchema](variables/CreateVariantAxisSchema.md) | Schema for creating a new variant axis. Omits auto-generated fields. |
| [UpdateVariantAxisSchema](variables/UpdateVariantAxisSchema.md) | Schema for updating an existing variant axis. All fields optional except id (required). |
| [VariantAxisDisplaySchema](variables/VariantAxisDisplaySchema.md) | Variant axis display schema. Optimized schema for UI rendering with display order. |
| [ProductVariantChannelMappingSchema](variables/ProductVariantChannelMappingSchema.md) | Product variant channel mapping schema. Maps variants to external platform identifiers for multi-channel synchronization. |
| [ProductVariantSchema](variables/ProductVariantSchema.md) | Product variant schema. Represents an individual SKU-level variant with axis value selections. Variants can override parent product attributes for pricing, inventory, and physical properties. |
| [CreateProductVariantSchema](variables/CreateProductVariantSchema.md) | Schema for creating a new product variant. Omits auto-generated fields and analytics (view model only). |
| [UpdateProductVariantSchema](variables/UpdateProductVariantSchema.md) | Schema for updating an existing product variant. All fields optional except id (required). |
| [PropertyCategorySchema](variables/PropertyCategorySchema.md) | Property category schema. Organizes properties into logical groups (e.g., Luxury Homes, Commercial Offices). |
| [PropertyAddressSchema](variables/PropertyAddressSchema.md) | Property address schema. Standalone address entity for property locations with verification support. |
| [PropertyFeaturesSchema](variables/PropertyFeaturesSchema.md) | Property features schema. Shared features across all property types. |
| [ResidentialDetailsSchema](variables/ResidentialDetailsSchema.md) | Residential details schema. Details for houses, apartments, condos, townhouses, villas. |
| [CommercialDetailsSchema](variables/CommercialDetailsSchema.md) | Commercial details schema. Details for office, retail, warehouse, industrial properties. |
| [LandDetailsSchema](variables/LandDetailsSchema.md) | Land details schema. Details for lots, farms, and acreage properties. |
| [PropertySchema](variables/PropertySchema.md) | Property schema. Main property listing with pricing, details, and type-specific information. |
| [CreatePropertyCategorySchema](variables/CreatePropertyCategorySchema.md) | Schema for creating a new property category. |
| [UpdatePropertyCategorySchema](variables/UpdatePropertyCategorySchema.md) | Schema for updating an existing property category. |
| [CreatePropertyAddressSchema](variables/CreatePropertyAddressSchema.md) | Schema for creating a new property address. |
| [UpdatePropertyAddressSchema](variables/UpdatePropertyAddressSchema.md) | Schema for updating an existing property address. |
| [CreatePropertySchema](variables/CreatePropertySchema.md) | Schema for creating a new property. |
| [UpdatePropertySchema](variables/UpdatePropertySchema.md) | Schema for updating an existing property. |
| [PropertyCatalogSchema](variables/PropertyCatalogSchema.md) | Property Catalog schema. Category with its property listings. |
| [BusinessPropertyCatalogSchema](variables/BusinessPropertyCatalogSchema.md) | Business Property Catalog schema. Full property catalog array. |
| [PropertyInquirySchema](variables/PropertyInquirySchema.md) | Property Inquiry schema. Tracks customer inquiries about properties with viewing and follow-up management. |
| [CreatePropertyInquirySchema](variables/CreatePropertyInquirySchema.md) | Schema for creating a new property inquiry. |
| [UpdatePropertyInquirySchema](variables/UpdatePropertyInquirySchema.md) | Schema for updating an existing property inquiry. |
| [UpdatePropertyInquiryStatusSchema](variables/UpdatePropertyInquiryStatusSchema.md) | Schema for quick status update on property inquiry. |
| [RentalUnitConditionSchema](variables/RentalUnitConditionSchema.md) | Rental unit condition schema. Captures a condition inspection snapshot at pickup or return. |
| [RentalAssignmentSchema](variables/RentalAssignmentSchema.md) | Rental assignment schema. Records the physical rental unit assigned to a rental reservation. |
| [RoomAssignmentSchema](variables/RoomAssignmentSchema.md) | Room assignment schema. Records the physical room instance assigned to a room reservation. |
| [TableAssignmentSchema](variables/TableAssignmentSchema.md) | Table assignment schema. Records the physical table instance assigned to a table reservation. |
| [MaintenanceBlockSchema](variables/MaintenanceBlockSchema.md) | Maintenance block schema. Represents a time period when a reservable resource instance is unavailable. |
| [CreateMaintenanceBlockSchema](variables/CreateMaintenanceBlockSchema.md) | Schema for creating a new maintenance block. Omits auto-generated fields. |
| [UpdateMaintenanceBlockSchema](variables/UpdateMaintenanceBlockSchema.md) | Schema for updating an existing maintenance block. All fields optional except id. |
| [RentalReservationPaymentSchema](variables/RentalReservationPaymentSchema.md) | Rental reservation payment schema. Captures rental charge and security deposit state for a rental booking. |
| [ChecklistCompletionSchema](variables/ChecklistCompletionSchema.md) | Checklist completion schema. Tracks completion of checklist items defined on Resource.checklistTemplate. |
| [WaiverRefSchema](variables/WaiverRefSchema.md) | Waiver reference schema. Captures waiver document status for rental reservations that require signed waivers. |
| [IDRefSchema](variables/IDRefSchema.md) | Identity verification reference schema. Captures the external identity verification record for a rental reservation. |
| [RentalReservationSchema](variables/RentalReservationSchema.md) | Rental reservation schema. Represents a time-bounded rental booking with payment, waiver, and inspection state. |
| [CreateRentalReservationSchema](variables/CreateRentalReservationSchema.md) | Schema for creating a new rental reservation. Omits auto-generated fields. |
| [UpdateRentalReservationSchema](variables/UpdateRentalReservationSchema.md) | Schema for updating an existing rental reservation. All fields optional except id. |
| [RoomRatePerNightSchema](variables/RoomRatePerNightSchema.md) | Room rate per night schema. Captures the nightly rate snapshot for a room reservation. |
| [RoomReservationSchema](variables/RoomReservationSchema.md) | Room reservation schema. Represents a lodging reservation with check-in/check-out dates and nightly pricing. |
| [CreateRoomReservationSchema](variables/CreateRoomReservationSchema.md) | Schema for creating a new room reservation. Omits auto-generated fields. |
| [UpdateRoomReservationSchema](variables/UpdateRoomReservationSchema.md) | Schema for updating an existing room reservation. All fields optional except id. |
| [point2DSchema](variables/point2DSchema.md) | Two-dimensional point schema. Uses the same coordinate system as table placement x/y values. |
| [SectionGeometrySchema](variables/SectionGeometrySchema.md) | Section geometry schema. Supports automatic, rectangular, and polygon-based section boundaries. |
| [TablePlacementSchema](variables/TablePlacementSchema.md) | Table placement schema. Represents a physical table's position and seating constraints within a floor plan section. |
| [CreateTablePlacementSchema](variables/CreateTablePlacementSchema.md) | Schema for creating a new table placement. Omits auto-generated fields. |
| [UpdateTablePlacementSchema](variables/UpdateTablePlacementSchema.md) | Schema for updating an existing table placement. All fields optional except id. |
| [SectionSchema](variables/SectionSchema.md) | Section schema. Represents a named seating area within a floor plan, including its tables and boundary geometry. |
| [CreateSectionSchema](variables/CreateSectionSchema.md) | Schema for creating a new floor plan section. Omits auto-generated fields. |
| [UpdateSectionSchema](variables/UpdateSectionSchema.md) | Schema for updating an existing floor plan section. All fields optional except id. |
| [TablePlacementWithContextSchema](variables/TablePlacementWithContextSchema.md) | Table placement with context schema. Returns a table placement together with its containing section. |
| [RentalTierDefinitionSchema](variables/RentalTierDefinitionSchema.md) | Rental tier definition schema. Defines an available rental duration tier for reservation pricing and slot generation. |
| [TableReservationSettingsSchema](variables/TableReservationSettingsSchema.md) | Table reservation settings schema. Configures slot duration, turnover, party limits, and booking window for table reservations. |
| [RoomReservationSettingsSchema](variables/RoomReservationSettingsSchema.md) | Room reservation settings schema. Configures stay length, check-in/check-out defaults, and booking window for room reservations. |
| [RentalReservationSettingsSchema](variables/RentalReservationSettingsSchema.md) | Rental reservation settings schema. Configures rental tiers, waiver requirements, identity verification, and deposits. |
| [ReservationSettingsSchema](variables/ReservationSettingsSchema.md) | Reservation settings schema. Stores location-level reservation configuration for table, room, and rental bookings. |
| [CreateReservationSettingsSchema](variables/CreateReservationSettingsSchema.md) | Schema for creating reservation settings. Omits auto-generated fields. |
| [UpdateReservationSettingsSchema](variables/UpdateReservationSettingsSchema.md) | Schema for updating reservation settings. All fields optional except id. |
| [ReservationLocalDateSchema](variables/ReservationLocalDateSchema.md) | Reservation local date schema. Validates business-local dates in YYYY-MM-DD format. |
| [ReservationTimeOfDayValueSchema](variables/ReservationTimeOfDayValueSchema.md) | Reservation time-of-day value schema. Validates human-readable 12-hour local times such as "9:30 AM". |
| [ReservationSlotResourceTypeSchema](variables/ReservationSlotResourceTypeSchema.md) | Reservation slot resource type schema. Restricts slot queries to supported reservation resource types. |
| [TableReservationSlotQueryRequestSchema](variables/TableReservationSlotQueryRequestSchema.md) | Table reservation slot query request schema. Requests candidate table reservation slots for a business-local date. |
| [RoomReservationSlotQueryRequestSchema](variables/RoomReservationSlotQueryRequestSchema.md) | Room reservation slot query request schema. Requests candidate room stay slots for a business-local check-in date. |
| [RentalReservationSlotQueryRequestSchema](variables/RentalReservationSlotQueryRequestSchema.md) | Rental reservation slot query request schema. Requests candidate rental slots for intra-day or multi-day rental periods. |
| [ReservationSlotQueryRequestSchema](variables/ReservationSlotQueryRequestSchema.md) | Reservation slot query request schema. Discriminated union of supported slot query request types. |
| [ReservationCandidateSlotSchema](variables/ReservationCandidateSlotSchema.md) | Reservation candidate slot schema. Shared time-of-day window model for table availability candidates. |
| [RoomCandidateSlotSchema](variables/RoomCandidateSlotSchema.md) | Room candidate slot schema. Date-range model for room availability candidates measured in nights. |
| [RentalCandidateSlotSchema](variables/RentalCandidateSlotSchema.md) | Rental candidate slot schema. Hybrid model supporting both intra-day time windows and multi-day date ranges. |
| [TableReservationSlotQueryResponseSchema](variables/TableReservationSlotQueryResponseSchema.md) | Table reservation slot query response schema. Returns generated table slot candidates for the requested date. |
| [RoomReservationSlotQueryResponseSchema](variables/RoomReservationSlotQueryResponseSchema.md) | Room reservation slot query response schema. Returns generated room slot candidates for the requested stay. |
| [RentalReservationSlotQueryResponseSchema](variables/RentalReservationSlotQueryResponseSchema.md) | Rental reservation slot query response schema. Returns generated rental slot candidates for the requested period. |
| [ReservationSlotQueryResponseSchema](variables/ReservationSlotQueryResponseSchema.md) | Reservation slot query response schema. Discriminated union of supported slot query response types. |
| [CanvasDimensionsSchema](variables/CanvasDimensionsSchema.md) | Canvas dimensions schema. Defines the coordinate space used for floor plan rendering. |
| [FloorPlanSchema](variables/FloorPlanSchema.md) | Floor plan schema. Represents a table layout canvas for a reservable business location. |
| [CreateFloorPlanSchema](variables/CreateFloorPlanSchema.md) | Schema for creating a new floor plan. Omits auto-generated fields. |
| [UpdateFloorPlanSchema](variables/UpdateFloorPlanSchema.md) | Schema for updating an existing floor plan. All fields optional except id. |
| [TableReservationSchema](variables/TableReservationSchema.md) | Table reservation schema. Represents a reservation request for a table-based venue such as a restaurant. |
| [CreateTableReservationSchema](variables/CreateTableReservationSchema.md) | Schema for creating a new table reservation. Omits auto-generated fields. |
| [UpdateTableReservationSchema](variables/UpdateTableReservationSchema.md) | Schema for updating an existing table reservation. All fields optional except id. |
| [ResourceCategoryChannelMappingSchema](variables/ResourceCategoryChannelMappingSchema.md) | Resource category channel mapping schema. Maps reservation resource categories to external platform category IDs. |
| [ResourceCategorySchema](variables/ResourceCategorySchema.md) | Resource category schema. Groups reservation resources by type, location, channel mapping, and display order. |
| [CreateResourceCategorySchema](variables/CreateResourceCategorySchema.md) | Schema for creating a new resource category. Omits auto-generated fields. |
| [UpdateResourceCategorySchema](variables/UpdateResourceCategorySchema.md) | Schema for updating an existing resource category. All fields optional except id. |
| [ResourceInstanceAttributeSchema](variables/ResourceInstanceAttributeSchema.md) | Resource instance attribute schema. Stores flexible key/value attributes on physical reservation inventory. |
| [ResourceInstanceSchema](variables/ResourceInstanceSchema.md) | Resource instance schema. Represents a physical table, room, rental unit, or other reservable unit. |
| [CreateResourceInstanceSchema](variables/CreateResourceInstanceSchema.md) | Schema for creating a new resource instance. Omits auto-generated fields. |
| [UpdateResourceInstanceSchema](variables/UpdateResourceInstanceSchema.md) | Schema for updating an existing resource instance. All fields optional except id. |
| [ResourceChannelMappingSchema](variables/ResourceChannelMappingSchema.md) | Resource channel mapping schema. Maps a reservation resource to an external platform resource ID. |
| [ResourceCapacityRangeSchema](variables/ResourceCapacityRangeSchema.md) | Capacity range schema. Used by table resources that support a party size range. |
| [ResourceCapacityOccupancySchema](variables/ResourceCapacityOccupancySchema.md) | Occupancy capacity schema. Used by room resources with standard and maximum occupancy. |
| [ResourceCapacitySingleSchema](variables/ResourceCapacitySingleSchema.md) | Single capacity schema. Used by rental resources that represent one reservable unit at a time. |
| [ResourceCapacitySchema](variables/ResourceCapacitySchema.md) | Resource capacity schema. Discriminated union of mode-specific reservation capacity models. |
| [ResourcePricingNoneSchema](variables/ResourcePricingNoneSchema.md) | No-pricing strategy schema. Used for resources that do not quote pricing during reservation. |
| [ResourcePricingDayOfWeekSchema](variables/ResourcePricingDayOfWeekSchema.md) | Day-of-week pricing strategy schema. Used for nightly or daily resources with weekday-specific rates. |
| [ResourcePricingTierSchema](variables/ResourcePricingTierSchema.md) | Resource pricing tier schema. Defines one tier in a tiered reservation pricing strategy. |
| [ResourcePricingTieredSchema](variables/ResourcePricingTieredSchema.md) | Tiered pricing strategy schema. Used for rentals or resources priced by duration or quantity bands. |
| [ResourcePricingStrategySchema](variables/ResourcePricingStrategySchema.md) | Resource pricing strategy schema. Discriminated union of supported reservation pricing models. |
| [ResourceAttributeSchema](variables/ResourceAttributeSchema.md) | Resource attribute schema. Stores flexible key/value attributes for resource catalog filtering and integrations. |
| [ChecklistTemplateItemSchema](variables/ChecklistTemplateItemSchema.md) | Checklist template item schema. Defines a pickup or return inspection item used by rental reservations. |
| [ResourceSchema](variables/ResourceSchema.md) | Resource schema. Defines a reservable resource category such as a table type, room type, or rental item type. |
| [CreateResourceSchema](variables/CreateResourceSchema.md) | Schema for creating a new reservation resource. |
| [UpdateResourceSchema](variables/UpdateResourceSchema.md) | Schema for updating an existing reservation resource. All fields optional except id. The create-time instance requirement is not enforced on update. |
| [BusinessResourceCatalogSchema](variables/BusinessResourceCatalogSchema.md) | Business resource catalog schema. Represents the complete reservation resource catalog for a business context. |
| [ResourceDefinitionSchema](variables/ResourceDefinitionSchema.md) | Resource definition schema. Represents the stable identity for a versioned reservation resource catalog. |
| [ResourceRevisionSchema](variables/ResourceRevisionSchema.md) | Resource revision schema. Represents a specific editable or published version of a resource definition. |
| [CreateResourceDefinitionSchema](variables/CreateResourceDefinitionSchema.md) | Schema for creating a new resource definition. Omits auto-generated fields. |
| [UpdateResourceDefinitionSchema](variables/UpdateResourceDefinitionSchema.md) | Schema for updating an existing resource definition. All fields optional except id. |
| [CreateResourceRevisionSchema](variables/CreateResourceRevisionSchema.md) | Schema for creating a new resource revision. Omits auto-generated fields. |
| [UpdateResourceRevisionSchema](variables/UpdateResourceRevisionSchema.md) | Schema for updating an existing resource revision. All fields optional except id. |
| [DeriveResourceRevisionRequestSchema](variables/DeriveResourceRevisionRequestSchema.md) | Request schema for deriving a new resource revision. |
| [DeriveResourceRevisionResultSchema](variables/DeriveResourceRevisionResultSchema.md) | Result schema returned after deriving a resource revision. |
| [ResourceRevisionContextSchema](variables/ResourceRevisionContextSchema.md) | Resource revision context schema. Identifies a resource definition and the revision currently in use. |
| [DynamicFieldValueSchema](variables/DynamicFieldValueSchema.md) | Schema for dynamic field value types. Accepts any value type to support the various DynamicFieldType values (text, number, boolean, date, select options, etc.) |
| [AppointmentAdditionalInfoSchema](variables/AppointmentAdditionalInfoSchema.md) | Appointment Additional Info schema. Stores dynamic field values captured during appointment booking. |
| [CreateAppointmentAdditionalInfoSchema](variables/CreateAppointmentAdditionalInfoSchema.md) | Schema for creating appointment additional info. Omits auto-generated fields. |
| [UpdateAppointmentAdditionalInfoSchema](variables/UpdateAppointmentAdditionalInfoSchema.md) | Schema for updating appointment additional info. All fields optional except id (required). |
| [AppointmentFieldConfigSchema](variables/AppointmentFieldConfigSchema.md) | Appointment Field Config schema. Organization-level field library for appointment booking forms. |
| [CreateAppointmentFieldConfigSchema](variables/CreateAppointmentFieldConfigSchema.md) | Schema for creating an appointment field config. Omits auto-generated fields. |
| [UpdateAppointmentFieldConfigSchema](variables/UpdateAppointmentFieldConfigSchema.md) | Schema for updating an appointment field config. All fields optional except id (required). |
| [ServiceCategoryChannelMappingSchema](variables/ServiceCategoryChannelMappingSchema.md) | Per-channel service category ID mapping. |
| [ServiceChannelMappingSchema](variables/ServiceChannelMappingSchema.md) | Per-channel external service ID mapping. |
| [ServiceDurationSegmentsSchema](variables/ServiceDurationSegmentsSchema.md) | Service duration segments schema. Breaks down service time into distinct phases. |
| [ServiceDateRangeSchema](variables/ServiceDateRangeSchema.md) | Service date range schema. Defines seasonal availability or blackout periods. |
| [ServiceAvailabilitySchema](variables/ServiceAvailabilitySchema.md) | Service availability schema. Configures when a service is available for booking. |
| [ServiceAppointmentFieldConfigSchema](variables/ServiceAppointmentFieldConfigSchema.md) | Service-level appointment field configuration (embedded). Inherits from organization-level config and allows service-specific customization. |
| [ServiceCategorySchema](variables/ServiceCategorySchema.md) | Service Category schema. Groups related services for organization and display. |
| [CreateServiceCategorySchema](variables/CreateServiceCategorySchema.md) | Schema for creating a new service category. Omits auto-generated fields. |
| [UpdateServiceCategorySchema](variables/UpdateServiceCategorySchema.md) | Schema for updating an existing service category. All fields optional except id (required). |
| [BusinessServiceConfigSchema](variables/BusinessServiceConfigSchema.md) | Business Service Configuration schema. Defines a service offering with pricing, scheduling, and booking rules. |
| [CreateBusinessServiceSchema](variables/CreateBusinessServiceSchema.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [UpdateBusinessServiceSchema](variables/UpdateBusinessServiceSchema.md) | Schema for updating an existing business service. All fields optional except id (required). |
| [ServiceCatalogSchema](variables/ServiceCatalogSchema.md) | Service catalog schema. Represents a category with its associated services. |
| [BusinessServiceCatalogSchema](variables/BusinessServiceCatalogSchema.md) | Business service catalog schema. Array of service categories with their services. |
| [ServiceAppointmentSchema](variables/ServiceAppointmentSchema.md) | Service Appointment schema. Represents a scheduled appointment for a service. |
| [CreateServiceAppointmentSchema](variables/CreateServiceAppointmentSchema.md) | Schema for creating a new service appointment. Omits auto-generated fields and cancelReason (set during cancellation). |
| [UpdateServiceAppointmentSchema](variables/UpdateServiceAppointmentSchema.md) | Schema for updating an existing service appointment. All fields optional except id (required). Includes cancelReason for cancellation updates. |
| [CreateServiceAppointmentWithCustomDataSchema](variables/CreateServiceAppointmentWithCustomDataSchema.md) | Schema for creating an appointment with custom field data. Combines appointment creation with dynamic field values. |
| [ServiceAppointmentWithAdditionalInfoSchema](variables/ServiceAppointmentWithAdditionalInfoSchema.md) | Schema for an appointment with its additional info. Used for displaying complete appointment details. |
| [ServicePersonSchema](variables/ServicePersonSchema.md) | Service Person schema. Represents a staff member or provider who can perform services. |
| [CreateServicePersonSchema](variables/CreateServicePersonSchema.md) | Schema for creating a new service person. Omits auto-generated fields. |
| [UpdateServicePersonSchema](variables/UpdateServicePersonSchema.md) | Schema for updating an existing service person. All fields optional except id (required). |
| [ServicePricingRuleConditionSchema](variables/ServicePricingRuleConditionSchema.md) | Service pricing rule condition schema. Extends common pricing conditions with service-specific targeting. |
| [ServicePricingRuleSchema](variables/ServicePricingRuleSchema.md) | Service Pricing Rule schema. Defines a pricing rule for service-based pricing adjustments. |
| [CreateServicePricingRuleSchema](variables/CreateServicePricingRuleSchema.md) | Schema for creating a new service pricing rule. Omits auto-generated fields, includes optional placement for ordering. |
| [UpdateServicePricingRuleSchema](variables/UpdateServicePricingRuleSchema.md) | Schema for updating an existing service pricing rule. All fields optional except id (required). |
| [ServiceProviderSchema](variables/ServiceProviderSchema.md) | Service Provider join schema. Links services to providers with optional price/duration overrides. |
| [CreateServiceProviderSchema](variables/CreateServiceProviderSchema.md) | Schema for creating a new service provider assignment. Omits auto-generated fields. |
| [UpdateServiceProviderSchema](variables/UpdateServiceProviderSchema.md) | Schema for updating an existing service provider assignment. All fields optional except id (required). |
| [LocalDateSchema](variables/LocalDateSchema.md) | Local date format schema (YYYY-MM-DD). |
| [TimezoneSchema](variables/TimezoneSchema.md) | Timezone identifier schema. |
| [TimeOfDayValueSchema](variables/TimeOfDayValueSchema.md) | Time of day value schema (h:mm AM/PM format). |
| [ServiceSlotQueryRequestSchema](variables/ServiceSlotQueryRequestSchema.md) | Service slot query request schema. Used to request available appointment slots for a service. |
| [ServiceCandidateSlotSchema](variables/ServiceCandidateSlotSchema.md) | Service candidate slot schema. Represents an available time slot for booking. |
| [ServiceSlotQueryResponseSchema](variables/ServiceSlotQueryResponseSchema.md) | Service slot query response schema. Contains available slots for the requested date. |
| [ServiceProviderTimeOffRecurrenceSchema](variables/ServiceProviderTimeOffRecurrenceSchema.md) | Recurrence rule for recurring time off. Defines which days of the week the time off applies. |
| [ServiceProviderTimeOffSchema](variables/ServiceProviderTimeOffSchema.md) | Service Provider Time Off schema. Represents a time period when a provider is unavailable for appointments. |
| [CreateServiceProviderTimeOffSchema](variables/CreateServiceProviderTimeOffSchema.md) | Schema for creating a new service provider time off record. Omits auto-generated fields. |
| [UpdateServiceProviderTimeOffSchema](variables/UpdateServiceProviderTimeOffSchema.md) | Schema for updating an existing service provider time off record. All fields optional except id (required). |
| [TaxRuleSchema](variables/TaxRuleSchema.md) | Tax rule schema. Defines tax configurations for orders including percentage and fixed amount taxes. |
| [CreateTaxRuleSchema](variables/CreateTaxRuleSchema.md) | Schema for creating a new tax rule. Omits auto-generated fields. |
| [UpdateTaxRuleSchema](variables/UpdateTaxRuleSchema.md) | Schema for updating an existing tax rule. All fields optional except id. |

## References

### PricingChannel

Re-exports [PricingChannel](../type-definitions/enumerations/PricingChannel.md)

***

### PricingRuleAdjustmentType

Re-exports [PricingRuleAdjustmentType](../type-definitions/enumerations/PricingRuleAdjustmentType.md)

***

### PricingRuleApplyLevel

Re-exports [PricingRuleApplyLevel](../type-definitions/enumerations/PricingRuleApplyLevel.md)
