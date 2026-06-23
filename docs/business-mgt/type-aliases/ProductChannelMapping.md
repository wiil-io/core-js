[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:461](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L461)

Product channel mapping schema.
Maps products to external platform identifiers.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channelid"></a> `channelId` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:143](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L143) |
| <a id="externalproductid"></a> `externalProductId` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:144](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L144) |
| <a id="externalcategoryid"></a> `externalCategoryId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:145](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L145) |
