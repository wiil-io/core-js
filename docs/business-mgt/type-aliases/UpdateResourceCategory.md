[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateResourceCategory

# Type Alias: UpdateResourceCategory

```ts
type UpdateResourceCategory = {
  resourceRevisionId?: string;
  locationId?: string | null;
  name?: string;
  description?: string | null;
  channelMappings?:   | {
     channelId: string;
     externalCategoryId: string;
   }[]
     | null;
  resourceType?:   | TABLE
     | ROOM
     | RENTAL
     | RENTALS
     | RESOURCE
     | null;
  displayOrder?: number | null;
  isActive?: boolean;
  metadata?: Record<string, any> | null;
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

Defined in: src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:90

Schema for updating an existing resource category.
All fields optional except id.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="resourcerevisionid"></a> `resourceRevisionId?` | `string` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:48 |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:49 |
| <a id="name"></a> `name?` | `string` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:50 |
| <a id="description"></a> `description?` | `string` \| `null` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:51 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:52 |
| <a id="resourcetype"></a> `resourceType?` | \| [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) \| [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) \| [`RENTAL`](../../type-definitions/enumerations/ResourceType.md#rental) \| [`RENTALS`](../../type-definitions/enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../../type-definitions/enumerations/ResourceType.md#resource) \| `null` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:53 |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:54 |
| <a id="isactive"></a> `isActive?` | `boolean` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:55 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:56 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:72 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
| <a id="id"></a> `id` | `string` | - | src/core/business-mgt/reservation-mgt/resource/reservation-resource-category.schema.ts:80 |
