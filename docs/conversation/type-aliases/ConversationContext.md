[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationContext

# Type Alias: ConversationContext

```ts
type ConversationContext = {
  message?: string;
  productId?: string;
  menuItemId?: string;
  serviceId?: string;
  propertyId?: string;
  resourceId?: string;
  requiredServiceId?: string;
  locationId?: string;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:149](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L149)

Conversation context schema.

Optional context to guide conversations, enabling deep-linking to specific
products, services, or resources. Used to pre-populate conversation context
when users click through from specific pages or marketing campaigns.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="message"></a> `message?` | `string` | [src/core/conversation/conversation-config.schema.ts:139](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L139) |
| <a id="productid"></a> `productId?` | `string` | [src/core/conversation/conversation-config.schema.ts:140](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L140) |
| <a id="menuitemid"></a> `menuItemId?` | `string` | [src/core/conversation/conversation-config.schema.ts:141](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L141) |
| <a id="serviceid"></a> `serviceId?` | `string` | [src/core/conversation/conversation-config.schema.ts:142](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L142) |
| <a id="propertyid"></a> `propertyId?` | `string` | [src/core/conversation/conversation-config.schema.ts:143](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L143) |
| <a id="resourceid"></a> `resourceId?` | `string` | [src/core/conversation/conversation-config.schema.ts:144](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L144) |
| <a id="requiredserviceid"></a> `requiredServiceId?` | `string` | [src/core/conversation/conversation-config.schema.ts:145](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L145) |
| <a id="locationid"></a> `locationId?` | `string` | [src/core/conversation/conversation-config.schema.ts:146](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L146) |
