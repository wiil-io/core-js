# Property Management System Overview

This document provides comprehensive documentation for the Property Management system, covering property listings, categories, addresses, and inquiries for real estate management.

## Table of Contents

1. [Overview](#overview)
2. [PropertyCategory](#propertycategory)
3. [PropertyAddress](#propertyaddress)
4. [Property](#property)
5. [Type-Specific Details](#type-specific-details)
6. [PropertyInquiry](#propertyinquiry)
7. [Query Options](#query-options)
8. [Relationships](#relationships)
9. [Best Practices](#best-practices)

---

## Overview

The Property Management system provides a complete solution for real estate listings. It supports:

- **Property categories** for organizing listings (Luxury Homes, Commercial Offices)
- **Property addresses** with geolocation and verification
- **Properties** with type-specific details for residential, commercial, and land
- **Property inquiries** for lead tracking and viewing management
- **Catalog views** for displaying categorized property listings

---

## PropertyCategory

Organizes properties into logical groups for navigation and display.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| name | string | Yes | - | Category name (e.g., Luxury Homes, Commercial Offices) |
| description | string | No | - | Category description |
| propertyType | enum | Yes | - | Type of property (residential, commercial, land) |
| displayOrder | integer | No | - | Display order in listing |
| isDefault | boolean | Yes | false | Whether this is the default category |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | Yes | auto-generated | Last update timestamp |

### Example

```json
{
  "id": "cat_luxury_homes",
  "name": "Luxury Homes",
  "description": "Premium residential properties over $1M",
  "propertyType": "residential",
  "displayOrder": 1,
  "isDefault": false,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## PropertyAddress

Standalone address entity for property locations with verification support.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| street | string | Yes | - | Street address |
| unit | string | No | - | Unit or apartment number |
| city | string | Yes | - | City name |
| state | string | Yes | - | State or province |
| postalCode | string | No | - | Postal or ZIP code |
| country | string | Yes | - | Country |
| coordinates | object | No | - | Geographic coordinates (latitude, longitude) |
| neighborhood | string | No | - | Neighborhood or district name |
| district | string | No | - | Administrative district |
| isVerified | boolean | Yes | false | Whether address has been verified |
| verifiedAt | number | No | - | Timestamp when address was verified |
| primaryUserAccountId | string | No | - | User account managing the property |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | Yes | auto-generated | Last update timestamp |

### Coordinates Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| latitude | number | Yes | Latitude (-90 to 90) |
| longitude | number | Yes | Longitude (-180 to 180) |

### Example

```json
{
  "id": "addr_123",
  "street": "1234 Oceanview Drive",
  "unit": "PH1",
  "city": "Miami",
  "state": "FL",
  "postalCode": "33139",
  "country": "US",
  "coordinates": {
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "neighborhood": "South Beach",
  "district": "Miami Beach",
  "isVerified": true,
  "verifiedAt": 1699900000,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## Property

Main property listing with pricing, details, and type-specific information.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| categoryId | string | Yes | - | Category this property belongs to |
| title | string | Yes | - | Property listing title |
| description | string | No | - | Detailed property description |
| propertyType | enum | Yes | - | Type of property |
| propertySubType | enum | Yes | - | Subtype of property |
| addressId | string | Yes | - | ID of the property address |
| listingType | enum | Yes | - | Type of listing (sale, rent, both) |
| listingStatus | enum | Yes | DRAFT | Current listing status |
| salePrice | number | No | - | Sale price |
| salePriceCurrency | string | Yes | USD | Currency for sale price |
| rentalPrice | number | No | - | Rental price |
| rentalPeriod | enum | No | - | Rental period |
| rentalPriceCurrency | string | Yes | USD | Currency for rental price |
| priceNegotiable | boolean | Yes | false | Whether price is negotiable |
| features | object | No | - | Property features |
| condition | enum | No | - | Property condition |
| furnished | boolean | Yes | false | Whether property is furnished |
| images | array | Yes | [] | Array of image URLs |
| virtualTourUrl | string | No | - | Virtual tour URL |
| videoUrl | string | No | - | Video tour URL |
| availableFrom | number | No | - | Available from date (timestamp) |
| availableTo | number | No | - | Available until date (for rentals) |
| isActive | boolean | Yes | true | Whether property is active |
| isFeatured | boolean | Yes | false | Whether property is featured |
| isVerified | boolean | Yes | false | Whether property has been verified |
| externalId | string | No | - | External system reference ID |
| mlsNumber | string | No | - | MLS listing number |
| residentialDetails | object | No | - | Residential-specific details |
| commercialDetails | object | No | - | Commercial-specific details |
| landDetails | object | No | - | Land-specific details |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | Yes | auto-generated | Last update timestamp |

### Property Features Object

| Field | Type | Description |
|-------|------|-------------|
| parkingSpaces | integer | Number of parking spaces |
| amenities | array | List of amenities (pool, gym, etc.) |
| utilities | array | Available utilities (gas, electric, water) |

### Enums

**PropertyType:**
| Value | Description |
|-------|-------------|
| residential | Residential property |
| commercial | Commercial property |
| land | Land/lot |

**PropertySubType:**
| Value | Description |
|-------|-------------|
| house | Single-family home |
| apartment | Apartment unit |
| condo | Condominium |
| townhouse | Townhouse |
| villa | Villa |
| office | Office space |
| retail | Retail space |
| warehouse | Warehouse |
| industrial | Industrial property |
| lot | Building lot |
| farm | Farm/agricultural |
| acreage | Raw acreage |

**ListingType:**
| Value | Description |
|-------|-------------|
| sale | For sale |
| rent | For rent |
| both | For sale or rent |

**ListingStatus:**
| Value | Description |
|-------|-------------|
| DRAFT | Draft listing |
| ACTIVE | Active listing |
| PENDING | Under contract |
| SOLD | Sold |
| LEASED | Leased |
| OFF_MARKET | Temporarily off market |
| EXPIRED | Listing expired |

**RentalPeriod:**
| Value | Description |
|-------|-------------|
| daily | Daily rental |
| weekly | Weekly rental |
| monthly | Monthly rental |
| yearly | Yearly rental |

**PropertyCondition:**
| Value | Description |
|-------|-------------|
| new | New construction |
| excellent | Excellent condition |
| good | Good condition |
| fair | Fair condition |
| needs_work | Needs renovation |
| fixer_upper | Fixer-upper |

### Example

```json
{
  "id": "prop_oceanview_123",
  "categoryId": "cat_luxury_homes",
  "title": "Stunning Oceanfront Penthouse",
  "description": "Breathtaking 3BR penthouse with panoramic ocean views",
  "propertyType": "residential",
  "propertySubType": "condo",
  "addressId": "addr_123",
  "listingType": "sale",
  "listingStatus": "ACTIVE",
  "salePrice": 2500000,
  "salePriceCurrency": "USD",
  "priceNegotiable": true,
  "features": {
    "parkingSpaces": 2,
    "amenities": ["pool", "gym", "concierge", "valet"],
    "utilities": ["electric", "water", "gas", "internet"]
  },
  "condition": "excellent",
  "furnished": true,
  "images": [
    "https://example.com/img1.jpg",
    "https://example.com/img2.jpg"
  ],
  "virtualTourUrl": "https://example.com/tour",
  "isActive": true,
  "isFeatured": true,
  "isVerified": true,
  "mlsNumber": "MLS123456",
  "residentialDetails": {
    "bedrooms": 3,
    "bathrooms": 3.5,
    "squareFootage": 3200,
    "yearBuilt": 2020,
    "floors": 1,
    "hasPool": false,
    "hasFireplace": true
  },
  "createdAt": 1699900000,
  "updatedAt": 1699950000
}
```

---

## Type-Specific Details

### ResidentialDetails

For houses, apartments, condos, townhouses, villas.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| bedrooms | integer | Yes | - | Number of bedrooms |
| bathrooms | number | Yes | - | Number of bathrooms |
| halfBaths | integer | No | - | Number of half bathrooms |
| squareFootage | number | Yes | - | Total square footage |
| lotSize | number | No | - | Lot size |
| lotSizeUnit | enum | Yes | sqft | Unit for lot size |
| yearBuilt | integer | No | - | Year the property was built |
| floors | integer | No | - | Number of floors |
| basementType | enum | No | - | Basement type |
| atticFinished | boolean | No | - | Whether attic is finished |
| heatingType | string | No | - | Heating system type |
| coolingType | string | No | - | Cooling system type |
| roofType | string | No | - | Roof material |
| exteriorMaterial | string | No | - | Exterior material |
| garageSpaces | integer | No | - | Number of garage spaces |
| hasPool | boolean | Yes | false | Whether property has a pool |
| hasFireplace | boolean | Yes | false | Whether property has a fireplace |

### CommercialDetails

For office, retail, warehouse, industrial.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| squareFootage | number | Yes | - | Total square footage |
| usableSquareFootage | number | No | - | Usable square footage |
| floors | integer | No | - | Number of floors |
| ceilingHeight | number | No | - | Ceiling height in feet |
| loadingDocks | integer | No | - | Number of loading docks |
| driveInDoors | integer | No | - | Number of drive-in doors |
| freightElevator | boolean | Yes | false | Has freight elevator |
| passengerElevator | boolean | Yes | false | Has passenger elevator |
| zoningType | string | Yes | - | Zoning classification |
| yearBuilt | integer | No | - | Year the property was built |
| previousUse | string | No | - | Previous use of the property |
| buildOutStatus | enum | No | - | Build-out status (shell, partial, turnkey) |
| hvacType | string | No | - | HVAC system type |
| powerCapacity | string | No | - | Electrical power capacity |
| sprinklerSystem | boolean | Yes | false | Has sprinkler system |

### LandDetails

For lots, farms, acreage.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| lotSize | number | Yes | - | Lot size |
| lotSizeUnit | enum | Yes | acres | Unit for lot size |
| zoning | string | Yes | - | Zoning classification |
| topography | enum | No | - | Land topography |
| roadFrontage | number | No | - | Road frontage in feet |
| roadAccess | enum | No | - | Road access type |
| utilitiesAvailable | array | Yes | [] | Available utilities |
| waterSource | enum | No | - | Water source |
| sewerType | enum | No | - | Sewer type |
| soilType | string | No | - | Soil type or classification |
| floodZone | boolean | Yes | false | In a flood zone |
| floodZoneDesignation | string | No | - | FEMA flood zone designation |
| easements | string | No | - | Easements description |
| surveyAvailable | boolean | Yes | false | Survey is available |
| mineralRights | enum | No | - | Mineral rights status |
| timberValue | number | No | - | Estimated timber value |

---

## PropertyInquiry

Tracks customer inquiries about properties with viewing and follow-up management.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| propertyId | string | Yes | - | ID of the property being inquired about |
| customerId | string | No | - | ID of existing contact in system |
| inquiryType | enum | Yes | - | Type of inquiry |
| message | string | No | - | Inquiry message from the contact |
| source | string | Yes | direct | Source of the inquiry |
| status | enum | Yes | NEW | Current status of the inquiry |
| preferredViewingDate | number | No | - | Contact's preferred viewing date |
| preferredViewingTime | string | No | - | Contact's preferred viewing time |
| scheduledViewingDate | number | No | - | Scheduled viewing date |
| viewingCompleted | boolean | Yes | false | Whether viewing has been completed |
| viewingNotes | string | No | - | Notes from the viewing |
| followUpDate | number | No | - | Next follow-up date |
| followUpNotes | string | No | - | Notes for follow-up |
| assignedAgentId | string | No | - | ID of the assigned agent |
| convertedToTransaction | boolean | Yes | false | Whether inquiry converted to transaction |
| transactionId | string | No | - | ID of resulting transaction |
| transactionType | enum | No | - | Type of transaction (purchase, lease) |
| interestedInBuying | boolean | Yes | false | Interested in buying |
| interestedInRenting | boolean | Yes | false | Interested in renting |
| budgetMin | number | No | - | Minimum budget |
| budgetMax | number | No | - | Maximum budget |
| notes | string | No | - | Internal notes |
| appointmentRecordId | string | No | - | Linked appointment record ID |
| cancelReason | string | No | - | Reason for cancellation |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | Yes | auto-generated | Last update timestamp |

### Inquiry Enums

**PropertyInquiryType:**
| Value | Description |
|-------|-------------|
| general | General inquiry |
| viewing | Viewing request |
| offer | Offer inquiry |
| information | Information request |

**PropertyInquiryStatus:**
| Value | Description |
|-------|-------------|
| NEW | New inquiry |
| CONTACTED | Customer contacted |
| VIEWING_SCHEDULED | Viewing scheduled |
| VIEWING_COMPLETED | Viewing completed |
| NEGOTIATING | In negotiation |
| CONVERTED | Converted to transaction |
| CLOSED | Closed/no conversion |

### Example

```json
{
  "id": "inq_abc123",
  "propertyId": "prop_oceanview_123",
  "customerId": "cust_jane_smith",
  "inquiryType": "viewing",
  "message": "I'd like to schedule a viewing this weekend",
  "source": "website",
  "status": "VIEWING_SCHEDULED",
  "preferredViewingDate": 1700000000,
  "preferredViewingTime": "10:00 AM",
  "scheduledViewingDate": 1700050000,
  "viewingCompleted": false,
  "assignedAgentId": "agent_john",
  "interestedInBuying": true,
  "interestedInRenting": false,
  "budgetMin": 2000000,
  "budgetMax": 3000000,
  "createdAt": 1699900000,
  "updatedAt": 1699950000
}
```

---

## Query Options

### Property Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across title/description |
| categoryId | string | Filter by category ID |
| addressIds | array | Filter by address IDs |
| address | object | Filter by address properties |
| propertyType | enum | Filter by property type |
| propertySubType | enum | Filter by property sub-type |
| listingType | enum | Filter by listing type |
| listingStatus | array | Filter by listing status(es) |
| isActive | boolean | Filter by active status |
| isFeatured | boolean | Filter by featured status |
| isVerified | boolean | Filter by verified status |
| condition | enum | Filter by property condition |
| furnished | boolean | Filter by furnished status |
| priceRange | object | Filter by price range ({ min, max }) |
| bedroomsRange | object | Filter by bedrooms range ({ min, max }) |
| bathroomsRange | object | Filter by bathrooms range ({ min, max }) |
| squareFootageRange | object | Filter by square footage range ({ min, max }) |

**Sorting Fields:** `title`, `salePrice`, `rentalPrice`, `createdAt`, `displayOrder`, `squareFootage`

**Sorting Directions:** `asc`, `desc`

### PropertyAddress Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across street/city/state |
| city | string | Filter by city |
| state | string | Filter by state |
| country | string | Filter by country |
| neighborhood | string | Filter by neighborhood |
| district | string | Filter by district |
| geolocation | object | Filter by radius ({ latitude, longitude, radiusKm }) |
| isVerified | boolean | Filter by verified status |

**Sorting Fields:** `street`, `city`, `state`, `country`, `createdAt`

**Sorting Directions:** `asc`, `desc`

### PropertyInquiry Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across message/notes |
| propertyId | string | Filter by property ID |
| customerId | string | Filter by customer ID |
| status | array | Filter by status(es) |
| inquiryType | enum | Filter by inquiry type |
| assignedAgentId | string | Filter by assigned agent |
| source | string | Filter by source |
| convertedToTransaction | boolean | Filter by conversion status |
| interestedInBuying | boolean | Filter by buying interest |
| interestedInRenting | boolean | Filter by renting interest |
| viewingCompleted | boolean | Filter by viewing completed status |
| dateRange | object | Filter by date range ({ start, end }) |
| followUpDateRange | object | Filter by follow-up date range ({ start, end }) |

**Sorting Fields:** `createdAt`, `scheduledViewingDate`, `followUpDate`, `status`

**Sorting Directions:** `asc`, `desc`

**Pagination:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│                   PROPERTY MANAGEMENT STRUCTURE                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐                                              │
│   │ PropertyCategory │                                              │
│   │  (organization)  │                                              │
│   └────────┬─────────┘                                              │
│            │                                                         │
│            │ 1:N                                                     │
│            ▼                                                         │
│   ┌──────────────────┐         ┌──────────────────┐                 │
│   │    Property      │────────▶│ PropertyAddress  │                 │
│   │                  │   N:1   │                  │                 │
│   │  - title         │         │  - street        │                 │
│   │  - propertyType  │         │  - city          │                 │
│   │  - listingType   │         │  - coordinates   │                 │
│   │  - salePrice     │         │  - isVerified    │                 │
│   │  - rentalPrice   │         └──────────────────┘                 │
│   │  - *Details      │                                              │
│   └────────┬─────────┘                                              │
│            │                                                         │
│            │ 1:N                                                     │
│            ▼                                                         │
│   ┌──────────────────┐         ┌──────────────────┐                 │
│   │ PropertyInquiry  │────────▶│    Customer      │                 │
│   │                  │   N:1   │   (optional)     │                 │
│   │  - inquiryType   │         └──────────────────┘                 │
│   │  - status        │                                              │
│   │  - viewing info  │                                              │
│   │  - follow-up     │                                              │
│   └──────────────────┘                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| Property | PropertyCategory | N:1 | Properties belong to a category |
| Property | PropertyAddress | N:1 | Properties have an address |
| PropertyInquiry | Property | N:1 | Inquiries reference a property |
| PropertyInquiry | Customer | N:1 | Inquiries may link to a customer |

---

## Best Practices

### Property Listings

1. **Use appropriate property types** - Select the correct propertyType and propertySubType for accurate filtering.

2. **Populate type-specific details** - Include residentialDetails, commercialDetails, or landDetails based on propertyType.

3. **Verify addresses** - Set isVerified on PropertyAddress after confirming accuracy.

4. **Include coordinates** - Add latitude/longitude for map displays and radius searches.

5. **Set listing status correctly** - Keep listingStatus updated through the sales/rental cycle.

### Media and Presentation

6. **Multiple images** - Include multiple high-quality images for each listing.

7. **Virtual tours** - Add virtualTourUrl when available for enhanced engagement.

8. **Featured listings** - Use isFeatured to highlight premium properties.

### Inquiry Management

9. **Track inquiry source** - Populate source to understand lead channels.

10. **Assign agents promptly** - Set assignedAgentId for quick follow-up.

11. **Schedule viewings** - Update scheduledViewingDate and preferredViewingTime for viewing requests.

12. **Track conversions** - Set convertedToTransaction and transactionId when inquiries result in sales/leases.

### Data Quality

13. **Use MLS numbers** - Populate mlsNumber for MLS-listed properties.

14. **Track availability** - Set availableFrom/availableTo for rental properties.

15. **Budget tracking** - Capture budgetMin/budgetMax on inquiries for qualification.

---

## Quick Reference

### Enums

| Enum | Values |
|------|--------|
| PropertyType | residential, commercial, land |
| PropertySubType | house, apartment, condo, townhouse, villa, office, retail, warehouse, industrial, lot, farm, acreage |
| ListingType | sale, rent, both |
| ListingStatus | DRAFT, ACTIVE, PENDING, SOLD, LEASED, OFF_MARKET, EXPIRED |
| RentalPeriod | daily, weekly, monthly, yearly |
| PropertyCondition | new, excellent, good, fair, needs_work, fixer_upper |
| PropertyInquiryType | general, viewing, offer, information |
| PropertyInquiryStatus | NEW, CONTACTED, VIEWING_SCHEDULED, VIEWING_COMPLETED, NEGOTIATING, CONVERTED, CLOSED |

### Common Query Patterns

All domains support pagination with:
- `page` (integer) - Page number (1-indexed)
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
