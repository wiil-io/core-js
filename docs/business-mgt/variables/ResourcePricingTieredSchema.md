[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourcePricingTieredSchema

# Variable: ResourcePricingTieredSchema

```ts
const ResourcePricingTieredSchema: ZodObject<{
  kind: ZodLiteral<"tiered">;
  tiers: ZodArray<ZodObject<{
     from: ZodNumber;
     to: ZodOptional<ZodNullable<ZodNumber>>;
     price: ZodNumber;
  }, $strip>>;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:156](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L156)

Tiered pricing strategy schema.
Used for rentals or resources priced by duration or quantity bands.
