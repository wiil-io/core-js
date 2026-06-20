[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationFilters

# Interface: ConversationFilters

Defined in: [src/core/conversation/conversation-config.schema.ts:431](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L431)

Conversation filter options.
 ConversationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across conversation content | [src/core/conversation/conversation-config.schema.ts:433](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L433) |
| <a id="conversationtype"></a> `conversationType?` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md)[] | Filter by conversation type(s) | [src/core/conversation/conversation-config.schema.ts:435](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L435) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by channel ID | [src/core/conversation/conversation-config.schema.ts:437](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L437) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/conversation/conversation-config.schema.ts:439](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L439) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/conversation/conversation-config.schema.ts:441](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L441) |
| <a id="hasmessages"></a> `hasMessages?` | `boolean` | Filter by presence of messages | [src/core/conversation/conversation-config.schema.ts:443](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L443) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `Date`; `end?`: `Date`; \} | Filter by date range | [src/core/conversation/conversation-config.schema.ts:445](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L445) |
| `dateRange.start?` | `Date` | - | [src/core/conversation/conversation-config.schema.ts:446](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L446) |
| `dateRange.end?` | `Date` | - | [src/core/conversation/conversation-config.schema.ts:447](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/conversation/conversation-config.schema.ts#L447) |
