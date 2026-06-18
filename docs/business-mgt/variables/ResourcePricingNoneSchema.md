[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourcePricingNoneSchema

# Variable: ResourcePricingNoneSchema

```ts
const ResourcePricingNoneSchema: ZodObject<{
  kind: ZodLiteral<"none">;
  holdPolicy: ZodOptional<ZodNullable<ZodString>>;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:107](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L107)

No-pricing strategy schema.
Used for resources that do not quote pricing during reservation.
