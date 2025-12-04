[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / Project

# Type Alias: Project

```ts
type Project = {
  name: string;
  regionId?: string;
  description?: string;
  compliance?: string[];
  currentSubscriptionId?: string | null;
  isDefault: boolean;
  serviceStatus: ServiceStatus;
  metadata?: Record<string, any>;
  id: string;
  createdAt?: number;
  updatedAt?: number;
};
```

Defined in: [src/core/account/project.schema.ts:111](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L111)

Type definition for a complete project entity.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/account/project.schema.ts:47](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L47) |
| <a id="regionid"></a> `regionId?` | `string` | [src/core/account/project.schema.ts:48](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L48) |
| <a id="description"></a> `description?` | `string` | [src/core/account/project.schema.ts:49](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L49) |
| <a id="compliance"></a> `compliance?` | `string`[] | [src/core/account/project.schema.ts:50](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L50) |
| <a id="currentsubscriptionid"></a> `currentSubscriptionId?` | `string` \| `null` | [src/core/account/project.schema.ts:51](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L51) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/account/project.schema.ts:52](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L52) |
| <a id="servicestatus"></a> `serviceStatus` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | [src/core/account/project.schema.ts:53](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L53) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/project.schema.ts:54](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/account/project.schema.ts#L54) |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/base.schema.ts#L10) |
