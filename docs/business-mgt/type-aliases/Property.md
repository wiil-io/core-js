[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / Property

# Type Alias: Property

```ts
type Property = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  categoryId: string;
  category?: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     name: string;
     description?: string;
     propertyType: PropertyType;
     displayOrder?: number;
     isDefault: boolean;
  };
  title: string;
  description?: string;
  propertyType: PropertyType;
  propertySubType: PropertySubType;
  addressId: string;
  address?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     street: string;
     unit?: string | null;
     city: string;
     state: string;
     postalCode?: string | null;
     country: string;
     coordinates?:   | {
        latitude: number;
        longitude: number;
      }
        | null;
     neighborhood?: string | null;
     district?: string | null;
     isVerified: boolean;
     verifiedAt?: number | null;
     primaryUserAccountId?: string | null;
   }
     | null;
  listingType: ListingType;
  listingStatus: ListingStatus;
  salePrice?: number | null;
  salePriceCurrency: string;
  rentalPrice?: number | null;
  rentalPeriod?:   | DAILY
     | WEEKLY
     | MONTHLY
     | YEARLY
     | null;
  rentalPriceCurrency: string;
  priceNegotiable: boolean;
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
  furnished: boolean;
  images: string[];
  virtualTourUrl?: string | null;
  videoUrl?: string | null;
  availableFrom?: number | null;
  availableTo?: number | null;
  isActive: boolean;
  isFeatured: boolean;
  isVerified: boolean;
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
};
```

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:403](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L403)

Property schema.
Main property listing with pricing, details, and type-specific information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/base.schema.ts#L10) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:269](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L269) |
| <a id="category"></a> `category?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; `isDefault`: `boolean`; \} | [src/core/business-mgt/property-management/property-config.schema.ts:270](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L270) |
| `category.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/base.schema.ts#L8) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/base.schema.ts#L10) |
| `category.name` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L37) |
| `category.description?` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L38) |
| `category.propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-management/property-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L39) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/property-management/property-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L40) |
| `category.isDefault` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L41) |
| <a id="title"></a> `title` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:273](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L273) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:274](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L274) |
| <a id="propertytype"></a> `propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-management/property-config.schema.ts:275](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L275) |
| <a id="propertysubtype"></a> `propertySubType` | [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md) | [src/core/business-mgt/property-management/property-config.schema.ts:276](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L276) |
| <a id="addressid"></a> `addressId` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:279](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L279) |
| <a id="address"></a> `address?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `street`: `string`; `unit?`: `string` \| `null`; `city`: `string`; `state`: `string`; `postalCode?`: `string` \| `null`; `country`: `string`; `coordinates?`: \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null`; `neighborhood?`: `string` \| `null`; `district?`: `string` \| `null`; `isVerified`: `boolean`; `verifiedAt?`: `number` \| `null`; `primaryUserAccountId?`: `string` \| `null`; \} \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:280](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L280) |
| <a id="listingtype"></a> `listingType` | [`ListingType`](../../type-definitions/enumerations/ListingType.md) | [src/core/business-mgt/property-management/property-config.schema.ts:283](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L283) |
| <a id="listingstatus"></a> `listingStatus` | [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md) | [src/core/business-mgt/property-management/property-config.schema.ts:284](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L284) |
| <a id="saleprice"></a> `salePrice?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:287](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L287) |
| <a id="salepricecurrency"></a> `salePriceCurrency` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:288](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L288) |
| <a id="rentalprice"></a> `rentalPrice?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:291](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L291) |
| <a id="rentalperiod"></a> `rentalPeriod?` | \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L292) |
| <a id="rentalpricecurrency"></a> `rentalPriceCurrency` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:293](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L293) |
| <a id="pricenegotiable"></a> `priceNegotiable` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:296](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L296) |
| <a id="features"></a> `features?` | \{ `parkingSpaces?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \} | [src/core/business-mgt/property-management/property-config.schema.ts:299](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L299) |
| `features.parkingSpaces?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:98](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L98) |
| `features.amenities` | `string`[] | [src/core/business-mgt/property-management/property-config.schema.ts:99](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L99) |
| `features.utilities` | `string`[] | [src/core/business-mgt/property-management/property-config.schema.ts:100](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L100) |
| <a id="condition"></a> `condition?` | \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:302](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L302) |
| <a id="furnished"></a> `furnished` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:303](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L303) |
| <a id="images"></a> `images` | `string`[] | [src/core/business-mgt/property-management/property-config.schema.ts:306](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L306) |
| <a id="virtualtoururl"></a> `virtualTourUrl?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:307](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L307) |
| <a id="videourl"></a> `videoUrl?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:308](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L308) |
| <a id="availablefrom"></a> `availableFrom?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:311](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L311) |
| <a id="availableto"></a> `availableTo?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:312](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L312) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:315](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L315) |
| <a id="isfeatured"></a> `isFeatured` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:316](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L316) |
| <a id="isverified"></a> `isVerified` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:317](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L317) |
| <a id="externalid"></a> `externalId?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:320](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L320) |
| <a id="mlsnumber"></a> `mlsNumber?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:321](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L321) |
| <a id="residentialdetails"></a> `residentialDetails?` | \| \{ `bedrooms`: `number`; `bathrooms`: `number`; `halfBaths?`: `number` \| `null`; `squareFootage`: `number`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `basementType?`: `"none"` \| `"partial"` \| `"unfinished"` \| `"finished"` \| `null`; `atticFinished?`: `boolean` \| `null`; `heatingType?`: `string` \| `null`; `coolingType?`: `string` \| `null`; `roofType?`: `string` \| `null`; `exteriorMaterial?`: `string` \| `null`; `garageSpaces?`: `number` \| `null`; `hasPool`: `boolean`; `hasFireplace`: `boolean`; \} \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:324](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L324) |
| <a id="commercialdetails"></a> `commercialDetails?` | \| \{ `squareFootage`: `number`; `usableSquareFootage?`: `number` \| `null`; `floors?`: `number` \| `null`; `ceilingHeight?`: `number` \| `null`; `loadingDocks?`: `number` \| `null`; `driveInDoors?`: `number` \| `null`; `freightElevator`: `boolean`; `passengerElevator`: `boolean`; `zoningType`: `string`; `yearBuilt?`: `number` \| `null`; `previousUse?`: `string` \| `null`; `buildOutStatus?`: `"partial"` \| `"shell"` \| `"turnkey"` \| `null`; `hvacType?`: `string` \| `null`; `powerCapacity?`: `string` \| `null`; `sprinklerSystem`: `boolean`; \} \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:325](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L325) |
| <a id="landdetails"></a> `landDetails?` | \| \{ `lotSize`: `number`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `zoning`: `string`; `topography?`: `"flat"` \| `"sloped"` \| `"hilly"` \| `"mixed"` \| `null`; `roadFrontage?`: `number` \| `null`; `roadAccess?`: `"none"` \| `"paved"` \| `"gravel"` \| `"dirt"` \| `null`; `utilitiesAvailable`: `string`[]; `waterSource?`: `"none"` \| `"unknown"` \| `"municipal"` \| `"well"` \| `null`; `sewerType?`: `"none"` \| `"unknown"` \| `"municipal"` \| `"septic"` \| `null`; `soilType?`: `string` \| `null`; `floodZone`: `boolean`; `floodZoneDesignation?`: `string` \| `null`; `easements?`: `string` \| `null`; `surveyAvailable`: `boolean`; `mineralRights?`: `"partial"` \| `"unknown"` \| `"included"` \| `"excluded"` \| `null`; `timberValue?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:326](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/property-management/property-config.schema.ts#L326) |
