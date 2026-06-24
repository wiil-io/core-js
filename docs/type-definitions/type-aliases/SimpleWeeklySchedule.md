[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

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

Defined in: [src/core/type-definitions/business-definitions.ts:290](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/type-definitions/business-definitions.ts#L290)

Simple weekly schedule schema.
Record of day index (0-6) to simple day schedule.
