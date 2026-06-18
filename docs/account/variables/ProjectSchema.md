[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / ProjectSchema

# Variable: ProjectSchema

```ts
const ProjectSchema: ZodObject<Project>;
```

Defined in: [src/core/account/project.schema.ts:44](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/project.schema.ts#L44)

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
  metadata: { environment: 'production' },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
