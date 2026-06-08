[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateSection

# Type Alias: UpdateSection

```ts
type UpdateSection = {
  locationId?: string;
  floorPlanId?: string;
  name?: string;
  capacity?: number;
  color?: string;
  isActive?: boolean;
  sortOrder?: number;
  tables?: {
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
  id: string;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:212

Schema for updating an existing floor plan section.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:174 |
| <a id="floorplanid"></a> `floorPlanId?` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:175 |
| <a id="name"></a> `name?` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:176 |
| <a id="capacity"></a> `capacity?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:177 |
| <a id="color"></a> `color?` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:178 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:179 |
| <a id="sortorder"></a> `sortOrder?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:180 |
| <a id="tables"></a> `tables?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `tableResourceId`: `string`; `floorPlanSectionId`: `string`; `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \}[] | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:181 |
| <a id="geometry"></a> `geometry?` | \| \{ `kind`: `"auto"`; \} \| \{ `kind`: `"rect"`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `rotation?`: `number`; \} \| \{ `kind`: `"polygon"`; `points`: \{ `x`: `number`; `y`: `number`; \}[]; `rotation?`: `number`; \} \| `null` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:182 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:200 |
