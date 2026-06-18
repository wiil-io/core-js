[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / SmsRequestResult

# Type Alias: SmsRequestResult

```ts
type SmsRequestResult = {
  success: boolean;
  request?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     phoneConfigurationId?: string | null;
     to: string;
     from?: string | null;
     body: string;
     templateId?: string | null;
     variables?: Record<string, any> | null;
     scheduledAt?: number;
     serviceConversationConfigId?: string | null;
     status: SmsStatus;
     maxRetries?: number;
     retryCount: number;
     retryDelayMinutes?: number;
     metadata?: Record<string, any> | null;
   }
     | null;
  error_message?: string | null;
};
```

Defined in: [src/core/conversation/outbound-sms.schema.ts:104](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/outbound-sms.schema.ts#L104)

SMS request result schema.
Response payload after submitting an SMS request.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/conversation/outbound-sms.schema.ts:92](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/outbound-sms.schema.ts#L92) |
| <a id="request"></a> `request?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `phoneConfigurationId?`: `string` \| `null`; `to`: `string`; `from?`: `string` \| `null`; `body`: `string`; `templateId?`: `string` \| `null`; `variables?`: `Record`\<`string`, `any`\> \| `null`; `scheduledAt?`: `number`; `serviceConversationConfigId?`: `string` \| `null`; `status`: [`SmsStatus`](../../type-definitions/enumerations/SmsStatus.md); `maxRetries?`: `number`; `retryCount`: `number`; `retryDelayMinutes?`: `number`; `metadata?`: `Record`\<`string`, `any`\> \| `null`; \} \| `null` | [src/core/conversation/outbound-sms.schema.ts:93](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/outbound-sms.schema.ts#L93) |
| <a id="error_message"></a> `error_message?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:94](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/outbound-sms.schema.ts#L94) |
