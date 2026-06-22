[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuItemDaypart

# Type Alias: MenuItemDaypart

```ts
type MenuItemDaypart = {
  name: string;
  startTime: string;
  endTime: string;
  daysOfWeek?: string[];
};
```

Defined in: [src/core/business-mgt/order.schema.ts:239](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/order.schema.ts#L239)

Menu item daypart schema.
Defines time-based availability windows for menu items.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/order.schema.ts:218](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/order.schema.ts#L218) |
| <a id="starttime"></a> `startTime` | `string` | [src/core/business-mgt/order.schema.ts:219](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/order.schema.ts#L219) |
| <a id="endtime"></a> `endTime` | `string` | [src/core/business-mgt/order.schema.ts:220](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/order.schema.ts#L220) |
| <a id="daysofweek"></a> `daysOfWeek?` | `string`[] | [src/core/business-mgt/order.schema.ts:221](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/order.schema.ts#L221) |
