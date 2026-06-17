[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.57**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:142](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L142)

Resource pricing tier schema.
Defines one tier in a tiered reservation pricing strategy.
