[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.40**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductOrderFilters

# Interface: ProductOrderFilters

Defined in: [src/core/business-mgt/product-order.schema.ts:176](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L176)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | [src/core/business-mgt/product-order.schema.ts:177](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L177) |
| <a id="status"></a> `status?` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md)[] | [src/core/business-mgt/product-order.schema.ts:178](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L178) |
| <a id="paymentstatus"></a> `paymentStatus?` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md)[] | [src/core/business-mgt/product-order.schema.ts:179](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L179) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/product-order.schema.ts:180](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L180) |
| <a id="shippingmethod"></a> `shippingMethod?` | `string` | [src/core/business-mgt/product-order.schema.ts:181](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L181) |
| <a id="source"></a> `source?` | `string` | [src/core/business-mgt/product-order.schema.ts:182](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L182) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | [src/core/business-mgt/product-order.schema.ts:183](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L183) |
| `dateRange.start?` | `number` | [src/core/business-mgt/product-order.schema.ts:183](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L183) |
| `dateRange.end?` | `number` | [src/core/business-mgt/product-order.schema.ts:183](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/product-order.schema.ts#L183) |
