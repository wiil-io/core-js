[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:372](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L372)

Resource pricing strategy schema.
Discriminated union of supported reservation pricing models.
