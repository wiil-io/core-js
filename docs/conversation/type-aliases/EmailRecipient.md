[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecipient

# Type Alias: EmailRecipient

```ts
type EmailRecipient = {
  email: string;
  name?: string;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:27](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/outbound-email.schema.ts#L27)

Email recipient schema (embedded in EmailRequestSchema).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="email"></a> `email` | `string` | [src/core/conversation/outbound-email.schema.ts:23](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/outbound-email.schema.ts#L23) |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/outbound-email.schema.ts:24](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/outbound-email.schema.ts#L24) |

## See

EmailRequestSchema - Uses this for recipient arrays
