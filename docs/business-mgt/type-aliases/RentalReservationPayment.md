[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReservationPayment

# Type Alias: RentalReservationPayment

```ts
type RentalReservationPayment = {
  rentalCharge: number;
  securityDeposit: number;
  depositStatus: DepositStatus;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:182](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L182)

Rental reservation payment schema.
Captures rental charge and security deposit state for a rental booking.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="rentalcharge"></a> `rentalCharge` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:42](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L42) |
| <a id="securitydeposit"></a> `securityDeposit` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:43](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L43) |
| <a id="depositstatus"></a> `depositStatus` | [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:44](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L44) |
