[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ChannelUpdateRequestSchema

# Variable: ChannelUpdateRequestSchema

```ts
const ChannelUpdateRequestSchema: ZodObject<DeploymentChannelUpdateRequest>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:411](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/service-configuration/interaction-channels.schema.ts#L411)

Zod schema for channel update request.

Partial update request for modifying an existing deployment and its associated channel.
Supports updating the channel configuration and/or changing the referenced configurations.

## Remarks

**Architecture Context:**
- **Purpose**: Enables modification of deployment configuration references and channel settings
- **Flexibility**: All fields are optional for partial updates
- **Usage**: Used to update deployments without full recreation
