[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:355

Reservation candidate slot schema.
Shared time-of-day window model for table availability candidates.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:150 |
| <a id="starttimeofday"></a> `startTimeOfDay` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:151 |
| <a id="startminuteofday"></a> `startMinuteOfDay` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:152 |
| <a id="endminuteofday"></a> `endMinuteOfDay` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:153 |
| <a id="starttimeutcsec"></a> `startTimeUtcSec` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:154 |
| <a id="endtimeutcsec"></a> `endTimeUtcSec` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:155 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:156 |
| <a id="capacityremaining"></a> `capacityRemaining?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:157 |
| <a id="pricequote"></a> `priceQuote?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:158 |
