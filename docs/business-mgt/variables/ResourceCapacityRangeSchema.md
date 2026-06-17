[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.56**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:43](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L43)

Capacity range schema.
Used by table resources that support a party size range.
