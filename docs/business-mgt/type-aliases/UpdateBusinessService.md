[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessService

# Type Alias: UpdateBusinessService

```ts
type UpdateBusinessService = {
  serviceRevisionId?: string | null;
  name?: string;
  description?: string | null;
  imageUrl?: string | null;
  categoryId?: string | null;
  bookingCode?: string | null;
  duration?: number;
  durationSegments?:   | {
     prep: number;
     active: number;
     processing: number;
     finish: number;
     turnover: number;
   }
     | null;
  bufferBefore?: number;
  bufferAfter?: number;
  isBookable?: boolean;
  allowsProcessingChairSwap?: boolean | null;
  serviceAvailability?:   | {
     mode: ServiceAvailabilityMode;
     weeklySchedule?: Record<string, {
        isOpen: boolean;
        startTime: string;
        endTime: string;
     }>;
     dateRanges?: {
        startDate: string;
        endDate: string;
        isExclusion: boolean;
     }[];
   }
     | null;
  maxConcurrentBookings?: number | null;
  basePrice?: number;
  priceMode?:   | FIXED
     | STARTS_AT
     | VARIABLE
     | null;
  gratuityMode?:   | NONE
     | OPTIONAL
     | REQUIRED
     | null;
  isActive?: boolean;
  displayOrder?: number | null;
  channelMappings?:   | {
     channelId: string;
     externalServiceId: string;
     externalCategoryId?: string | null;
   }[]
     | null;
  primaryServiceUserAccountId?: string | null;
  requiredResources?: string[];
  bookingRules?:   | {
     onlineEnabled: boolean;
     existingOnly: boolean;
     requiresConsult: boolean;
     maxDaysOut: number;
     minNoticeHours: number;
     lateCancelHours: number;
   }
     | null;
  depositStrategy?:   | NONE
     | FIXED
     | PERCENTAGE
     | null;
  depositValue?: number | null;
  lateCancelFeePercent?: number;
  noShowFeePercent?: number;
  requiredDatafieldConfig?:   | {
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
   }
     | null;
  placement?: {
     placementIntent: {
        mode:   | "BEGINNING"
           | "END"
           | "KEEP_CURRENT"
           | "BEFORE_ITEM"
           | "AFTER_ITEM"
           | "ABSOLUTE_INDEX";
     };
     anchorItemId?: string | null;
     absoluteIndex?: number | null;
  };
  id: string;
};
```

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:330](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L330)

Schema for updating an existing business service.
All fields optional except id (required).

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="servicerevisionid"></a> `serviceRevisionId?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:267](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L267) |
| <a id="name"></a> `name?` | `string` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:268](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L268) |
| <a id="description"></a> `description?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:269](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L269) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:270](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L270) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:271](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L271) |
| <a id="bookingcode"></a> `bookingCode?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:272](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L272) |
| <a id="duration"></a> `duration?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:275](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L275) |
| <a id="durationsegments"></a> `durationSegments?` | \| \{ `prep`: `number`; `active`: `number`; `processing`: `number`; `finish`: `number`; `turnover`: `number`; \} \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:276](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L276) |
| <a id="bufferbefore"></a> `bufferBefore?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:277](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L277) |
| <a id="bufferafter"></a> `bufferAfter?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:278](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L278) |
| <a id="isbookable"></a> `isBookable?` | `boolean` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:279](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L279) |
| <a id="allowsprocessingchairswap"></a> `allowsProcessingChairSwap?` | `boolean` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:280](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L280) |
| <a id="serviceavailability"></a> `serviceAvailability?` | \| \{ `mode`: [`ServiceAvailabilityMode`](../enumerations/ServiceAvailabilityMode.md); `weeklySchedule?`: `Record`\<`string`, \{ `isOpen`: `boolean`; `startTime`: `string`; `endTime`: `string`; \}\>; `dateRanges?`: \{ `startDate`: `string`; `endDate`: `string`; `isExclusion`: `boolean`; \}[]; \} \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:283](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L283) |
| <a id="maxconcurrentbookings"></a> `maxConcurrentBookings?` | `number` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:284](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L284) |
| <a id="baseprice"></a> `basePrice?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:287](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L287) |
| <a id="pricemode"></a> `priceMode?` | \| [`FIXED`](../enumerations/ServicePriceMode.md#fixed) \| [`STARTS_AT`](../enumerations/ServicePriceMode.md#starts_at) \| [`VARIABLE`](../enumerations/ServicePriceMode.md#variable) \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:288](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L288) |
| <a id="gratuitymode"></a> `gratuityMode?` | \| [`NONE`](../enumerations/ServiceGratuityMode.md#none) \| [`OPTIONAL`](../enumerations/ServiceGratuityMode.md#optional) \| [`REQUIRED`](../enumerations/ServiceGratuityMode.md#required) \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:289](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L289) |
| <a id="isactive"></a> `isActive?` | `boolean` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L292) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:293](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L293) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalServiceId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:294](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L294) |
| <a id="primaryserviceuseraccountid"></a> `primaryServiceUserAccountId?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:296](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L296) |
| <a id="requiredresources"></a> `requiredResources?` | `string`[] | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:297](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L297) |
| <a id="bookingrules"></a> `bookingRules?` | \| \{ `onlineEnabled`: `boolean`; `existingOnly`: `boolean`; `requiresConsult`: `boolean`; `maxDaysOut`: `number`; `minNoticeHours`: `number`; `lateCancelHours`: `number`; \} \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:298](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L298) |
| <a id="depositstrategy"></a> `depositStrategy?` | \| [`NONE`](../enumerations/ServiceDepositStrategy.md#none) \| [`FIXED`](../enumerations/ServiceDepositStrategy.md#fixed) \| [`PERCENTAGE`](../enumerations/ServiceDepositStrategy.md#percentage) \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:299](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L299) |
| <a id="depositvalue"></a> `depositValue?` | `number` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:300](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L300) |
| <a id="latecancelfeepercent"></a> `lateCancelFeePercent?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:301](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L301) |
| <a id="noshowfeepercent"></a> `noShowFeePercent?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:302](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L302) |
| <a id="requireddatafieldconfig"></a> `requiredDatafieldConfig?` | \| \{ `inheritedFieldKeys`: `string`[]; `fieldOverrides`: \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[]; `additionalFields`: \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: `boolean`; `minLength?`: `number`; `maxLength?`: `number`; `min?`: `number`; `max?`: `number`; `pattern?`: `string`; `patternMessage?`: `string`; \}; `uiHints?`: \{ `placeholder?`: `string`; `helpText?`: `string`; `displayOrder?`: `number`; `width?`: `"full"` \| `"half"` \| `"third"`; \}; `options?`: \{ `value`: `string`; `label`: `string`; `displayOrder?`: `number`; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: \| `"equals"` \| `"notEquals"` \| `"contains"` \| `"isEmpty"` \| `"isNotEmpty"` \| `"greaterThan"` \| `"lessThan"`; `value?`: `any`; \}; `groupKey?`: `string`; \}[]; `isActive`: `boolean`; `reuseDetails`: `boolean`; \} \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:305](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L305) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:317](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L317) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/type-definitions/display-order.ts#L106) |
| <a id="id"></a> `id` | `string` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:325](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/service-management/business-service-config.schema.ts#L325) |
