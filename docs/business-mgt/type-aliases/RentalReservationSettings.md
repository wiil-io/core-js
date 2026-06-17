[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.56**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReservationSettings

# Type Alias: RentalReservationSettings

```ts
type RentalReservationSettings = {
  tiers: {
     id: string;
     name: string;
     durationMinutes: number;
     sortOrder: number;
  }[];
  requireWaiver: boolean;
  requireIdVerification: boolean;
  defaultDepositPercent?: number | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:144](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L144)

Rental reservation settings schema.
Configures rental tiers, waiver requirements, identity verification, and deposits.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="tiers"></a> `tiers` | \{ `id`: `string`; `name`: `string`; `durationMinutes`: `number`; `sortOrder`: `number`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:82](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L82) |
| <a id="requirewaiver"></a> `requireWaiver` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:83](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L83) |
| <a id="requireidverification"></a> `requireIdVerification` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:84](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L84) |
| <a id="defaultdepositpercent"></a> `defaultDepositPercent?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:85](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L85) |
