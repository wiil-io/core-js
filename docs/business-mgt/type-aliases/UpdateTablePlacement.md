[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateTablePlacement

# Type Alias: UpdateTablePlacement

```ts
type UpdateTablePlacement = {
  tableResourceId?: string;
  floorPlanSectionId?: string;
  number?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  shape?:   | ROUND
     | SQUARE
     | BOOTH
     | RECT
     | CURVED
     | HIGH_TOP
     | BAR;
  rotation?: number | null;
  minParty?: number;
  maxParty?: number;
  combinableWith?: string[];
  serverSectionId?: string | null;
  id: string;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:209

Schema for updating an existing table placement.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="tableresourceid"></a> `tableResourceId?` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:105 |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:106 |
| <a id="number"></a> `number?` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:107 |
| <a id="x"></a> `x?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:108 |
| <a id="y"></a> `y?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:109 |
| <a id="width"></a> `width?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:110 |
| <a id="height"></a> `height?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:111 |
| <a id="shape"></a> `shape?` | \| [`ROUND`](../enumerations/TableShape.md#round) \| [`SQUARE`](../enumerations/TableShape.md#square) \| [`BOOTH`](../enumerations/TableShape.md#booth) \| [`RECT`](../enumerations/TableShape.md#rect) \| [`CURVED`](../enumerations/TableShape.md#curved) \| [`HIGH_TOP`](../enumerations/TableShape.md#high_top) \| [`BAR`](../enumerations/TableShape.md#bar) | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:112 |
| <a id="rotation"></a> `rotation?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:113 |
| <a id="minparty"></a> `minParty?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:114 |
| <a id="maxparty"></a> `maxParty?` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:115 |
| <a id="combinablewith"></a> `combinableWith?` | `string`[] | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:116 |
| <a id="serversectionid"></a> `serverSectionId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:117 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:151 |
