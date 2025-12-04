[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.17**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelSchema

# Variable: DeploymentChannelSchema

```ts
const DeploymentChannelSchema: ZodObject<DeploymentChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:325](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/interaction-channels.schema.ts#L325)

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
