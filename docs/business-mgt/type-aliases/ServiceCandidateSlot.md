[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceCandidateSlot

# Type Alias: ServiceCandidateSlot

```ts
type ServiceCandidateSlot = {
  providerId: string;
  serviceProviderId?: string | null;
  startTimeOfDay: string;
  startMinuteOfDay: number;
  endMinuteOfDay: number;
  startTimeUtcSec: number;
  endTimeUtcSec: number;
};
```

Defined in: [src/core/business-mgt/service-management/service-slot-query.schema.ts:131](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L131)

Service candidate slot schema.
Represents an available time slot for booking.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providerid"></a> `providerId` | `string` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:77](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L77) |
| <a id="serviceproviderid"></a> `serviceProviderId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:78](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L78) |
| <a id="starttimeofday"></a> `startTimeOfDay` | `string` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:79](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L79) |
| <a id="startminuteofday"></a> `startMinuteOfDay` | `number` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:80](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L80) |
| <a id="endminuteofday"></a> `endMinuteOfDay` | `number` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:81](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L81) |
| <a id="starttimeutcsec"></a> `startTimeUtcSec` | `number` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:82](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L82) |
| <a id="endtimeutcsec"></a> `endTimeUtcSec` | `number` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:83](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-slot-query.schema.ts#L83) |
