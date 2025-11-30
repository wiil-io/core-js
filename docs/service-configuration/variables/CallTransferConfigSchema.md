[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CallTransferConfigSchema

# Variable: CallTransferConfigSchema

```ts
const CallTransferConfigSchema: ZodObject<CallTransferConfig>;
```

Defined in: [src/core/service-configuration/call-transfer-config.schema.ts:28](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/call-transfer-config.schema.ts#L28)

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
