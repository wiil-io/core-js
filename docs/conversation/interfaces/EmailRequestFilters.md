[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.56**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRequestFilters

# Interface: EmailRequestFilters

Defined in: [src/core/conversation/outbound-email.schema.ts:191](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L191)

Email request filter options.
 EmailRequestFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across subject | [src/core/conversation/outbound-email.schema.ts:193](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L193) |
| <a id="emailconfigurationid"></a> `emailConfigurationId?` | `string` | Filter by email configuration ID | [src/core/conversation/outbound-email.schema.ts:195](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L195) |
| <a id="configuredemailaddress"></a> `configuredEmailAddress?` | `string` | Filter by configured email address | [src/core/conversation/outbound-email.schema.ts:197](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L197) |
| <a id="templateid"></a> `templateId?` | `string` | Filter by template ID | [src/core/conversation/outbound-email.schema.ts:199](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L199) |
| <a id="status"></a> `status?` | [`EmailStatus`](../../type-definitions/enumerations/EmailStatus.md) | Filter by delivery status | [src/core/conversation/outbound-email.schema.ts:201](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L201) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` | Filter by linked conversation ID | [src/core/conversation/outbound-email.schema.ts:203](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L203) |
| <a id="scheduledatrange"></a> `scheduledAtRange?` | \{ `from?`: `number`; `to?`: `number`; \} | Filter by scheduled date range | [src/core/conversation/outbound-email.schema.ts:205](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L205) |
| `scheduledAtRange.from?` | `number` | - | [src/core/conversation/outbound-email.schema.ts:205](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L205) |
| `scheduledAtRange.to?` | `number` | - | [src/core/conversation/outbound-email.schema.ts:205](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/conversation/outbound-email.schema.ts#L205) |
