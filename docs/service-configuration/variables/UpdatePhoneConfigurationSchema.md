[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneConfigurationSchema

# Variable: UpdatePhoneConfigurationSchema

```ts
const UpdatePhoneConfigurationSchema: ZodObject<UpdatePhoneConfiguration>;
```

Defined in: [src/core/service-configuration/phone-config.schema.ts:128](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/phone-config.schema.ts#L128)

Zod schema for updating an existing phone configuration.

Only allows updating the friendly name and requires the id to identify the configuration.

## Example

```typescript
const updatePayload: UpdatePhoneConfiguration = {
  id: '123*',
  friendlyName: 'Updated Support Line Name'
};
```
