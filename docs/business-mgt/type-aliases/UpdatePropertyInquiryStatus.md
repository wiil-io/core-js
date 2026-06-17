[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

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

Defined in: [src/core/business-mgt/property-management/property-inquiry.schema.ts:141](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L141)

Schema for quick status update on property inquiry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:125](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L125) |
| <a id="status"></a> `status` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md) | [src/core/business-mgt/property-management/property-inquiry.schema.ts:126](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L126) |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:127](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L127) |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:128](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L128) |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:129](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L129) |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:130](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L130) |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:131](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-inquiry.schema.ts#L131) |
