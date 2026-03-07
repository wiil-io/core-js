[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.42**](../../README.md)

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

Defined in: [src/core/business-mgt/appointment-field-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/appointment-field-config.schema.ts#L56)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fields"></a> `fields?` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/appointment-field-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/appointment-field-config.schema.ts#L36) |
| <a id="groups"></a> `groups?` | \{ `groupKey`: `string`; `label`: `string`; `description?`: `string`; `displayOrder?`: `number`; `collapsible?`: `boolean`; `defaultCollapsed?`: `boolean`; \}[] | [src/core/business-mgt/appointment-field-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/appointment-field-config.schema.ts#L37) |
| <a id="reusedetails"></a> `reuseDetails?` | `boolean` | [src/core/business-mgt/appointment-field-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/appointment-field-config.schema.ts#L38) |
| <a id="ensureemail"></a> `ensureEmail?` | `boolean` | [src/core/business-mgt/appointment-field-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/appointment-field-config.schema.ts#L39) |
| <a id="ensurephone"></a> `ensurePhone?` | `boolean` | [src/core/business-mgt/appointment-field-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/appointment-field-config.schema.ts#L40) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/appointment-field-config.schema.ts:53](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/appointment-field-config.schema.ts#L53) |
