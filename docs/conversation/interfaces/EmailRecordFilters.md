[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecordFilters

# Interface: EmailRecordFilters

Defined in: [src/core/conversation/outbound-email.schema.ts:238](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L238)

Email record filter options.
 EmailRecordFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="emailrequestid"></a> `emailRequestId?` | `string` | Filter by email request ID | [src/core/conversation/outbound-email.schema.ts:240](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L240) |
| <a id="providermessageid"></a> `providerMessageId?` | `string` | Filter by provider message ID | [src/core/conversation/outbound-email.schema.ts:242](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L242) |
| <a id="status"></a> `status?` | [`EmailStatus`](../../type-definitions/enumerations/EmailStatus.md) | Filter by delivery status | [src/core/conversation/outbound-email.schema.ts:244](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L244) |
| <a id="sentatrange"></a> `sentAtRange?` | \{ `from?`: `number`; `to?`: `number`; \} | Filter by sent date range | [src/core/conversation/outbound-email.schema.ts:246](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L246) |
| `sentAtRange.from?` | `number` | - | [src/core/conversation/outbound-email.schema.ts:246](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L246) |
| `sentAtRange.to?` | `number` | - | [src/core/conversation/outbound-email.schema.ts:246](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L246) |
| <a id="deliveredatrange"></a> `deliveredAtRange?` | \{ `from?`: `number`; `to?`: `number`; \} | Filter by delivered date range | [src/core/conversation/outbound-email.schema.ts:248](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L248) |
| `deliveredAtRange.from?` | `number` | - | [src/core/conversation/outbound-email.schema.ts:248](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L248) |
| `deliveredAtRange.to?` | `number` | - | [src/core/conversation/outbound-email.schema.ts:248](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L248) |
