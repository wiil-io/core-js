[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.18**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationMessage

# Type Alias: TranslationMessage

```ts
type TranslationMessage = {
  messageId: string;
  speakerParticipantId: string;
  targetParticipantId: string;
  originalText?: string;
  translatedText?: string;
  originalLanguage: string;
  targetLanguage: string;
  provisioningConfigId: string;
  timestamp: number;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/conversation/translation-conversation.schema.ts:186](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L186)

Translation message schema - represents one translation interaction.

Individual translation message capturing the complete translation pipeline from speaker's original speech
to translated output for the listener. Tracks both source and target text, languages, participants, and
the provisioning chain used for STT → Translation → TTS processing.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="messageid"></a> `messageId` | `string` | [src/core/conversation/translation-conversation.schema.ts:44](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L44) |
| <a id="speakerparticipantid"></a> `speakerParticipantId` | `string` | [src/core/conversation/translation-conversation.schema.ts:45](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L45) |
| <a id="targetparticipantid"></a> `targetParticipantId` | `string` | [src/core/conversation/translation-conversation.schema.ts:46](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L46) |
| <a id="originaltext"></a> `originalText?` | `string` | [src/core/conversation/translation-conversation.schema.ts:47](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L47) |
| <a id="translatedtext"></a> `translatedText?` | `string` | [src/core/conversation/translation-conversation.schema.ts:48](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L48) |
| <a id="originallanguage"></a> `originalLanguage` | `string` | [src/core/conversation/translation-conversation.schema.ts:49](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L49) |
| <a id="targetlanguage"></a> `targetLanguage` | `string` | [src/core/conversation/translation-conversation.schema.ts:50](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L50) |
| <a id="provisioningconfigid"></a> `provisioningConfigId` | `string` | [src/core/conversation/translation-conversation.schema.ts:51](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L51) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/translation-conversation.schema.ts:52](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L52) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/translation-conversation.schema.ts:53](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/conversation/translation-conversation.schema.ts#L53) |

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
