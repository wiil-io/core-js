[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / DisplayMessage

# Type Alias: DisplayMessage

```ts
type DisplayMessage = {
  id: string;
  sender: "user" | "assistant";
  content: string;
  timestamp: Date;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:115](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-config.schema.ts#L115)

Display message schema.

Simplified message format for UI display purposes, containing only the
essential fields needed for rendering messages in chat interfaces.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/conversation/conversation-config.schema.ts:106](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-config.schema.ts#L106) |
| <a id="sender"></a> `sender` | `"user"` \| `"assistant"` | [src/core/conversation/conversation-config.schema.ts:107](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-config.schema.ts#L107) |
| <a id="content"></a> `content` | `string` | [src/core/conversation/conversation-config.schema.ts:111](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-config.schema.ts#L111) |
| <a id="timestamp"></a> `timestamp` | `Date` | [src/core/conversation/conversation-config.schema.ts:112](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-config.schema.ts#L112) |
