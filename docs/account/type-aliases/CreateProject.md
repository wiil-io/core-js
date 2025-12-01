[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / CreateProject

# Type Alias: CreateProject

```ts
type CreateProject = {
  name: string;
  regionId?: string;
  description?: string;
  compliance?: string[];
  currentSubscriptionId?: string | null;
  serviceStatus: ServiceStatus;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/account/project.schema.ts:116](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L116)

Type definition for creating a new project.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/account/project.schema.ts:47](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L47) |
| <a id="regionid"></a> `regionId?` | `string` | [src/core/account/project.schema.ts:48](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L48) |
| <a id="description"></a> `description?` | `string` | [src/core/account/project.schema.ts:49](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L49) |
| <a id="compliance"></a> `compliance?` | `string`[] | [src/core/account/project.schema.ts:50](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L50) |
| <a id="currentsubscriptionid"></a> `currentSubscriptionId?` | `string` \| `null` | [src/core/account/project.schema.ts:51](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L51) |
| <a id="servicestatus"></a> `serviceStatus` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | [src/core/account/project.schema.ts:53](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L53) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/project.schema.ts:54](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/account/project.schema.ts#L54) |
