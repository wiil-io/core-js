[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateFloorPlan

# Type Alias: CreateFloorPlan

```ts
type CreateFloorPlan = {
  locationId?: string | null;
  name: string;
  description: string;
  imageUrls?: string[] | null;
  isActive: boolean;
  canvasDimensions: {
     width: number;
     height: number;
     unit: CanvasUnit;
  };
  capacity: number;
  metadata?: Record<string, any> | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:96

Schema for creating a new floor plan.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:58 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:59 |
| <a id="description"></a> `description` | `string` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:60 |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:61 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:62 |
| <a id="canvasdimensions"></a> `canvasDimensions` | \{ `width`: `number`; `height`: `number`; `unit`: [`CanvasUnit`](../enumerations/CanvasUnit.md); \} | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:63 |
| `canvasDimensions.width` | `number` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:38 |
| `canvasDimensions.height` | `number` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:39 |
| `canvasDimensions.unit` | [`CanvasUnit`](../enumerations/CanvasUnit.md) | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:40 |
| <a id="capacity"></a> `capacity` | `number` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:64 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:65 |
