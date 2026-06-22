[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:167](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L167)

Request schema for deriving a new resource revision.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:126](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L126) |
| <a id="sourcerevisionid"></a> `sourceRevisionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:127](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L127) |
| <a id="strategy"></a> `strategy` | [`ResourceRevisionDeriveStrategy`](../enumerations/ResourceRevisionDeriveStrategy.md) | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:128](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L128) |
| <a id="label"></a> `label?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts:129](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/resource/resource-versioning.schema.ts#L129) |
