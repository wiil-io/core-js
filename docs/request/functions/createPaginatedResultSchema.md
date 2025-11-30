[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / createPaginatedResultSchema

# Function: createPaginatedResultSchema()

```ts
function createPaginatedResultSchema<T>(dataSchema): ZodObject<{
  data: ZodArray<T>;
  meta: ZodObject<{
     page: ZodNumber;
     pageSize: ZodNumber;
     totalCount: ZodNumber;
     totalPages: ZodNumber;
     hasNextPage: ZodBoolean;
     hasPreviousPage: ZodBoolean;
  }, $strip>;
}, $strip>;
```

Defined in: [src/request/models/paginated-result.schema.ts:35](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/request/models/paginated-result.schema.ts#L35)

Generic function to create a paginated result schema.
Use this with any data schema to create typed paginated responses.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `dataSchema` | `T` |

## Returns

`ZodObject`\<\{
  `data`: `ZodArray`\<`T`\>;
  `meta`: `ZodObject`\<\{
     `page`: `ZodNumber`;
     `pageSize`: `ZodNumber`;
     `totalCount`: `ZodNumber`;
     `totalPages`: `ZodNumber`;
     `hasNextPage`: `ZodBoolean`;
     `hasPreviousPage`: `ZodBoolean`;
  \}, `$strip`\>;
\}, `$strip`\>

## Example

```ts
const PaginatedCustomers = createPaginatedResultSchema(CustomerSchema);
```
