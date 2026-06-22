[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallRequestResult

# Type Alias: CallRequestResult

```ts
type CallRequestResult = {
  success: boolean;
  request?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     phoneConfigurationId?: string | null;
     to: string;
     from: string;
     agentConfigurationId: string;
     instructionConfigurationId?: string | null;
     maxDuration?: number;
     scheduleType: ScheduleType;
     serviceConversationConfigId?: string | null;
     timeZone?: string;
     scheduledAt?: number;
     callingHours?:   | {
        startTime: string;
        endTime: string;
        daysOfWeek: number[];
      }
        | null;
     maxRetries?: number;
     retryDelayMinutes?: number;
     status: CallRequestStatus;
     metadata?: Record<string, any>;
   }
     | null;
  error_message?: string | null;
};
```

Defined in: [src/core/conversation/outbound-call.schema.ts:138](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/outbound-call.schema.ts#L138)

Call request result schema.
Response payload from telephony provider after initiating a call.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/conversation/outbound-call.schema.ts:126](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/outbound-call.schema.ts#L126) |
| <a id="request"></a> `request?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `phoneConfigurationId?`: `string` \| `null`; `to`: `string`; `from`: `string`; `agentConfigurationId`: `string`; `instructionConfigurationId?`: `string` \| `null`; `maxDuration?`: `number`; `scheduleType`: [`ScheduleType`](../../type-definitions/enumerations/ScheduleType.md); `serviceConversationConfigId?`: `string` \| `null`; `timeZone?`: `string`; `scheduledAt?`: `number`; `callingHours?`: \| \{ `startTime`: `string`; `endTime`: `string`; `daysOfWeek`: `number`[]; \} \| `null`; `maxRetries?`: `number`; `retryDelayMinutes?`: `number`; `status`: [`CallRequestStatus`](../../type-definitions/enumerations/CallRequestStatus.md); `metadata?`: `Record`\<`string`, `any`\>; \} \| `null` | [src/core/conversation/outbound-call.schema.ts:127](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/outbound-call.schema.ts#L127) |
| <a id="error_message"></a> `error_message?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:128](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/outbound-call.schema.ts#L128) |
