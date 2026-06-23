[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationFilters

# Interface: ConversationFilters

Defined in: [src/core/conversation/conversation-config.schema.ts:406](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L406)

Conversation filter options.
 ConversationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across conversation content | [src/core/conversation/conversation-config.schema.ts:408](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L408) |
| <a id="conversationtype"></a> `conversationType?` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md)[] | Filter by conversation type(s) | [src/core/conversation/conversation-config.schema.ts:410](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L410) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by channel ID | [src/core/conversation/conversation-config.schema.ts:412](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L412) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/conversation/conversation-config.schema.ts:414](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L414) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/conversation/conversation-config.schema.ts:416](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L416) |
| <a id="hasmessages"></a> `hasMessages?` | `boolean` | Filter by presence of messages | [src/core/conversation/conversation-config.schema.ts:418](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L418) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `Date`; `end?`: `Date`; \} | Filter by date range | [src/core/conversation/conversation-config.schema.ts:420](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L420) |
| `dateRange.start?` | `Date` | - | [src/core/conversation/conversation-config.schema.ts:421](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L421) |
| `dateRange.end?` | `Date` | - | [src/core/conversation/conversation-config.schema.ts:422](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L422) |
