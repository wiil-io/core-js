[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.6**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / CreateProjectSchema

# Variable: CreateProjectSchema

```ts
const CreateProjectSchema: ZodObject<CreateProject>;
```

Defined in: [src/core/account/project.schema.ts:89](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/account/project.schema.ts#L89)

Zod schema for creating a new project.

Omits auto-generated fields (id, timestamps) that are populated by the system.
The isDefault field is included and can be set during creation for system operations.

## Remarks

Use this schema when creating new projects within an organization.
The isDefault flag should typically be set by system operations to designate
the default project for an organization.

## Example

```typescript
const newProject: CreateProject = {
  name: 'Development Environment',
  regionId: 'us-east-1',
  description: 'Development and testing project',
  compliance: ['SOC2'],
  hasQuota: true,
  hasRate: false,
  isDefault: false,
  serviceStatus: ServiceStatus.ACTIVE,
  metadata: { environment: 'development' }
};
```
