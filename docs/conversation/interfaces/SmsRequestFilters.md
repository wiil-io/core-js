[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / SmsRequestFilters

# Interface: SmsRequestFilters

Defined in: [src/core/conversation/outbound-sms.schema.ts:114](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L114)

SMS request filter options.
 SmsRequestFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across phone numbers and body | [src/core/conversation/outbound-sms.schema.ts:116](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L116) |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` | Filter by phone configuration ID | [src/core/conversation/outbound-sms.schema.ts:118](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L118) |
| <a id="to"></a> `to?` | `string` | Filter by recipient phone number | [src/core/conversation/outbound-sms.schema.ts:120](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L120) |
| <a id="from"></a> `from?` | `string` | Filter by sender phone number | [src/core/conversation/outbound-sms.schema.ts:122](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L122) |
| <a id="templateid"></a> `templateId?` | `string` | Filter by template ID | [src/core/conversation/outbound-sms.schema.ts:124](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L124) |
| <a id="status"></a> `status?` | [`SmsStatus`](../../type-definitions/enumerations/SmsStatus.md) | Filter by delivery status | [src/core/conversation/outbound-sms.schema.ts:126](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L126) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` | Filter by linked conversation ID | [src/core/conversation/outbound-sms.schema.ts:128](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L128) |
| <a id="scheduledatrange"></a> `scheduledAtRange?` | \{ `from?`: `number`; `to?`: `number`; \} | Filter by scheduled date range | [src/core/conversation/outbound-sms.schema.ts:130](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L130) |
| `scheduledAtRange.from?` | `number` | - | [src/core/conversation/outbound-sms.schema.ts:130](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L130) |
| `scheduledAtRange.to?` | `number` | - | [src/core/conversation/outbound-sms.schema.ts:130](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/conversation/outbound-sms.schema.ts#L130) |
