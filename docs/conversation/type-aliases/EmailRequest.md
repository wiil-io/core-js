[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRequest

# Type Alias: EmailRequest

```ts
type EmailRequest = {
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
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:98](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L98)

Email request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L10) |
| <a id="emailconfigurationid"></a> `emailConfigurationId?` | `string` | [src/core/conversation/outbound-email.schema.ts:55](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L55) |
| <a id="configuredemailaddress"></a> `configuredEmailAddress?` | `string` | [src/core/conversation/outbound-email.schema.ts:56](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L56) |
| <a id="templateid"></a> `templateId?` | `string` | [src/core/conversation/outbound-email.schema.ts:57](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L57) |
| <a id="to"></a> `to` | \{ `email`: `string`; `name?`: `string`; \}[] | [src/core/conversation/outbound-email.schema.ts:60](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L60) |
| <a id="cc"></a> `cc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:61](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L61) |
| <a id="bcc"></a> `bcc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:62](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L62) |
| <a id="replyto"></a> `replyTo?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:63](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L63) |
| <a id="subject"></a> `subject` | `string` | [src/core/conversation/outbound-email.schema.ts:66](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L66) |
| <a id="bodyhtml"></a> `bodyHtml` | `string` | [src/core/conversation/outbound-email.schema.ts:67](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L67) |
| <a id="bodytext"></a> `bodyText?` | `string` | [src/core/conversation/outbound-email.schema.ts:68](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L68) |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-email.schema.ts:69](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L69) |
| <a id="attachments"></a> `attachments?` | \| \{ `filename`: `string`; `content`: `string`; `contentType`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:70](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L70) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-email.schema.ts:73](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L73) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:74](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L74) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-email.schema.ts:77](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-email.schema.ts#L77) |
