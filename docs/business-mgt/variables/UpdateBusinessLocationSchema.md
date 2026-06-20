[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessLocationSchema

# Variable: UpdateBusinessLocationSchema

```ts
const UpdateBusinessLocationSchema: ZodObject<UpdateBusinessLocation>;
```

Defined in: [src/core/business-mgt/business-location.schema.ts:179](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/business-location.schema.ts#L179)

Zod schema for updating an existing business location.

All fields from [CreateBusinessLocationSchema](CreateBusinessLocationSchema.md) are made optional (partial),
with `id` required to identify the record to update. Only the provided fields
are modified.

## Example

```typescript
const updatePayload: UpdateBusinessLocation = {
  id: 'loc_downtown',
  status: BusinessLocationStatus.INACTIVE,
};
```
