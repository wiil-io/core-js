[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UpdateCallRequest

# Type Alias: UpdateCallRequest

```ts
type UpdateCallRequest = {
  phoneConfigurationId?: string | null;
  to?: string;
  from?: string;
  agentConfigurationId?: string;
  instructionConfigurationId?: string | null;
  maxDuration?: number;
  scheduleType?:   | IMMEDIATE
     | SCHEDULED
     | RECURRING;
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
  status?:   | PENDING
     | SCHEDULED
     | IN_PROGRESS
     | COMPLETED
     | FAILED
     | CANCELLED;
  metadata?: Record<string, any>;
  id: string;
};
```

Defined in: [src/core/conversation/outbound-call.schema.ts:137](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L137)

Schema for updating an existing call request.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:70](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L70) |
| <a id="to"></a> `to?` | `string` | [src/core/conversation/outbound-call.schema.ts:71](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L71) |
| <a id="from"></a> `from?` | `string` | [src/core/conversation/outbound-call.schema.ts:72](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L72) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | [src/core/conversation/outbound-call.schema.ts:73](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L73) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:74](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L74) |
| <a id="maxduration"></a> `maxDuration?` | `number` | [src/core/conversation/outbound-call.schema.ts:75](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L75) |
| <a id="scheduletype"></a> `scheduleType?` | \| [`IMMEDIATE`](../../type-definitions/enumerations/ScheduleType.md#immediate) \| [`SCHEDULED`](../../type-definitions/enumerations/ScheduleType.md#scheduled) \| [`RECURRING`](../../type-definitions/enumerations/ScheduleType.md#recurring) | [src/core/conversation/outbound-call.schema.ts:76](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L76) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:77](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L77) |
| <a id="timezone"></a> `timeZone?` | `string` | [src/core/conversation/outbound-call.schema.ts:80](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L80) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-call.schema.ts:81](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L81) |
| <a id="callinghours"></a> `callingHours?` | \| \{ `startTime`: `string`; `endTime`: `string`; `daysOfWeek`: `number`[]; \} \| `null` | [src/core/conversation/outbound-call.schema.ts:82](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L82) |
| <a id="maxretries"></a> `maxRetries?` | `number` | [src/core/conversation/outbound-call.schema.ts:85](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L85) |
| <a id="retrydelayminutes"></a> `retryDelayMinutes?` | `number` | [src/core/conversation/outbound-call.schema.ts:86](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L86) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/CallRequestStatus.md#pending) \| [`SCHEDULED`](../../type-definitions/enumerations/CallRequestStatus.md#scheduled) \| [`IN_PROGRESS`](../../type-definitions/enumerations/CallRequestStatus.md#in_progress) \| [`COMPLETED`](../../type-definitions/enumerations/CallRequestStatus.md#completed) \| [`FAILED`](../../type-definitions/enumerations/CallRequestStatus.md#failed) \| [`CANCELLED`](../../type-definitions/enumerations/CallRequestStatus.md#cancelled) | [src/core/conversation/outbound-call.schema.ts:89](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L89) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-call.schema.ts:92](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L92) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/outbound-call.schema.ts:114](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/outbound-call.schema.ts#L114) |
