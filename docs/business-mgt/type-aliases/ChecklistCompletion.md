[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ChecklistCompletion

# Type Alias: ChecklistCompletion

```ts
type ChecklistCompletion = {
  itemId: string;
  completed: boolean;
  completedAt?: number | null;
  completedBy?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:181](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L181)

Checklist completion schema.
Tracks completion of checklist items defined on Resource.checklistTemplate.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="itemid"></a> `itemId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:58](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L58) |
| <a id="completed"></a> `completed` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:59](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L59) |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:60](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L60) |
| <a id="completedby"></a> `completedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:61](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L61) |
