[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-section.schema.ts:79](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-section.schema.ts#L79)

Section geometry schema.
Supports automatic, rectangular, and polygon-based section boundaries.
