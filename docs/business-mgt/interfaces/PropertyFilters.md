[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.44**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyFilters

# Interface: PropertyFilters

Defined in: [src/core/business-mgt/property-config.schema.ts:275](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L275)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | [src/core/business-mgt/property-config.schema.ts:276](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L276) |
| <a id="categoryid"></a> `categoryId?` | `string` | [src/core/business-mgt/property-config.schema.ts:277](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L277) |
| <a id="addressids"></a> `addressIds?` | `string`[] | [src/core/business-mgt/property-config.schema.ts:278](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L278) |
| <a id="address"></a> `address?` | [`PropertyAddressFilters`](PropertyAddressFilters.md) | [src/core/business-mgt/property-config.schema.ts:279](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L279) |
| <a id="propertytype"></a> `propertyType?` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-config.schema.ts:280](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L280) |
| <a id="propertysubtype"></a> `propertySubType?` | [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md) | [src/core/business-mgt/property-config.schema.ts:281](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L281) |
| <a id="listingtype"></a> `listingType?` | [`ListingType`](../../type-definitions/enumerations/ListingType.md) | [src/core/business-mgt/property-config.schema.ts:282](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L282) |
| <a id="listingstatus"></a> `listingStatus?` | [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md)[] | [src/core/business-mgt/property-config.schema.ts:283](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L283) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:284](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L284) |
| <a id="isfeatured"></a> `isFeatured?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:285](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L285) |
| <a id="isverified"></a> `isVerified?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:286](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L286) |
| <a id="condition"></a> `condition?` | [`PropertyCondition`](../../type-definitions/enumerations/PropertyCondition.md) | [src/core/business-mgt/property-config.schema.ts:287](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L287) |
| <a id="furnished"></a> `furnished?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:288](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L288) |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:289](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L289) |
| `priceRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:289](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L289) |
| `priceRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:289](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L289) |
| <a id="bedroomsrange"></a> `bedroomsRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:290](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L290) |
| `bedroomsRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:290](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L290) |
| `bedroomsRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:290](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L290) |
| <a id="bathroomsrange"></a> `bathroomsRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:291](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L291) |
| `bathroomsRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:291](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L291) |
| `bathroomsRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:291](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L291) |
| <a id="squarefootagerange"></a> `squareFootageRange?` | \{ `min?`: `number`; `max?`: `number`; \} | [src/core/business-mgt/property-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L292) |
| `squareFootageRange.min?` | `number` | [src/core/business-mgt/property-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L292) |
| `squareFootageRange.max?` | `number` | [src/core/business-mgt/property-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L292) |
| <a id="includedeleted"></a> `includeDeleted?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:293](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/property-config.schema.ts#L293) |
