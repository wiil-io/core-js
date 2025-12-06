[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.28**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-resource.schema.ts:22](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/business-mgt/reservation-resource.schema.ts#L22)

Room resource schema for hotel/accommodation bookings.
