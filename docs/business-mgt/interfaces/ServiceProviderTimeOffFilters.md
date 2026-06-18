[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceProviderTimeOffFilters

# Interface: ServiceProviderTimeOffFilters

Defined in: [src/core/business-mgt/service-management/service-time-off.schema.ts:121](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-time-off.schema.ts#L121)

Service provider time off filter options.
 ServiceProviderTimeOffFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="providerid"></a> `providerId?` | `string` | Filter by provider ID | [src/core/business-mgt/service-management/service-time-off.schema.ts:123](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-time-off.schema.ts#L123) |
| <a id="type"></a> `type?` | [`ServiceProviderTimeOffType`](../../type-definitions/enumerations/ServiceProviderTimeOffType.md) | Filter by time-off type | [src/core/business-mgt/service-management/service-time-off.schema.ts:125](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-time-off.schema.ts#L125) |
| <a id="status"></a> `status?` | [`ServiceProviderTimeOffStatus`](../../type-definitions/enumerations/ServiceProviderTimeOffStatus.md) | Filter by approval status | [src/core/business-mgt/service-management/service-time-off.schema.ts:127](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-time-off.schema.ts#L127) |
| <a id="fromdate"></a> `fromDate?` | `number` | Filter by start date (Unix timestamp) | [src/core/business-mgt/service-management/service-time-off.schema.ts:129](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-time-off.schema.ts#L129) |
| <a id="todate"></a> `toDate?` | `number` | Filter by end date (Unix timestamp) | [src/core/business-mgt/service-management/service-time-off.schema.ts:131](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-time-off.schema.ts#L131) |
