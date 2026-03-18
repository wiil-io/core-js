[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / BusinessCallRequest

# Type Alias: BusinessCallRequest

```ts
type BusinessCallRequest = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  createdBy?: string;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  uniqueKey?: string;
  version?: number;
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

Defined in: src/core/conversation/outbound-call.schema.ts:99

Business call request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L10) |
| <a id="createdby"></a> `createdBy?` | `string` | [src/core/base.schema.ts:58](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L58) |
| <a id="updatedby"></a> `updatedBy?` | `string` | [src/core/base.schema.ts:59](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L59) |
| <a id="deletedat"></a> `deletedAt?` | `number` | [src/core/base.schema.ts:60](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L60) |
| <a id="deletedby"></a> `deletedBy?` | `string` | [src/core/base.schema.ts:61](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L61) |
| <a id="uniquekey"></a> `uniqueKey?` | `string` | [src/core/base.schema.ts:62](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L62) |
| <a id="version"></a> `version?` | `number` | [src/core/base.schema.ts:63](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L63) |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | src/core/conversation/outbound-call.schema.ts:58 |
| <a id="to"></a> `to` | `string` | src/core/conversation/outbound-call.schema.ts:59 |
| <a id="from"></a> `from` | `string` | src/core/conversation/outbound-call.schema.ts:60 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | src/core/conversation/outbound-call.schema.ts:61 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` \| `null` | src/core/conversation/outbound-call.schema.ts:62 |
| <a id="maxduration"></a> `maxDuration?` | `number` | src/core/conversation/outbound-call.schema.ts:63 |
| <a id="scheduletype"></a> `scheduleType` | [`ScheduleType`](../../type-definitions/enumerations/ScheduleType.md) | src/core/conversation/outbound-call.schema.ts:64 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | src/core/conversation/outbound-call.schema.ts:65 |
| <a id="timezone"></a> `timeZone?` | `string` | src/core/conversation/outbound-call.schema.ts:68 |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | src/core/conversation/outbound-call.schema.ts:69 |
| <a id="callinghours"></a> `callingHours?` | \| \{ `startTime`: `string`; `endTime`: `string`; `daysOfWeek`: `number`[]; \} \| `null` | src/core/conversation/outbound-call.schema.ts:70 |
| <a id="maxretries"></a> `maxRetries?` | `number` | src/core/conversation/outbound-call.schema.ts:73 |
| <a id="retrydelayminutes"></a> `retryDelayMinutes?` | `number` | src/core/conversation/outbound-call.schema.ts:74 |
| <a id="status"></a> `status` | [`CallRequestStatus`](../../type-definitions/enumerations/CallRequestStatus.md) | src/core/conversation/outbound-call.schema.ts:77 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/conversation/outbound-call.schema.ts:80 |
