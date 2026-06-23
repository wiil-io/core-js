[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/business-mgt/customer-management/shipping-address.schema.ts:87](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L87)

Shipping Address schema.
Customer shipping address record with delivery details.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L10) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:48](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L48) |
| <a id="street"></a> `street` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:49](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L49) |
| <a id="street2"></a> `street2?` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:50](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L50) |
| <a id="city"></a> `city` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:51](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L51) |
| <a id="state"></a> `state` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:52](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L52) |
| <a id="postalcode"></a> `postalCode` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:53](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L53) |
| <a id="country"></a> `country` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:54](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L54) |
| <a id="recipientname"></a> `recipientName?` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:55](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L55) |
| <a id="phonenumber"></a> `phoneNumber?` | `string` \| `null` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:56](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L56) |
| <a id="instructions"></a> `instructions?` | `string` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:57](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L57) |
| <a id="isprimary"></a> `isPrimary` | `boolean` | [src/core/business-mgt/customer-management/shipping-address.schema.ts:58](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/customer-management/shipping-address.schema.ts#L58) |
