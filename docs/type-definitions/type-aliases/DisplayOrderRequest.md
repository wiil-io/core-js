[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / DisplayOrderRequest

# Type Alias: DisplayOrderRequest

```ts
type DisplayOrderRequest = {
  itemId: string | null;
  targetCategoryId: string;
  positionIntent: {
     mode:   | "BEGINNING"
        | "END"
        | "KEEP_CURRENT"
        | "BEFORE_ITEM"
        | "AFTER_ITEM"
        | "ABSOLUTE_INDEX";
  };
  anchorItemId: string | null;
  absoluteIndex: number | null;
  idempotencyKey: string;
  expectedVersion: number;
};
```

Defined in: src/core/type-definitions/display-order.ts:181

Display order request schema for item positioning.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="itemid"></a> `itemId` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:77 |
| <a id="targetcategoryid"></a> `targetCategoryId` | `string` | - | src/core/type-definitions/display-order.ts:78 |
| <a id="positionintent"></a> `positionIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:79 |
| `positionIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| <a id="anchoritemid"></a> `anchorItemId` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:80 |
| <a id="absoluteindex"></a> `absoluteIndex` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:81 |
| <a id="idempotencykey"></a> `idempotencyKey` | `string` | - | src/core/type-definitions/display-order.ts:82 |
| <a id="expectedversion"></a> `expectedVersion` | `number` | - | src/core/type-definitions/display-order.ts:83 |
