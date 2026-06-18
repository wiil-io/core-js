[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecordSchema

# Variable: EmailRecordSchema

```ts
const EmailRecordSchema: ZodObject<EmailRecord>;
```

Defined in: [src/core/conversation/outbound-email.schema.ts:147](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/outbound-email.schema.ts#L147)

Email record schema for tracking delivery status.

Records individual delivery events and status updates from email providers.
Links to the original EmailRequest and tracks provider-specific message IDs.
