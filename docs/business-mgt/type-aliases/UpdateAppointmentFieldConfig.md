[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateAppointmentFieldConfig

# Type Alias: UpdateAppointmentFieldConfig

```ts
type UpdateAppointmentFieldConfig = {
  fields?: {
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
  groups?: {
     groupKey: string;
     label: string;
     description?: string;
     displayOrder?: number;
     collapsible?: boolean;
     defaultCollapsed?: boolean;
  }[];
  reuseDetails?: boolean;
  ensureEmail?: boolean;
  ensurePhone?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/service-management/appointment-field-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L80)

Schema for updating an appointment field config.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fields"></a> `fields?` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:45](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L45) |
| <a id="groups"></a> `groups?` | \{ `groupKey`: `string`; `label`: `string`; `description?`: `string`; `displayOrder?`: `number`; `collapsible?`: `boolean`; `defaultCollapsed?`: `boolean`; \}[] | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:46](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L46) |
| <a id="reusedetails"></a> `reuseDetails?` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:47](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L47) |
| <a id="ensureemail"></a> `ensureEmail?` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L48) |
| <a id="ensurephone"></a> `ensurePhone?` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L49) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:71](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L71) |
