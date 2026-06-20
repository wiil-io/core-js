[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.69**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ExternalRef

# Type Alias: ExternalRef

```ts
type ExternalRef = {
  externalId: string;
  source: string;
  url?: string | null;
  syncedAt?: number | null;
};
```

Defined in: [src/core/type-definitions/business-definitions.ts:13](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/type-definitions/business-definitions.ts#L13)

External reference schema for synchronization with external systems.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="externalid"></a> `externalId` | `string` | [src/core/type-definitions/business-definitions.ts:7](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/type-definitions/business-definitions.ts#L7) |
| <a id="source"></a> `source` | `string` | [src/core/type-definitions/business-definitions.ts:8](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/type-definitions/business-definitions.ts#L8) |
| <a id="url"></a> `url?` | `string` \| `null` | [src/core/type-definitions/business-definitions.ts:9](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/type-definitions/business-definitions.ts#L9) |
| <a id="syncedat"></a> `syncedAt?` | `number` \| `null` | [src/core/type-definitions/business-definitions.ts:10](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/type-definitions/business-definitions.ts#L10) |
