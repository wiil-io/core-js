[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceFilters

# Interface: ResourceFilters

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:414](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L414)

Resource filter options.
 ResourceFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across resource name and description | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:416](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L416) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:418](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L418) |
| <a id="resourcetype"></a> `resourceType?` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md)[] | Filter by resource types | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:420](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L420) |
| <a id="categoryid"></a> `categoryId?` | `string` | Filter by resource category ID | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:422](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L422) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | Filter by availability status | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:424](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L424) |
| <a id="capacityrange"></a> `capacityRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by supported capacity range | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:426](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L426) |
| `capacityRange.min?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:426](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L426) |
| `capacityRange.max?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:426](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L426) |
| <a id="location"></a> `location?` | `string` | Filter by physical location label | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:428](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L428) |
| <a id="amenities"></a> `amenities?` | `string`[] | Filter by required amenities | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:430](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L430) |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by pricing range | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:432](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L432) |
| `priceRange.min?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:432](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L432) |
| `priceRange.max?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:432](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L432) |
