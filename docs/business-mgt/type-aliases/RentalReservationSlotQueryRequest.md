[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReservationSlotQueryRequest

# Type Alias: RentalReservationSlotQueryRequest

```ts
type RentalReservationSlotQueryRequest = {
  locationId?: string | null;
  resourceId?: string | null;
  localDate: string;
  maxResults: number;
  resourceType: RENTAL;
  returnDate?: string | null;
  tierId?: string | null;
  durationMinutes?: number | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:352

Rental reservation slot query request schema.
Requests candidate rental slots for intra-day or multi-day rental periods.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:47 |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:48 |
| <a id="localdate"></a> `localDate` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:49 |
| <a id="maxresults"></a> `maxResults` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:50 |
| <a id="resourcetype"></a> `resourceType` | [`RENTAL`](../../type-definitions/enumerations/ResourceType.md#rental) | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:112 |
| <a id="returndate"></a> `returnDate?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:113 |
| <a id="tierid"></a> `tierId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:114 |
| <a id="durationminutes"></a> `durationMinutes?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:115 |
