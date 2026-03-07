[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.44**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateAgentConfigurationSchema

# Variable: UpdateAgentConfigurationSchema

```ts
const UpdateAgentConfigurationSchema: ZodObject<UpdateAgentConfiguration>;
```

Defined in: [src/core/service-configuration/agent-config.schema.ts:159](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/service-configuration/agent-config.schema.ts#L159)

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
  name: 'Alex',
  metadata: { team: 'enterprise-sales' }
};
```
