[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / BusinessSupportServices

# Enumeration: BusinessSupportServices

Defined in: [src/core/type-definitions/account-definitions.ts:71](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L71)

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
| <a id="appointment_management"></a> `APPOINTMENT_MANAGEMENT` | `"appointment_management"` | Appointment scheduling and management functionality | [src/core/type-definitions/account-definitions.ts:73](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L73) |
| <a id="inventory_management"></a> `INVENTORY_MANAGEMENT` | `"inventory_management"` | Inventory tracking and stock management functionality | [src/core/type-definitions/account-definitions.ts:75](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L75) |
| <a id="menu_order_management"></a> `MENU_ORDER_MANAGEMENT` | `"menu_order_management"` | Restaurant menu and food order management functionality | [src/core/type-definitions/account-definitions.ts:77](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L77) |
| <a id="product_order_management"></a> `PRODUCT_ORDER_MANAGEMENT` | `"product_order_management"` | E-commerce product order management functionality | [src/core/type-definitions/account-definitions.ts:79](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L79) |
| <a id="reservation_management"></a> `RESERVATION_MANAGEMENT` | `"reservation_management"` | Table and venue reservation management functionality | [src/core/type-definitions/account-definitions.ts:81](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L81) |
| <a id="property_management"></a> `PROPERTY_MANAGEMENT` | `"property_management"` | Property listing and rental management functionality | [src/core/type-definitions/account-definitions.ts:83](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L83) |
| <a id="none"></a> `NONE` | `"none"` | No business support services enabled | [src/core/type-definitions/account-definitions.ts:85](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/type-definitions/account-definitions.ts#L85) |
