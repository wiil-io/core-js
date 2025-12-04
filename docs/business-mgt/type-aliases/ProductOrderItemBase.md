[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductOrderItemBase

# Type Alias: ProductOrderItemBase

```ts
type ProductOrderItemBase = {
  productId: string;
  itemName: string;
  sku?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  selectedVariant?: string;
  warrantyInfo?: string;
  status: OrderStatus;
  notes?: string;
};
```

Defined in: [src/core/business-mgt/product-order.schema.ts:166](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L166)

Base product order item schema (without productOrderId for creation).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-order.schema.ts:27](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L27) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/product-order.schema.ts:28](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L28) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-order.schema.ts:29](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L29) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/product-order.schema.ts:30](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L30) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/product-order.schema.ts:31](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L31) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/product-order.schema.ts:32](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L32) |
| <a id="selectedvariant"></a> `selectedVariant?` | `string` | [src/core/business-mgt/product-order.schema.ts:35](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L35) |
| <a id="warrantyinfo"></a> `warrantyInfo?` | `string` | [src/core/business-mgt/product-order.schema.ts:36](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L36) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-order.schema.ts:38](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L38) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/product-order.schema.ts:39](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/product-order.schema.ts#L39) |
