[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.4**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / UpdateProjectSchema

# Variable: UpdateProjectSchema

```ts
const UpdateProjectSchema: ZodObject<UpdateProject>;
```

Defined in: [src/core/account/project.schema.ts:111](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/account/project.schema.ts#L111)

Zod schema for updating an existing project.

All fields are optional (partial) except id, which is required to identify the project.

## Remarks

Supports partial updates - only include the fields you want to modify.

## Example

```typescript
const updateProject: UpdateProject = {
  id: '123*',
  name: 'Production Environment v2',
  description: 'Updated production deployment',
  hasRate: true
};
```
