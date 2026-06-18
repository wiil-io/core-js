[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / SimpleWeeklySchedule

# Type Alias: SimpleWeeklySchedule

```ts
type SimpleWeeklySchedule = Record<string, {
  isOpen: boolean;
  startTime: string;
  endTime: string;
}>;
```

Defined in: [src/core/type-definitions/business-definitions.ts:290](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/business-definitions.ts#L290)

Simple weekly schedule schema.
Record of day index (0-6) to simple day schedule.
