[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourcePricingStrategy

# Type Alias: ResourcePricingStrategy

```ts
type ResourcePricingStrategy = 
  | {
  kind: "none";
  holdPolicy?: string | null;
}
  | {
  kind: "dayOfWeek";
  rates: {
     mon: number;
     tue: number;
     wed: number;
     thu: number;
     fri: number;
     sat: number;
     sun: number;
  };
}
  | {
  kind: "tiered";
  tiers: {
     from: number;
     to?: number | null;
     price: number;
  }[];
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:393](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L393)

Resource pricing strategy schema.
Discriminated union of supported reservation pricing models.
