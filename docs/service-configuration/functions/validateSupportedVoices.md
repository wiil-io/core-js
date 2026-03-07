[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.45**](../../README.md)

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

Defined in: [src/core/service-configuration/voice-language.schema.ts:172](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/service-configuration/voice-language.schema.ts#L172)

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
