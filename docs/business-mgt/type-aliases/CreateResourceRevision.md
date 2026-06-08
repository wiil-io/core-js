[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateResourceRevision

# Type Alias: CreateResourceRevision

```ts
type CreateResourceRevision = {
  resourceId: string;
  label?: string | null;
  status: ResourceRevisionStatus;
  derivedFromRevisionId?: string | null;
  publishedAt?: number | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:165

Schema for creating a new resource revision.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:65 |
| <a id="label"></a> `label?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:66 |
| <a id="status"></a> `status` | [`ResourceRevisionStatus`](../enumerations/ResourceRevisionStatus.md) | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:67 |
| <a id="derivedfromrevisionid"></a> `derivedFromRevisionId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:68 |
| <a id="publishedat"></a> `publishedAt?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:69 |
