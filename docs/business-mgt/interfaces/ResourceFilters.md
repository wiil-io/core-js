[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceFilters

# Interface: ResourceFilters

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:393](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L393)

Resource filter options.
 ResourceFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across resource name and description | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:395](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L395) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:397](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L397) |
| <a id="resourcetype"></a> `resourceType?` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md)[] | Filter by resource types | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:399](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L399) |
| <a id="categoryid"></a> `categoryId?` | `string` | Filter by resource category ID | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:401](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L401) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | Filter by availability status | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:403](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L403) |
| <a id="capacityrange"></a> `capacityRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by supported capacity range | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:405](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L405) |
| `capacityRange.min?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:405](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L405) |
| `capacityRange.max?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:405](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L405) |
| <a id="location"></a> `location?` | `string` | Filter by physical location label | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:407](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L407) |
| <a id="amenities"></a> `amenities?` | `string`[] | Filter by required amenities | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:409](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L409) |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by pricing range | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:411](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L411) |
| `priceRange.min?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:411](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L411) |
| `priceRange.max?` | `number` | - | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:411](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L411) |
