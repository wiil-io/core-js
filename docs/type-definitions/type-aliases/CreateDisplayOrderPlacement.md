[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / CreateDisplayOrderPlacement

# Type Alias: CreateDisplayOrderPlacement

```ts
type CreateDisplayOrderPlacement = {
  placementIntent: {
     mode:   | "BEGINNING"
        | "END"
        | "KEEP_CURRENT"
        | "BEFORE_ITEM"
        | "AFTER_ITEM"
        | "ABSOLUTE_INDEX";
  };
  anchorItemId?: string | null;
  absoluteIndex?: number | null;
};
```

Defined in: [src/core/type-definitions/display-order.ts:180](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/type-definitions/display-order.ts#L180)

Create display order placement schema for create-time positioning.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="placementintent"></a> `placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/type-definitions/display-order.ts#L104) |
| `placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/type-definitions/display-order.ts#L24) |
| <a id="anchoritemid"></a> `anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/type-definitions/display-order.ts#L105) |
| <a id="absoluteindex"></a> `absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/type-definitions/display-order.ts#L106) |
