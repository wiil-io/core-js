[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationMessageSchema

# Variable: TranslationMessageSchema

```ts
const TranslationMessageSchema: ZodObject<TranslationMessage>;
```

Defined in: [src/core/conversation/translation-conversation.schema.ts:43](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/conversation/translation-conversation.schema.ts#L43)

Translation message schema - represents one translation interaction.

Individual translation message capturing the complete translation pipeline from speaker's original speech
to translated output for the listener. Tracks both source and target text, languages, participants, and
the provisioning chain used for STT → Translation → TTS processing.

## Remarks

**Architecture Context:**
- **Used In**: TranslationServiceLog.transcribedConversationLog array
- **Processing Pipeline**: Speaker audio → STT (originalText) → Translation (translatedText) → TTS → Target participant
- **Provisioning**: References ProvisioningConfigChain with isTranslation=true
- **Bidirectional**: Each spoken utterance creates messages for both participants in their languages

**Translation Flow:**
1. Participant A speaks in Language A → captured as audio
2. STT transcribes audio → originalText in Language A
3. Translation model translates → translatedText in Language B
4. TTS synthesizes translatedText → audio for Participant B
5. TranslationMessage stored with both texts, languages, and metadata

**Metadata Examples:**
- audio_url: URL to original audio recording
- confidence_score: STT transcription confidence (0-1)
- processing_time_ms: Total pipeline latency
- translation_model: LLM model used for translation
