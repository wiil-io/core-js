[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductVariantChannelMapping

# Type Alias: ProductVariantChannelMapping

```ts
type ProductVariantChannelMapping = {
  channelId: string;
  externalVariantId: string;
  externalProductId?: string | null;
};
```

Defined in: [src/core/business-mgt/product-management/product-variant.schema.ts:145](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-variant.schema.ts#L145)

Product variant channel mapping schema.
Maps variants to external platform identifiers for multi-channel synchronization.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channelid"></a> `channelId` | `string` | [src/core/business-mgt/product-management/product-variant.schema.ts:28](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-variant.schema.ts#L28) |
| <a id="externalvariantid"></a> `externalVariantId` | `string` | [src/core/business-mgt/product-management/product-variant.schema.ts:29](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-variant.schema.ts#L29) |
| <a id="externalproductid"></a> `externalProductId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:30](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-variant.schema.ts#L30) |
