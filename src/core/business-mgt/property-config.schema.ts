import z from "zod";
import { BaseModelSchema } from "../base.schema";
import {
    PropertyType,
    PropertySubType,
    ListingType,
    ListingStatus,
    PropertyCondition,
    RentalPeriod,
    BusinessServiceDocumentTypes
} from "../type-definitions";

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
export const PropertyCategorySchema = BaseModelSchema.safeExtend({
    name: z.string().min(1, "Category name is required").describe("Category name (e.g., Luxury Homes, Commercial Offices)"),
    description: z.string().optional().describe("Category description"),
    propertyType: z.enum(PropertyType).describe("Type of property (residential, commercial, land)"),
    displayOrder: z.number().int().optional().describe("Display order in listing"),
    isDefault: z.boolean().default(false).describe("Whether this is the default category"),
});

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
export const PropertyAddressSchema = BaseModelSchema.safeExtend({
    street: z.string().min(1, "Street address is required").describe("Street address"),
    unit: z.string().nullable().optional().describe("Unit or apartment number"),
    city: z.string().min(1, "City is required").describe("City name"),
    state: z.string().min(1, "State is required").describe("State or province"),
    postalCode: z.string().nullable().optional().describe("Postal or ZIP code"),
    country: z.string().min(1, "Country is required").describe("Country"),
    coordinates: z.object({
        latitude: z.number().min(-90).max(90).describe("Latitude coordinate"),
        longitude: z.number().min(-180).max(180).describe("Longitude coordinate"),
    }).nullable().optional().describe("Geographic coordinates"),
    neighborhood: z.string().nullable().optional().describe("Neighborhood or district name"),
    district: z.string().nullable().optional().describe("Administrative district"),
    isVerified: z.boolean().default(false).describe("Whether address has been verified"),
    verifiedAt: z.number().nullable().optional().describe("Timestamp when address was verified"),
    primaryUserAccountId: z.string().nullable().optional().describe("User account managing the property at this address"),
});

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
export const PropertyFeaturesSchema = z.object({
    bedrooms: z.number().int().nonnegative().nullable().optional().describe("Number of bedrooms"),
    bathrooms: z.number().nonnegative().nullable().optional().describe("Number of bathrooms"),
    parkingSpaces: z.number().int().nonnegative().nullable().optional().describe("Number of parking spaces"),
    squareFootage: z.number().positive().nullable().optional().describe("Total square footage"),
    lotSize: z.number().positive().nullable().optional().describe("Lot size in square feet or acres"),
    lotSizeUnit: z.enum(['sqft', 'acres', 'sqm', 'hectares']).default('sqft').describe("Unit for lot size"),
    yearBuilt: z.number().int().min(1800).max(2100).nullable().optional().describe("Year the property was built"),
    floors: z.number().int().positive().nullable().optional().describe("Number of floors"),
    amenities: z.array(z.string()).default([]).describe("List of amenities (pool, gym, etc.)"),
    utilities: z.array(z.string()).default([]).describe("Available utilities (gas, electric, water, etc.)"),
});

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
export const PropertySchema = BaseModelSchema.safeExtend({
    categoryId: z.string().describe("ID of the category this property belongs to"),
    category: PropertyCategorySchema.optional().describe("Property category"),

    // Basic Info
    title: z.string().min(1, "Property title is required").describe("Property listing title"),
    description: z.string().optional().describe("Detailed property description"),
    propertyType: z.enum(PropertyType).describe("Type of property"),
    propertySubType: z.enum(PropertySubType).describe("Subtype of property"),

    // Location
    addressId: z.string().describe("ID of the property address"),
    address: PropertyAddressSchema.nullable().optional().describe("Property address (populated)"),

    // Listing Info
    listingType: z.enum(ListingType).describe("Type of listing (sale, rent, or both)"),
    listingStatus: z.enum(ListingStatus).default(ListingStatus.DRAFT).describe("Current listing status"),

    // Sale Pricing
    salePrice: z.number().nonnegative().nullable().optional().describe("Sale price"),
    salePriceCurrency: z.string().default('USD').describe("Currency for sale price"),

    // Rental Pricing
    rentalPrice: z.number().nonnegative().nullable().optional().describe("Rental price"),
    rentalPeriod: z.enum(RentalPeriod).nullable().optional().describe("Rental period (daily, weekly, monthly, yearly)"),
    rentalPriceCurrency: z.string().default('USD').describe("Currency for rental price"),

    // Pricing Options
    priceNegotiable: z.boolean().default(false).describe("Whether price is negotiable"),

    // Features
    features: PropertyFeaturesSchema.optional().describe("Property features"),

    // Condition
    condition: z.enum(PropertyCondition).nullable().optional().describe("Property condition"),
    furnished: z.boolean().default(false).describe("Whether property is furnished"),

    // Media
    images: z.array(z.string()).default([]).describe("Array of image URLs"),
    virtualTourUrl: z.url().nullable().optional().describe("Virtual tour URL"),
    videoUrl: z.url().nullable().optional().describe("Video tour URL"),

    // Availability
    availableFrom: z.number().nullable().optional().describe("Available from date (timestamp)"),
    availableTo: z.number().nullable().optional().describe("Available until date (timestamp) - for rentals"),

    // Flags
    isActive: z.boolean().default(true).describe("Whether property is active in listings"),
    isFeatured: z.boolean().default(false).describe("Whether property is featured"),
    isVerified: z.boolean().default(false).describe("Whether property has been verified"),

    // Reference
    externalId: z.string().nullable().optional().describe("External system reference ID"),
    mlsNumber: z.string().nullable().optional().describe("MLS listing number"),
});

/**
 * Schema for creating a new property category.
 * Omits auto-generated fields.
 */
export const CreatePropertyCategorySchema = PropertyCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing property category.
 * All fields are optional except id.
 */
export const UpdatePropertyCategorySchema = CreatePropertyCategorySchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Schema for creating a new property address.
 * Omits auto-generated fields.
 */
export const CreatePropertyAddressSchema = PropertyAddressSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    verifiedAt: true,
});

/**
 * Schema for updating an existing property address.
 * All fields are optional except id.
 */
export const UpdatePropertyAddressSchema = CreatePropertyAddressSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Schema for creating a new property listing.
 * Omits auto-generated fields and populated objects.
 */
export const CreatePropertySchema = PropertySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    address: true,
});

/**
 * Schema for updating an existing property listing.
 * All fields are optional except id.
 */
export const UpdatePropertySchema = CreatePropertySchema.partial().safeExtend({
    id: z.string(),
});

// Type Exports
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

// Catalog Schema
export const PropertyCatalogSchema = z.object({
    propertyCategory: PropertyCategorySchema,
    items: z.array(PropertySchema).describe("List of properties in this category"),
}).describe("Schema representing a property category and its listings");

export const BusinessPropertyCatalogSchema = z.array(PropertyCatalogSchema).describe("Schema representing a business property catalog");

export type PropertyCatalog = z.infer<typeof PropertyCatalogSchema>;
export type BusinessPropertyCatalog = z.infer<typeof BusinessPropertyCatalogSchema>;



// Query Options
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
    priceRange?: { min?: number; max?: number };
    bedroomsRange?: { min?: number; max?: number };
    bathroomsRange?: { min?: number; max?: number };
    squareFootageRange?: { min?: number; max?: number };
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



