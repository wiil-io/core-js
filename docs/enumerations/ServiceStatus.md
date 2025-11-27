[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ServiceStatus

# Enumeration: ServiceStatus

Defined in: src/core/type-definitions/account-definitions.ts:19

Service status enumeration for organizations and projects.

Defines the operational state of a service within the platform.

## Example

```typescript
const orgStatus: ServiceStatus = ServiceStatus.ACTIVE;
```

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="active"></a> `ACTIVE` | `"active"` | Service is operational and available | src/core/type-definitions/account-definitions.ts:21 |
| <a id="inactive"></a> `INACTIVE` | `"inactive"` | Service is not currently in use but can be reactivated | src/core/type-definitions/account-definitions.ts:23 |
| <a id="suspended"></a> `SUSPENDED` | `"suspended"` | Service is temporarily suspended and requires intervention to resume | src/core/type-definitions/account-definitions.ts:25 |
