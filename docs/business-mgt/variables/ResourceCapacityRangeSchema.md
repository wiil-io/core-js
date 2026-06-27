[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:43](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L43)

Capacity range schema.
Used by table resources that support a party size range.
