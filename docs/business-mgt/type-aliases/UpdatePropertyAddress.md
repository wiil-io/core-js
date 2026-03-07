[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.42**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyAddress

# Type Alias: UpdatePropertyAddress

```ts
type UpdatePropertyAddress = {
  organizationId?: string;
  street?: string;
  unit?: string | null;
  city?: string;
  state?: string;
  postalCode?: string | null;
  country?: string;
  coordinates?:   | {
     latitude: number;
     longitude: number;
   }
     | null;
  neighborhood?: string | null;
  district?: string | null;
  isVerified?: boolean;
  primaryUserAccountId?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:259](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L259)

Schema for updating an existing property address.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId?` | `string` | [src/core/business-mgt/property-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L57) |
| <a id="street"></a> `street?` | `string` | [src/core/business-mgt/property-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L58) |
| <a id="unit"></a> `unit?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L59) |
| <a id="city"></a> `city?` | `string` | [src/core/business-mgt/property-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L60) |
| <a id="state"></a> `state?` | `string` | [src/core/business-mgt/property-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L61) |
| <a id="postalcode"></a> `postalCode?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L62) |
| <a id="country"></a> `country?` | `string` | [src/core/business-mgt/property-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L63) |
| <a id="coordinates"></a> `coordinates?` | \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null` | [src/core/business-mgt/property-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L64) |
| <a id="neighborhood"></a> `neighborhood?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L68) |
| <a id="district"></a> `district?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L69) |
| <a id="isverified"></a> `isVerified?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L70) |
| <a id="primaryuseraccountid"></a> `primaryUserAccountId?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:72](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L72) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-config.schema.ts:229](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-config.schema.ts#L229) |
