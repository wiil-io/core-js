[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRequest

# Type Alias: EmailRequest

```ts
type EmailRequest = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  createdBy?: string;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  uniqueKey?: string;
  version?: number;
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

Defined in: [src/core/conversation/outbound-email.schema.ts:95](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L95)

Email request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L10) |
| <a id="createdby"></a> `createdBy?` | `string` | [src/core/base.schema.ts:58](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L58) |
| <a id="updatedby"></a> `updatedBy?` | `string` | [src/core/base.schema.ts:59](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L59) |
| <a id="deletedat"></a> `deletedAt?` | `number` | [src/core/base.schema.ts:60](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L60) |
| <a id="deletedby"></a> `deletedBy?` | `string` | [src/core/base.schema.ts:61](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L61) |
| <a id="uniquekey"></a> `uniqueKey?` | `string` | [src/core/base.schema.ts:62](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L62) |
| <a id="version"></a> `version?` | `number` | [src/core/base.schema.ts:63](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L63) |
| <a id="emailconfigurationid"></a> `emailConfigurationId?` | `string` | [src/core/conversation/outbound-email.schema.ts:55](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L55) |
| <a id="templateid"></a> `templateId?` | `string` | [src/core/conversation/outbound-email.schema.ts:56](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L56) |
| <a id="to"></a> `to` | \{ `email`: `string`; `name?`: `string`; \}[] | [src/core/conversation/outbound-email.schema.ts:59](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L59) |
| <a id="cc"></a> `cc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:60](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L60) |
| <a id="bcc"></a> `bcc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:61](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L61) |
| <a id="replyto"></a> `replyTo?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:62](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L62) |
| <a id="subject"></a> `subject` | `string` | [src/core/conversation/outbound-email.schema.ts:65](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L65) |
| <a id="bodyhtml"></a> `bodyHtml` | `string` | [src/core/conversation/outbound-email.schema.ts:66](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L66) |
| <a id="bodytext"></a> `bodyText?` | `string` | [src/core/conversation/outbound-email.schema.ts:67](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L67) |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-email.schema.ts:68](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L68) |
| <a id="attachments"></a> `attachments?` | \| \{ `filename`: `string`; `content`: `string`; `contentType`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:69](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L69) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-email.schema.ts:72](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L72) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:73](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L73) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-email.schema.ts:76](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-email.schema.ts#L76) |
