[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServicePerson

# Type Alias: UpdateServicePerson

```ts
type UpdateServicePerson = {
  locationId?: string | null;
  userAccountId?: string | null;
  name?: string;
  avatar?: string | null;
  description?: string | null;
  skills?: string[] | null;
  commissionPercent?: number | null;
  scheduleId?: string | null;
  bookableOnline?: boolean;
  bookableByStaff?: boolean;
  isActive?: boolean;
  id: string;
};
```

Defined in: src/core/business-mgt/service-management/service-person.schema.ts:74

Schema for updating an existing service person.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/service-management/service-person.schema.ts:33 |
| <a id="useraccountid"></a> `userAccountId?` | `string` \| `null` | src/core/business-mgt/service-management/service-person.schema.ts:34 |
| <a id="name"></a> `name?` | `string` | src/core/business-mgt/service-management/service-person.schema.ts:35 |
| <a id="avatar"></a> `avatar?` | `string` \| `null` | src/core/business-mgt/service-management/service-person.schema.ts:36 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/service-management/service-person.schema.ts:37 |
| <a id="skills"></a> `skills?` | `string`[] \| `null` | src/core/business-mgt/service-management/service-person.schema.ts:38 |
| <a id="commissionpercent"></a> `commissionPercent?` | `number` \| `null` | src/core/business-mgt/service-management/service-person.schema.ts:39 |
| <a id="scheduleid"></a> `scheduleId?` | `string` \| `null` | src/core/business-mgt/service-management/service-person.schema.ts:40 |
| <a id="bookableonline"></a> `bookableOnline?` | `boolean` | src/core/business-mgt/service-management/service-person.schema.ts:41 |
| <a id="bookablebystaff"></a> `bookableByStaff?` | `boolean` | src/core/business-mgt/service-management/service-person.schema.ts:42 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/service-management/service-person.schema.ts:43 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/service-management/service-person.schema.ts:65 |
