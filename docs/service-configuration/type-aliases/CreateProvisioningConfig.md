[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateProvisioningConfig

# Type Alias: CreateProvisioningConfig

```ts
type CreateProvisioningConfig = {
  chainName: string;
  description?: string;
  sttConfig: {
     modelId: string;
     defaultLanguage: string;
  };
  agentConfigurationId: string;
  ttsConfig: {
     modelId: string;
     voiceId: string;
     defaultLanguage: string;
     voiceSettings?: Record<string, any>;
  };
};
```

Defined in: [src/core/service-configuration/provisioning-config.ts:187](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L187)

Type definition for creating a provisioning configuration chain.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="chainname"></a> `chainName` | `string` | [src/core/service-configuration/provisioning-config.ts:140](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L140) |
| <a id="description"></a> `description?` | `string` | [src/core/service-configuration/provisioning-config.ts:141](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L141) |
| <a id="sttconfig"></a> `sttConfig` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:142](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L142) |
| `sttConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:39](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L39) |
| `sttConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:40](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L40) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/provisioning-config.ts:143](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L143) |
| <a id="ttsconfig"></a> `ttsConfig` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | [src/core/service-configuration/provisioning-config.ts:144](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L144) |
| `ttsConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:78](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L78) |
| `ttsConfig.voiceId` | `string` | [src/core/service-configuration/provisioning-config.ts:79](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L79) |
| `ttsConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:80](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L80) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/provisioning-config.ts:81](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/provisioning-config.ts#L81) |
