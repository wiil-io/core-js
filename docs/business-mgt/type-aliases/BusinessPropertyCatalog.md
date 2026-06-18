[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessPropertyCatalog

# Type Alias: BusinessPropertyCatalog

```ts
type BusinessPropertyCatalog = {
  propertyCategory: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     name: string;
     description?: string;
     propertyType: PropertyType;
     displayOrder?: number;
     isDefault: boolean;
  };
  items: {
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
  }[];
}[];
```

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:427](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L427)

Business Property Catalog schema.
Full property catalog array.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `propertyCategory` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; `isDefault`: `boolean`; \} | `PropertyCategorySchema` | [src/core/business-mgt/property-management/property-config.schema.ts:416](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L416) |
| `propertyCategory.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L8) |
| `propertyCategory.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L9) |
| `propertyCategory.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L10) |
| `propertyCategory.name` | `string` | - | [src/core/business-mgt/property-management/property-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L37) |
| `propertyCategory.description?` | `string` | - | [src/core/business-mgt/property-management/property-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L38) |
| `propertyCategory.propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | - | [src/core/business-mgt/property-management/property-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L39) |
| `propertyCategory.displayOrder?` | `number` | - | [src/core/business-mgt/property-management/property-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L40) |
| `propertyCategory.isDefault` | `boolean` | - | [src/core/business-mgt/property-management/property-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L41) |
| `items` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `categoryId`: `string`; `category?`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; `isDefault`: `boolean`; \}; `title`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `propertySubType`: [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md); `addressId`: `string`; `address?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `street`: `string`; `unit?`: `string` \| `null`; `city`: `string`; `state`: `string`; `postalCode?`: `string` \| `null`; `country`: `string`; `coordinates?`: \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null`; `neighborhood?`: `string` \| `null`; `district?`: `string` \| `null`; `isVerified`: `boolean`; `verifiedAt?`: `number` \| `null`; `primaryUserAccountId?`: `string` \| `null`; \} \| `null`; `listingType`: [`ListingType`](../../type-definitions/enumerations/ListingType.md); `listingStatus`: [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md); `salePrice?`: `number` \| `null`; `salePriceCurrency`: `string`; `rentalPrice?`: `number` \| `null`; `rentalPeriod?`: \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null`; `rentalPriceCurrency`: `string`; `priceNegotiable`: `boolean`; `features?`: \{ `parkingSpaces?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \}; `condition?`: \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null`; `furnished`: `boolean`; `images`: `string`[]; `virtualTourUrl?`: `string` \| `null`; `videoUrl?`: `string` \| `null`; `availableFrom?`: `number` \| `null`; `availableTo?`: `number` \| `null`; `isActive`: `boolean`; `isFeatured`: `boolean`; `isVerified`: `boolean`; `externalId?`: `string` \| `null`; `mlsNumber?`: `string` \| `null`; `residentialDetails?`: \| \{ `bedrooms`: `number`; `bathrooms`: `number`; `halfBaths?`: `number` \| `null`; `squareFootage`: `number`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `basementType?`: `"none"` \| `"partial"` \| `"unfinished"` \| `"finished"` \| `null`; `atticFinished?`: `boolean` \| `null`; `heatingType?`: `string` \| `null`; `coolingType?`: `string` \| `null`; `roofType?`: `string` \| `null`; `exteriorMaterial?`: `string` \| `null`; `garageSpaces?`: `number` \| `null`; `hasPool`: `boolean`; `hasFireplace`: `boolean`; \} \| `null`; `commercialDetails?`: \| \{ `squareFootage`: `number`; `usableSquareFootage?`: `number` \| `null`; `floors?`: `number` \| `null`; `ceilingHeight?`: `number` \| `null`; `loadingDocks?`: `number` \| `null`; `driveInDoors?`: `number` \| `null`; `freightElevator`: `boolean`; `passengerElevator`: `boolean`; `zoningType`: `string`; `yearBuilt?`: `number` \| `null`; `previousUse?`: `string` \| `null`; `buildOutStatus?`: `"partial"` \| `"shell"` \| `"turnkey"` \| `null`; `hvacType?`: `string` \| `null`; `powerCapacity?`: `string` \| `null`; `sprinklerSystem`: `boolean`; \} \| `null`; `landDetails?`: \| \{ `lotSize`: `number`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `zoning`: `string`; `topography?`: `"flat"` \| `"sloped"` \| `"hilly"` \| `"mixed"` \| `null`; `roadFrontage?`: `number` \| `null`; `roadAccess?`: `"none"` \| `"paved"` \| `"gravel"` \| `"dirt"` \| `null`; `utilitiesAvailable`: `string`[]; `waterSource?`: `"none"` \| `"unknown"` \| `"municipal"` \| `"well"` \| `null`; `sewerType?`: `"none"` \| `"unknown"` \| `"municipal"` \| `"septic"` \| `null`; `soilType?`: `string` \| `null`; `floodZone`: `boolean`; `floodZoneDesignation?`: `string` \| `null`; `easements?`: `string` \| `null`; `surveyAvailable`: `boolean`; `mineralRights?`: `"partial"` \| `"unknown"` \| `"included"` \| `"excluded"` \| `null`; `timberValue?`: `number` \| `null`; \} \| `null`; \}[] | - | [src/core/business-mgt/property-management/property-config.schema.ts:417](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/property-management/property-config.schema.ts#L417) |
