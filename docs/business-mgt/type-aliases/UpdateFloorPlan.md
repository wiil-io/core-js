[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateFloorPlan

# Type Alias: UpdateFloorPlan

```ts
type UpdateFloorPlan = {
  locationId?: string | null;
  name?: string;
  description?: string;
  imageUrls?: string[] | null;
  isActive?: boolean;
  canvasDimensions?: {
     width: number;
     height: number;
     unit: CanvasUnit;
  };
  capacity?: number;
  metadata?: Record<string, any> | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:97](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L97)

Schema for updating an existing floor plan.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:58](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L58) |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:59](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L59) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:60](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L60) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:61](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L61) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:62](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L62) |
| <a id="canvasdimensions"></a> `canvasDimensions?` | \{ `width`: `number`; `height`: `number`; `unit`: [`CanvasUnit`](../enumerations/CanvasUnit.md); \} | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:63](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L63) |
| `canvasDimensions.width` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:38](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L38) |
| `canvasDimensions.height` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:39](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L39) |
| `canvasDimensions.unit` | [`CanvasUnit`](../enumerations/CanvasUnit.md) | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:40](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L40) |
| <a id="capacity"></a> `capacity?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:64](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L64) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:65](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L65) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:87](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L87) |
