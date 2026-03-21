[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.50**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / SmsStatus

# Enumeration: SmsStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:191](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L191)

SMS delivery status for tracking message lifecycle.

Tracks the progression of an outbound SMS from queue through
delivery or failure, updated by carrier delivery reports.

## Remarks

**Status Lifecycle:**
```
QUEUED → SENT → DELIVERED
             ↘ UNDELIVERED
      ↘ FAILED
```

## See

SmsRequestSchema - Uses this for delivery tracking

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="queued"></a> `QUEUED` | `"queued"` | SMS request created, awaiting sending | [src/core/type-definitions/conversation.type.definition.ts:193](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L193) |
| <a id="sent"></a> `SENT` | `"sent"` | SMS successfully submitted to carrier | [src/core/type-definitions/conversation.type.definition.ts:195](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L195) |
| <a id="delivered"></a> `DELIVERED` | `"delivered"` | SMS confirmed delivered to recipient device | [src/core/type-definitions/conversation.type.definition.ts:197](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L197) |
| <a id="failed"></a> `FAILED` | `"failed"` | SMS failed to send due to technical error | [src/core/type-definitions/conversation.type.definition.ts:199](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L199) |
| <a id="undelivered"></a> `UNDELIVERED` | `"undelivered"` | SMS could not be delivered (invalid number, blocked, etc.) | [src/core/type-definitions/conversation.type.definition.ts:201](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L201) |
