[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

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

Defined in: [src/core/type-definitions/business-definitions.ts:291](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/type-definitions/business-definitions.ts#L291)

Weekly schedule schema with breaks.
Record of day index (0-6) to full day schedule with breaks.
