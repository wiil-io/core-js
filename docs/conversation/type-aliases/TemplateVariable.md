[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TemplateVariable

# Type Alias: TemplateVariable

```ts
type TemplateVariable = {
  key: string;
  required: boolean;
  description?: string | null;
  defaultValue?: string | null;
};
```

Defined in: [src/core/conversation/outbound-template.schema.ts:180](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-template.schema.ts#L180)

Template variable schema.
Defines a variable placeholder within a message template.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="key"></a> `key` | `string` | [src/core/conversation/outbound-template.schema.ts:28](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-template.schema.ts#L28) |
| <a id="required"></a> `required` | `boolean` | [src/core/conversation/outbound-template.schema.ts:29](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-template.schema.ts#L29) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:30](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-template.schema.ts#L30) |
| <a id="defaultvalue"></a> `defaultValue?` | `string` \| `null` | [src/core/conversation/outbound-template.schema.ts:31](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-template.schema.ts#L31) |
