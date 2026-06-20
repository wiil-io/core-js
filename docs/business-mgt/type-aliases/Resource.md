[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / Resource

# Type Alias: Resource

```ts
type Resource = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  resourceRevisionId?: string | null;
  locationId?: string | null;
  resourceType: ResourceType;
  categoryId?: string | null;
  name: string;
  description?: string | null;
  imageUrls?: string[] | null;
  capacity?: number | null;
  capacityConfig?:   | {
     kind: "range";
     min: number;
     max: number;
   }
     | {
     kind: "occupancy";
     standard: number;
     max: number;
     extraFee?: number | null;
   }
     | {
     kind: "single";
     value: number;
     weightLimit?: number | null;
     skillLevel?: string | null;
   }
     | null;
  isAvailable: boolean;
  channelMappings?:   | {
     channelId: string;
     externalResourceId: string;
   }[]
     | null;
  location?: string;
  amenities: string[];
  instances?: string[] | null;
  pricing?:   | {
     kind: "none";
     holdPolicy?: string | null;
   }
     | {
     kind: "dayOfWeek";
     rates: {
        mon: number;
        tue: number;
        wed: number;
        thu: number;
        fri: number;
        sat: number;
        sun: number;
     };
   }
     | {
     kind: "tiered";
     tiers: {
        from: number;
        to?: number | null;
        price: number;
     }[];
   }
     | null;
  turnoverMinutes?: number | null;
  attributes?:   | {
     key: string;
     value: string;
   }[]
     | null;
  bookingRules?:   | {
     onlineEnabled: boolean;
     existingOnly: boolean;
     requiresConsult: boolean;
     maxDaysOut: number;
     minNoticeHours: number;
     lateCancelHours: number;
   }
     | null;
  depositStrategy?:   | NONE
     | FIXED
     | PERCENTAGE
     | null;
  reservationDuration?: number | null;
  reservationDurationUnit?:   | MINUTES
     | HOURS
     | NIGHTS
     | null;
  checklistTemplate: {
     id: string;
     label: string;
     required: boolean;
     phase: "pickup" | "both" | "return";
  }[];
  applicableTierIds: string[];
  displayOrder?: number | null;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:389](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L389)

Resource schema.
Defines a reservable resource category such as a table type, room type, or rental item type.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L10) |
| <a id="resourcerevisionid"></a> `resourceRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:245](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L245) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:246](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L246) |
| <a id="resourcetype"></a> `resourceType` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md) | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:247](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L247) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:248](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L248) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:249](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L249) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:250](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L250) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:251](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L251) |
| <a id="capacity"></a> `capacity?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:252](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L252) |
| <a id="capacityconfig"></a> `capacityConfig?` | \| \{ `kind`: `"range"`; `min`: `number`; `max`: `number`; \} \| \{ `kind`: `"occupancy"`; `standard`: `number`; `max`: `number`; `extraFee?`: `number` \| `null`; \} \| \{ `kind`: `"single"`; `value`: `number`; `weightLimit?`: `number` \| `null`; `skillLevel?`: `string` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:253](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L253) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:254](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L254) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalResourceId`: `string`; \}[] \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:255](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L255) |
| <a id="location"></a> `location?` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:256](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L256) |
| <a id="amenities"></a> `amenities` | `string`[] | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:257](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L257) |
| <a id="instances"></a> `instances?` | `string`[] \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:258](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L258) |
| <a id="pricing"></a> `pricing?` | \| \{ `kind`: `"none"`; `holdPolicy?`: `string` \| `null`; \} \| \{ `kind`: `"dayOfWeek"`; `rates`: \{ `mon`: `number`; `tue`: `number`; `wed`: `number`; `thu`: `number`; `fri`: `number`; `sat`: `number`; `sun`: `number`; \}; \} \| \{ `kind`: `"tiered"`; `tiers`: \{ `from`: `number`; `to?`: `number` \| `null`; `price`: `number`; \}[]; \} \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:259](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L259) |
| <a id="turnoverminutes"></a> `turnoverMinutes?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:260](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L260) |
| <a id="attributes"></a> `attributes?` | \| \{ `key`: `string`; `value`: `string`; \}[] \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:261](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L261) |
| <a id="bookingrules"></a> `bookingRules?` | \| \{ `onlineEnabled`: `boolean`; `existingOnly`: `boolean`; `requiresConsult`: `boolean`; `maxDaysOut`: `number`; `minNoticeHours`: `number`; `lateCancelHours`: `number`; \} \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:262](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L262) |
| <a id="depositstrategy"></a> `depositStrategy?` | \| [`NONE`](../enumerations/ServiceDepositStrategy.md#none) \| [`FIXED`](../enumerations/ServiceDepositStrategy.md#fixed) \| [`PERCENTAGE`](../enumerations/ServiceDepositStrategy.md#percentage) \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:263](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L263) |
| <a id="reservationduration"></a> `reservationDuration?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:264](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L264) |
| <a id="reservationdurationunit"></a> `reservationDurationUnit?` | \| [`MINUTES`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#nights) \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:265](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L265) |
| <a id="checklisttemplate"></a> `checklistTemplate` | \{ `id`: `string`; `label`: `string`; `required`: `boolean`; `phase`: `"pickup"` \| `"both"` \| `"return"`; \}[] | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:266](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L266) |
| <a id="applicabletierids"></a> `applicableTierIds` | `string`[] | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:267](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L267) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:268](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L268) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:269](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L269) |
