[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.69**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReservation

# Type Alias: RentalReservation

```ts
type RentalReservation = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:184](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L184)

Rental reservation schema.
Represents a time-bounded rental booking with payment, waiver, and inspection state.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:122](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L122) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:123](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L123) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:124](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L124) |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:125](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L125) |
| <a id="startat"></a> `startAt` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:126](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L126) |
| <a id="endat"></a> `endAt` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:127](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L127) |
| <a id="actualreturnat"></a> `actualReturnAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:128](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L128) |
| <a id="tierid"></a> `tierId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:129](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L129) |
| <a id="status"></a> `status` | [`RentalReservationStatus`](../enumerations/RentalReservationStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:130](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L130) |
| <a id="payment"></a> `payment` | \{ `rentalCharge`: `number`; `securityDeposit`: `number`; `depositStatus`: [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md); \} | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:131](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L131) |
| `payment.rentalCharge` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:42](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L42) |
| `payment.securityDeposit` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:43](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L43) |
| `payment.depositStatus` | [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:44](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L44) |
| <a id="checklistcompletions"></a> `checklistCompletions` | \{ `itemId`: `string`; `completed`: `boolean`; `completedAt?`: `number` \| `null`; `completedBy?`: `string` \| `null`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:132](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L132) |
| <a id="waiver"></a> `waiver?` | \| \{ `waiverId`: `string`; `signedAt?`: `number` \| `null`; `status`: `"required"` \| `"signed"` \| `"waived"`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:133](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L133) |
| <a id="idverification"></a> `idVerification?` | \| \{ `verificationId`: `string`; `provider?`: `string` \| `null`; `verifiedAt?`: `number` \| `null`; `status`: `"rejected"` \| `"required"` \| `"verified"`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:134](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L134) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:135](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L135) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:136](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L136) |
