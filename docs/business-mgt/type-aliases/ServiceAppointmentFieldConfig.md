[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

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

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:169](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/service-management/business-service-config.schema.ts#L169)

Service-level appointment field configuration (embedded).
Inherits from organization-level config and allows service-specific customization.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="inheritedfieldkeys"></a> `inheritedFieldKeys` | `string`[] | [src/core/business-mgt/service-management/business-service-config.schema.ts:162](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/service-management/business-service-config.schema.ts#L162) |
| <a id="fieldoverrides"></a> `fieldOverrides` | \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[] | [src/core/business-mgt/service-management/business-service-config.schema.ts:163](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/service-management/business-service-config.schema.ts#L163) |
| <a id="additionalfields"></a> `additionalFields` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/service-management/business-service-config.schema.ts:164](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/service-management/business-service-config.schema.ts#L164) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-management/business-service-config.schema.ts:165](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/service-management/business-service-config.schema.ts#L165) |
| <a id="reusedetails"></a> `reuseDetails` | `boolean` | [src/core/business-mgt/service-management/business-service-config.schema.ts:166](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/service-management/business-service-config.schema.ts#L166) |
