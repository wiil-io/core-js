[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateResource

# Type Alias: UpdateResource

```ts
type UpdateResource = {
  resourceType?:   | TABLE
     | ROOM
     | RENTALS
     | RESOURCE;
  name?: string;
  description?: string;
  capacity?: number;
  isAvailable?: boolean;
  location?: string;
  amenities?: string[];
  reservationDuration?: number | null;
  reservationDurationUnit?:   | MINUTES
     | HOURS
     | NIGHTS
     | null;
  calendarId?: string | null;
  syncEnabled?: boolean;
  lastSyncAt?: number | null;
  roomResource?:   | {
     roomNumber: string;
     roomType: string;
     pricePerNight: number;
     view?: string;
     bedType?: string;
     isSmoking: boolean;
     accessibilityFeatures?: string;
   }
     | null;
  rentalResource?:   | {
     itemType: string;
     pricePerHour: number;
   }
     | null;
  metadata?: Record<string, any>;
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-resource.schema.ts:109](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L109)

Schema for updating an existing resource.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourcetype"></a> `resourceType?` | \| [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) \| [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) \| [`RENTALS`](../../type-definitions/enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../../type-definitions/enumerations/ResourceType.md#resource) | [src/core/business-mgt/reservation-resource.schema.ts:65](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L65) |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/reservation-resource.schema.ts:66](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L66) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/reservation-resource.schema.ts:67](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L67) |
| <a id="capacity"></a> `capacity?` | `number` | [src/core/business-mgt/reservation-resource.schema.ts:68](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L68) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | [src/core/business-mgt/reservation-resource.schema.ts:69](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L69) |
| <a id="location"></a> `location?` | `string` | [src/core/business-mgt/reservation-resource.schema.ts:71](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L71) |
| <a id="amenities"></a> `amenities?` | `string`[] | [src/core/business-mgt/reservation-resource.schema.ts:72](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L72) |
| <a id="reservationduration"></a> `reservationDuration?` | `number` \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:74](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L74) |
| <a id="reservationdurationunit"></a> `reservationDurationUnit?` | \| [`MINUTES`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#nights) \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:76](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L76) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:79](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L79) |
| <a id="syncenabled"></a> `syncEnabled?` | `boolean` | [src/core/business-mgt/reservation-resource.schema.ts:80](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L80) |
| <a id="lastsyncat"></a> `lastSyncAt?` | `number` \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:81](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L81) |
| <a id="roomresource"></a> `roomResource?` | \| \{ `roomNumber`: `string`; `roomType`: `string`; `pricePerNight`: `number`; `view?`: `string`; `bedType?`: `string`; `isSmoking`: `boolean`; `accessibilityFeatures?`: `string`; \} \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:84](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L84) |
| <a id="rentalresource"></a> `rentalResource?` | \| \{ `itemType`: `string`; `pricePerHour`: `number`; \} \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:85](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L85) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/reservation-resource.schema.ts:86](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L86) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-resource.schema.ts:104](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/reservation-resource.schema.ts#L104) |
