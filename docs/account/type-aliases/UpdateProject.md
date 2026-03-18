[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / UpdateProject

# Type Alias: UpdateProject

```ts
type UpdateProject = {
  name?: string;
  regionId?: string;
  description?: string;
  compliance?: string[];
  serviceStatus?:   | ACTIVE
     | INACTIVE
     | SUSPENDED;
  metadata?: Record<string, any>;
  id: string;
};
```

Defined in: [src/core/account/project.schema.ts:118](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L118)

Type definition for updating an existing project.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/account/project.schema.ts:45](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L45) |
| <a id="regionid"></a> `regionId?` | `string` | [src/core/account/project.schema.ts:46](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L46) |
| <a id="description"></a> `description?` | `string` | [src/core/account/project.schema.ts:47](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L47) |
| <a id="compliance"></a> `compliance?` | `string`[] | [src/core/account/project.schema.ts:48](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L48) |
| <a id="servicestatus"></a> `serviceStatus?` | \| [`ACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#active) \| [`INACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#inactive) \| [`SUSPENDED`](../../type-definitions/enumerations/ServiceStatus.md#suspended) | [src/core/account/project.schema.ts:50](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L50) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/project.schema.ts:51](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L51) |
| <a id="id"></a> `id` | `string` | [src/core/account/project.schema.ts:102](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/account/project.schema.ts#L102) |
