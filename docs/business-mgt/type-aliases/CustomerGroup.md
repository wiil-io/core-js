[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CustomerGroup

# Type Alias: CustomerGroup

```ts
type CustomerGroup = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  description?: string | null;
  code?: string | null;
  isDefault: boolean;
};
```

Defined in: src/core/business-mgt/customer-management/customer-group.schema.ts:59

Customer Group schema.
Groups customers for pricing tiers and special terms.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/customer-management/customer-group.schema.ts:27 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/customer-management/customer-group.schema.ts:28 |
| <a id="code"></a> `code?` | `string` \| `null` | src/core/business-mgt/customer-management/customer-group.schema.ts:29 |
| <a id="isdefault"></a> `isDefault` | `boolean` | src/core/business-mgt/customer-management/customer-group.schema.ts:30 |
