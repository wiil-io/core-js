[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / Section

# Type Alias: Section

```ts
type Section = {
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
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:210](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L210)

Section schema.
Represents a named seating area within a floor plan, including its tables and boundary geometry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:174](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L174) |
| <a id="floorplanid"></a> `floorPlanId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:175](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L175) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:176](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L176) |
| <a id="capacity"></a> `capacity` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:177](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L177) |
| <a id="color"></a> `color` | `string` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:178](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L178) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:179](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L179) |
| <a id="sortorder"></a> `sortOrder` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:180](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L180) |
| <a id="tables"></a> `tables` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:181](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L181) |
| <a id="geometry"></a> `geometry?` | \| \{ `kind`: `"auto"`; \} \| \{ `kind`: `"rect"`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `rotation?`: `number`; \} \| \{ `kind`: `"polygon"`; `points`: \{ `x`: `number`; `y`: `number`; \}[]; `rotation?`: `number`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:182](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L182) |
