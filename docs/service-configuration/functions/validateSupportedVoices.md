[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / validateSupportedVoices

# Function: validateSupportedVoices()

```ts
function validateSupportedVoices(voices): {
  voiceId: string;
  name: string;
  description: string;
  gender: "neutral" | "male" | "female";
  language?: string | null;
  isDefault: boolean;
}[];
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:172](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/voice-language.schema.ts#L172)

Validation function for supported voices.

Parses and validates an array of voices, throwing an error if validation fails.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `voices` | `unknown` | Unknown input to validate as supported voices |

## Returns

\{
  `voiceId`: `string`;
  `name`: `string`;
  `description`: `string`;
  `gender`: `"neutral"` \| `"male"` \| `"female"`;
  `language?`: `string` \| `null`;
  `isDefault`: `boolean`;
\}[]

Validated array of voices

## Throws

If validation fails

## Example

```typescript
const voices = validateSupportedVoices([
  { voiceId: 'adam', name: 'Adam', description: 'Male voice', gender: 'male', isDefault: true }
]);
```
