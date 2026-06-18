[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallingHoursSchema

# Variable: CallingHoursSchema

```ts
const CallingHoursSchema: ZodObject<CallingHours>;
```

Defined in: [src/core/conversation/outbound-call.schema.ts:37](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-call.schema.ts#L37)

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
