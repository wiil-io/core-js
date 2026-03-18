[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ServiceConversationType

# Enumeration: ServiceConversationType

Defined in: [src/core/type-definitions/conversation.type.definition.ts:40](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L40)

Service conversation channel types.

Identifies the communication channel used for a conversation,
enabling channel-specific handling and routing logic.

## See

ServiceConversationConfigSchema - Uses this for channel identification

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ott_call"></a> `OTT_CALL` | `"OTT_CALL"` | WebRTC or OTT voice call | [src/core/type-definitions/conversation.type.definition.ts:42](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L42) |
| <a id="ott_chat"></a> `OTT_CHAT` | `"OTT_CHAT"` | WebRTC or OTT text chat | [src/core/type-definitions/conversation.type.definition.ts:44](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L44) |
| <a id="telephony_call"></a> `TELEPHONY_CALL` | `"TELEPHONY_CALL"` | Traditional PSTN/SIP telephony call | [src/core/type-definitions/conversation.type.definition.ts:46](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L46) |
| <a id="sms"></a> `SMS` | `"SMS"` | SMS text messaging | [src/core/type-definitions/conversation.type.definition.ts:48](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L48) |
| <a id="email"></a> `EMAIL` | `"EMAIL"` | Email communication | [src/core/type-definitions/conversation.type.definition.ts:50](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L50) |
| <a id="whatsapp"></a> `WHATSAPP` | `"WHATSAPP"` | WhatsApp messaging | [src/core/type-definitions/conversation.type.definition.ts:52](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L52) |
| <a id="telegram"></a> `TELEGRAM` | `"TELEGRAM"` | Telegram messaging | [src/core/type-definitions/conversation.type.definition.ts:54](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L54) |
