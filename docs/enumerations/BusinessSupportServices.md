[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / BusinessSupportServices

# Enumeration: BusinessSupportServices

Defined in: src/core/type-definitions/account-definitions.ts:71

Business support services enumeration.

Defines the types of business support services available in the platform
for organizations to enable specific industry-focused features.

## Example

```typescript
const enabledServices: BusinessSupportServices[] = [
  BusinessSupportServices.APPOINTMENT_MANAGEMENT,
  BusinessSupportServices.INVENTORY_MANAGEMENT
];
```

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="appointment_management"></a> `APPOINTMENT_MANAGEMENT` | `"appointment_management"` | Appointment scheduling and management functionality | src/core/type-definitions/account-definitions.ts:73 |
| <a id="inventory_management"></a> `INVENTORY_MANAGEMENT` | `"inventory_management"` | Inventory tracking and stock management functionality | src/core/type-definitions/account-definitions.ts:75 |
| <a id="menu_order_management"></a> `MENU_ORDER_MANAGEMENT` | `"menu_order_management"` | Restaurant menu and food order management functionality | src/core/type-definitions/account-definitions.ts:77 |
| <a id="product_order_management"></a> `PRODUCT_ORDER_MANAGEMENT` | `"product_order_management"` | E-commerce product order management functionality | src/core/type-definitions/account-definitions.ts:79 |
| <a id="reservation_management"></a> `RESERVATION_MANAGEMENT` | `"reservation_management"` | Table and venue reservation management functionality | src/core/type-definitions/account-definitions.ts:81 |
| <a id="none"></a> `NONE` | `"none"` | No business support services enabled | src/core/type-definitions/account-definitions.ts:83 |
