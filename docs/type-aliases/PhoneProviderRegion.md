[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneProviderRegion

# Type Alias: PhoneProviderRegion

```ts
type PhoneProviderRegion = {
  regionId: string;
  regionName: string;
  countryCode?: string | null;
  countryName?: string | null;
  providerType: ProviderType;
};
```

Defined in: src/core/service-configuration/phone-number.schema.ts:44

Type definition for phone provider region.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="regionid"></a> `regionId` | `string` | src/core/service-configuration/phone-number.schema.ts:34 |
| <a id="regionname"></a> `regionName` | `string` | src/core/service-configuration/phone-number.schema.ts:35 |
| <a id="countrycode"></a> `countryCode?` | `string` \| `null` | src/core/service-configuration/phone-number.schema.ts:36 |
| <a id="countryname"></a> `countryName?` | `string` \| `null` | src/core/service-configuration/phone-number.schema.ts:37 |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../enumerations/ProviderType.md) | src/core/service-configuration/phone-number.schema.ts:38 |
