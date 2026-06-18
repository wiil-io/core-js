[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UpdateWhatsappTemplate

# Type Alias: UpdateWhatsappTemplate

```ts
type UpdateWhatsappTemplate = {
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
  channel?: WHATSAPP;
  bodyTemplate?: string;
  id: string;
};
```

Defined in: [src/core/conversation/outbound-template.schema.ts:191](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L191)

Schema for updating an existing WhatsApp template.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/outbound-template.schema.ts:53](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L53) |
| <a id="code"></a> `code?` | `string` | [src/core/conversation/outbound-template.schema.ts:54](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L54) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/conversation/outbound-template.schema.ts:56](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L56) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:57](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L57) |
| <a id="variables"></a> `variables?` | \{ `key`: `string`; `required`: `boolean`; `description?`: `string` \| `null`; `defaultValue?`: `string` \| `null`; \}[] | [src/core/conversation/outbound-template.schema.ts:58](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L58) |
| <a id="tags"></a> `tags?` | `string`[] | [src/core/conversation/outbound-template.schema.ts:59](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L59) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> \| `null` | [src/core/conversation/outbound-template.schema.ts:60](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L60) |
| <a id="channel"></a> `channel?` | [`WHATSAPP`](../../type-definitions/enumerations/OutboundTemplateChannel.md#whatsapp) | [src/core/conversation/outbound-template.schema.ts:111](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L111) |
| <a id="bodytemplate"></a> `bodyTemplate?` | `string` | [src/core/conversation/outbound-template.schema.ts:112](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L112) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/outbound-template.schema.ts:173](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L173) |
