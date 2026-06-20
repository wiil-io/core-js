[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceRevision

# Type Alias: ResourceRevision

```ts
type ResourceRevision = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  resourceId: string;
  label?: string | null;
  status: ResourceRevisionStatus;
  derivedFromRevisionId?: string | null;
  publishedAt?: number | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:162](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L162)

Resource revision schema.
Represents a specific editable or published version of a resource definition.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/base.schema.ts#L10) |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:65](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L65) |
| <a id="label"></a> `label?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:66](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L66) |
| <a id="status"></a> `status` | [`ResourceRevisionStatus`](../enumerations/ResourceRevisionStatus.md) | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:67](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L67) |
| <a id="derivedfromrevisionid"></a> `derivedFromRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:68](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L68) |
| <a id="publishedat"></a> `publishedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:69](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L69) |
