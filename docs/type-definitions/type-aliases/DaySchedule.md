[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / DaySchedule

# Type Alias: DaySchedule

```ts
type DaySchedule = {
  isOpen: boolean;
  startTime: string;
  endTime: string;
  breakTimes?: {
     start: string;
     end: string;
  }[];
};
```

Defined in: [src/core/type-definitions/business-definitions.ts:289](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/type-definitions/business-definitions.ts#L289)

Day schedule schema with break times.
Extends simple day schedule with break periods.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="isopen"></a> `isOpen` | `boolean` | [src/core/type-definitions/business-definitions.ts:255](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/type-definitions/business-definitions.ts#L255) |
| <a id="starttime"></a> `startTime` | `string` | [src/core/type-definitions/business-definitions.ts:256](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/type-definitions/business-definitions.ts#L256) |
| <a id="endtime"></a> `endTime` | `string` | [src/core/type-definitions/business-definitions.ts:257](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/type-definitions/business-definitions.ts#L257) |
| <a id="breaktimes"></a> `breakTimes?` | \{ `start`: `string`; `end`: `string`; \}[] | [src/core/type-definitions/business-definitions.ts:265](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/type-definitions/business-definitions.ts#L265) |
