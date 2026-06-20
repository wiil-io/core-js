[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalCandidateSlot

# Type Alias: RentalCandidateSlot

```ts
type RentalCandidateSlot = {
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
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:357](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L357)

Rental candidate slot schema.
Hybrid model supporting both intra-day time windows and multi-day date ranges.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:231](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L231) |
| <a id="pickupdate"></a> `pickupDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:232](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L232) |
| <a id="returndate"></a> `returnDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:233](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L233) |
| <a id="pickuptimeofday"></a> `pickupTimeOfDay?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:234](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L234) |
| <a id="returntimeofday"></a> `returnTimeOfDay?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:235](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L235) |
| <a id="durationminutes"></a> `durationMinutes?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:236](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L236) |
| <a id="starttimeutcsec"></a> `startTimeUtcSec` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:237](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L237) |
| <a id="endtimeutcsec"></a> `endTimeUtcSec` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:238](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L238) |
| <a id="unitsavailable"></a> `unitsAvailable` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:239](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L239) |
| <a id="totalwithtax"></a> `totalWithTax` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:240](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L240) |
| <a id="pricequote"></a> `priceQuote?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:241](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L241) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:242](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L242) |
