[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessLocationSchema

# Variable: UpdateBusinessLocationSchema

```ts
const UpdateBusinessLocationSchema: ZodObject<UpdateBusinessLocation>;
```

Defined in: [src/core/business-mgt/business-location.schema.ts:179](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L179)

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
