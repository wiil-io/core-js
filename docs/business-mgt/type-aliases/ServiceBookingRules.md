[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.69**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceBookingRules

# Type Alias: ServiceBookingRules

```ts
type ServiceBookingRules = {
  onlineEnabled: boolean;
  existingOnly: boolean;
  requiresConsult: boolean;
  maxDaysOut: number;
  minNoticeHours: number;
  lateCancelHours: number;
};
```

Defined in: [src/core/business-mgt/bookings.shared.schema.ts:64](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/bookings.shared.schema.ts#L64)

Service booking rules schema.
Configures online booking availability, customer restrictions, and cancellation policies.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="onlineenabled"></a> `onlineEnabled` | `boolean` | [src/core/business-mgt/bookings.shared.schema.ts:52](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/bookings.shared.schema.ts#L52) |
| <a id="existingonly"></a> `existingOnly` | `boolean` | [src/core/business-mgt/bookings.shared.schema.ts:53](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/bookings.shared.schema.ts#L53) |
| <a id="requiresconsult"></a> `requiresConsult` | `boolean` | [src/core/business-mgt/bookings.shared.schema.ts:54](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/bookings.shared.schema.ts#L54) |
| <a id="maxdaysout"></a> `maxDaysOut` | `number` | [src/core/business-mgt/bookings.shared.schema.ts:55](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/bookings.shared.schema.ts#L55) |
| <a id="minnoticehours"></a> `minNoticeHours` | `number` | [src/core/business-mgt/bookings.shared.schema.ts:56](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/bookings.shared.schema.ts#L56) |
| <a id="latecancelhours"></a> `lateCancelHours` | `number` | [src/core/business-mgt/bookings.shared.schema.ts:57](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/business-mgt/bookings.shared.schema.ts#L57) |
