[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceProvider

# Type Alias: ServiceProvider

```ts
type ServiceProvider = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  serviceId: string;
  providerId: string;
  priceOverride?: number | null;
  durationOverride?: number | null;
  active: boolean;
};
```

Defined in: [src/core/business-mgt/service-management/service-provider.schema.ts:60](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/service-management/service-provider.schema.ts#L60)

Service Provider join schema.
Links services to providers with optional price/duration overrides.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/base.schema.ts#L10) |
| <a id="serviceid"></a> `serviceId` | `string` | [src/core/business-mgt/service-management/service-provider.schema.ts:27](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/service-management/service-provider.schema.ts#L27) |
| <a id="providerid"></a> `providerId` | `string` | [src/core/business-mgt/service-management/service-provider.schema.ts:28](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/service-management/service-provider.schema.ts#L28) |
| <a id="priceoverride"></a> `priceOverride?` | `number` \| `null` | [src/core/business-mgt/service-management/service-provider.schema.ts:29](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/service-management/service-provider.schema.ts#L29) |
| <a id="durationoverride"></a> `durationOverride?` | `number` \| `null` | [src/core/business-mgt/service-management/service-provider.schema.ts:30](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/service-management/service-provider.schema.ts#L30) |
| <a id="active"></a> `active` | `boolean` | [src/core/business-mgt/service-management/service-provider.schema.ts:31](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/service-management/service-provider.schema.ts#L31) |
