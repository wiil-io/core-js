[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourcePricingDayOfWeekSchema

# Variable: ResourcePricingDayOfWeekSchema

```ts
const ResourcePricingDayOfWeekSchema: ZodObject<{
  kind: ZodLiteral<"dayOfWeek">;
  rates: ZodObject<{
     mon: ZodNumber;
     tue: ZodNumber;
     wed: ZodNumber;
     thu: ZodNumber;
     fri: ZodNumber;
     sat: ZodNumber;
     sun: ZodNumber;
  }, $strip>;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:120](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L120)

Day-of-week pricing strategy schema.
Used for nightly or daily resources with weekday-specific rates.
