[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ConversationFilters

# Interface: ConversationFilters

Defined in: src/core/conversation/conversation-config.schema.ts:197

Enhanced interfaces for filtering and sorting conversations.

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | src/core/conversation/conversation-config.schema.ts:198 |
| <a id="conversationtype"></a> `conversationType?` | [`ServiceConversationType`](../enumerations/ServiceConversationType.md)[] | src/core/conversation/conversation-config.schema.ts:199 |
| <a id="channelid"></a> `channelId?` | `string` | src/core/conversation/conversation-config.schema.ts:200 |
| <a id="customerid"></a> `customerId?` | `string` | src/core/conversation/conversation-config.schema.ts:201 |
| <a id="hasmessages"></a> `hasMessages?` | `boolean` | src/core/conversation/conversation-config.schema.ts:202 |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `Date`; `end?`: `Date`; \} | src/core/conversation/conversation-config.schema.ts:203 |
| `dateRange.start?` | `Date` | src/core/conversation/conversation-config.schema.ts:204 |
| `dateRange.end?` | `Date` | src/core/conversation/conversation-config.schema.ts:205 |
