import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../type-definitions/display-order";
import {
    PropertyType,
    PropertySubType,
    ListingType,
    ListingStatus,
    PropertyCondition,
    RentalPeriod,
} from "../../type-definitions";

/**
 * @fileoverview Property configuration schema definitions for property management.
 * @module business-mgt/property-management
 *
 * Property management schemas for real estate listings including residential,
 * commercial, and land properties with categories, addresses, and type-specific details.
 */

// ============================================================================
// PROPERTY CATEGORY SCHEMA
// ============================================================================

/**
 * Property category schema.
 * Organizes properties into logical groups (e.g., Luxury Homes, Commercial Offices).
 *
 * @typedef {Object} PropertyCategory
 * @property {string} name - Category name
 * @property {string} [description] - Category description
 * @property {PropertyType} propertyType - Type of property
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

// ============================================================================
// PROPERTY ADDRESS SCHEMA
// ============================================================================

/**
 * Property address schema.
 * Standalone address entity for property locations with verification support.
 *
 * @typedef {Object} PropertyAddress
 * @property {string} street - Street address
 * @property {string} [unit] - Unit or apartment number
 * @property {string} city - City name
 * @property {string} state - State or province
 * @property {string} [postalCode] - Postal or ZIP code
 * @property {string} country - Country
 * @property {Object} [coordinates] - Geographic coordinates
 * @property {string} [neighborhood] - Neighborhood name
 * @property {string} [district] - Administrative district
 * @property {boolean} isVerified - Whether address is verified
 * @property {number} [verifiedAt] - Verification timestamp
 * @property {string} [primaryUserAccountId] - User account managing property
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

// ============================================================================
// PROPERTY DETAILS SCHEMAS
// ============================================================================

/**
 * Property features schema.
 * Shared features across all property types.
 *
 * @typedef {Object} PropertyFeatures
 * @property {number} [parkingSpaces] - Number of parking spaces
 * @property {string[]} amenities - List of amenities
 * @property {string[]} utilities - Available utilities
 */
export const PropertyFeaturesSchema = z.object({
    parkingSpaces: z.number().int().nonnegative().nullable().optional().describe("Number of parking spaces"),
    amenities: z.array(z.string()).default([]).describe("List of amenities (pool, gym, etc.)"),
    utilities: z.array(z.string()).default([]).describe("Available utilities (gas, electric, water, etc.)"),
});

/**
 * Residential details schema.
 * Details for houses, apartments, condos, townhouses, villas.
 *
 * @typedef {Object} ResidentialDetails
 * @property {number} bedrooms - Number of bedrooms
 * @property {number} bathrooms - Number of bathrooms
 * @property {number} [halfBaths] - Number of half bathrooms
 * @property {number} squareFootage - Total square footage
 * @property {number} [lotSize] - Lot size
 * @property {string} lotSizeUnit - Unit for lot size
 * @property {number} [yearBuilt] - Year built
 * @property {number} [floors] - Number of floors
 * @property {string} [basementType] - Basement type
 * @property {boolean} [atticFinished] - Whether attic is finished
 * @property {string} [heatingType] - Heating system type
 * @property {string} [coolingType] - Cooling system type
 * @property {string} [roofType] - Roof material
 * @property {string} [exteriorMaterial] - Exterior material
 * @property {number} [garageSpaces] - Number of garage spaces
 * @property {boolean} hasPool - Whether has pool
 * @property {boolean} hasFireplace - Whether has fireplace
 */
export const ResidentialDetailsSchema = z.object({
    bedrooms: z.number().int().nonnegative().describe("Number of bedrooms"),
    bathrooms: z.number().nonnegative().describe("Number of bathrooms"),
    halfBaths: z.number().int().nonnegative().nullable().optional().describe("Number of half bathrooms"),
    squareFootage: z.number().positive().describe("Total square footage"),
    lotSize: z.number().positive().nullable().optional().describe("Lot size"),
    lotSizeUnit: z.enum(['sqft', 'acres', 'sqm', 'hectares']).default('sqft').describe("Unit for lot size"),
    yearBuilt: z.number().int().min(1800).max(2100).nullable().optional().describe("Year the property was built"),
    floors: z.number().int().positive().nullable().optional().describe("Number of floors"),
    basementType: z.enum(['none', 'unfinished', 'partial', 'finished']).nullable().optional().describe("Basement type"),
    atticFinished: z.boolean().nullable().optional().describe("Whether attic is finished"),
    heatingType: z.string().nullable().optional().describe("Heating system type (e.g., forced air, radiant)"),
    coolingType: z.string().nullable().optional().describe("Cooling system type (e.g., central, window)"),
    roofType: z.string().nullable().optional().describe("Roof material (e.g., shingle, tile, metal)"),
    exteriorMaterial: z.string().nullable().optional().describe("Exterior material (e.g., brick, vinyl, stucco)"),
    garageSpaces: z.number().int().nonnegative().nullable().optional().describe("Number of garage spaces"),
    hasPool: z.boolean().default(false).describe("Whether property has a pool"),
    hasFireplace: z.boolean().default(false).describe("Whether property has a fireplace"),
});

/**
 * Commercial details schema.
 * Details for office, retail, warehouse, industrial properties.
 *
 * @typedef {Object} CommercialDetails
 * @property {number} squareFootage - Total square footage
 * @property {number} [usableSquareFootage] - Usable square footage
 * @property {number} [floors] - Number of floors
 * @property {number} [ceilingHeight] - Ceiling height in feet
 * @property {number} [loadingDocks] - Number of loading docks
 * @property {number} [driveInDoors] - Number of drive-in doors
 * @property {boolean} freightElevator - Has freight elevator
 * @property {boolean} passengerElevator - Has passenger elevator
 * @property {string} zoningType - Zoning classification
 * @property {number} [yearBuilt] - Year built
 * @property {string} [previousUse] - Previous use
 * @property {string} [buildOutStatus] - Build-out status
 * @property {string} [hvacType] - HVAC system type
 * @property {string} [powerCapacity] - Electrical power capacity
 * @property {boolean} sprinklerSystem - Has sprinkler system
 */
export const CommercialDetailsSchema = z.object({
    squareFootage: z.number().positive().describe("Total square footage"),
    usableSquareFootage: z.number().positive().nullable().optional().describe("Usable square footage"),
    floors: z.number().int().positive().nullable().optional().describe("Number of floors"),
    ceilingHeight: z.number().positive().nullable().optional().describe("Ceiling height in feet"),
    loadingDocks: z.number().int().nonnegative().nullable().optional().describe("Number of loading docks"),
    driveInDoors: z.number().int().nonnegative().nullable().optional().describe("Number of drive-in doors"),
    freightElevator: z.boolean().default(false).describe("Whether property has freight elevator"),
    passengerElevator: z.boolean().default(false).describe("Whether property has passenger elevator"),
    zoningType: z.string().describe("Zoning classification"),
    yearBuilt: z.number().int().min(1800).max(2100).nullable().optional().describe("Year the property was built"),
    previousUse: z.string().nullable().optional().describe("Previous use of the property"),
    buildOutStatus: z.enum(['shell', 'partial', 'turnkey']).nullable().optional().describe("Build-out status"),
    hvacType: z.string().nullable().optional().describe("HVAC system type"),
    powerCapacity: z.string().nullable().optional().describe("Electrical power capacity"),
    sprinklerSystem: z.boolean().default(false).describe("Whether property has sprinkler system"),
});

/**
 * Land details schema.
 * Details for lots, farms, and acreage properties.
 *
 * @typedef {Object} LandDetails
 * @property {number} lotSize - Lot size
 * @property {string} lotSizeUnit - Unit for lot size
 * @property {string} zoning - Zoning classification
 * @property {string} [topography] - Land topography
 * @property {number} [roadFrontage] - Road frontage in feet
 * @property {string} [roadAccess] - Road access type
 * @property {string[]} utilitiesAvailable - Available utilities
 * @property {string} [waterSource] - Water source
 * @property {string} [sewerType] - Sewer type
 * @property {string} [soilType] - Soil type
 * @property {boolean} floodZone - Whether in flood zone
 * @property {string} [floodZoneDesignation] - FEMA flood zone
 * @property {string} [easements] - Easements description
 * @property {boolean} surveyAvailable - Whether survey available
 * @property {string} [mineralRights] - Mineral rights status
 * @property {number} [timberValue] - Estimated timber value
 */
export const LandDetailsSchema = z.object({
    lotSize: z.number().positive().describe("Lot size"),
    lotSizeUnit: z.enum(['sqft', 'acres', 'sqm', 'hectares']).default('acres').describe("Unit for lot size"),
    zoning: z.string().describe("Zoning classification"),
    topography: z.enum(['flat', 'sloped', 'hilly', 'mixed']).nullable().optional().describe("Land topography"),
    roadFrontage: z.number().positive().nullable().optional().describe("Road frontage in feet"),
    roadAccess: z.enum(['paved', 'gravel', 'dirt', 'none']).nullable().optional().describe("Road access type"),
    utilitiesAvailable: z.array(z.string()).default([]).describe("Available utilities (water, sewer, electric, gas)"),
    waterSource: z.enum(['municipal', 'well', 'none', 'unknown']).nullable().optional().describe("Water source"),
    sewerType: z.enum(['municipal', 'septic', 'none', 'unknown']).nullable().optional().describe("Sewer type"),
    soilType: z.string().nullable().optional().describe("Soil type or classification"),
    floodZone: z.boolean().default(false).describe("Whether property is in a flood zone"),
    floodZoneDesignation: z.string().nullable().optional().describe("FEMA flood zone designation"),
    easements: z.string().nullable().optional().describe("Easements description"),
    surveyAvailable: z.boolean().default(false).describe("Whether survey is available"),
    mineralRights: z.enum(['included', 'excluded', 'partial', 'unknown']).nullable().optional().describe("Mineral rights status"),
    timberValue: z.number().nonnegative().nullable().optional().describe("Estimated timber value"),
});

// ============================================================================
// PROPERTY SCHEMA
// ============================================================================

/**
 * Property schema.
 * Main property listing with pricing, details, and type-specific information.
 *
 * @typedef {Object} Property
 * @property {string} categoryId - Category ID
 * @property {PropertyCategory} [category] - Property category
 * @property {string} title - Property listing title
 * @property {string} [description] - Detailed description
 * @property {PropertyType} propertyType - Type of property
 * @property {PropertySubType} propertySubType - Subtype of property
 * @property {string} addressId - Address ID
 * @property {PropertyAddress} [address] - Property address
 * @property {ListingType} listingType - Type of listing
 * @property {ListingStatus} listingStatus - Current listing status
 * @property {number} [salePrice] - Sale price
 * @property {string} salePriceCurrency - Currency for sale price
 * @property {number} [rentalPrice] - Rental price
 * @property {RentalPeriod} [rentalPeriod] - Rental period
 * @property {string} rentalPriceCurrency - Currency for rental price
 * @property {boolean} priceNegotiable - Whether price is negotiable
 * @property {PropertyFeatures} [features] - Property features
 * @property {PropertyCondition} [condition] - Property condition
 * @property {boolean} furnished - Whether furnished
 * @property {string[]} images - Image URLs
 * @property {string} [virtualTourUrl] - Virtual tour URL
 * @property {string} [videoUrl] - Video tour URL
 * @property {number} [availableFrom] - Available from timestamp
 * @property {number} [availableTo] - Available until timestamp
 * @property {boolean} isActive - Whether active
 * @property {boolean} isFeatured - Whether featured
 * @property {boolean} isVerified - Whether verified
 * @property {string} [externalId] - External system ID
 * @property {string} [mlsNumber] - MLS listing number
 * @property {ResidentialDetails} [residentialDetails] - Residential details
 * @property {CommercialDetails} [commercialDetails] - Commercial details
 * @property {LandDetails} [landDetails] - Land details
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

    // Type-specific details (populated based on propertyType)
    residentialDetails: ResidentialDetailsSchema.nullable().optional().describe("Residential-specific details (when propertyType is 'residential')"),
    commercialDetails: CommercialDetailsSchema.nullable().optional().describe("Commercial-specific details (when propertyType is 'commercial')"),
    landDetails: LandDetailsSchema.nullable().optional().describe("Land-specific details (when propertyType is 'land')"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new property category.
 */
export const CreatePropertyCategorySchema = PropertyCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional(),
});

/**
 * Schema for updating an existing property category.
 */
export const UpdatePropertyCategorySchema = CreatePropertyCategorySchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the PropertyCategory to update"),
});

/**
 * Schema for creating a new property address.
 */
export const CreatePropertyAddressSchema = PropertyAddressSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    verifiedAt: true,
});

/**
 * Schema for updating an existing property address.
 */
export const UpdatePropertyAddressSchema = CreatePropertyAddressSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the PropertyAddress to update"),
});

/**
 * Schema for creating a new property.
 */
export const CreatePropertySchema = PropertySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    address: true,
});

/**
 * Schema for updating an existing property.
 */
export const UpdatePropertySchema = CreatePropertySchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the Property to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PropertyCategory = z.infer<typeof PropertyCategorySchema>;
export type CreatePropertyCategory = z.infer<typeof CreatePropertyCategorySchema>;
export type UpdatePropertyCategory = z.infer<typeof UpdatePropertyCategorySchema>;

export type PropertyAddress = z.infer<typeof PropertyAddressSchema>;
export type CreatePropertyAddress = z.infer<typeof CreatePropertyAddressSchema>;
export type UpdatePropertyAddress = z.infer<typeof UpdatePropertyAddressSchema>;

export type PropertyFeatures = z.infer<typeof PropertyFeaturesSchema>;
export type ResidentialDetails = z.infer<typeof ResidentialDetailsSchema>;
export type CommercialDetails = z.infer<typeof CommercialDetailsSchema>;
export type LandDetails = z.infer<typeof LandDetailsSchema>;

export type Property = z.infer<typeof PropertySchema>;
export type CreateProperty = z.infer<typeof CreatePropertySchema>;
export type UpdateProperty = z.infer<typeof UpdatePropertySchema>;

// ============================================================================
// CATALOG SCHEMAS
// ============================================================================

/**
 * Property Catalog schema.
 * Category with its property listings.
 */
export const PropertyCatalogSchema = z.object({
    propertyCategory: PropertyCategorySchema,
    items: z.array(PropertySchema).describe("List of properties in this category"),
}).describe("Schema representing a property category and its listings");

/**
 * Business Property Catalog schema.
 * Full property catalog array.
 */
export const BusinessPropertyCatalogSchema = z.array(PropertyCatalogSchema).describe("Schema representing a business property catalog");

export type PropertyCatalog = z.infer<typeof PropertyCatalogSchema>;
export type BusinessPropertyCatalog = z.infer<typeof BusinessPropertyCatalogSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Property filter options.
 * @interface PropertyFilters
 */
export interface PropertyFilters {
    /** Text search across title/description */
    search?: string;
    /** Filter by category ID */
    categoryId?: string;
    /** Filter by address IDs */
    addressIds?: string[];
    /** Filter by address properties */
    address?: PropertyAddressFilters;
    /** Filter by property type */
    propertyType?: PropertyType;
    /** Filter by property sub-type */
    propertySubType?: PropertySubType;
    /** Filter by listing type */
    listingType?: ListingType;
    /** Filter by listing status(es) */
    listingStatus?: ListingStatus[];
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by featured status */
    isFeatured?: boolean;
    /** Filter by verified status */
    isVerified?: boolean;
    /** Filter by property condition */
    condition?: PropertyCondition;
    /** Filter by furnished status */
    furnished?: boolean;
    /** Filter by price range */
    priceRange?: { min?: number; max?: number };
    /** Filter by bedrooms range */
    bedroomsRange?: { min?: number; max?: number };
    /** Filter by bathrooms range */
    bathroomsRange?: { min?: number; max?: number };
    /** Filter by square footage range */
    squareFootageRange?: { min?: number; max?: number };
}

/**
 * Property sorting options.
 * @interface PropertySorting
 */
export interface PropertySorting {
    /** Field to sort by */
    field: 'title' | 'salePrice' | 'rentalPrice' | 'createdAt' | 'displayOrder' | 'squareFootage';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Property query options.
 * @interface PropertyQueryOptions
 */
export interface PropertyQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: PropertyFilters;
    /** Optional sorting */
    sorting?: PropertySorting;
}

/**
 * Property address filter options.
 * @interface PropertyAddressFilters
 */
export interface PropertyAddressFilters {
    /** Text search across street/city/state */
    search?: string;
    /** Filter by city */
    city?: string;
    /** Filter by state */
    state?: string;
    /** Filter by country */
    country?: string;
    /** Filter by neighborhood */
    neighborhood?: string;
    /** Filter by district */
    district?: string;
    /** Filter by geolocation radius */
    geolocation?: {
        latitude: number;
        longitude: number;
        radiusKm: number;
    };
    /** Filter by verified status */
    isVerified?: boolean;
}

/**
 * Property address sorting options.
 * @interface PropertyAddressSorting
 */
export interface PropertyAddressSorting {
    /** Field to sort by */
    field: 'street' | 'city' | 'state' | 'country' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Property address query options.
 * @interface PropertyAddressQueryOptions
 */
export interface PropertyAddressQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: PropertyAddressFilters;
    /** Optional sorting */
    sorting?: PropertyAddressSorting;
}



