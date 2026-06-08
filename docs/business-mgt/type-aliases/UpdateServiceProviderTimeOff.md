[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServiceProviderTimeOff

# Type Alias: UpdateServiceProviderTimeOff

```ts
type UpdateServiceProviderTimeOff = {
  providerId?: string;
  type?:   | RECURRING
     | SPECIFIC;
  startDate?: number;
  endDate?: number;
  reason?: string | null;
  status?:   | APPROVED
     | PENDING
     | REJECTED;
  recurrence?:   | {
     dayOfWeek: string[];
   }
     | null;
  id: string;
};
```

Defined in: src/core/business-mgt/service-management/service-time-off.schema.ts:111

Schema for updating an existing service provider time off record.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providerid"></a> `providerId?` | `string` | src/core/business-mgt/service-management/service-time-off.schema.ts:49 |
| <a id="type"></a> `type?` | \| [`RECURRING`](../../type-definitions/enumerations/ServiceProviderTimeOffType.md#recurring) \| [`SPECIFIC`](../../type-definitions/enumerations/ServiceProviderTimeOffType.md#specific) | src/core/business-mgt/service-management/service-time-off.schema.ts:50 |
| <a id="startdate"></a> `startDate?` | `number` | src/core/business-mgt/service-management/service-time-off.schema.ts:51 |
| <a id="enddate"></a> `endDate?` | `number` | src/core/business-mgt/service-management/service-time-off.schema.ts:52 |
| <a id="reason"></a> `reason?` | `string` \| `null` | src/core/business-mgt/service-management/service-time-off.schema.ts:53 |
| <a id="status"></a> `status?` | \| [`APPROVED`](../../type-definitions/enumerations/ServiceProviderTimeOffStatus.md#approved) \| [`PENDING`](../../type-definitions/enumerations/ServiceProviderTimeOffStatus.md#pending) \| [`REJECTED`](../../type-definitions/enumerations/ServiceProviderTimeOffStatus.md#rejected) | src/core/business-mgt/service-management/service-time-off.schema.ts:54 |
| <a id="recurrence"></a> `recurrence?` | \| \{ `dayOfWeek`: `string`[]; \} \| `null` | src/core/business-mgt/service-management/service-time-off.schema.ts:55 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/service-management/service-time-off.schema.ts:101 |
