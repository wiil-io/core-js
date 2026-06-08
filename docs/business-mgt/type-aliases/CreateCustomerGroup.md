[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateCustomerGroup

# Type Alias: CreateCustomerGroup

```ts
type CreateCustomerGroup = {
  name: string;
  description?: string | null;
  code?: string | null;
  isDefault: boolean;
};
```

Defined in: src/core/business-mgt/customer-management/customer-group.schema.ts:60

Schema for creating a new customer group.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/customer-management/customer-group.schema.ts:27 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/customer-management/customer-group.schema.ts:28 |
| <a id="code"></a> `code?` | `string` \| `null` | src/core/business-mgt/customer-management/customer-group.schema.ts:29 |
| <a id="isdefault"></a> `isDefault` | `boolean` | src/core/business-mgt/customer-management/customer-group.schema.ts:30 |
