[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / BusinessSupportServices

# Enumeration: BusinessSupportServices

Defined in: [src/core/type-definitions/account-definitions.ts:70](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/account-definitions.ts#L70)

Business support services enumeration.

Defines the types of business support services available in the platform
for organizations to enable specific industry-focused features.

## Example

```typescript
const enabledServices: BusinessSupportServices[] = [
  BusinessSupportServices.APPOINTMENT_MANAGEMENT
];
```

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="appointment_management"></a> `APPOINTMENT_MANAGEMENT` | `"appointment_management"` | Appointment scheduling and management functionality | [src/core/type-definitions/account-definitions.ts:72](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/account-definitions.ts#L72) |
| <a id="menu_order_management"></a> `MENU_ORDER_MANAGEMENT` | `"menu_order_management"` | Restaurant menu and food order management functionality | [src/core/type-definitions/account-definitions.ts:74](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/account-definitions.ts#L74) |
| <a id="product_order_management"></a> `PRODUCT_ORDER_MANAGEMENT` | `"product_order_management"` | E-commerce product order management functionality | [src/core/type-definitions/account-definitions.ts:76](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/account-definitions.ts#L76) |
| <a id="reservation_management"></a> `RESERVATION_MANAGEMENT` | `"reservation_management"` | Table and venue reservation management functionality | [src/core/type-definitions/account-definitions.ts:78](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/account-definitions.ts#L78) |
| <a id="property_management"></a> `PROPERTY_MANAGEMENT` | `"property_management"` | Property listing and rental management functionality | [src/core/type-definitions/account-definitions.ts:80](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/account-definitions.ts#L80) |
| <a id="none"></a> `NONE` | `"none"` | No business support services enabled | [src/core/type-definitions/account-definitions.ts:82](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/account-definitions.ts#L82) |
