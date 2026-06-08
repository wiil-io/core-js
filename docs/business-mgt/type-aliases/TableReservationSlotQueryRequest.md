[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableReservationSlotQueryRequest

# Type Alias: TableReservationSlotQueryRequest

```ts
type TableReservationSlotQueryRequest = {
  locationId?: string | null;
  resourceId?: string | null;
  localDate: string;
  maxResults: number;
  resourceType: TABLE;
  partySize: number;
  floorPlanId?: string | null;
  floorPlanSectionId?: string | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:350

Table reservation slot query request schema.
Requests candidate table reservation slots for a business-local date.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:47 |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:48 |
| <a id="localdate"></a> `localDate` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:49 |
| <a id="maxresults"></a> `maxResults` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:50 |
| <a id="resourcetype"></a> `resourceType` | [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:72 |
| <a id="partysize"></a> `partySize` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:73 |
| <a id="floorplanid"></a> `floorPlanId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:74 |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:75 |
