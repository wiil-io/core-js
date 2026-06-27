[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReAssignment

# Type Alias: RentalReAssignment

```ts
type RentalReAssignment = {
  reservationId: string;
  toRentalInstanceId: string;
  fromRentalInstanceId?: string | null;
  reason?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:203](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L203)

Schema for reassigning a rental reservation to a different rental instance.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="reservationid"></a> `reservationId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:186](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L186) |
| <a id="torentalinstanceid"></a> `toRentalInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:187](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L187) |
| <a id="fromrentalinstanceid"></a> `fromRentalInstanceId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:188](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L188) |
| <a id="reason"></a> `reason?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:189](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L189) |
