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

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "fields": {
      "type": "array",
      "items": { "$ref": "#/$defs/FieldDefinition" },
      "default": []
    },
    "groups": {
      "type": "array",
      "items": { "$ref": "#/$defs/FieldGroup" },
      "default": []
    },
    "reuseDetails": { "type": "boolean", "default": false },
    "ensureEmail": { "type": "boolean", "default": false },
    "ensurePhone": { "type": "boolean", "default": false },
    "supportService": {
      "type": ["string", "null"],
      "enum": ["appointment_management", "menu_order_management", "product_order_management", "reservation_management", "property_management", "none", null]
    }
  },
  "required": ["id"]
}
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
| `supportService` | BusinessSupportServices \| null | No | Business support service this config applies to |

### FieldDefinition Structure

```json
{
  "$id": "#/$defs/FieldDefinition",
  "type": "object",
  "properties": {
    "fieldKey": { "type": "string", "pattern": "^[a-z][a-z0-9_]*$" },
    "fieldType": {
      "type": "string",
      "enum": ["text", "textarea", "number", "boolean", "date", "time", "datetime", "email", "phone", "select", "multiselect"]
    },
    "label": { "type": "string", "minLength": 1 },
    "description": { "type": "string" },
    "groupKey": { "type": "string" },
    "options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "value": { "type": "string" },
          "label": { "type": "string" },
          "displayOrder": { "type": "integer" }
        },
        "required": ["value", "label"]
      }
    },
    "defaultValue": true,
    "isActive": { "type": "boolean" },
    "condition": {
      "type": "object",
      "properties": {
        "dependsOn": { "type": "string" },
        "operator": {
          "type": "string",
          "enum": ["equals", "notEquals", "contains", "isEmpty", "isNotEmpty", "greaterThan", "lessThan"]
        },
        "value": true
      },
      "required": ["dependsOn", "operator"]
    },
    "validation": {
      "type": "object",
      "properties": {
        "required": { "type": "boolean" },
        "minLength": { "type": "integer", "exclusiveMinimum": 0 },
        "maxLength": { "type": "integer", "exclusiveMinimum": 0 },
        "min": { "type": "number" },
        "max": { "type": "number" },
        "pattern": { "type": "string" },
        "patternMessage": { "type": "string" }
      }
    },
    "uiHints": {
      "type": "object",
      "properties": {
        "placeholder": { "type": "string" },
        "helpText": { "type": "string" },
        "displayOrder": { "type": "integer" },
        "width": { "type": "string", "enum": ["full", "half", "third"] }
      }
    }
  },
  "required": ["fieldKey", "fieldType", "label"]
}
```

### FieldGroup Structure

```json
{
  "$id": "#/$defs/FieldGroup",
  "type": "object",
  "properties": {
    "groupKey": { "type": "string" },
    "label": { "type": "string" },
    "description": { "type": "string" },
    "displayOrder": { "type": "integer" },
    "collapsible": { "type": "boolean" },
    "defaultCollapsed": { "type": "boolean" }
  },
  "required": ["groupKey", "label"]
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
  "supportService": "appointment_management",
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## AppointmentAdditionalInfo

Stores dynamic field values captured during appointment booking.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "businessServiceId": { "type": "string" },
    "appointmentId": { "type": "string" },
    "customerId": { "type": "string" },
    "data": {
      "type": "object",
      "additionalProperties": true,
      "default": {}
    }
  },
  "required": ["id", "businessServiceId", "appointmentId", "customerId"]
}
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

```json
{
  "type": "object",
  "properties": {
    "reuseDetails": { "type": "boolean" },
    "ensureEmail": { "type": "boolean" },
    "ensurePhone": { "type": "boolean" }
  }
}
```

### AppointmentFieldConfigSorting

```json
{
  "type": "object",
  "properties": {
    "field": { "type": "string", "enum": ["createdAt", "updatedAt"] },
    "direction": { "type": "string", "enum": ["asc", "desc"] }
  },
  "required": ["field", "direction"]
}
```

### AppointmentAdditionalInfoFilters

```json
{
  "type": "object",
  "properties": {
    "businessServiceId": { "type": "string" },
    "appointmentId": { "type": "string" },
    "customerId": { "type": "string" }
  }
}
```

### AppointmentAdditionalInfoSorting

```json
{
  "type": "object",
  "properties": {
    "field": { "type": "string", "enum": ["createdAt", "updatedAt"] },
    "direction": { "type": "string", "enum": ["asc", "desc"] }
  },
  "required": ["field", "direction"]
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
