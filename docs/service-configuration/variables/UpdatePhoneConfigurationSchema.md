[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneConfigurationSchema

# Variable: UpdatePhoneConfigurationSchema

```ts
const UpdatePhoneConfigurationSchema: ZodObject<UpdatePhoneConfiguration>;
```

Defined in: [src/core/service-configuration/phone-config.schema.ts:126](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/service-configuration/phone-config.schema.ts#L126)

Zod schema for updating an existing phone configuration.

Only allows updating the friendly name and requires the id to identify the configuration.

## Example

```typescript
const updatePayload: UpdatePhoneConfiguration = {
  id: '123*',
  friendlyName: 'Updated Support Line Name'
};
```
