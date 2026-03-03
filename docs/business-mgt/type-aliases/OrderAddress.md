[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.35**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / OrderAddress

# Type Alias: OrderAddress

```ts
type OrderAddress = 
  | {
  street: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  deliveryInstructions?: string;
}
  | undefined;
```

Defined in: [src/core/business-mgt/order.schema.ts:12](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/order.schema.ts#L12)

Order address schema extending base address with delivery instructions.
