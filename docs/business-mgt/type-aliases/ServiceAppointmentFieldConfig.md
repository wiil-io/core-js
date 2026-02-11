[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.32**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceAppointmentFieldConfig

# Type Alias: ServiceAppointmentFieldConfig

```ts
type ServiceAppointmentFieldConfig = {
  inheritedFieldKeys: string[];
  fieldOverrides: {
     fieldKey: string;
     label?: string;
     validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
        pattern?: string;
        patternMessage?: string;
     };
     uiHints?: {
        placeholder?: string;
        helpText?: string;
        displayOrder?: number;
        width?: "full" | "half" | "third";
     };
     defaultValue?: any;
     isActive?: boolean;
  }[];
  additionalFields: {
     fieldKey: string;
     fieldType: DynamicFieldType;
     label: string;
     description?: string;
     validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
        pattern?: string;
        patternMessage?: string;
     };
     uiHints?: {
        placeholder?: string;
        helpText?: string;
        displayOrder?: number;
        width?: "full" | "half" | "third";
     };
     options?: {
        value: string;
        label: string;
        displayOrder?: number;
     }[];
     defaultValue?: any;
     isActive?: boolean;
     condition?: {
        dependsOn: string;
        operator:   | "equals"
           | "notEquals"
           | "contains"
           | "isEmpty"
           | "isNotEmpty"
           | "greaterThan"
           | "lessThan";
        value?: any;
     };
     groupKey?: string;
  }[];
  isActive: boolean;
  reuseDetails: boolean;
};
```

Defined in: [src/core/business-mgt/service-config.schema.ts:42](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L42)

Service-level appointment field configuration (embedded in BusinessServiceConfigSchema).

This schema represents the **Service Level** in the dynamic fields hierarchy:

```
Organization Level (AppointmentFieldConfigSchema)
        │
        ▼ inherits via appointmentFieldConfigId
Service Level (ServiceAppointmentFieldConfigSchema) ← THIS SCHEMA
        │
        ▼ stores values
Appointment Level (AppointmentAdditionalInfoSchema)
```

Allows services to:
- Inherit specific fields from the organization-level configuration
- Override properties of inherited fields (e.g., make a field required)
- Add service-specific fields not in the organization config

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="inheritedfieldkeys"></a> `inheritedFieldKeys` | `string`[] | [src/core/business-mgt/service-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L35) |
| <a id="fieldoverrides"></a> `fieldOverrides` | \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[] | [src/core/business-mgt/service-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L36) |
| <a id="additionalfields"></a> `additionalFields` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/service-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L37) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L38) |
| <a id="reusedetails"></a> `reuseDetails` | `boolean` | [src/core/business-mgt/service-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L39) |

## See

 - AppointmentFieldConfigSchema - Organization-level field definitions
 - AppointmentAdditionalInfoSchema - Stores captured field values
