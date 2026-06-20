[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

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

Defined in: [src/core/conversation/outbound-email.schema.ts:44](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/conversation/outbound-email.schema.ts#L44)

Email attachment schema (embedded in EmailRequestSchema).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="filename"></a> `filename` | `string` | [src/core/conversation/outbound-email.schema.ts:39](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/conversation/outbound-email.schema.ts#L39) |
| <a id="content"></a> `content` | `string` | [src/core/conversation/outbound-email.schema.ts:40](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/conversation/outbound-email.schema.ts#L40) |
| <a id="contenttype"></a> `contentType` | `string` | [src/core/conversation/outbound-email.schema.ts:41](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/conversation/outbound-email.schema.ts#L41) |

## See

EmailRequestSchema - Uses this for file attachments
