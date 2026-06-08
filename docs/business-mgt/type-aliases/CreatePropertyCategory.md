[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreatePropertyCategory

# Type Alias: CreatePropertyCategory

```ts
type CreatePropertyCategory = {
  name: string;
  description?: string;
  propertyType: PropertyType;
  displayOrder?: number;
  isDefault: boolean;
  placement?: {
     placementIntent: {
        mode:   | "BEGINNING"
           | "END"
           | "KEEP_CURRENT"
           | "BEFORE_ITEM"
           | "AFTER_ITEM"
           | "ABSOLUTE_INDEX";
     };
     anchorItemId?: string | null;
     absoluteIndex?: number | null;
  };
};
```

Defined in: src/core/business-mgt/property-management/property-config.schema.ts:391

Schema for creating a new property category.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | - | src/core/business-mgt/property-management/property-config.schema.ts:37 |
| <a id="description"></a> `description?` | `string` | - | src/core/business-mgt/property-management/property-config.schema.ts:38 |
| <a id="propertytype"></a> `propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | - | src/core/business-mgt/property-management/property-config.schema.ts:39 |
| <a id="displayorder"></a> `displayOrder?` | `number` | - | src/core/business-mgt/property-management/property-config.schema.ts:40 |
| <a id="isdefault"></a> `isDefault` | `boolean` | - | src/core/business-mgt/property-management/property-config.schema.ts:41 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/property-management/property-config.schema.ts:341 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
