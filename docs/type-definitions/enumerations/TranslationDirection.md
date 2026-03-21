[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.50**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / TranslationDirection

# Enumeration: TranslationDirection

Defined in: [src/core/type-definitions/conversation.type.definition.ts:73](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L73)

Translation direction for multilingual conversations.

Configures whether real-time translation applies in one or both directions
during AI-assisted multilingual conversations.

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bidirectional"></a> `BIDIRECTIONAL` | `"bidirectional"` | Translate both participant's speech to each other's language | [src/core/type-definitions/conversation.type.definition.ts:75](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L75) |
| <a id="unidirectional"></a> `UNIDIRECTIONAL` | `"unidirectional"` | Translate only one participant's speech (typically agent to customer) | [src/core/type-definitions/conversation.type.definition.ts:77](https://github.com/wiil-io/core-js/blob/c356ba3a9a37a13c6f0d755e7f4067425ee239b9/src/core/type-definitions/conversation.type.definition.ts#L77) |
