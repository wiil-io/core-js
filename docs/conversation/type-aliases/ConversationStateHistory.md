[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.28**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:286](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L286)

Conversation state history schema for tracking status changes.

Audit trail recording each status transition throughout a conversation's lifecycle. Enables tracking
conversation progression from initiation to completion, understanding conversation flow patterns, and
analyzing resolution times.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md) | [src/core/conversation/conversation-config.schema.ts:120](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L120) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-config.schema.ts:121](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L121) |
| <a id="reason"></a> `reason?` | `string` | [src/core/conversation/conversation-config.schema.ts:122](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L122) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/conversation-config.schema.ts:123](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L123) |

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
