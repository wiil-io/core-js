[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelWithDeploymentSchema

# Variable: DeploymentChannelWithDeploymentSchema

```ts
const DeploymentChannelWithDeploymentSchema: ZodObject<DeploymentChannelInfo>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:455](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/service-configuration/interaction-channels.schema.ts#L455)

Zod schema for deployment channel with deployment information.

Extended view that includes both the channel configuration and its associated deployment details.
This schema is typically used for detailed views where the complete deployment context is needed.

## Remarks

**Architecture Context:**
- **Purpose**: Provides complete deployment context in a single response
- **Usage**: Used for detail views and administrative interfaces
- **Relationship**: Combines DeploymentChannel with its associated Deployment Configuration
