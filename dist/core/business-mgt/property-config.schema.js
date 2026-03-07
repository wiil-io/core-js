"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPropertyCatalogSchema = exports.PropertyCatalogSchema = exports.UpdatePropertySchema = exports.CreatePropertySchema = exports.UpdatePropertyAddressSchema = exports.CreatePropertyAddressSchema = exports.UpdatePropertyCategorySchema = exports.CreatePropertyCategorySchema = exports.PropertySchema = exports.PropertyFeaturesSchema = exports.PropertyAddressSchema = exports.PropertyCategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
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
exports.PropertyCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1, "Category name is required").describe("Category name (e.g., Luxury Homes, Commercial Offices)"),
    description: zod_1.default.string().optional().describe("Category description"),
    propertyType: zod_1.default.enum(type_definitions_1.PropertyType).describe("Type of property (residential, commercial, land)"),
    displayOrder: zod_1.default.number().int().optional().describe("Display order in listing"),
    isDefault: zod_1.default.boolean().default(false).describe("Whether this is the default category"),
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
exports.PropertyFeaturesSchema = zod_1.default.object({
    bedrooms: zod_1.default.number().int().nonnegative().nullable().optional().describe("Number of bedrooms"),
    bathrooms: zod_1.default.number().nonnegative().nullable().optional().describe("Number of bathrooms"),
    parkingSpaces: zod_1.default.number().int().nonnegative().nullable().optional().describe("Number of parking spaces"),
    squareFootage: zod_1.default.number().positive().nullable().optional().describe("Total square footage"),
    lotSize: zod_1.default.number().positive().nullable().optional().describe("Lot size in square feet or acres"),
    lotSizeUnit: zod_1.default.enum(['sqft', 'acres', 'sqm', 'hectares']).default('sqft').describe("Unit for lot size"),
    yearBuilt: zod_1.default.number().int().min(1800).max(2100).nullable().optional().describe("Year the property was built"),
    floors: zod_1.default.number().int().positive().nullable().optional().describe("Number of floors"),
    amenities: zod_1.default.array(zod_1.default.string()).default([]).describe("List of amenities (pool, gym, etc.)"),
    utilities: zod_1.default.array(zod_1.default.string()).default([]).describe("Available utilities (gas, electric, water, etc.)"),
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
});
/**
 * Schema for creating a new property category.
 * Omits auto-generated fields.
 */
exports.CreatePropertyCategorySchema = exports.PropertyCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing property category.
 * All fields are optional except id.
 */
exports.UpdatePropertyCategorySchema = exports.CreatePropertyCategorySchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Schema for creating a new property address.
 * Omits auto-generated fields.
 */
exports.CreatePropertyAddressSchema = exports.PropertyAddressSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    verifiedAt: true,
});
/**
 * Schema for updating an existing property address.
 * All fields are optional except id.
 */
exports.UpdatePropertyAddressSchema = exports.CreatePropertyAddressSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Schema for creating a new property listing.
 * Omits auto-generated fields and populated objects.
 */
exports.CreatePropertySchema = exports.PropertySchema.omit({
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
exports.UpdatePropertySchema = exports.CreatePropertySchema.partial().safeExtend({
    id: zod_1.default.string(),
});
// Catalog Schema
exports.PropertyCatalogSchema = zod_1.default.object({
    propertyCategory: exports.PropertyCategorySchema,
    items: zod_1.default.array(exports.PropertySchema).describe("List of properties in this category"),
}).describe("Schema representing a property category and its listings");
exports.BusinessPropertyCatalogSchema = zod_1.default.array(exports.PropertyCatalogSchema).describe("Schema representing a business property catalog");
