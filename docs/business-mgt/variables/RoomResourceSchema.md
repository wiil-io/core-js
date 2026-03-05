[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.40**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-resource.schema.ts:22](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/reservation-resource.schema.ts#L22)

Room resource schema for hotel/accommodation bookings.
