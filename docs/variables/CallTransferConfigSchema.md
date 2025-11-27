[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CallTransferConfigSchema

# Variable: CallTransferConfigSchema

```ts
const CallTransferConfigSchema: ZodObject<CallTransferConfig>;
```

Defined in: src/core/service-configuration/call-transfer-config.schema.ts:28

Zod schema for individual call transfer configuration.

Defines the structure for configuring call transfers in the telephony system,
supporting both blind transfers (immediate) and warm transfers (announced).

## Example

```typescript
const transferConfig: CallTransferConfig = {
  transfer_number: '+15551234567',
  transfer_type: 'warm',
  transfer_conditions: ['speak to sales', 'talk to manager', 'escalate']
};
```
