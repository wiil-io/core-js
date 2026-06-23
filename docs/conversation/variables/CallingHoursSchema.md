[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallingHoursSchema

# Variable: CallingHoursSchema

```ts
const CallingHoursSchema: ZodObject<CallingHours>;
```

Defined in: [src/core/conversation/outbound-call.schema.ts:37](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/outbound-call.schema.ts#L37)

Calling hours configuration for outbound calls.

This schema represents the **Time Window** configuration:

```
Call Request
     │
     ▼ restricted by
Calling Hours ← THIS SCHEMA
     │
     ▼ queued until
Next Available Window
```

Ensures compliance with TCPA regulations and respects customer preferences.

## See

BusinessCallRequestSchema - Uses this for time-restricted campaigns
