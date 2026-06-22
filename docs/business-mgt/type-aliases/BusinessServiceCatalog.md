[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessServiceCatalog

# Type Alias: BusinessServiceCatalog

```ts
type BusinessServiceCatalog = {
  serviceCategory: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     serviceRevisionId?: string | null;
     name: string;
     description?: string | null;
     imageUrl?: string | null;
     channelMappings?:   | {
        channelId: string;
        externalCategoryId: string;
      }[]
        | null;
     displayOrder?: number | null;
     isActive: boolean;
  };
  services: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     serviceRevisionId?: string | null;
     name: string;
     description?: string | null;
     imageUrl?: string | null;
     categoryId?: string | null;
     bookingCode?: string | null;
     duration: number;
     durationSegments?:   | {
        prep: number;
        active: number;
        processing: number;
        finish: number;
        turnover: number;
      }
        | null;
     bufferBefore: number;
     bufferAfter: number;
     isBookable: boolean;
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
     basePrice: number;
     priceMode?:   | FIXED
        | STARTS_AT
        | VARIABLE
        | null;
     gratuityMode?:   | NONE
        | OPTIONAL
        | REQUIRED
        | null;
     isActive: boolean;
     displayOrder?: number | null;
     channelMappings?:   | {
        channelId: string;
        externalServiceId: string;
        externalCategoryId?: string | null;
      }[]
        | null;
     primaryServiceUserAccountId?: string | null;
     requiredResources: string[];
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
     lateCancelFeePercent: number;
     noShowFeePercent: number;
     requiredDatafieldConfig?:   | {
        inheritedFieldKeys: string[];
        fieldOverrides: {
           fieldKey: string;
           label?: string;
           validation?: {
              required?: ... | ... | ...;
              minLength?: ... | ...;
              maxLength?: ... | ...;
              min?: ... | ...;
              max?: ... | ...;
              pattern?: ... | ...;
              patternMessage?: ... | ...;
           };
           uiHints?: {
              placeholder?: ... | ...;
              helpText?: ... | ...;
              displayOrder?: ... | ...;
              width?: ... | ... | ... | ...;
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
              required?: ... | ... | ...;
              minLength?: ... | ...;
              maxLength?: ... | ...;
              min?: ... | ...;
              max?: ... | ...;
              pattern?: ... | ...;
              patternMessage?: ... | ...;
           };
           uiHints?: {
              placeholder?: ... | ...;
              helpText?: ... | ...;
              displayOrder?: ... | ...;
              width?: ... | ... | ... | ...;
           };
           options?: {
              value: ...;
              label: ...;
              displayOrder?: ...;
           }[];
           defaultValue?: any;
           isActive?: boolean;
           condition?: {
              dependsOn: string;
              operator: ... | ... | ... | ... | ... | ... | ...;
              value?: any;
           };
           groupKey?: string;
        }[];
        isActive: boolean;
        reuseDetails: boolean;
      }
        | null;
  }[];
}[];
```

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:357](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L357)

Business service catalog schema.
Array of service categories with their services.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `serviceCategory` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `serviceRevisionId?`: `string` \| `null`; `name`: `string`; `description?`: `string` \| `null`; `imageUrl?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `displayOrder?`: `number` \| `null`; `isActive`: `boolean`; \} | `ServiceCategorySchema` | [src/core/business-mgt/service-management/business-service-config.schema.ts:345](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L345) |
| `serviceCategory.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L8) |
| `serviceCategory.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L9) |
| `serviceCategory.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L10) |
| `serviceCategory.serviceRevisionId?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:191](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L191) |
| `serviceCategory.name` | `string` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L192) |
| `serviceCategory.description?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:193](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L193) |
| `serviceCategory.imageUrl?` | `string` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:194](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L194) |
| `serviceCategory.channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L195) |
| `serviceCategory.displayOrder?` | `number` \| `null` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:196](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L196) |
| `serviceCategory.isActive` | `boolean` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L197) |
| `services` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `serviceRevisionId?`: `string` \| `null`; `name`: `string`; `description?`: `string` \| `null`; `imageUrl?`: `string` \| `null`; `categoryId?`: `string` \| `null`; `bookingCode?`: `string` \| `null`; `duration`: `number`; `durationSegments?`: \| \{ `prep`: `number`; `active`: `number`; `processing`: `number`; `finish`: `number`; `turnover`: `number`; \} \| `null`; `bufferBefore`: `number`; `bufferAfter`: `number`; `isBookable`: `boolean`; `allowsProcessingChairSwap?`: `boolean` \| `null`; `serviceAvailability?`: \| \{ `mode`: [`ServiceAvailabilityMode`](../enumerations/ServiceAvailabilityMode.md); `weeklySchedule?`: `Record`\<`string`, \{ `isOpen`: `boolean`; `startTime`: `string`; `endTime`: `string`; \}\>; `dateRanges?`: \{ `startDate`: `string`; `endDate`: `string`; `isExclusion`: `boolean`; \}[]; \} \| `null`; `maxConcurrentBookings?`: `number` \| `null`; `basePrice`: `number`; `priceMode?`: \| [`FIXED`](../enumerations/ServicePriceMode.md#fixed) \| [`STARTS_AT`](../enumerations/ServicePriceMode.md#starts_at) \| [`VARIABLE`](../enumerations/ServicePriceMode.md#variable) \| `null`; `gratuityMode?`: \| [`NONE`](../enumerations/ServiceGratuityMode.md#none) \| [`OPTIONAL`](../enumerations/ServiceGratuityMode.md#optional) \| [`REQUIRED`](../enumerations/ServiceGratuityMode.md#required) \| `null`; `isActive`: `boolean`; `displayOrder?`: `number` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalServiceId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `primaryServiceUserAccountId?`: `string` \| `null`; `requiredResources`: `string`[]; `bookingRules?`: \| \{ `onlineEnabled`: `boolean`; `existingOnly`: `boolean`; `requiresConsult`: `boolean`; `maxDaysOut`: `number`; `minNoticeHours`: `number`; `lateCancelHours`: `number`; \} \| `null`; `depositStrategy?`: \| [`NONE`](../enumerations/ServiceDepositStrategy.md#none) \| [`FIXED`](../enumerations/ServiceDepositStrategy.md#fixed) \| [`PERCENTAGE`](../enumerations/ServiceDepositStrategy.md#percentage) \| `null`; `depositValue?`: `number` \| `null`; `lateCancelFeePercent`: `number`; `noShowFeePercent`: `number`; `requiredDatafieldConfig?`: \| \{ `inheritedFieldKeys`: `string`[]; `fieldOverrides`: \{ `fieldKey`: `string`; `label?`: `string`; `validation?`: \{ `required?`: ... \| ... \| ...; `minLength?`: ... \| ...; `maxLength?`: ... \| ...; `min?`: ... \| ...; `max?`: ... \| ...; `pattern?`: ... \| ...; `patternMessage?`: ... \| ...; \}; `uiHints?`: \{ `placeholder?`: ... \| ...; `helpText?`: ... \| ...; `displayOrder?`: ... \| ...; `width?`: ... \| ... \| ... \| ...; \}; `defaultValue?`: `any`; `isActive?`: `boolean`; \}[]; `additionalFields`: \{ `fieldKey`: `string`; `fieldType`: `DynamicFieldType`; `label`: `string`; `description?`: `string`; `validation?`: \{ `required?`: ... \| ... \| ...; `minLength?`: ... \| ...; `maxLength?`: ... \| ...; `min?`: ... \| ...; `max?`: ... \| ...; `pattern?`: ... \| ...; `patternMessage?`: ... \| ...; \}; `uiHints?`: \{ `placeholder?`: ... \| ...; `helpText?`: ... \| ...; `displayOrder?`: ... \| ...; `width?`: ... \| ... \| ... \| ...; \}; `options?`: \{ `value`: ...; `label`: ...; `displayOrder?`: ...; \}[]; `defaultValue?`: `any`; `isActive?`: `boolean`; `condition?`: \{ `dependsOn`: `string`; `operator`: ... \| ... \| ... \| ... \| ... \| ... \| ...; `value?`: `any`; \}; `groupKey?`: `string`; \}[]; `isActive`: `boolean`; `reuseDetails`: `boolean`; \} \| `null`; \}[] | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:346](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/business-service-config.schema.ts#L346) |
