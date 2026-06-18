[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / BusinessCallRequest

# Type Alias: BusinessCallRequest

```ts
type BusinessCallRequest = {
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
};
```

Defined in: [src/core/conversation/outbound-call.schema.ts:135](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L135)

Business call request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/base.schema.ts#L10) |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:70](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L70) |
| <a id="to"></a> `to` | `string` | [src/core/conversation/outbound-call.schema.ts:71](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L71) |
| <a id="from"></a> `from` | `string` | [src/core/conversation/outbound-call.schema.ts:72](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L72) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/conversation/outbound-call.schema.ts:73](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L73) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:74](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L74) |
| <a id="maxduration"></a> `maxDuration?` | `number` | [src/core/conversation/outbound-call.schema.ts:75](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L75) |
| <a id="scheduletype"></a> `scheduleType` | [`ScheduleType`](../../type-definitions/enumerations/ScheduleType.md) | [src/core/conversation/outbound-call.schema.ts:76](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L76) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-call.schema.ts:77](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L77) |
| <a id="timezone"></a> `timeZone?` | `string` | [src/core/conversation/outbound-call.schema.ts:80](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L80) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-call.schema.ts:81](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L81) |
| <a id="callinghours"></a> `callingHours?` | \| \{ `startTime`: `string`; `endTime`: `string`; `daysOfWeek`: `number`[]; \} \| `null` | [src/core/conversation/outbound-call.schema.ts:82](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L82) |
| <a id="maxretries"></a> `maxRetries?` | `number` | [src/core/conversation/outbound-call.schema.ts:85](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L85) |
| <a id="retrydelayminutes"></a> `retryDelayMinutes?` | `number` | [src/core/conversation/outbound-call.schema.ts:86](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L86) |
| <a id="status"></a> `status` | [`CallRequestStatus`](../../type-definitions/enumerations/CallRequestStatus.md) | [src/core/conversation/outbound-call.schema.ts:89](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L89) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-call.schema.ts:92](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/conversation/outbound-call.schema.ts#L92) |
