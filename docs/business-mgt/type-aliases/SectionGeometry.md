[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / SectionGeometry

# Type Alias: SectionGeometry

```ts
type SectionGeometry = 
  | {
  kind: "auto";
}
  | {
  kind: "rect";
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
}
  | {
  kind: "polygon";
  points: {
     x: number;
     y: number;
  }[];
  rotation?: number;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:79](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L79)

Section geometry schema.
Supports automatic, rectangular, and polygon-based section boundaries.
