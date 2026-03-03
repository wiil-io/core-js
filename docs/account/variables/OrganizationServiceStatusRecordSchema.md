[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.35**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / OrganizationServiceStatusRecordSchema

# Variable: OrganizationServiceStatusRecordSchema

```ts
const OrganizationServiceStatusRecordSchema: ZodObject<OrganizationServiceStatusRecord>;
```

Defined in: [src/core/account/organization.schema.ts:45](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/account/organization.schema.ts#L45)

Zod schema for organization service status history records.

Tracks all status changes for an organization over time, providing
an audit trail of service state transitions.

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
