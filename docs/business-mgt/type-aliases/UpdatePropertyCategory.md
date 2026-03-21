[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyCategory

# Type Alias: UpdatePropertyCategory

```ts
type UpdatePropertyCategory = {
  name?: string;
  description?: string;
  propertyType?:   | RESIDENTIAL
     | COMMERCIAL
     | LAND;
  displayOrder?: number;
  id: string;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:248](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L248)

Schema for updating an existing property category.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/property-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L29) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L30) |
| <a id="propertytype"></a> `propertyType?` | \| [`RESIDENTIAL`](../../type-definitions/enumerations/PropertyType.md#residential) \| [`COMMERCIAL`](../../type-definitions/enumerations/PropertyType.md#commercial) \| [`LAND`](../../type-definitions/enumerations/PropertyType.md#land) | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L31) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L32) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-config.schema.ts:203](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L203) |
