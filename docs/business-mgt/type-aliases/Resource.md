[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / Resource

# Type Alias: Resource

```ts
type Resource = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  resourceType: ResourceType;
  name: string;
  description?: string;
  capacity?: number;
  isAvailable: boolean;
  location?: string;
  amenities: string[];
  reservationDuration?: number | null;
  reservationDurationUnit?:   | MINUTES
     | HOURS
     | NIGHTS
     | null;
  calendarId?: string | null;
  syncEnabled: boolean | null;
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
};
```

Defined in: [src/core/business-mgt/reservation-resource.schema.ts:107](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L107)

Main resource schema for managing reservable resources.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/base.schema.ts#L10) |
| <a id="resourcetype"></a> `resourceType` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md) | [src/core/business-mgt/reservation-resource.schema.ts:65](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L65) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/reservation-resource.schema.ts:66](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L66) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/reservation-resource.schema.ts:67](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L67) |
| <a id="capacity"></a> `capacity?` | `number` | [src/core/business-mgt/reservation-resource.schema.ts:68](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L68) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/reservation-resource.schema.ts:69](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L69) |
| <a id="location"></a> `location?` | `string` | [src/core/business-mgt/reservation-resource.schema.ts:71](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L71) |
| <a id="amenities"></a> `amenities` | `string`[] | [src/core/business-mgt/reservation-resource.schema.ts:72](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L72) |
| <a id="reservationduration"></a> `reservationDuration?` | `number` \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:74](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L74) |
| <a id="reservationdurationunit"></a> `reservationDurationUnit?` | \| [`MINUTES`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#nights) \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:76](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L76) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:79](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L79) |
| <a id="syncenabled"></a> `syncEnabled` | `boolean` \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:80](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L80) |
| <a id="lastsyncat"></a> `lastSyncAt?` | `number` \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:81](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L81) |
| <a id="roomresource"></a> `roomResource?` | \| \{ `roomNumber`: `string`; `roomType`: `string`; `pricePerNight`: `number`; `view?`: `string`; `bedType?`: `string`; `isSmoking`: `boolean`; `accessibilityFeatures?`: `string`; \} \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:84](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L84) |
| <a id="rentalresource"></a> `rentalResource?` | \| \{ `itemType`: `string`; `pricePerHour`: `number`; \} \| `null` | [src/core/business-mgt/reservation-resource.schema.ts:85](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L85) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/reservation-resource.schema.ts:86](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/reservation-resource.schema.ts#L86) |
