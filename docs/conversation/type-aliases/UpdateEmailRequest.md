[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UpdateEmailRequest

# Type Alias: UpdateEmailRequest

```ts
type UpdateEmailRequest = {
  emailConfigurationId?: string;
  configuredEmailAddress?: string;
  templateId?: string;
  to?: {
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
  subject?: string;
  bodyHtml?: string;
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
  status?:   | QUEUED
     | SENT
     | DELIVERED
     | BOUNCED
     | FAILED
     | COMPLAINED;
  maxRetries?: number;
  retryCount?: number;
  retryDelayMinutes?: number;
  metadata?: Record<string, any>;
  id: string;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:179](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L179)

Schema for updating an existing email request.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="emailconfigurationid"></a> `emailConfigurationId?` | `string` | [src/core/conversation/outbound-email.schema.ts:71](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L71) |
| <a id="configuredemailaddress"></a> `configuredEmailAddress?` | `string` | [src/core/conversation/outbound-email.schema.ts:72](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L72) |
| <a id="templateid"></a> `templateId?` | `string` | [src/core/conversation/outbound-email.schema.ts:73](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L73) |
| <a id="to"></a> `to?` | \{ `email`: `string`; `name?`: `string`; \}[] | [src/core/conversation/outbound-email.schema.ts:76](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L76) |
| <a id="cc"></a> `cc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:77](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L77) |
| <a id="bcc"></a> `bcc?` | \| \{ `email`: `string`; `name?`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:78](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L78) |
| <a id="replyto"></a> `replyTo?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:79](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L79) |
| <a id="subject"></a> `subject?` | `string` | [src/core/conversation/outbound-email.schema.ts:82](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L82) |
| <a id="bodyhtml"></a> `bodyHtml?` | `string` | [src/core/conversation/outbound-email.schema.ts:83](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L83) |
| <a id="bodytext"></a> `bodyText?` | `string` | [src/core/conversation/outbound-email.schema.ts:84](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L84) |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-email.schema.ts:85](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L85) |
| <a id="attachments"></a> `attachments?` | \| \{ `filename`: `string`; `content`: `string`; `contentType`: `string`; \}[] \| `null` | [src/core/conversation/outbound-email.schema.ts:86](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L86) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-email.schema.ts:89](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L89) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-email.schema.ts:90](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L90) |
| <a id="status"></a> `status?` | \| [`QUEUED`](../../type-definitions/enumerations/EmailStatus.md#queued) \| [`SENT`](../../type-definitions/enumerations/EmailStatus.md#sent) \| [`DELIVERED`](../../type-definitions/enumerations/EmailStatus.md#delivered) \| [`BOUNCED`](../../type-definitions/enumerations/EmailStatus.md#bounced) \| [`FAILED`](../../type-definitions/enumerations/EmailStatus.md#failed) \| [`COMPLAINED`](../../type-definitions/enumerations/EmailStatus.md#complained) | [src/core/conversation/outbound-email.schema.ts:93](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L93) |
| <a id="maxretries"></a> `maxRetries?` | `number` | [src/core/conversation/outbound-email.schema.ts:96](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L96) |
| <a id="retrycount"></a> `retryCount?` | `number` | [src/core/conversation/outbound-email.schema.ts:97](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L97) |
| <a id="retrydelayminutes"></a> `retryDelayMinutes?` | `number` | [src/core/conversation/outbound-email.schema.ts:98](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L98) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-email.schema.ts:101](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L101) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/outbound-email.schema.ts:123](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/outbound-email.schema.ts#L123) |
