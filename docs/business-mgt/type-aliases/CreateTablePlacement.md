[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateTablePlacement

# Type Alias: CreateTablePlacement

```ts
type CreateTablePlacement = {
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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:208](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L208)

Schema for creating a new table placement.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="tableresourceid"></a> `tableResourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:105](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L105) |
| <a id="floorplansectionid"></a> `floorPlanSectionId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:106](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L106) |
| <a id="number"></a> `number` | `string` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:107](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L107) |
| <a id="x"></a> `x` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:108](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L108) |
| <a id="y"></a> `y` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:109](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L109) |
| <a id="width"></a> `width` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:110](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L110) |
| <a id="height"></a> `height` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:111](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L111) |
| <a id="shape"></a> `shape` | [`TableShape`](../enumerations/TableShape.md) | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:112](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L112) |
| <a id="rotation"></a> `rotation?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:113](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L113) |
| <a id="minparty"></a> `minParty` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:114](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L114) |
| <a id="maxparty"></a> `maxParty` | `number` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:115](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L115) |
| <a id="combinablewith"></a> `combinableWith` | `string`[] | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:116](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L116) |
| <a id="serversectionid"></a> `serverSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:117](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L117) |
