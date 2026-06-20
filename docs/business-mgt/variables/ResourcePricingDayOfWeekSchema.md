[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:120](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L120)

Day-of-week pricing strategy schema.
Used for nightly or daily resources with weekday-specific rates.
