[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyCatalog

# Type Alias: PropertyCatalog

```ts
type PropertyCatalog = {
  propertyCategory: {
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
  items: {
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
  }[];
};
```

Defined in: src/core/business-mgt/property-config.schema.ts:275

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="propertycategory"></a> `propertyCategory` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `organizationId`: `string`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; `isDefault`: `boolean`; \} | `PropertyCategorySchema` | src/core/business-mgt/property-config.schema.ts:269 |
| `propertyCategory.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/base.schema.ts#L8) |
| `propertyCategory.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/base.schema.ts#L9) |
| `propertyCategory.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/base.schema.ts#L10) |
| `propertyCategory.organizationId` | `string` | - | src/core/business-mgt/property-config.schema.ts:30 |
| `propertyCategory.name` | `string` | - | src/core/business-mgt/property-config.schema.ts:31 |
| `propertyCategory.description?` | `string` | - | src/core/business-mgt/property-config.schema.ts:32 |
| `propertyCategory.propertyType` | [`PropertyType`](../../type-definitions/enumerations/PropertyType.md) | - | src/core/business-mgt/property-config.schema.ts:33 |
| `propertyCategory.displayOrder?` | `number` | - | src/core/business-mgt/property-config.schema.ts:34 |
| `propertyCategory.isDefault` | `boolean` | - | src/core/business-mgt/property-config.schema.ts:35 |
| <a id="items"></a> `items` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `organizationId`: `string`; `categoryId`: `string`; `category?`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `organizationId`: `string`; `name`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `displayOrder?`: `number`; `isDefault`: `boolean`; \}; `title`: `string`; `description?`: `string`; `propertyType`: [`PropertyType`](../../type-definitions/enumerations/PropertyType.md); `propertySubType`: [`PropertySubType`](../../type-definitions/enumerations/PropertySubType.md); `addressId`: `string`; `address?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `organizationId`: `string`; `street`: `string`; `unit?`: `string` \| `null`; `city`: `string`; `state`: `string`; `postalCode?`: `string` \| `null`; `country`: `string`; `coordinates?`: \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null`; `neighborhood?`: `string` \| `null`; `district?`: `string` \| `null`; `isVerified`: `boolean`; `verifiedAt?`: `number` \| `null`; `primaryUserAccountId?`: `string` \| `null`; \} \| `null`; `listingType`: [`ListingType`](../../type-definitions/enumerations/ListingType.md); `listingStatus`: [`ListingStatus`](../../type-definitions/enumerations/ListingStatus.md); `salePrice?`: `number` \| `null`; `salePriceCurrency`: `string`; `rentalPrice?`: `number` \| `null`; `rentalPeriod?`: \| [`DAILY`](../../type-definitions/enumerations/RentalPeriod.md#daily) \| [`WEEKLY`](../../type-definitions/enumerations/RentalPeriod.md#weekly) \| [`MONTHLY`](../../type-definitions/enumerations/RentalPeriod.md#monthly) \| [`YEARLY`](../../type-definitions/enumerations/RentalPeriod.md#yearly) \| `null`; `rentalPriceCurrency`: `string`; `priceNegotiable`: `boolean`; `features?`: \{ `bedrooms?`: `number` \| `null`; `bathrooms?`: `number` \| `null`; `parkingSpaces?`: `number` \| `null`; `squareFootage?`: `number` \| `null`; `lotSize?`: `number` \| `null`; `lotSizeUnit`: `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"`; `yearBuilt?`: `number` \| `null`; `floors?`: `number` \| `null`; `amenities`: `string`[]; `utilities`: `string`[]; \}; `condition?`: \| [`NEW`](../../type-definitions/enumerations/PropertyCondition.md#new) \| [`EXCELLENT`](../../type-definitions/enumerations/PropertyCondition.md#excellent) \| [`GOOD`](../../type-definitions/enumerations/PropertyCondition.md#good) \| [`FAIR`](../../type-definitions/enumerations/PropertyCondition.md#fair) \| [`NEEDS_WORK`](../../type-definitions/enumerations/PropertyCondition.md#needs_work) \| `null`; `furnished`: `boolean`; `images`: `string`[]; `virtualTourUrl?`: `string` \| `null`; `videoUrl?`: `string` \| `null`; `availableFrom?`: `number` \| `null`; `availableTo?`: `number` \| `null`; `isActive`: `boolean`; `isFeatured`: `boolean`; `isVerified`: `boolean`; `externalId?`: `string` \| `null`; `mlsNumber?`: `string` \| `null`; \}[] | - | src/core/business-mgt/property-config.schema.ts:270 |
