[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:59](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L59)

Occupancy capacity schema.
Used by room resources with standard and maximum occupancy.
