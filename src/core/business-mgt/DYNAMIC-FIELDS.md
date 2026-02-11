# Dynamic Appointment Fields

This module provides a flexible runtime schema definition system for capturing additional appointment information that businesses may require.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Organization Level                        │
│  AppointmentFieldConfigSchema                                │
│  - Defines base field library for all services              │
│  - Reusable across multiple services                        │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ inherits via appointmentFieldConfigId
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                     Service Level                            │
│  ServiceAppointmentFieldConfigSchema (embedded in           │
│  BusinessServiceConfigSchema.requiredDatafieldConfig)       │
│  - Inherits fields from organization config                 │
│  - Can override inherited field properties                  │
│  - Can add service-specific additional fields               │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ stores values
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Appointment Level                         │
│  AppointmentAdditionalInfoSchema                            │
│  - Stores actual field values per appointment               │
│  - Links to organization, appointment, and customer         │
└─────────────────────────────────────────────────────────────┘
```

## Schema Files

| File | Purpose |
|------|---------|
| `core/dynamic-fields/field-types.ts` | Field type enum (text, number, date, etc.) |
| `core/dynamic-fields/field-definition.schema.ts` | Reusable field building blocks |
| `appointment-field-config.schema.ts` | Organization-level field configuration |
| `business-service-config.schema.ts` | Service-level field configuration (embedded) |
| `appointment-additional-info.schema.ts` | Stores field values per appointment |

## Supported Field Types

| Type | Description |
|------|-------------|
| `text` | Single-line text input |
| `textarea` | Multi-line text input |
| `number` | Numeric input |
| `boolean` | Checkbox/toggle |
| `date` | Date picker |
| `time` | Time picker |
| `datetime` | Date and time picker |
| `email` | Email input with validation |
| `phone` | Phone number input |
| `select` | Single selection dropdown |
| `multiselect` | Multiple selection input |

## Validation Rules

Each field definition supports:

- `required` - Whether field is mandatory
- `minLength` / `maxLength` - Text length constraints
- `min` / `max` - Numeric value constraints
- `pattern` - Regex pattern for custom validation
- `patternMessage` - Custom error message for pattern failures

## UI Hints

Each field definition supports:

- `placeholder` - Input placeholder text
- `helpText` - Help description shown to user
- `displayOrder` - Sort order for rendering
- `width` - Layout hint (`full`, `half`, `third`)

## Conditional Fields

Fields can be conditionally shown/hidden based on other field values using the `condition` property.

### Supported Operators

| Operator | Description |
|----------|-------------|
| `equals` | Field value equals specified value |
| `notEquals` | Field value does not equal specified value |
| `contains` | Field value contains specified value (for strings/arrays) |
| `isEmpty` | Field value is empty/null/undefined |
| `isNotEmpty` | Field value is not empty |
| `greaterThan` | Field value is greater than specified value |
| `lessThan` | Field value is less than specified value |

### Example

```typescript
{
    fieldKey: "has_allergies",
    fieldType: DynamicFieldType.BOOLEAN,
    label: "Do you have any allergies?",
    groupKey: "medical"
},
{
    fieldKey: "allergy_details",
    fieldType: DynamicFieldType.TEXTAREA,
    label: "Please describe your allergies",
    groupKey: "medical",
    condition: {
        dependsOn: "has_allergies",
        operator: "equals",
        value: true
    }
}
```

## Field Grouping

Fields can be organized into logical groups/sections using the `groupKey` property and defining groups in the configuration.

### Group Properties

| Property | Type | Description |
|----------|------|-------------|
| `groupKey` | string | Unique identifier for the group |
| `label` | string | Display label for the group |
| `description` | string? | Optional description |
| `displayOrder` | number? | Sort order for group rendering |
| `collapsible` | boolean? | Whether the group can be collapsed |
| `defaultCollapsed` | boolean? | Whether group starts collapsed |

### Example

```typescript
const orgFieldConfig: CreateAppointmentFieldConfig = {
    organizationId: "org_123",
    name: "Medical Intake Form",
    groups: [
        {
            groupKey: "contact",
            label: "Contact Information",
            displayOrder: 1
        },
        {
            groupKey: "medical",
            label: "Medical History",
            displayOrder: 2,
            collapsible: true,
            defaultCollapsed: false
        }
    ],
    fields: [
        {
            fieldKey: "phone",
            fieldType: DynamicFieldType.PHONE,
            label: "Phone Number",
            groupKey: "contact"
        },
        {
            fieldKey: "has_allergies",
            fieldType: DynamicFieldType.BOOLEAN,
            label: "Do you have any allergies?",
            groupKey: "medical"
        }
    ]
};
```

## Usage Examples

### 1. Define Organization-Level Fields

```typescript
const orgFieldConfig: CreateAppointmentFieldConfig = {
    organizationId: "org_123",
    name: "Standard Customer Info",
    description: "Common fields for all appointment types",
    isDefault: true,
    reuseDetails: true,
    fields: [
        {
            fieldKey: "allergies",
            fieldType: DynamicFieldType.TEXTAREA,
            label: "Allergies or Dietary Restrictions",
            validation: { required: true, maxLength: 500 },
            uiHints: { placeholder: "Please list any allergies...", displayOrder: 1 }
        },
        {
            fieldKey: "emergency_contact",
            fieldType: DynamicFieldType.PHONE,
            label: "Emergency Contact Number",
            validation: { required: false },
            uiHints: { displayOrder: 2 }
        }
    ]
};
```

### 2. Configure Service-Level Fields

```typescript
const businessService: CreateBusinessService = {
    organizationId: "org_123",
    name: "Spa Treatment",
    duration: 60,
    price: 100,
    requiredDatafieldConfig: {
        appointmentFieldConfigId: "config_123", // Reference to org config
        inheritedFieldKeys: ["allergies", "emergency_contact"],
        fieldOverrides: [
            {
                fieldKey: "allergies",
                validation: { required: true } // Make required for this service
            }
        ],
        additionalFields: [
            {
                fieldKey: "preferred_pressure",
                fieldType: DynamicFieldType.SELECT,
                label: "Preferred Pressure",
                options: [
                    { value: "light", label: "Light" },
                    { value: "medium", label: "Medium" },
                    { value: "firm", label: "Firm" }
                ]
            }
        ],
        isActive: true,
        reuseDetails: false
    }
};
```

### 3. Store Appointment Field Values

```typescript
const appointmentInfo: CreateAppointmentAdditionalInfo = {
    organizationId: "org_123",
    appointmentId: "appt_456",
    customerId: "cust_789",
    data: {
        allergies: "Peanuts, shellfish",
        emergency_contact: "+1234567890",
        preferred_pressure: "medium"
    }
};
```

## Flags

### `isDefault`
When `true` on `AppointmentFieldConfigSchema`, indicates this is the default field configuration for the organization.

### `reuseDetails`
When `true`, indicates that the field configuration or captured data can be reused across appointments for the same customer, avoiding redundant data entry.

### `isActive`
Controls whether the field configuration is currently active and should be used for new appointments.
