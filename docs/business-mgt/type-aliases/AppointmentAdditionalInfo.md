[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppointmentAdditionalInfo

# Type Alias: AppointmentAdditionalInfo

```ts
type AppointmentAdditionalInfo = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  businessServiceId: string;
  appointmentId: string;
  customerId: string;
  data: Record<string, any>;
};
```

Defined in: [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:88](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L88)

Appointment Additional Info schema.
Stores dynamic field values captured during appointment booking.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/base.schema.ts#L10) |
| <a id="businessserviceid"></a> `businessServiceId` | `string` | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:56](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L56) |
| <a id="appointmentid"></a> `appointmentId` | `string` | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:57](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L57) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:58](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L58) |
| <a id="data"></a> `data` | `Record`\<`string`, `any`\> | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:59](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L59) |
