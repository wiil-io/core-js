# Appointment Fields Domain

This document details the dynamic field configuration schemas for customizable booking forms.

## Table of Contents

1. [Overview](#overview)
2. [AppointmentFieldConfig](#appointmentfieldconfig)
3. [AppointmentAdditionalInfo](#appointmentadditionalinfo)
4. [Query Options](#query-options)

---

## Overview

The appointment fields system follows a three-level hierarchy:

```
Organization Level (AppointmentFieldConfig)
        │
        ▼ defines field library
Service Level (ServiceAppointmentFieldConfig) [external]
        │
        ▼ captures values
Appointment Level (AppointmentAdditionalInfo)
```

This architecture enables:
- **Reusable field definitions** at the organization level
- **Service-specific customization** of which fields to show
- **Per-appointment data capture** linked to customers

---

## AppointmentFieldConfig

Organization-level field library for appointment booking forms.

### Schema Definition

```typescript
AppointmentFieldConfigSchema = BaseModelSchema.safeExtend({
    fields: z.array(FieldDefinitionSchema).default([]),
    groups: z.array(FieldGroupSchema).default([]),
    reuseDetails: z.boolean().default(false),
    ensureEmail: z.boolean().default(false),
    ensurePhone: z.boolean().default(false),
});
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `fields` | FieldDefinition[] | Yes | Field definitions (default: []) |
| `groups` | FieldGroup[] | Yes | Field groupings (default: []) |
| `reuseDetails` | boolean | Yes | Reuse data for returning customers (default: false) |
| `ensureEmail` | boolean | Yes | Always include email field (default: false) |
| `ensurePhone` | boolean | Yes | Always include phone field (default: false) |

### FieldDefinition Structure

```typescript
interface FieldDefinition {
    fieldKey: string;           // Unique key within config
    fieldType: DynamicFieldType; // Field type
    label: string;              // Display label
    placeholder?: string;       // Placeholder text
    helpText?: string;          // Help/description text
    required?: boolean;         // Is field required
    groupKey?: string;          // Group this field belongs to
    displayOrder?: number;      // Sort order within group
    options?: SelectOption[];   // For select/multiselect types
    validation?: FieldValidation; // Validation rules
}

enum DynamicFieldType {
    TEXT = "text",
    NUMBER = "number",
    BOOLEAN = "boolean",
    DATE = "date",
    DATETIME = "datetime",
    SELECT = "select",
    MULTISELECT = "multiselect",
    EMAIL = "email",
    PHONE = "phone",
    URL = "url",
    TEXTAREA = "textarea",
}
```

### FieldGroup Structure

```typescript
interface FieldGroup {
    groupKey: string;       // Unique key
    label: string;          // Display label
    description?: string;   // Group description
    collapsible?: boolean;  // Can group collapse
    displayOrder?: number;  // Sort order
}
```

### Example

```json
{
  "id": "afc_salon_booking",
  "fields": [
    {
      "fieldKey": "preferred_stylist",
      "fieldType": "select",
      "label": "Preferred Stylist",
      "required": false,
      "groupKey": "preferences",
      "displayOrder": 1,
      "options": [
        { "value": "no_preference", "label": "No Preference" },
        { "value": "jane", "label": "Jane Smith" },
        { "value": "john", "label": "John Doe" }
      ]
    },
    {
      "fieldKey": "special_requests",
      "fieldType": "textarea",
      "label": "Special Requests",
      "placeholder": "Any allergies, preferences, or special requests?",
      "required": false,
      "groupKey": "preferences",
      "displayOrder": 2
    },
    {
      "fieldKey": "referral_source",
      "fieldType": "select",
      "label": "How did you hear about us?",
      "required": true,
      "groupKey": "marketing",
      "displayOrder": 1,
      "options": [
        { "value": "google", "label": "Google Search" },
        { "value": "social", "label": "Social Media" },
        { "value": "friend", "label": "Friend/Family" },
        { "value": "other", "label": "Other" }
      ]
    }
  ],
  "groups": [
    {
      "groupKey": "preferences",
      "label": "Your Preferences",
      "description": "Help us personalize your experience",
      "collapsible": false,
      "displayOrder": 1
    },
    {
      "groupKey": "marketing",
      "label": "About You",
      "collapsible": true,
      "displayOrder": 2
    }
  ],
  "reuseDetails": true,
  "ensureEmail": true,
  "ensurePhone": true,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## AppointmentAdditionalInfo

Stores dynamic field values captured during appointment booking.

### Schema Definition

```typescript
AppointmentAdditionalInfoSchema = BaseModelSchema.safeExtend({
    businessServiceId: z.string(),
    appointmentId: z.string(),
    customerId: z.string(),
    data: z.record(z.string(), z.any()).default({}),
});
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `businessServiceId` | string | Yes | Reference to the service |
| `appointmentId` | string | Yes | Reference to the appointment (1:1 relationship) |
| `customerId` | string | Yes | Reference to the customer |
| `data` | Record<string, any> | Yes | Key-value store of captured field values |

### Data Field Structure

The `data` field is a key-value map where:
- **Keys** correspond to `fieldKey` values from the FieldDefinition
- **Values** are typed according to the field's `fieldType`:
  - `text`, `textarea`, `email`, `phone`, `url` → string
  - `number` → number
  - `boolean` → boolean
  - `date`, `datetime` → string (ISO format) or number (timestamp)
  - `select` → string (selected value)
  - `multiselect` → string[] (selected values)

### Example

```json
{
  "id": "aai_booking_12345",
  "businessServiceId": "svc_haircut",
  "appointmentId": "apt_12345",
  "customerId": "cust_jane",
  "data": {
    "preferred_stylist": "jane",
    "special_requests": "Please use hypoallergenic products",
    "referral_source": "friend",
    "newsletter_signup": true
  },
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## Query Options

### AppointmentFieldConfigFilters

```typescript
interface AppointmentFieldConfigFilters {
    reuseDetails?: boolean;  // Filter by reuse setting
    ensureEmail?: boolean;   // Filter by email requirement
    ensurePhone?: boolean;   // Filter by phone requirement
}
```

### AppointmentFieldConfigSorting

```typescript
interface AppointmentFieldConfigSorting {
    field: "createdAt" | "updatedAt";
    direction: "asc" | "desc";
}
```

### AppointmentAdditionalInfoFilters

```typescript
interface AppointmentAdditionalInfoFilters {
    businessServiceId?: string;  // Filter by service
    appointmentId?: string;      // Filter by appointment
    customerId?: string;         // Filter by customer
}
```

### AppointmentAdditionalInfoSorting

```typescript
interface AppointmentAdditionalInfoSorting {
    field: "createdAt" | "updatedAt";
    direction: "asc" | "desc";
}
```

---

## Usage Patterns

### Creating a Booking Form

1. Fetch the `AppointmentFieldConfig` for the organization
2. Filter fields by service-level configuration (external)
3. Render form fields based on `fieldType` and groupings
4. Pre-populate values if `reuseDetails` is true and customer exists

### Capturing Field Values

1. Validate captured data against field definitions
2. Create `AppointmentAdditionalInfo` record with:
   - `appointmentId` linking to the new appointment
   - `customerId` for data reuse
   - `data` containing field key-value pairs

### Reusing Customer Data

When `reuseDetails: true`:
1. Query `AppointmentAdditionalInfo` by `customerId`
2. Get most recent entry for the same service
3. Pre-populate form fields with previous `data` values
