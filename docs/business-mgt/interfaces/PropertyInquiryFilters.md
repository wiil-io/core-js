[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyInquiryFilters

# Interface: PropertyInquiryFilters

Defined in: [src/core/business-mgt/property-management/property-inquiry.schema.ts:163](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L163)

Property inquiry filter options.
 PropertyInquiryFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across message/notes | [src/core/business-mgt/property-management/property-inquiry.schema.ts:165](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L165) |
| <a id="propertyid"></a> `propertyId?` | `string` | Filter by property ID | [src/core/business-mgt/property-management/property-inquiry.schema.ts:167](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L167) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/property-management/property-inquiry.schema.ts:169](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L169) |
| <a id="status"></a> `status?` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md)[] | Filter by status(es) | [src/core/business-mgt/property-management/property-inquiry.schema.ts:171](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L171) |
| <a id="inquirytype"></a> `inquiryType?` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | Filter by inquiry type | [src/core/business-mgt/property-management/property-inquiry.schema.ts:173](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L173) |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` | Filter by assigned agent | [src/core/business-mgt/property-management/property-inquiry.schema.ts:175](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L175) |
| <a id="source"></a> `source?` | `string` | Filter by source | [src/core/business-mgt/property-management/property-inquiry.schema.ts:177](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L177) |
| <a id="convertedtotransaction"></a> `convertedToTransaction?` | `boolean` | Filter by conversion status | [src/core/business-mgt/property-management/property-inquiry.schema.ts:179](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L179) |
| <a id="interestedinbuying"></a> `interestedInBuying?` | `boolean` | Filter by buying interest | [src/core/business-mgt/property-management/property-inquiry.schema.ts:181](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L181) |
| <a id="interestedinrenting"></a> `interestedInRenting?` | `boolean` | Filter by renting interest | [src/core/business-mgt/property-management/property-inquiry.schema.ts:183](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L183) |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | Filter by viewing completed status | [src/core/business-mgt/property-management/property-inquiry.schema.ts:185](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L185) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by date range | [src/core/business-mgt/property-management/property-inquiry.schema.ts:187](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L187) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/property-management/property-inquiry.schema.ts:187](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L187) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/property-management/property-inquiry.schema.ts:187](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L187) |
| <a id="followupdaterange"></a> `followUpDateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by follow-up date range | [src/core/business-mgt/property-management/property-inquiry.schema.ts:189](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L189) |
| `followUpDateRange.start?` | `number` | - | [src/core/business-mgt/property-management/property-inquiry.schema.ts:189](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L189) |
| `followUpDateRange.end?` | `number` | - | [src/core/business-mgt/property-management/property-inquiry.schema.ts:189](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/property-management/property-inquiry.schema.ts#L189) |
