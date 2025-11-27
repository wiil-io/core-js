[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateAgentConfigurationSchema

# Variable: UpdateAgentConfigurationSchema

```ts
const UpdateAgentConfigurationSchema: ZodObject<UpdateAgentConfiguration>;
```

Defined in: src/core/service-configuration/agent-config.schema.ts:139

Zod schema for updating an existing agent configuration.

All fields from CreateAgentConfigurationSchema are optional (partial),
with the id field required to identify the configuration to update.

## Remarks

Supports partial updates - only include the fields you want to modify.
The id field is mandatory to specify which agent configuration to update.

## Example

```typescript
const updatePayload: UpdateAgentConfiguration = {
  id: 'agent-123',
  name: 'Updated Sales Assistant',
  metadata: { team: 'enterprise-sales' }
};
```
