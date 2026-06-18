[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResidentialDetails

# Type Alias: ResidentialDetails

```ts
type ResidentialDetails = {
  bedrooms: number;
  bathrooms: number;
  halfBaths?: number | null;
  squareFootage: number;
  lotSize?: number | null;
  lotSizeUnit: "sqft" | "acres" | "sqm" | "hectares";
  yearBuilt?: number | null;
  floors?: number | null;
  basementType?: "none" | "partial" | "unfinished" | "finished" | null;
  atticFinished?: boolean | null;
  heatingType?: string | null;
  coolingType?: string | null;
  roofType?: string | null;
  exteriorMaterial?: string | null;
  garageSpaces?: number | null;
  hasPool: boolean;
  hasFireplace: boolean;
};
```

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:399](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L399)

Residential details schema.
Details for houses, apartments, condos, townhouses, villas.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="bedrooms"></a> `bedrooms` | `number` | [src/core/business-mgt/property-management/property-config.schema.ts:127](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L127) |
| <a id="bathrooms"></a> `bathrooms` | `number` | [src/core/business-mgt/property-management/property-config.schema.ts:128](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L128) |
| <a id="halfbaths"></a> `halfBaths?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:129](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L129) |
| <a id="squarefootage"></a> `squareFootage` | `number` | [src/core/business-mgt/property-management/property-config.schema.ts:130](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L130) |
| <a id="lotsize"></a> `lotSize?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:131](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L131) |
| <a id="lotsizeunit"></a> `lotSizeUnit` | `"sqft"` \| `"acres"` \| `"sqm"` \| `"hectares"` | [src/core/business-mgt/property-management/property-config.schema.ts:132](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L132) |
| <a id="yearbuilt"></a> `yearBuilt?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:133](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L133) |
| <a id="floors"></a> `floors?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:134](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L134) |
| <a id="basementtype"></a> `basementType?` | `"none"` \| `"partial"` \| `"unfinished"` \| `"finished"` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:135](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L135) |
| <a id="atticfinished"></a> `atticFinished?` | `boolean` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:136](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L136) |
| <a id="heatingtype"></a> `heatingType?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:137](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L137) |
| <a id="coolingtype"></a> `coolingType?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:138](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L138) |
| <a id="rooftype"></a> `roofType?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:139](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L139) |
| <a id="exteriormaterial"></a> `exteriorMaterial?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:140](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L140) |
| <a id="garagespaces"></a> `garageSpaces?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:141](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L141) |
| <a id="haspool"></a> `hasPool` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:142](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L142) |
| <a id="hasfireplace"></a> `hasFireplace` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:143](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-config.schema.ts#L143) |
