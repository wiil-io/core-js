[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UpdateSmsTemplate

# Type Alias: UpdateSmsTemplate

```ts
type UpdateSmsTemplate = {
  name?: string;
  code?: string;
  isActive?: boolean;
  description?: string | null;
  variables?: {
     key: string;
     required: boolean;
     description?: string | null;
     defaultValue?: string | null;
  }[];
  tags?: string[];
  metadata?: Record<string, unknown> | null;
  channel?: SMS;
  bodyTemplate?: string;
  id: string;
};
```

Defined in: [src/core/conversation/outbound-template.schema.ts:190](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L190)

Schema for updating an existing SMS template.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/outbound-template.schema.ts:53](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L53) |
| <a id="code"></a> `code?` | `string` | [src/core/conversation/outbound-template.schema.ts:54](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L54) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/conversation/outbound-template.schema.ts:56](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L56) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:57](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L57) |
| <a id="variables"></a> `variables?` | \{ `key`: `string`; `required`: `boolean`; `description?`: `string` \| `null`; `defaultValue?`: `string` \| `null`; \}[] | [src/core/conversation/outbound-template.schema.ts:58](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L58) |
| <a id="tags"></a> `tags?` | `string`[] | [src/core/conversation/outbound-template.schema.ts:59](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L59) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> \| `null` | [src/core/conversation/outbound-template.schema.ts:60](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L60) |
| <a id="channel"></a> `channel?` | [`SMS`](../../type-definitions/enumerations/OutboundTemplateChannel.md#sms) | [src/core/conversation/outbound-template.schema.ts:97](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L97) |
| <a id="bodytemplate"></a> `bodyTemplate?` | `string` | [src/core/conversation/outbound-template.schema.ts:98](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L98) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/outbound-template.schema.ts:166](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/outbound-template.schema.ts#L166) |
