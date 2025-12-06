[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / CreateProjectSchema

# Variable: CreateProjectSchema

```ts
const CreateProjectSchema: ZodObject<CreateProject>;
```

Defined in: [src/core/account/project.schema.ts:79](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/account/project.schema.ts#L79)

Zod schema for creating a new project.

Omits auto-generated fields (id, timestamps) and system-managed fields (isDefault)
that are populated by the system.

## Remarks

Use this schema when creating new projects within an organization.
All required fields must be provided.

## Example

```typescript
const newProject: CreateProject = {
  name: 'Development Environment',
  regionId: 'us-east-1',
  description: 'Development and testing project',
  compliance: ['SOC2'],
  serviceStatus: ServiceStatus.ACTIVE,
  metadata: { environment: 'development' }
};
```
