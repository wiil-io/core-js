[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyInquiryFilters

# Interface: PropertyInquiryFilters

Defined in: src/core/business-mgt/property-management/property-inquiry.schema.ts:151

Property inquiry filter options.
 PropertyInquiryFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across message/notes | src/core/business-mgt/property-management/property-inquiry.schema.ts:153 |
| <a id="propertyid"></a> `propertyId?` | `string` | Filter by property ID | src/core/business-mgt/property-management/property-inquiry.schema.ts:155 |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | src/core/business-mgt/property-management/property-inquiry.schema.ts:157 |
| <a id="status"></a> `status?` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md)[] | Filter by status(es) | src/core/business-mgt/property-management/property-inquiry.schema.ts:159 |
| <a id="inquirytype"></a> `inquiryType?` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | Filter by inquiry type | src/core/business-mgt/property-management/property-inquiry.schema.ts:161 |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` | Filter by assigned agent | src/core/business-mgt/property-management/property-inquiry.schema.ts:163 |
| <a id="source"></a> `source?` | `string` | Filter by source | src/core/business-mgt/property-management/property-inquiry.schema.ts:165 |
| <a id="convertedtotransaction"></a> `convertedToTransaction?` | `boolean` | Filter by conversion status | src/core/business-mgt/property-management/property-inquiry.schema.ts:167 |
| <a id="interestedinbuying"></a> `interestedInBuying?` | `boolean` | Filter by buying interest | src/core/business-mgt/property-management/property-inquiry.schema.ts:169 |
| <a id="interestedinrenting"></a> `interestedInRenting?` | `boolean` | Filter by renting interest | src/core/business-mgt/property-management/property-inquiry.schema.ts:171 |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | Filter by viewing completed status | src/core/business-mgt/property-management/property-inquiry.schema.ts:173 |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by date range | src/core/business-mgt/property-management/property-inquiry.schema.ts:175 |
| `dateRange.start?` | `number` | - | src/core/business-mgt/property-management/property-inquiry.schema.ts:175 |
| `dateRange.end?` | `number` | - | src/core/business-mgt/property-management/property-inquiry.schema.ts:175 |
| <a id="followupdaterange"></a> `followUpDateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by follow-up date range | src/core/business-mgt/property-management/property-inquiry.schema.ts:177 |
| `followUpDateRange.start?` | `number` | - | src/core/business-mgt/property-management/property-inquiry.schema.ts:177 |
| `followUpDateRange.end?` | `number` | - | src/core/business-mgt/property-management/property-inquiry.schema.ts:177 |
