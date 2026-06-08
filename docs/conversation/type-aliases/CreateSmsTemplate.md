[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CreateSmsTemplate

# Type Alias: CreateSmsTemplate

```ts
type CreateSmsTemplate = {
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
  channel: SMS;
  bodyTemplate: string;
};
```

Defined in: src/core/conversation/outbound-template.schema.ts:187

Schema for creating a new SMS template.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | src/core/conversation/outbound-template.schema.ts:53 |
| <a id="code"></a> `code` | `string` | src/core/conversation/outbound-template.schema.ts:54 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/conversation/outbound-template.schema.ts:56 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/conversation/outbound-template.schema.ts:57 |
| <a id="variables"></a> `variables` | \{ `key`: `string`; `required`: `boolean`; `description?`: `string` \| `null`; `defaultValue?`: `string` \| `null`; \}[] | src/core/conversation/outbound-template.schema.ts:58 |
| <a id="tags"></a> `tags` | `string`[] | src/core/conversation/outbound-template.schema.ts:59 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> \| `null` | src/core/conversation/outbound-template.schema.ts:60 |
| <a id="channel"></a> `channel` | [`SMS`](../../type-definitions/enumerations/OutboundTemplateChannel.md#sms) | src/core/conversation/outbound-template.schema.ts:97 |
| <a id="bodytemplate"></a> `bodyTemplate` | `string` | src/core/conversation/outbound-template.schema.ts:98 |
