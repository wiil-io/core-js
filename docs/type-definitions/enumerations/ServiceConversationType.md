[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ServiceConversationType

# Enumeration: ServiceConversationType

Defined in: [src/core/type-definitions/conversation.type.definition.ts:19](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L19)

Service conversation channel types.

Identifies the communication channel used for a conversation,
enabling channel-specific handling and routing logic.

## See

ServiceConversationConfigSchema - Uses this for channel identification

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ott_call"></a> `OTT_CALL` | `"OTT_CALL"` | WebRTC or OTT voice call | [src/core/type-definitions/conversation.type.definition.ts:21](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L21) |
| <a id="ott_chat"></a> `OTT_CHAT` | `"OTT_CHAT"` | WebRTC or OTT text chat | [src/core/type-definitions/conversation.type.definition.ts:23](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L23) |
| <a id="telephony_call"></a> `TELEPHONY_CALL` | `"TELEPHONY_CALL"` | Traditional PSTN/SIP telephony call | [src/core/type-definitions/conversation.type.definition.ts:25](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L25) |
| <a id="sms"></a> `SMS` | `"SMS"` | SMS text messaging | [src/core/type-definitions/conversation.type.definition.ts:27](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L27) |
| <a id="email"></a> `EMAIL` | `"EMAIL"` | Email communication | [src/core/type-definitions/conversation.type.definition.ts:29](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L29) |
| <a id="whatsapp"></a> `WHATSAPP` | `"WHATSAPP"` | WhatsApp messaging | [src/core/type-definitions/conversation.type.definition.ts:31](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L31) |
| <a id="telegram"></a> `TELEGRAM` | `"TELEGRAM"` | Telegram messaging | [src/core/type-definitions/conversation.type.definition.ts:33](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L33) |
