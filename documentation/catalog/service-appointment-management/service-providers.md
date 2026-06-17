# Service Providers Domain

This document details the service provider schemas for managing staff members who perform services.

## Table of Contents

1. [ServicePerson](#serviceperson)
2. [ServiceProvider](#serviceprovider)
3. [ServiceProviderTimeOff](#serviceprovidertimeoff)
4. [Query Options](#query-options)

---

## ServicePerson

Represents a staff member or provider who can perform services.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "userAccountId": { "type": ["string", "null"] },
    "name": { "type": "string", "minLength": 1 },
    "avatar": { "type": ["string", "null"], "format": "uri" },
    "description": { "type": ["string", "null"] },
    "skills": { "type": ["array", "null"], "items": { "type": "string" } },
    "commissionPercent": { "type": ["number", "null"], "minimum": 0, "maximum": 100 },
    "scheduleId": { "type": ["string", "null"] },
    "bookableOnline": { "type": "boolean", "default": true },
    "bookableByStaff": { "type": "boolean", "default": true },
    "isActive": { "type": "boolean", "default": true }
  },
  "required": ["id", "name"]
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (from BaseModelSchema) |
| `locationId` | string \| null | No | Location assignment. Null = available at all locations |
| `userAccountId` | string \| null | No | Linked user account for staff login and calendar sync |
| `name` | string | Yes | Display name shown to customers during booking |
| `avatar` | string (URL) \| null | No | Provider avatar URL |
| `description` | string \| null | No | Bio/description displayed during booking |
| `skills` | string[] \| null | No | Skill IDs this provider can perform |
| `commissionPercent` | number (0-100) \| null | No | Commission percentage for payroll |
| `scheduleId` | string \| null | No | Link to scheduling system for availability |
| `bookableOnline` | boolean | Yes | Whether customers can book online (default: true) |
| `bookableByStaff` | boolean | Yes | Whether staff can assign internally (default: true) |
| `isActive` | boolean | Yes | Whether provider is active (default: true) |
| `createdAt` | number | Yes | Creation timestamp (from BaseModelSchema) |
| `updatedAt` | number | Yes | Last update timestamp (from BaseModelSchema) |

### Example

```json
{
  "id": "sp_abc123",
  "locationId": "loc_downtown",
  "userAccountId": "user_jane",
  "name": "Jane Smith",
  "avatar": "https://example.com/avatars/jane.jpg",
  "description": "Senior stylist with 10 years experience",
  "skills": ["skill_haircut", "skill_coloring", "skill_styling"],
  "commissionPercent": 45,
  "scheduleId": "sched_jane_2024",
  "bookableOnline": true,
  "bookableByStaff": true,
  "isActive": true,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## ServiceProvider

Links services to providers with optional price/duration overrides.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "serviceId": { "type": "string" },
    "providerId": { "type": "string" },
    "priceOverride": { "type": ["number", "null"], "minimum": 0 },
    "durationOverride": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "active": { "type": "boolean", "default": true }
  },
  "required": ["id", "serviceId", "providerId"]
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `serviceId` | string | Yes | Service ID being assigned |
| `providerId` | string | Yes | Provider ID (typically ServicePerson ID) |
| `priceOverride` | number \| null | No | Provider-specific price. Null = use service default |
| `durationOverride` | number \| null | No | Provider-specific duration in minutes. Null = use service default |
| `active` | boolean | Yes | Whether assignment is active (default: true) |

### Example

```json
{
  "id": "svp_xyz789",
  "serviceId": "svc_haircut",
  "providerId": "sp_abc123",
  "priceOverride": 55.00,
  "durationOverride": 45,
  "active": true,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## ServiceProviderTimeOff

Time-off records for periods when providers are unavailable.

### Enums

```json
{
  "type": ["recurring", "specific"],
  "status": ["approved", "pending", "rejected"]
}
```

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "providerId": { "type": "string" },
    "type": { "type": "string", "enum": ["recurring", "specific"] },
    "startDate": { "type": "integer", "exclusiveMinimum": 0 },
    "endDate": { "type": "integer", "exclusiveMinimum": 0 },
    "reason": { "type": ["string", "null"] },
    "status": { "type": "string", "enum": ["approved", "pending", "rejected"], "default": "pending" },
    "recurrence": {
      "oneOf": [
        {
          "type": "object",
          "properties": {
            "dayOfWeek": {
              "type": "array",
              "minItems": 1,
              "items": { "type": "string", "pattern": "^[0-6]$" }
            }
          },
          "required": ["dayOfWeek"]
        },
        { "type": "null" }
      ]
    }
  },
  "required": ["id", "providerId", "type", "startDate", "endDate"]
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `providerId` | string | Yes | Provider ID (ServicePerson ID) |
| `type` | enum | Yes | "recurring" or "specific" |
| `startDate` | number | Yes | Start timestamp (Unix) |
| `endDate` | number | Yes | End timestamp (Unix) |
| `reason` | string \| null | No | Reason for time off |
| `status` | enum | Yes | Approval status (default: "pending") |
| `recurrence` | object \| null | No | Recurrence rule (required if type = "recurring") |

### Recurrence Object

| Field | Type | Description |
|-------|------|-------------|
| `dayOfWeek` | string[] | Days of week (0=Sunday, 6=Saturday) |

### Validation Rules

- `endDate` must be >= `startDate`
- If `type` is "recurring", `recurrence` is required
- If `type` is "specific", `recurrence` must be null/empty

### Examples

**One-time vacation:**
```json
{
  "id": "pto_vacation1",
  "providerId": "sp_abc123",
  "type": "specific",
  "startDate": 1704067200,
  "endDate": 1704672000,
  "reason": "Holiday vacation",
  "status": "approved",
  "recurrence": null
}
```

**Weekly recurring (every Monday off):**
```json
{
  "id": "pto_mondays",
  "providerId": "sp_abc123",
  "type": "recurring",
  "startDate": 1704067200,
  "endDate": 1735689600,
  "reason": "Regular day off",
  "status": "approved",
  "recurrence": {
    "dayOfWeek": ["1"]
  }
}
```

---

## Query Options

### ServicePersonFilters

```json
{
  "type": "object",
  "properties": {
    "search": { "type": "string" },
    "locationId": { "type": "string" },
    "userAccountId": { "type": "string" },
    "skillId": { "type": "string" },
    "bookableOnline": { "type": "boolean" },
    "bookableByStaff": { "type": "boolean" },
    "isActive": { "type": "boolean" }
  }
}
```

### ServicePersonSorting

```json
{
  "type": "object",
  "properties": {
    "field": { "type": "string", "enum": ["name", "commissionPercent", "createdAt"] },
    "direction": { "type": "string", "enum": ["asc", "desc"] }
  },
  "required": ["field", "direction"]
}
```

### ServiceProviderFilters

```json
{
  "type": "object",
  "properties": {
    "serviceId": { "type": "string" },
    "providerId": { "type": "string" },
    "active": { "type": "boolean" }
  }
}
```

### ServiceProviderTimeOffFilters

```json
{
  "type": "object",
  "properties": {
    "providerId": { "type": "string" },
    "type": { "type": "string", "enum": ["recurring", "specific"] },
    "status": { "type": "string", "enum": ["approved", "pending", "rejected"] },
    "fromDate": { "type": "number" },
    "toDate": { "type": "number" }
  }
}
```
