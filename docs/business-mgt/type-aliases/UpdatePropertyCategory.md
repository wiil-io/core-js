[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.44**](../../README.md)

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
  isDefault?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:249](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L249)

Schema for updating an existing property category.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/property-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L29) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L30) |
| <a id="propertytype"></a> `propertyType?` | \| [`RESIDENTIAL`](../../type-definitions/enumerations/PropertyType.md#residential) \| [`COMMERCIAL`](../../type-definitions/enumerations/PropertyType.md#commercial) \| [`LAND`](../../type-definitions/enumerations/PropertyType.md#land) | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L31) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L32) |
| <a id="isdefault"></a> `isDefault?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:33](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L33) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-config.schema.ts:204](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L204) |
