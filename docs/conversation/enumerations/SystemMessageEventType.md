[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / SystemMessageEventType

# Enumeration: SystemMessageEventType

Defined in: [src/core/conversation/conversation-message.schema.ts:37](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L37)

System message event type enum.

Identifies the type of system event that triggered a system message,
used for handover tracking, agent status, and conversation transfers.

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="handover_requested"></a> `HANDOVER_REQUESTED` | `"handover_requested"` | User or AI requested handover to human agent | [src/core/conversation/conversation-message.schema.ts:39](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L39) |
| <a id="handover_accepted"></a> `HANDOVER_ACCEPTED` | `"handover_accepted"` | Human agent accepted the handover request | [src/core/conversation/conversation-message.schema.ts:41](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L41) |
| <a id="handover_completed"></a> `HANDOVER_COMPLETED` | `"handover_completed"` | Handover to human agent completed successfully | [src/core/conversation/conversation-message.schema.ts:43](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L43) |
| <a id="handover_failed"></a> `HANDOVER_FAILED` | `"handover_failed"` | Handover attempt failed | [src/core/conversation/conversation-message.schema.ts:45](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L45) |
| <a id="agent_joined"></a> `AGENT_JOINED` | `"agent_joined"` | Human agent joined the conversation | [src/core/conversation/conversation-message.schema.ts:47](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L47) |
| <a id="agent_left"></a> `AGENT_LEFT` | `"agent_left"` | Human agent left the conversation | [src/core/conversation/conversation-message.schema.ts:49](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L49) |
| <a id="conversation_transferred"></a> `CONVERSATION_TRANSFERRED` | `"conversation_transferred"` | Conversation transferred to another agent or queue | [src/core/conversation/conversation-message.schema.ts:51](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L51) |
