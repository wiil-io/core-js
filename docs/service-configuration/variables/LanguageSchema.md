[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / LanguageSchema

# Variable: LanguageSchema

```ts
const LanguageSchema: ZodObject<Language>;
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:85](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L85)

Zod schema for language configuration.

Represents a language supported by the platform for speech processing.

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
