[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / IDRef

# Type Alias: IDRef

```ts
type IDRef = {
  verificationId: string;
  provider?: string | null;
  verifiedAt?: number | null;
  status: "rejected" | "required" | "verified";
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:185](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L185)

Identity verification reference schema.
Captures the external identity verification record for a rental reservation.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="verificationid"></a> `verificationId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:90](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L90) |
| <a id="provider"></a> `provider?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:91](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L91) |
| <a id="verifiedat"></a> `verifiedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:92](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L92) |
| <a id="status"></a> `status` | `"rejected"` \| `"required"` \| `"verified"` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:93](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L93) |
