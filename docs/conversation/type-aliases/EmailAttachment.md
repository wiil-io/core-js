[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailAttachment

# Type Alias: EmailAttachment

```ts
type EmailAttachment = {
  filename: string;
  content: string;
  contentType: string;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:32](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L32)

Email attachment schema (embedded in EmailRequestSchema).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="filename"></a> `filename` | `string` | [src/core/conversation/outbound-email.schema.ts:27](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L27) |
| <a id="content"></a> `content` | `string` | [src/core/conversation/outbound-email.schema.ts:28](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L28) |
| <a id="contenttype"></a> `contentType` | `string` | [src/core/conversation/outbound-email.schema.ts:29](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L29) |

## See

EmailRequestSchema - Uses this for file attachments
