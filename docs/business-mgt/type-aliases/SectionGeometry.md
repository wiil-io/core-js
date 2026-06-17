[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:79](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L79)

Section geometry schema.
Supports automatic, rectangular, and polygon-based section boundaries.
