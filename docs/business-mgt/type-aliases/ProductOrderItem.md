[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.15**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductOrderItem

# Type Alias: ProductOrderItem

```ts
type ProductOrderItem = {
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
  id: string;
  productOrderId: string;
};
```

Defined in: [src/core/business-mgt/product-order.schema.ts:167](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L167)

Product order item schema with IDs (for existing items).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-order.schema.ts:27](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L27) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/product-order.schema.ts:28](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L28) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-order.schema.ts:29](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L29) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/product-order.schema.ts:30](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L30) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/product-order.schema.ts:31](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L31) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/product-order.schema.ts:32](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L32) |
| <a id="selectedvariant"></a> `selectedVariant?` | `string` | [src/core/business-mgt/product-order.schema.ts:35](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L35) |
| <a id="warrantyinfo"></a> `warrantyInfo?` | `string` | [src/core/business-mgt/product-order.schema.ts:36](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L36) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-order.schema.ts:38](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L38) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/product-order.schema.ts:39](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L39) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-order.schema.ts:46](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L46) |
| <a id="productorderid"></a> `productOrderId` | `string` | [src/core/business-mgt/product-order.schema.ts:47](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/product-order.schema.ts#L47) |
