[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../README.md) / request

# request

## Fileoverview

Central export point for request schemas and utilities.

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TimestampQuery](type-aliases/TimestampQuery.md) | Schema for queries based on a specific timestamp. |
| [AccountPaginatedTimestampQuery](type-aliases/AccountPaginatedTimestampQuery.md) | Schema for paginated queries based on a specific timestamp. |
| [PaginationMetaType](type-aliases/PaginationMetaType.md) | Pagination metadata schema. |
| [BasePaginatedResult](type-aliases/BasePaginatedResult.md) | Basic paginated result schema for any data type. Use this when you need a flexible paginated result without specific data typing. |
| [PaginatedAccountRequest](type-aliases/PaginatedAccountRequest.md) | Schema for paginated account requests. |
| [PaginationRequest](type-aliases/PaginationRequest.md) | Generic pagination request schema. |
| [SearchablePaginationRequest](type-aliases/SearchablePaginationRequest.md) | Schema for search-enabled pagination requests. |
| [PaginatedResultType](type-aliases/PaginatedResultType.md) | Helper type for creating typed paginated results. |

## Variables

| Variable | Description |
| ------ | ------ |
| [TimestampQuerySchema](variables/TimestampQuerySchema.md) | Schema for queries based on a specific timestamp. |
| [AccountPaginatedTimestampQuerySchema](variables/AccountPaginatedTimestampQuerySchema.md) | Schema for paginated queries based on a specific timestamp. |
| [PaginationMetaSchema](variables/PaginationMetaSchema.md) | Pagination metadata schema. |
| [BasePaginatedResultSchema](variables/BasePaginatedResultSchema.md) | Basic paginated result schema for any data type. Use this when you need a flexible paginated result without specific data typing. |
| [PaginatedAccountRequestSchema](variables/PaginatedAccountRequestSchema.md) | Schema for paginated account requests. |
| [PaginationRequestSchema](variables/PaginationRequestSchema.md) | Generic pagination request schema. |
| [SearchablePaginationRequestSchema](variables/SearchablePaginationRequestSchema.md) | Schema for search-enabled pagination requests. |

## Functions

| Function | Description |
| ------ | ------ |
| [createPaginatedResultSchema](functions/createPaginatedResultSchema.md) | Generic function to create a paginated result schema. Use this with any data schema to create typed paginated responses. |
