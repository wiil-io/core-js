[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ConversationStatus

# Enumeration: ConversationStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:71](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L71)

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
| <a id="pending"></a> `PENDING` | `"pending"` | Conversation created but not yet started | [src/core/type-definitions/conversation.type.definition.ts:73](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L73) |
| <a id="started"></a> `STARTED` | `"started"` | Conversation initiated, awaiting participant connection | [src/core/type-definitions/conversation.type.definition.ts:75](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L75) |
| <a id="active"></a> `ACTIVE` | `"active"` | Conversation actively in progress with connected participants | [src/core/type-definitions/conversation.type.definition.ts:77](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L77) |
| <a id="paused"></a> `PAUSED` | `"paused"` | Conversation temporarily paused (hold, transfer in progress) | [src/core/type-definitions/conversation.type.definition.ts:79](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L79) |
| <a id="ended"></a> `ENDED` | `"ended"` | Conversation ended, awaiting post-processing | [src/core/type-definitions/conversation.type.definition.ts:81](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L81) |
| <a id="summarized"></a> `SUMMARIZED` | `"summarized"` | Initial AI summary generated for the conversation | [src/core/type-definitions/conversation.type.definition.ts:83](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L83) |
| <a id="updated_summarized"></a> `UPDATED_SUMMARIZED` | `"updated_summarized"` | Summary updated after additional processing or review | [src/core/type-definitions/conversation.type.definition.ts:85](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L85) |
