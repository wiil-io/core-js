[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.50**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecipient

# Type Alias: EmailRecipient

```ts
type EmailRecipient = {
  email: string;
  name?: string;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:19](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-email.schema.ts#L19)

Email recipient schema (embedded in EmailRequestSchema).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="email"></a> `email` | `string` | [src/core/conversation/outbound-email.schema.ts:15](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-email.schema.ts#L15) |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/outbound-email.schema.ts:16](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-email.schema.ts#L16) |

## See

EmailRequestSchema - Uses this for recipient arrays
