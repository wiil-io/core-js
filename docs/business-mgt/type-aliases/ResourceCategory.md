[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceCategory

# Type Alias: ResourceCategory

```ts
type ResourceCategory = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  resourceRevisionId?: string | null;
  locationId?: string | null;
  name: string;
  description?: string | null;
  channelMappings?:   | {
     channelId: string;
     externalCategoryId: string;
   }[]
     | null;
  resourceType?:   | TABLE
     | ROOM
     | RENTAL
     | RENTALS
     | RESOURCE
     | null;
  displayOrder?: number | null;
  isActive: boolean;
  metadata?: Record<string, any> | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:88](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L88)

Resource category schema.
Groups reservation resources by type, location, channel mapping, and display order.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/base.schema.ts#L10) |
| <a id="resourcerevisionid"></a> `resourceRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:48](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L48) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:49](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L49) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:50](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L50) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:51](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L51) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:52](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L52) |
| <a id="resourcetype"></a> `resourceType?` | \| [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) \| [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) \| [`RENTAL`](../../type-definitions/enumerations/ResourceType.md#rental) \| [`RENTALS`](../../type-definitions/enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../../type-definitions/enumerations/ResourceType.md#resource) \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:53](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L53) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:54](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L54) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:55](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L55) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:56](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts#L56) |
