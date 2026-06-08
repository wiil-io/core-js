[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / LandDetails

# Type Alias: LandDetails

```ts
type LandDetails = {
  lotSize: number;
  lotSizeUnit: "sqft" | "acres" | "sqm" | "hectares";
  zoning: string;
  topography?: "flat" | "sloped" | "hilly" | "mixed" | null;
  roadFrontage?: number | null;
  roadAccess?: "none" | "paved" | "gravel" | "dirt" | null;
  utilitiesAvailable: string[];
  waterSource?: "none" | "unknown" | "municipal" | "well" | null;
  sewerType?: "none" | "unknown" | "municipal" | "septic" | null;
  soilType?: string | null;
  floodZone: boolean;
  floodZoneDesignation?: string | null;
  easements?: string | null;
  surveyAvailable: boolean;
  mineralRights?: "partial" | "unknown" | "included" | "excluded" | null;
  timberValue?: number | null;
};
```

Defined in: src/core/business-mgt/property-management/property-config.schema.ts:401

Land details schema.
Details for lots, farms, and acreage properties.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="lotsize"></a> `lotSize` | `number` | src/core/business-mgt/property-management/property-config.schema.ts:208 |
| <a id="lotsizeunit"></a> `lotSizeUnit` | `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"` | src/core/business-mgt/property-management/property-config.schema.ts:209 |
| <a id="zoning"></a> `zoning` | `string` | src/core/business-mgt/property-management/property-config.schema.ts:210 |
| <a id="topography"></a> `topography?` | `"flat"` \| `"sloped"` \| `"hilly"` \| `"mixed"` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:211 |
| <a id="roadfrontage"></a> `roadFrontage?` | `number` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:212 |
| <a id="roadaccess"></a> `roadAccess?` | `"none"` \| `"paved"` \| `"gravel"` \| `"dirt"` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:213 |
| <a id="utilitiesavailable"></a> `utilitiesAvailable` | `string`[] | src/core/business-mgt/property-management/property-config.schema.ts:214 |
| <a id="watersource"></a> `waterSource?` | `"none"` \| `"unknown"` \| `"municipal"` \| `"well"` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:215 |
| <a id="sewertype"></a> `sewerType?` | `"none"` \| `"unknown"` \| `"municipal"` \| `"septic"` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:216 |
| <a id="soiltype"></a> `soilType?` | `string` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:217 |
| <a id="floodzone"></a> `floodZone` | `boolean` | src/core/business-mgt/property-management/property-config.schema.ts:218 |
| <a id="floodzonedesignation"></a> `floodZoneDesignation?` | `string` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:219 |
| <a id="easements"></a> `easements?` | `string` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:220 |
| <a id="surveyavailable"></a> `surveyAvailable` | `boolean` | src/core/business-mgt/property-management/property-config.schema.ts:221 |
| <a id="mineralrights"></a> `mineralRights?` | `"partial"` \| `"unknown"` \| `"included"` \| `"excluded"` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:222 |
| <a id="timbervalue"></a> `timberValue?` | `number` \| `null` | src/core/business-mgt/property-management/property-config.schema.ts:223 |
