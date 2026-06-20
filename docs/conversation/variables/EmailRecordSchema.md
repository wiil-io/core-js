[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecordSchema

# Variable: EmailRecordSchema

```ts
const EmailRecordSchema: ZodObject<EmailRecord>;
```

Defined in: [src/core/conversation/outbound-email.schema.ts:147](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/conversation/outbound-email.schema.ts#L147)

Email record schema for tracking delivery status.

Records individual delivery events and status updates from email providers.
Links to the original EmailRequest and tracks provider-specific message IDs.
