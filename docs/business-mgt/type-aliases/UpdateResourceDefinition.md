[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateResourceDefinition

# Type Alias: UpdateResourceDefinition

```ts
type UpdateResourceDefinition = {
  name?: string;
  description?: string | null;
  isActive?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:164](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L164)

Schema for updating an existing resource definition.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:48](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L48) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:49](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L49) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:50](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L50) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:91](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L91) |
