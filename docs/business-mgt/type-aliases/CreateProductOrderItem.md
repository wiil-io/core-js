[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateProductOrderItem

# Type Alias: CreateProductOrderItem

```ts
type CreateProductOrderItem = {
  productId: string;
  variantId?: string | null;
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

Defined in: [src/core/business-mgt/product-management/product-order.schema.ts:181](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L181)

Base product order item schema (without productOrderId for creation).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:31](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L31) |
| <a id="variantid"></a> `variantId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:32](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L32) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:33](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L33) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:34](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L34) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:35](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L35) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:36](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L36) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:37](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L37) |
| <a id="selectedvariant"></a> `selectedVariant?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:40](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L40) |
| <a id="warrantyinfo"></a> `warrantyInfo?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:41](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L41) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-management/product-order.schema.ts:43](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L43) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:44](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-order.schema.ts#L44) |
