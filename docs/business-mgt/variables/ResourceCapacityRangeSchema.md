[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceCapacityRangeSchema

# Variable: ResourceCapacityRangeSchema

```ts
const ResourceCapacityRangeSchema: ZodObject<{
  kind: ZodLiteral<"range">;
  min: ZodNumber;
  max: ZodNumber;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:43](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L43)

Capacity range schema.
Used by table resources that support a party size range.
