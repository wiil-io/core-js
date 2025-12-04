[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneConfigurationSchema

# Variable: UpdatePhoneConfigurationSchema

```ts
const UpdatePhoneConfigurationSchema: ZodObject<UpdatePhoneConfiguration>;
```

Defined in: [src/core/service-configuration/phone-config.schema.ts:128](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-config.schema.ts#L128)

Zod schema for updating an existing phone configuration.

Only allows updating the friendly name and requires the id to identify the configuration.

## Example

```typescript
const updatePayload: UpdatePhoneConfiguration = {
  id: '123*',
  friendlyName: 'Updated Support Line Name'
};
```
