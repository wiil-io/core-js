[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / CategoryDisplayOrderRequest

# Type Alias: CategoryDisplayOrderRequest

```ts
type CategoryDisplayOrderRequest = {
  categoryId: string;
  targetParentCategoryId: string | null;
  positionIntent: {
     mode:   | "BEGINNING"
        | "END"
        | "KEEP_CURRENT"
        | "BEFORE_ITEM"
        | "AFTER_ITEM"
        | "ABSOLUTE_INDEX";
  };
  anchorCategoryId: string | null;
  absoluteIndex: number | null;
  idempotencyKey: string;
  expectedVersion: number;
};
```

Defined in: [src/core/type-definitions/display-order.ts:183](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L183)

Category display order request schema.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="categoryid"></a> `categoryId` | `string` | - | [src/core/type-definitions/display-order.ts:123](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L123) |
| <a id="targetparentcategoryid"></a> `targetParentCategoryId` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:124](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L124) |
| <a id="positionintent"></a> `positionIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:125](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L125) |
| `positionIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L24) |
| <a id="anchorcategoryid"></a> `anchorCategoryId` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:126](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L126) |
| <a id="absoluteindex"></a> `absoluteIndex` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:127](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L127) |
| <a id="idempotencykey"></a> `idempotencyKey` | `string` | - | [src/core/type-definitions/display-order.ts:128](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L128) |
| <a id="expectedversion"></a> `expectedVersion` | `number` | - | [src/core/type-definitions/display-order.ts:129](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/type-definitions/display-order.ts#L129) |
