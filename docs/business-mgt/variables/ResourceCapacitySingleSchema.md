[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceCapacitySingleSchema

# Variable: ResourceCapacitySingleSchema

```ts
const ResourceCapacitySingleSchema: ZodObject<{
  kind: ZodLiteral<"single">;
  value: ZodNumber;
  weightLimit: ZodOptional<ZodNullable<ZodNumber>>;
  skillLevel: ZodOptional<ZodNullable<ZodString>>;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:76](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L76)

Single capacity schema.
Used by rental resources that represent one reservable unit at a time.
