[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

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

Defined in: [src/core/conversation/outbound-email.schema.ts:33](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L33)

Email attachment schema (embedded in EmailRequestSchema).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="filename"></a> `filename` | `string` | [src/core/conversation/outbound-email.schema.ts:28](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L28) |
| <a id="content"></a> `content` | `string` | [src/core/conversation/outbound-email.schema.ts:29](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L29) |
| <a id="contenttype"></a> `contentType` | `string` | [src/core/conversation/outbound-email.schema.ts:30](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L30) |

## See

EmailRequestSchema - Uses this for file attachments
