[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / LanguageSchema

# Variable: LanguageSchema

```ts
const LanguageSchema: ZodObject<Language>;
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:119](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/service-configuration/voice-language.schema.ts#L119)

Zod schema for language configuration.

Represents a language supported by the platform for speech processing (STT/TTS). Languages are
associated with models in the Wiil support registry and selected in provisioning chains
for voice-based and text-based interactions.

## Remarks

**Architecture Context:**
- **Used By**: WiilSupportModel (supportLanguages array)
- **Referenced In**: SttModelConfig and TtsModelConfig (defaultLanguage selection)
- **Purpose**: Defines supported languages for speech recognition and synthesis

**Language Support Levels:**
- **Production**: Fully supported, tested languages (isExperimental: false)
- **Experimental**: Beta or limited support languages (isExperimental: true)
- **Default**: Platform default for automatic selection (isDefault: true)

## Example

```typescript
const language: Language = {
  languageId: 'en-us',
  name: 'English (United States)',
  code: 'en-US',
  isDefault: true,
  isExperimental: false
};
```
