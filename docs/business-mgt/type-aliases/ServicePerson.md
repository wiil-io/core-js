[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServicePerson

# Type Alias: ServicePerson

```ts
type ServicePerson = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  userAccountId?: string | null;
  name: string;
  avatar?: string | null;
  description?: string | null;
  skills?: string[] | null;
  commissionPercent?: number | null;
  scheduleId?: string | null;
  bookableOnline: boolean;
  bookableByStaff: boolean;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/service-management/service-person.schema.ts:72](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L72)

Service Person schema.
Represents a staff member or provider who can perform services.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-person.schema.ts:33](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L33) |
| <a id="useraccountid"></a> `userAccountId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-person.schema.ts:34](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L34) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/service-management/service-person.schema.ts:35](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L35) |
| <a id="avatar"></a> `avatar?` | `string` \| `null` | [src/core/business-mgt/service-management/service-person.schema.ts:36](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L36) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/service-management/service-person.schema.ts:37](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L37) |
| <a id="skills"></a> `skills?` | `string`[] \| `null` | [src/core/business-mgt/service-management/service-person.schema.ts:38](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L38) |
| <a id="commissionpercent"></a> `commissionPercent?` | `number` \| `null` | [src/core/business-mgt/service-management/service-person.schema.ts:39](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L39) |
| <a id="scheduleid"></a> `scheduleId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-person.schema.ts:40](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L40) |
| <a id="bookableonline"></a> `bookableOnline` | `boolean` | [src/core/business-mgt/service-management/service-person.schema.ts:41](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L41) |
| <a id="bookablebystaff"></a> `bookableByStaff` | `boolean` | [src/core/business-mgt/service-management/service-person.schema.ts:42](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L42) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-management/service-person.schema.ts:43](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/service-management/service-person.schema.ts#L43) |
