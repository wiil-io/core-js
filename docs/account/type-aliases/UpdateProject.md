[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / UpdateProject

# Type Alias: UpdateProject

```ts
type UpdateProject = {
  name?: string;
  organizationId?: string;
  regionId?: string;
  description?: string;
  compliance?: string[];
  hasQuota?: boolean;
  hasRate?: boolean;
  currentSubscriptionId?: string | null;
  isDefault?: boolean;
  serviceStatus?:   | ACTIVE
     | INACTIVE
     | SUSPENDED;
  metadata?: Record<string, any>;
  id: string;
};
```

Defined in: [src/core/account/project.schema.ts:132](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L132)

Type definition for updating an existing project.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/account/project.schema.ts:53](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L53) |
| <a id="organizationid"></a> `organizationId?` | `string` | [src/core/account/project.schema.ts:54](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L54) |
| <a id="regionid"></a> `regionId?` | `string` | [src/core/account/project.schema.ts:55](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L55) |
| <a id="description"></a> `description?` | `string` | [src/core/account/project.schema.ts:56](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L56) |
| <a id="compliance"></a> `compliance?` | `string`[] | [src/core/account/project.schema.ts:57](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L57) |
| <a id="hasquota"></a> `hasQuota?` | `boolean` | [src/core/account/project.schema.ts:58](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L58) |
| <a id="hasrate"></a> `hasRate?` | `boolean` | [src/core/account/project.schema.ts:59](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L59) |
| <a id="currentsubscriptionid"></a> `currentSubscriptionId?` | `string` \| `null` | [src/core/account/project.schema.ts:60](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L60) |
| <a id="isdefault"></a> `isDefault?` | `boolean` | [src/core/account/project.schema.ts:61](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L61) |
| <a id="servicestatus"></a> `serviceStatus?` | \| [`ACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#active) \| [`INACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#inactive) \| [`SUSPENDED`](../../type-definitions/enumerations/ServiceStatus.md#suspended) | [src/core/account/project.schema.ts:62](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L62) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/project.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L63) |
| <a id="id"></a> `id` | `string` | [src/core/account/project.schema.ts:116](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/account/project.schema.ts#L116) |
