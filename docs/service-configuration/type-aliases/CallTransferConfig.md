[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CallTransferConfig

# Type Alias: CallTransferConfig

```ts
type CallTransferConfig = {
  transfer_number: string;
  transfer_type: "blind" | "warm";
  transfer_conditions: string[];
};
```

Defined in: [src/core/service-configuration/call-transfer-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/call-transfer-config.schema.ts#L40)

Type definition for call transfer configuration.

Represents a single call transfer rule with target number, transfer method,
and the conditions that trigger the transfer.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="transfer_number"></a> `transfer_number` | `string` | [src/core/service-configuration/call-transfer-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/call-transfer-config.schema.ts#L29) |
| <a id="transfer_type"></a> `transfer_type` | `"blind"` \| `"warm"` | [src/core/service-configuration/call-transfer-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/call-transfer-config.schema.ts#L30) |
| <a id="transfer_conditions"></a> `transfer_conditions` | `string`[] | [src/core/service-configuration/call-transfer-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/call-transfer-config.schema.ts#L31) |
