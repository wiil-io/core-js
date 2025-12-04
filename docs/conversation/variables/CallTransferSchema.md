[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallTransferSchema

# Variable: CallTransferSchema

```ts
const CallTransferSchema: ZodObject<CallTransfer>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:222](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/conversation/conversation-config.schema.ts#L222)

Call transfer schema for tracking call transfer details in telephony conversations.

Captures metadata about call transfers to human agents including transfer type, timing, destination,
and outcome. Used for measuring transfer rates, analyzing escalation patterns, and tracking agent
handoff performance in telephony deployments.

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
