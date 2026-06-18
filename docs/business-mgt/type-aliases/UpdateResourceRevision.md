[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateResourceRevision

# Type Alias: UpdateResourceRevision

```ts
type UpdateResourceRevision = {
  resourceId?: string;
  label?: string | null;
  status?:   | DRAFT
     | ACTIVE
     | ARCHIVED;
  derivedFromRevisionId?: string | null;
  publishedAt?: number | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:166](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L166)

Schema for updating an existing resource revision.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId?` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:65](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L65) |
| <a id="label"></a> `label?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:66](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L66) |
| <a id="status"></a> `status?` | \| [`DRAFT`](../enumerations/ResourceRevisionStatus.md#draft) \| [`ACTIVE`](../enumerations/ResourceRevisionStatus.md#active) \| [`ARCHIVED`](../enumerations/ResourceRevisionStatus.md#archived) | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:67](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L67) |
| <a id="derivedfromrevisionid"></a> `derivedFromRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:68](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L68) |
| <a id="publishedat"></a> `publishedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:69](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L69) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:109](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L109) |
