[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateCustomerGroup

# Type Alias: UpdateCustomerGroup

```ts
type UpdateCustomerGroup = {
  name?: string;
  description?: string | null;
  code?: string | null;
  isDefault?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/customer-management/customer-group.schema.ts:61](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/customer-management/customer-group.schema.ts#L61)

Schema for updating an existing customer group.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/customer-management/customer-group.schema.ts:27](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/customer-management/customer-group.schema.ts#L27) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer-group.schema.ts:28](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/customer-management/customer-group.schema.ts#L28) |
| <a id="code"></a> `code?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer-group.schema.ts:29](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/customer-management/customer-group.schema.ts#L29) |
| <a id="isdefault"></a> `isDefault?` | `boolean` | [src/core/business-mgt/customer-management/customer-group.schema.ts:30](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/customer-management/customer-group.schema.ts#L30) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/customer-management/customer-group.schema.ts:52](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/customer-management/customer-group.schema.ts#L52) |
