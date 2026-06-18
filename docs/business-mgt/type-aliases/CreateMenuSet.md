[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateMenuSet

# Type Alias: CreateMenuSet

```ts
type CreateMenuSet = {
  locationId?: string | null;
  menuRevisionId?: string | null;
  code?: string | null;
  name: string;
  description?: string | null;
  channelMappings?:   | {
     channelId: string;
     externalMenuSetId: string;
   }[]
     | null;
  targetingMode: MenuSetTargetingMode;
  pricingMode: MenuSetPricingMode;
  fixedPrice?: number | null;
  items?:   | {
     menuItemId: string;
     menuItemVariantId: string;
     quantity: number;
     isRequired: boolean;
     displayOrder?: number | null;
   }[]
     | null;
  selector?:   | {
     menuItemIdsAny: string[];
     menuItemIdsAll: string[];
     allMenuItems: boolean;
     quantityExact?: number;
     quantityMin?: number;
     quantityMax?: number;
   }
     | null;
  isActive: boolean;
  imageUrl?: string | null;
  imageUrls?: string[] | null;
  displayOrder?: number | null;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-set.schema.ts:280](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L280)

Schema for creating a new menu set.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:164](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L164) |
| <a id="menurevisionid"></a> `menuRevisionId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:165](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L165) |
| <a id="code"></a> `code?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:166](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L166) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/menu-set.schema.ts:167](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L167) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:168](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L168) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalMenuSetId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:169](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L169) |
| <a id="targetingmode"></a> `targetingMode` | [`MenuSetTargetingMode`](../enumerations/MenuSetTargetingMode.md) | [src/core/business-mgt/menu-management/menu-set.schema.ts:170](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L170) |
| <a id="pricingmode"></a> `pricingMode` | [`MenuSetPricingMode`](../enumerations/MenuSetPricingMode.md) | [src/core/business-mgt/menu-management/menu-set.schema.ts:171](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L171) |
| <a id="fixedprice"></a> `fixedPrice?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:172](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L172) |
| <a id="items"></a> `items?` | \| \{ `menuItemId`: `string`; `menuItemVariantId`: `string`; `quantity`: `number`; `isRequired`: `boolean`; `displayOrder?`: `number` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:173](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L173) |
| <a id="selector"></a> `selector?` | \| \{ `menuItemIdsAny`: `string`[]; `menuItemIdsAll`: `string`[]; `allMenuItems`: `boolean`; `quantityExact?`: `number`; `quantityMin?`: `number`; `quantityMax?`: `number`; \} \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:174](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L174) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/menu-set.schema.ts:175](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L175) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:176](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L176) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:177](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L177) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:178](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/menu-management/menu-set.schema.ts#L178) |
