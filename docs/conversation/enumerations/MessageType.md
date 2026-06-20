[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / MessageType

# Enumeration: MessageType

Defined in: [src/core/conversation/conversation-message.schema.ts:20](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/conversation-message.schema.ts#L20)

Message type enum for distinguishing message senders.

Identifies who sent a message in a conversation to enable proper message
routing, formatting, and context tracking.

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="user"></a> `USER` | `"user"` | Message sent by end user/customer | [src/core/conversation/conversation-message.schema.ts:22](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/conversation-message.schema.ts#L22) |
| <a id="agent"></a> `AGENT` | `"assistant"` | Message sent by AI agent | [src/core/conversation/conversation-message.schema.ts:24](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/conversation-message.schema.ts#L24) |
| <a id="human_agent"></a> `HUMAN_AGENT` | `"human_agent"` | Message sent by human agent (live support) | [src/core/conversation/conversation-message.schema.ts:26](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/conversation-message.schema.ts#L26) |
| <a id="system"></a> `SYSTEM` | `"system"` | System-generated message (events, notifications) | [src/core/conversation/conversation-message.schema.ts:28](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/conversation-message.schema.ts#L28) |
