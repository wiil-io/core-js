[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductChannelMapping

# Type Alias: ProductChannelMapping

```ts
type ProductChannelMapping = {
  channelId: string;
  externalProductId: string;
  externalCategoryId?: string | null;
};
```

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:454](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L454)

Product channel mapping schema.
Maps products to external platform identifiers.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channelid"></a> `channelId` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:142](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L142) |
| <a id="externalproductid"></a> `externalProductId` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:143](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L143) |
| <a id="externalcategoryid"></a> `externalCategoryId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:144](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L144) |
