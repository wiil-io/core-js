[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceSlotQueryRequest

# Type Alias: ServiceSlotQueryRequest

```ts
type ServiceSlotQueryRequest = {
  serviceId: string;
  localDate: string;
  locationId?: string | null;
  providerId: string;
  maxResults: number;
};
```

Defined in: [src/core/business-mgt/service-management/service-slot-query.schema.ts:128](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/service-slot-query.schema.ts#L128)

Service slot query request schema.
Used to request available appointment slots for a service.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="serviceid"></a> `serviceId` | `string` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:50](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/service-slot-query.schema.ts#L50) |
| <a id="localdate"></a> `localDate` | `string` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:51](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/service-slot-query.schema.ts#L51) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:52](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/service-slot-query.schema.ts#L52) |
| <a id="providerid"></a> `providerId` | `string` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:53](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/service-slot-query.schema.ts#L53) |
| <a id="maxresults"></a> `maxResults` | `number` | [src/core/business-mgt/service-management/service-slot-query.schema.ts:54](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/service-management/service-slot-query.schema.ts#L54) |
