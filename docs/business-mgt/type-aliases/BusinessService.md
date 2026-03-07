[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.41**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessService

# Type Alias: BusinessService

```ts
type BusinessService = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  description: string;
  duration: number;
  bufferTime: number;
  isBookable: boolean;
  price?: number;
  isActive: boolean;
  requiredDatafieldConfig?: {
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
};
```

Defined in: [src/core/business-mgt/service-config.schema.ts:111](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L111)

Business service configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/service-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L59) |
| <a id="description"></a> `description` | `string` | [src/core/business-mgt/service-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L60) |
| <a id="duration"></a> `duration` | `number` | [src/core/business-mgt/service-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L63) |
| <a id="buffertime"></a> `bufferTime` | `number` | [src/core/business-mgt/service-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L64) |
| <a id="isbookable"></a> `isBookable` | `boolean` | [src/core/business-mgt/service-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L65) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/service-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L68) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L70) |
| <a id="requireddatafieldconfig"></a> `requiredDatafieldConfig?` | \{ `inheritedFieldKeys`: `string`[]; `fieldOverrides`: \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[]; `additionalFields`: \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[]; `isActive`: `boolean`; `reuseDetails`: `boolean`; \} | [src/core/business-mgt/service-config.schema.ts:73](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L73) |
| `requiredDatafieldConfig.inheritedFieldKeys` | `string`[] | [src/core/business-mgt/service-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L35) |
| `requiredDatafieldConfig.fieldOverrides` | \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[] | [src/core/business-mgt/service-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L36) |
| `requiredDatafieldConfig.additionalFields` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/service-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L37) |
| `requiredDatafieldConfig.isActive` | `boolean` | [src/core/business-mgt/service-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L38) |
| `requiredDatafieldConfig.reuseDetails` | `boolean` | [src/core/business-mgt/service-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/business-mgt/service-config.schema.ts#L39) |
