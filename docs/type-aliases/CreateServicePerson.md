[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateServicePerson

# Type Alias: CreateServicePerson

```ts
type CreateServicePerson = {
  version?: number;
  organizationId: string;
  accountId: string;
  description?: string;
  serviceId: string;
};
```

Defined in: src/core/business-mgt/service-person.schema.ts:45

Schema for creating a new service person.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/service-person.schema.ts:19 |
| <a id="accountid"></a> `accountId` | `string` | src/core/business-mgt/service-person.schema.ts:20 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/service-person.schema.ts:21 |
| <a id="serviceid"></a> `serviceId` | `string` | src/core/business-mgt/service-person.schema.ts:22 |
