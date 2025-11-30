[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / LanguageSchema

# Variable: LanguageSchema

```ts
const LanguageSchema: ZodObject<Language>;
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:85](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/voice-language.schema.ts#L85)

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
