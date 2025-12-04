[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateAgentConfigurationSchema

# Variable: UpdateAgentConfigurationSchema

```ts
const UpdateAgentConfigurationSchema: ZodObject<UpdateAgentConfiguration>;
```

Defined in: [src/core/service-configuration/agent-config.schema.ts:159](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L159)

Zod schema for updating an existing agent configuration.

All fields from CreateAgentConfigurationSchema are optional (partial),
with the id field required to identify the configuration to update.

## Remarks

Supports partial updates - only include the fields you want to modify.
The id field is mandatory to specify which agent configuration to update.

## Example

```typescript
const updatePayload: UpdateAgentConfiguration = {
  id: '123*',
  name: 'Updated Sales Assistant',
  metadata: { team: 'enterprise-sales' }
};
```
