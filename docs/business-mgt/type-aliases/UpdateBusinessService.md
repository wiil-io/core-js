[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.32**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessService

# Type Alias: UpdateBusinessService

```ts
type UpdateBusinessService = {
  name?: string;
  description?: string;
  duration?: number;
  bufferTime?: number;
  isBookable?: boolean;
  price?: number;
  isActive?: boolean;
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
  id: string;
};
```

Defined in: [src/core/business-mgt/service-config.schema.ts:115](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L115)

Schema for updating an existing business service.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/service-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L60) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/service-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L61) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/service-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L64) |
| <a id="buffertime"></a> `bufferTime?` | `number` | [src/core/business-mgt/service-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L65) |
| <a id="isbookable"></a> `isBookable?` | `boolean` | [src/core/business-mgt/service-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L66) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/service-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L69) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/service-config.schema.ts:71](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L71) |
| <a id="requireddatafieldconfig"></a> `requiredDatafieldConfig?` | \{ `inheritedFieldKeys`: `string`[]; `fieldOverrides`: \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[]; `additionalFields`: \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[]; `isActive`: `boolean`; `reuseDetails`: `boolean`; \} | [src/core/business-mgt/service-config.schema.ts:74](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L74) |
| `requiredDatafieldConfig.inheritedFieldKeys` | `string`[] | [src/core/business-mgt/service-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L35) |
| `requiredDatafieldConfig.fieldOverrides` | \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[] | [src/core/business-mgt/service-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L36) |
| `requiredDatafieldConfig.additionalFields` | \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[] | [src/core/business-mgt/service-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L37) |
| `requiredDatafieldConfig.isActive` | `boolean` | [src/core/business-mgt/service-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L38) |
| `requiredDatafieldConfig.reuseDetails` | `boolean` | [src/core/business-mgt/service-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L39) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/service-config.schema.ts:109](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-config.schema.ts#L109) |
