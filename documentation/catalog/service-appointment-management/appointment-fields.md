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
    fieldKey: string;               // Unique key (lowercase alphanumeric with underscores)
    fieldType: DynamicFieldType;    // Field type
    label: string;                  // Display label
    description?: string;           // Field description
    groupKey?: string;              // Group this field belongs to
    options?: FieldOption[];        // For select/multiselect types
    defaultValue?: any;             // Default value
    isActive?: boolean;             // Whether field is active
    condition?: FieldCondition;     // Conditional visibility
    validation?: FieldValidationRules; // Validation rules
    uiHints?: FieldUIHints;         // UI rendering hints
}

interface FieldValidationRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    patternMessage?: string;
}

interface FieldUIHints {
    placeholder?: string;
    helpText?: string;
    displayOrder?: number;
    width?: "full" | "half" | "third";
}

interface FieldCondition {
    dependsOn: string;              // Field key this depends on
    operator: ConditionOperator;    // Condition operator
    value?: any;                    // Value to compare
}

enum DynamicFieldType {
    TEXT = "text",
    TEXTAREA = "textarea",
    NUMBER = "number",
    BOOLEAN = "boolean",
    DATE = "date",
    TIME = "time",
    DATETIME = "datetime",
    EMAIL = "email",
    PHONE = "phone",
    SELECT = "select",
    MULTISELECT = "multiselect",
}
```

### FieldGroup Structure

```typescript
interface FieldGroup {
    groupKey: string;           // Unique key
    label: string;              // Display label
    description?: string;       // Group description
    displayOrder?: number;      // Sort order
    collapsible?: boolean;      // Can group collapse
    defaultCollapsed?: boolean; // Initial collapsed state
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
      "groupKey": "preferences",
      "options": [
        { "value": "no_preference", "label": "No Preference", "displayOrder": 0 },
        { "value": "jane", "label": "Jane Smith", "displayOrder": 1 },
        { "value": "john", "label": "John Doe", "displayOrder": 2 }
      ],
      "uiHints": {
        "displayOrder": 1
      }
    },
    {
      "fieldKey": "special_requests",
      "fieldType": "textarea",
      "label": "Special Requests",
      "groupKey": "preferences",
      "uiHints": {
        "placeholder": "Any allergies, preferences, or special requests?",
        "displayOrder": 2
      }
    },
    {
      "fieldKey": "referral_source",
      "fieldType": "select",
      "label": "How did you hear about us?",
      "groupKey": "marketing",
      "options": [
        { "value": "google", "label": "Google Search" },
        { "value": "social", "label": "Social Media" },
        { "value": "friend", "label": "Friend/Family" },
        { "value": "other", "label": "Other" }
      ],
      "validation": {
        "required": true
      },
      "uiHints": {
        "displayOrder": 1
      }
    }
  ],
  "groups": [
    {
      "groupKey": "preferences",
      "label": "Your Preferences",
      "description": "Help us personalize your experience",
      "displayOrder": 1,
      "collapsible": false
    },
    {
      "groupKey": "marketing",
      "label": "About You",
      "displayOrder": 2,
      "collapsible": true,
      "defaultCollapsed": false
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
  - `text`, `textarea`, `email`, `phone` → string
  - `number` → number
  - `boolean` → boolean
  - `date` → string (ISO format YYYY-MM-DD)
  - `time` → string (24-hour format HH:MM)
  - `datetime` → string (ISO format YYYY-MM-DDTHH:MM:SS)
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
