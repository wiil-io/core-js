[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelUpdateRequestSchema

# Variable: DeploymentChannelUpdateRequestSchema

```ts
const DeploymentChannelUpdateRequestSchema: ZodObject<DeploymentChannelUpdate>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:361](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/interaction-channels.schema.ts#L361)

Zod schema for updating deployment channel.

Supports partial updates to existing deployment channels. All fields are optional except id.

## Remarks

**Architecture Context:**
- **Purpose**: Enables modification of channel settings without recreating the deployment
- **Validation**: Partial validation ensures only provided fields are validated
- **Usage**: Used by API endpoints for channel updates
