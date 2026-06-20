[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.73**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:165](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L165)

Schema for creating a new resource revision.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:65](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L65) |
| <a id="label"></a> `label?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:66](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L66) |
| <a id="status"></a> `status` | [`ResourceRevisionStatus`](../enumerations/ResourceRevisionStatus.md) | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:67](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L67) |
| <a id="derivedfromrevisionid"></a> `derivedFromRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:68](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L68) |
| <a id="publishedat"></a> `publishedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:69](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L69) |
