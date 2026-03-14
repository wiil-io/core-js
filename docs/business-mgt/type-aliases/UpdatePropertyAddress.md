[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyAddress

# Type Alias: UpdatePropertyAddress

```ts
type UpdatePropertyAddress = {
  street?: string;
  unit?: string | null;
  city?: string;
  state?: string;
  postalCode?: string | null;
  country?: string;
  coordinates?:   | {
     latitude: number;
     longitude: number;
   }
     | null;
  neighborhood?: string | null;
  district?: string | null;
  isVerified?: boolean;
  primaryUserAccountId?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/property-config.schema.ts:252](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L252)

Schema for updating an existing property address.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="street"></a> `street?` | `string` | [src/core/business-mgt/property-config.schema.ts:53](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L53) |
| <a id="unit"></a> `unit?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:54](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L54) |
| <a id="city"></a> `city?` | `string` | [src/core/business-mgt/property-config.schema.ts:55](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L55) |
| <a id="state"></a> `state?` | `string` | [src/core/business-mgt/property-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L56) |
| <a id="postalcode"></a> `postalCode?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L57) |
| <a id="country"></a> `country?` | `string` | [src/core/business-mgt/property-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L58) |
| <a id="coordinates"></a> `coordinates?` | \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null` | [src/core/business-mgt/property-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L59) |
| <a id="neighborhood"></a> `neighborhood?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L63) |
| <a id="district"></a> `district?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L64) |
| <a id="isverified"></a> `isVerified?` | `boolean` | [src/core/business-mgt/property-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L65) |
| <a id="primaryuseraccountid"></a> `primaryUserAccountId?` | `string` \| `null` | [src/core/business-mgt/property-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L67) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-config.schema.ts:222](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/property-config.schema.ts#L222) |
