[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / DeriveResourceRevisionRequest

# Type Alias: DeriveResourceRevisionRequest

```ts
type DeriveResourceRevisionRequest = {
  resourceId: string;
  sourceRevisionId?: string | null;
  strategy: ResourceRevisionDeriveStrategy;
  label?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:167](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L167)

Request schema for deriving a new resource revision.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:126](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L126) |
| <a id="sourcerevisionid"></a> `sourceRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:127](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L127) |
| <a id="strategy"></a> `strategy` | [`ResourceRevisionDeriveStrategy`](../enumerations/ResourceRevisionDeriveStrategy.md) | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:128](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L128) |
| <a id="label"></a> `label?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:129](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L129) |
