[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:183](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L183)

Checklist completion schema.
Tracks completion of checklist items defined on Resource.checklistTemplate.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="itemid"></a> `itemId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:58](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L58) |
| <a id="completed"></a> `completed` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:59](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L59) |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:60](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L60) |
| <a id="completedby"></a> `completedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:61](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L61) |
