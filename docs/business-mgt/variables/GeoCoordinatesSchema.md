[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / GeoCoordinatesSchema

# Variable: GeoCoordinatesSchema

```ts
const GeoCoordinatesSchema: ZodObject<GeoCoordinates>;
```

Defined in: [src/core/business-mgt/business-location.schema.ts:57](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/business-location.schema.ts#L57)

Zod schema for geographic coordinates.

Represents a single point on the Earth's surface in decimal degrees, used to
place a business location on a map and to support proximity and bounding-box
queries.

## Example

```typescript
const coordinates: GeoCoordinates = {
  latitude: 39.7817,
  longitude: -89.6501,
};
```
