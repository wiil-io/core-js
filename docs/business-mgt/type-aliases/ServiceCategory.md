[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceCategory

# Type Alias: ServiceCategory

```ts
type ServiceCategory = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  serviceRevisionId?: string | null;
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

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:222](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L222)

Service Category schema.
Groups related services for organization and display.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/base.schema.ts#L10) |
| <a id="servicerevisionid"></a> `serviceRevisionId?` | `string` \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:191](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L191) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/service-management/business-service-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L192) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:193](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L193) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:194](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L194) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L195) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/service-management/business-service-config.schema.ts:196](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L196) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-management/business-service-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/business-service-config.schema.ts#L197) |
