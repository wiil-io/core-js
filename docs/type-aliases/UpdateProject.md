[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateProject

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
  version?: number;
};
```

Defined in: src/core/account/project.schema.ts:132

Type definition for updating an existing project.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | src/core/account/project.schema.ts:53 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/account/project.schema.ts:54 |
| <a id="regionid"></a> `regionId?` | `string` | src/core/account/project.schema.ts:55 |
| <a id="description"></a> `description?` | `string` | src/core/account/project.schema.ts:56 |
| <a id="compliance"></a> `compliance?` | `string`[] | src/core/account/project.schema.ts:57 |
| <a id="hasquota"></a> `hasQuota?` | `boolean` | src/core/account/project.schema.ts:58 |
| <a id="hasrate"></a> `hasRate?` | `boolean` | src/core/account/project.schema.ts:59 |
| <a id="currentsubscriptionid"></a> `currentSubscriptionId?` | `string` \| `null` | src/core/account/project.schema.ts:60 |
| <a id="isdefault"></a> `isDefault?` | `boolean` | src/core/account/project.schema.ts:61 |
| <a id="servicestatus"></a> `serviceStatus?` | \| [`ACTIVE`](../enumerations/ServiceStatus.md#active) \| [`INACTIVE`](../enumerations/ServiceStatus.md#inactive) \| [`SUSPENDED`](../enumerations/ServiceStatus.md#suspended) | src/core/account/project.schema.ts:62 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/account/project.schema.ts:63 |
| <a id="id"></a> `id` | `string` | src/core/account/project.schema.ts:116 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
