[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:352](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L352)

Rental reservation slot query request schema.
Requests candidate rental slots for intra-day or multi-day rental periods.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:47](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L47) |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:48](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L48) |
| <a id="localdate"></a> `localDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:49](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L49) |
| <a id="maxresults"></a> `maxResults` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:50](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L50) |
| <a id="resourcetype"></a> `resourceType` | [`RENTAL`](../../type-definitions/enumerations/ResourceType.md#rental) | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:112](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L112) |
| <a id="returndate"></a> `returnDate?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:113](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L113) |
| <a id="tierid"></a> `tierId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:114](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L114) |
| <a id="durationminutes"></a> `durationMinutes?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:115](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L115) |
