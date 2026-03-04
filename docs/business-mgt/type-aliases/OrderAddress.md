[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.36**](../../README.md)

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

Defined in: [src/core/business-mgt/order.schema.ts:12](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/order.schema.ts#L12)

Order address schema extending base address with delivery instructions.
