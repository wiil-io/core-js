[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateRoomReservation

# Type Alias: UpdateRoomReservation

```ts
type UpdateRoomReservation = {
  locationId?: string | null;
  channelId?: string | null;
  resourceId?: string;
  guestId?: string;
  personsNumber?: number;
  checkIn?: number;
  checkOut?: number;
  nights?: number;
  source?: string | null;
  ratePerNight?: {
     date: string;
     amount: number;
  }[];
  totalWithTax?: number;
  deposit?: number;
  paymentStatus?:   | PENDING
     | PAID
     | PARTIAL
     | FAILED
     | REFUNDED
     | null;
  notes?: string | null;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
  id: string;
  status?:   | PENDING
     | CONFIRMED
     | SEATED
     | CHECKED_IN
     | COMPLETED
     | CANCELLED
     | NO_SHOW
     | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:107](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L107)

Schema for updating an existing room reservation.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:50](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L50) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:51](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L51) |
| <a id="resourceid"></a> `resourceId?` | `string` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:52](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L52) |
| <a id="guestid"></a> `guestId?` | `string` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:53](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L53) |
| <a id="personsnumber"></a> `personsNumber?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:54](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L54) |
| <a id="checkin"></a> `checkIn?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:55](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L55) |
| <a id="checkout"></a> `checkOut?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:56](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L56) |
| <a id="nights"></a> `nights?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:57](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L57) |
| <a id="source"></a> `source?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:59](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L59) |
| <a id="ratepernight"></a> `ratePerNight?` | \{ `date`: `string`; `amount`: `number`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:60](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L60) |
| <a id="totalwithtax"></a> `totalWithTax?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:61](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L61) |
| <a id="deposit"></a> `deposit?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:62](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L62) |
| <a id="paymentstatus"></a> `paymentStatus?` | \| [`PENDING`](../../type-definitions/enumerations/PaymentStatus.md#pending) \| [`PAID`](../../type-definitions/enumerations/PaymentStatus.md#paid) \| [`PARTIAL`](../../type-definitions/enumerations/PaymentStatus.md#partial) \| [`FAILED`](../../type-definitions/enumerations/PaymentStatus.md#failed) \| [`REFUNDED`](../../type-definitions/enumerations/PaymentStatus.md#refunded) \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:63](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L63) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:64](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L64) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:65](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L65) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:95](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L95) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/ReservationStatus.md#pending) \| [`CONFIRMED`](../../type-definitions/enumerations/ReservationStatus.md#confirmed) \| [`SEATED`](../../type-definitions/enumerations/ReservationStatus.md#seated) \| [`CHECKED_IN`](../../type-definitions/enumerations/ReservationStatus.md#checked_in) \| [`COMPLETED`](../../type-definitions/enumerations/ReservationStatus.md#completed) \| [`CANCELLED`](../../type-definitions/enumerations/ReservationStatus.md#cancelled) \| [`NO_SHOW`](../../type-definitions/enumerations/ReservationStatus.md#no_show) \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:97](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L97) |
