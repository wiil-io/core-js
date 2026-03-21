[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRequestResult

# Type Alias: EmailRequestResult

```ts
type EmailRequestResult = {
  success: boolean;
  request?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     emailConfigurationId?: string;
     configuredEmailAddress?: string;
     templateId?: string;
     to: {
        email: string;
        name?: string;
     }[];
     cc?:   | {
        email: string;
        name?: string;
      }[]
        | null;
     bcc?:   | {
        email: string;
        name?: string;
      }[]
        | null;
     replyTo?: string | null;
     subject: string;
     bodyHtml: string;
     bodyText?: string;
     variables?: Record<string, any>;
     attachments?:   | {
        filename: string;
        content: string;
        contentType: string;
      }[]
        | null;
     scheduledAt?: number;
     serviceConversationConfigId?: string | null;
     metadata?: Record<string, any>;
   }
     | null;
  error_message?: string | null;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:101](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L101)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/conversation/outbound-email.schema.ts:92](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L92) |
| <a id="request"></a> `request?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `emailConfigurationId?`: `string`; `configuredEmailAddress?`: `string`; `templateId?`: `string`; `to`: \{ `email`: `string`; `name?`: `string`; \}[]; `cc?`: \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null`; `bcc?`: \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null`; `replyTo?`: `string` \| `null`; `subject`: `string`; `bodyHtml`: `string`; `bodyText?`: `string`; `variables?`: `Record`\<`string`, `any`\>; `attachments?`: \| \{ `filename`: `string`; `content`: `string`; `contentType`: `string`; \}[] \| `null`; `scheduledAt?`: `number`; `serviceConversationConfigId?`: `string` \| `null`; `metadata?`: `Record`\<`string`, `any`\>; \} \| `null` | [src/core/conversation/outbound-email.schema.ts:93](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L93) |
| <a id="error_message"></a> `error_message?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:94](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L94) |
