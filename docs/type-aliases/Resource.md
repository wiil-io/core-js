[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / Resource

# Type Alias: Resource

```ts
type Resource = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
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
  syncEnabled: boolean;
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

Defined in: src/core/business-mgt/reservation-resource.schema.ts:109

Main resource schema for managing reservable resources.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/reservation-resource.schema.ts:66 |
| <a id="resourcetype"></a> `resourceType` | [`ResourceType`](../enumerations/ResourceType.md) | src/core/business-mgt/reservation-resource.schema.ts:67 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/reservation-resource.schema.ts:68 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/reservation-resource.schema.ts:69 |
| <a id="capacity"></a> `capacity?` | `number` | src/core/business-mgt/reservation-resource.schema.ts:70 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/reservation-resource.schema.ts:71 |
| <a id="location"></a> `location?` | `string` | src/core/business-mgt/reservation-resource.schema.ts:73 |
| <a id="amenities"></a> `amenities` | `string`[] | src/core/business-mgt/reservation-resource.schema.ts:74 |
| <a id="reservationduration"></a> `reservationDuration?` | `number` \| `null` | src/core/business-mgt/reservation-resource.schema.ts:76 |
| <a id="reservationdurationunit"></a> `reservationDurationUnit?` | \| [`MINUTES`](../enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../enumerations/ResourceReservationDurationUnit.md#nights) \| `null` | src/core/business-mgt/reservation-resource.schema.ts:78 |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | src/core/business-mgt/reservation-resource.schema.ts:81 |
| <a id="syncenabled"></a> `syncEnabled` | `boolean` | src/core/business-mgt/reservation-resource.schema.ts:82 |
| <a id="lastsyncat"></a> `lastSyncAt?` | `number` \| `null` | src/core/business-mgt/reservation-resource.schema.ts:83 |
| <a id="roomresource"></a> `roomResource?` | \| \{ `roomNumber`: `string`; `roomType`: `string`; `pricePerNight`: `number`; `view?`: `string`; `bedType?`: `string`; `isSmoking`: `boolean`; `accessibilityFeatures?`: `string`; \} \| `null` | src/core/business-mgt/reservation-resource.schema.ts:86 |
| <a id="rentalresource"></a> `rentalResource?` | \| \{ `itemType`: `string`; `pricePerHour`: `number`; \} \| `null` | src/core/business-mgt/reservation-resource.schema.ts:87 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/business-mgt/reservation-resource.schema.ts:88 |
