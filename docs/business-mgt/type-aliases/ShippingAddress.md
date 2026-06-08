[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ShippingAddress

# Type Alias: ShippingAddress

```ts
type ShippingAddress = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  customerId: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  recipientName?: string;
  phoneNumber?: string | null;
  instructions?: string;
  isPrimary: boolean;
};
```

Defined in: src/core/business-mgt/customer-management/shipping-address.schema.ts:87

Shipping Address schema.
Customer shipping address record with delivery details.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="customerid"></a> `customerId` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:48 |
| <a id="street"></a> `street` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:49 |
| <a id="street2"></a> `street2?` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:50 |
| <a id="city"></a> `city` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:51 |
| <a id="state"></a> `state` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:52 |
| <a id="postalcode"></a> `postalCode` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:53 |
| <a id="country"></a> `country` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:54 |
| <a id="recipientname"></a> `recipientName?` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:55 |
| <a id="phonenumber"></a> `phoneNumber?` | `string` \| `null` | src/core/business-mgt/customer-management/shipping-address.schema.ts:56 |
| <a id="instructions"></a> `instructions?` | `string` | src/core/business-mgt/customer-management/shipping-address.schema.ts:57 |
| <a id="isprimary"></a> `isPrimary` | `boolean` | src/core/business-mgt/customer-management/shipping-address.schema.ts:58 |
