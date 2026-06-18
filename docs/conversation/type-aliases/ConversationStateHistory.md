[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationStateHistory

# Type Alias: ConversationStateHistory

```ts
type ConversationStateHistory = {
  status: ConversationStatus;
  timestamp: number;
  reason?: string;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:418](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/conversation-config.schema.ts#L418)

Conversation state history schema for tracking status changes.

Audit trail recording each status transition throughout a conversation's lifecycle. Enables tracking
conversation progression from initiation to completion, understanding conversation flow patterns, and
analyzing resolution times.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md) | [src/core/conversation/conversation-config.schema.ts:198](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/conversation-config.schema.ts#L198) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-config.schema.ts:199](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/conversation-config.schema.ts#L199) |
| <a id="reason"></a> `reason?` | `string` | [src/core/conversation/conversation-config.schema.ts:200](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/conversation-config.schema.ts#L200) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/conversation-config.schema.ts:201](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/conversation-config.schema.ts#L201) |

## Remarks

**Architecture Context:**
- **Used In**: ServiceConversationConfig.state_history array
- **Purpose**: Audit trail for status transitions and conversation lifecycle tracking
- **Analytics**: Used for measuring average handling time, resolution rates, and conversation flow analysis

**Status Lifecycle:**
- **ACTIVE**: Conversation currently in progress with ongoing message exchange
- **COMPLETED**: Conversation successfully concluded with issue resolved or information provided
- **FAILED**: Conversation encountered errors or technical failures
- **ABANDONED**: User left conversation without resolution
- **TRANSFERRED**: Call transferred to human agent
