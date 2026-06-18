[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServiceProvider

# Type Alias: UpdateServiceProvider

```ts
type UpdateServiceProvider = {
  serviceId?: string;
  providerId?: string;
  priceOverride?: number | null;
  durationOverride?: number | null;
  active?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/service-management/service-provider.schema.ts:62](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/service-management/service-provider.schema.ts#L62)

Schema for updating an existing service provider assignment.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="serviceid"></a> `serviceId?` | `string` | [src/core/business-mgt/service-management/service-provider.schema.ts:27](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/service-management/service-provider.schema.ts#L27) |
| <a id="providerid"></a> `providerId?` | `string` | [src/core/business-mgt/service-management/service-provider.schema.ts:28](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/service-management/service-provider.schema.ts#L28) |
| <a id="priceoverride"></a> `priceOverride?` | `number` \| `null` | [src/core/business-mgt/service-management/service-provider.schema.ts:29](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/service-management/service-provider.schema.ts#L29) |
| <a id="durationoverride"></a> `durationOverride?` | `number` \| `null` | [src/core/business-mgt/service-management/service-provider.schema.ts:30](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/service-management/service-provider.schema.ts#L30) |
| <a id="active"></a> `active?` | `boolean` | [src/core/business-mgt/service-management/service-provider.schema.ts:31](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/service-management/service-provider.schema.ts#L31) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/service-management/service-provider.schema.ts:53](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/service-management/service-provider.schema.ts#L53) |
