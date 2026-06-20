[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateResourceInstance

# Type Alias: UpdateResourceInstance

```ts
type UpdateResourceInstance = {
  resourceRevisionId?: string | null;
  locationId?: string | null;
  resourceId?: string;
  name?: string | null;
  code?: string | null;
  isAvailable?: boolean;
  attributes?:   | {
     key: string;
     value: string;
   }[]
     | null;
  id: string;
  status?:   | AVAILABLE
     | RESERVED
     | OCCUPIED
     | MAINTENANCE
     | CLEANING
     | OUT_OF_SERVICE;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:108](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L108)

Schema for updating an existing resource instance.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourcerevisionid"></a> `resourceRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:59](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L59) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:60](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L60) |
| <a id="resourceid"></a> `resourceId?` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:61](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L61) |
| <a id="name"></a> `name?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:62](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L62) |
| <a id="code"></a> `code?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:63](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L63) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:65](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L65) |
| <a id="attributes"></a> `attributes?` | \| \{ `key`: `string`; `value`: `string`; \}[] \| `null` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:66](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L66) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:96](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L96) |
| <a id="status"></a> `status?` | \| [`AVAILABLE`](../enumerations/ResourceInstanceStatus.md#available) \| [`RESERVED`](../enumerations/ResourceInstanceStatus.md#reserved) \| [`OCCUPIED`](../enumerations/ResourceInstanceStatus.md#occupied) \| [`MAINTENANCE`](../enumerations/ResourceInstanceStatus.md#maintenance) \| [`CLEANING`](../enumerations/ResourceInstanceStatus.md#cleaning) \| [`OUT_OF_SERVICE`](../enumerations/ResourceInstanceStatus.md#out_of_service) | [src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:98](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts#L98) |
