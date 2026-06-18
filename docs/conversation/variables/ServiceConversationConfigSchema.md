[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ServiceConversationConfigSchema

# Variable: ServiceConversationConfigSchema

```ts
const ServiceConversationConfigSchema: ZodObject<ServiceConversationConfigType>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:331](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/conversation-config.schema.ts#L331)

Service conversation configuration schema.

Complete conversation record extending base configuration with conversation-specific identifiers,
provider metadata, call direction, recording URLs, and transfer details. This is the primary
schema used for storing and retrieving conversation records in the system.

## Remarks

**Architecture Context:**
- **Extends**: BaseConversationConfigSchema with conversation-specific fields
- **Storage**: Primary conversation entity in database with unique id
- **Provider Integration**: Tracks external provider IDs for email services, telephony platforms
- **Call Recordings**: resource_url links to call recording storage for compliance and quality assurance

**Use Cases:**
- Creating new conversations for inbound/outbound interactions
- Retrieving conversation history with full message arrays
- Analyzing call recordings and transfer patterns
- Integrating with external email providers (Gmail, Outlook, etc.)
