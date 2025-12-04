[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.11**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationServiceRequestSchema

# Variable: TranslationServiceRequestSchema

```ts
const TranslationServiceRequestSchema: ZodObject<TranslationServiceRequest>;
```

Defined in: [src/core/conversation/translation-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/conversation/translation-config.schema.ts#L40)

Translation service request schema.

Request payload for initiating a real-time translation session between two participants speaking
different languages. Specifies participant identifiers, their native languages, and optional
configuration for the translation service provisioning.

## Remarks

**Architecture Context:**
- **Extends**: BaseModelSchema with translation-specific fields
- **Creates**: TranslationServiceLog when session is initiated
- **Participants**: 1:N - One request can lead to multiple participant records
- **Session Tracking**: session_id enables grouping related translation requests

**Translation Flow:**
1. Client submits TranslationServiceRequest with participant details
2. System creates TranslationServiceLog and participant records
3. Real-time translation session begins with bidirectional audio streaming
4. Speech transcribed → translated → synthesized for each participant

**Use Cases:**
- Customer calling support in different language than agent
- International business calls requiring real-time translation
- Multilingual conference calls with language bridges
