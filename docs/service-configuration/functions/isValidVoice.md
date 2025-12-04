[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / isValidVoice

# Function: isValidVoice()

```ts
function isValidVoice(voice): voice is { voiceId: string; name: string; description: string; gender: "neutral" | "male" | "female"; language?: string | null; isDefault: boolean };
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:189](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/voice-language.schema.ts#L189)

Type guard function to check if an object is a valid Voice.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `voice` | `unknown` | Unknown input to check |

## Returns

voice is \{ voiceId: string; name: string; description: string; gender: "neutral" \| "male" \| "female"; language?: string \| null; isDefault: boolean \}

True if the input is a valid Voice, false otherwise

## Example

```typescript
if (isValidVoice(data)) {
  console.log(data.voiceId); // TypeScript knows data is a Voice
}
```
