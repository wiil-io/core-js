[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.35**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreatePropertyCategory

# Type Alias: CreatePropertyCategory

```ts
type CreatePropertyCategory = {
  organizationId: string;
  name: string;
  description?: string;
  propertyType: PropertyType;
  displayOrder?: number;
  isDefault: boolean;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:254](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/property-config.schema.ts#L254)

Schema for creating a new property category.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId` | `string` | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/property-config.schema.ts#L30) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/property-config.schema.ts#L31) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/property-config.schema.ts#L32) |
| <a id="propertytype"></a> `propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-config.schema.ts:33](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/property-config.schema.ts#L33) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/property-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/property-config.schema.ts#L34) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/property-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/business-mgt/property-config.schema.ts#L35) |
