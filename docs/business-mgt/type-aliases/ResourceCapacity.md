[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:371](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L371)

Resource capacity schema.
Discriminated union of mode-specific reservation capacity models.
