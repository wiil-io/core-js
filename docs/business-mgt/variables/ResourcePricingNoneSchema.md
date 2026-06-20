[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourcePricingNoneSchema

# Variable: ResourcePricingNoneSchema

```ts
const ResourcePricingNoneSchema: ZodObject<{
  kind: ZodLiteral<"none">;
  holdPolicy: ZodOptional<ZodNullable<ZodString>>;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:107](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L107)

No-pricing strategy schema.
Used for resources that do not quote pricing during reservation.
