[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.45**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / DecommissionConfigSchema

# Variable: DecommissionConfigSchema

```ts
const DecommissionConfigSchema: ZodObject<DecommissionRequest>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:278](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/conversation/conversation-config.schema.ts#L278)

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
