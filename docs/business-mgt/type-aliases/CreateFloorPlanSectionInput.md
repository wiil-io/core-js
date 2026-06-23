[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateFloorPlanSectionInput

# Type Alias: CreateFloorPlanSectionInput

```ts
type CreateFloorPlanSectionInput = {
  name: string;
  capacity: number;
  color: string;
  isActive: boolean;
  sortOrder: number;
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
  tables: {
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
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:74](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L74)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:40](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L40) |
| <a id="capacity"></a> `capacity` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:41](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L41) |
| <a id="color"></a> `color` | `string` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:42](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L42) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:43](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L43) |
| <a id="sortorder"></a> `sortOrder` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:44](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L44) |
| <a id="geometry"></a> `geometry?` | \| \{ `kind`: `"auto"`; \} \| \{ `kind`: `"rect"`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `rotation?`: `number`; \} \| \{ `kind`: `"polygon"`; `points`: \{ `x`: `number`; `y`: `number`; \}[]; `rotation?`: `number`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:45](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L45) |
| <a id="tables"></a> `tables` | \{ `number`: `string`; `x`: `number`; `y`: `number`; `width`: `number`; `height`: `number`; `shape`: [`TableShape`](../enumerations/TableShape.md); `rotation?`: `number` \| `null`; `minParty`: `number`; `maxParty`: `number`; `combinableWith`: `string`[]; `serverSectionId?`: `string` \| `null`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:46](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L46) |
