[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / ProjectSchema

# Variable: ProjectSchema

```ts
const ProjectSchema: ZodObject<Project>;
```

Defined in: [src/core/account/project.schema.ts:52](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L52)

Zod schema for project entity.

Represents a project within an organization. Projects are used to organize
resources, deployments, and configurations within an organizational context.

## Example

```typescript
const project: Project = {
  id: '123*',
  name: 'Production Environment',
  organizationId: '456*',
  regionId: 'us-west-2',
  description: 'Main production deployment project',
  compliance: ['SOC2', 'HIPAA'],
  hasQuota: true,
  hasRate: true,
  isDefault: true,
  serviceStatus: ServiceStatus.ACTIVE,
  currentSubscriptionId: '789*',
  metadata: { environment: 'production' },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
