[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.36**](../../README.md)

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

Defined in: [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:61](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L61)

Phone agent setup result schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:93](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L93) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:94](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L94) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:95](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L95) |
| <a id="errormessage"></a> `errorMessage?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:96](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L96) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:97](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L97) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L47) |
