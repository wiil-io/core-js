[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessLocationSchema

# Variable: UpdateBusinessLocationSchema

```ts
const UpdateBusinessLocationSchema: ZodObject<UpdateBusinessLocation>;
```

Defined in: [src/core/business-mgt/business-location.schema.ts:179](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/business-location.schema.ts#L179)

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
