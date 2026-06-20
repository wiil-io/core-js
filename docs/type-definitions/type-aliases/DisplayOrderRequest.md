[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

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

Defined in: [src/core/type-definitions/display-order.ts:181](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L181)

Display order request schema for item positioning.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="itemid"></a> `itemId` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:77](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L77) |
| <a id="targetcategoryid"></a> `targetCategoryId` | `string` | - | [src/core/type-definitions/display-order.ts:78](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L78) |
| <a id="positionintent"></a> `positionIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:79](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L79) |
| `positionIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L24) |
| <a id="anchoritemid"></a> `anchorItemId` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:80](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L80) |
| <a id="absoluteindex"></a> `absoluteIndex` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:81](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L81) |
| <a id="idempotencykey"></a> `idempotencyKey` | `string` | - | [src/core/type-definitions/display-order.ts:82](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L82) |
| <a id="expectedversion"></a> `expectedVersion` | `number` | - | [src/core/type-definitions/display-order.ts:83](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L83) |
