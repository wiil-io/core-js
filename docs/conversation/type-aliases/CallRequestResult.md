[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.50**](../../README.md)

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

Defined in: [src/core/conversation/outbound-call.schema.ts:104](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-call.schema.ts#L104)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/conversation/outbound-call.schema.ts:95](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-call.schema.ts#L95) |
| <a id="request"></a> `request?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `phoneConfigurationId?`: `string` \| `null`; `to`: `string`; `from`: `string`; `agentConfigurationId`: `string`; `instructionConfigurationId?`: `string` \| `null`; `maxDuration?`: `number`; `scheduleType`: [`ScheduleType`](../../type-definitions/enumerations/ScheduleType.md); `serviceConversationConfigId?`: `string` \| `null`; `timeZone?`: `string`; `scheduledAt?`: `number`; `callingHours?`: \| \{ `startTime`: `string`; `endTime`: `string`; `daysOfWeek`: `number`[]; \} \| `null`; `maxRetries?`: `number`; `retryDelayMinutes?`: `number`; `status`: [`CallRequestStatus`](../../type-definitions/enumerations/CallRequestStatus.md); `metadata?`: `Record`\<`string`, `any`\>; \} \| `null` | [src/core/conversation/outbound-call.schema.ts:96](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-call.schema.ts#L96) |
| <a id="error_message"></a> `error_message?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:97](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-call.schema.ts#L97) |
