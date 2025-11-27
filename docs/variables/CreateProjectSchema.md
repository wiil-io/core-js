[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateProjectSchema

# Variable: CreateProjectSchema

```ts
const CreateProjectSchema: ZodObject<CreateProject>;
```

Defined in: src/core/account/project.schema.ts:91

Zod schema for creating a new project.

Omits auto-generated fields (id, timestamps) that are populated by the system.

## Remarks

Use this schema when creating new projects within an organization.
All required fields must be provided.

## Example

```typescript
const newProject: CreateProject = {
  name: 'Development Environment',
  organizationId: 'org-456',
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
