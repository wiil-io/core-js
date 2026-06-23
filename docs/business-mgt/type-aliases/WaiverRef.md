[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:184](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L184)

Waiver reference schema.
Captures waiver document status for rental reservations that require signed waivers.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="waiverid"></a> `waiverId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:74](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L74) |
| <a id="signedat"></a> `signedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:75](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L75) |
| <a id="status"></a> `status` | `"required"` \| `"signed"` \| `"waived"` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:76](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L76) |
