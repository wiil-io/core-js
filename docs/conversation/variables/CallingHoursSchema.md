[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallingHoursSchema

# Variable: CallingHoursSchema

```ts
const CallingHoursSchema: ZodObject<CallingHours>;
```

Defined in: [src/core/conversation/outbound-call.schema.ts:37](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/conversation/outbound-call.schema.ts#L37)

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
