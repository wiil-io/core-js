[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:76](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L76)

Single capacity schema.
Used by rental resources that represent one reservable unit at a time.
