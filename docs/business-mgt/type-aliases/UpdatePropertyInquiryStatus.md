[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.36**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyInquiryStatus

# Type Alias: UpdatePropertyInquiryStatus

```ts
type UpdatePropertyInquiryStatus = {
  id: string;
  status: PropertyInquiryStatus;
  scheduledViewingDate?: number | null;
  viewingCompleted?: boolean;
  viewingNotes?: string | null;
  followUpDate?: number | null;
  followUpNotes?: string | null;
};
```

Defined in: [src/core/business-mgt/property-inquiry.schema.ts:133](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L133)

Quick status update schema for property inquiries.
Allows updating status and viewing/follow-up details without full update.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:120](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L120) |
| <a id="status"></a> `status` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md) | [src/core/business-mgt/property-inquiry.schema.ts:121](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L121) |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:122](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L122) |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:123](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L123) |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:124](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L124) |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:125](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L125) |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:126](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/business-mgt/property-inquiry.schema.ts#L126) |
