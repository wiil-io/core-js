[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-resource.schema.ts:22](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/reservation-resource.schema.ts#L22)

Room resource schema for hotel/accommodation bookings.
