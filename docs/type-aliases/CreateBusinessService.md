[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateBusinessService

# Type Alias: CreateBusinessService

```ts
type CreateBusinessService = {
  version?: number;
  organizationId: string;
  name: string;
  description?: string;
  duration: number;
  bufferTime: number;
  isBookable: boolean;
  price?: number;
  isActive: boolean;
  displayOrder?: number;
};
```

Defined in: src/core/business-mgt/service-config.schema.ts:81

Schema for creating a new business service.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/service-config.schema.ts:26 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/service-config.schema.ts:27 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/service-config.schema.ts:28 |
| <a id="duration"></a> `duration` | `number` | src/core/business-mgt/service-config.schema.ts:31 |
| <a id="buffertime"></a> `bufferTime` | `number` | src/core/business-mgt/service-config.schema.ts:32 |
| <a id="isbookable"></a> `isBookable` | `boolean` | src/core/business-mgt/service-config.schema.ts:33 |
| <a id="price"></a> `price?` | `number` | src/core/business-mgt/service-config.schema.ts:36 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/service-config.schema.ts:39 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/service-config.schema.ts:40 |
