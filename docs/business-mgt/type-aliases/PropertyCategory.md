[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.40**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyCategory

# Type Alias: PropertyCategory

```ts
type PropertyCategory = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  organizationId: string;
  name: string;
  description?: string;
  propertyType: PropertyType;
  displayOrder?: number;
  isDefault: boolean;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:253](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/property-config.schema.ts#L253)

Property category schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/base.schema.ts#L10) |
| <a id="organizationid"></a> `organizationId` | `string` | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/property-config.schema.ts#L30) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/property-config.schema.ts#L31) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/property-config.schema.ts#L32) |
| <a id="propertytype"></a> `propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-config.schema.ts:33](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/property-config.schema.ts#L33) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/property-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/property-config.schema.ts#L34) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/property-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/property-config.schema.ts#L35) |
