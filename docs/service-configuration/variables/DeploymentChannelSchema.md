[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelSchema

# Variable: DeploymentChannelSchema

```ts
const DeploymentChannelSchema: ZodObject<DeploymentChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:327](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/interaction-channels.schema.ts#L327)

Zod schema for main deployment channel with discriminated union.

Provides type-safe channel configuration based on deployment type. This is the primary
schema used for deployment channel entities throughout the system.

## Remarks

**Architecture Context:**
- **Relationship**: 1:1 with Deployment Configuration (each deployment has exactly one channel)
- **Pattern**: Multi-channel deployments require separate Deployment Configurations per channel
- **Validation**: Configuration must match the deployment type requirements

**Design Note:**
The discriminated union approach (commented code) provides stricter type safety but the
current union-based approach offers more flexibility for runtime validation.
