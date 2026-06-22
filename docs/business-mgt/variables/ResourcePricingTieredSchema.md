[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:156](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L156)

Tiered pricing strategy schema.
Used for rentals or resources priced by duration or quantity bands.
