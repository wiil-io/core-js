[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallingHoursSchema

# Variable: CallingHoursSchema

```ts
const CallingHoursSchema: ZodObject<CallingHours>;
```

Defined in: [src/core/conversation/outbound-call.schema.ts:37](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-call.schema.ts#L37)

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
