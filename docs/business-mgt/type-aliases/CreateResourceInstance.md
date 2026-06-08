[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateResourceInstance

# Type Alias: CreateResourceInstance

```ts
type CreateResourceInstance = {
  resourceRevisionId?: string;
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

Defined in: src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:105

Schema for creating a new resource instance.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourcerevisionid"></a> `resourceRevisionId?` | `string` | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:59 |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:60 |
| <a id="resourceid"></a> `resourceId` | `string` | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:61 |
| <a id="name"></a> `name?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:62 |
| <a id="code"></a> `code?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:63 |
| <a id="status"></a> `status` | [`ResourceInstanceStatus`](../enumerations/ResourceInstanceStatus.md) | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:64 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:65 |
| <a id="attributes"></a> `attributes?` | \| \{ `key`: `string`; `value`: `string`; \}[] \| `null` | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:66 |
