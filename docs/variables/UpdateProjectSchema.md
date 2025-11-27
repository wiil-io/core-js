[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateProjectSchema

# Variable: UpdateProjectSchema

```ts
const UpdateProjectSchema: ZodObject<UpdateProject>;
```

Defined in: src/core/account/project.schema.ts:115

Zod schema for updating an existing project.

All fields are optional (partial) except id, which is required to identify the project.

## Remarks

Supports partial updates - only include the fields you want to modify.

## Example

```typescript
const updateProject: UpdateProject = {
  id: 'proj-123',
  name: 'Production Environment v2',
  description: 'Updated production deployment',
  hasRate: true
};
```
