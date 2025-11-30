[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

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

Defined in: [src/core/service-configuration/voice-language.schema.ts:138](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/voice-language.schema.ts#L138)

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
