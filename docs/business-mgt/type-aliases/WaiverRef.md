[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / WaiverRef

# Type Alias: WaiverRef

```ts
type WaiverRef = {
  waiverId: string;
  signedAt?: number | null;
  status: "required" | "signed" | "waived";
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:182](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L182)

Waiver reference schema.
Captures waiver document status for rental reservations that require signed waivers.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="waiverid"></a> `waiverId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:74](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L74) |
| <a id="signedat"></a> `signedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:75](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L75) |
| <a id="status"></a> `status` | `"required"` \| `"signed"` \| `"waived"` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:76](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L76) |
