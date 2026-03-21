[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.50**](../../README.md)

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
     metadata?: Record<string, any> | null;
   }
     | null;
  error_message?: string | null;
};
```

Defined in: [src/core/conversation/outbound-sms.schema.ts:62](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-sms.schema.ts#L62)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/conversation/outbound-sms.schema.ts:53](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-sms.schema.ts#L53) |
| <a id="request"></a> `request?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `phoneConfigurationId?`: `string` \| `null`; `to`: `string`; `from?`: `string` \| `null`; `body`: `string`; `templateId?`: `string` \| `null`; `variables?`: `Record`\<`string`, `any`\> \| `null`; `scheduledAt?`: `number`; `serviceConversationConfigId?`: `string` \| `null`; `metadata?`: `Record`\<`string`, `any`\> \| `null`; \} \| `null` | [src/core/conversation/outbound-sms.schema.ts:54](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-sms.schema.ts#L54) |
| <a id="error_message"></a> `error_message?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:55](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/conversation/outbound-sms.schema.ts#L55) |
