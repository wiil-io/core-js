[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreatePropertyAddress

# Type Alias: CreatePropertyAddress

```ts
type CreatePropertyAddress = {
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
  primaryUserAccountId?: string | null;
};
```

Defined in: src/core/business-mgt/property-config.schema.ts:258

Schema for creating a new property address.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
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
| <a id="primaryuseraccountid"></a> `primaryUserAccountId?` | `string` \| `null` | src/core/business-mgt/property-config.schema.ts:72 |
