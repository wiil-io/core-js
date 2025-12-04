[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelUpdateRequestSchema

# Variable: DeploymentChannelUpdateRequestSchema

```ts
const DeploymentChannelUpdateRequestSchema: ZodObject<DeploymentChannelUpdate>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:362](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L362)

Zod schema for updating deployment channel.

Supports partial updates to existing deployment channels. All fields are optional except id.

## Remarks

**Architecture Context:**
- **Purpose**: Enables modification of channel settings without recreating the deployment
- **Validation**: Partial validation ensures only provided fields are validated
- **Usage**: Used by API endpoints for channel updates
