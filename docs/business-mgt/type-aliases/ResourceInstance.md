[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.73**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceInstance

# Type Alias: ResourceInstance

```ts
type ResourceInstance = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  resourceRevisionId?: string | null;
  locationId?: string | null;
  resourceId: string;
  name?: string | null;
  code?: string | null;
  status: ResourceInstanceStatus;
  isAvailable: boolean;
  attributes?:   | {
     key: string;
     value: string;
   }[]
     | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:106](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L106)

Resource instance schema.
Represents a physical table, room, rental unit, or other reservable unit.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/base.schema.ts#L10) |
| <a id="resourcerevisionid"></a> `resourceRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:59](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L59) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:60](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L60) |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:61](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L61) |
| <a id="name"></a> `name?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:62](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L62) |
| <a id="code"></a> `code?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:63](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L63) |
| <a id="status"></a> `status` | [`ResourceInstanceStatus`](../enumerations/ResourceInstanceStatus.md) | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:64](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L64) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:65](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L65) |
| <a id="attributes"></a> `attributes?` | \| \{ `key`: `string`; `value`: `string`; \}[] \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:66](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L66) |
