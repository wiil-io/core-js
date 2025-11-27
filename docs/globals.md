[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](README.md)

***

# Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1

## Fileoverview

Main entry point for the Wiil Platform Data Model Definitions.

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ConversationDirection](enumerations/ConversationDirection.md) | Conversation direction enum. |
| [MessageType](enumerations/MessageType.md) | Message type enum for distinguishing between user and assistant messages. |
| [ServiceStatus](enumerations/ServiceStatus.md) | Service status enumeration for organizations and projects. |
| [ServiceSuspensionType](enumerations/ServiceSuspensionType.md) | Service suspension type enumeration. |
| [BusinessSupportServices](enumerations/BusinessSupportServices.md) | Business support services enumeration. |
| [BusinessServiceType](enumerations/BusinessServiceType.md) | - |
| [CalendarProvider](enumerations/CalendarProvider.md) | - |
| [ResourceType](enumerations/ResourceType.md) | - |
| [ResourceReservationDurationUnit](enumerations/ResourceReservationDurationUnit.md) | - |
| [ReservationSettingType](enumerations/ReservationSettingType.md) | - |
| [AppointmentStatus](enumerations/AppointmentStatus.md) | - |
| [ReservationSlotStatus](enumerations/ReservationSlotStatus.md) | - |
| [RecurrenceType](enumerations/RecurrenceType.md) | - |
| [OrderStatus](enumerations/OrderStatus.md) | - |
| [PaymentStatus](enumerations/PaymentStatus.md) | - |
| [MenuOrderType](enumerations/MenuOrderType.md) | - |
| [ProductOrderType](enumerations/ProductOrderType.md) | - |
| [InventoryUnit](enumerations/InventoryUnit.md) | - |
| [StockAdjustmentType](enumerations/StockAdjustmentType.md) | - |
| [StockStatus](enumerations/StockStatus.md) | - |
| [RestockStatus](enumerations/RestockStatus.md) | - |
| [BusinessServiceDocumentTypes](enumerations/BusinessServiceDocumentTypes.md) | - |
| [BusinessDocumentTypes](enumerations/BusinessDocumentTypes.md) | - |
| [CallPriority](enumerations/CallPriority.md) | - |
| [PreferredContactMethod](enumerations/PreferredContactMethod.md) | - |
| [BestTimeToCall](enumerations/BestTimeToCall.md) | - |
| [ConversationEventType](enumerations/ConversationEventType.md) | - |
| [ServiceConversationType](enumerations/ServiceConversationType.md) | - |
| [ConversationStatus](enumerations/ConversationStatus.md) | - |
| [TranslationDirection](enumerations/TranslationDirection.md) | - |
| [ConversationSummarySentiment](enumerations/ConversationSummarySentiment.md) | - |
| [DeploymentType](enumerations/DeploymentType.md) | - |
| [DeploymentStatus](enumerations/DeploymentStatus.md) | - |
| [ProviderType](enumerations/ProviderType.md) | - |
| [PhonePurchaseStatus](enumerations/PhonePurchaseStatus.md) | - |
| [PhoneStatus](enumerations/PhoneStatus.md) | - |
| [PhoneNumberType](enumerations/PhoneNumberType.md) | - |
| [MobilePlatform](enumerations/MobilePlatform.md) | - |
| [OttCommunicationType](enumerations/OttCommunicationType.md) | - |
| [DeploymentProvisioningType](enumerations/DeploymentProvisioningType.md) | - |
| [AssistantType](enumerations/AssistantType.md) | - |
| [LLMType](enumerations/LLMType.md) | - |
| [SupportedProprietor](enumerations/SupportedProprietor.md) | - |
| [SupportedLLMKit](enumerations/SupportedLLMKit.md) | - |
| [ModelProprietor](enumerations/ModelProprietor.md) | - |
| [LLMRequestType](enumerations/LLMRequestType.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ConversationFilters](interfaces/ConversationFilters.md) | Enhanced interfaces for filtering and sorting conversations. |
| [ConversationSorting](interfaces/ConversationSorting.md) | - |
| [ConversationQueryOptions](interfaces/ConversationQueryOptions.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Project](type-aliases/Project.md) | Type definition for a complete project entity. |
| [CreateProject](type-aliases/CreateProject.md) | Type definition for creating a new project. |
| [UpdateProject](type-aliases/UpdateProject.md) | Type definition for updating an existing project. |
| [BaseModelSchema](type-aliases/BaseModelSchema.md) | Zod schema for BaseModel with audit fields |
| [LanguageCode](type-aliases/LanguageCode.md) | Language code schema (ISO 639-1 format) |
| [Address](type-aliases/Address.md) | Zod schema for address validation. |
| [CreateCustomer](type-aliases/CreateCustomer.md) | Schema for creating a new customer. Omits auto-generated fields. |
| [UpdateCustomer](type-aliases/UpdateCustomer.md) | Schema for updating an existing customer. All fields are optional except id. |
| [Customer](type-aliases/Customer.md) | Customer schema - Individual customer record. |
| [MenuCategory](type-aliases/MenuCategory.md) | Type definition for menu category. |
| [BusinessMenuItem](type-aliases/BusinessMenuItem.md) | Type definition for business menu item. |
| [MenuQRCode](type-aliases/MenuQRCode.md) | Type definition for menu QR code. |
| [CreateMenuCategory](type-aliases/CreateMenuCategory.md) | Type definition for creating a menu category. |
| [CreateBusinessMenuItem](type-aliases/CreateBusinessMenuItem.md) | Type definition for creating a business menu item. |
| [UpdateMenuCategory](type-aliases/UpdateMenuCategory.md) | Type definition for updating a menu category. |
| [UpdateBusinessMenuItem](type-aliases/UpdateBusinessMenuItem.md) | Type definition for updating a business menu item. |
| [MenuOrderItemBase](type-aliases/MenuOrderItemBase.md) | Base menu order item schema (without IDs for creation). |
| [MenuOrderItem](type-aliases/MenuOrderItem.md) | Menu order item schema with IDs (for existing items). |
| [MenuOrder](type-aliases/MenuOrder.md) | Menu order schema - for restaurants/food service. |
| [CreateMenuOrder](type-aliases/CreateMenuOrder.md) | Schema for creating a new menu order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateMenuOrder](type-aliases/UpdateMenuOrder.md) | Schema for updating an existing menu order. All fields are optional except id. |
| [UpdateMenuOrderStatus](type-aliases/UpdateMenuOrderStatus.md) | Quick status update schema for menu orders. |
| [CreateMenuOrderItem](type-aliases/CreateMenuOrderItem.md) | Base menu order item schema (without IDs for creation). |
| [OrderAddress](type-aliases/OrderAddress.md) | Order address schema extending base address with delivery instructions. |
| [OrderCustomer](type-aliases/OrderCustomer.md) | Shared customer schema for orders. |
| [OrderPricing](type-aliases/OrderPricing.md) | Shared pricing schema for orders. |
| [ProductCategory](type-aliases/ProductCategory.md) | Product category schema. |
| [CreateProductCategory](type-aliases/CreateProductCategory.md) | Schema for creating a new product category. Omits auto-generated fields. |
| [UpdateProductCategory](type-aliases/UpdateProductCategory.md) | Schema for updating an existing product category. All fields are optional except id. |
| [BusinessProduct](type-aliases/BusinessProduct.md) | Business product schema. |
| [CreateBusinessProduct](type-aliases/CreateBusinessProduct.md) | Schema for creating a new business product. Omits auto-generated fields and category object. |
| [UpdateBusinessProduct](type-aliases/UpdateBusinessProduct.md) | Schema for updating an existing business product. All fields are optional except id. |
| [ProductOrderItemBase](type-aliases/ProductOrderItemBase.md) | Base product order item schema (without productOrderId for creation). |
| [ProductOrderItem](type-aliases/ProductOrderItem.md) | Product order item schema with IDs (for existing items). |
| [ProductOrder](type-aliases/ProductOrder.md) | Product order schema - for retail/product sales. |
| [CreateProductOrder](type-aliases/CreateProductOrder.md) | Schema for creating a new product order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateProductOrder](type-aliases/UpdateProductOrder.md) | Schema for updating an existing product order. All fields are optional except id. |
| [UpdateProductOrderStatus](type-aliases/UpdateProductOrderStatus.md) | Quick status update schema for product orders. |
| [CreateProductOrderItem](type-aliases/CreateProductOrderItem.md) | Base product order item schema (without productOrderId for creation). |
| [OrderInventoryUpdate](type-aliases/OrderInventoryUpdate.md) | Schema for inventory updates triggered by order fulfillment. |
| [Resource](type-aliases/Resource.md) | Main resource schema for managing reservable resources. |
| [CreateResource](type-aliases/CreateResource.md) | Schema for creating a new resource. Omits auto-generated fields. |
| [UpdateResource](type-aliases/UpdateResource.md) | Schema for updating an existing resource. All fields are optional except id. |
| [ReservationSettings](type-aliases/ReservationSettings.md) | Reservation settings schema. |
| [CreateReservationSettings](type-aliases/CreateReservationSettings.md) | Schema for creating new reservation settings. Omits auto-generated fields. |
| [UpdateReservationSettings](type-aliases/UpdateReservationSettings.md) | Schema for updating existing reservation settings. All fields are optional except id. |
| [Reservation](type-aliases/Reservation.md) | Reservation schema for managing bookings. |
| [CreateReservation](type-aliases/CreateReservation.md) | Schema for creating a new reservation. Omits auto-generated fields. |
| [UpdateReservation](type-aliases/UpdateReservation.md) | Schema for updating an existing reservation. All fields are optional except id. |
| [ServiceAppointment](type-aliases/ServiceAppointment.md) | Service appointment schema. |
| [CreateServiceAppointment](type-aliases/CreateServiceAppointment.md) | Schema for creating a new service appointment. Omits auto-generated fields. |
| [UpdateServiceAppointment](type-aliases/UpdateServiceAppointment.md) | Schema for updating an existing service appointment. All fields are optional except id. |
| [BusinessService](type-aliases/BusinessService.md) | Business service configuration schema. |
| [ServiceQRCode](type-aliases/ServiceQRCode.md) | Service QR code schema for appointment booking. |
| [CreateBusinessService](type-aliases/CreateBusinessService.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [UpdateBusinessService](type-aliases/UpdateBusinessService.md) | Schema for updating an existing business service. All fields are optional except id. |
| [ServicePerson](type-aliases/ServicePerson.md) | Service person schema - Complete service person record. |
| [CreateServicePerson](type-aliases/CreateServicePerson.md) | Schema for creating a new service person. Omits auto-generated fields. |
| [UpdateServicePerson](type-aliases/UpdateServicePerson.md) | Schema for updating an existing service person. All fields are optional except id. |
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
| [TimestampQuery](type-aliases/TimestampQuery.md) | Schema for queries based on a specific timestamp. |
| [AccountPaginatedTimestampQuery](type-aliases/AccountPaginatedTimestampQuery.md) | Schema for paginated queries based on a specific timestamp. |
| [PaginationMetaType](type-aliases/PaginationMetaType.md) | Pagination metadata schema. |
| [BasePaginatedResult](type-aliases/BasePaginatedResult.md) | Basic paginated result schema for any data type. Use this when you need a flexible paginated result without specific data typing. |
| [PaginatedAccountRequest](type-aliases/PaginatedAccountRequest.md) | Schema for paginated account requests. |
| [PaginationRequest](type-aliases/PaginationRequest.md) | Generic pagination request schema. |
| [SearchablePaginationRequest](type-aliases/SearchablePaginationRequest.md) | Schema for search-enabled pagination requests. |
| [PaginatedResultType](type-aliases/PaginatedResultType.md) | Helper type for creating typed paginated results. |

## Variables

| Variable | Description |
| ------ | ------ |
| [OrganizationServiceStatusRecordSchema](variables/OrganizationServiceStatusRecordSchema.md) | Zod schema for organization service status history records. |
| [OrganizationSchema](variables/OrganizationSchema.md) | Zod schema for organization entity. |
| [ProjectSchema](variables/ProjectSchema.md) | Zod schema for project entity. |
| [CreateProjectSchema](variables/CreateProjectSchema.md) | Zod schema for creating a new project. |
| [UpdateProjectSchema](variables/UpdateProjectSchema.md) | Zod schema for updating an existing project. |
| [BaseModelSchema](variables/BaseModelSchema.md) | Zod schema for BaseModel with audit fields |
| [AddressSchema](variables/AddressSchema.md) | Zod schema for address validation. |
| [LanguageCodeSchema](variables/LanguageCodeSchema.md) | Language code schema (ISO 639-1 format) |
| [CustomerSchema](variables/CustomerSchema.md) | Customer schema - Individual customer record. |
| [CreateCustomerSchema](variables/CreateCustomerSchema.md) | Schema for creating a new customer. Omits auto-generated fields. |
| [UpdateCustomerSchema](variables/UpdateCustomerSchema.md) | Schema for updating an existing customer. All fields are optional except id. |
| [MenuCategorySchema](variables/MenuCategorySchema.md) | - |
| [BusinessMenuItemSchema](variables/BusinessMenuItemSchema.md) | - |
| [MenuQRCodeSchema](variables/MenuQRCodeSchema.md) | - |
| [CreateMenuCategorySchema](variables/CreateMenuCategorySchema.md) | Zod schema for creating a new menu category. |
| [CreateBusinessMenuItemSchema](variables/CreateBusinessMenuItemSchema.md) | Zod schema for creating a new business menu item. |
| [UpdateMenuCategorySchema](variables/UpdateMenuCategorySchema.md) | Zod schema for updating an existing menu category. |
| [UpdateBusinessMenuItemSchema](variables/UpdateBusinessMenuItemSchema.md) | Zod schema for updating an existing business menu item. |
| [MenuOrderItemBaseSchema](variables/MenuOrderItemBaseSchema.md) | Base menu order item schema (without IDs for creation). |
| [MenuOrderItemSchema](variables/MenuOrderItemSchema.md) | Menu order item schema with IDs (for existing items). |
| [MenuOrderSchema](variables/MenuOrderSchema.md) | Menu order schema - for restaurants/food service. |
| [CreateMenuOrderSchema](variables/CreateMenuOrderSchema.md) | Schema for creating a new menu order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateMenuOrderSchema](variables/UpdateMenuOrderSchema.md) | Schema for updating an existing menu order. All fields are optional except id. |
| [UpdateMenuOrderStatusSchema](variables/UpdateMenuOrderStatusSchema.md) | Quick status update schema for menu orders. |
| [OrderAddress](variables/OrderAddress.md) | Order address schema extending base address with delivery instructions. |
| [OrderCustomerSchema](variables/OrderCustomerSchema.md) | Shared customer schema for orders. |
| [OrderPricingSchema](variables/OrderPricingSchema.md) | Shared pricing schema for orders. |
| [ProductCategorySchema](variables/ProductCategorySchema.md) | Product category schema. |
| [BusinessProductSchema](variables/BusinessProductSchema.md) | Business product schema. |
| [CreateProductCategorySchema](variables/CreateProductCategorySchema.md) | Schema for creating a new product category. Omits auto-generated fields. |
| [UpdateProductCategorySchema](variables/UpdateProductCategorySchema.md) | Schema for updating an existing product category. All fields are optional except id. |
| [CreateBusinessProductSchema](variables/CreateBusinessProductSchema.md) | Schema for creating a new business product. Omits auto-generated fields and category object. |
| [UpdateBusinessProductSchema](variables/UpdateBusinessProductSchema.md) | Schema for updating an existing business product. All fields are optional except id. |
| [ProductOrderItemBaseSchema](variables/ProductOrderItemBaseSchema.md) | Base product order item schema (without productOrderId for creation). |
| [ProductOrderItemSchema](variables/ProductOrderItemSchema.md) | Product order item schema with IDs (for existing items). |
| [ProductOrderSchema](variables/ProductOrderSchema.md) | Product order schema - for retail/product sales. |
| [CreateProductOrderSchema](variables/CreateProductOrderSchema.md) | Schema for creating a new product order. Omits auto-generated fields and uses base items without IDs. |
| [UpdateProductOrderSchema](variables/UpdateProductOrderSchema.md) | Schema for updating an existing product order. All fields are optional except id. |
| [UpdateProductOrderStatusSchema](variables/UpdateProductOrderStatusSchema.md) | Quick status update schema for product orders. |
| [OrderInventoryUpdateSchema](variables/OrderInventoryUpdateSchema.md) | Schema for inventory updates triggered by order fulfillment. |
| [RoomResourceSchema](variables/RoomResourceSchema.md) | Room resource schema for hotel/accommodation bookings. |
| [RentalResourceSchema](variables/RentalResourceSchema.md) | Rental resource schema for hourly rentals. |
| [ResourceSchema](variables/ResourceSchema.md) | Main resource schema for managing reservable resources. |
| [CreateResourceSchema](variables/CreateResourceSchema.md) | Schema for creating a new resource. Omits auto-generated fields. |
| [UpdateResourceSchema](variables/UpdateResourceSchema.md) | Schema for updating an existing resource. All fields are optional except id. |
| [ReservationSettingsSchema](variables/ReservationSettingsSchema.md) | Reservation settings schema. |
| [CreateReservationSettingsSchema](variables/CreateReservationSettingsSchema.md) | Schema for creating new reservation settings. Omits auto-generated fields. |
| [UpdateReservationSettingsSchema](variables/UpdateReservationSettingsSchema.md) | Schema for updating existing reservation settings. All fields are optional except id. |
| [ReservationSchema](variables/ReservationSchema.md) | Reservation schema for managing bookings. |
| [CreateReservationSchema](variables/CreateReservationSchema.md) | Schema for creating a new reservation. Omits auto-generated fields. |
| [UpdateReservationSchema](variables/UpdateReservationSchema.md) | Schema for updating an existing reservation. All fields are optional except id. |
| [ServiceAppointmentSchema](variables/ServiceAppointmentSchema.md) | Service appointment schema. |
| [CreateServiceAppointmentSchema](variables/CreateServiceAppointmentSchema.md) | Schema for creating a new service appointment. Omits auto-generated fields. |
| [UpdateServiceAppointmentSchema](variables/UpdateServiceAppointmentSchema.md) | Schema for updating an existing service appointment. All fields are optional except id. |
| [BusinessServiceConfigSchema](variables/BusinessServiceConfigSchema.md) | Business service configuration schema. |
| [ServiceQRCodeSchema](variables/ServiceQRCodeSchema.md) | Service QR code schema for appointment booking. |
| [CreateBusinessServiceSchema](variables/CreateBusinessServiceSchema.md) | Schema for creating a new business service. Omits auto-generated fields. |
| [UpdateBusinessServiceSchema](variables/UpdateBusinessServiceSchema.md) | Schema for updating an existing business service. All fields are optional except id. |
| [ServicePersonSchema](variables/ServicePersonSchema.md) | Service person schema - Complete service person record. |
| [CreateServicePersonSchema](variables/CreateServicePersonSchema.md) | Schema for creating a new service person. Omits auto-generated fields. |
| [UpdateServicePersonSchema](variables/UpdateServicePersonSchema.md) | Schema for updating an existing service person. All fields are optional except id. |
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
| [DAYS\_OF\_WEEK](variables/DAYS_OF_WEEK.md) | - |
| [TIMEZONES](variables/TIMEZONES.md) | - |
| [TimestampQuerySchema](variables/TimestampQuerySchema.md) | Schema for queries based on a specific timestamp. |
| [AccountPaginatedTimestampQuerySchema](variables/AccountPaginatedTimestampQuerySchema.md) | Schema for paginated queries based on a specific timestamp. |
| [PaginationMetaSchema](variables/PaginationMetaSchema.md) | Pagination metadata schema. |
| [BasePaginatedResultSchema](variables/BasePaginatedResultSchema.md) | Basic paginated result schema for any data type. Use this when you need a flexible paginated result without specific data typing. |
| [PaginatedAccountRequestSchema](variables/PaginatedAccountRequestSchema.md) | Schema for paginated account requests. |
| [PaginationRequestSchema](variables/PaginationRequestSchema.md) | Generic pagination request schema. |
| [SearchablePaginationRequestSchema](variables/SearchablePaginationRequestSchema.md) | Schema for search-enabled pagination requests. |

## Functions

| Function | Description |
| ------ | ------ |
| [validateSupportedVoices](functions/validateSupportedVoices.md) | Validation function for supported voices. |
| [isValidVoice](functions/isValidVoice.md) | Type guard function to check if an object is a valid Voice. |
| [getDeploymentChannelType](functions/getDeploymentChannelType.md) | Helper function for runtime type checking. |
| [validateDeploymentChannel](functions/validateDeploymentChannel.md) | Validation helper that provides better error messages. |
| [createPaginatedResultSchema](functions/createPaginatedResultSchema.md) | Generic function to create a paginated result schema. Use this with any data schema to create typed paginated responses. |
