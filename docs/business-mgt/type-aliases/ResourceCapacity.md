[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceCapacity

# Type Alias: ResourceCapacity

```ts
type ResourceCapacity = 
  | {
  kind: "range";
  min: number;
  max: number;
}
  | {
  kind: "occupancy";
  standard: number;
  max: number;
  extraFee?: number | null;
}
  | {
  kind: "single";
  value: number;
  weightLimit?: number | null;
  skillLevel?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:371](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L371)

Resource capacity schema.
Discriminated union of mode-specific reservation capacity models.
