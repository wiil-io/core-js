[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CommercialDetails

# Type Alias: CommercialDetails

```ts
type CommercialDetails = {
  squareFootage: number;
  usableSquareFootage?: number | null;
  floors?: number | null;
  ceilingHeight?: number | null;
  loadingDocks?: number | null;
  driveInDoors?: number | null;
  freightElevator: boolean;
  passengerElevator: boolean;
  zoningType: string;
  yearBuilt?: number | null;
  previousUse?: string | null;
  buildOutStatus?: "partial" | "shell" | "turnkey" | null;
  hvacType?: string | null;
  powerCapacity?: string | null;
  sprinklerSystem: boolean;
};
```

Defined in: [src/core/business-mgt/property-management/property-config.schema.ts:400](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L400)

Commercial details schema.
Details for office, retail, warehouse, industrial properties.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="squarefootage"></a> `squareFootage` | `number` | [src/core/business-mgt/property-management/property-config.schema.ts:168](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L168) |
| <a id="usablesquarefootage"></a> `usableSquareFootage?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:169](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L169) |
| <a id="floors"></a> `floors?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:170](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L170) |
| <a id="ceilingheight"></a> `ceilingHeight?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:171](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L171) |
| <a id="loadingdocks"></a> `loadingDocks?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:172](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L172) |
| <a id="driveindoors"></a> `driveInDoors?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:173](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L173) |
| <a id="freightelevator"></a> `freightElevator` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:174](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L174) |
| <a id="passengerelevator"></a> `passengerElevator` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:175](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L175) |
| <a id="zoningtype"></a> `zoningType` | `string` | [src/core/business-mgt/property-management/property-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L176) |
| <a id="yearbuilt"></a> `yearBuilt?` | `number` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:177](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L177) |
| <a id="previoususe"></a> `previousUse?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:178](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L178) |
| <a id="buildoutstatus"></a> `buildOutStatus?` | `"partial"` \| `"shell"` \| `"turnkey"` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L179) |
| <a id="hvactype"></a> `hvacType?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:180](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L180) |
| <a id="powercapacity"></a> `powerCapacity?` | `string` \| `null` | [src/core/business-mgt/property-management/property-config.schema.ts:181](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L181) |
| <a id="sprinklersystem"></a> `sprinklerSystem` | `boolean` | [src/core/business-mgt/property-management/property-config.schema.ts:182](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/property-management/property-config.schema.ts#L182) |
