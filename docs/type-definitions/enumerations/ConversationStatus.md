[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ConversationStatus

# Enumeration: ConversationStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:50](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L50)

Conversation lifecycle status.

Tracks the current state of a conversation from initiation through
completion and post-processing (summarization).

## Remarks

**Status Flow:**
```
PENDING → STARTED → ACTIVE → PAUSED → ACTIVE → ENDED → SUMMARIZED
```

## See

ServiceConversationConfigSchema - Uses this for lifecycle tracking

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="pending"></a> `PENDING` | `"pending"` | Conversation created but not yet started | [src/core/type-definitions/conversation.type.definition.ts:52](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L52) |
| <a id="started"></a> `STARTED` | `"started"` | Conversation initiated, awaiting participant connection | [src/core/type-definitions/conversation.type.definition.ts:54](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L54) |
| <a id="active"></a> `ACTIVE` | `"active"` | Conversation actively in progress with connected participants | [src/core/type-definitions/conversation.type.definition.ts:56](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L56) |
| <a id="paused"></a> `PAUSED` | `"paused"` | Conversation temporarily paused (hold, transfer in progress) | [src/core/type-definitions/conversation.type.definition.ts:58](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L58) |
| <a id="ended"></a> `ENDED` | `"ended"` | Conversation ended, awaiting post-processing | [src/core/type-definitions/conversation.type.definition.ts:60](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L60) |
| <a id="summarized"></a> `SUMMARIZED` | `"summarized"` | Initial AI summary generated for the conversation | [src/core/type-definitions/conversation.type.definition.ts:62](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L62) |
| <a id="updated_summarized"></a> `UPDATED_SUMMARIZED` | `"updated_summarized"` | Summary updated after additional processing or review | [src/core/type-definitions/conversation.type.definition.ts:64](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L64) |
