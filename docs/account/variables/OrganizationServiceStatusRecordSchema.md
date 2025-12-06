[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / OrganizationServiceStatusRecordSchema

# Variable: OrganizationServiceStatusRecordSchema

```ts
const OrganizationServiceStatusRecordSchema: ZodObject<OrganizationServiceStatusRecord>;
```

Defined in: [src/core/account/organization.schema.ts:45](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/account/organization.schema.ts#L45)

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
