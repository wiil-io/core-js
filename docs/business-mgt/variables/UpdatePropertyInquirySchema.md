[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyInquirySchema

# Variable: UpdatePropertyInquirySchema

```ts
const UpdatePropertyInquirySchema: ZodObject<UpdatePropertyInquiry>;
```

Defined in: [src/core/business-mgt/property-management/property-inquiry.schema.ts:123](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/property-management/property-inquiry.schema.ts#L123)

Schema for updating an existing property inquiry.

## Remarks

Fields that carry a `.default()` on the base schema are re-declared here as plain
`.optional()` (without defaults). In Zod, `.partial()` does not strip defaults, so a
partial update would otherwise inject those defaults (e.g., `status`, `source`) on
`.parse()` and submit values the caller never set.
