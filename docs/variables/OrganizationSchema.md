[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / OrganizationSchema

# Variable: OrganizationSchema

```ts
const OrganizationSchema: ZodObject<{
  companyName: ZodString;
  primaryRegionId: ZodString;
  businessVerticalId: ZodOptional<ZodNullable<ZodString>>;
  metadata: ZodOptional<ZodRecord<ZodString, ZodAny>>;
  serviceStatus: ZodDefault<ZodEnum<typeof ServiceStatus>>;
  lastServiceStatusChanged: ZodOptional<ZodNullable<ZodNumber>>;
  serviceStatusHistory: ZodOptional<ZodNullable<ZodArray<ZodObject<{
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
  }, $strip>>>>;
  platformEmail: ZodOptional<ZodNullable<ZodString>>;
  id: ZodString;
  createdAt: ZodOptional<ZodNumber>;
  updatedAt: ZodOptional<ZodNumber>;
  version: ZodOptional<ZodNumber>;
}, $strip>;
```

Defined in: src/core/account/organization.schema.ts:91

Zod schema for organization entity.

Represents a complete organization (company/business account) within the platform,
including service status tracking and configuration.

## Example

```typescript
const organization: Organization = {
  id: 'org-123',
  companyName: 'Acme Corporation',
  primaryRegionId: 'us-west',
  businessVerticalId: 'tech-saas',
  serviceStatus: ServiceStatus.ACTIVE,
  platformEmail: 'admin@acme.com',
  metadata: { industry: 'technology' },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
