[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.69**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateAppointmentFieldConfig

# Type Alias: CreateAppointmentFieldConfig

```ts
type CreateAppointmentFieldConfig = {
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
  supportService?:   | APPOINTMENT_MANAGEMENT
     | MENU_ORDER_MANAGEMENT
     | PRODUCT_ORDER_MANAGEMENT
     | RESERVATION_MANAGEMENT
     | PROPERTY_MANAGEMENT
     | NONE
     | null;
};
```

Defined in: [src/core/business-mgt/service-management/appointment-field-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L82)

Schema for creating an appointment field config.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fields"></a> `fields` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:47](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L47) |
| <a id="groups"></a> `groups` | \{ `groupKey`: `string`; `label`: `string`; `description?`: `string`; `displayOrder?`: `number`; `collapsible?`: `boolean`; `defaultCollapsed?`: `boolean`; \}[] | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L48) |
| <a id="reusedetails"></a> `reuseDetails` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L49) |
| <a id="ensureemail"></a> `ensureEmail` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:50](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L50) |
| <a id="ensurephone"></a> `ensurePhone` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:51](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L51) |
| <a id="supportservice"></a> `supportService?` | \| [`APPOINTMENT_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#appointment_management) \| [`MENU_ORDER_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#menu_order_management) \| [`PRODUCT_ORDER_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#product_order_management) \| [`RESERVATION_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#reservation_management) \| [`PROPERTY_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#property_management) \| [`NONE`](../../type-definitions/enumerations/BusinessSupportServices.md#none) \| `null` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:52](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L52) |
