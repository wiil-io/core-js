[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationFilters

# Interface: ConversationFilters

Defined in: [src/core/conversation/conversation-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L197)

Enhanced interfaces for filtering and sorting conversations.

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | [src/core/conversation/conversation-config.schema.ts:198](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L198) |
| <a id="conversationtype"></a> `conversationType?` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md)[] | [src/core/conversation/conversation-config.schema.ts:199](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L199) |
| <a id="channelid"></a> `channelId?` | `string` | [src/core/conversation/conversation-config.schema.ts:200](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L200) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/conversation/conversation-config.schema.ts:201](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L201) |
| <a id="hasmessages"></a> `hasMessages?` | `boolean` | [src/core/conversation/conversation-config.schema.ts:202](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L202) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `Date`; `end?`: `Date`; \} | [src/core/conversation/conversation-config.schema.ts:203](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L203) |
| `dateRange.start?` | `Date` | [src/core/conversation/conversation-config.schema.ts:204](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L204) |
| `dateRange.end?` | `Date` | [src/core/conversation/conversation-config.schema.ts:205](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L205) |
