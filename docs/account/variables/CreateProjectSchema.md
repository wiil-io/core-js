[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / CreateProjectSchema

# Variable: CreateProjectSchema

```ts
const CreateProjectSchema: ZodObject<CreateProject>;
```

Defined in: [src/core/account/project.schema.ts:91](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/account/project.schema.ts#L91)

Zod schema for creating a new project.

Omits auto-generated fields (id, timestamps) that are populated by the system.

## Remarks

Use this schema when creating new projects within an organization.
All required fields must be provided.

## Example

```typescript
const newProject: CreateProject = {
  name: 'Development Environment',
  organizationId: '456*',
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
