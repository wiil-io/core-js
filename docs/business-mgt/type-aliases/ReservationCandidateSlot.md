[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ReservationCandidateSlot

# Type Alias: ReservationCandidateSlot

```ts
type ReservationCandidateSlot = {
  resourceId: string;
  startTimeOfDay: string;
  startMinuteOfDay: number;
  endMinuteOfDay: number;
  startTimeUtcSec: number;
  endTimeUtcSec: number;
  isAvailable: boolean;
  capacityRemaining?: number | null;
  priceQuote?: number | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:355](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L355)

Reservation candidate slot schema.
Shared time-of-day window model for table availability candidates.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:150](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L150) |
| <a id="starttimeofday"></a> `startTimeOfDay` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:151](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L151) |
| <a id="startminuteofday"></a> `startMinuteOfDay` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:152](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L152) |
| <a id="endminuteofday"></a> `endMinuteOfDay` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:153](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L153) |
| <a id="starttimeutcsec"></a> `startTimeUtcSec` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:154](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L154) |
| <a id="endtimeutcsec"></a> `endTimeUtcSec` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:155](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L155) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:156](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L156) |
| <a id="capacityremaining"></a> `capacityRemaining?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:157](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L157) |
| <a id="pricequote"></a> `priceQuote?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:158](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L158) |
