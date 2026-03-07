[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.41**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / Property

# Type Alias: Property

```ts
type Property = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  organizationId: string;
  categoryId: string;
  category?: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     organizationId: string;
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
     organizationId: string;
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
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:263](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L263)

Main property schema for real estate listings.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L10) |
| <a id="organizationid"></a> `organizationId` | `string` | [src/core/business-mgt/property-config.schema.ts:139](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L139) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/property-config.schema.ts:140](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L140) |
| <a id="category"></a> `category?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `organizationId`: `string`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; `isDefault`: `boolean`; \} | [src/core/business-mgt/property-config.schema.ts:141](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L141) |
| `category.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L8) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L10) |
| `category.organizationId` | `string` | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L30) |
| `category.name` | `string` | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L31) |
| `category.description?` | `string` | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L32) |
| `category.propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-config.schema.ts:33](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L33) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/property-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L34) |
| `category.isDefault` | `boolean` | [src/core/business-mgt/property-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L35) |
| <a id="title"></a> `title` | `string` | [src/core/business-mgt/property-config.schema.ts:144](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L144) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/property-config.schema.ts:145](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L145) |
| <a id="propertytype"></a> `propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | [src/core/business-mgt/property-config.schema.ts:146](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L146) |
| <a id="propertysubtype"></a> `propertySubType` | [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md) | [src/core/business-mgt/property-config.schema.ts:147](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L147) |
| <a id="addressid"></a> `addressId` | `string` | [src/core/business-mgt/property-config.schema.ts:150](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L150) |
| <a id="address"></a> `address?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `organizationId`: `string`; `street`: `string`; `unit?`: `string` \| `null`; `city`: `string`; `state`: `string`; `postalCode?`: `string` \| `null`; `country`: `string`; `coordinates?`: \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null`; `neighborhood?`: `string` \| `null`; `district?`: `string` \| `null`; `isVerified`: `boolean`; `verifiedAt?`: `number` \| `null`; `primaryUserAccountId?`: `string` \| `null`; \} \| `null` | [src/core/business-mgt/property-config.schema.ts:151](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L151) |
| <a id="listingtype"></a> `listingType` | [`ListingType`](../../type-definitions/enumerations/ListingType.md) | [src/core/business-mgt/property-config.schema.ts:154](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L154) |
| <a id="listingstatus"></a> `listingStatus` | [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md) | [src/core/business-mgt/property-config.schema.ts:155](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L155) |
| <a id="saleprice"></a> `salePrice?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:158](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L158) |
| <a id="salepricecurrency"></a> `salePriceCurrency` | `string` | [src/core/business-mgt/property-config.schema.ts:159](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L159) |
| <a id="rentalprice"></a> `rentalPrice?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:162](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L162) |
| <a id="rentalperiod"></a> `rentalPeriod?` | \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null` | [src/core/business-mgt/property-config.schema.ts:163](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L163) |
| <a id="rentalpricecurrency"></a> `rentalPriceCurrency` | `string` | [src/core/business-mgt/property-config.schema.ts:164](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L164) |
| <a id="pricenegotiable"></a> `priceNegotiable` | `boolean` | [src/core/business-mgt/property-config.schema.ts:167](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L167) |
| <a id="features"></a> `features?` | \{ `bedrooms?`: `number` \| `null`; `bathrooms?`: `number` \| `null`; `parkingSpaces?`: `number` \| `null`; `squareFootage?`: `number` \| `null`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \} | [src/core/business-mgt/property-config.schema.ts:170](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L170) |
| `features.bedrooms?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:91](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L91) |
| `features.bathrooms?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:92](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L92) |
| `features.parkingSpaces?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:93](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L93) |
| `features.squareFootage?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:94](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L94) |
| `features.lotSize?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L95) |
| `features.lotSizeUnit` | `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"` | [src/core/business-mgt/property-config.schema.ts:96](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L96) |
| `features.yearBuilt?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:97](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L97) |
| `features.floors?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:98](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L98) |
| `features.amenities` | `string`[] | [src/core/business-mgt/property-config.schema.ts:99](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L99) |
| `features.utilities` | `string`[] | [src/core/business-mgt/property-config.schema.ts:100](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L100) |
| <a id="condition"></a> `condition?` | \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null` | [src/core/business-mgt/property-config.schema.ts:173](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L173) |
| <a id="furnished"></a> `furnished` | `boolean` | [src/core/business-mgt/property-config.schema.ts:174](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L174) |
| <a id="images"></a> `images` | `string`[] | [src/core/business-mgt/property-config.schema.ts:177](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L177) |
| <a id="virtualtoururl"></a> `virtualTourUrl?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:178](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L178) |
| <a id="videourl"></a> `videoUrl?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L179) |
| <a id="availablefrom"></a> `availableFrom?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:182](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L182) |
| <a id="availableto"></a> `availableTo?` | `number` \| `null` | [src/core/business-mgt/property-config.schema.ts:183](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L183) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/property-config.schema.ts:186](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L186) |
| <a id="isfeatured"></a> `isFeatured` | `boolean` | [src/core/business-mgt/property-config.schema.ts:187](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L187) |
| <a id="isverified"></a> `isVerified` | `boolean` | [src/core/business-mgt/property-config.schema.ts:188](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L188) |
| <a id="externalid"></a> `externalId?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:191](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L191) |
| <a id="mlsnumber"></a> `mlsNumber?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/property-config.schema.ts#L192) |
