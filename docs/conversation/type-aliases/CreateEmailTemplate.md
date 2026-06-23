[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CreateEmailTemplate

# Type Alias: CreateEmailTemplate

```ts
type CreateEmailTemplate = {
  name: string;
  code: string;
  isActive: boolean;
  description?: string | null;
  variables: {
     key: string;
     required: boolean;
     description?: string | null;
     defaultValue?: string | null;
  }[];
  tags: string[];
  metadata?: Record<string, unknown> | null;
  channel: EMAIL;
  subjectTemplate: string;
  bodyHtmlTemplate: string;
  bodyTextTemplate?: string | null;
  defaultReplyTo?: string | null;
};
```

Defined in: [src/core/conversation/outbound-template.schema.ts:186](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L186)

Schema for creating a new email template.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/conversation/outbound-template.schema.ts:53](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L53) |
| <a id="code"></a> `code` | `string` | [src/core/conversation/outbound-template.schema.ts:54](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L54) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/conversation/outbound-template.schema.ts:56](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L56) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:57](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L57) |
| <a id="variables"></a> `variables` | \{ `key`: `string`; `required`: `boolean`; `description?`: `string` \| `null`; `defaultValue?`: `string` \| `null`; \}[] | [src/core/conversation/outbound-template.schema.ts:58](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L58) |
| <a id="tags"></a> `tags` | `string`[] | [src/core/conversation/outbound-template.schema.ts:59](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L59) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> \| `null` | [src/core/conversation/outbound-template.schema.ts:60](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L60) |
| <a id="channel"></a> `channel` | [`EMAIL`](../../type-definitions/enumerations/OutboundTemplateChannel.md#email) | [src/core/conversation/outbound-template.schema.ts:80](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L80) |
| <a id="subjecttemplate"></a> `subjectTemplate` | `string` | [src/core/conversation/outbound-template.schema.ts:81](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L81) |
| <a id="bodyhtmltemplate"></a> `bodyHtmlTemplate` | `string` | [src/core/conversation/outbound-template.schema.ts:82](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L82) |
| <a id="bodytexttemplate"></a> `bodyTextTemplate?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:83](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L83) |
| <a id="defaultreplyto"></a> `defaultReplyTo?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:84](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-template.schema.ts#L84) |
