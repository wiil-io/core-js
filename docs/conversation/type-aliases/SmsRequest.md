[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / SmsRequest

# Type Alias: SmsRequest

```ts
type SmsRequest = {
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
  from?: string | null;
  body: string;
  templateId?: string | null;
  variables?: Record<string, any> | null;
  scheduledAt?: number;
  serviceConversationConfigId?: string | null;
  metadata?: Record<string, any> | null;
};
```

Defined in: [src/core/conversation/outbound-sms.schema.ts:57](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L57)

SMS request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L10) |
| <a id="createdby"></a> `createdBy?` | `string` | [src/core/base.schema.ts:58](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L58) |
| <a id="updatedby"></a> `updatedBy?` | `string` | [src/core/base.schema.ts:59](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L59) |
| <a id="deletedat"></a> `deletedAt?` | `number` | [src/core/base.schema.ts:60](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L60) |
| <a id="deletedby"></a> `deletedBy?` | `string` | [src/core/base.schema.ts:61](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L61) |
| <a id="uniquekey"></a> `uniqueKey?` | `string` | [src/core/base.schema.ts:62](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L62) |
| <a id="version"></a> `version?` | `number` | [src/core/base.schema.ts:63](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L63) |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:24](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L24) |
| <a id="to"></a> `to` | `string` | [src/core/conversation/outbound-sms.schema.ts:25](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L25) |
| <a id="from"></a> `from?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:26](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L26) |
| <a id="body"></a> `body` | `string` | [src/core/conversation/outbound-sms.schema.ts:29](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L29) |
| <a id="templateid"></a> `templateId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:30](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L30) |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> \| `null` | [src/core/conversation/outbound-sms.schema.ts:31](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L31) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-sms.schema.ts:34](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L34) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:35](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L35) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/conversation/outbound-sms.schema.ts:38](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/conversation/outbound-sms.schema.ts#L38) |
