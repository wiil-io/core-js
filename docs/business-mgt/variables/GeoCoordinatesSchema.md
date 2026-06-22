[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / GeoCoordinatesSchema

# Variable: GeoCoordinatesSchema

```ts
const GeoCoordinatesSchema: ZodObject<GeoCoordinates>;
```

Defined in: [src/core/business-mgt/business-location.schema.ts:57](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/business-location.schema.ts#L57)

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
