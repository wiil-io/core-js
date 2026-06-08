[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceDurationSegments

# Type Alias: ServiceDurationSegments

```ts
type ServiceDurationSegments = {
  prep: number;
  active: number;
  processing: number;
  finish: number;
  turnover: number;
};
```

Defined in: src/core/business-mgt/service-management/business-service-config.schema.ts:335

Service duration segments schema.
Breaks down service time into distinct phases.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="prep"></a> `prep` | `number` | src/core/business-mgt/service-management/business-service-config.schema.ts:98 |
| <a id="active"></a> `active` | `number` | src/core/business-mgt/service-management/business-service-config.schema.ts:99 |
| <a id="processing"></a> `processing` | `number` | src/core/business-mgt/service-management/business-service-config.schema.ts:100 |
| <a id="finish"></a> `finish` | `number` | src/core/business-mgt/service-management/business-service-config.schema.ts:101 |
| <a id="turnover"></a> `turnover` | `number` | src/core/business-mgt/service-management/business-service-config.schema.ts:102 |
