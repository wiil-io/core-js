[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

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
  }[];
}[];
```

Defined in: [src/core/business-mgt/property-config.schema.ts:269](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L269)

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `propertyCategory` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; \} | `PropertyCategorySchema` | [src/core/business-mgt/property-config.schema.ts:262](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L262) |
| `propertyCategory.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L8) |
| `propertyCategory.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L9) |
| `propertyCategory.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L10) |
| `propertyCategory.name` | `string` | - | [src/core/business-mgt/property-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L29) |
| `propertyCategory.description?` | `string` | - | [src/core/business-mgt/property-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L30) |
| `propertyCategory.propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | - | [src/core/business-mgt/property-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L31) |
| `propertyCategory.displayOrder?` | `number` | - | [src/core/business-mgt/property-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L32) |
| `items` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `categoryId`: `string`; `category?`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; \}; `title`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `propertySubType`: [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md); `addressId`: `string`; `address?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `street`: `string`; `unit?`: `string` \| `null`; `city`: `string`; `state`: `string`; `postalCode?`: `string` \| `null`; `country`: `string`; `coordinates?`: \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null`; `neighborhood?`: `string` \| `null`; `district?`: `string` \| `null`; `isVerified`: `boolean`; `verifiedAt?`: `number` \| `null`; `primaryUserAccountId?`: `string` \| `null`; \} \| `null`; `listingType`: [`ListingType`](../../type-definitions/enumerations/ListingType.md); `listingStatus`: [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md); `salePrice?`: `number` \| `null`; `salePriceCurrency`: `string`; `rentalPrice?`: `number` \| `null`; `rentalPeriod?`: \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null`; `rentalPriceCurrency`: `string`; `priceNegotiable`: `boolean`; `features?`: \{ `bedrooms?`: `number` \| `null`; `bathrooms?`: `number` \| `null`; `parkingSpaces?`: `number` \| `null`; `squareFootage?`: `number` \| `null`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \}; `condition?`: \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null`; `furnished`: `boolean`; `images`: `string`[]; `virtualTourUrl?`: `string` \| `null`; `videoUrl?`: `string` \| `null`; `availableFrom?`: `number` \| `null`; `availableTo?`: `number` \| `null`; `isActive`: `boolean`; `isFeatured`: `boolean`; `isVerified`: `boolean`; `externalId?`: `string` \| `null`; `mlsNumber?`: `string` \| `null`; \}[] | - | [src/core/business-mgt/property-config.schema.ts:263](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L263) |
