[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.15**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessService

# Type Alias: CreateBusinessService

```ts
type CreateBusinessService = {
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

Defined in: [src/core/business-mgt/service-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L77)

Schema for creating a new business service.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/service-config.schema.ts:25](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L25) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/service-config.schema.ts:26](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L26) |
| <a id="duration"></a> `duration` | `number` | [src/core/business-mgt/service-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L29) |
| <a id="buffertime"></a> `bufferTime` | `number` | [src/core/business-mgt/service-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L30) |
| <a id="isbookable"></a> `isBookable` | `boolean` | [src/core/business-mgt/service-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L31) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/service-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L34) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L37) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/service-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/service-config.schema.ts#L38) |
