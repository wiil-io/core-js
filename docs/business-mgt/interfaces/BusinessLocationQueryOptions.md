[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessLocationQueryOptions

# Interface: BusinessLocationQueryOptions

Defined in: [src/core/business-mgt/business-location.schema.ts:275](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/business-location.schema.ts#L275)

Pagination, filtering, and sorting options for business location queries.

 BusinessLocationQueryOptions

## Example

```typescript
const options: BusinessLocationQueryOptions = {
  page: 1,
  pageSize: 20,
  filters: { status: BusinessLocationStatus.ACTIVE, isPrimary: true },
  sorting: { field: 'name', direction: 'asc' },
};
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="page"></a> `page` | `number` | Page number (1-indexed) | [src/core/business-mgt/business-location.schema.ts:277](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/business-location.schema.ts#L277) |
| <a id="pagesize"></a> `pageSize` | `number` | Items per page | [src/core/business-mgt/business-location.schema.ts:279](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/business-location.schema.ts#L279) |
| <a id="filters"></a> `filters?` | [`BusinessLocationFilters`](BusinessLocationFilters.md) | Optional filters | [src/core/business-mgt/business-location.schema.ts:281](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/business-location.schema.ts#L281) |
| <a id="sorting"></a> `sorting?` | [`BusinessLocationSorting`](BusinessLocationSorting.md) | Optional sorting | [src/core/business-mgt/business-location.schema.ts:283](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/business-location.schema.ts#L283) |
