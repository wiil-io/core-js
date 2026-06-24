[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductOrderFilters

# Interface: ProductOrderFilters

Defined in: [src/core/business-mgt/product-management/product-order.schema.ts:191](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L191)

Product order filter options.
 ProductOrderFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across order fields | [src/core/business-mgt/product-management/product-order.schema.ts:193](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L193) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/business-mgt/product-management/product-order.schema.ts:195](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L195) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by channel ID | [src/core/business-mgt/product-management/product-order.schema.ts:197](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L197) |
| <a id="terminalid"></a> `terminalId?` | `string` | Filter by terminal ID | [src/core/business-mgt/product-management/product-order.schema.ts:199](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L199) |
| <a id="operatorid"></a> `operatorId?` | `string` | Filter by operator ID | [src/core/business-mgt/product-management/product-order.schema.ts:201](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L201) |
| <a id="status"></a> `status?` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md)[] | Filter by order statuses | [src/core/business-mgt/product-management/product-order.schema.ts:203](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L203) |
| <a id="paymentstatus"></a> `paymentStatus?` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md)[] | Filter by payment statuses | [src/core/business-mgt/product-management/product-order.schema.ts:205](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L205) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/product-management/product-order.schema.ts:207](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L207) |
| <a id="shippingmethod"></a> `shippingMethod?` | `string` | Filter by shipping method | [src/core/business-mgt/product-management/product-order.schema.ts:209](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L209) |
| <a id="source"></a> `source?` | `string` | Filter by order source | [src/core/business-mgt/product-management/product-order.schema.ts:211](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L211) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source platform | [src/core/business-mgt/product-management/product-order.schema.ts:213](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L213) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by date range | [src/core/business-mgt/product-management/product-order.schema.ts:215](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L215) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/product-management/product-order.schema.ts:215](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L215) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/product-management/product-order.schema.ts:215](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L215) |
