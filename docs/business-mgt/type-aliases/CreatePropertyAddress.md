[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreatePropertyAddress

# Type Alias: CreatePropertyAddress

```ts
type CreatePropertyAddress = {
  street: string;
  unit?: string | null;
  city: string;
  state: string;
  postalCode?: string | null;
  country: string;
  coordinates?:   | {
     latitude: number;
     longitude: number;
   }
     | null;
  neighborhood?: string | null;
  district?: string | null;
  isVerified: boolean;
  primaryUserAccountId?: string | null;
};
```

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:395](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L395)

Schema for creating a new property address.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="street"></a> `street` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L67) |
| <a id="unit"></a> `unit?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L68) |
| <a id="city"></a> `city` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L69) |
| <a id="state"></a> `state` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L70) |
| <a id="postalcode"></a> `postalCode?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:71](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L71) |
| <a id="country"></a> `country` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:72](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L72) |
| <a id="coordinates"></a> `coordinates?` | \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:73](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L73) |
| <a id="neighborhood"></a> `neighborhood?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L77) |
| <a id="district"></a> `district?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L78) |
| <a id="isverified"></a> `isVerified` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L79) |
| <a id="primaryuseraccountid"></a> `primaryUserAccountId?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/property-management/property-config.schema.ts#L81) |
