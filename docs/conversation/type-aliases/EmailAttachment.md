[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

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

Defined in: src/core/conversation/outbound-email.schema.ts:33

Email attachment schema (embedded in EmailRequestSchema).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="filename"></a> `filename` | `string` | src/core/conversation/outbound-email.schema.ts:28 |
| <a id="content"></a> `content` | `string` | src/core/conversation/outbound-email.schema.ts:29 |
| <a id="contenttype"></a> `contentType` | `string` | src/core/conversation/outbound-email.schema.ts:30 |

## See

EmailRequestSchema - Uses this for file attachments
