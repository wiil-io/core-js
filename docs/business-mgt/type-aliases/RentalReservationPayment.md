[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:180](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L180)

Rental reservation payment schema.
Captures rental charge and security deposit state for a rental booking.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="rentalcharge"></a> `rentalCharge` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:42](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L42) |
| <a id="securitydeposit"></a> `securityDeposit` | `number` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:43](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L43) |
| <a id="depositstatus"></a> `depositStatus` | [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:44](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L44) |
