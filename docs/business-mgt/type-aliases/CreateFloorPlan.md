[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:96](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L96)

Schema for creating a new floor plan.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:58](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L58) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:59](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L59) |
| <a id="description"></a> `description` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:60](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L60) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:61](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L61) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:62](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L62) |
| <a id="canvasdimensions"></a> `canvasDimensions` | \{ `width`: `number`; `height`: `number`; `unit`: [`CanvasUnit`](../enumerations/CanvasUnit.md); \} | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:63](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L63) |
| `canvasDimensions.width` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:38](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L38) |
| `canvasDimensions.height` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:39](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L39) |
| `canvasDimensions.unit` | [`CanvasUnit`](../enumerations/CanvasUnit.md) | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:40](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L40) |
| <a id="capacity"></a> `capacity` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:64](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L64) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts:65](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-table-layout.schema.ts#L65) |
