[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyFeatures

# Type Alias: PropertyFeatures

```ts
type PropertyFeatures = {
  bedrooms?: number | null;
  bathrooms?: number | null;
  parkingSpaces?: number | null;
  squareFootage?: number | null;
  lotSize?: number | null;
  lotSizeUnit: "sqft" | "acres" | "sqm" | "hectares";
  yearBuilt?: number | null;
  floors?: number | null;
  amenities: string[];
  utilities: string[];
};
```

Defined in: src/core/business-mgt/property-config.schema.ts:261

Property features schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="bedrooms"></a> `bedrooms?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:91 |
| <a id="bathrooms"></a> `bathrooms?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:92 |
| <a id="parkingspaces"></a> `parkingSpaces?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:93 |
| <a id="squarefootage"></a> `squareFootage?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:94 |
| <a id="lotsize"></a> `lotSize?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:95 |
| <a id="lotsizeunit"></a> `lotSizeUnit` | `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"` | src/core/business-mgt/property-config.schema.ts:96 |
| <a id="yearbuilt"></a> `yearBuilt?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:97 |
| <a id="floors"></a> `floors?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:98 |
| <a id="amenities"></a> `amenities` | `string`[] | src/core/business-mgt/property-config.schema.ts:99 |
| <a id="utilities"></a> `utilities` | `string`[] | src/core/business-mgt/property-config.schema.ts:100 |
