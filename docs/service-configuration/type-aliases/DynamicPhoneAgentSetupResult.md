[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.34**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicPhoneAgentSetupResult

# Type Alias: DynamicPhoneAgentSetupResult

```ts
type DynamicPhoneAgentSetupResult = {
  success: boolean;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  errorMessage?: string;
  metadata?: Record<string, any> | null;
  phoneNumber: string;
};
```

Defined in: [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:31](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L31)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:36](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L36) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:37](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L37) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:38](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L38) |
| <a id="errormessage"></a> `errorMessage?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:39](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L39) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:40](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L40) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:21](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L21) |
