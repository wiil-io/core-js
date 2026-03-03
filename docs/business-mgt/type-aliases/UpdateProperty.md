[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateProperty

# Type Alias: UpdateProperty

```ts
type UpdateProperty = {
  organizationId?: string;
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

Defined in: src/core/business-mgt/property-config.schema.ts:265

Schema for updating an existing property listing.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/business-mgt/property-config.schema.ts:139 |
| <a id="categoryid"></a> `categoryId?` | `string` | src/core/business-mgt/property-config.schema.ts:140 |
| <a id="title"></a> `title?` | `string` | src/core/business-mgt/property-config.schema.ts:144 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/property-config.schema.ts:145 |
| <a id="propertytype"></a> `propertyType?` | \| [`RESIDENTIAL`](../../type-definitions/enumerations/PropertyType.md#residential) \| [`COMMERCIAL`](../../type-definitions/enumerations/PropertyType.md#commercial) \| [`LAND`](../../type-definitions/enumerations/PropertyType.md#land) | src/core/business-mgt/property-config.schema.ts:146 |
| <a id="propertysubtype"></a> `propertySubType?` | \| [`HOUSE`](../../type-definitions/enumerations/PropertySubType.md#house) \| [`APARTMENT`](../../type-definitions/enumerations/PropertySubType.md#apartment) \| [`CONDO`](../../type-definitions/enumerations/PropertySubType.md#condo) \| [`TOWNHOUSE`](../../type-definitions/enumerations/PropertySubType.md#townhouse) \| [`VILLA`](../../type-definitions/enumerations/PropertySubType.md#villa) \| [`OFFICE`](../../type-definitions/enumerations/PropertySubType.md#office) \| [`RETAIL`](../../type-definitions/enumerations/PropertySubType.md#retail) \| [`WAREHOUSE`](../../type-definitions/enumerations/PropertySubType.md#warehouse) \| [`INDUSTRIAL`](../../type-definitions/enumerations/PropertySubType.md#industrial) \| [`LOT`](../../type-definitions/enumerations/PropertySubType.md#lot) \| [`FARM`](../../type-definitions/enumerations/PropertySubType.md#farm) \| [`ACREAGE`](../../type-definitions/enumerations/PropertySubType.md#acreage) | src/core/business-mgt/property-config.schema.ts:147 |
| <a id="addressid"></a> `addressId?` | `string` | src/core/business-mgt/property-config.schema.ts:150 |
| <a id="listingtype"></a> `listingType?` | \| [`SALE`](../../type-definitions/enumerations/ListingType.md#sale) \| [`RENT`](../../type-definitions/enumerations/ListingType.md#rent) \| [`BOTH`](../../type-definitions/enumerations/ListingType.md#both) | src/core/business-mgt/property-config.schema.ts:154 |
| <a id="listingstatus"></a> `listingStatus?` | \| [`DRAFT`](../../type-definitions/enumerations/ListingStatus.md#draft) \| [`ACTIVE`](../../type-definitions/enumerations/ListingStatus.md#active) \| [`UNDER_OFFER`](../../type-definitions/enumerations/ListingStatus.md#under_offer) \| [`SOLD`](../../type-definitions/enumerations/ListingStatus.md#sold) \| [`LEASED`](../../type-definitions/enumerations/ListingStatus.md#leased) \| [`WITHDRAWN`](../../type-definitions/enumerations/ListingStatus.md#withdrawn) | src/core/business-mgt/property-config.schema.ts:155 |
| <a id="saleprice"></a> `salePrice?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:158 |
| <a id="salepricecurrency"></a> `salePriceCurrency?` | `string` | src/core/business-mgt/property-config.schema.ts:159 |
| <a id="rentalprice"></a> `rentalPrice?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:162 |
| <a id="rentalperiod"></a> `rentalPeriod?` | \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null` | src/core/business-mgt/property-config.schema.ts:163 |
| <a id="rentalpricecurrency"></a> `rentalPriceCurrency?` | `string` | src/core/business-mgt/property-config.schema.ts:164 |
| <a id="pricenegotiable"></a> `priceNegotiable?` | `boolean` | src/core/business-mgt/property-config.schema.ts:167 |
| <a id="features"></a> `features?` | \{ `bedrooms?`: `number` \| `null`; `bathrooms?`: `number` \| `null`; `parkingSpaces?`: `number` \| `null`; `squareFootage?`: `number` \| `null`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \} | src/core/business-mgt/property-config.schema.ts:170 |
| `features.bedrooms?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:91 |
| `features.bathrooms?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:92 |
| `features.parkingSpaces?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:93 |
| `features.squareFootage?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:94 |
| `features.lotSize?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:95 |
| `features.lotSizeUnit` | `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"` | src/core/business-mgt/property-config.schema.ts:96 |
| `features.yearBuilt?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:97 |
| `features.floors?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:98 |
| `features.amenities` | `string`[] | src/core/business-mgt/property-config.schema.ts:99 |
| `features.utilities` | `string`[] | src/core/business-mgt/property-config.schema.ts:100 |
| <a id="condition"></a> `condition?` | \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null` | src/core/business-mgt/property-config.schema.ts:173 |
| <a id="furnished"></a> `furnished?` | `boolean` | src/core/business-mgt/property-config.schema.ts:174 |
| <a id="images"></a> `images?` | `string`[] | src/core/business-mgt/property-config.schema.ts:177 |
| <a id="virtualtoururl"></a> `virtualTourUrl?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:178 |
| <a id="videourl"></a> `videoUrl?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:179 |
| <a id="availablefrom"></a> `availableFrom?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:182 |
| <a id="availableto"></a> `availableTo?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:183 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/property-config.schema.ts:186 |
| <a id="isfeatured"></a> `isFeatured?` | `boolean` | src/core/business-mgt/property-config.schema.ts:187 |
| <a id="isverified"></a> `isVerified?` | `boolean` | src/core/business-mgt/property-config.schema.ts:188 |
| <a id="externalid"></a> `externalId?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:191 |
| <a id="mlsnumber"></a> `mlsNumber?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:192 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/property-config.schema.ts:249 |
