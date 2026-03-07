[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / DecommissionConfigSchema

# Variable: DecommissionConfigSchema

```ts
const DecommissionConfigSchema: ZodObject<DecommissionRequest>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:278](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/conversation/conversation-config.schema.ts#L278)

Decommission configuration schema.

Request payload for decommissioning and shutting down active conversation services. Used for
gracefully terminating conversation sessions, cleaning up resources, and releasing telephony
connections when deployments are disabled or conversations are force-closed.

## Remarks

**Architecture Context:**
- **Used For**: Graceful shutdown of active conversation sessions
- **Triggered By**: Admin actions, deployment deactivation, or timeout policies
- **Effects**: Releases telephony resources, closes WebSocket connections, archives conversation

**Use Cases:**
- Emergency shutdown of misbehaving conversation sessions
- Cleanup when deployments are deactivated
- Forced conversation termination for policy violations
