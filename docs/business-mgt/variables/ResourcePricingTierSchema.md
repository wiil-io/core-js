[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourcePricingTierSchema

# Variable: ResourcePricingTierSchema

```ts
const ResourcePricingTierSchema: ZodObject<{
  from: ZodNumber;
  to: ZodOptional<ZodNullable<ZodNumber>>;
  price: ZodNumber;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:142](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L142)

Resource pricing tier schema.
Defines one tier in a tiered reservation pricing strategy.
