[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:79](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L79)

Section geometry schema.
Supports automatic, rectangular, and polygon-based section boundaries.
