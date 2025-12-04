[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.19**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationFilters

# Interface: ConversationFilters

Defined in: [src/core/conversation/conversation-config.schema.ts:291](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L291)

Enhanced interfaces for filtering and sorting conversations.

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | [src/core/conversation/conversation-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L292) |
| <a id="conversationtype"></a> `conversationType?` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md)[] | [src/core/conversation/conversation-config.schema.ts:293](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L293) |
| <a id="channelid"></a> `channelId?` | `string` | [src/core/conversation/conversation-config.schema.ts:294](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L294) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/conversation/conversation-config.schema.ts:295](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L295) |
| <a id="hasmessages"></a> `hasMessages?` | `boolean` | [src/core/conversation/conversation-config.schema.ts:296](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L296) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `Date`; `end?`: `Date`; \} | [src/core/conversation/conversation-config.schema.ts:297](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L297) |
| `dateRange.start?` | `Date` | [src/core/conversation/conversation-config.schema.ts:298](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L298) |
| `dateRange.end?` | `Date` | [src/core/conversation/conversation-config.schema.ts:299](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L299) |
