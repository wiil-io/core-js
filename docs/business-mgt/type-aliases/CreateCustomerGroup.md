[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

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

Defined in: [src/core/business-mgt/customer-management/customer-group.schema.ts:60](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/customer-management/customer-group.schema.ts#L60)

Schema for creating a new customer group.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/customer-management/customer-group.schema.ts:27](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/customer-management/customer-group.schema.ts#L27) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer-group.schema.ts:28](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/customer-management/customer-group.schema.ts#L28) |
| <a id="code"></a> `code?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer-group.schema.ts:29](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/customer-management/customer-group.schema.ts#L29) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/customer-management/customer-group.schema.ts:30](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/customer-management/customer-group.schema.ts#L30) |
