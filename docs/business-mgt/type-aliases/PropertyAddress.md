[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyAddress

# Type Alias: PropertyAddress

```ts
type PropertyAddress = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  organizationId: string;
  street: string;
  unit?: string | null;
  city: string;
  state: string;
  postalCode?: string | null;
  country: string;
  coordinates?:   | {
     latitude: number;
     longitude: number;
   }
     | null;
  neighborhood?: string | null;
  district?: string | null;
  isVerified: boolean;
  verifiedAt?: number | null;
  primaryUserAccountId?: string | null;
};
```

Defined in: src/core/business-mgt/property-config.schema.ts:257

Property address schema (standalone entity).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/base.schema.ts#L10) |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/property-config.schema.ts:57 |
| <a id="street"></a> `street` | `string` | src/core/business-mgt/property-config.schema.ts:58 |
| <a id="unit"></a> `unit?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:59 |
| <a id="city"></a> `city` | `string` | src/core/business-mgt/property-config.schema.ts:60 |
| <a id="state"></a> `state` | `string` | src/core/business-mgt/property-config.schema.ts:61 |
| <a id="postalcode"></a> `postalCode?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:62 |
| <a id="country"></a> `country` | `string` | src/core/business-mgt/property-config.schema.ts:63 |
| <a id="coordinates"></a> `coordinates?` | \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null` | src/core/business-mgt/property-config.schema.ts:64 |
| <a id="neighborhood"></a> `neighborhood?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:68 |
| <a id="district"></a> `district?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:69 |
| <a id="isverified"></a> `isVerified` | `boolean` | src/core/business-mgt/property-config.schema.ts:70 |
| <a id="verifiedat"></a> `verifiedAt?` | `number` \| `null` | src/core/business-mgt/property-config.schema.ts:71 |
| <a id="primaryuseraccountid"></a> `primaryUserAccountId?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:72 |
