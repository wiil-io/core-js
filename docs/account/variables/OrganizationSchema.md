[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.37**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / OrganizationSchema

# Variable: OrganizationSchema

```ts
const OrganizationSchema: ZodObject<Organization>;
```

Defined in: [src/core/account/organization.schema.ts:91](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/account/organization.schema.ts#L91)

Zod schema for organization entity.

Represents a complete organization (company/business account) within the platform,
including service status tracking and configuration.

## Example

```typescript
const organization: Organization = {
  id: '123*',
  companyName: 'Acme Corporation',
  primaryRegionId: 'us-west',
  businessVerticalId: 'technology',
  serviceStatus: ServiceStatus.ACTIVE,
  platformEmail: 'admin@acme.com',
  metadata: { industry: 'technology' },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
