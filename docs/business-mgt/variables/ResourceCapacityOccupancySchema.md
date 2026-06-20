[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:59](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L59)

Occupancy capacity schema.
Used by room resources with standard and maximum occupancy.
