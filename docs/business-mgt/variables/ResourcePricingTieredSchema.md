[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:156](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L156)

Tiered pricing strategy schema.
Used for rentals or resources priced by duration or quantity bands.
