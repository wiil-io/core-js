[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / OutboundTemplateBase

# Type Alias: OutboundTemplateBase

```ts
type OutboundTemplateBase = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  code: string;
  channel: OutboundTemplateChannel;
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
};
```

Defined in: [src/core/conversation/outbound-template.schema.ts:181](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L181)

Outbound template base schema.
Common fields shared across all template types.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | [src/core/conversation/outbound-template.schema.ts:53](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L53) |
| <a id="code"></a> `code` | `string` | [src/core/conversation/outbound-template.schema.ts:54](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L54) |
| <a id="channel"></a> `channel` | [`OutboundTemplateChannel`](../../type-definitions/enumerations/OutboundTemplateChannel.md) | [src/core/conversation/outbound-template.schema.ts:55](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L55) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/conversation/outbound-template.schema.ts:56](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L56) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:57](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L57) |
| <a id="variables"></a> `variables` | \{ `key`: `string`; `required`: `boolean`; `description?`: `string` \| `null`; `defaultValue?`: `string` \| `null`; \}[] | [src/core/conversation/outbound-template.schema.ts:58](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L58) |
| <a id="tags"></a> `tags` | `string`[] | [src/core/conversation/outbound-template.schema.ts:59](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L59) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> \| `null` | [src/core/conversation/outbound-template.schema.ts:60](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/outbound-template.schema.ts#L60) |
