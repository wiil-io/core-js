[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessProductSchema

# Variable: CreateBusinessProductSchema

```ts
const CreateBusinessProductSchema: ZodObject<CreateBusinessProduct>;
```

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:371](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L371)

Schema for creating a new business product.
Omits auto-generated fields, category object, and analytics.

## Remarks

A product must be created with at least one variant. Nested variants use the
product variant create schema with `productId` omitted; the parent link is
assigned by the server once the product is created.
