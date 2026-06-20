[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TablePlacementWithContext

# Type Alias: TablePlacementWithContext

```ts
type TablePlacementWithContext = {
  placement: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     tableResourceId: string;
     floorPlanSectionId: string;
     number: string;
     x: number;
     y: number;
     width: number;
     height: number;
     shape: TableShape;
     rotation?: number | null;
     minParty: number;
     maxParty: number;
     combinableWith: string[];
     serverSectionId?: string | null;
  };
  section: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     locationId: string;
     floorPlanId: string;
     name: string;
     capacity: number;
     color: string;
     isActive: boolean;
     sortOrder: number;
     tables: {
        id: string;
        createdAt?: number;
        updatedAt?: number;
        tableResourceId: string;
        floorPlanSectionId: string;
        number: string;
        x: number;
        y: number;
        width: number;
        height: number;
        shape: TableShape;
        rotation?: number | null;
        minParty: number;
        maxParty: number;
        combinableWith: string[];
        serverSectionId?: string | null;
     }[];
     geometry?:   | {
        kind: "auto";
      }
        | {
        kind: "rect";
        x: number;
        y: number;
        width: number;
        height: number;
        rotation?: number;
      }
        | {
        kind: "polygon";
        points: {
           x: number;
           y: number;
        }[];
        rotation?: number;
      }
        | null;
  };
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:255](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L255)

Table placement with context schema.
Returns a table placement together with its containing section.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="placement"></a> `placement` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \} | `TablePlacementSchema` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:251](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L251) |
| `placement.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L8) |
| `placement.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L9) |
| `placement.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L10) |
| `placement.tableResourceId` | `string` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:105](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L105) |
| `placement.floorPlanSectionId` | `string` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:106](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L106) |
| `placement.number` | `string` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:107](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L107) |
| `placement.x` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:108](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L108) |
| `placement.y` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:109](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L109) |
| `placement.width` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:110](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L110) |
| `placement.height` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:111](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L111) |
| `placement.shape` | [`TableShape`](../enumerations/TableShape.md) | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:112](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L112) |
| `placement.rotation?` | `number` \| `null` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:113](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L113) |
| `placement.minParty` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:114](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L114) |
| `placement.maxParty` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:115](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L115) |
| `placement.combinableWith` | `string`[] | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:116](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L116) |
| `placement.serverSectionId?` | `string` \| `null` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:117](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L117) |
| <a id="section"></a> `section` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `locationId`: `string`; `floorPlanId`: `string`; `name`: `string`; `capacity`: `number`; `color`: `string`; `isActive`: `boolean`; `sortOrder`: `number`; `tables`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \}[]; `geometry?`: \| \{ `kind`: `"auto"`; \} \| \{ `kind`: `"rect"`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `rotation?`: `number`; \} \| \{ `kind`: `"polygon"`; `points`: \{ `x`: `number`; `y`: `number`; \}[]; `rotation?`: `number`; \} \| `null`; \} | `SectionSchema` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:252](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L252) |
| `section.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L8) |
| `section.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L9) |
| `section.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L10) |
| `section.locationId` | `string` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:174](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L174) |
| `section.floorPlanId` | `string` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:175](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L175) |
| `section.name` | `string` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:176](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L176) |
| `section.capacity` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:177](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L177) |
| `section.color` | `string` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:178](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L178) |
| `section.isActive` | `boolean` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:179](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L179) |
| `section.sortOrder` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:180](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L180) |
| `section.tables` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \}[] | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:181](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L181) |
| `section.geometry?` | \| \{ `kind`: `"auto"`; \} \| \{ `kind`: `"rect"`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `rotation?`: `number`; \} \| \{ `kind`: `"polygon"`; `points`: \{ `x`: `number`; `y`: `number`; \}[]; `rotation?`: `number`; \} \| `null` | - | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:182](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L182) |
