[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.36**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyFilters

# Interface: PropertyFilters

Defined in: [src/core/business-mgt/property-config.schema.ts:281](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L281)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | [src/core/business-mgt/property-config.schema.ts:282](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L282) |
| <a id="categoryid"></a> `categoryId?` | `string` | [src/core/business-mgt/property-config.schema.ts:283](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L283) |
| <a id="addressids"></a> `addressIds?` | `string`[] | [src/core/business-mgt/property-config.schema.ts:284](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L284) |
| <a id="address"></a> `address?` | [`PropertyAddressFilters`](PropertyAddressFilters.md) | [src/core/business-mgt/property-config.schema.ts:285](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L285) |
| <a id="propertytype"></a> `propertyType?` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-config.schema.ts:286](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L286) |
| <a id="propertysubtype"></a> `propertySubType?` | [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md) | [src/core/business-mgt/property-config.schema.ts:287](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L287) |
| <a id="listingtype"></a> `listingType?` | [`ListingType`](../../type-definitions/enumerations/ListingType.md) | [src/core/business-mgt/property-config.schema.ts:288](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L288) |
| <a id="listingstatus"></a> `listingStatus?` | [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md)[] | [src/core/business-mgt/property-config.schema.ts:289](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L289) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:290](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L290) |
| <a id="isfeatured"></a> `isFeatured?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:291](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L291) |
| <a id="isverified"></a> `isVerified?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L292) |
| <a id="condition"></a> `condition?` | [`PropertyCondition`](../../type-definitions/enumerations/PropertyCondition.md) | [src/core/business-mgt/property-config.schema.ts:293](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L293) |
| <a id="furnished"></a> `furnished?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:294](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L294) |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:295](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L295) |
| `priceRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:295](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L295) |
| `priceRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:295](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L295) |
| <a id="bedroomsrange"></a> `bedroomsRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:296](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L296) |
| `bedroomsRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:296](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L296) |
| `bedroomsRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:296](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L296) |
| <a id="bathroomsrange"></a> `bathroomsRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:297](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L297) |
| `bathroomsRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:297](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L297) |
| `bathroomsRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:297](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L297) |
| <a id="squarefootagerange"></a> `squareFootageRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:298](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L298) |
| `squareFootageRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:298](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L298) |
| `squareFootageRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:298](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L298) |
| <a id="includedeleted"></a> `includeDeleted?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:299](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-config.schema.ts#L299) |
