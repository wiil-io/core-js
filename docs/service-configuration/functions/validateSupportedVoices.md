[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

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

Defined in: [src/core/service-configuration/voice-language.schema.ts:172](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/voice-language.schema.ts#L172)

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
