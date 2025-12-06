[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.24**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessService

# Type Alias: CreateBusinessService

```ts
type CreateBusinessService = {
  name: string;
  description: string;
  duration: number;
  bufferTime: number;
  isBookable: boolean;
  price?: number;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/service-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L76)

Schema for creating a new business service.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/service-config.schema.ts:25](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L25) |
| <a id="description"></a> `description` | `string` | [src/core/business-mgt/service-config.schema.ts:26](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L26) |
| <a id="duration"></a> `duration` | `number` | [src/core/business-mgt/service-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L29) |
| <a id="buffertime"></a> `bufferTime` | `number` | [src/core/business-mgt/service-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L30) |
| <a id="isbookable"></a> `isBookable` | `boolean` | [src/core/business-mgt/service-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L31) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/service-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L34) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/service-config.schema.ts#L36) |
