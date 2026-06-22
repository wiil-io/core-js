[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationFilters

# Interface: ConversationFilters

Defined in: [src/core/conversation/conversation-config.schema.ts:405](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L405)

Conversation filter options.
 ConversationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across conversation content | [src/core/conversation/conversation-config.schema.ts:407](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L407) |
| <a id="conversationtype"></a> `conversationType?` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md)[] | Filter by conversation type(s) | [src/core/conversation/conversation-config.schema.ts:409](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L409) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by channel ID | [src/core/conversation/conversation-config.schema.ts:411](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L411) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/conversation/conversation-config.schema.ts:413](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L413) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/conversation/conversation-config.schema.ts:415](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L415) |
| <a id="hasmessages"></a> `hasMessages?` | `boolean` | Filter by presence of messages | [src/core/conversation/conversation-config.schema.ts:417](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L417) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `Date`; `end?`: `Date`; \} | Filter by date range | [src/core/conversation/conversation-config.schema.ts:419](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L419) |
| `dateRange.start?` | `Date` | - | [src/core/conversation/conversation-config.schema.ts:420](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L420) |
| `dateRange.end?` | `Date` | - | [src/core/conversation/conversation-config.schema.ts:421](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L421) |
