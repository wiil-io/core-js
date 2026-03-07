[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.45**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomResourceSchema

# Variable: RoomResourceSchema

```ts
const RoomResourceSchema: ZodObject<{
  roomNumber: ZodString;
  roomType: ZodString;
  pricePerNight: ZodNumber;
  view: ZodOptional<ZodString>;
  bedType: ZodOptional<ZodString>;
  isSmoking: ZodDefault<ZodBoolean>;
  accessibilityFeatures: ZodOptional<ZodString>;
}, $strip>;
```

Defined in: [src/core/business-mgt/reservation-resource.schema.ts:22](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/reservation-resource.schema.ts#L22)

Room resource schema for hotel/accommodation bookings.
