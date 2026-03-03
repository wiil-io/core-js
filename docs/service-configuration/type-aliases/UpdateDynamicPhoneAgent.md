[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.34**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateDynamicPhoneAgent

# Type Alias: UpdateDynamicPhoneAgent

```ts
type UpdateDynamicPhoneAgent = {
  assistantName?: string;
  instructionConfigurationId?: string;
  role_template_identifier?:   | CUSTOMER_SUPPORT_GENERAL
     | TECHNICAL_SUPPORT_SPECIALIST
     | SALES_REPRESENTATIVE
     | ONBOARDING_SPECIALIST
     | BILLING_SUPPORT_SPECIALIST;
  capabilities?: BusinessSupportServices[];
  knowledgeSourceIds?: string[];
  language?: string;
  voice?: string;
  providerType?:   | OPENAI
     | GOOGLE
     | ANTHROPIC
     | GROQ
     | DEEPGRAM
     | ELEVENLABS
     | DEEPSEEK
     | CARTESIA
     | null;
  providerModelId?: string | null;
  phoneConfigurationId?: string | null;
  testPhoneNumber?: string | null;
  sttConfiguration?:   | {
     providerType: SupportedProprietor;
     providerModelId: string;
     languageId: string;
   }
     | null;
  ttsConfiguration?:   | {
     providerType: SupportedProprietor;
     providerModelId: string;
     languageId: string;
     voiceId?: string;
   }
     | null;
  id: string;
};
```

Defined in: [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:30](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L30)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="assistantname"></a> `assistantName?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:5](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L5) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:6](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L6) |
| <a id="role_template_identifier"></a> `role_template_identifier?` | \| [`CUSTOMER_SUPPORT_GENERAL`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#customer_support_general) \| [`TECHNICAL_SUPPORT_SPECIALIST`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#technical_support_specialist) \| [`SALES_REPRESENTATIVE`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#sales_representative) \| [`ONBOARDING_SPECIALIST`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#onboarding_specialist) \| [`BILLING_SUPPORT_SPECIALIST`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#billing_support_specialist) | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:7](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L7) |
| <a id="capabilities"></a> `capabilities?` | [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[] | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:8](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L8) |
| <a id="knowledgesourceids"></a> `knowledgeSourceIds?` | `string`[] | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:9](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L9) |
| <a id="language"></a> `language?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:10](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L10) |
| <a id="voice"></a> `voice?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:11](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L11) |
| <a id="providertype"></a> `providerType?` | \| [`OPENAI`](../../type-definitions/enumerations/SupportedProprietor.md#openai) \| [`GOOGLE`](../../type-definitions/enumerations/SupportedProprietor.md#google) \| [`ANTHROPIC`](../../type-definitions/enumerations/SupportedProprietor.md#anthropic) \| [`GROQ`](../../type-definitions/enumerations/SupportedProprietor.md#groq) \| [`DEEPGRAM`](../../type-definitions/enumerations/SupportedProprietor.md#deepgram) \| [`ELEVENLABS`](../../type-definitions/enumerations/SupportedProprietor.md#elevenlabs) \| [`DEEPSEEK`](../../type-definitions/enumerations/SupportedProprietor.md#deepseek) \| [`CARTESIA`](../../type-definitions/enumerations/SupportedProprietor.md#cartesia) \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:12](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L12) |
| <a id="providermodelid"></a> `providerModelId?` | `string` \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:13](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L13) |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:5](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L5) |
| <a id="testphonenumber"></a> `testPhoneNumber?` | `string` \| `null` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:6](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L6) |
| <a id="sttconfiguration"></a> `sttConfiguration?` | \| \{ `providerType`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `providerModelId`: `string`; `languageId`: `string`; \} \| `null` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:7](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L7) |
| <a id="ttsconfiguration"></a> `ttsConfiguration?` | \| \{ `providerType`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `providerModelId`: `string`; `languageId`: `string`; `voiceId?`: `string`; \} \| `null` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:8](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L8) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:25](https://github.com/wiil-io/core-js/blob/b68e544868dafd593c2ef184dc1ce1086a9534f7/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L25) |
