[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.34**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyCategory

# Type Alias: UpdatePropertyCategory

```ts
type UpdatePropertyCategory = {
  organizationId?: string;
  name?: string;
  description?: string;
  propertyType?:   | RESIDENTIAL
     | COMMERCIAL
     | LAND;
  displayOrder?: number;
  isDefault?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:255](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L255)

Schema for updating an existing property category.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId?` | `string` | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L30) |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L31) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L32) |
| <a id="propertytype"></a> `propertyType?` | \| [`RESIDENTIAL`](../../type-definitions/enumerations/PropertyType.md#residential) \| [`COMMERCIAL`](../../type-definitions/enumerations/PropertyType.md#commercial) \| [`LAND`](../../type-definitions/enumerations/PropertyType.md#land) | [src/core/business-mgt/property-config.schema.ts:33](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L33) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/property-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L34) |
| <a id="isdefault"></a> `isDefault?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L35) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-config.schema.ts:210](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/business-mgt/property-config.schema.ts#L210) |
