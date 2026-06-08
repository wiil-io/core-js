[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TablePlacement

# Type Alias: TablePlacement

```ts
type TablePlacement = {
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
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:207

Table placement schema.
Represents a physical table's position and seating constraints within a floor plan section.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="tableresourceid"></a> `tableResourceId` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:105 |
| <a id="floorplansectionid"></a> `floorPlanSectionId` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:106 |
| <a id="number"></a> `number` | `string` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:107 |
| <a id="x"></a> `x` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:108 |
| <a id="y"></a> `y` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:109 |
| <a id="width"></a> `width` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:110 |
| <a id="height"></a> `height` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:111 |
| <a id="shape"></a> `shape` | [`TableShape`](../enumerations/TableShape.md) | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:112 |
| <a id="rotation"></a> `rotation?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:113 |
| <a id="minparty"></a> `minParty` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:114 |
| <a id="maxparty"></a> `maxParty` | `number` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:115 |
| <a id="combinablewith"></a> `combinableWith` | `string`[] | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:116 |
| <a id="serversectionid"></a> `serverSectionId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:117 |
