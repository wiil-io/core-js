[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableReservationSlotQueryResponse

# Type Alias: TableReservationSlotQueryResponse

```ts
type TableReservationSlotQueryResponse = {
  resourceType: TABLE;
  localDate: string;
  generatedAt: number;
  slots: {
     resourceId: string;
     startTimeOfDay: string;
     startMinuteOfDay: number;
     endMinuteOfDay: number;
     startTimeUtcSec: number;
     endTimeUtcSec: number;
     isAvailable: boolean;
     capacityRemaining?: number | null;
     priceQuote?: number | null;
  }[];
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:358](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L358)

Table reservation slot query response schema.
Returns generated table slot candidates for the requested date.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="resourcetype"></a> `resourceType` | [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) | - | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:284](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L284) |
| <a id="localdate"></a> `localDate` | `string` | `ReservationLocalDateSchema` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:285](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L285) |
| <a id="generatedat"></a> `generatedAt` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:286](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L286) |
| <a id="slots"></a> `slots` | \{ `resourceId`: `string`; `startTimeOfDay`: `string`; `startMinuteOfDay`: `number`; `endMinuteOfDay`: `number`; `startTimeUtcSec`: `number`; `endTimeUtcSec`: `number`; `isAvailable`: `boolean`; `capacityRemaining?`: `number` \| `null`; `priceQuote?`: `number` \| `null`; \}[] | - | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:287](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L287) |
