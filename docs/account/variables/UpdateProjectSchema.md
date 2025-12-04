[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / UpdateProjectSchema

# Variable: UpdateProjectSchema

```ts
const UpdateProjectSchema: ZodObject<UpdateProject>;
```

Defined in: [src/core/account/project.schema.ts:104](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/account/project.schema.ts#L104)

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
