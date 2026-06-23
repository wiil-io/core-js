[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:43](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L43)

Capacity range schema.
Used by table resources that support a party size range.
