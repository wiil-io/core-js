[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceDefinition

# Type Alias: ResourceDefinition

```ts
type ResourceDefinition = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  description?: string | null;
  isActive: boolean;
};
```

Defined in: src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:161

Resource definition schema.
Represents the stable identity for a versioned reservation resource catalog.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:48 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:49 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:50 |
