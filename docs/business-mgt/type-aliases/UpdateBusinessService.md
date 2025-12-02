[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessService

# Type Alias: UpdateBusinessService

```ts
type UpdateBusinessService = {
  name?: string;
  description?: string;
  duration?: number;
  bufferTime?: number;
  isBookable?: boolean;
  price?: number;
  isActive?: boolean;
  displayOrder?: number;
  id: string;
};
```

Defined in: [src/core/business-mgt/service-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L78)

Schema for updating an existing business service.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/service-config.schema.ts:25](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L25) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/service-config.schema.ts:26](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L26) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/service-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L29) |
| <a id="buffertime"></a> `bufferTime?` | `number` | [src/core/business-mgt/service-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L30) |
| <a id="isbookable"></a> `isBookable?` | `boolean` | [src/core/business-mgt/service-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L31) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/service-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L34) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/service-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L37) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/service-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L38) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/service-config.schema.ts:72](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/service-config.schema.ts#L72) |
