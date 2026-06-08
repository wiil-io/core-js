[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductOrderItem

# Type Alias: ProductOrderItem

```ts
type ProductOrderItem = {
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
  id: string;
  productOrderId: string;
};
```

Defined in: src/core/business-mgt/product-management/product-order.schema.ts:176

Product order item schema with IDs (for existing items).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:31 |
| <a id="variantid"></a> `variantId?` | `string` \| `null` | src/core/business-mgt/product-management/product-order.schema.ts:32 |
| <a id="itemname"></a> `itemName` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:33 |
| <a id="sku"></a> `sku?` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:34 |
| <a id="quantity"></a> `quantity` | `number` | src/core/business-mgt/product-management/product-order.schema.ts:35 |
| <a id="unitprice"></a> `unitPrice` | `number` | src/core/business-mgt/product-management/product-order.schema.ts:36 |
| <a id="totalprice"></a> `totalPrice` | `number` | src/core/business-mgt/product-management/product-order.schema.ts:37 |
| <a id="selectedvariant"></a> `selectedVariant?` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:40 |
| <a id="warrantyinfo"></a> `warrantyInfo?` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:41 |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | src/core/business-mgt/product-management/product-order.schema.ts:43 |
| <a id="notes"></a> `notes?` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:44 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:51 |
| <a id="productorderid"></a> `productOrderId` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:52 |
