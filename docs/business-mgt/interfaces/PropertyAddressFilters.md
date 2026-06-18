[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyAddressFilters

# Interface: PropertyAddressFilters

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:504](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L504)

Property address filter options.
 PropertyAddressFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across street/city/state | [src/core/business-mgt/property-management/property-config.schema.ts:506](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L506) |
| <a id="city"></a> `city?` | `string` | Filter by city | [src/core/business-mgt/property-management/property-config.schema.ts:508](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L508) |
| <a id="state"></a> `state?` | `string` | Filter by state | [src/core/business-mgt/property-management/property-config.schema.ts:510](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L510) |
| <a id="country"></a> `country?` | `string` | Filter by country | [src/core/business-mgt/property-management/property-config.schema.ts:512](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L512) |
| <a id="neighborhood"></a> `neighborhood?` | `string` | Filter by neighborhood | [src/core/business-mgt/property-management/property-config.schema.ts:514](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L514) |
| <a id="district"></a> `district?` | `string` | Filter by district | [src/core/business-mgt/property-management/property-config.schema.ts:516](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L516) |
| <a id="geolocation"></a> `geolocation?` | \{ `latitude`: `number`; `longitude`: `number`; `radiusKm`: `number`; \} | Filter by geolocation radius | [src/core/business-mgt/property-management/property-config.schema.ts:518](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L518) |
| `geolocation.latitude` | `number` | - | [src/core/business-mgt/property-management/property-config.schema.ts:519](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L519) |
| `geolocation.longitude` | `number` | - | [src/core/business-mgt/property-management/property-config.schema.ts:520](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L520) |
| `geolocation.radiusKm` | `number` | - | [src/core/business-mgt/property-management/property-config.schema.ts:521](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L521) |
| <a id="isverified"></a> `isVerified?` | `boolean` | Filter by verified status | [src/core/business-mgt/property-management/property-config.schema.ts:524](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/property-management/property-config.schema.ts#L524) |
