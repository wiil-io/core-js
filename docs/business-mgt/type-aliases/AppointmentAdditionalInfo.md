[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppointmentAdditionalInfo

# Type Alias: AppointmentAdditionalInfo

```ts
type AppointmentAdditionalInfo = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  organizationId: string;
  businessServiceId: string;
  appointmentId: string;
  customerId: string;
  data: Record<string, any>;
};
```

Defined in: [src/core/business-mgt/appointment-additional-info.schema.ts:49](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-additional-info.schema.ts#L49)

Schema for storing dynamic field values captured during appointment booking.
Links the captured data to the organization, service, appointment, and customer.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L10) |
| <a id="organizationid"></a> `organizationId` | `string` | [src/core/business-mgt/appointment-additional-info.schema.ts:42](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-additional-info.schema.ts#L42) |
| <a id="businessserviceid"></a> `businessServiceId` | `string` | [src/core/business-mgt/appointment-additional-info.schema.ts:43](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-additional-info.schema.ts#L43) |
| <a id="appointmentid"></a> `appointmentId` | `string` | [src/core/business-mgt/appointment-additional-info.schema.ts:44](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-additional-info.schema.ts#L44) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/appointment-additional-info.schema.ts:45](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-additional-info.schema.ts#L45) |
| <a id="data"></a> `data` | `Record`\<`string`, `any`\> | [src/core/business-mgt/appointment-additional-info.schema.ts:46](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/appointment-additional-info.schema.ts#L46) |
