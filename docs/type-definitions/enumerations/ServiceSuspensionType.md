[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ServiceSuspensionType

# Enumeration: ServiceSuspensionType

Defined in: [src/core/type-definitions/account-definitions.ts:41](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/type-definitions/account-definitions.ts#L41)

Service suspension type enumeration.

Indicates the reason or trigger for a service suspension.

## Example

```typescript
const suspensionReason: ServiceSuspensionType = ServiceSuspensionType.QUOTA_EXCEEDED;
```

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="manual"></a> `MANUAL` | `"manual"` | Service was manually suspended by an administrator or user | [src/core/type-definitions/account-definitions.ts:43](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/type-definitions/account-definitions.ts#L43) |
| <a id="automatic"></a> `AUTOMATIC` | `"automatic"` | Service was automatically suspended by the system | [src/core/type-definitions/account-definitions.ts:45](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/type-definitions/account-definitions.ts#L45) |
| <a id="subscription_quota_exceeded"></a> `SUBSCRIPTION_QUOTA_EXCEEDED` | `"subscription_quota_exceeded"` | Service was suspended due to subscription quota limits being exceeded | [src/core/type-definitions/account-definitions.ts:47](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/type-definitions/account-definitions.ts#L47) |
| <a id="quota_exceeded"></a> `QUOTA_EXCEEDED` | `"quota_exceeded"` | Service was suspended due to usage quota limits being exceeded | [src/core/type-definitions/account-definitions.ts:49](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/type-definitions/account-definitions.ts#L49) |
| <a id="payment_failed"></a> `PAYMENT_FAILED` | `"payment_failed"` | Service was suspended due to failed payment transaction | [src/core/type-definitions/account-definitions.ts:51](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/type-definitions/account-definitions.ts#L51) |
