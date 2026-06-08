# Customer Management System Overview

This document provides comprehensive documentation for the Customer Management system, covering customer profiles, customer groups, and shipping addresses.

## Table of Contents

1. [Overview](#overview)
2. [Customer](#customer)
3. [CustomerGroup](#customergroup)
4. [ShippingAddress](#shippingaddress)
5. [Query Options](#query-options)
6. [Relationships](#relationships)
7. [Best Practices](#best-practices)

---

## Overview

The Customer Management system provides a complete solution for managing customer data. It supports:

- **Customer profiles** with contact information and preferences
- **Customer groups** for pricing tiers and special terms (Retail, Wholesale, VIP)
- **Shipping addresses** with recipient details and delivery instructions
- **Custom fields** for business-specific customer attributes
- **Multi-channel tracking** via channel IDs
- **Contact preferences** including preferred language, contact method, and best time to call

---

## Customer

Individual customer record with contact information, preferences, and custom fields.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | - | Unique identifier (from BaseModelSchema) |
| `customerId` | string \| null | No | - | External system customer ID for CRM integration |
| `phone_number` | string \| null | No | - | Primary phone in E.164 format (e.g., +14155552671) |
| `firstname` | string \| null | No | - | Customer's first name |
| `lastname` | string \| null | No | - | Customer's last name |
| `company` | string | No | - | Company name for business customers |
| `timezone` | string | No | - | IANA timezone (e.g., "America/New_York") |
| `email` | string | No | - | Primary email address |
| `preferred_language` | string | Yes | "en" | ISO 639-1 language code |
| `preferred_contact_method` | enum | Yes | "EMAIL" | Preferred notification channel |
| `best_time_to_call` | enum | No | - | Optimal time for phone contact |
| `notes` | string | No | - | Internal staff notes |
| `tags` | string[] | No | - | Categorization labels for segmentation |
| `custom_fields` | object | No | - | Key-value storage for business-specific attributes |
| `channelId` | string \| null | No | - | Channel where customer was created |
| `address` | object | No | - | Primary physical address |
| `isValidatedNames` | boolean | Yes | false | Whether names have been verified |
| `customerGroupId` | string \| null | No | - | Customer group for pricing/terms |
| `createdAt` | number | Yes | - | Creation timestamp (from BaseModelSchema) |
| `updatedAt` | number | Yes | - | Last update timestamp (from BaseModelSchema) |

### Enums

**PreferredContactMethod:**
| Value | Description |
|-------|-------------|
| EMAIL | Contact via email |
| PHONE | Contact via phone call |
| SMS | Contact via text message |

**BestTimeToCall:**
| Value | Description |
|-------|-------------|
| MORNING | Morning hours (typically 8am-12pm) |
| AFTERNOON | Afternoon hours (typically 12pm-5pm) |
| EVENING | Evening hours (typically 5pm-9pm) |

### Example

```json
{
  "id": "cust_abc123",
  "customerId": "CRM-12345",
  "phone_number": "+14155552671",
  "firstname": "Jane",
  "lastname": "Smith",
  "company": "Acme Corp",
  "timezone": "America/New_York",
  "email": "jane.smith@acme.com",
  "preferred_language": "en",
  "preferred_contact_method": "EMAIL",
  "best_time_to_call": "AFTERNOON",
  "notes": "VIP customer, prefers expedited shipping",
  "tags": ["vip", "corporate", "frequent-buyer"],
  "custom_fields": {
    "loyalty_points": 5000,
    "account_manager": "John Doe"
  },
  "channelId": "channel_web",
  "address": {
    "street": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94102",
    "country": "US"
  },
  "isValidatedNames": true,
  "customerGroupId": "grp_wholesale",
  "createdAt": 1699900000,
  "updatedAt": 1699950000
}
```

---

## CustomerGroup

Groups customers for pricing tiers and special terms.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | - | Unique identifier |
| `name` | string | Yes | - | Group name (e.g., Retail, Wholesale, VIP) |
| `description` | string \| null | No | - | Group description |
| `code` | string \| null | No | - | Short code (e.g., WS, VIP, GOLD) |
| `isDefault` | boolean | Yes | false | Whether this is the default group |
| `createdAt` | number | Yes | - | Creation timestamp |
| `updatedAt` | number | Yes | - | Last update timestamp |

### Validation Rules

| Rule | Description |
|------|-------------|
| name minimum length | Name must be at least 1 character |
| Single default | Only one group should have `isDefault: true` |

### Example

```json
{
  "id": "grp_wholesale",
  "name": "Wholesale",
  "description": "Wholesale customers with volume discounts",
  "code": "WS",
  "isDefault": false,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

### Common Customer Groups

| Name | Code | Description |
|------|------|-------------|
| Retail | RTL | Standard retail customers (often default) |
| Wholesale | WS | Volume buyers with bulk pricing |
| VIP | VIP | Premium customers with special perks |
| Gold Tier | GOLD | Loyalty program top tier |
| Corporate | CORP | Business/corporate accounts |

---

## ShippingAddress

Customer shipping address record with delivery details.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | - | Unique identifier |
| `customerId` | string | Yes | - | Customer this address belongs to |
| `street` | string | Yes | - | Primary street address |
| `street2` | string | No | - | Secondary line (apt, suite, unit) |
| `city` | string | Yes | - | City or municipality |
| `state` | string | Yes | - | State, province, or region |
| `postalCode` | string | Yes | - | ZIP or postal code |
| `country` | string | Yes | - | Country code or name |
| `recipientName` | string | No | - | Name of recipient |
| `phoneNumber` | string \| null | No | - | Contact phone for delivery |
| `instructions` | string | No | - | Special delivery instructions |
| `isPrimary` | boolean | Yes | false | Whether this is the primary address |
| `createdAt` | number | Yes | - | Creation timestamp |
| `updatedAt` | number | Yes | - | Last update timestamp |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| street minimum 2 | "Street must be 2 or more characters long" |
| city minimum 2 | "City must be 2 or more characters long" |
| state minimum 2 | "State must be 2 or more characters long" |
| postalCode minimum 2 | "Postal code must be 2 or more characters long" |
| country minimum 2 | "Country must be 2 or more characters long" |
| phoneNumber format | "Invalid phone number format" (E.164) |

### Example

```json
{
  "id": "addr_xyz789",
  "customerId": "cust_abc123",
  "street": "456 Oak Avenue",
  "street2": "Suite 200",
  "city": "Los Angeles",
  "state": "CA",
  "postalCode": "90001",
  "country": "US",
  "recipientName": "Jane Smith",
  "phoneNumber": "+13105551234",
  "instructions": "Leave at front desk, call upon arrival",
  "isPrimary": true,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## Query Options

### Customer Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/email/phone |
| preferredContactMethod | array | Filter by contact method(s) |
| tags | array | Filter by tags |
| channelId | string | Filter by channel ID |
| customerGroupId | string | Filter by customer group |

**Sorting Fields:** `firstname`, `lastname`, `createdAt`

**Sorting Directions:** `asc`, `desc`

### CustomerGroup Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/description/code |
| code | string | Filter by code |
| isDefault | boolean | Filter by default status |

**Sorting Fields:** `name`, `code`, `createdAt`

**Sorting Directions:** `asc`, `desc`

### ShippingAddress Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| customerId | string | Filter by customer ID |
| isPrimary | boolean | Filter by primary status |
| country | string | Filter by country |
| city | string | Filter by city |
| state | string | Filter by state |

**Sorting Fields:** `createdAt`, `isPrimary`, `country`, `city`

**Sorting Directions:** `asc`, `desc`

**Pagination:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                 CUSTOMER MANAGEMENT STRUCTURE                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │  CustomerGroup  │                                           │
│   │  (pricing tier) │                                           │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ 1:N (customerGroupId)                              │
│            ▼                                                     │
│   ┌─────────────────┐         ┌─────────────────┐              │
│   │    Customer     │────────▶│ ShippingAddress │              │
│   │                 │   1:N   │                 │              │
│   │  - firstname    │         │  - street       │              │
│   │  - lastname     │         │  - city         │              │
│   │  - email        │         │  - state        │              │
│   │  - phone_number │         │  - postalCode   │              │
│   │  - tags         │         │  - country      │              │
│   │  - custom_fields│         │  - isPrimary    │              │
│   │  - address      │         │  - instructions │              │
│   └─────────────────┘         └─────────────────┘              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| Customer | CustomerGroup | N:1 | Customers belong to a pricing group |
| Customer | ShippingAddress | 1:N | Customers can have multiple shipping addresses |

---

## Best Practices

### Customer Data

1. **Validate phone numbers** - Always store phone numbers in E.164 format for consistency.

2. **Use customer groups** - Assign customers to groups for pricing and promotional targeting.

3. **Track channel origin** - Populate `channelId` to understand customer acquisition sources.

4. **Leverage custom fields** - Use `custom_fields` for business-specific attributes rather than modifying the schema.

5. **Tag strategically** - Use `tags` for flexible segmentation (e.g., ["vip", "gluten-free", "local"]).

### Contact Preferences

6. **Respect preferences** - Always use the customer's `preferred_contact_method` for outreach.

7. **Honor time preferences** - Schedule calls within `best_time_to_call` windows when specified.

8. **Set language correctly** - Use `preferred_language` for all customer communications.

### Shipping Addresses

9. **Mark primary address** - Ensure one address has `isPrimary: true` for default selection.

10. **Capture delivery instructions** - Always ask for `instructions` to improve delivery success.

11. **Include recipient name** - Populate `recipientName` when shipping to someone other than the customer.

### Data Quality

12. **Verify names** - Set `isValidatedNames: true` only after confirming customer identity.

13. **Keep notes current** - Update `notes` with relevant customer interactions and preferences.

14. **Deduplicate carefully** - Use `email` and `phone_number` for deduplication checks.

---

## Quick Reference

### Enums

| Enum | Values |
|------|--------|
| PreferredContactMethod | EMAIL, PHONE, SMS |
| BestTimeToCall | MORNING, AFTERNOON, EVENING |

### Common Query Patterns

All domains support pagination with:
- `page` (integer) - Page number (1-indexed)
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
