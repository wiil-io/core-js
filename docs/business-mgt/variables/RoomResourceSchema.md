[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-resource.schema.ts:22](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/reservation-resource.schema.ts#L22)

Room resource schema for hotel/accommodation bookings.
