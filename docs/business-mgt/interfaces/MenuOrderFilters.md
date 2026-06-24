[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuOrderFilters

# Interface: MenuOrderFilters

Defined in: [src/core/business-mgt/menu-management/menu.order.schema.ts:239](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L239)

Menu order filter options.
 MenuOrderFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across order number/customer | [src/core/business-mgt/menu-management/menu.order.schema.ts:241](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L241) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/business-mgt/menu-management/menu.order.schema.ts:243](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L243) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by channel ID | [src/core/business-mgt/menu-management/menu.order.schema.ts:245](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L245) |
| <a id="terminalid"></a> `terminalId?` | `string` | Filter by terminal ID | [src/core/business-mgt/menu-management/menu.order.schema.ts:247](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L247) |
| <a id="operatorid"></a> `operatorId?` | `string` | Filter by operator ID | [src/core/business-mgt/menu-management/menu.order.schema.ts:249](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L249) |
| <a id="type"></a> `type?` | [`MenuOrderType`](../../type-definitions/enumerations/MenuOrderType.md)[] | Filter by order type(s) | [src/core/business-mgt/menu-management/menu.order.schema.ts:251](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L251) |
| <a id="status"></a> `status?` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md)[] | Filter by order status(es) | [src/core/business-mgt/menu-management/menu.order.schema.ts:253](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L253) |
| <a id="paymentstatus"></a> `paymentStatus?` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md)[] | Filter by payment status(es) | [src/core/business-mgt/menu-management/menu.order.schema.ts:255](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L255) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/menu-management/menu.order.schema.ts:257](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L257) |
| <a id="tablenumber"></a> `tableNumber?` | `string` | Filter by table number | [src/core/business-mgt/menu-management/menu.order.schema.ts:259](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L259) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source | [src/core/business-mgt/menu-management/menu.order.schema.ts:261](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L261) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by date range | [src/core/business-mgt/menu-management/menu.order.schema.ts:263](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L263) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/menu-management/menu.order.schema.ts:263](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L263) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/menu-management/menu.order.schema.ts:263](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu.order.schema.ts#L263) |
