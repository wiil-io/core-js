[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

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
  supportService?:   | APPOINTMENT_MANAGEMENT
     | MENU_ORDER_MANAGEMENT
     | PRODUCT_ORDER_MANAGEMENT
     | RESERVATION_MANAGEMENT
     | PROPERTY_MANAGEMENT
     | NONE
     | null;
};
```

Defined in: [src/core/business-mgt/service-management/appointment-field-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L81)

Appointment Field Config schema.
Organization-level field library for appointment booking forms.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/base.schema.ts#L10) |
| <a id="fields"></a> `fields` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:47](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L47) |
| <a id="groups"></a> `groups` | \{ `groupKey`: `string`; `label`: `string`; `description?`: `string`; `displayOrder?`: `number`; `collapsible?`: `boolean`; `defaultCollapsed?`: `boolean`; \}[] | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L48) |
| <a id="reusedetails"></a> `reuseDetails` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L49) |
| <a id="ensureemail"></a> `ensureEmail` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:50](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L50) |
| <a id="ensurephone"></a> `ensurePhone` | `boolean` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:51](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L51) |
| <a id="supportservice"></a> `supportService?` | \| [`APPOINTMENT_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#appointment_management) \| [`MENU_ORDER_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#menu_order_management) \| [`PRODUCT_ORDER_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#product_order_management) \| [`RESERVATION_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#reservation_management) \| [`PROPERTY_MANAGEMENT`](../../type-definitions/enumerations/BusinessSupportServices.md#property_management) \| [`NONE`](../../type-definitions/enumerations/BusinessSupportServices.md#none) \| `null` | [src/core/business-mgt/service-management/appointment-field-config.schema.ts:52](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/appointment-field-config.schema.ts#L52) |
