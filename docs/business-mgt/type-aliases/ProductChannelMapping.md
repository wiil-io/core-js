[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/product-management/product-config.schema.ts:454

Product channel mapping schema.
Maps products to external platform identifiers.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channelid"></a> `channelId` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:142 |
| <a id="externalproductid"></a> `externalProductId` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:143 |
| <a id="externalcategoryid"></a> `externalCategoryId?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:144 |
