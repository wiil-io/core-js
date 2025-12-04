[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.11**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneConfigurationSchema

# Variable: UpdatePhoneConfigurationSchema

```ts
const UpdatePhoneConfigurationSchema: ZodObject<UpdatePhoneConfiguration>;
```

Defined in: [src/core/service-configuration/phone-config.schema.ts:130](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-config.schema.ts#L130)

Zod schema for updating an existing phone configuration.

Only allows updating the friendly name and requires the id to identify the configuration.

## Example

```typescript
const updatePayload: UpdatePhoneConfiguration = {
  id: '123*',
  friendlyName: 'Updated Support Line Name'
};
```
