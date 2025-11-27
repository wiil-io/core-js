[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ServiceQRCode

# Type Alias: ServiceQRCode

```ts
type ServiceQRCode = {
  id: string;
  organizationId: string;
  appointmentUrl: string;
  qrCodeImage?: string;
  serviceId?: string;
};
```

Defined in: src/core/business-mgt/service-config.schema.ts:80

Service QR code schema for appointment booking.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/service-config.schema.ts:54 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/service-config.schema.ts:55 |
| <a id="appointmenturl"></a> `appointmentUrl` | `string` | src/core/business-mgt/service-config.schema.ts:56 |
| <a id="qrcodeimage"></a> `qrCodeImage?` | `string` | src/core/business-mgt/service-config.schema.ts:57 |
| <a id="serviceid"></a> `serviceId?` | `string` | src/core/business-mgt/service-config.schema.ts:58 |
