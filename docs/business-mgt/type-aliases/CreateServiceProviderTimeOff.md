[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateServiceProviderTimeOff

# Type Alias: CreateServiceProviderTimeOff

```ts
type CreateServiceProviderTimeOff = {
  providerId: string;
  type: ServiceProviderTimeOffType;
  startDate: number;
  endDate: number;
  reason?: string | null;
  status: ServiceProviderTimeOffStatus;
  recurrence?:   | {
     dayOfWeek: string[];
   }
     | null;
};
```

Defined in: src/core/business-mgt/service-management/service-time-off.schema.ts:110

Schema for creating a new service provider time off record.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providerid"></a> `providerId` | `string` | src/core/business-mgt/service-management/service-time-off.schema.ts:49 |
| <a id="type"></a> `type` | [`ServiceProviderTimeOffType`](../../type-definitions/enumerations/ServiceProviderTimeOffType.md) | src/core/business-mgt/service-management/service-time-off.schema.ts:50 |
| <a id="startdate"></a> `startDate` | `number` | src/core/business-mgt/service-management/service-time-off.schema.ts:51 |
| <a id="enddate"></a> `endDate` | `number` | src/core/business-mgt/service-management/service-time-off.schema.ts:52 |
| <a id="reason"></a> `reason?` | `string` \| `null` | src/core/business-mgt/service-management/service-time-off.schema.ts:53 |
| <a id="status"></a> `status` | [`ServiceProviderTimeOffStatus`](../../type-definitions/enumerations/ServiceProviderTimeOffStatus.md) | src/core/business-mgt/service-management/service-time-off.schema.ts:54 |
| <a id="recurrence"></a> `recurrence?` | \| \{ `dayOfWeek`: `string`[]; \} \| `null` | src/core/business-mgt/service-management/service-time-off.schema.ts:55 |
