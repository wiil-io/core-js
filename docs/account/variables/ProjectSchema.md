[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / ProjectSchema

# Variable: ProjectSchema

```ts
const ProjectSchema: ZodObject<Project>;
```

Defined in: [src/core/account/project.schema.ts:46](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/project.schema.ts#L46)

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
