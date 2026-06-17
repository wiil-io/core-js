[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.56**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceCategory

# Type Alias: ServiceCategory

```ts
type ServiceCategory = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  organizationId: string;
  serviceRevisionId?: string;
  name: string;
  description?: string | null;
  imageUrl?: string | null;
  channelMappings?:   | {
     channelId: string;
     externalCategoryId: string;
   }[]
     | null;
  displayOrder?: number | null;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:224](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L224)

Service Category schema.
Groups related services for organization and display.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/base.schema.ts#L10) |
| <a id="organizationid"></a> `organizationId` | `string` | [src/core/business-mgt/service-management/business-service-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L192) |
| <a id="servicerevisionid"></a> `serviceRevisionId?` | `string` | [src/core/business-mgt/service-management/business-service-config.schema.ts:193](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L193) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/service-management/business-service-config.schema.ts:194](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L194) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L195) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:196](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L196) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L197) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:198](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L198) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-management/business-service-config.schema.ts:199](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L199) |
