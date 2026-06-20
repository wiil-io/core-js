[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateResourceSchema

# Variable: CreateResourceSchema

```ts
const CreateResourceSchema: ZodObject<CreateResource>;
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:366](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L366)

Schema for creating a new reservation resource.

## Remarks

A reservation resource must be created with at least one instance, except for
table resources, where instances are optional at creation time.
