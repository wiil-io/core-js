[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:166

Schema for updating an existing resource revision.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId?` | `string` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:65 |
| <a id="label"></a> `label?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:66 |
| <a id="status"></a> `status?` | \| [`DRAFT`](../enumerations/ResourceRevisionStatus.md#draft) \| [`ACTIVE`](../enumerations/ResourceRevisionStatus.md#active) \| [`ARCHIVED`](../enumerations/ResourceRevisionStatus.md#archived) | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:67 |
| <a id="derivedfromrevisionid"></a> `derivedFromRevisionId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:68 |
| <a id="publishedat"></a> `publishedAt?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:69 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:109 |
