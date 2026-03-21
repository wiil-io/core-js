[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../README.md) / conversation

# conversation

## Fileoverview

Central export point for conversation schemas.

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ConversationDirection](enumerations/ConversationDirection.md) | Conversation direction enum. |
| [MessageType](enumerations/MessageType.md) | Message type enum for distinguishing between user and assistant messages. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ConversationFilters](interfaces/ConversationFilters.md) | Enhanced interfaces for filtering and sorting conversations. |
| [ConversationSorting](interfaces/ConversationSorting.md) | - |
| [ConversationQueryOptions](interfaces/ConversationQueryOptions.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Message](type-aliases/Message.md) | Message schema for conversation messages. |
| [ConversationSummary](type-aliases/ConversationSummary.md) | Conversation summary schema. |
| [ServiceConversationConfigType](type-aliases/ServiceConversationConfigType.md) | Service conversation configuration schema. |
| [DecommissionRequest](type-aliases/DecommissionRequest.md) | Decommission configuration schema. |
| [CallTransfer](type-aliases/CallTransfer.md) | Call transfer schema for tracking call transfer details in telephony conversations. |
| [ConversationStateHistory](type-aliases/ConversationStateHistory.md) | Conversation state history schema for tracking status changes. |
| [UserChatMessage](type-aliases/UserChatMessage.md) | User chat message schema. |
| [AssistantChatMessage](type-aliases/AssistantChatMessage.md) | Assistant chat message schema. |
| [UserEmailMessage](type-aliases/UserEmailMessage.md) | User email message schema. |
| [AssistantEmailMessage](type-aliases/AssistantEmailMessage.md) | Assistant email message schema. |
| [ChatMessage](type-aliases/ChatMessage.md) | - |
| [CallingHours](type-aliases/CallingHours.md) | Calling hours configuration for outbound calls. |
| [BusinessCallRequest](type-aliases/BusinessCallRequest.md) | Business call request schema. |
| [CreateCallRequest](type-aliases/CreateCallRequest.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [CallRequestResult](type-aliases/CallRequestResult.md) | - |
| [EmailRecipient](type-aliases/EmailRecipient.md) | Email recipient schema (embedded in EmailRequestSchema). |
| [EmailAttachment](type-aliases/EmailAttachment.md) | Email attachment schema (embedded in EmailRequestSchema). |
| [EmailRequest](type-aliases/EmailRequest.md) | Email request schema. |
| [CreateEmailRequest](type-aliases/CreateEmailRequest.md) | Schema for creating a new email request. Omits auto-generated fields. |
| [EmailRequestResult](type-aliases/EmailRequestResult.md) | - |
| [SmsRequest](type-aliases/SmsRequest.md) | SMS request schema. |
| [CreateSmsRequest](type-aliases/CreateSmsRequest.md) | Schema for creating a new SMS request. Omits auto-generated fields. |
| [SmsRequestResult](type-aliases/SmsRequestResult.md) | - |
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
| [ConversationMessageSchema](variables/ConversationMessageSchema.md) | Union of all conversation message types. |
| [ConversationStateHistorySchema](variables/ConversationStateHistorySchema.md) | Conversation state history schema for tracking status changes. |
| [BaseConversationConfigSchema](variables/BaseConversationConfigSchema.md) | Base conversation configuration schema. |
| [CallTransferSchema](variables/CallTransferSchema.md) | Call transfer schema for tracking call transfer details in telephony conversations. |
| [ServiceConversationConfigSchema](variables/ServiceConversationConfigSchema.md) | Service conversation configuration schema. |
| [DecommissionConfigSchema](variables/DecommissionConfigSchema.md) | Decommission configuration schema. |
| [BaseChatMessageSchema](variables/BaseChatMessageSchema.md) | Base chat message schema. |
| [BaseEmailMessageSchema](variables/BaseEmailMessageSchema.md) | Base email message schema extending chat message with email-specific fields. |
| [UserChatMessageSchema](variables/UserChatMessageSchema.md) | User chat message schema. |
| [AssistantChatMessageSchema](variables/AssistantChatMessageSchema.md) | Assistant chat message schema. |
| [UserEmailMessageSchema](variables/UserEmailMessageSchema.md) | User email message schema. |
| [AssistantEmailMessageSchema](variables/AssistantEmailMessageSchema.md) | Assistant email message schema. |
| [CallingHoursSchema](variables/CallingHoursSchema.md) | Calling hours configuration for outbound calls. |
| [BusinessCallRequestSchema](variables/BusinessCallRequestSchema.md) | Business call request schema. |
| [CreateCallRequestSchema](variables/CreateCallRequestSchema.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [CallRequestResultSchema](variables/CallRequestResultSchema.md) | - |
| [EmailRecipientSchema](variables/EmailRecipientSchema.md) | Email recipient schema (embedded in EmailRequestSchema). |
| [EmailAttachmentSchema](variables/EmailAttachmentSchema.md) | Email attachment schema (embedded in EmailRequestSchema). |
| [EmailRequestSchema](variables/EmailRequestSchema.md) | Email request schema. |
| [CreateEmailRequestSchema](variables/CreateEmailRequestSchema.md) | Schema for creating a new email request. Omits auto-generated fields. |
| [EmailRequestResultSchema](variables/EmailRequestResultSchema.md) | - |
| [SmsRequestSchema](variables/SmsRequestSchema.md) | SMS request schema. |
| [CreateSmsRequestSchema](variables/CreateSmsRequestSchema.md) | Schema for creating a new SMS request. Omits auto-generated fields. |
| [SmsRequestResultSchema](variables/SmsRequestResultSchema.md) | - |
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
