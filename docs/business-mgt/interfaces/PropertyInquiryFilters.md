[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyInquiryFilters

# Interface: PropertyInquiryFilters

Defined in: src/core/business-mgt/property-inquiry.schema.ts:135

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | src/core/business-mgt/property-inquiry.schema.ts:136 |
| <a id="propertyid"></a> `propertyId?` | `string` | src/core/business-mgt/property-inquiry.schema.ts:137 |
| <a id="customerid"></a> `customerId?` | `string` | src/core/business-mgt/property-inquiry.schema.ts:138 |
| <a id="status"></a> `status?` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md)[] | src/core/business-mgt/property-inquiry.schema.ts:139 |
| <a id="inquirytype"></a> `inquiryType?` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | src/core/business-mgt/property-inquiry.schema.ts:140 |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` | src/core/business-mgt/property-inquiry.schema.ts:141 |
| <a id="source"></a> `source?` | `string` | src/core/business-mgt/property-inquiry.schema.ts:142 |
| <a id="convertedtotransaction"></a> `convertedToTransaction?` | `boolean` | src/core/business-mgt/property-inquiry.schema.ts:143 |
| <a id="interestedinbuying"></a> `interestedInBuying?` | `boolean` | src/core/business-mgt/property-inquiry.schema.ts:144 |
| <a id="interestedinrenting"></a> `interestedInRenting?` | `boolean` | src/core/business-mgt/property-inquiry.schema.ts:145 |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | src/core/business-mgt/property-inquiry.schema.ts:146 |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | src/core/business-mgt/property-inquiry.schema.ts:147 |
| `dateRange.start?` | `number` | src/core/business-mgt/property-inquiry.schema.ts:147 |
| `dateRange.end?` | `number` | src/core/business-mgt/property-inquiry.schema.ts:147 |
| <a id="followupdaterange"></a> `followUpDateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | src/core/business-mgt/property-inquiry.schema.ts:148 |
| `followUpDateRange.start?` | `number` | src/core/business-mgt/property-inquiry.schema.ts:148 |
| `followUpDateRange.end?` | `number` | src/core/business-mgt/property-inquiry.schema.ts:148 |
| <a id="includedeleted"></a> `includeDeleted?` | `boolean` | src/core/business-mgt/property-inquiry.schema.ts:149 |
