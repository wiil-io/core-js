[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.4**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../README.md) / service-configuration

# service-configuration

## Fileoverview

Central export point for all service configuration schemas.

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AgentConfiguration](type-aliases/AgentConfiguration.md) | Type definition for Agent Configuration. |
| [CreateAgentConfiguration](type-aliases/CreateAgentConfiguration.md) | Type definition for creating a new agent configuration. |
| [UpdateAgentConfiguration](type-aliases/UpdateAgentConfiguration.md) | Type definition for updating an existing agent configuration. |
| [CallTransferConfig](type-aliases/CallTransferConfig.md) | Type definition for call transfer configuration. |
| [DeploymentConfiguration](type-aliases/DeploymentConfiguration.md) | Type definition for deployment configuration. |
| [CreateDeploymentConfiguration](type-aliases/CreateDeploymentConfiguration.md) | Type definition for creating a new deployment configuration. |
| [CreateChainDeploymentConfiguration](type-aliases/CreateChainDeploymentConfiguration.md) | Type definition for creating a chained deployment configuration. |
| [UpdateDeploymentConfiguration](type-aliases/UpdateDeploymentConfiguration.md) | Type definition for updating an existing deployment configuration. |
| [DeploymentConfigurationResult](type-aliases/DeploymentConfigurationResult.md) | Type definition for deployment configuration result. |
| [DeploymentConfigurationDetails](type-aliases/DeploymentConfigurationDetails.md) | Type definition for deployment configuration details. |
| [InstructionConfiguration](type-aliases/InstructionConfiguration.md) | Type definition for Instruction Configuration. |
| [CreateInstructionConfiguration](type-aliases/CreateInstructionConfiguration.md) | Type definition for creating a new instruction configuration. |
| [UpdateInstructionConfiguration](type-aliases/UpdateInstructionConfiguration.md) | Type definition for updating an existing instruction configuration. |
| [CallChannelType](type-aliases/CallChannelType.md) | Type definition for call channel. |
| [SmsChannelType](type-aliases/SmsChannelType.md) | Type definition for SMS channel. |
| [WebChannelType](type-aliases/WebChannelType.md) | Type definition for web channel. |
| [MobileAppChannelType](type-aliases/MobileAppChannelType.md) | Type definition for mobile app channel. |
| [CreateWebChannel](type-aliases/CreateWebChannel.md) | Type definition for creating a web channel. |
| [CreateMobileAppChannel](type-aliases/CreateMobileAppChannel.md) | Type definition for creating a mobile app channel. |
| [DeploymentChannel](type-aliases/DeploymentChannel.md) | Type definition for deployment channel. |
| [CreateDeploymentChannel](type-aliases/CreateDeploymentChannel.md) | Type definition for creating deployment channel. |
| [UpdateDeploymentChannel](type-aliases/UpdateDeploymentChannel.md) | Type definition for updating deployment channel. |
| [ChannelSetupRequest](type-aliases/ChannelSetupRequest.md) | Type definition for channel setup request. |
| [ChannelUpdateRequest](type-aliases/ChannelUpdateRequest.md) | Type definition for channel update request. |
| [DeploymentChannelRequest](type-aliases/DeploymentChannelRequest.md) | Type definition for deployment channel request (legacy compatibility). |
| [DeploymentChannelType](type-aliases/DeploymentChannelType.md) | Type definition for deployment channel type (legacy compatibility). |
| [DeploymentChannelUpdate](type-aliases/DeploymentChannelUpdate.md) | Type definition for deployment channel update (legacy compatibility). |
| [DeploymentChannelUpdateRequest](type-aliases/DeploymentChannelUpdateRequest.md) | Type definition for deployment channel update request (legacy compatibility). |
| [DeploymentChannelInfo](type-aliases/DeploymentChannelInfo.md) | Type definition for deployment channel with deployment info. |
| [KnowledgeSource](type-aliases/KnowledgeSource.md) | Type definition for Knowledge Source. |
| [PhoneConfiguration](type-aliases/PhoneConfiguration.md) | Type definition for Phone Configuration. |
| [UpdatePhoneConfiguration](type-aliases/UpdatePhoneConfiguration.md) | Type definition for updating an existing phone configuration. |
| [PhoneProviderRegion](type-aliases/PhoneProviderRegion.md) | Type definition for phone provider region. |
| [BasePhoneNumberInfo](type-aliases/BasePhoneNumberInfo.md) | Type definition for base phone number information. |
| [SWPhoneNumberInfo](type-aliases/SWPhoneNumberInfo.md) | Type definition for SignalWire phone number information. |
| [TwilioPhoneNumberInfo](type-aliases/TwilioPhoneNumberInfo.md) | Type definition for Twilio phone number information. |
| [PhoneProviderRequest](type-aliases/PhoneProviderRequest.md) | Type definition for phone provider request. |
| [PhoneProviderResponse](type-aliases/PhoneProviderResponse.md) | Type definition for phone provider response. |
| [PhoneNumberPurchase](type-aliases/PhoneNumberPurchase.md) | Type definition for phone number purchase. |
| [CreatePhoneNumberPurchase](type-aliases/CreatePhoneNumberPurchase.md) | Type definition for creating a phone number purchase. |
| [UpdatePhoneNumberPurchase](type-aliases/UpdatePhoneNumberPurchase.md) | Type definition for updating a phone number purchase. |
| [~~PhoneNumberPurchaseRequest~~](type-aliases/PhoneNumberPurchaseRequest.md) | Legacy type export for backwards compatibility. |
| [PhoneNumberPricing](type-aliases/PhoneNumberPricing.md) | Type definition for phone number pricing. |
| [ProviderPhoneNumberInfo](type-aliases/ProviderPhoneNumberInfo.md) | Type definition for provider phone number configuration. |
| [SttModelConfig](type-aliases/SttModelConfig.md) | Type definition for STT model configuration. |
| [TtsModelConfig](type-aliases/TtsModelConfig.md) | Type definition for TTS model configuration. |
| [ProvisioningConfigChain](type-aliases/ProvisioningConfigChain.md) | Type definition for provisioning configuration chain. |
| [CreateProvisioningConfig](type-aliases/CreateProvisioningConfig.md) | Type definition for creating a provisioning configuration chain. |
| [UpdateProvisioningConfig](type-aliases/UpdateProvisioningConfig.md) | Type definition for updating a provisioning configuration chain. |
| [TranslationChainConfig](type-aliases/TranslationChainConfig.md) | Type definition for translation chain configuration. |
| [CreateTranslationChainConfig](type-aliases/CreateTranslationChainConfig.md) | Type definition for creating a translation chain configuration. |
| [UpdateTranslationChainConfig](type-aliases/UpdateTranslationChainConfig.md) | Type definition for updating a translation chain configuration. |
| [ChainConfiguration](type-aliases/ChainConfiguration.md) | Union type for any chain configuration (provisioning or translation). |
| [CreateChainConfiguration](type-aliases/CreateChainConfiguration.md) | Union type for creating any chain configuration. |
| [UpdateChainConfiguration](type-aliases/UpdateChainConfiguration.md) | Union type for updating any chain configuration. |
| [TravnexSupportModel](type-aliases/TravnexSupportModel.md) | Type definition for Travnex support model. |
| [VoiceGender](type-aliases/VoiceGender.md) | Type definition for voice gender. |
| [Voice](type-aliases/Voice.md) | Type definition for voice configuration. |
| [Language](type-aliases/Language.md) | Type definition for language configuration. |
| [SupportedVoices](type-aliases/SupportedVoices.md) | Type definition for supported voices array. |
| [SupportedLanguages](type-aliases/SupportedLanguages.md) | Type definition for supported languages array. |

## Variables

| Variable | Description |
| ------ | ------ |
| [AgentConfigurationSchema](variables/AgentConfigurationSchema.md) | Zod schema for Agent Configuration validation. |
| [CreateAgentConfigurationSchema](variables/CreateAgentConfigurationSchema.md) | Zod schema for creating a new agent configuration. |
| [UpdateAgentConfigurationSchema](variables/UpdateAgentConfigurationSchema.md) | Zod schema for updating an existing agent configuration. |
| [CallTransferConfigSchema](variables/CallTransferConfigSchema.md) | Zod schema for individual call transfer configuration. |
| [DeploymentConfigurationSchema](variables/DeploymentConfigurationSchema.md) | Zod schema for deployment configuration validation. |
| [CreateDeploymentConfigurationSchema](variables/CreateDeploymentConfigurationSchema.md) | Zod schema for creating a new deployment configuration. |
| [CreateChainDeploymentConfigurationSchema](variables/CreateChainDeploymentConfigurationSchema.md) | Zod schema for creating a chained deployment configuration. |
| [UpdateDeploymentConfigurationSchema](variables/UpdateDeploymentConfigurationSchema.md) | Zod schema for updating an existing deployment configuration. |
| [DeploymentConfigurationResultSchema](variables/DeploymentConfigurationResultSchema.md) | Zod schema for deployment configuration result (lightweight version). |
| [DeploymentConfigurationDetailsSchema](variables/DeploymentConfigurationDetailsSchema.md) | Zod schema for deployment configuration details (full version with all relations). |
| [InstructionConfigurationSchema](variables/InstructionConfigurationSchema.md) | Zod schema for Instruction Configuration validation. |
| [CreateInstructionConfigurationSchema](variables/CreateInstructionConfigurationSchema.md) | Zod schema for creating a new instruction configuration. |
| [UpdateInstructionConfigurationSchema](variables/UpdateInstructionConfigurationSchema.md) | Zod schema for updating an existing instruction configuration. |
| [PhoneChannelConfigSchema](variables/PhoneChannelConfigSchema.md) | Zod schema for phone channel configuration. |
| [WebChannelConfigSchema](variables/WebChannelConfigSchema.md) | Zod schema for web channel configuration. |
| [MobileAppChannelConfigSchema](variables/MobileAppChannelConfigSchema.md) | Zod schema for mobile app channel configuration. |
| [CallChannelSchema](variables/CallChannelSchema.md) | Zod schema for call-based deployment channel. |
| [SmsChannelSchema](variables/SmsChannelSchema.md) | Zod schema for SMS-based deployment channel. |
| [WebChannelSchema](variables/WebChannelSchema.md) | Zod schema for web-based deployment channel. |
| [MobileAppChannelSchema](variables/MobileAppChannelSchema.md) | Zod schema for mobile app deployment channel. |
| [CreateWebChannelSchema](variables/CreateWebChannelSchema.md) | Zod schema for creating a new web channel. |
| [CreateMobileAppChannelSchema](variables/CreateMobileAppChannelSchema.md) | Zod schema for creating a new mobile app channel. |
| [DeploymentChannelRequestSchema](variables/DeploymentChannelRequestSchema.md) | Zod schema for deployment channel creation request. |
| [DeploymentChannelSchema](variables/DeploymentChannelSchema.md) | Zod schema for main deployment channel with discriminated union. |
| [CreateDeploymentChannelSchema](variables/CreateDeploymentChannelSchema.md) | Zod schema for creating deployment channel. |
| [DeploymentChannelUpdateRequestSchema](variables/DeploymentChannelUpdateRequestSchema.md) | Zod schema for updating deployment channel. |
| [ChannelSetupRequestSchema](variables/ChannelSetupRequestSchema.md) | Zod schema for channel setup request. |
| [ChannelUpdateRequestSchema](variables/ChannelUpdateRequestSchema.md) | Zod schema for channel update request. |
| [DeploymentChannelWithDeploymentSchema](variables/DeploymentChannelWithDeploymentSchema.md) | Zod schema for deployment channel with deployment information. |
| [KnowledgeSourceSchema](variables/KnowledgeSourceSchema.md) | Zod schema for Knowledge Source validation. |
| [PhoneConfigurationSchema](variables/PhoneConfigurationSchema.md) | Zod schema for Phone Configuration validation. |
| [UpdatePhoneConfigurationSchema](variables/UpdatePhoneConfigurationSchema.md) | Zod schema for updating an existing phone configuration. |
| [PhoneProviderRegionSchema](variables/PhoneProviderRegionSchema.md) | Zod schema for phone provider region information. |
| [BasePhoneNumberInfoSchema](variables/BasePhoneNumberInfoSchema.md) | Zod schema for base phone number information. |
| [swPhoneNumberInfoSchema](variables/swPhoneNumberInfoSchema.md) | Zod schema for SignalWire-specific phone number information. |
| [twilioPhoneNumberInfoSchema](variables/twilioPhoneNumberInfoSchema.md) | Zod schema for Twilio-specific phone number information. |
| [PhoneProviderRequestSchema](variables/PhoneProviderRequestSchema.md) | Zod schema for phone provider request. |
| [PhoneProviderResponseSchema](variables/PhoneProviderResponseSchema.md) | Zod schema for phone provider response. |
| [PhoneNumberPurchaseSchema](variables/PhoneNumberPurchaseSchema.md) | Zod schema for phone number purchase transaction. |
| [CreatePhoneNumberPurchaseSchema](variables/CreatePhoneNumberPurchaseSchema.md) | Zod schema for creating a new phone number purchase. |
| [UpdatePhoneNumberPurchaseSchema](variables/UpdatePhoneNumberPurchaseSchema.md) | Zod schema for updating an existing phone number purchase. |
| [~~PhoneNumberPurchaseRequestSchema~~](variables/PhoneNumberPurchaseRequestSchema.md) | Legacy schema export for backwards compatibility. |
| [PhoneNumberPricingSchema](variables/PhoneNumberPricingSchema.md) | Zod schema for phone number pricing information. |
| [ProviderPhoneNumberInfoSchema](variables/ProviderPhoneNumberInfoSchema.md) | Zod schema for provider phone number configuration. |
| [SttModelConfigSchema](variables/SttModelConfigSchema.md) | Zod schema for Speech-to-Text (STT) model configuration. |
| [TtsModelConfigSchema](variables/TtsModelConfigSchema.md) | Zod schema for Text-to-Speech (TTS) model configuration. |
| [ProvisioningConfigChainSchema](variables/ProvisioningConfigChainSchema.md) | Zod schema for provisioning configuration chain. |
| [CreateProvisioningConfigSchema](variables/CreateProvisioningConfigSchema.md) | Zod schema for creating a new provisioning configuration chain. |
| [UpdateProvisioningConfigSchema](variables/UpdateProvisioningConfigSchema.md) | Zod schema for updating an existing provisioning configuration chain. |
| [TranslationChainConfigSchema](variables/TranslationChainConfigSchema.md) | Zod schema for translation chain configuration. |
| [CreateTranslationChainConfigSchema](variables/CreateTranslationChainConfigSchema.md) | Zod schema for creating a new translation chain configuration. |
| [UpdateTranslationChainConfigSchema](variables/UpdateTranslationChainConfigSchema.md) | Zod schema for updating an existing translation chain configuration. |
| [TravnexSupportModelSchema](variables/TravnexSupportModelSchema.md) | Zod schema for Travnex supported model configuration. |
| [VoiceGender](variables/VoiceGender.md) | Enum schema for voice gender classification. |
| [VoiceSchema](variables/VoiceSchema.md) | Zod schema for voice configuration. |
| [LanguageSchema](variables/LanguageSchema.md) | Zod schema for language configuration. |
| [SupportedVoicesSchema](variables/SupportedVoicesSchema.md) | Zod schema for an array of supported voices. |
| [SupportedLanguagesSchema](variables/SupportedLanguagesSchema.md) | Zod schema for an array of supported languages. |

## Functions

| Function | Description |
| ------ | ------ |
| [validateSupportedVoices](functions/validateSupportedVoices.md) | Validation function for supported voices. |
| [isValidVoice](functions/isValidVoice.md) | Type guard function to check if an object is a valid Voice. |
