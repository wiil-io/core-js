[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateProductOrderItem

# Type Alias: CreateProductOrderItem

```ts
type CreateProductOrderItem = {
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

Defined in: src/core/business-mgt/product-order.schema.ts:174

Base product order item schema (without productOrderId for creation).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | src/core/business-mgt/product-order.schema.ts:27 |
| <a id="itemname"></a> `itemName` | `string` | src/core/business-mgt/product-order.schema.ts:28 |
| <a id="sku"></a> `sku?` | `string` | src/core/business-mgt/product-order.schema.ts:29 |
| <a id="quantity"></a> `quantity` | `number` | src/core/business-mgt/product-order.schema.ts:30 |
| <a id="unitprice"></a> `unitPrice` | `number` | src/core/business-mgt/product-order.schema.ts:31 |
| <a id="totalprice"></a> `totalPrice` | `number` | src/core/business-mgt/product-order.schema.ts:32 |
| <a id="selectedvariant"></a> `selectedVariant?` | `string` | src/core/business-mgt/product-order.schema.ts:35 |
| <a id="warrantyinfo"></a> `warrantyInfo?` | `string` | src/core/business-mgt/product-order.schema.ts:36 |
| <a id="status"></a> `status` | [`OrderStatus`](../enumerations/OrderStatus.md) | src/core/business-mgt/product-order.schema.ts:38 |
| <a id="notes"></a> `notes?` | `string` | src/core/business-mgt/product-order.schema.ts:39 |
