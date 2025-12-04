[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.20**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / UpdateProjectSchema

# Variable: UpdateProjectSchema

```ts
const UpdateProjectSchema: ZodObject<UpdateProject>;
```

Defined in: [src/core/account/project.schema.ts:104](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/account/project.schema.ts#L104)

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
