[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / CreateProject

# Type Alias: CreateProject

```ts
type CreateProject = {
  name: string;
  regionId?: string;
  description?: string;
  compliance?: string[];
  serviceStatus: ServiceStatus;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/account/project.schema.ts:113](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/account/project.schema.ts#L113)

Type definition for creating a new project.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/account/project.schema.ts:45](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/account/project.schema.ts#L45) |
| <a id="regionid"></a> `regionId?` | `string` | [src/core/account/project.schema.ts:46](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/account/project.schema.ts#L46) |
| <a id="description"></a> `description?` | `string` | [src/core/account/project.schema.ts:47](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/account/project.schema.ts#L47) |
| <a id="compliance"></a> `compliance?` | `string`[] | [src/core/account/project.schema.ts:48](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/account/project.schema.ts#L48) |
| <a id="servicestatus"></a> `serviceStatus` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | [src/core/account/project.schema.ts:50](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/account/project.schema.ts#L50) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/project.schema.ts:51](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/account/project.schema.ts#L51) |
