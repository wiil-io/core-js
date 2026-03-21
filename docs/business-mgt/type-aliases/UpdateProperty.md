[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateProperty

# Type Alias: UpdateProperty

```ts
type UpdateProperty = {
  categoryId?: string;
  title?: string;
  description?: string;
  propertyType?:   | RESIDENTIAL
     | COMMERCIAL
     | LAND;
  propertySubType?:   | HOUSE
     | APARTMENT
     | CONDO
     | TOWNHOUSE
     | VILLA
     | OFFICE
     | RETAIL
     | WAREHOUSE
     | INDUSTRIAL
     | LOT
     | FARM
     | ACREAGE;
  addressId?: string;
  listingType?:   | SALE
     | RENT
     | BOTH;
  listingStatus?:   | DRAFT
     | ACTIVE
     | UNDER_OFFER
     | SOLD
     | LEASED
     | WITHDRAWN;
  salePrice?: number | null;
  salePriceCurrency?: string;
  rentalPrice?: number | null;
  rentalPeriod?:   | DAILY
     | WEEKLY
     | MONTHLY
     | YEARLY
     | null;
  rentalPriceCurrency?: string;
  priceNegotiable?: boolean;
  features?: {
     bedrooms?: number | null;
     bathrooms?: number | null;
     parkingSpaces?: number | null;
     squareFootage?: number | null;
     lotSize?: number | null;
     lotSizeUnit: "sqft" | "acres" | "sqm" | "hectares";
     yearBuilt?: number | null;
     floors?: number | null;
     amenities: string[];
     utilities: string[];
  };
  condition?:   | NEW
     | EXCELLENT
     | GOOD
     | FAIR
     | NEEDS_WORK
     | null;
  furnished?: boolean;
  images?: string[];
  virtualTourUrl?: string | null;
  videoUrl?: string | null;
  availableFrom?: number | null;
  availableTo?: number | null;
  isActive?: boolean;
  isFeatured?: boolean;
  isVerified?: boolean;
  externalId?: string | null;
  mlsNumber?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:258](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L258)

Schema for updating an existing property listing.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryid"></a> `categoryId?` | `string` | [src/core/business-mgt/property-config.schema.ts:133](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L133) |
| <a id="title"></a> `title?` | `string` | [src/core/business-mgt/property-config.schema.ts:137](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L137) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:138](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L138) |
| <a id="propertytype"></a> `propertyType?` | \| [`RESIDENTIAL`](../../type-definitions/enumerations/PropertyType.md#residential) \| [`COMMERCIAL`](../../type-definitions/enumerations/PropertyType.md#commercial) \| [`LAND`](../../type-definitions/enumerations/PropertyType.md#land) | [src/core/business-mgt/property-config.schema.ts:139](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L139) |
| <a id="propertysubtype"></a> `propertySubType?` | \| [`HOUSE`](../../type-definitions/enumerations/PropertySubType.md#house) \| [`APARTMENT`](../../type-definitions/enumerations/PropertySubType.md#apartment) \| [`CONDO`](../../type-definitions/enumerations/PropertySubType.md#condo) \| [`TOWNHOUSE`](../../type-definitions/enumerations/PropertySubType.md#townhouse) \| [`VILLA`](../../type-definitions/enumerations/PropertySubType.md#villa) \| [`OFFICE`](../../type-definitions/enumerations/PropertySubType.md#office) \| [`RETAIL`](../../type-definitions/enumerations/PropertySubType.md#retail) \| [`WAREHOUSE`](../../type-definitions/enumerations/PropertySubType.md#warehouse) \| [`INDUSTRIAL`](../../type-definitions/enumerations/PropertySubType.md#industrial) \| [`LOT`](../../type-definitions/enumerations/PropertySubType.md#lot) \| [`FARM`](../../type-definitions/enumerations/PropertySubType.md#farm) \| [`ACREAGE`](../../type-definitions/enumerations/PropertySubType.md#acreage) | [src/core/business-mgt/property-config.schema.ts:140](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L140) |
| <a id="addressid"></a> `addressId?` | `string` | [src/core/business-mgt/property-config.schema.ts:143](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L143) |
| <a id="listingtype"></a> `listingType?` | \| [`SALE`](../../type-definitions/enumerations/ListingType.md#sale) \| [`RENT`](../../type-definitions/enumerations/ListingType.md#rent) \| [`BOTH`](../../type-definitions/enumerations/ListingType.md#both) | [src/core/business-mgt/property-config.schema.ts:147](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L147) |
| <a id="listingstatus"></a> `listingStatus?` | \| [`DRAFT`](../../type-definitions/enumerations/ListingStatus.md#draft) \| [`ACTIVE`](../../type-definitions/enumerations/ListingStatus.md#active) \| [`UNDER_OFFER`](../../type-definitions/enumerations/ListingStatus.md#under_offer) \| [`SOLD`](../../type-definitions/enumerations/ListingStatus.md#sold) \| [`LEASED`](../../type-definitions/enumerations/ListingStatus.md#leased) \| [`WITHDRAWN`](../../type-definitions/enumerations/ListingStatus.md#withdrawn) | [src/core/business-mgt/property-config.schema.ts:148](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L148) |
| <a id="saleprice"></a> `salePrice?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:151](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L151) |
| <a id="salepricecurrency"></a> `salePriceCurrency?` | `string` | [src/core/business-mgt/property-config.schema.ts:152](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L152) |
| <a id="rentalprice"></a> `rentalPrice?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:155](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L155) |
| <a id="rentalperiod"></a> `rentalPeriod?` | \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null` | [src/core/business-mgt/property-config.schema.ts:156](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L156) |
| <a id="rentalpricecurrency"></a> `rentalPriceCurrency?` | `string` | [src/core/business-mgt/property-config.schema.ts:157](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L157) |
| <a id="pricenegotiable"></a> `priceNegotiable?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:160](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L160) |
| <a id="features"></a> `features?` | \{ `bedrooms?`: `number` \| `null`; `bathrooms?`: `number` \| `null`; `parkingSpaces?`: `number` \| `null`; `squareFootage?`: `number` \| `null`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \} | [src/core/business-mgt/property-config.schema.ts:163](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L163) |
| `features.bedrooms?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L86) |
| `features.bathrooms?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:87](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L87) |
| `features.parkingSpaces?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:88](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L88) |
| `features.squareFootage?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L89) |
| `features.lotSize?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:90](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L90) |
| `features.lotSizeUnit` | `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"` | [src/core/business-mgt/property-config.schema.ts:91](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L91) |
| `features.yearBuilt?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:92](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L92) |
| `features.floors?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:93](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L93) |
| `features.amenities` | `string`[] | [src/core/business-mgt/property-config.schema.ts:94](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L94) |
| `features.utilities` | `string`[] | [src/core/business-mgt/property-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L95) |
| <a id="condition"></a> `condition?` | \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null` | [src/core/business-mgt/property-config.schema.ts:166](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L166) |
| <a id="furnished"></a> `furnished?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:167](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L167) |
| <a id="images"></a> `images?` | `string`[] | [src/core/business-mgt/property-config.schema.ts:170](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L170) |
| <a id="virtualtoururl"></a> `virtualTourUrl?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:171](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L171) |
| <a id="videourl"></a> `videoUrl?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:172](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L172) |
| <a id="availablefrom"></a> `availableFrom?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:175](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L175) |
| <a id="availableto"></a> `availableTo?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L176) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L179) |
| <a id="isfeatured"></a> `isFeatured?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:180](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L180) |
| <a id="isverified"></a> `isVerified?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:181](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L181) |
| <a id="externalid"></a> `externalId?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:184](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L184) |
| <a id="mlsnumber"></a> `mlsNumber?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:185](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L185) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-config.schema.ts:242](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/property-config.schema.ts#L242) |
