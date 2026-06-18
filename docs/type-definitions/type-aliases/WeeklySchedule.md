[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / WeeklySchedule

# Type Alias: WeeklySchedule

```ts
type WeeklySchedule = Record<string, {
  isOpen: boolean;
  startTime: string;
  endTime: string;
  breakTimes?: {
     start: string;
     end: string;
  }[];
}>;
```

Defined in: [src/core/type-definitions/business-definitions.ts:291](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/business-definitions.ts#L291)

Weekly schedule schema with breaks.
Record of day index (0-6) to full day schedule with breaks.
