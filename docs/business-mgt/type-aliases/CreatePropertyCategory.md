[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreatePropertyCategory

# Type Alias: CreatePropertyCategory

```ts
type CreatePropertyCategory = {
  name: string;
  description?: string;
  propertyType: PropertyType;
  displayOrder?: number;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:247](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-config.schema.ts#L247)

Schema for creating a new property category.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/property-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-config.schema.ts#L29) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-config.schema.ts#L30) |
| <a id="propertytype"></a> `propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-config.schema.ts#L31) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-config.schema.ts#L32) |
