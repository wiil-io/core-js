[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CallTransfer

# Type Alias: CallTransfer

```ts
type CallTransfer = {
  transfer_type?: "blind" | "warm" | null;
  transfer_target: string;
  transfer_initiated_at?: number;
  transfer_completed_at?: number;
  transfer_status: "pending" | "completed" | "failed" | "returned";
  transfer_reason?: string;
};
```

Defined in: src/core/conversation/conversation-config.schema.ts:191

Call transfer schema for tracking call transfer details in telephony conversations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="transfer_type"></a> `transfer_type?` | `"blind"` \| `"warm"` \| `null` | src/core/conversation/conversation-config.schema.ts:150 |
| <a id="transfer_target"></a> `transfer_target` | `string` | src/core/conversation/conversation-config.schema.ts:151 |
| <a id="transfer_initiated_at"></a> `transfer_initiated_at?` | `number` | src/core/conversation/conversation-config.schema.ts:152 |
| <a id="transfer_completed_at"></a> `transfer_completed_at?` | `number` | src/core/conversation/conversation-config.schema.ts:153 |
| <a id="transfer_status"></a> `transfer_status` | `"pending"` \| `"completed"` \| `"failed"` \| `"returned"` | src/core/conversation/conversation-config.schema.ts:154 |
| <a id="transfer_reason"></a> `transfer_reason?` | `string` | src/core/conversation/conversation-config.schema.ts:155 |
