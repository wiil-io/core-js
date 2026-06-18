[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

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

Defined in: [src/core/business-mgt/order.schema.ts:28](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L28)

Order address schema.
Extends base address with delivery-specific instructions.
