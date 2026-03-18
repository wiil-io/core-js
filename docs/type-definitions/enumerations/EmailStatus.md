[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / EmailStatus

# Enumeration: EmailStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:160](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L160)

Email delivery status for tracking email lifecycle.

Tracks the progression of an outbound email from queue through
delivery or failure, updated by provider webhooks.

## Remarks

**Status Lifecycle:**
```
QUEUED → SENT → DELIVERED
             ↘ BOUNCED
             ↘ COMPLAINED
      ↘ FAILED
```

## See

EmailRecordSchema - Uses this for delivery tracking

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="queued"></a> `QUEUED` | `"queued"` | Email request created, awaiting sending | [src/core/type-definitions/conversation.type.definition.ts:162](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L162) |
| <a id="sent"></a> `SENT` | `"sent"` | Email successfully submitted to mail provider | [src/core/type-definitions/conversation.type.definition.ts:164](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L164) |
| <a id="delivered"></a> `DELIVERED` | `"delivered"` | Email confirmed delivered to recipient inbox | [src/core/type-definitions/conversation.type.definition.ts:166](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L166) |
| <a id="bounced"></a> `BOUNCED` | `"bounced"` | Email bounced (hard or soft bounce from recipient server) | [src/core/type-definitions/conversation.type.definition.ts:168](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L168) |
| <a id="failed"></a> `FAILED` | `"failed"` | Email failed to send due to technical error | [src/core/type-definitions/conversation.type.definition.ts:170](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L170) |
| <a id="complained"></a> `COMPLAINED` | `"complained"` | Recipient marked email as spam (complaint received) | [src/core/type-definitions/conversation.type.definition.ts:172](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/type-definitions/conversation.type.definition.ts#L172) |
