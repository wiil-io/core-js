[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / OrderCustomer

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

Defined in: [src/core/business-mgt/order.schema.ts:56](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/order.schema.ts#L56)

Shared customer schema for orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/order.schema.ts:27](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/order.schema.ts#L27) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/order.schema.ts:28](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/order.schema.ts#L28) |
| <a id="phone"></a> `phone?` | `string` | [src/core/business-mgt/order.schema.ts:29](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/order.schema.ts#L29) |
| <a id="email"></a> `email?` | `string` | [src/core/business-mgt/order.schema.ts:30](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/order.schema.ts#L30) |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/order.schema.ts:31](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/order.schema.ts#L31) |
| `address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L18) |
| `address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L19) |
| `address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L20) |
| `address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L21) |
| `address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L22) |
| `address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L23) |
| `address.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/order.schema.ts#L13) |
