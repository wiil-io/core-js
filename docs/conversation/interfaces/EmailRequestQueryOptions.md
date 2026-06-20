[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRequestQueryOptions

# Interface: EmailRequestQueryOptions

Defined in: [src/core/conversation/outbound-email.schema.ts:223](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L223)

Email request query options.
 EmailRequestQueryOptions

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="page"></a> `page` | `number` | Page number (1-indexed) | [src/core/conversation/outbound-email.schema.ts:225](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L225) |
| <a id="pagesize"></a> `pageSize` | `number` | Items per page | [src/core/conversation/outbound-email.schema.ts:227](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L227) |
| <a id="filters"></a> `filters?` | [`EmailRequestFilters`](EmailRequestFilters.md) | Optional filters | [src/core/conversation/outbound-email.schema.ts:229](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L229) |
| <a id="sorting"></a> `sorting?` | [`EmailRequestSorting`](EmailRequestSorting.md) | Optional sorting | [src/core/conversation/outbound-email.schema.ts:231](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L231) |
