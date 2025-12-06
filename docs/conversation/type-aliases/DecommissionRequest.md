[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.22**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / DecommissionRequest

# Type Alias: DecommissionRequest

```ts
type DecommissionRequest = {
  decommission_service_id: string;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:284](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/conversation-config.schema.ts#L284)

Decommission configuration schema.

Request payload for decommissioning and shutting down active conversation services. Used for
gracefully terminating conversation sessions, cleaning up resources, and releasing telephony
connections when deployments are disabled or conversations are force-closed.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="decommission_service_id"></a> `decommission_service_id` | `string` | [src/core/conversation/conversation-config.schema.ts:279](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/conversation-config.schema.ts#L279) |

## Remarks

**Architecture Context:**
- **Used For**: Graceful shutdown of active conversation sessions
- **Triggered By**: Admin actions, deployment deactivation, or timeout policies
- **Effects**: Releases telephony resources, closes WebSocket connections, archives conversation

**Use Cases:**
- Emergency shutdown of misbehaving conversation sessions
- Cleanup when deployments are deactivated
- Forced conversation termination for policy violations
