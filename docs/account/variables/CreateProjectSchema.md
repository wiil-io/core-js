[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / CreateProjectSchema

# Variable: CreateProjectSchema

```ts
const CreateProjectSchema: ZodObject<CreateProject>;
```

Defined in: [src/core/account/project.schema.ts:76](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/project.schema.ts#L76)

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
