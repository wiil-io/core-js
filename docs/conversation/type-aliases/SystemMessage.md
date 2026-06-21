[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / SystemMessage

# Type Alias: SystemMessage

```ts
type SystemMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  message_type: SYSTEM;
  system_message_id: string;
  event_type: SystemMessageEventType;
  metadata?: Record<string, unknown>;
};
```

Defined in: [src/core/conversation/conversation-message.schema.ts:293](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L293)

System message schema.

Represents system-generated messages for tracking conversation events such as
handovers, agent joins/leaves, and transfers. Not directly visible to users
but recorded for audit trails and conversation state tracking.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:73](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L73) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:74](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L74) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:75](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L75) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:76](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L76) |
| <a id="message_type"></a> `message_type` | [`SYSTEM`](../enumerations/MessageType.md#system) | [src/core/conversation/conversation-message.schema.ts:277](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L277) |
| <a id="system_message_id"></a> `system_message_id` | `string` | [src/core/conversation/conversation-message.schema.ts:278](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L278) |
| <a id="event_type"></a> `event_type` | [`SystemMessageEventType`](../enumerations/SystemMessageEventType.md) | [src/core/conversation/conversation-message.schema.ts:279](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L279) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | [src/core/conversation/conversation-message.schema.ts:280](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/conversation/conversation-message.schema.ts#L280) |

## Remarks

**Architecture Context:**
- **Extends**: BaseChatMessageSchema with system-specific fields
- **Message Type**: Always 'system' (MessageType.SYSTEM)
- **Purpose**: Audit trail, conversation state tracking, event logging
- **Visibility**: Typically hidden from end users, visible in admin dashboards
