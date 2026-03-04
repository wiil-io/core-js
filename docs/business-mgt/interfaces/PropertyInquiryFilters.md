[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.38**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyInquiryFilters

# Interface: PropertyInquiryFilters

Defined in: [src/core/business-mgt/property-inquiry.schema.ts:136](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L136)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:137](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L137) |
| <a id="propertyid"></a> `propertyId?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:138](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L138) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:139](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L139) |
| <a id="status"></a> `status?` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md)[] | [src/core/business-mgt/property-inquiry.schema.ts:140](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L140) |
| <a id="inquirytype"></a> `inquiryType?` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | [src/core/business-mgt/property-inquiry.schema.ts:141](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L141) |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:142](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L142) |
| <a id="source"></a> `source?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:143](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L143) |
| <a id="convertedtotransaction"></a> `convertedToTransaction?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:144](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L144) |
| <a id="interestedinbuying"></a> `interestedInBuying?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:145](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L145) |
| <a id="interestedinrenting"></a> `interestedInRenting?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:146](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L146) |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:147](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L147) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | [src/core/business-mgt/property-inquiry.schema.ts:148](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L148) |
| `dateRange.start?` | `number` | [src/core/business-mgt/property-inquiry.schema.ts:148](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L148) |
| `dateRange.end?` | `number` | [src/core/business-mgt/property-inquiry.schema.ts:148](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L148) |
| <a id="followupdaterange"></a> `followUpDateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | [src/core/business-mgt/property-inquiry.schema.ts:149](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L149) |
| `followUpDateRange.start?` | `number` | [src/core/business-mgt/property-inquiry.schema.ts:149](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L149) |
| `followUpDateRange.end?` | `number` | [src/core/business-mgt/property-inquiry.schema.ts:149](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L149) |
| <a id="includedeleted"></a> `includeDeleted?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:150](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/property-inquiry.schema.ts#L150) |
