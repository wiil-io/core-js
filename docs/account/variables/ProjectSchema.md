[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.39**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / ProjectSchema

# Variable: ProjectSchema

```ts
const ProjectSchema: ZodObject<Project>;
```

Defined in: [src/core/account/project.schema.ts:46](https://github.com/wiil-io/core-js/blob/26d2b631ba1acb31c0e66c5e63fa8ed5c49cb11b/src/core/account/project.schema.ts#L46)

Zod schema for project entity.

Represents a project within an organization. Projects are used to organize
resources, deployments, and configurations within an organizational context.

## Example

```typescript
const project: Project = {
  id: '123*',
  name: 'Production Environment',
  regionId: 'us-west-2',
  description: 'Main production deployment project',
  compliance: ['SOC2', 'HIPAA'],
  isDefault: true,
  serviceStatus: ServiceStatus.ACTIVE,
  currentSubscriptionId: '789*',
  metadata: { environment: 'production' },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
