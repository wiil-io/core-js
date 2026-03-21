[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.50**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallingHoursSchema

# Variable: CallingHoursSchema

```ts
const CallingHoursSchema: ZodObject<CallingHours>;
```

Defined in: [src/core/conversation/outbound-call.schema.ts:29](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-call.schema.ts#L29)

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
