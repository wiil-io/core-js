[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallingHours

# Type Alias: CallingHours

```ts
type CallingHours = {
  startTime: string;
  endTime: string;
  daysOfWeek: number[];
};
```

Defined in: [src/core/conversation/outbound-call.schema.ts:43](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-call.schema.ts#L43)

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

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="starttime"></a> `startTime` | `string` | [src/core/conversation/outbound-call.schema.ts:38](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-call.schema.ts#L38) |
| <a id="endtime"></a> `endTime` | `string` | [src/core/conversation/outbound-call.schema.ts:39](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-call.schema.ts#L39) |
| <a id="daysofweek"></a> `daysOfWeek` | `number`[] | [src/core/conversation/outbound-call.schema.ts:40](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/outbound-call.schema.ts#L40) |

## See

BusinessCallRequestSchema - Uses this for time-restricted campaigns
