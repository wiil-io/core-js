[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallTransfer

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

Defined in: [src/core/conversation/conversation-config.schema.ts:285](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/conversation-config.schema.ts#L285)

Call transfer schema for tracking call transfer details in telephony conversations.

Captures metadata about call transfers to human agents including transfer type, timing, destination,
and outcome. Used for measuring transfer rates, analyzing escalation patterns, and tracking agent
handoff performance in telephony deployments.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="transfer_type"></a> `transfer_type?` | `"blind"` \| `"warm"` \| `null` | [src/core/conversation/conversation-config.schema.ts:223](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/conversation-config.schema.ts#L223) |
| <a id="transfer_target"></a> `transfer_target` | `string` | [src/core/conversation/conversation-config.schema.ts:224](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/conversation-config.schema.ts#L224) |
| <a id="transfer_initiated_at"></a> `transfer_initiated_at?` | `number` | [src/core/conversation/conversation-config.schema.ts:225](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/conversation-config.schema.ts#L225) |
| <a id="transfer_completed_at"></a> `transfer_completed_at?` | `number` | [src/core/conversation/conversation-config.schema.ts:226](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/conversation-config.schema.ts#L226) |
| <a id="transfer_status"></a> `transfer_status` | `"pending"` \| `"completed"` \| `"failed"` \| `"returned"` | [src/core/conversation/conversation-config.schema.ts:227](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/conversation-config.schema.ts#L227) |
| <a id="transfer_reason"></a> `transfer_reason?` | `string` | [src/core/conversation/conversation-config.schema.ts:228](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/conversation-config.schema.ts#L228) |

## Remarks

**Architecture Context:**
- **Used In**: ServiceConversationConfig.call_transfer field for telephony conversations
- **Triggered By**: Agent detecting escalation keywords, user request, or configured transfer conditions
- **References**: CallTransferConfig from agent configuration for transfer destinations
- **Analytics**: Used for measuring AI containment rates and identifying improvement areas

**Transfer Types:**
- **blind**: Immediate unattended transfer without agent introduction (faster, no screening)
- **warm**: Attended transfer where agent is briefed before caller is connected (professional, allows declining)

**Transfer Lifecycle:**
- **pending**: Transfer initiated, waiting for recipient to answer
- **completed**: Transfer successful, caller connected to human agent
- **failed**: Transfer failed due to busy line, no answer, or technical error
- **returned**: Call returned to AI agent after human agent consultation
