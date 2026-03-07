[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppointmentFieldConfig

# Type Alias: AppointmentFieldConfig

```ts
type AppointmentFieldConfig = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  fields: {
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
  groups: {
     groupKey: string;
     label: string;
     description?: string;
     displayOrder?: number;
     collapsible?: boolean;
     defaultCollapsed?: boolean;
  }[];
  reuseDetails: boolean;
  ensureEmail: boolean;
  ensurePhone: boolean;
};
```

Defined in: [src/core/business-mgt/appointment-field-config.schema.ts:43](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-field-config.schema.ts#L43)

Organization-level appointment field configuration.
Defines the base field library available to all services within an organization.
Services reference this configuration via `appointmentFieldConfigId` and can
selectively inherit, override, or extend the defined fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L10) |
| <a id="fields"></a> `fields` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/appointment-field-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-field-config.schema.ts#L36) |
| <a id="groups"></a> `groups` | \{ `groupKey`: `string`; `label`: `string`; `description?`: `string`; `displayOrder?`: `number`; `collapsible?`: `boolean`; `defaultCollapsed?`: `boolean`; \}[] | [src/core/business-mgt/appointment-field-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-field-config.schema.ts#L37) |
| <a id="reusedetails"></a> `reuseDetails` | `boolean` | [src/core/business-mgt/appointment-field-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-field-config.schema.ts#L38) |
| <a id="ensureemail"></a> `ensureEmail` | `boolean` | [src/core/business-mgt/appointment-field-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-field-config.schema.ts#L39) |
| <a id="ensurephone"></a> `ensurePhone` | `boolean` | [src/core/business-mgt/appointment-field-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-field-config.schema.ts#L40) |
