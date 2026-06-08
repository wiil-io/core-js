[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:255

Table placement with context schema.
Returns a table placement together with its containing section.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="placement"></a> `placement` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \} | `TablePlacementSchema` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:251 |
| `placement.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| `placement.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| `placement.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| `placement.tableResourceId` | `string` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:105 |
| `placement.floorPlanSectionId` | `string` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:106 |
| `placement.number` | `string` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:107 |
| `placement.x` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:108 |
| `placement.y` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:109 |
| `placement.width` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:110 |
| `placement.height` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:111 |
| `placement.shape` | [`TableShape`](../enumerations/TableShape.md) | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:112 |
| `placement.rotation?` | `number` \| `null` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:113 |
| `placement.minParty` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:114 |
| `placement.maxParty` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:115 |
| `placement.combinableWith` | `string`[] | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:116 |
| `placement.serverSectionId?` | `string` \| `null` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:117 |
| <a id="section"></a> `section` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `locationId`: `string`; `floorPlanId`: `string`; `name`: `string`; `capacity`: `number`; `color`: `string`; `isActive`: `boolean`; `sortOrder`: `number`; `tables`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \}[]; `geometry?`: \| \{ `kind`: `"auto"`; \} \| \{ `kind`: `"rect"`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `rotation?`: `number`; \} \| \{ `kind`: `"polygon"`; `points`: \{ `x`: `number`; `y`: `number`; \}[]; `rotation?`: `number`; \} \| `null`; \} | `SectionSchema` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:252 |
| `section.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| `section.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| `section.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| `section.locationId` | `string` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:174 |
| `section.floorPlanId` | `string` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:175 |
| `section.name` | `string` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:176 |
| `section.capacity` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:177 |
| `section.color` | `string` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:178 |
| `section.isActive` | `boolean` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:179 |
| `section.sortOrder` | `number` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:180 |
| `section.tables` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \}[] | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:181 |
| `section.geometry?` | \| \{ `kind`: `"auto"`; \} \| \{ `kind`: `"rect"`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `rotation?`: `number`; \} \| \{ `kind`: `"polygon"`; `points`: \{ `x`: `number`; `y`: `number`; \}[]; `rotation?`: `number`; \} \| `null` | - | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:182 |
