[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ServicePerson

# Type Alias: ServicePerson

```ts
type ServicePerson = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
  accountId: string;
  description?: string;
  serviceId: string;
};
```

Defined in: src/core/business-mgt/service-person.schema.ts:44

Service person schema - Complete service person record.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/service-person.schema.ts:19 |
| <a id="accountid"></a> `accountId` | `string` | src/core/business-mgt/service-person.schema.ts:20 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/service-person.schema.ts:21 |
| <a id="serviceid"></a> `serviceId` | `string` | src/core/business-mgt/service-person.schema.ts:22 |
