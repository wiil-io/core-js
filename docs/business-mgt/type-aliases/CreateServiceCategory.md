[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateServiceCategory

# Type Alias: CreateServiceCategory

```ts
type CreateServiceCategory = {
  organizationId: string;
  serviceRevisionId?: string;
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

Defined in: src/core/business-mgt/service-management/business-service-config.schema.ts:225

Schema for creating a new service category.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:192 |
| <a id="servicerevisionid"></a> `serviceRevisionId?` | `string` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:193 |
| <a id="name"></a> `name` | `string` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:194 |
| <a id="description"></a> `description?` | `string` \| `null` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:195 |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:196 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:197 |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:198 |
| <a id="isactive"></a> `isActive` | `boolean` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:199 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/service-management/business-service-config.schema.ts:211 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/type-definitions/display-order.ts#L106) |
