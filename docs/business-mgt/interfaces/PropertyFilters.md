[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyFilters

# Interface: PropertyFilters

Defined in: src/core/business-mgt/property-config.schema.ts:281

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | src/core/business-mgt/property-config.schema.ts:282 |
| <a id="categoryid"></a> `categoryId?` | `string` | src/core/business-mgt/property-config.schema.ts:283 |
| <a id="addressids"></a> `addressIds?` | `string`[] | src/core/business-mgt/property-config.schema.ts:284 |
| <a id="address"></a> `address?` | [`PropertyAddressFilters`](PropertyAddressFilters.md) | src/core/business-mgt/property-config.schema.ts:285 |
| <a id="propertytype"></a> `propertyType?` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | src/core/business-mgt/property-config.schema.ts:286 |
| <a id="propertysubtype"></a> `propertySubType?` | [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md) | src/core/business-mgt/property-config.schema.ts:287 |
| <a id="listingtype"></a> `listingType?` | [`ListingType`](../../type-definitions/enumerations/ListingType.md) | src/core/business-mgt/property-config.schema.ts:288 |
| <a id="listingstatus"></a> `listingStatus?` | [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md)[] | src/core/business-mgt/property-config.schema.ts:289 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/property-config.schema.ts:290 |
| <a id="isfeatured"></a> `isFeatured?` | `boolean` | src/core/business-mgt/property-config.schema.ts:291 |
| <a id="isverified"></a> `isVerified?` | `boolean` | src/core/business-mgt/property-config.schema.ts:292 |
| <a id="condition"></a> `condition?` | [`PropertyCondition`](../../type-definitions/enumerations/PropertyCondition.md) | src/core/business-mgt/property-config.schema.ts:293 |
| <a id="furnished"></a> `furnished?` | `boolean` | src/core/business-mgt/property-config.schema.ts:294 |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | src/core/business-mgt/property-config.schema.ts:295 |
| `priceRange.min?` | `number` | src/core/business-mgt/property-config.schema.ts:295 |
| `priceRange.max?` | `number` | src/core/business-mgt/property-config.schema.ts:295 |
| <a id="bedroomsrange"></a> `bedroomsRange?` | \{ `min?`: `number`; `max?`: `number`; \} | src/core/business-mgt/property-config.schema.ts:296 |
| `bedroomsRange.min?` | `number` | src/core/business-mgt/property-config.schema.ts:296 |
| `bedroomsRange.max?` | `number` | src/core/business-mgt/property-config.schema.ts:296 |
| <a id="bathroomsrange"></a> `bathroomsRange?` | \{ `min?`: `number`; `max?`: `number`; \} | src/core/business-mgt/property-config.schema.ts:297 |
| `bathroomsRange.min?` | `number` | src/core/business-mgt/property-config.schema.ts:297 |
| `bathroomsRange.max?` | `number` | src/core/business-mgt/property-config.schema.ts:297 |
| <a id="squarefootagerange"></a> `squareFootageRange?` | \{ `min?`: `number`; `max?`: `number`; \} | src/core/business-mgt/property-config.schema.ts:298 |
| `squareFootageRange.min?` | `number` | src/core/business-mgt/property-config.schema.ts:298 |
| `squareFootageRange.max?` | `number` | src/core/business-mgt/property-config.schema.ts:298 |
| <a id="includedeleted"></a> `includeDeleted?` | `boolean` | src/core/business-mgt/property-config.schema.ts:299 |
