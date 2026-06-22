[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

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

Defined in: [src/core/business-mgt/service-management/service-time-off.schema.ts:110](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L110)

Schema for creating a new service provider time off record.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providerid"></a> `providerId` | `string` | [src/core/business-mgt/service-management/service-time-off.schema.ts:49](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L49) |
| <a id="type"></a> `type` | [`ServiceProviderTimeOffType`](../../type-definitions/enumerations/ServiceProviderTimeOffType.md) | [src/core/business-mgt/service-management/service-time-off.schema.ts:50](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L50) |
| <a id="startdate"></a> `startDate` | `number` | [src/core/business-mgt/service-management/service-time-off.schema.ts:51](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L51) |
| <a id="enddate"></a> `endDate` | `number` | [src/core/business-mgt/service-management/service-time-off.schema.ts:52](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L52) |
| <a id="reason"></a> `reason?` | `string` \| `null` | [src/core/business-mgt/service-management/service-time-off.schema.ts:53](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L53) |
| <a id="status"></a> `status` | [`ServiceProviderTimeOffStatus`](../../type-definitions/enumerations/ServiceProviderTimeOffStatus.md) | [src/core/business-mgt/service-management/service-time-off.schema.ts:54](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L54) |
| <a id="recurrence"></a> `recurrence?` | \| \{ `dayOfWeek`: `string`[]; \} \| `null` | [src/core/business-mgt/service-management/service-time-off.schema.ts:55](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/service-management/service-time-off.schema.ts#L55) |
