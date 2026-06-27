[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateServiceProvider

# Type Alias: CreateServiceProvider

```ts
type CreateServiceProvider = {
  serviceId: string;
  providerId: string;
  priceOverride?: number | null;
  durationOverride?: number | null;
  active: boolean;
};
```

Defined in: [src/core/business-mgt/service-management/service-provider.schema.ts:61](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-provider.schema.ts#L61)

Schema for creating a new service provider assignment.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="serviceid"></a> `serviceId` | `string` | [src/core/business-mgt/service-management/service-provider.schema.ts:27](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-provider.schema.ts#L27) |
| <a id="providerid"></a> `providerId` | `string` | [src/core/business-mgt/service-management/service-provider.schema.ts:28](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-provider.schema.ts#L28) |
| <a id="priceoverride"></a> `priceOverride?` | `number` \| `null` | [src/core/business-mgt/service-management/service-provider.schema.ts:29](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-provider.schema.ts#L29) |
| <a id="durationoverride"></a> `durationOverride?` | `number` \| `null` | [src/core/business-mgt/service-management/service-provider.schema.ts:30](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-provider.schema.ts#L30) |
| <a id="active"></a> `active` | `boolean` | [src/core/business-mgt/service-management/service-provider.schema.ts:31](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/service-management/service-provider.schema.ts#L31) |
