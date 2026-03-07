import z from "zod";
import { PropertyType, PropertySubType, ListingType, ListingStatus, PropertyCondition, RentalPeriod } from "../type-definitions";
/**
 * @fileoverview Property configuration schema definitions for real estate management.
 * @module business-mgt/property-config
 */
/**
 * Property category schema.
 *
 * @typedef {Object} PropertyCategory
 * @property {string} name - Category name (e.g., Luxury Homes, Commercial Offices)
 * @property {string} [description] - Category description
 * @property {PropertyType} propertyType - Type of property (residential, commercial, land)
 * @property {number} [displayOrder] - Display order in listing
 * @property {boolean} isDefault - Whether this is the default category
 */
export declare const PropertyCategorySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    propertyType: z.ZodEnum<typeof PropertyType>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Property address schema (standalone entity).
 *
 * @typedef {Object} PropertyAddress
 * @property {string} street - Street address
 * @property {string} [unit] - Unit or apartment number
 * @property {string} city - City name
 * @property {string} state - State or province
 * @property {string} [postalCode] - Postal or ZIP code
 * @property {string} country - Country
 * @property {Object} [coordinates] - Geographic coordinates
 * @property {string} [neighborhood] - Neighborhood or district name
 * @property {string} [district] - Administrative district
 * @property {boolean} isVerified - Whether address has been verified
 * @property {number} [verifiedAt] - Timestamp when address was verified
 * @property {string} [primaryUserAccountId] - User account managing the property
 */
export declare const PropertyAddressSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    street: z.ZodString;
    unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    coordinates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>>;
    neighborhood: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    district: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isVerified: z.ZodDefault<z.ZodBoolean>;
    verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    primaryUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Property features schema.
 *
 * @typedef {Object} PropertyFeatures
 * @property {number} [bedrooms] - Number of bedrooms
 * @property {number} [bathrooms] - Number of bathrooms
 * @property {number} [parkingSpaces] - Number of parking spaces
 * @property {number} [squareFootage] - Total square footage
 * @property {number} [lotSize] - Lot size
 * @property {string} lotSizeUnit - Unit for lot size (sqft, acres, sqm, hectares)
 * @property {number} [yearBuilt] - Year the property was built
 * @property {number} [floors] - Number of floors
 * @property {string[]} amenities - List of amenities
 * @property {string[]} utilities - Available utilities
 */
export declare const PropertyFeaturesSchema: z.ZodObject<{
    bedrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    bathrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    squareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lotSizeUnit: z.ZodDefault<z.ZodEnum<{
        sqft: "sqft";
        acres: "acres";
        sqm: "sqm";
        hectares: "hectares";
    }>>;
    yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    utilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
/**
 * Main property schema for real estate listings.
 *
 * @typedef {Object} Property
 * @property {string} categoryId - ID of the category this property belongs to
 * @property {Object} [category] - Property category (populated)
 * @property {string} title - Property listing title
 * @property {string} [description] - Detailed property description
 * @property {PropertyType} propertyType - Type of property
 * @property {PropertySubType} propertySubType - Subtype of property
 * @property {string} addressId - ID of the property address
 * @property {Object} [address] - Property address (populated)
 * @property {ListingType} listingType - Type of listing (sale, rent, or both)
 * @property {ListingStatus} listingStatus - Current listing status
 * @property {number} [salePrice] - Sale price
 * @property {string} salePriceCurrency - Currency for sale price
 * @property {number} [rentalPrice] - Rental price
 * @property {RentalPeriod} [rentalPeriod] - Rental period
 * @property {string} rentalPriceCurrency - Currency for rental price
 * @property {boolean} priceNegotiable - Whether price is negotiable
 * @property {Object} [features] - Property features
 * @property {PropertyCondition} [condition] - Property condition
 * @property {boolean} furnished - Whether property is furnished
 * @property {string[]} images - Array of image URLs
 * @property {string} [virtualTourUrl] - Virtual tour URL
 * @property {string} [videoUrl] - Video tour URL
 * @property {number} [availableFrom] - Available from date (timestamp)
 * @property {number} [availableTo] - Available until date (timestamp)
 * @property {boolean} isActive - Whether property is active in listings
 * @property {boolean} isFeatured - Whether property is featured
 * @property {boolean} isVerified - Whether property has been verified
 * @property {string} [externalId] - External system reference ID
 * @property {string} [mlsNumber] - MLS listing number
 */
export declare const PropertySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    categoryId: z.ZodString;
    category: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        propertyType: z.ZodEnum<typeof PropertyType>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    propertyType: z.ZodEnum<typeof PropertyType>;
    propertySubType: z.ZodEnum<typeof PropertySubType>;
    addressId: z.ZodString;
    address: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        street: z.ZodString;
        unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country: z.ZodString;
        coordinates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, z.core.$strip>>>;
        neighborhood: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        district: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isVerified: z.ZodDefault<z.ZodBoolean>;
        verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        primaryUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    listingType: z.ZodEnum<typeof ListingType>;
    listingStatus: z.ZodDefault<z.ZodEnum<typeof ListingStatus>>;
    salePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    salePriceCurrency: z.ZodDefault<z.ZodString>;
    rentalPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rentalPeriod: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof RentalPeriod>>>;
    rentalPriceCurrency: z.ZodDefault<z.ZodString>;
    priceNegotiable: z.ZodDefault<z.ZodBoolean>;
    features: z.ZodOptional<z.ZodObject<{
        bedrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        bathrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        squareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
        utilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    condition: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PropertyCondition>>>;
    furnished: z.ZodDefault<z.ZodBoolean>;
    images: z.ZodDefault<z.ZodArray<z.ZodString>>;
    virtualTourUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    videoUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    availableFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    availableTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    isFeatured: z.ZodDefault<z.ZodBoolean>;
    isVerified: z.ZodDefault<z.ZodBoolean>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mlsNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new property category.
 * Omits auto-generated fields.
 */
export declare const CreatePropertyCategorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    propertyType: z.ZodEnum<typeof PropertyType>;
}, z.core.$strip>;
/**
 * Schema for updating an existing property category.
 * All fields are optional except id.
 */
export declare const UpdatePropertyCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    propertyType: z.ZodOptional<z.ZodEnum<typeof PropertyType>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new property address.
 * Omits auto-generated fields.
 */
export declare const CreatePropertyAddressSchema: z.ZodObject<{
    street: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coordinates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>>;
    neighborhood: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    district: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isVerified: z.ZodDefault<z.ZodBoolean>;
    primaryUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing property address.
 * All fields are optional except id.
 */
export declare const UpdatePropertyAddressSchema: z.ZodObject<{
    street: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    country: z.ZodOptional<z.ZodString>;
    unit: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    coordinates: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>>>;
    neighborhood: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    district: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isVerified: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    primaryUserAccountId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new property listing.
 * Omits auto-generated fields and populated objects.
 */
export declare const CreatePropertySchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    title: z.ZodString;
    condition: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PropertyCondition>>>;
    categoryId: z.ZodString;
    propertyType: z.ZodEnum<typeof PropertyType>;
    isVerified: z.ZodDefault<z.ZodBoolean>;
    propertySubType: z.ZodEnum<typeof PropertySubType>;
    addressId: z.ZodString;
    listingType: z.ZodEnum<typeof ListingType>;
    listingStatus: z.ZodDefault<z.ZodEnum<typeof ListingStatus>>;
    salePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    salePriceCurrency: z.ZodDefault<z.ZodString>;
    rentalPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rentalPeriod: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof RentalPeriod>>>;
    rentalPriceCurrency: z.ZodDefault<z.ZodString>;
    priceNegotiable: z.ZodDefault<z.ZodBoolean>;
    features: z.ZodOptional<z.ZodObject<{
        bedrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        bathrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        squareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
        utilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    furnished: z.ZodDefault<z.ZodBoolean>;
    images: z.ZodDefault<z.ZodArray<z.ZodString>>;
    virtualTourUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    videoUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    availableFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    availableTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isFeatured: z.ZodDefault<z.ZodBoolean>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mlsNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing property listing.
 * All fields are optional except id.
 */
export declare const UpdatePropertySchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    title: z.ZodOptional<z.ZodString>;
    condition: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PropertyCondition>>>>;
    categoryId: z.ZodOptional<z.ZodString>;
    propertyType: z.ZodOptional<z.ZodEnum<typeof PropertyType>>;
    isVerified: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    propertySubType: z.ZodOptional<z.ZodEnum<typeof PropertySubType>>;
    addressId: z.ZodOptional<z.ZodString>;
    listingType: z.ZodOptional<z.ZodEnum<typeof ListingType>>;
    listingStatus: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ListingStatus>>>;
    salePrice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    salePriceCurrency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    rentalPrice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    rentalPeriod: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof RentalPeriod>>>>;
    rentalPriceCurrency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    priceNegotiable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    features: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        bedrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        bathrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        squareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
        utilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    furnished: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    images: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    virtualTourUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodURL>>>;
    videoUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodURL>>>;
    availableFrom: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    availableTo: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    isFeatured: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    externalId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    mlsNumber: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type PropertyCategory = z.infer<typeof PropertyCategorySchema>;
export type CreatePropertyCategory = z.infer<typeof CreatePropertyCategorySchema>;
export type UpdatePropertyCategory = z.infer<typeof UpdatePropertyCategorySchema>;
export type PropertyAddress = z.infer<typeof PropertyAddressSchema>;
export type CreatePropertyAddress = z.infer<typeof CreatePropertyAddressSchema>;
export type UpdatePropertyAddress = z.infer<typeof UpdatePropertyAddressSchema>;
export type PropertyFeatures = z.infer<typeof PropertyFeaturesSchema>;
export type Property = z.infer<typeof PropertySchema>;
export type CreateProperty = z.infer<typeof CreatePropertySchema>;
export type UpdateProperty = z.infer<typeof UpdatePropertySchema>;
export declare const PropertyCatalogSchema: z.ZodObject<{
    propertyCategory: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        propertyType: z.ZodEnum<typeof PropertyType>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        categoryId: z.ZodString;
        category: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            propertyType: z.ZodEnum<typeof PropertyType>;
            displayOrder: z.ZodOptional<z.ZodNumber>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        propertyType: z.ZodEnum<typeof PropertyType>;
        propertySubType: z.ZodEnum<typeof PropertySubType>;
        addressId: z.ZodString;
        address: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            street: z.ZodString;
            unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            city: z.ZodString;
            state: z.ZodString;
            postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            country: z.ZodString;
            coordinates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                latitude: z.ZodNumber;
                longitude: z.ZodNumber;
            }, z.core.$strip>>>;
            neighborhood: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            district: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVerified: z.ZodDefault<z.ZodBoolean>;
            verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            primaryUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        listingType: z.ZodEnum<typeof ListingType>;
        listingStatus: z.ZodDefault<z.ZodEnum<typeof ListingStatus>>;
        salePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        salePriceCurrency: z.ZodDefault<z.ZodString>;
        rentalPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rentalPeriod: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof RentalPeriod>>>;
        rentalPriceCurrency: z.ZodDefault<z.ZodString>;
        priceNegotiable: z.ZodDefault<z.ZodBoolean>;
        features: z.ZodOptional<z.ZodObject<{
            bedrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            bathrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            squareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lotSizeUnit: z.ZodDefault<z.ZodEnum<{
                sqft: "sqft";
                acres: "acres";
                sqm: "sqm";
                hectares: "hectares";
            }>>;
            yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
            utilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        condition: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PropertyCondition>>>;
        furnished: z.ZodDefault<z.ZodBoolean>;
        images: z.ZodDefault<z.ZodArray<z.ZodString>>;
        virtualTourUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        videoUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        availableFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        availableTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        isFeatured: z.ZodDefault<z.ZodBoolean>;
        isVerified: z.ZodDefault<z.ZodBoolean>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mlsNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const BusinessPropertyCatalogSchema: z.ZodArray<z.ZodObject<{
    propertyCategory: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        propertyType: z.ZodEnum<typeof PropertyType>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        categoryId: z.ZodString;
        category: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            propertyType: z.ZodEnum<typeof PropertyType>;
            displayOrder: z.ZodOptional<z.ZodNumber>;
            isDefault: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        propertyType: z.ZodEnum<typeof PropertyType>;
        propertySubType: z.ZodEnum<typeof PropertySubType>;
        addressId: z.ZodString;
        address: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            street: z.ZodString;
            unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            city: z.ZodString;
            state: z.ZodString;
            postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            country: z.ZodString;
            coordinates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                latitude: z.ZodNumber;
                longitude: z.ZodNumber;
            }, z.core.$strip>>>;
            neighborhood: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            district: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVerified: z.ZodDefault<z.ZodBoolean>;
            verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            primaryUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        listingType: z.ZodEnum<typeof ListingType>;
        listingStatus: z.ZodDefault<z.ZodEnum<typeof ListingStatus>>;
        salePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        salePriceCurrency: z.ZodDefault<z.ZodString>;
        rentalPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rentalPeriod: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof RentalPeriod>>>;
        rentalPriceCurrency: z.ZodDefault<z.ZodString>;
        priceNegotiable: z.ZodDefault<z.ZodBoolean>;
        features: z.ZodOptional<z.ZodObject<{
            bedrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            bathrooms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            squareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lotSizeUnit: z.ZodDefault<z.ZodEnum<{
                sqft: "sqft";
                acres: "acres";
                sqm: "sqm";
                hectares: "hectares";
            }>>;
            yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
            utilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        condition: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PropertyCondition>>>;
        furnished: z.ZodDefault<z.ZodBoolean>;
        images: z.ZodDefault<z.ZodArray<z.ZodString>>;
        virtualTourUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        videoUrl: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        availableFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        availableTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        isFeatured: z.ZodDefault<z.ZodBoolean>;
        isVerified: z.ZodDefault<z.ZodBoolean>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mlsNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type PropertyCatalog = z.infer<typeof PropertyCatalogSchema>;
export type BusinessPropertyCatalog = z.infer<typeof BusinessPropertyCatalogSchema>;
export interface PropertyFilters {
    search?: string;
    categoryId?: string;
    addressIds?: string[];
    address?: PropertyAddressFilters;
    propertyType?: PropertyType;
    propertySubType?: PropertySubType;
    listingType?: ListingType;
    listingStatus?: ListingStatus[];
    isActive?: boolean;
    isFeatured?: boolean;
    isVerified?: boolean;
    condition?: PropertyCondition;
    furnished?: boolean;
    priceRange?: {
        min?: number;
        max?: number;
    };
    bedroomsRange?: {
        min?: number;
        max?: number;
    };
    bathroomsRange?: {
        min?: number;
        max?: number;
    };
    squareFootageRange?: {
        min?: number;
        max?: number;
    };
    includeDeleted?: boolean;
}
export interface PropertySorting {
    field: 'title' | 'salePrice' | 'rentalPrice' | 'createdAt' | 'displayOrder' | 'squareFootage';
    direction: 'asc' | 'desc';
}
export interface PropertyQueryOptions {
    page: number;
    pageSize: number;
    filters?: PropertyFilters;
    sorting?: PropertySorting;
}
export interface PropertyAddressFilters {
    search?: string;
    city?: string;
    state?: string;
    country?: string;
    neighborhood?: string;
    district?: string;
    geolocation?: {
        latitude: number;
        longitude: number;
        radiusKm: number;
    };
    isVerified?: boolean;
    includeDeleted?: boolean;
}
export interface PropertyAddressSorting {
    field: 'street' | 'city' | 'state' | 'country' | 'createdAt';
    direction: 'asc' | 'desc';
}
export interface PropertyAddressQueryOptions {
    page: number;
    pageSize: number;
    filters?: PropertyAddressFilters;
    sorting?: PropertyAddressSorting;
}
