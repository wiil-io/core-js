[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / CreateProject

# Type Alias: CreateProject

```ts
type CreateProject = {
  name: string;
  regionId: string;
  description?: string;
  compliance?: string[];
  hasQuota: boolean;
  hasRate: boolean;
  currentSubscriptionId?: string | null;
  isDefault: boolean;
  serviceStatus: ServiceStatus;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/account/project.schema.ts:123](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L123)

Type definition for creating a new project.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/account/project.schema.ts:51](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L51) |
| <a id="regionid"></a> `regionId` | `string` | [src/core/account/project.schema.ts:52](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L52) |
| <a id="description"></a> `description?` | `string` | [src/core/account/project.schema.ts:53](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L53) |
| <a id="compliance"></a> `compliance?` | `string`[] | [src/core/account/project.schema.ts:54](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L54) |
| <a id="hasquota"></a> `hasQuota` | `boolean` | [src/core/account/project.schema.ts:55](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L55) |
| <a id="hasrate"></a> `hasRate` | `boolean` | [src/core/account/project.schema.ts:56](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L56) |
| <a id="currentsubscriptionid"></a> `currentSubscriptionId?` | `string` \| `null` | [src/core/account/project.schema.ts:57](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L57) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/account/project.schema.ts:58](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L58) |
| <a id="servicestatus"></a> `serviceStatus` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | [src/core/account/project.schema.ts:59](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L59) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/project.schema.ts:60](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/account/project.schema.ts#L60) |
