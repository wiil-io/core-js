[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceCapacityOccupancySchema

# Variable: ResourceCapacityOccupancySchema

```ts
const ResourceCapacityOccupancySchema: ZodObject<{
  kind: ZodLiteral<"occupancy">;
  standard: ZodNumber;
  max: ZodNumber;
  extraFee: ZodOptional<ZodNullable<ZodNumber>>;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:59](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L59)

Occupancy capacity schema.
Used by room resources with standard and maximum occupancy.
