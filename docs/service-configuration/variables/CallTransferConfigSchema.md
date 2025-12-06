[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.22**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CallTransferConfigSchema

# Variable: CallTransferConfigSchema

```ts
const CallTransferConfigSchema: ZodObject<CallTransferConfig>;
```

Defined in: [src/core/service-configuration/call-transfer-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/service-configuration/call-transfer-config.schema.ts#L48)

Zod schema for individual call transfer configuration.

Defines the structure for configuring call transfers in the telephony system. Call transfer
configurations are used by Agent Configurations to handle escalations and routing scenarios.
Multiple transfer configurations can be defined, each with different conditions and destinations.

## Remarks

**Architecture Context:**
- **Used By**: Agent Configuration (call_transfer_config array)
- **Purpose**: Enables agents to escalate or route calls to human operators or specialized teams
- **Transfer Types**:
  - **Blind Transfer**: Immediately transfers the call without announcement
  - **Warm Transfer**: Announces the call to the recipient before connecting the caller

**Use Cases:**
- Sales inquiries → Transfer to sales team
- Technical support escalation → Transfer to senior technician
- Billing questions → Transfer to billing department
- Emergency situations → Transfer to on-call manager

## Example

```typescript
const transferConfig: CallTransferConfig = {
  transfer_number: '+15551234567',
  transfer_type: 'warm',
  transfer_conditions: ['speak to sales', 'talk to manager', 'escalate']
};
```
