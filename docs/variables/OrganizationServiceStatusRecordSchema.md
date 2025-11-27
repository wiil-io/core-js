[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / OrganizationServiceStatusRecordSchema

# Variable: OrganizationServiceStatusRecordSchema

```ts
const OrganizationServiceStatusRecordSchema: ZodObject<{
  organizationId: ZodString;
  status: ZodEnum<typeof ServiceStatus>;
  previousStatus: ZodNullable<ZodEnum<typeof ServiceStatus>>;
  suspensionType: ZodNullable<ZodEnum<typeof ServiceSuspensionType>>;
  timestamp: ZodNumber;
  reason: ZodString;
  changedBy: ZodString;
  isCurrent: ZodDefault<ZodBoolean>;
  id: ZodString;
  createdAt: ZodOptional<ZodNumber>;
  updatedAt: ZodOptional<ZodNumber>;
  version: ZodOptional<ZodNumber>;
}, $strip>;
```

Defined in: src/core/account/organization.schema.ts:46

Zod schema for organization service status history records.

Tracks all status changes for an organization over time, providing
an audit trail of service state transitions.

## Example

```typescript
const statusRecord: OrganizationServiceStatusRecord = {
  id: 'status-123',
  organizationId: 'org-456',
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
