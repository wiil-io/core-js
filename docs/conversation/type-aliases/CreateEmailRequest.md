[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CreateEmailRequest

# Type Alias: CreateEmailRequest

```ts
type CreateEmailRequest = {
  emailConfigurationId?: string;
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
};
```

Defined in: src/core/conversation/outbound-email.schema.ts:96

Schema for creating a new email request.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="emailconfigurationid"></a> `emailConfigurationId?` | `string` | src/core/conversation/outbound-email.schema.ts:55 |
| <a id="templateid"></a> `templateId?` | `string` | src/core/conversation/outbound-email.schema.ts:56 |
| <a id="to"></a> `to` | \{ `email`: `string`; `name?`: `string`; \}[] | src/core/conversation/outbound-email.schema.ts:59 |
| <a id="cc"></a> `cc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | src/core/conversation/outbound-email.schema.ts:60 |
| <a id="bcc"></a> `bcc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | src/core/conversation/outbound-email.schema.ts:61 |
| <a id="replyto"></a> `replyTo?` | `string` \| `null` | src/core/conversation/outbound-email.schema.ts:62 |
| <a id="subject"></a> `subject` | `string` | src/core/conversation/outbound-email.schema.ts:65 |
| <a id="bodyhtml"></a> `bodyHtml` | `string` | src/core/conversation/outbound-email.schema.ts:66 |
| <a id="bodytext"></a> `bodyText?` | `string` | src/core/conversation/outbound-email.schema.ts:67 |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> | src/core/conversation/outbound-email.schema.ts:68 |
| <a id="attachments"></a> `attachments?` | \| \{ `filename`: `string`; `content`: `string`; `contentType`: `string`; \}[] \| `null` | src/core/conversation/outbound-email.schema.ts:69 |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | src/core/conversation/outbound-email.schema.ts:72 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | src/core/conversation/outbound-email.schema.ts:73 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/conversation/outbound-email.schema.ts:76 |
