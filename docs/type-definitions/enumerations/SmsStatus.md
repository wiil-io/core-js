[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / SmsStatus

# Enumeration: SmsStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:212](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L212)

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
| <a id="queued"></a> `QUEUED` | `"queued"` | SMS request created, awaiting sending | [src/core/type-definitions/conversation.type.definition.ts:214](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L214) |
| <a id="sent"></a> `SENT` | `"sent"` | SMS successfully submitted to carrier | [src/core/type-definitions/conversation.type.definition.ts:216](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L216) |
| <a id="delivered"></a> `DELIVERED` | `"delivered"` | SMS confirmed delivered to recipient device | [src/core/type-definitions/conversation.type.definition.ts:218](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L218) |
| <a id="failed"></a> `FAILED` | `"failed"` | SMS failed to send due to technical error | [src/core/type-definitions/conversation.type.definition.ts:220](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L220) |
| <a id="undelivered"></a> `UNDELIVERED` | `"undelivered"` | SMS could not be delivered (invalid number, blocked, etc.) | [src/core/type-definitions/conversation.type.definition.ts:222](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L222) |
