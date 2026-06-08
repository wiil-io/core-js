[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / WhatsappTemplate

# Type Alias: WhatsappTemplate

```ts
type WhatsappTemplate = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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
  channel: WHATSAPP;
  bodyTemplate: string;
};
```

Defined in: src/core/conversation/outbound-template.schema.ts:184

WhatsApp template schema.
Template for WhatsApp messages.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | src/core/conversation/outbound-template.schema.ts:53 |
| <a id="code"></a> `code` | `string` | src/core/conversation/outbound-template.schema.ts:54 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/conversation/outbound-template.schema.ts:56 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/conversation/outbound-template.schema.ts:57 |
| <a id="variables"></a> `variables` | \{ `key`: `string`; `required`: `boolean`; `description?`: `string` \| `null`; `defaultValue?`: `string` \| `null`; \}[] | src/core/conversation/outbound-template.schema.ts:58 |
| <a id="tags"></a> `tags` | `string`[] | src/core/conversation/outbound-template.schema.ts:59 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> \| `null` | src/core/conversation/outbound-template.schema.ts:60 |
| <a id="channel"></a> `channel` | [`WHATSAPP`](../../type-definitions/enumerations/OutboundTemplateChannel.md#whatsapp) | src/core/conversation/outbound-template.schema.ts:111 |
| <a id="bodytemplate"></a> `bodyTemplate` | `string` | src/core/conversation/outbound-template.schema.ts:112 |
