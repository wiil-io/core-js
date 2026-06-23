[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateFloorPlanTablePlacementInput

# Type Alias: CreateFloorPlanTablePlacementInput

```ts
type CreateFloorPlanTablePlacementInput = {
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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:73](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L73)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="number"></a> `number` | `string` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:18](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L18) |
| <a id="x"></a> `x` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:19](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L19) |
| <a id="y"></a> `y` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:20](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L20) |
| <a id="width"></a> `width` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:21](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L21) |
| <a id="height"></a> `height` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:22](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L22) |
| <a id="shape"></a> `shape` | [`TableShape`](../enumerations/TableShape.md) | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:23](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L23) |
| <a id="rotation"></a> `rotation?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:24](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L24) |
| <a id="minparty"></a> `minParty` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:25](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L25) |
| <a id="maxparty"></a> `maxParty` | `number` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:26](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L26) |
| <a id="combinablewith"></a> `combinableWith` | `string`[] | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:27](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L27) |
| <a id="serversectionid"></a> `serverSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts:28](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-floor-plan-definition.schema.ts#L28) |
