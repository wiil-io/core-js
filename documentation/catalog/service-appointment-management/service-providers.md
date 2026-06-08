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

```typescript
ServicePersonSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    userAccountId: z.string().nullable().optional(),
    name: z.string().min(1),
    avatar: z.url().nullable().optional(),
    description: z.string().nullable().optional(),
    skills: z.array(z.string()).nullable().optional(),
    commissionPercent: z.number().min(0).max(100).nullable().optional(),
    scheduleId: z.string().nullable().optional(),
    bookableOnline: z.boolean().default(true),
    bookableByStaff: z.boolean().default(true),
    isActive: z.boolean().default(true),
});
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

```typescript
ServiceProviderSchema = BaseModelSchema.safeExtend({
    serviceId: z.string(),
    providerId: z.string(),
    priceOverride: z.number().nonnegative().nullable().optional(),
    durationOverride: z.number().int().positive().nullable().optional(),
    active: z.boolean().default(true),
});
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

```typescript
enum ServiceProviderTimeOffType {
    RECURRING = "recurring",  // Weekly recurring time off
    SPECIFIC = "specific",    // One-time time off
}

enum ServiceProviderTimeOffStatus {
    APPROVED = "approved",
    PENDING = "pending",
    REJECTED = "rejected",
}
```

### Schema Definition

```typescript
ServiceProviderTimeOffRecurrenceSchema = z.object({
    dayOfWeek: z.array(z.string().regex(/^[0-6]$/)).min(1),
});

ServiceProviderTimeOffSchema = BaseModelSchema.safeExtend({
    providerId: z.string(),
    type: z.enum(ServiceProviderTimeOffType),
    startDate: z.number().int().positive(),
    endDate: z.number().int().positive(),
    reason: z.string().nullable().optional(),
    status: z.enum(ServiceProviderTimeOffStatus).default("pending"),
    recurrence: ServiceProviderTimeOffRecurrenceSchema.nullable().optional(),
});
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

```typescript
interface ServicePersonFilters {
    search?: string;           // Text search across name/description
    locationId?: string;       // Filter by location
    userAccountId?: string;    // Filter by linked user account
    skillId?: string;          // Filter by skill
    bookableOnline?: boolean;  // Filter by online bookability
    bookableByStaff?: boolean; // Filter by staff bookability
    isActive?: boolean;        // Filter by active status
}
```

### ServicePersonSorting

```typescript
interface ServicePersonSorting {
    field: "name" | "commissionPercent" | "createdAt";
    direction: "asc" | "desc";
}
```

### ServiceProviderFilters

```typescript
interface ServiceProviderFilters {
    serviceId?: string;   // Filter by service
    providerId?: string;  // Filter by provider
    active?: boolean;     // Filter by active status
}
```

### ServiceProviderTimeOffFilters

```typescript
interface ServiceProviderTimeOffFilters {
    providerId?: string;                    // Filter by provider
    type?: ServiceProviderTimeOffType;      // Filter by type
    status?: ServiceProviderTimeOffStatus;  // Filter by status
    fromDate?: number;                      // Filter by start date
    toDate?: number;                        // Filter by end date
}
```
