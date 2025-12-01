[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

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

Defined in: [src/core/service-configuration/call-transfer-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/call-transfer-config.schema.ts#L60)

Type definition for call transfer configuration.

Represents a single call transfer rule with target number, transfer method,
and the conditions that trigger the transfer.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="transfer_number"></a> `transfer_number` | `string` | [src/core/service-configuration/call-transfer-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/call-transfer-config.schema.ts#L49) |
| <a id="transfer_type"></a> `transfer_type` | `"blind"` \| `"warm"` | [src/core/service-configuration/call-transfer-config.schema.ts:50](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/call-transfer-config.schema.ts#L50) |
| <a id="transfer_conditions"></a> `transfer_conditions` | `string`[] | [src/core/service-configuration/call-transfer-config.schema.ts:51](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/call-transfer-config.schema.ts#L51) |
