[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateRentalReservation

# Type Alias: CreateRentalReservation

```ts
type CreateRentalReservation = {
  locationId?: string | null;
  channelId?: string | null;
  customerId: string;
  resourceId: string;
  startAt: number;
  endAt: number;
  actualReturnAt?: number | null;
  tierId: string;
  status: RentalReservationStatus;
  payment: {
     rentalCharge: number;
     securityDeposit: number;
     depositStatus: DepositStatus;
  };
  checklistCompletions: {
     itemId: string;
     completed: boolean;
     completedAt?: number | null;
     completedBy?: string | null;
  }[];
  waiver?:   | {
     waiverId: string;
     signedAt?: number | null;
     status: "required" | "signed" | "waived";
   }
     | null;
  idVerification?:   | {
     verificationId: string;
     provider?: string | null;
     verifiedAt?: number | null;
     status: "rejected" | "required" | "verified";
   }
     | null;
  notes?: string | null;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:201](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L201)

Schema for creating a new rental reservation.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:122](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L122) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:123](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L123) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:124](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L124) |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:125](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L125) |
| <a id="startat"></a> `startAt` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:126](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L126) |
| <a id="endat"></a> `endAt` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:127](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L127) |
| <a id="actualreturnat"></a> `actualReturnAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:128](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L128) |
| <a id="tierid"></a> `tierId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:129](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L129) |
| <a id="status"></a> `status` | [`RentalReservationStatus`](../enumerations/RentalReservationStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:130](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L130) |
| <a id="payment"></a> `payment` | \{ `rentalCharge`: `number`; `securityDeposit`: `number`; `depositStatus`: [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md); \} | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:131](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L131) |
| `payment.rentalCharge` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:42](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L42) |
| `payment.securityDeposit` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:43](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L43) |
| `payment.depositStatus` | [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:44](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L44) |
| <a id="checklistcompletions"></a> `checklistCompletions` | \{ `itemId`: `string`; `completed`: `boolean`; `completedAt?`: `number` \| `null`; `completedBy?`: `string` \| `null`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:132](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L132) |
| <a id="waiver"></a> `waiver?` | \| \{ `waiverId`: `string`; `signedAt?`: `number` \| `null`; `status`: `"required"` \| `"signed"` \| `"waived"`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:133](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L133) |
| <a id="idverification"></a> `idVerification?` | \| \{ `verificationId`: `string`; `provider?`: `string` \| `null`; `verifiedAt?`: `number` \| `null`; `status`: `"rejected"` \| `"required"` \| `"verified"`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:134](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L134) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:135](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L135) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:136](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L136) |
