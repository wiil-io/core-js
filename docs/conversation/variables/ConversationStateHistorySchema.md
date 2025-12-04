[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.15**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationStateHistorySchema

# Variable: ConversationStateHistorySchema

```ts
const ConversationStateHistorySchema: ZodObject<ConversationStateHistory>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:119](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/conversation-config.schema.ts#L119)

Conversation state history schema for tracking status changes.

Audit trail recording each status transition throughout a conversation's lifecycle. Enables tracking
conversation progression from initiation to completion, understanding conversation flow patterns, and
analyzing resolution times.

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
