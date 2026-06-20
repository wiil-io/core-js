[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../README.md) / conversation

# conversation

## Fileoverview

Central export point for conversation schemas.

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [MessageType](enumerations/MessageType.md) | Message type enum for distinguishing message senders. |
| [SystemMessageEventType](enumerations/SystemMessageEventType.md) | System message event type enum. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ConversationFilters](interfaces/ConversationFilters.md) | Conversation filter options. ConversationFilters |
| [ConversationSorting](interfaces/ConversationSorting.md) | Conversation sorting options. ConversationSorting |
| [ConversationQueryOptions](interfaces/ConversationQueryOptions.md) | Conversation query options. ConversationQueryOptions |
| [CallRequestFilters](interfaces/CallRequestFilters.md) | Call request filter options. CallRequestFilters |
| [CallRequestSorting](interfaces/CallRequestSorting.md) | Call request sorting options. CallRequestSorting |
| [CallRequestQueryOptions](interfaces/CallRequestQueryOptions.md) | Call request query options. CallRequestQueryOptions |
| [EmailRequestFilters](interfaces/EmailRequestFilters.md) | Email request filter options. EmailRequestFilters |
| [EmailRequestSorting](interfaces/EmailRequestSorting.md) | Email request sorting options. EmailRequestSorting |
| [EmailRequestQueryOptions](interfaces/EmailRequestQueryOptions.md) | Email request query options. EmailRequestQueryOptions |
| [EmailRecordFilters](interfaces/EmailRecordFilters.md) | Email record filter options. EmailRecordFilters |
| [EmailRecordSorting](interfaces/EmailRecordSorting.md) | Email record sorting options. EmailRecordSorting |
| [EmailRecordQueryOptions](interfaces/EmailRecordQueryOptions.md) | Email record query options. EmailRecordQueryOptions |
| [SmsRequestFilters](interfaces/SmsRequestFilters.md) | SMS request filter options. SmsRequestFilters |
| [SmsRequestSorting](interfaces/SmsRequestSorting.md) | SMS request sorting options. SmsRequestSorting |
| [SmsRequestQueryOptions](interfaces/SmsRequestQueryOptions.md) | SMS request query options. SmsRequestQueryOptions |
| [OutboundTemplateFilters](interfaces/OutboundTemplateFilters.md) | Outbound template filter options. OutboundTemplateFilters |
| [OutboundTemplateSorting](interfaces/OutboundTemplateSorting.md) | Outbound template sorting options. OutboundTemplateSorting |
| [OutboundTemplateQueryOptions](interfaces/OutboundTemplateQueryOptions.md) | Outbound template query options. OutboundTemplateQueryOptions |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Message](type-aliases/Message.md) | Message schema for conversation messages. |
| [DisplayMessage](type-aliases/DisplayMessage.md) | Display message schema. |
| [ConversationContext](type-aliases/ConversationContext.md) | Conversation context schema. |
| [ConversationSummary](type-aliases/ConversationSummary.md) | Conversation summary schema. |
| [ServiceConversationConfigType](type-aliases/ServiceConversationConfigType.md) | Service conversation configuration schema. |
| [DecommissionRequest](type-aliases/DecommissionRequest.md) | Decommission configuration schema. |
| [CallTransfer](type-aliases/CallTransfer.md) | Call transfer schema for tracking call transfer details in telephony conversations. |
| [ConversationStateHistory](type-aliases/ConversationStateHistory.md) | Conversation state history schema for tracking status changes. |
| [TestConfig](type-aliases/TestConfig.md) | Test configuration schema. Base configuration for testing AI agents. |
| [Evaluation](type-aliases/Evaluation.md) | Evaluation schema for running AI agent evaluations. |
| [OttConversationConfig](type-aliases/OttConversationConfig.md) | OTT conversation configuration with connection details. |
| [UserChatMessage](type-aliases/UserChatMessage.md) | User chat message schema. |
| [AssistantChatMessage](type-aliases/AssistantChatMessage.md) | Assistant chat message schema. |
| [UserEmailMessage](type-aliases/UserEmailMessage.md) | User email message schema. |
| [AssistantEmailMessage](type-aliases/AssistantEmailMessage.md) | Assistant email message schema. |
| [HumanAgentChatMessage](type-aliases/HumanAgentChatMessage.md) | Human agent chat message schema. |
| [HumanAgentEmailMessage](type-aliases/HumanAgentEmailMessage.md) | Human agent email message schema. |
| [SystemMessage](type-aliases/SystemMessage.md) | System message schema. |
| [ChatMessage](type-aliases/ChatMessage.md) | - |
| [CallingHours](type-aliases/CallingHours.md) | Calling hours configuration for outbound calls. |
| [BusinessCallRequest](type-aliases/BusinessCallRequest.md) | Business call request schema. |
| [CreateCallRequest](type-aliases/CreateCallRequest.md) | Schema for creating a new call request. Omits auto-generated fields. |
| [UpdateCallRequest](type-aliases/UpdateCallRequest.md) | Schema for updating an existing call request. All fields optional except id (required). |
| [CallRequestResult](type-aliases/CallRequestResult.md) | Call request result schema. Response payload from telephony provider after initiating a call. |
| [EmailRecipient](type-aliases/EmailRecipient.md) | Email recipient schema (embedded in EmailRequestSchema). |
| [EmailAttachment](type-aliases/EmailAttachment.md) | Email attachment schema (embedded in EmailRequestSchema). |
| [EmailRequest](type-aliases/EmailRequest.md) | Email request schema. |
| [CreateEmailRequest](type-aliases/CreateEmailRequest.md) | Schema for creating a new email request. Omits auto-generated fields. |
| [UpdateEmailRequest](type-aliases/UpdateEmailRequest.md) | Schema for updating an existing email request. All fields optional except id (required). |
| [EmailRecord](type-aliases/EmailRecord.md) | Email record schema for tracking delivery status. |
| [EmailRequestResult](type-aliases/EmailRequestResult.md) | Email request result schema. Response payload after submitting an email request. |
| [SmsRequest](type-aliases/SmsRequest.md) | SMS request schema. |
| [CreateSmsRequest](type-aliases/CreateSmsRequest.md) | Schema for creating a new SMS request. Omits auto-generated fields. |
| [UpdateSmsRequest](type-aliases/UpdateSmsRequest.md) | Schema for updating an existing SMS request. All fields optional except id (required). |
| [SmsRequestResult](type-aliases/SmsRequestResult.md) | SMS request result schema. Response payload after submitting an SMS request. |
| [TemplateVariable](type-aliases/TemplateVariable.md) | Template variable schema. Defines a variable placeholder within a message template. |
| [OutboundTemplateBase](type-aliases/OutboundTemplateBase.md) | Outbound template base schema. Common fields shared across all template types. |
| [EmailTemplate](type-aliases/EmailTemplate.md) | Email template schema. Template for email messages with subject and body. |
| [SmsTemplate](type-aliases/SmsTemplate.md) | SMS template schema. Template for SMS text messages. |
| [WhatsappTemplate](type-aliases/WhatsappTemplate.md) | WhatsApp template schema. Template for WhatsApp messages. |
| [OutboundTemplate](type-aliases/OutboundTemplate.md) | Union schema for all template types. |
| [CreateEmailTemplate](type-aliases/CreateEmailTemplate.md) | Schema for creating a new email template. |
| [CreateSmsTemplate](type-aliases/CreateSmsTemplate.md) | Schema for creating a new SMS template. |
| [CreateWhatsappTemplate](type-aliases/CreateWhatsappTemplate.md) | Schema for creating a new WhatsApp template. |
| [UpdateEmailTemplate](type-aliases/UpdateEmailTemplate.md) | Schema for updating an existing email template. |
| [UpdateSmsTemplate](type-aliases/UpdateSmsTemplate.md) | Schema for updating an existing SMS template. |
| [UpdateWhatsappTemplate](type-aliases/UpdateWhatsappTemplate.md) | Schema for updating an existing WhatsApp template. |
| [TranslationServiceRequest](type-aliases/TranslationServiceRequest.md) | Translation service request schema. |
| [CreateTranslationServiceRequest](type-aliases/CreateTranslationServiceRequest.md) | Schema for creating a new translation service request. Omits auto-generated fields. |
| [TranslationConversationConfig](type-aliases/TranslationConversationConfig.md) | Translation conversation configuration schema. |
| [CreateTranslationParticipant](type-aliases/CreateTranslationParticipant.md) | Schema for creating a new translation participant. Omits auto-generated fields. |
| [UpdateTranslationParticipant](type-aliases/UpdateTranslationParticipant.md) | Schema for updating an existing translation participant. All fields are optional except id. |
| [CreateTranslationServiceLog](type-aliases/CreateTranslationServiceLog.md) | Schema for creating a new translation service log. Omits auto-generated fields. |
| [UpdateTranslationServiceLog](type-aliases/UpdateTranslationServiceLog.md) | Schema for updating an existing translation service log. All fields are optional except id. |
| [TranslationMessage](type-aliases/TranslationMessage.md) | Translation message schema - represents one translation interaction. |
| [TranslationParticipant](type-aliases/TranslationParticipant.md) | Translation participant schema. |
| [TranslationServiceLog](type-aliases/TranslationServiceLog.md) | Translation service log schema. |

## Variables

| Variable | Description |
| ------ | ------ |
| [ConversationSummarySchema](variables/ConversationSummarySchema.md) | Conversation summary schema. |
| [MessageSchema](variables/MessageSchema.md) | Message schema for conversation messages. |
| [DisplayMessageSchema](variables/DisplayMessageSchema.md) | Display message schema. |
| [ConversationContextSchema](variables/ConversationContextSchema.md) | Conversation context schema. |
| [ConversationMessageSchema](variables/ConversationMessageSchema.md) | Union of all conversation message types. |
| [ConversationStateHistorySchema](variables/ConversationStateHistorySchema.md) | Conversation state history schema for tracking status changes. |
| [BaseConversationConfigSchema](variables/BaseConversationConfigSchema.md) | Base conversation configuration schema. |
| [CallTransferSchema](variables/CallTransferSchema.md) | Call transfer schema for tracking call transfer details in telephony conversations. |
| [ServiceConversationConfigSchema](variables/ServiceConversationConfigSchema.md) | Service conversation configuration schema. |
| [DecommissionConfigSchema](variables/DecommissionConfigSchema.md) | Decommission configuration schema. |
| [TestConfigSchema](variables/TestConfigSchema.md) | Test configuration schema. Base configuration for testing AI agents. |
| [EvaluationSchema](variables/EvaluationSchema.md) | Evaluation schema for running AI agent evaluations. |
| [ConversationConfigSchema](variables/ConversationConfigSchema.md) | OTT conversation configuration schema. Configuration for OTT (over-the-top) chat widget connections. |
| [OttConversationConfigSchema](variables/OttConversationConfigSchema.md) | OTT conversation configuration with connection details. |
| [BaseChatMessageSchema](variables/BaseChatMessageSchema.md) | Base chat message schema. |
| [BaseEmailMessageSchema](variables/BaseEmailMessageSchema.md) | Base email message schema extending chat message with email-specific fields. |
| [UserChatMessageSchema](variables/UserChatMessageSchema.md) | User chat message schema. |
| [AssistantChatMessageSchema](variables/AssistantChatMessageSchema.md) | Assistant chat message schema. |
| [UserEmailMessageSchema](variables/UserEmailMessageSchema.md) | User email message schema. |
| [AssistantEmailMessageSchema](variables/AssistantEmailMessageSchema.md) | Assistant email message schema. |
| [HumanAgentChatMessageSchema](variables/HumanAgentChatMessageSchema.md) | Human agent chat message schema. |
| [HumanAgentEmailMessageSchema](variables/HumanAgentEmailMessageSchema.md) | Human agent email message schema. |
| [SystemMessageSchema](variables/SystemMessageSchema.md) | System message schema. |
| [CallingHoursSchema](variables/CallingHoursSchema.md) | Calling hours configuration for outbound calls. |
| [BusinessCallRequestSchema](variables/BusinessCallRequestSchema.md) | Business call request schema. |
| [CreateCallRequestSchema](variables/CreateCallRequestSchema.md) | Schema for creating a new call request. Omits auto-generated fields. |
| [UpdateCallRequestSchema](variables/UpdateCallRequestSchema.md) | Schema for updating an existing call request. All fields optional except id (required). |
| [CallRequestResultSchema](variables/CallRequestResultSchema.md) | Call request result schema. Response payload from telephony provider after initiating a call. |
| [EmailRecipientSchema](variables/EmailRecipientSchema.md) | Email recipient schema (embedded in EmailRequestSchema). |
| [EmailAttachmentSchema](variables/EmailAttachmentSchema.md) | Email attachment schema (embedded in EmailRequestSchema). |
| [EmailRequestSchema](variables/EmailRequestSchema.md) | Email request schema. |
| [CreateEmailRequestSchema](variables/CreateEmailRequestSchema.md) | Schema for creating a new email request. Omits auto-generated fields. |
| [UpdateEmailRequestSchema](variables/UpdateEmailRequestSchema.md) | Schema for updating an existing email request. All fields optional except id (required). |
| [EmailRecordSchema](variables/EmailRecordSchema.md) | Email record schema for tracking delivery status. |
| [EmailRequestResultSchema](variables/EmailRequestResultSchema.md) | Email request result schema. Response payload after submitting an email request. |
| [SmsRequestSchema](variables/SmsRequestSchema.md) | SMS request schema. |
| [CreateSmsRequestSchema](variables/CreateSmsRequestSchema.md) | Schema for creating a new SMS request. Omits auto-generated fields. |
| [UpdateSmsRequestSchema](variables/UpdateSmsRequestSchema.md) | Schema for updating an existing SMS request. All fields optional except id (required). |
| [SmsRequestResultSchema](variables/SmsRequestResultSchema.md) | SMS request result schema. Response payload after submitting an SMS request. |
| [TemplateVariableSchema](variables/TemplateVariableSchema.md) | Template variable schema. Defines a variable placeholder within a message template. |
| [OutboundTemplateBaseSchema](variables/OutboundTemplateBaseSchema.md) | Outbound template base schema. Common fields shared across all template types. |
| [EmailTemplateSchema](variables/EmailTemplateSchema.md) | Email template schema. Template for email messages with subject and body. |
| [SmsTemplateSchema](variables/SmsTemplateSchema.md) | SMS template schema. Template for SMS text messages. |
| [WhatsappTemplateSchema](variables/WhatsappTemplateSchema.md) | WhatsApp template schema. Template for WhatsApp messages. |
| [OutboundTemplateSchema](variables/OutboundTemplateSchema.md) | Union schema for all template types. |
| [CreateEmailTemplateSchema](variables/CreateEmailTemplateSchema.md) | Schema for creating a new email template. |
| [CreateSmsTemplateSchema](variables/CreateSmsTemplateSchema.md) | Schema for creating a new SMS template. |
| [CreateWhatsappTemplateSchema](variables/CreateWhatsappTemplateSchema.md) | Schema for creating a new WhatsApp template. |
| [UpdateEmailTemplateSchema](variables/UpdateEmailTemplateSchema.md) | Schema for updating an existing email template. |
| [UpdateSmsTemplateSchema](variables/UpdateSmsTemplateSchema.md) | Schema for updating an existing SMS template. |
| [UpdateWhatsappTemplateSchema](variables/UpdateWhatsappTemplateSchema.md) | Schema for updating an existing WhatsApp template. |
| [TranslationServiceRequestSchema](variables/TranslationServiceRequestSchema.md) | Translation service request schema. |
| [TranslationConversationConfigSchema](variables/TranslationConversationConfigSchema.md) | Translation conversation configuration schema. |
| [CreateTranslationServiceRequestSchema](variables/CreateTranslationServiceRequestSchema.md) | Schema for creating a new translation service request. Omits auto-generated fields. |
| [TranslationMessageSchema](variables/TranslationMessageSchema.md) | Translation message schema - represents one translation interaction. |
| [TranslationParticipantSchema](variables/TranslationParticipantSchema.md) | Translation participant schema. |
| [CreateTranslationParticipantSchema](variables/CreateTranslationParticipantSchema.md) | Schema for creating a new translation participant. Omits auto-generated fields. |
| [UpdateTranslationParticipantSchema](variables/UpdateTranslationParticipantSchema.md) | Schema for updating an existing translation participant. All fields are optional except id. |
| [TranslationServiceLogSchema](variables/TranslationServiceLogSchema.md) | Translation service log schema. |
| [CreateTranslationServiceLogSchema](variables/CreateTranslationServiceLogSchema.md) | Schema for creating a new translation service log. Omits auto-generated fields. |
| [UpdateTranslationServiceLogSchema](variables/UpdateTranslationServiceLogSchema.md) | Schema for updating an existing translation service log. All fields are optional except id. |
