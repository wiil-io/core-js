[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

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

Defined in: [src/core/type-definitions/business-definitions.ts:291](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/type-definitions/business-definitions.ts#L291)

Weekly schedule schema with breaks.
Record of day index (0-6) to full day schedule with breaks.
