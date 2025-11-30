[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

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

Defined in: [src/core/conversation/translation-conversation.schema.ts:141](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L141)

Translation message schema - represents one translation interaction.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="messageid"></a> `messageId` | `string` | - | [src/core/conversation/translation-conversation.schema.ts:27](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L27) |
| <a id="speakerparticipantid"></a> `speakerParticipantId` | `string` | - | [src/core/conversation/translation-conversation.schema.ts:28](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L28) |
| <a id="targetparticipantid"></a> `targetParticipantId` | `string` | - | [src/core/conversation/translation-conversation.schema.ts:29](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L29) |
| <a id="originaltext"></a> `originalText?` | `string` | - | [src/core/conversation/translation-conversation.schema.ts:30](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L30) |
| <a id="translatedtext"></a> `translatedText?` | `string` | - | [src/core/conversation/translation-conversation.schema.ts:31](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L31) |
| <a id="originallanguage"></a> `originalLanguage` | `string` | `LanguageCodeSchema` | [src/core/conversation/translation-conversation.schema.ts:32](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L32) |
| <a id="targetlanguage"></a> `targetLanguage` | `string` | `LanguageCodeSchema` | [src/core/conversation/translation-conversation.schema.ts:33](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L33) |
| <a id="provisioningconfigid"></a> `provisioningConfigId` | `string` | - | [src/core/conversation/translation-conversation.schema.ts:34](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L34) |
| <a id="timestamp"></a> `timestamp` | `number` | - | [src/core/conversation/translation-conversation.schema.ts:35](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L35) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | - | [src/core/conversation/translation-conversation.schema.ts:36](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L36) |
