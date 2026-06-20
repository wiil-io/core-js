[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.69**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:392](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L392)

Resource capacity schema.
Discriminated union of mode-specific reservation capacity models.
