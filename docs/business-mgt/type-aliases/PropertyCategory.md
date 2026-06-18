[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyCategory

# Type Alias: PropertyCategory

```ts
type PropertyCategory = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  description?: string;
  propertyType: PropertyType;
  displayOrder?: number;
  isDefault: boolean;
};
```

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:390](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L390)

Property category schema.
Organizes properties into logical groups (e.g., Luxury Homes, Commercial Offices).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L37) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L38) |
| <a id="propertytype"></a> `propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-management/property-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L39) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/property-management/property-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L40) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L41) |
