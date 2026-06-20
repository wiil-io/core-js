[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateResource

# Type Alias: UpdateResource

```ts
type UpdateResource = {
  resourceRevisionId?: string | null;
  locationId?: string | null;
  resourceType?:   | TABLE
     | ROOM
     | RENTAL
     | RENTALS
     | RESOURCE;
  categoryId?: string | null;
  name?: string;
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
  isAvailable?: boolean;
  channelMappings?:   | {
     channelId: string;
     externalResourceId: string;
   }[]
     | null;
  location?: string;
  amenities?: string[];
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
  checklistTemplate?: {
     id: string;
     label: string;
     required: boolean;
     phase: "pickup" | "both" | "return";
  }[];
  applicableTierIds?: string[];
  displayOrder?: number | null;
  metadata?: Record<string, any>;
  placement?: {
     placementIntent: {
        mode:   | "BEGINNING"
           | "END"
           | "KEEP_CURRENT"
           | "BEFORE_ITEM"
           | "AFTER_ITEM"
           | "ABSOLUTE_INDEX";
     };
     anchorItemId?: string | null;
     absoluteIndex?: number | null;
  };
  instances?: {
     resourceRevisionId?: string | null;
     locationId?: string | null;
     name?: string | null;
     code?: string | null;
     status: ResourceInstanceStatus;
     isAvailable: boolean;
     attributes?:   | {
        key: string;
        value: string;
      }[]
        | null;
  }[];
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:391](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L391)

Schema for updating an existing reservation resource.
All fields optional except id. The create-time instance requirement is not enforced on update.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="resourcerevisionid"></a> `resourceRevisionId?` | `string` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:245](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L245) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:246](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L246) |
| <a id="resourcetype"></a> `resourceType?` | \| [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) \| [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) \| [`RENTAL`](../../type-definitions/enumerations/ResourceType.md#rental) \| [`RENTALS`](../../type-definitions/enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../../type-definitions/enumerations/ResourceType.md#resource) | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:247](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L247) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:248](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L248) |
| <a id="name"></a> `name?` | `string` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:249](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L249) |
| <a id="description"></a> `description?` | `string` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:250](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L250) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:251](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L251) |
| <a id="capacity"></a> `capacity?` | `number` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:252](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L252) |
| <a id="capacityconfig"></a> `capacityConfig?` | \| \{ `kind`: `"range"`; `min`: `number`; `max`: `number`; \} \| \{ `kind`: `"occupancy"`; `standard`: `number`; `max`: `number`; `extraFee?`: `number` \| `null`; \} \| \{ `kind`: `"single"`; `value`: `number`; `weightLimit?`: `number` \| `null`; `skillLevel?`: `string` \| `null`; \} \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:253](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L253) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:254](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L254) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalResourceId`: `string`; \}[] \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:255](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L255) |
| <a id="location"></a> `location?` | `string` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:256](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L256) |
| <a id="amenities"></a> `amenities?` | `string`[] | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:257](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L257) |
| <a id="pricing"></a> `pricing?` | \| \{ `kind`: `"none"`; `holdPolicy?`: `string` \| `null`; \} \| \{ `kind`: `"dayOfWeek"`; `rates`: \{ `mon`: `number`; `tue`: `number`; `wed`: `number`; `thu`: `number`; `fri`: `number`; `sat`: `number`; `sun`: `number`; \}; \} \| \{ `kind`: `"tiered"`; `tiers`: \{ `from`: `number`; `to?`: `number` \| `null`; `price`: `number`; \}[]; \} \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:259](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L259) |
| <a id="turnoverminutes"></a> `turnoverMinutes?` | `number` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:260](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L260) |
| <a id="attributes"></a> `attributes?` | \| \{ `key`: `string`; `value`: `string`; \}[] \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:261](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L261) |
| <a id="bookingrules"></a> `bookingRules?` | \| \{ `onlineEnabled`: `boolean`; `existingOnly`: `boolean`; `requiresConsult`: `boolean`; `maxDaysOut`: `number`; `minNoticeHours`: `number`; `lateCancelHours`: `number`; \} \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:262](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L262) |
| <a id="depositstrategy"></a> `depositStrategy?` | \| [`NONE`](../enumerations/ServiceDepositStrategy.md#none) \| [`FIXED`](../enumerations/ServiceDepositStrategy.md#fixed) \| [`PERCENTAGE`](../enumerations/ServiceDepositStrategy.md#percentage) \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:263](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L263) |
| <a id="reservationduration"></a> `reservationDuration?` | `number` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:264](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L264) |
| <a id="reservationdurationunit"></a> `reservationDurationUnit?` | \| [`MINUTES`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#nights) \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:265](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L265) |
| <a id="checklisttemplate"></a> `checklistTemplate?` | \{ `id`: `string`; `label`: `string`; `required`: `boolean`; `phase`: `"pickup"` \| `"both"` \| `"return"`; \}[] | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:266](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L266) |
| <a id="applicabletierids"></a> `applicableTierIds?` | `string`[] | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:267](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L267) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:268](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L268) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:269](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L269) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:355](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L355) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/type-definitions/display-order.ts#L106) |
| <a id="instances"></a> `instances?` | \{ `resourceRevisionId?`: `string` \| `null`; `locationId?`: `string` \| `null`; `name?`: `string` \| `null`; `code?`: `string` \| `null`; `status`: [`ResourceInstanceStatus`](../enumerations/ResourceInstanceStatus.md); `isAvailable`: `boolean`; `attributes?`: \| \{ `key`: `string`; `value`: `string`; \}[] \| `null`; \}[] | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:356](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L356) |
| <a id="id"></a> `id` | `string` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:381](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L381) |
