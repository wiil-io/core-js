[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductOrderItem

# Type Alias: ProductOrderItem

```ts
type ProductOrderItem = {
  productId: string;
  variantId?: string | null;
  itemName: string;
  sku?: string | null;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  selectedVariant?: string;
  warrantyInfo?: string | null;
  status: OrderStatus;
  notes?: string | null;
  id: string;
  productOrderId: string;
};
```

Defined in: [src/core/business-mgt/product-management/product-order.schema.ts:176](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L176)

Product order item schema with IDs (for existing items).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:31](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L31) |
| <a id="variantid"></a> `variantId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:32](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L32) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:33](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L33) |
| <a id="sku"></a> `sku?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:34](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L34) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:35](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L35) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:36](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L36) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:37](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L37) |
| <a id="selectedvariant"></a> `selectedVariant?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:40](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L40) |
| <a id="warrantyinfo"></a> `warrantyInfo?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:41](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L41) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-management/product-order.schema.ts:43](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L43) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:44](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L44) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:51](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L51) |
| <a id="productorderid"></a> `productOrderId` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:52](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/product-management/product-order.schema.ts#L52) |
