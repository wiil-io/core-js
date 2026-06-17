[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ChannelSetupRequestSchema

# Variable: ChannelSetupRequestSchema

```ts
const ChannelSetupRequestSchema: ZodObject<ChannelSetupRequest>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:387](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/service-configuration/interaction-channels.schema.ts#L387)

Zod schema for channel setup request.

Complete setup request for creating a new deployment with its associated channel and configurations.
This is a convenience schema that combines channel creation with deployment configuration references.

## Remarks

**Architecture Context:**
- **Purpose**: Simplifies deployment creation by bundling channel and configuration references
- **Relationship**: Creates a Deployment Configuration with associated channel, project, agent, and instruction
- **Pattern**: One request creates the complete deployment stack
