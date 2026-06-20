[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessLocationFilters

# Interface: BusinessLocationFilters

Defined in: [src/core/business-mgt/business-location.schema.ts:219](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L219)

Filter options for querying business locations.

All filters are optional and combine with AND semantics. Geographic filters
(`nearLocation`, `boundingBox`) only match locations that have `coordinates` set.

 BusinessLocationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="status"></a> `status?` | [`BusinessLocationStatus`](../enumerations/BusinessLocationStatus.md) | Filter by lifecycle status | [src/core/business-mgt/business-location.schema.ts:221](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L221) |
| <a id="isprimary"></a> `isPrimary?` | `boolean` | Filter to primary locations only | [src/core/business-mgt/business-location.schema.ts:223](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L223) |
| <a id="search"></a> `search?` | `string` | Free-text search across name, code, and address | [src/core/business-mgt/business-location.schema.ts:225](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L225) |
| <a id="nearlocation"></a> `nearLocation?` | \{ `latitude`: `number`; `longitude`: `number`; `radiusKm`: `number`; \} | Filter by radius around a geographic point | [src/core/business-mgt/business-location.schema.ts:227](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L227) |
| `nearLocation.latitude` | `number` | Center latitude in decimal degrees | [src/core/business-mgt/business-location.schema.ts:229](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L229) |
| `nearLocation.longitude` | `number` | Center longitude in decimal degrees | [src/core/business-mgt/business-location.schema.ts:231](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L231) |
| `nearLocation.radiusKm` | `number` | Search radius in kilometers | [src/core/business-mgt/business-location.schema.ts:233](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L233) |
| <a id="boundingbox"></a> `boundingBox?` | \{ `minLatitude`: `number`; `maxLatitude`: `number`; `minLongitude`: `number`; `maxLongitude`: `number`; \} | Filter by a geographic bounding box | [src/core/business-mgt/business-location.schema.ts:236](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L236) |
| `boundingBox.minLatitude` | `number` | Southern boundary latitude | [src/core/business-mgt/business-location.schema.ts:238](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L238) |
| `boundingBox.maxLatitude` | `number` | Northern boundary latitude | [src/core/business-mgt/business-location.schema.ts:240](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L240) |
| `boundingBox.minLongitude` | `number` | Western boundary longitude | [src/core/business-mgt/business-location.schema.ts:242](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L242) |
| `boundingBox.maxLongitude` | `number` | Eastern boundary longitude | [src/core/business-mgt/business-location.schema.ts:244](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/business-location.schema.ts#L244) |
