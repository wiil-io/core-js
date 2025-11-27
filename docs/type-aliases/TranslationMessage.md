[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / TranslationMessage

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

Defined in: src/core/conversation/translation-conversation.schema.ts:141

Translation message schema - represents one translation interaction.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="messageid"></a> `messageId` | `string` | - | src/core/conversation/translation-conversation.schema.ts:27 |
| <a id="speakerparticipantid"></a> `speakerParticipantId` | `string` | - | src/core/conversation/translation-conversation.schema.ts:28 |
| <a id="targetparticipantid"></a> `targetParticipantId` | `string` | - | src/core/conversation/translation-conversation.schema.ts:29 |
| <a id="originaltext"></a> `originalText?` | `string` | - | src/core/conversation/translation-conversation.schema.ts:30 |
| <a id="translatedtext"></a> `translatedText?` | `string` | - | src/core/conversation/translation-conversation.schema.ts:31 |
| <a id="originallanguage"></a> `originalLanguage` | `string` | `LanguageCodeSchema` | src/core/conversation/translation-conversation.schema.ts:32 |
| <a id="targetlanguage"></a> `targetLanguage` | `string` | `LanguageCodeSchema` | src/core/conversation/translation-conversation.schema.ts:33 |
| <a id="provisioningconfigid"></a> `provisioningConfigId` | `string` | - | src/core/conversation/translation-conversation.schema.ts:34 |
| <a id="timestamp"></a> `timestamp` | `number` | - | src/core/conversation/translation-conversation.schema.ts:35 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | - | src/core/conversation/translation-conversation.schema.ts:36 |
