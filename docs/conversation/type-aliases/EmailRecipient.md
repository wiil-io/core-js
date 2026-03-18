[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecipient

# Type Alias: EmailRecipient

```ts
type EmailRecipient = {
  email: string;
  name?: string;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:20](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L20)

Email recipient schema (embedded in EmailRequestSchema).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="email"></a> `email` | `string` | [src/core/conversation/outbound-email.schema.ts:16](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L16) |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/outbound-email.schema.ts:17](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L17) |

## See

EmailRequestSchema - Uses this for recipient arrays
