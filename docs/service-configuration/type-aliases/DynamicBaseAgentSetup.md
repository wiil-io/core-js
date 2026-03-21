[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.50**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicBaseAgentSetup

# Type Alias: DynamicBaseAgentSetup

```ts
type DynamicBaseAgentSetup = {
  assistantName: string;
  instructionConfigurationId?: string;
  role_template_identifier?:   | CUSTOMER_SUPPORT_GENERAL
     | TECHNICAL_SUPPORT_SPECIALIST
     | SALES_REPRESENTATIVE
     | ONBOARDING_SPECIALIST
     | BILLING_SUPPORT_SPECIALIST;
  capabilities: BusinessSupportServices[];
  knowledgeSourceIds?: string[];
  language: string;
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
};
```

Defined in: [src/core/service-configuration/base-agent-setup.ts:112](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L112)

Base agent setup schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="assistantname"></a> `assistantName` | `string` | [src/core/service-configuration/base-agent-setup.ts:28](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L28) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/base-agent-setup.ts:29](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L29) |
| <a id="role_template_identifier"></a> `role_template_identifier?` | \| [`CUSTOMER_SUPPORT_GENERAL`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#customer_support_general) \| [`TECHNICAL_SUPPORT_SPECIALIST`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#technical_support_specialist) \| [`SALES_REPRESENTATIVE`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#sales_representative) \| [`ONBOARDING_SPECIALIST`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#onboarding_specialist) \| [`BILLING_SUPPORT_SPECIALIST`](../../type-definitions/enumerations/AgentRoleTemplateIdentifier.md#billing_support_specialist) | [src/core/service-configuration/base-agent-setup.ts:30](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L30) |
| <a id="capabilities"></a> `capabilities` | [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[] | [src/core/service-configuration/base-agent-setup.ts:31](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L31) |
| <a id="knowledgesourceids"></a> `knowledgeSourceIds?` | `string`[] | [src/core/service-configuration/base-agent-setup.ts:32](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L32) |
| <a id="language"></a> `language` | `string` | [src/core/service-configuration/base-agent-setup.ts:33](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L33) |
| <a id="voice"></a> `voice?` | `string` | [src/core/service-configuration/base-agent-setup.ts:34](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L34) |
| <a id="providertype"></a> `providerType?` | \| [`OPENAI`](../../type-definitions/enumerations/SupportedProprietor.md#openai) \| [`GOOGLE`](../../type-definitions/enumerations/SupportedProprietor.md#google) \| [`ANTHROPIC`](../../type-definitions/enumerations/SupportedProprietor.md#anthropic) \| [`GROQ`](../../type-definitions/enumerations/SupportedProprietor.md#groq) \| [`DEEPGRAM`](../../type-definitions/enumerations/SupportedProprietor.md#deepgram) \| [`ELEVENLABS`](../../type-definitions/enumerations/SupportedProprietor.md#elevenlabs) \| [`DEEPSEEK`](../../type-definitions/enumerations/SupportedProprietor.md#deepseek) \| [`CARTESIA`](../../type-definitions/enumerations/SupportedProprietor.md#cartesia) \| `null` | [src/core/service-configuration/base-agent-setup.ts:35](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L35) |
| <a id="providermodelid"></a> `providerModelId?` | `string` \| `null` | [src/core/service-configuration/base-agent-setup.ts:36](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/service-configuration/base-agent-setup.ts#L36) |
