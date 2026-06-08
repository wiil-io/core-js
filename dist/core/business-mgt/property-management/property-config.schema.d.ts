import z from "zod";
import { PropertyType, PropertySubType, ListingType, ListingStatus, PropertyCondition, RentalPeriod } from "../../type-definitions";
/**
 * @fileoverview Property configuration schema definitions for property management.
 * @module business-mgt/property-management
 *
 * Property management schemas for real estate listings including residential,
 * commercial, and land properties with categories, addresses, and type-specific details.
 */
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
 * Shared features across all property types.
 *
 * @typedef {Object} PropertyFeatures
 * @property {number} [parkingSpaces] - Number of parking spaces
 * @property {string[]} amenities - List of amenities
 * @property {string[]} utilities - Available utilities
 */
export declare const PropertyFeaturesSchema: z.ZodObject<{
    parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    utilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
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
export declare const ResidentialDetailsSchema: z.ZodObject<{
    bedrooms: z.ZodNumber;
    bathrooms: z.ZodNumber;
    halfBaths: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    squareFootage: z.ZodNumber;
    lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lotSizeUnit: z.ZodDefault<z.ZodEnum<{
        sqft: "sqft";
        acres: "acres";
        sqm: "sqm";
        hectares: "hectares";
    }>>;
    yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    basementType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        none: "none";
        partial: "partial";
        unfinished: "unfinished";
        finished: "finished";
    }>>>;
    atticFinished: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    heatingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coolingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roofType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exteriorMaterial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    garageSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    hasPool: z.ZodDefault<z.ZodBoolean>;
    hasFireplace: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const CommercialDetailsSchema: z.ZodObject<{
    squareFootage: z.ZodNumber;
    usableSquareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ceilingHeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    loadingDocks: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    driveInDoors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    freightElevator: z.ZodDefault<z.ZodBoolean>;
    passengerElevator: z.ZodDefault<z.ZodBoolean>;
    zoningType: z.ZodString;
    yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    previousUse: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    buildOutStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        partial: "partial";
        shell: "shell";
        turnkey: "turnkey";
    }>>>;
    hvacType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    powerCapacity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sprinklerSystem: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const LandDetailsSchema: z.ZodObject<{
    lotSize: z.ZodNumber;
    lotSizeUnit: z.ZodDefault<z.ZodEnum<{
        sqft: "sqft";
        acres: "acres";
        sqm: "sqm";
        hectares: "hectares";
    }>>;
    zoning: z.ZodString;
    topography: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        flat: "flat";
        sloped: "sloped";
        hilly: "hilly";
        mixed: "mixed";
    }>>>;
    roadFrontage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    roadAccess: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        none: "none";
        paved: "paved";
        gravel: "gravel";
        dirt: "dirt";
    }>>>;
    utilitiesAvailable: z.ZodDefault<z.ZodArray<z.ZodString>>;
    waterSource: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        none: "none";
        unknown: "unknown";
        municipal: "municipal";
        well: "well";
    }>>>;
    sewerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        none: "none";
        unknown: "unknown";
        municipal: "municipal";
        septic: "septic";
    }>>>;
    soilType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    floodZone: z.ZodDefault<z.ZodBoolean>;
    floodZoneDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    easements: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    surveyAvailable: z.ZodDefault<z.ZodBoolean>;
    mineralRights: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        partial: "partial";
        unknown: "unknown";
        included: "included";
        excluded: "excluded";
    }>>>;
    timberValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
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
        parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
    residentialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        bedrooms: z.ZodNumber;
        bathrooms: z.ZodNumber;
        halfBaths: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        squareFootage: z.ZodNumber;
        lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        basementType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            partial: "partial";
            unfinished: "unfinished";
            finished: "finished";
        }>>>;
        atticFinished: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        heatingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coolingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        roofType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        exteriorMaterial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        garageSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        hasPool: z.ZodDefault<z.ZodBoolean>;
        hasFireplace: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
    commercialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        squareFootage: z.ZodNumber;
        usableSquareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ceilingHeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        loadingDocks: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        driveInDoors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        freightElevator: z.ZodDefault<z.ZodBoolean>;
        passengerElevator: z.ZodDefault<z.ZodBoolean>;
        zoningType: z.ZodString;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        previousUse: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        buildOutStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            partial: "partial";
            shell: "shell";
            turnkey: "turnkey";
        }>>>;
        hvacType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        powerCapacity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sprinklerSystem: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
    landDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lotSize: z.ZodNumber;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        zoning: z.ZodString;
        topography: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            flat: "flat";
            sloped: "sloped";
            hilly: "hilly";
            mixed: "mixed";
        }>>>;
        roadFrontage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        roadAccess: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            paved: "paved";
            gravel: "gravel";
            dirt: "dirt";
        }>>>;
        utilitiesAvailable: z.ZodDefault<z.ZodArray<z.ZodString>>;
        waterSource: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            unknown: "unknown";
            municipal: "municipal";
            well: "well";
        }>>>;
        sewerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            unknown: "unknown";
            municipal: "municipal";
            septic: "septic";
        }>>>;
        soilType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        floodZone: z.ZodDefault<z.ZodBoolean>;
        floodZoneDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        easements: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        surveyAvailable: z.ZodDefault<z.ZodBoolean>;
        mineralRights: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            partial: "partial";
            unknown: "unknown";
            included: "included";
            excluded: "excluded";
        }>>>;
        timberValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new property category.
 */
export declare const CreatePropertyCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    propertyType: z.ZodEnum<typeof PropertyType>;
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing property category.
 */
export declare const UpdatePropertyCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    propertyType: z.ZodOptional<z.ZodEnum<typeof PropertyType>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new property address.
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
 * Schema for creating a new property.
 */
export declare const CreatePropertySchema: z.ZodObject<{
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categoryId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    title: z.ZodString;
    condition: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PropertyCondition>>>;
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
        parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
    mlsNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    residentialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        bedrooms: z.ZodNumber;
        bathrooms: z.ZodNumber;
        halfBaths: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        squareFootage: z.ZodNumber;
        lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        basementType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            partial: "partial";
            unfinished: "unfinished";
            finished: "finished";
        }>>>;
        atticFinished: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        heatingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coolingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        roofType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        exteriorMaterial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        garageSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        hasPool: z.ZodDefault<z.ZodBoolean>;
        hasFireplace: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
    commercialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        squareFootage: z.ZodNumber;
        usableSquareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ceilingHeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        loadingDocks: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        driveInDoors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        freightElevator: z.ZodDefault<z.ZodBoolean>;
        passengerElevator: z.ZodDefault<z.ZodBoolean>;
        zoningType: z.ZodString;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        previousUse: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        buildOutStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            partial: "partial";
            shell: "shell";
            turnkey: "turnkey";
        }>>>;
        hvacType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        powerCapacity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sprinklerSystem: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
    landDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lotSize: z.ZodNumber;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        zoning: z.ZodString;
        topography: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            flat: "flat";
            sloped: "sloped";
            hilly: "hilly";
            mixed: "mixed";
        }>>>;
        roadFrontage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        roadAccess: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            paved: "paved";
            gravel: "gravel";
            dirt: "dirt";
        }>>>;
        utilitiesAvailable: z.ZodDefault<z.ZodArray<z.ZodString>>;
        waterSource: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            unknown: "unknown";
            municipal: "municipal";
            well: "well";
        }>>>;
        sewerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            unknown: "unknown";
            municipal: "municipal";
            septic: "septic";
        }>>>;
        soilType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        floodZone: z.ZodDefault<z.ZodBoolean>;
        floodZoneDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        easements: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        surveyAvailable: z.ZodDefault<z.ZodBoolean>;
        mineralRights: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            partial: "partial";
            unknown: "unknown";
            included: "included";
            excluded: "excluded";
        }>>>;
        timberValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing property.
 */
export declare const UpdatePropertySchema: z.ZodObject<{
    externalId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    categoryId: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    title: z.ZodOptional<z.ZodString>;
    condition: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PropertyCondition>>>>;
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
        parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
    mlsNumber: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    residentialDetails: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        bedrooms: z.ZodNumber;
        bathrooms: z.ZodNumber;
        halfBaths: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        squareFootage: z.ZodNumber;
        lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        basementType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            partial: "partial";
            unfinished: "unfinished";
            finished: "finished";
        }>>>;
        atticFinished: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        heatingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coolingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        roofType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        exteriorMaterial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        garageSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        hasPool: z.ZodDefault<z.ZodBoolean>;
        hasFireplace: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>>;
    commercialDetails: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        squareFootage: z.ZodNumber;
        usableSquareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ceilingHeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        loadingDocks: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        driveInDoors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        freightElevator: z.ZodDefault<z.ZodBoolean>;
        passengerElevator: z.ZodDefault<z.ZodBoolean>;
        zoningType: z.ZodString;
        yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        previousUse: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        buildOutStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            partial: "partial";
            shell: "shell";
            turnkey: "turnkey";
        }>>>;
        hvacType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        powerCapacity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sprinklerSystem: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>>;
    landDetails: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lotSize: z.ZodNumber;
        lotSizeUnit: z.ZodDefault<z.ZodEnum<{
            sqft: "sqft";
            acres: "acres";
            sqm: "sqm";
            hectares: "hectares";
        }>>;
        zoning: z.ZodString;
        topography: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            flat: "flat";
            sloped: "sloped";
            hilly: "hilly";
            mixed: "mixed";
        }>>>;
        roadFrontage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        roadAccess: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            paved: "paved";
            gravel: "gravel";
            dirt: "dirt";
        }>>>;
        utilitiesAvailable: z.ZodDefault<z.ZodArray<z.ZodString>>;
        waterSource: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            unknown: "unknown";
            municipal: "municipal";
            well: "well";
        }>>>;
        sewerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            none: "none";
            unknown: "unknown";
            municipal: "municipal";
            septic: "septic";
        }>>>;
        soilType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        floodZone: z.ZodDefault<z.ZodBoolean>;
        floodZoneDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        easements: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        surveyAvailable: z.ZodDefault<z.ZodBoolean>;
        mineralRights: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            partial: "partial";
            unknown: "unknown";
            included: "included";
            excluded: "excluded";
        }>>>;
        timberValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    id: z.ZodString;
}, z.core.$strip>;
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
/**
 * Property Catalog schema.
 * Category with its property listings.
 */
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
            parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        residentialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            bedrooms: z.ZodNumber;
            bathrooms: z.ZodNumber;
            halfBaths: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            squareFootage: z.ZodNumber;
            lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lotSizeUnit: z.ZodDefault<z.ZodEnum<{
                sqft: "sqft";
                acres: "acres";
                sqm: "sqm";
                hectares: "hectares";
            }>>;
            yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            basementType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                partial: "partial";
                unfinished: "unfinished";
                finished: "finished";
            }>>>;
            atticFinished: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            heatingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coolingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            roofType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            exteriorMaterial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            garageSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            hasPool: z.ZodDefault<z.ZodBoolean>;
            hasFireplace: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        commercialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            squareFootage: z.ZodNumber;
            usableSquareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ceilingHeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            loadingDocks: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            driveInDoors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            freightElevator: z.ZodDefault<z.ZodBoolean>;
            passengerElevator: z.ZodDefault<z.ZodBoolean>;
            zoningType: z.ZodString;
            yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            previousUse: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            buildOutStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                partial: "partial";
                shell: "shell";
                turnkey: "turnkey";
            }>>>;
            hvacType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            powerCapacity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sprinklerSystem: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        landDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            lotSize: z.ZodNumber;
            lotSizeUnit: z.ZodDefault<z.ZodEnum<{
                sqft: "sqft";
                acres: "acres";
                sqm: "sqm";
                hectares: "hectares";
            }>>;
            zoning: z.ZodString;
            topography: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                flat: "flat";
                sloped: "sloped";
                hilly: "hilly";
                mixed: "mixed";
            }>>>;
            roadFrontage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            roadAccess: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                paved: "paved";
                gravel: "gravel";
                dirt: "dirt";
            }>>>;
            utilitiesAvailable: z.ZodDefault<z.ZodArray<z.ZodString>>;
            waterSource: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                unknown: "unknown";
                municipal: "municipal";
                well: "well";
            }>>>;
            sewerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                unknown: "unknown";
                municipal: "municipal";
                septic: "septic";
            }>>>;
            soilType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            floodZone: z.ZodDefault<z.ZodBoolean>;
            floodZoneDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            easements: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            surveyAvailable: z.ZodDefault<z.ZodBoolean>;
            mineralRights: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                partial: "partial";
                unknown: "unknown";
                included: "included";
                excluded: "excluded";
            }>>>;
            timberValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Business Property Catalog schema.
 * Full property catalog array.
 */
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
            parkingSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        residentialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            bedrooms: z.ZodNumber;
            bathrooms: z.ZodNumber;
            halfBaths: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            squareFootage: z.ZodNumber;
            lotSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            lotSizeUnit: z.ZodDefault<z.ZodEnum<{
                sqft: "sqft";
                acres: "acres";
                sqm: "sqm";
                hectares: "hectares";
            }>>;
            yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            basementType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                partial: "partial";
                unfinished: "unfinished";
                finished: "finished";
            }>>>;
            atticFinished: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            heatingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coolingType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            roofType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            exteriorMaterial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            garageSpaces: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            hasPool: z.ZodDefault<z.ZodBoolean>;
            hasFireplace: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        commercialDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            squareFootage: z.ZodNumber;
            usableSquareFootage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            floors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ceilingHeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            loadingDocks: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            driveInDoors: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            freightElevator: z.ZodDefault<z.ZodBoolean>;
            passengerElevator: z.ZodDefault<z.ZodBoolean>;
            zoningType: z.ZodString;
            yearBuilt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            previousUse: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            buildOutStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                partial: "partial";
                shell: "shell";
                turnkey: "turnkey";
            }>>>;
            hvacType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            powerCapacity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sprinklerSystem: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>>;
        landDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            lotSize: z.ZodNumber;
            lotSizeUnit: z.ZodDefault<z.ZodEnum<{
                sqft: "sqft";
                acres: "acres";
                sqm: "sqm";
                hectares: "hectares";
            }>>;
            zoning: z.ZodString;
            topography: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                flat: "flat";
                sloped: "sloped";
                hilly: "hilly";
                mixed: "mixed";
            }>>>;
            roadFrontage: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            roadAccess: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                paved: "paved";
                gravel: "gravel";
                dirt: "dirt";
            }>>>;
            utilitiesAvailable: z.ZodDefault<z.ZodArray<z.ZodString>>;
            waterSource: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                unknown: "unknown";
                municipal: "municipal";
                well: "well";
            }>>>;
            sewerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                none: "none";
                unknown: "unknown";
                municipal: "municipal";
                septic: "septic";
            }>>>;
            soilType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            floodZone: z.ZodDefault<z.ZodBoolean>;
            floodZoneDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            easements: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            surveyAvailable: z.ZodDefault<z.ZodBoolean>;
            mineralRights: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                partial: "partial";
                unknown: "unknown";
                included: "included";
                excluded: "excluded";
            }>>>;
            timberValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type PropertyCatalog = z.infer<typeof PropertyCatalogSchema>;
export type BusinessPropertyCatalog = z.infer<typeof BusinessPropertyCatalogSchema>;
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
    priceRange?: {
        min?: number;
        max?: number;
    };
    /** Filter by bedrooms range */
    bedroomsRange?: {
        min?: number;
        max?: number;
    };
    /** Filter by bathrooms range */
    bathroomsRange?: {
        min?: number;
        max?: number;
    };
    /** Filter by square footage range */
    squareFootageRange?: {
        min?: number;
        max?: number;
    };
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
