[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:357

Rental candidate slot schema.
Hybrid model supporting both intra-day time windows and multi-day date ranges.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:231 |
| <a id="pickupdate"></a> `pickupDate` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:232 |
| <a id="returndate"></a> `returnDate` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:233 |
| <a id="pickuptimeofday"></a> `pickupTimeOfDay?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:234 |
| <a id="returntimeofday"></a> `returnTimeOfDay?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:235 |
| <a id="durationminutes"></a> `durationMinutes?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:236 |
| <a id="starttimeutcsec"></a> `startTimeUtcSec` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:237 |
| <a id="endtimeutcsec"></a> `endTimeUtcSec` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:238 |
| <a id="unitsavailable"></a> `unitsAvailable` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:239 |
| <a id="totalwithtax"></a> `totalWithTax` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:240 |
| <a id="pricequote"></a> `priceQuote?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:241 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:242 |
