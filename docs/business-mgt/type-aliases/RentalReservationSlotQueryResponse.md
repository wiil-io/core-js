[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReservationSlotQueryResponse

# Type Alias: RentalReservationSlotQueryResponse

```ts
type RentalReservationSlotQueryResponse = {
  resourceType: RENTAL;
  pickupDate: string;
  returnDate: string;
  generatedAt: number;
  slots: {
     resourceId: string;
     pickupDate: string;
     returnDate: string;
     pickupTimeOfDay?: string | null;
     returnTimeOfDay?: string | null;
     durationMinutes?: number | null;
     startTimeUtcSec: number;
     endTimeUtcSec: number;
     unitsAvailable: number;
     totalWithTax: number;
     priceQuote?: number | null;
     isAvailable: boolean;
  }[];
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:360](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L360)

Rental reservation slot query response schema.
Returns generated rental slot candidates for the requested period.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourcetype"></a> `resourceType` | [`RENTAL`](../../type-definitions/enumerations/ResourceType.md#rental) | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:323](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L323) |
| <a id="pickupdate"></a> `pickupDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:324](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L324) |
| <a id="returndate"></a> `returnDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:325](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L325) |
| <a id="generatedat"></a> `generatedAt` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:326](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L326) |
| <a id="slots"></a> `slots` | \{ `resourceId`: `string`; `pickupDate`: `string`; `returnDate`: `string`; `pickupTimeOfDay?`: `string` \| `null`; `returnTimeOfDay?`: `string` \| `null`; `durationMinutes?`: `number` \| `null`; `startTimeUtcSec`: `number`; `endTimeUtcSec`: `number`; `unitsAvailable`: `number`; `totalWithTax`: `number`; `priceQuote?`: `number` \| `null`; `isAvailable`: `boolean`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:327](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L327) |
