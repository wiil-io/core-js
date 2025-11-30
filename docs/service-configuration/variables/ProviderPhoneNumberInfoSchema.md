[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ProviderPhoneNumberInfoSchema

# Variable: ProviderPhoneNumberInfoSchema

```ts
const ProviderPhoneNumberInfoSchema: ZodObject<ProviderPhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:448](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L448)

Zod schema for provider phone number configuration.

Represents the configuration and webhook settings for a phone number in the provider's system.

## Example

```typescript
const providerInfo: ProviderPhoneNumberInfo = {
  id: 'provider-123',
  name: 'Main Line',
  number: '+12125551234',
  call_receive_mode: 'uuid-here',
  call_request_url: 'https://api.example.com/calls',
  call_request_method: 'POST',
  message_request_url: 'https://api.example.com/messages',
  message_request_method: 'POST',
  number_type: 'longcode'
};
```
