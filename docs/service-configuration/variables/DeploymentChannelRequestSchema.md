[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelRequestSchema

# Variable: DeploymentChannelRequestSchema

```ts
const DeploymentChannelRequestSchema: ZodObject<DeploymentChannelRequest>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:251](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/service-configuration/interaction-channels.schema.ts#L251)

Zod schema for deployment channel creation request.

Flexible schema that validates channel configuration based on deployment type.
Uses runtime validation to ensure channel-specific requirements are met.

## Remarks

**Architecture Context:**
- **Purpose**: Validates incoming requests to create new deployment channels
- **Validation**: Type-specific validation ensures correct configuration for each channel type
- **Usage**: Used by API endpoints for channel creation
