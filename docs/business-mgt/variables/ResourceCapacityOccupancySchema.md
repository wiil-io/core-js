[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:59](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L59)

Occupancy capacity schema.
Used by room resources with standard and maximum occupancy.
