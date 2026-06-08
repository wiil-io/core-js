[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecordSchema

# Variable: EmailRecordSchema

```ts
const EmailRecordSchema: ZodObject<EmailRecord>;
```

Defined in: [src/core/conversation/outbound-email.schema.ts:147](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/conversation/outbound-email.schema.ts#L147)

Email record schema for tracking delivery status.

Records individual delivery events and status updates from email providers.
Links to the original EmailRequest and tracks provider-specific message IDs.
