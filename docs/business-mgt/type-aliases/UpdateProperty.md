[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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
     parkingSpaces?: number | null;
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
  residentialDetails?:   | {
     bedrooms: number;
     bathrooms: number;
     halfBaths?: number | null;
     squareFootage: number;
     lotSize?: number | null;
     lotSizeUnit: "sqft" | "acres" | "sqm" | "hectares";
     yearBuilt?: number | null;
     floors?: number | null;
     basementType?: "none" | "partial" | "unfinished" | "finished" | null;
     atticFinished?: boolean | null;
     heatingType?: string | null;
     coolingType?: string | null;
     roofType?: string | null;
     exteriorMaterial?: string | null;
     garageSpaces?: number | null;
     hasPool: boolean;
     hasFireplace: boolean;
   }
     | null;
  commercialDetails?:   | {
     squareFootage: number;
     usableSquareFootage?: number | null;
     floors?: number | null;
     ceilingHeight?: number | null;
     loadingDocks?: number | null;
     driveInDoors?: number | null;
     freightElevator: boolean;
     passengerElevator: boolean;
     zoningType: string;
     yearBuilt?: number | null;
     previousUse?: string | null;
     buildOutStatus?: "partial" | "shell" | "turnkey" | null;
     hvacType?: string | null;
     powerCapacity?: string | null;
     sprinklerSystem: boolean;
   }
     | null;
  landDetails?:   | {
     lotSize: number;
     lotSizeUnit: "sqft" | "acres" | "sqm" | "hectares";
     zoning: string;
     topography?: "flat" | "sloped" | "hilly" | "mixed" | null;
     roadFrontage?: number | null;
     roadAccess?: "none" | "paved" | "gravel" | "dirt" | null;
     utilitiesAvailable: string[];
     waterSource?: "none" | "unknown" | "municipal" | "well" | null;
     sewerType?: "none" | "unknown" | "municipal" | "septic" | null;
     soilType?: string | null;
     floodZone: boolean;
     floodZoneDesignation?: string | null;
     easements?: string | null;
     surveyAvailable: boolean;
     mineralRights?: "partial" | "unknown" | "included" | "excluded" | null;
     timberValue?: number | null;
   }
     | null;
  id: string;
};
```

Defined in: src/core/business-mgt/property-management/property-config.schema.ts:405

Schema for updating an existing property.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryid"></a> `categoryId?` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:269 |
| <a id="title"></a> `title?` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:273 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:274 |
| <a id="propertytype"></a> `propertyType?` | \| [`RESIDENTIAL`](../../type-definitions/enumerations/PropertyType.md#residential) \| [`COMMERCIAL`](../../type-definitions/enumerations/PropertyType.md#commercial) \| [`LAND`](../../type-definitions/enumerations/PropertyType.md#land) | src/core/business-mgt/property-management/property-config.schema.ts:275 |
| <a id="propertysubtype"></a> `propertySubType?` | \| [`HOUSE`](../../type-definitions/enumerations/PropertySubType.md#house) \| [`APARTMENT`](../../type-definitions/enumerations/PropertySubType.md#apartment) \| [`CONDO`](../../type-definitions/enumerations/PropertySubType.md#condo) \| [`TOWNHOUSE`](../../type-definitions/enumerations/PropertySubType.md#townhouse) \| [`VILLA`](../../type-definitions/enumerations/PropertySubType.md#villa) \| [`OFFICE`](../../type-definitions/enumerations/PropertySubType.md#office) \| [`RETAIL`](../../type-definitions/enumerations/PropertySubType.md#retail) \| [`WAREHOUSE`](../../type-definitions/enumerations/PropertySubType.md#warehouse) \| [`INDUSTRIAL`](../../type-definitions/enumerations/PropertySubType.md#industrial) \| [`LOT`](../../type-definitions/enumerations/PropertySubType.md#lot) \| [`FARM`](../../type-definitions/enumerations/PropertySubType.md#farm) \| [`ACREAGE`](../../type-definitions/enumerations/PropertySubType.md#acreage) | src/core/business-mgt/property-management/property-config.schema.ts:276 |
| <a id="addressid"></a> `addressId?` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:279 |
| <a id="listingtype"></a> `listingType?` | \| [`SALE`](../../type-definitions/enumerations/ListingType.md#sale) \| [`RENT`](../../type-definitions/enumerations/ListingType.md#rent) \| [`BOTH`](../../type-definitions/enumerations/ListingType.md#both) | src/core/business-mgt/property-management/property-config.schema.ts:283 |
| <a id="listingstatus"></a> `listingStatus?` | \| [`DRAFT`](../../type-definitions/enumerations/ListingStatus.md#draft) \| [`ACTIVE`](../../type-definitions/enumerations/ListingStatus.md#active) \| [`UNDER_OFFER`](../../type-definitions/enumerations/ListingStatus.md#under_offer) \| [`SOLD`](../../type-definitions/enumerations/ListingStatus.md#sold) \| [`LEASED`](../../type-definitions/enumerations/ListingStatus.md#leased) \| [`WITHDRAWN`](../../type-definitions/enumerations/ListingStatus.md#withdrawn) | src/core/business-mgt/property-management/property-config.schema.ts:284 |
| <a id="saleprice"></a> `salePrice?` | `number` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:287 |
| <a id="salepricecurrency"></a> `salePriceCurrency?` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:288 |
| <a id="rentalprice"></a> `rentalPrice?` | `number` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:291 |
| <a id="rentalperiod"></a> `rentalPeriod?` | \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:292 |
| <a id="rentalpricecurrency"></a> `rentalPriceCurrency?` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:293 |
| <a id="pricenegotiable"></a> `priceNegotiable?` | `boolean` | src/core/business-mgt/property-management/property-config.schema.ts:296 |
| <a id="features"></a> `features?` | \{ `parkingSpaces?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \} | src/core/business-mgt/property-management/property-config.schema.ts:299 |
| `features.parkingSpaces?` | `number` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:98 |
| `features.amenities` | `string`[] | src/core/business-mgt/property-management/property-config.schema.ts:99 |
| `features.utilities` | `string`[] | src/core/business-mgt/property-management/property-config.schema.ts:100 |
| <a id="condition"></a> `condition?` | \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:302 |
| <a id="furnished"></a> `furnished?` | `boolean` | src/core/business-mgt/property-management/property-config.schema.ts:303 |
| <a id="images"></a> `images?` | `string`[] | src/core/business-mgt/property-management/property-config.schema.ts:306 |
| <a id="virtualtoururl"></a> `virtualTourUrl?` | `string` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:307 |
| <a id="videourl"></a> `videoUrl?` | `string` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:308 |
| <a id="availablefrom"></a> `availableFrom?` | `number` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:311 |
| <a id="availableto"></a> `availableTo?` | `number` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:312 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/property-management/property-config.schema.ts:315 |
| <a id="isfeatured"></a> `isFeatured?` | `boolean` | src/core/business-mgt/property-management/property-config.schema.ts:316 |
| <a id="isverified"></a> `isVerified?` | `boolean` | src/core/business-mgt/property-management/property-config.schema.ts:317 |
| <a id="externalid"></a> `externalId?` | `string` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:320 |
| <a id="mlsnumber"></a> `mlsNumber?` | `string` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:321 |
| <a id="residentialdetails"></a> `residentialDetails?` | \| \{ `bedrooms`: `number`; `bathrooms`: `number`; `halfBaths?`: `number` \| `null`; `squareFootage`: `number`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `basementType?`: `"none"` \| `"partial"` \| `"unfinished"` \| `"finished"` \| `null`; `atticFinished?`: `boolean` \| `null`; `heatingType?`: `string` \| `null`; `coolingType?`: `string` \| `null`; `roofType?`: `string` \| `null`; `exteriorMaterial?`: `string` \| `null`; `garageSpaces?`: `number` \| `null`; `hasPool`: `boolean`; `hasFireplace`: `boolean`; \} \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:324 |
| <a id="commercialdetails"></a> `commercialDetails?` | \| \{ `squareFootage`: `number`; `usableSquareFootage?`: `number` \| `null`; `floors?`: `number` \| `null`; `ceilingHeight?`: `number` \| `null`; `loadingDocks?`: `number` \| `null`; `driveInDoors?`: `number` \| `null`; `freightElevator`: `boolean`; `passengerElevator`: `boolean`; `zoningType`: `string`; `yearBuilt?`: `number` \| `null`; `previousUse?`: `string` \| `null`; `buildOutStatus?`: `"partial"` \| `"shell"` \| `"turnkey"` \| `null`; `hvacType?`: `string` \| `null`; `powerCapacity?`: `string` \| `null`; `sprinklerSystem`: `boolean`; \} \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:325 |
| <a id="landdetails"></a> `landDetails?` | \| \{ `lotSize`: `number`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `zoning`: `string`; `topography?`: `"flat"` \| `"sloped"` \| `"hilly"` \| `"mixed"` \| `null`; `roadFrontage?`: `number` \| `null`; `roadAccess?`: `"none"` \| `"paved"` \| `"gravel"` \| `"dirt"` \| `null`; `utilitiesAvailable`: `string`[]; `waterSource?`: `"none"` \| `"unknown"` \| `"municipal"` \| `"well"` \| `null`; `sewerType?`: `"none"` \| `"unknown"` \| `"municipal"` \| `"septic"` \| `null`; `soilType?`: `string` \| `null`; `floodZone`: `boolean`; `floodZoneDesignation?`: `string` \| `null`; `easements?`: `string` \| `null`; `surveyAvailable`: `boolean`; `mineralRights?`: `"partial"` \| `"unknown"` \| `"included"` \| `"excluded"` \| `null`; `timberValue?`: `number` \| `null`; \} \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:326 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:383 |
