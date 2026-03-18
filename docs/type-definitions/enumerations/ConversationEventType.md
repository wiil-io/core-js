[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ConversationEventType

# Enumeration: ConversationEventType

Defined in: [src/core/type-definitions/conversation.type.definition.ts:19](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L19)

Conversation event types for webhook and analytics tracking.

Used to categorize events that occur during conversation lifecycles
for event-driven architectures and analytics pipelines.

## See

ServiceConversationConfigSchema - Conversation configuration

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ott_call_completed"></a> `OTT_CALL_COMPLETED` | `"OTT_CALL_COMPLETED"` | OTT (Over-The-Top) call completed via WebRTC or similar protocol | [src/core/type-definitions/conversation.type.definition.ts:21](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L21) |
| <a id="telephony_call_completed"></a> `TELEPHONY_CALL_COMPLETED` | `"TELEPHONY_CALL_COMPLETED"` | Traditional telephony call completed via PSTN/SIP | [src/core/type-definitions/conversation.type.definition.ts:23](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L23) |
| <a id="transcription_completed"></a> `TRANSCRIPTION_COMPLETED` | `"TRANSCRIPTION_COMPLETED"` | Speech-to-text transcription processing completed | [src/core/type-definitions/conversation.type.definition.ts:25](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L25) |
| <a id="llm_interaction_completed"></a> `LLM_INTERACTION_COMPLETED` | `"LLM_INTERACTION_COMPLETED"` | LLM interaction (AI response generation) completed | [src/core/type-definitions/conversation.type.definition.ts:27](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L27) |
| <a id="sms_sent"></a> `SMS_SENT` | `"SMS_SENT"` | SMS message successfully sent to carrier | [src/core/type-definitions/conversation.type.definition.ts:29](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L29) |
