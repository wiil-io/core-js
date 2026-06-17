[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServiceCategory

# Type Alias: UpdateServiceCategory

```ts
type UpdateServiceCategory = {
  organizationId?: string;
  serviceRevisionId?: string;
  name?: string;
  description?: string | null;
  imageUrl?: string | null;
  channelMappings?:   | {
     channelId: string;
     externalCategoryId: string;
   }[]
     | null;
  displayOrder?: number | null;
  isActive?: boolean;
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
  id: string;
};
```

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:226](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L226)

Schema for updating an existing service category.
All fields optional except id (required).

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId?` | `string` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L192) |
| <a id="servicerevisionid"></a> `serviceRevisionId?` | `string` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:193](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L193) |
| <a id="name"></a> `name?` | `string` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:194](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L194) |
| <a id="description"></a> `description?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L195) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:196](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L196) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L197) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:198](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L198) |
| <a id="isactive"></a> `isActive?` | `boolean` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:199](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L199) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:211](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L211) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/type-definitions/display-order.ts#L106) |
| <a id="id"></a> `id` | `string` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:219](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/business-service-config.schema.ts#L219) |
