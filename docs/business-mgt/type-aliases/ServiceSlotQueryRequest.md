[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceSlotQueryRequest

# Type Alias: ServiceSlotQueryRequest

```ts
type ServiceSlotQueryRequest = {
  organizationId: string;
  serviceId: string;
  localDate: string;
  locationId?: string | null;
  providerId: string;
  maxResults: number;
};
```

Defined in: src/core/business-mgt/service-management/service-slot-query.schema.ts:130

Service slot query request schema.
Used to request available appointment slots for a service.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/service-management/service-slot-query.schema.ts:51 |
| <a id="serviceid"></a> `serviceId` | `string` | src/core/business-mgt/service-management/service-slot-query.schema.ts:52 |
| <a id="localdate"></a> `localDate` | `string` | src/core/business-mgt/service-management/service-slot-query.schema.ts:53 |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/service-management/service-slot-query.schema.ts:54 |
| <a id="providerid"></a> `providerId` | `string` | src/core/business-mgt/service-management/service-slot-query.schema.ts:55 |
| <a id="maxresults"></a> `maxResults` | `number` | src/core/business-mgt/service-management/service-slot-query.schema.ts:56 |
