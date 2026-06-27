[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceAvailability

# Type Alias: ServiceAvailability

```ts
type ServiceAvailability = {
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
};
```

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:149](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/business-service-config.schema.ts#L149)

Service availability schema.
Configures when a service is available for booking.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="mode"></a> `mode` | [`ServiceAvailabilityMode`](../enumerations/ServiceAvailabilityMode.md) | [src/core/business-mgt/service-management/business-service-config.schema.ts:132](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/business-service-config.schema.ts#L132) |
| <a id="weeklyschedule"></a> `weeklySchedule?` | `Record`\<`string`, \{ `isOpen`: `boolean`; `startTime`: `string`; `endTime`: `string`; \}\> | [src/core/business-mgt/service-management/business-service-config.schema.ts:134](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/business-service-config.schema.ts#L134) |
| <a id="dateranges"></a> `dateRanges?` | \{ `startDate`: `string`; `endDate`: `string`; `isExclusion`: `boolean`; \}[] | [src/core/business-mgt/service-management/business-service-config.schema.ts:136](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/business-service-config.schema.ts#L136) |
