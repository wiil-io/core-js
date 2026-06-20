[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / OttConversationConfig

# Type Alias: OttConversationConfig

```ts
type OttConversationConfig = {
  platform_user_id?: number;
  channel_identifier: string;
  partner_user_id?: string;
  sdrtn_id?: string | null;
  channel_token: string;
  connection_url?: string | null;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:421](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-config.schema.ts#L421)

OTT conversation configuration with connection details.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="platform_user_id"></a> `platform_user_id?` | `number` | [src/core/conversation/conversation-config.schema.ts:396](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-config.schema.ts#L396) |
| <a id="channel_identifier"></a> `channel_identifier` | `string` | [src/core/conversation/conversation-config.schema.ts:397](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-config.schema.ts#L397) |
| <a id="partner_user_id"></a> `partner_user_id?` | `string` | [src/core/conversation/conversation-config.schema.ts:398](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-config.schema.ts#L398) |
| <a id="sdrtn_id"></a> `sdrtn_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:405](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-config.schema.ts#L405) |
| <a id="channel_token"></a> `channel_token` | `string` | [src/core/conversation/conversation-config.schema.ts:406](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-config.schema.ts#L406) |
| <a id="connection_url"></a> `connection_url?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:407](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-config.schema.ts#L407) |
