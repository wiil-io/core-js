[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / EmailStatus

# Enumeration: EmailStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:181](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L181)

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
| <a id="queued"></a> `QUEUED` | `"queued"` | Email request created, awaiting sending | [src/core/type-definitions/conversation.type.definition.ts:183](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L183) |
| <a id="sent"></a> `SENT` | `"sent"` | Email successfully submitted to mail provider | [src/core/type-definitions/conversation.type.definition.ts:185](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L185) |
| <a id="delivered"></a> `DELIVERED` | `"delivered"` | Email confirmed delivered to recipient inbox | [src/core/type-definitions/conversation.type.definition.ts:187](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L187) |
| <a id="bounced"></a> `BOUNCED` | `"bounced"` | Email bounced (hard or soft bounce from recipient server) | [src/core/type-definitions/conversation.type.definition.ts:189](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L189) |
| <a id="failed"></a> `FAILED` | `"failed"` | Email failed to send due to technical error | [src/core/type-definitions/conversation.type.definition.ts:191](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L191) |
| <a id="complained"></a> `COMPLAINED` | `"complained"` | Recipient marked email as spam (complaint received) | [src/core/type-definitions/conversation.type.definition.ts:193](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L193) |
