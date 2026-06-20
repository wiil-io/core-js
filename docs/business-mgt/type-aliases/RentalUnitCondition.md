[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.73**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalUnitCondition

# Type Alias: RentalUnitCondition

```ts
type RentalUnitCondition = {
  recordedAt: number;
  recordedBy: string;
  notes?: string | null;
  damageReported: boolean;
  imageUrls?: string[] | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:98](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L98)

Rental unit condition schema.
Captures a condition inspection snapshot at pickup or return.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="recordedat"></a> `recordedAt` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:50](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L50) |
| <a id="recordedby"></a> `recordedBy` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:51](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L51) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:52](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L52) |
| <a id="damagereported"></a> `damageReported` | `boolean` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:53](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L53) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:54](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L54) |
