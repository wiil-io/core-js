[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ConversationDirection

# Enumeration: ConversationDirection

Defined in: [src/core/type-definitions/conversation.type.definition.ts:228](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/conversation.type.definition.ts#L228)

Conversation direction for tracking inbound/outbound interactions.

Identifies whether a conversation was initiated by the customer (inbound)
or by the business (outbound) for analytics, routing, and billing purposes.

## See

ServiceConversationConfigSchema - Uses this for direction tracking

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="inbound"></a> `INBOUND` | `"inbound"` | Customer-initiated conversation (incoming call, received email, etc.) | [src/core/type-definitions/conversation.type.definition.ts:230](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/conversation.type.definition.ts#L230) |
| <a id="outbound"></a> `OUTBOUND` | `"outbound"` | Business-initiated conversation (outbound call, campaign, etc.) | [src/core/type-definitions/conversation.type.definition.ts:232](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/conversation.type.definition.ts#L232) |
