[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ServiceStatus

# Enumeration: ServiceStatus

Defined in: [src/core/type-definitions/account-definitions.ts:19](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/type-definitions/account-definitions.ts#L19)

Service status enumeration for organizations and projects.

Defines the operational state of a service within the platform.

## Example

```typescript
const orgStatus: ServiceStatus = ServiceStatus.ACTIVE;
```

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="active"></a> `ACTIVE` | `"active"` | Service is operational and available | [src/core/type-definitions/account-definitions.ts:21](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/type-definitions/account-definitions.ts#L21) |
| <a id="inactive"></a> `INACTIVE` | `"inactive"` | Service is not currently in use but can be reactivated | [src/core/type-definitions/account-definitions.ts:23](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/type-definitions/account-definitions.ts#L23) |
| <a id="suspended"></a> `SUSPENDED` | `"suspended"` | Service is temporarily suspended and requires intervention to resume | [src/core/type-definitions/account-definitions.ts:25](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/type-definitions/account-definitions.ts#L25) |
