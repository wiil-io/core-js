[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

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

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:401](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L401)

Land details schema.
Details for lots, farms, and acreage properties.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="lotsize"></a> `lotSize` | `number` | [src/core/business-mgt/property-management/property-config.schema.ts:208](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L208) |
| <a id="lotsizeunit"></a> `lotSizeUnit` | `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"` | [src/core/business-mgt/property-management/property-config.schema.ts:209](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L209) |
| <a id="zoning"></a> `zoning` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:210](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L210) |
| <a id="topography"></a> `topography?` | `"flat"` \| `"sloped"` \| `"hilly"` \| `"mixed"` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:211](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L211) |
| <a id="roadfrontage"></a> `roadFrontage?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:212](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L212) |
| <a id="roadaccess"></a> `roadAccess?` | `"none"` \| `"paved"` \| `"gravel"` \| `"dirt"` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:213](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L213) |
| <a id="utilitiesavailable"></a> `utilitiesAvailable` | `string`[] | [src/core/business-mgt/property-management/property-config.schema.ts:214](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L214) |
| <a id="watersource"></a> `waterSource?` | `"none"` \| `"unknown"` \| `"municipal"` \| `"well"` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:215](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L215) |
| <a id="sewertype"></a> `sewerType?` | `"none"` \| `"unknown"` \| `"municipal"` \| `"septic"` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:216](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L216) |
| <a id="soiltype"></a> `soilType?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:217](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L217) |
| <a id="floodzone"></a> `floodZone` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:218](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L218) |
| <a id="floodzonedesignation"></a> `floodZoneDesignation?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:219](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L219) |
| <a id="easements"></a> `easements?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:220](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L220) |
| <a id="surveyavailable"></a> `surveyAvailable` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:221](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L221) |
| <a id="mineralrights"></a> `mineralRights?` | `"partial"` \| `"unknown"` \| `"included"` \| `"excluded"` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:222](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L222) |
| <a id="timbervalue"></a> `timberValue?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:223](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/property-management/property-config.schema.ts#L223) |
