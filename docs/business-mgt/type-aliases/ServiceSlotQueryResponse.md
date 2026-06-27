[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceSlotQueryResponse

# Type Alias: ServiceSlotQueryResponse

```ts
type ServiceSlotQueryResponse = {
  localDate: string;
  timezone: string;
  generatedAt: number;
  slots: {
     providerId: string;
     serviceProviderId?: string | null;
     startTimeOfDay: string;
     startMinuteOfDay: number;
     endMinuteOfDay: number;
     startTimeUtcSec: number;
     endTimeUtcSec: number;
  }[];
};
```

Defined in: [src/core/business-mgt/service-management/service-slot-query.schema.ts:130](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-slot-query.schema.ts#L130)

Service slot query response schema.
Contains available slots for the requested date.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="localdate"></a> `localDate` | `string` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:115](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-slot-query.schema.ts#L115) |
| <a id="timezone"></a> `timezone` | `string` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:116](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-slot-query.schema.ts#L116) |
| <a id="generatedat"></a> `generatedAt` | `number` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:117](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-slot-query.schema.ts#L117) |
| <a id="slots"></a> `slots` | \{ `providerId`: `string`; `serviceProviderId?`: `string` \| `null`; `startTimeOfDay`: `string`; `startMinuteOfDay`: `number`; `endMinuteOfDay`: `number`; `startTimeUtcSec`: `number`; `endTimeUtcSec`: `number`; \}[] | [src/core/business-mgt/service-management/service-slot-query.schema.ts:118](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-slot-query.schema.ts#L118) |
