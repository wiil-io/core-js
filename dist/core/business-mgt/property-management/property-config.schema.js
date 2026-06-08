"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPropertyCatalogSchema = exports.PropertyCatalogSchema = exports.UpdatePropertySchema = exports.CreatePropertySchema = exports.UpdatePropertyAddressSchema = exports.CreatePropertyAddressSchema = exports.UpdatePropertyCategorySchema = exports.CreatePropertyCategorySchema = exports.PropertySchema = exports.LandDetailsSchema = exports.CommercialDetailsSchema = exports.ResidentialDetailsSchema = exports.PropertyFeaturesSchema = exports.PropertyAddressSchema = exports.PropertyCategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const display_order_1 = require("../../type-definitions/display-order");
const type_definitions_1 = require("../../type-definitions");
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
exports.PropertyCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1, "Category name is required").describe("Category name (e.g., Luxury Homes, Commercial Offices)"),
    description: zod_1.default.string().optional().describe("Category description"),
    propertyType: zod_1.default.enum(type_definitions_1.PropertyType).describe("Type of property (residential, commercial, land)"),
    displayOrder: zod_1.default.number().int().optional().describe("Display order in listing"),
    isDefault: zod_1.default.boolean().default(false).describe("Whether this is the default category"),
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
exports.PropertyAddressSchema = base_schema_1.BaseModelSchema.safeExtend({
    street: zod_1.default.string().min(1, "Street address is required").describe("Street address"),
    unit: zod_1.default.string().nullable().optional().describe("Unit or apartment number"),
    city: zod_1.default.string().min(1, "City is required").describe("City name"),
    state: zod_1.default.string().min(1, "State is required").describe("State or province"),
    postalCode: zod_1.default.string().nullable().optional().describe("Postal or ZIP code"),
    country: zod_1.default.string().min(1, "Country is required").describe("Country"),
    coordinates: zod_1.default.object({
        latitude: zod_1.default.number().min(-90).max(90).describe("Latitude coordinate"),
        longitude: zod_1.default.number().min(-180).max(180).describe("Longitude coordinate"),
    }).nullable().optional().describe("Geographic coordinates"),
    neighborhood: zod_1.default.string().nullable().optional().describe("Neighborhood or district name"),
    district: zod_1.default.string().nullable().optional().describe("Administrative district"),
    isVerified: zod_1.default.boolean().default(false).describe("Whether address has been verified"),
    verifiedAt: zod_1.default.number().nullable().optional().describe("Timestamp when address was verified"),
    primaryUserAccountId: zod_1.default.string().nullable().optional().describe("User account managing the property at this address"),
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
exports.PropertyFeaturesSchema = zod_1.default.object({
    parkingSpaces: zod_1.default.number().int().nonnegative().nullable().optional().describe("Number of parking spaces"),
    amenities: zod_1.default.array(zod_1.default.string()).default([]).describe("List of amenities (pool, gym, etc.)"),
    utilities: zod_1.default.array(zod_1.default.string()).default([]).describe("Available utilities (gas, electric, water, etc.)"),
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
exports.ResidentialDetailsSchema = zod_1.default.object({
    bedrooms: zod_1.default.number().int().nonnegative().describe("Number of bedrooms"),
    bathrooms: zod_1.default.number().nonnegative().describe("Number of bathrooms"),
    halfBaths: zod_1.default.number().int().nonnegative().nullable().optional().describe("Number of half bathrooms"),
    squareFootage: zod_1.default.number().positive().describe("Total square footage"),
    lotSize: zod_1.default.number().positive().nullable().optional().describe("Lot size"),
    lotSizeUnit: zod_1.default.enum(['sqft', 'acres', 'sqm', 'hectares']).default('sqft').describe("Unit for lot size"),
    yearBuilt: zod_1.default.number().int().min(1800).max(2100).nullable().optional().describe("Year the property was built"),
    floors: zod_1.default.number().int().positive().nullable().optional().describe("Number of floors"),
    basementType: zod_1.default.enum(['none', 'unfinished', 'partial', 'finished']).nullable().optional().describe("Basement type"),
    atticFinished: zod_1.default.boolean().nullable().optional().describe("Whether attic is finished"),
    heatingType: zod_1.default.string().nullable().optional().describe("Heating system type (e.g., forced air, radiant)"),
    coolingType: zod_1.default.string().nullable().optional().describe("Cooling system type (e.g., central, window)"),
    roofType: zod_1.default.string().nullable().optional().describe("Roof material (e.g., shingle, tile, metal)"),
    exteriorMaterial: zod_1.default.string().nullable().optional().describe("Exterior material (e.g., brick, vinyl, stucco)"),
    garageSpaces: zod_1.default.number().int().nonnegative().nullable().optional().describe("Number of garage spaces"),
    hasPool: zod_1.default.boolean().default(false).describe("Whether property has a pool"),
    hasFireplace: zod_1.default.boolean().default(false).describe("Whether property has a fireplace"),
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
exports.CommercialDetailsSchema = zod_1.default.object({
    squareFootage: zod_1.default.number().positive().describe("Total square footage"),
    usableSquareFootage: zod_1.default.number().positive().nullable().optional().describe("Usable square footage"),
    floors: zod_1.default.number().int().positive().nullable().optional().describe("Number of floors"),
    ceilingHeight: zod_1.default.number().positive().nullable().optional().describe("Ceiling height in feet"),
    loadingDocks: zod_1.default.number().int().nonnegative().nullable().optional().describe("Number of loading docks"),
    driveInDoors: zod_1.default.number().int().nonnegative().nullable().optional().describe("Number of drive-in doors"),
    freightElevator: zod_1.default.boolean().default(false).describe("Whether property has freight elevator"),
    passengerElevator: zod_1.default.boolean().default(false).describe("Whether property has passenger elevator"),
    zoningType: zod_1.default.string().describe("Zoning classification"),
    yearBuilt: zod_1.default.number().int().min(1800).max(2100).nullable().optional().describe("Year the property was built"),
    previousUse: zod_1.default.string().nullable().optional().describe("Previous use of the property"),
    buildOutStatus: zod_1.default.enum(['shell', 'partial', 'turnkey']).nullable().optional().describe("Build-out status"),
    hvacType: zod_1.default.string().nullable().optional().describe("HVAC system type"),
    powerCapacity: zod_1.default.string().nullable().optional().describe("Electrical power capacity"),
    sprinklerSystem: zod_1.default.boolean().default(false).describe("Whether property has sprinkler system"),
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
exports.LandDetailsSchema = zod_1.default.object({
    lotSize: zod_1.default.number().positive().describe("Lot size"),
    lotSizeUnit: zod_1.default.enum(['sqft', 'acres', 'sqm', 'hectares']).default('acres').describe("Unit for lot size"),
    zoning: zod_1.default.string().describe("Zoning classification"),
    topography: zod_1.default.enum(['flat', 'sloped', 'hilly', 'mixed']).nullable().optional().describe("Land topography"),
    roadFrontage: zod_1.default.number().positive().nullable().optional().describe("Road frontage in feet"),
    roadAccess: zod_1.default.enum(['paved', 'gravel', 'dirt', 'none']).nullable().optional().describe("Road access type"),
    utilitiesAvailable: zod_1.default.array(zod_1.default.string()).default([]).describe("Available utilities (water, sewer, electric, gas)"),
    waterSource: zod_1.default.enum(['municipal', 'well', 'none', 'unknown']).nullable().optional().describe("Water source"),
    sewerType: zod_1.default.enum(['municipal', 'septic', 'none', 'unknown']).nullable().optional().describe("Sewer type"),
    soilType: zod_1.default.string().nullable().optional().describe("Soil type or classification"),
    floodZone: zod_1.default.boolean().default(false).describe("Whether property is in a flood zone"),
    floodZoneDesignation: zod_1.default.string().nullable().optional().describe("FEMA flood zone designation"),
    easements: zod_1.default.string().nullable().optional().describe("Easements description"),
    surveyAvailable: zod_1.default.boolean().default(false).describe("Whether survey is available"),
    mineralRights: zod_1.default.enum(['included', 'excluded', 'partial', 'unknown']).nullable().optional().describe("Mineral rights status"),
    timberValue: zod_1.default.number().nonnegative().nullable().optional().describe("Estimated timber value"),
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
exports.PropertySchema = base_schema_1.BaseModelSchema.safeExtend({
    categoryId: zod_1.default.string().describe("ID of the category this property belongs to"),
    category: exports.PropertyCategorySchema.optional().describe("Property category"),
    // Basic Info
    title: zod_1.default.string().min(1, "Property title is required").describe("Property listing title"),
    description: zod_1.default.string().optional().describe("Detailed property description"),
    propertyType: zod_1.default.enum(type_definitions_1.PropertyType).describe("Type of property"),
    propertySubType: zod_1.default.enum(type_definitions_1.PropertySubType).describe("Subtype of property"),
    // Location
    addressId: zod_1.default.string().describe("ID of the property address"),
    address: exports.PropertyAddressSchema.nullable().optional().describe("Property address (populated)"),
    // Listing Info
    listingType: zod_1.default.enum(type_definitions_1.ListingType).describe("Type of listing (sale, rent, or both)"),
    listingStatus: zod_1.default.enum(type_definitions_1.ListingStatus).default(type_definitions_1.ListingStatus.DRAFT).describe("Current listing status"),
    // Sale Pricing
    salePrice: zod_1.default.number().nonnegative().nullable().optional().describe("Sale price"),
    salePriceCurrency: zod_1.default.string().default('USD').describe("Currency for sale price"),
    // Rental Pricing
    rentalPrice: zod_1.default.number().nonnegative().nullable().optional().describe("Rental price"),
    rentalPeriod: zod_1.default.enum(type_definitions_1.RentalPeriod).nullable().optional().describe("Rental period (daily, weekly, monthly, yearly)"),
    rentalPriceCurrency: zod_1.default.string().default('USD').describe("Currency for rental price"),
    // Pricing Options
    priceNegotiable: zod_1.default.boolean().default(false).describe("Whether price is negotiable"),
    // Features
    features: exports.PropertyFeaturesSchema.optional().describe("Property features"),
    // Condition
    condition: zod_1.default.enum(type_definitions_1.PropertyCondition).nullable().optional().describe("Property condition"),
    furnished: zod_1.default.boolean().default(false).describe("Whether property is furnished"),
    // Media
    images: zod_1.default.array(zod_1.default.string()).default([]).describe("Array of image URLs"),
    virtualTourUrl: zod_1.default.url().nullable().optional().describe("Virtual tour URL"),
    videoUrl: zod_1.default.url().nullable().optional().describe("Video tour URL"),
    // Availability
    availableFrom: zod_1.default.number().nullable().optional().describe("Available from date (timestamp)"),
    availableTo: zod_1.default.number().nullable().optional().describe("Available until date (timestamp) - for rentals"),
    // Flags
    isActive: zod_1.default.boolean().default(true).describe("Whether property is active in listings"),
    isFeatured: zod_1.default.boolean().default(false).describe("Whether property is featured"),
    isVerified: zod_1.default.boolean().default(false).describe("Whether property has been verified"),
    // Reference
    externalId: zod_1.default.string().nullable().optional().describe("External system reference ID"),
    mlsNumber: zod_1.default.string().nullable().optional().describe("MLS listing number"),
    // Type-specific details (populated based on propertyType)
    residentialDetails: exports.ResidentialDetailsSchema.nullable().optional().describe("Residential-specific details (when propertyType is 'residential')"),
    commercialDetails: exports.CommercialDetailsSchema.nullable().optional().describe("Commercial-specific details (when propertyType is 'commercial')"),
    landDetails: exports.LandDetailsSchema.nullable().optional().describe("Land-specific details (when propertyType is 'land')"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new property category.
 */
exports.CreatePropertyCategorySchema = exports.PropertyCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional(),
});
/**
 * Schema for updating an existing property category.
 */
exports.UpdatePropertyCategorySchema = exports.CreatePropertyCategorySchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the PropertyCategory to update"),
});
/**
 * Schema for creating a new property address.
 */
exports.CreatePropertyAddressSchema = exports.PropertyAddressSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    verifiedAt: true,
});
/**
 * Schema for updating an existing property address.
 */
exports.UpdatePropertyAddressSchema = exports.CreatePropertyAddressSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the PropertyAddress to update"),
});
/**
 * Schema for creating a new property.
 */
exports.CreatePropertySchema = exports.PropertySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    address: true,
});
/**
 * Schema for updating an existing property.
 */
exports.UpdatePropertySchema = exports.CreatePropertySchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the Property to update"),
});
// ============================================================================
// CATALOG SCHEMAS
// ============================================================================
/**
 * Property Catalog schema.
 * Category with its property listings.
 */
exports.PropertyCatalogSchema = zod_1.default.object({
    propertyCategory: exports.PropertyCategorySchema,
    items: zod_1.default.array(exports.PropertySchema).describe("List of properties in this category"),
}).describe("Schema representing a property category and its listings");
/**
 * Business Property Catalog schema.
 * Full property catalog array.
 */
exports.BusinessPropertyCatalogSchema = zod_1.default.array(exports.PropertyCatalogSchema).describe("Schema representing a business property catalog");
