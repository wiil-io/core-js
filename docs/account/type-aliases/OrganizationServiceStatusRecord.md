[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / OrganizationServiceStatusRecord

# Type Alias: OrganizationServiceStatusRecord

```ts
type OrganizationServiceStatusRecord = {
  status: ServiceStatus;
  previousStatus:   | ACTIVE
     | INACTIVE
     | SUSPENDED
     | null;
  suspensionType:   | MANUAL
     | AUTOMATIC
     | SUBSCRIPTION_QUOTA_EXCEEDED
     | QUOTA_EXCEEDED
     | PAYMENT_FAILED
     | null;
  timestamp: number;
  reason: string;
  changedBy: string;
  isCurrent: boolean;
  id: string;
  createdAt?: number;
  updatedAt?: number;
};
```

Defined in: [src/core/account/organization.schema.ts:56](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L56)

Zod schema for organization service status history records.

Tracks all status changes for an organization over time, providing
an audit trail of service state transitions.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | [src/core/account/organization.schema.ts:46](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L46) |
| <a id="previousstatus"></a> `previousStatus` | \| [`ACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#active) \| [`INACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#inactive) \| [`SUSPENDED`](../../type-definitions/enumerations/ServiceStatus.md#suspended) \| `null` | [src/core/account/organization.schema.ts:47](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L47) |
| <a id="suspensiontype"></a> `suspensionType` | \| [`MANUAL`](../../type-definitions/enumerations/ServiceSuspensionType.md#manual) \| [`AUTOMATIC`](../../type-definitions/enumerations/ServiceSuspensionType.md#automatic) \| [`SUBSCRIPTION_QUOTA_EXCEEDED`](../../type-definitions/enumerations/ServiceSuspensionType.md#subscription_quota_exceeded) \| [`QUOTA_EXCEEDED`](../../type-definitions/enumerations/ServiceSuspensionType.md#quota_exceeded) \| [`PAYMENT_FAILED`](../../type-definitions/enumerations/ServiceSuspensionType.md#payment_failed) \| `null` | [src/core/account/organization.schema.ts:48](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L48) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/account/organization.schema.ts:49](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L49) |
| <a id="reason"></a> `reason` | `string` | [src/core/account/organization.schema.ts:50](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L50) |
| <a id="changedby"></a> `changedBy` | `string` | [src/core/account/organization.schema.ts:51](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L51) |
| <a id="iscurrent"></a> `isCurrent` | `boolean` | [src/core/account/organization.schema.ts:52](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/organization.schema.ts#L52) |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L10) |

## Example

```typescript
const statusRecord: OrganizationServiceStatusRecord = {
  id: '123*',
  status: ServiceStatus.SUSPENDED,
  previousStatus: ServiceStatus.ACTIVE,
  suspensionType: ServiceSuspensionType.QUOTA_EXCEEDED,
  timestamp: Date.now(),
  reason: 'Monthly usage quota exceeded',
  changedBy: 'system',
  isCurrent: true,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
