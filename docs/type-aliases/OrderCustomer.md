[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / OrderCustomer

# Type Alias: OrderCustomer

```ts
type OrderCustomer = {
  customerId?: string;
  name: string;
  phone?: string;
  email?: string;
  address?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
     deliveryInstructions?: string;
  };
};
```

Defined in: src/core/business-mgt/order.schema.ts:56

Shared customer schema for orders.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="customerid"></a> `customerId?` | `string` | - | src/core/business-mgt/order.schema.ts:27 |
| <a id="name"></a> `name` | `string` | - | src/core/business-mgt/order.schema.ts:28 |
| <a id="phone"></a> `phone?` | `string` | - | src/core/business-mgt/order.schema.ts:29 |
| <a id="email"></a> `email?` | `string` | - | src/core/business-mgt/order.schema.ts:30 |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | `OrderAddress` | src/core/business-mgt/order.schema.ts:31 |
| `address.street` | `string` | - | src/core/base.schema.ts:19 |
| `address.street2?` | `string` | - | src/core/base.schema.ts:20 |
| `address.city` | `string` | - | src/core/base.schema.ts:21 |
| `address.state` | `string` | - | src/core/base.schema.ts:22 |
| `address.postalCode` | `string` | - | src/core/base.schema.ts:23 |
| `address.country` | `string` | - | src/core/base.schema.ts:24 |
| `address.deliveryInstructions?` | `string` | - | src/core/business-mgt/order.schema.ts:13 |
