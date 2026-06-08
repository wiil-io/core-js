[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessResourceCatalog

# Type Alias: BusinessResourceCatalog

```ts
type BusinessResourceCatalog = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  resourceRevisionId?: string;
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
}[];
```

Defined in: src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:383

Business resource catalog schema.
Represents the complete reservation resource catalog for a business context.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| `resourceRevisionId?` | `string` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:245 |
| `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:246 |
| `resourceType` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md) | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:247 |
| `categoryId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:248 |
| `name` | `string` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:249 |
| `description?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:250 |
| `imageUrls?` | `string`[] \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:251 |
| `capacity?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:252 |
| `capacityConfig?` | \| \{ `kind`: `"range"`; `min`: `number`; `max`: `number`; \} \| \{ `kind`: `"occupancy"`; `standard`: `number`; `max`: `number`; `extraFee?`: `number` \| `null`; \} \| \{ `kind`: `"single"`; `value`: `number`; `weightLimit?`: `number` \| `null`; `skillLevel?`: `string` \| `null`; \} \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:253 |
| `isAvailable` | `boolean` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:254 |
| `channelMappings?` | \| \{ `channelId`: `string`; `externalResourceId`: `string`; \}[] \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:255 |
| `location?` | `string` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:256 |
| `amenities` | `string`[] | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:257 |
| `instances?` | `string`[] \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:258 |
| `pricing?` | \| \{ `kind`: `"none"`; `holdPolicy?`: `string` \| `null`; \} \| \{ `kind`: `"dayOfWeek"`; `rates`: \{ `mon`: `number`; `tue`: `number`; `wed`: `number`; `thu`: `number`; `fri`: `number`; `sat`: `number`; `sun`: `number`; \}; \} \| \{ `kind`: `"tiered"`; `tiers`: \{ `from`: `number`; `to?`: `number` \| `null`; `price`: `number`; \}[]; \} \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:259 |
| `turnoverMinutes?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:260 |
| `attributes?` | \| \{ `key`: `string`; `value`: `string`; \}[] \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:261 |
| `bookingRules?` | \| \{ `onlineEnabled`: `boolean`; `existingOnly`: `boolean`; `requiresConsult`: `boolean`; `maxDaysOut`: `number`; `minNoticeHours`: `number`; `lateCancelHours`: `number`; \} \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:262 |
| `depositStrategy?` | \| [`NONE`](../enumerations/ServiceDepositStrategy.md#none) \| [`FIXED`](../enumerations/ServiceDepositStrategy.md#fixed) \| [`PERCENTAGE`](../enumerations/ServiceDepositStrategy.md#percentage) \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:263 |
| `reservationDuration?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:264 |
| `reservationDurationUnit?` | \| [`MINUTES`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#nights) \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:265 |
| `checklistTemplate` | \{ `id`: `string`; `label`: `string`; `required`: `boolean`; `phase`: `"pickup"` \| `"both"` \| `"return"`; \}[] | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:266 |
| `applicableTierIds` | `string`[] | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:267 |
| `displayOrder?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:268 |
| `metadata?` | `Record`\<`string`, `any`\> | src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:269 |
