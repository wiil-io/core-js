[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessProductSchema

# Variable: CreateBusinessProductSchema

```ts
const CreateBusinessProductSchema: ZodObject<CreateBusinessProduct>;
```

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:371](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/product-management/product-config.schema.ts#L371)

Schema for creating a new business product.
Omits auto-generated fields, category object, and analytics.

## Remarks

A product must be created with at least one variant. Nested variants use the
product variant create schema with `productId` omitted; the parent link is
assigned by the server once the product is created.
