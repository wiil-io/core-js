[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

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
     status: EmailStatus;
     maxRetries?: number;
     retryCount: number;
     retryDelayMinutes?: number;
     metadata?: Record<string, any>;
   }
     | null;
  error_message?: string | null;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:181](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/outbound-email.schema.ts#L181)

Email request result schema.
Response payload after submitting an email request.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/conversation/outbound-email.schema.ts:168](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/outbound-email.schema.ts#L168) |
| <a id="request"></a> `request?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `emailConfigurationId?`: `string`; `configuredEmailAddress?`: `string`; `templateId?`: `string`; `to`: \{ `email`: `string`; `name?`: `string`; \}[]; `cc?`: \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null`; `bcc?`: \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null`; `replyTo?`: `string` \| `null`; `subject`: `string`; `bodyHtml`: `string`; `bodyText?`: `string`; `variables?`: `Record`\<`string`, `any`\>; `attachments?`: \| \{ `filename`: `string`; `content`: `string`; `contentType`: `string`; \}[] \| `null`; `scheduledAt?`: `number`; `serviceConversationConfigId?`: `string` \| `null`; `status`: [`EmailStatus`](../../type-definitions/enumerations/EmailStatus.md); `maxRetries?`: `number`; `retryCount`: `number`; `retryDelayMinutes?`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \} \| `null` | [src/core/conversation/outbound-email.schema.ts:169](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/outbound-email.schema.ts#L169) |
| <a id="error_message"></a> `error_message?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:170](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/outbound-email.schema.ts#L170) |
