[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:142](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L142)

Resource pricing tier schema.
Defines one tier in a tiered reservation pricing strategy.
