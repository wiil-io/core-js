[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessMenuItemSchema

# Variable: CreateBusinessMenuItemSchema

```ts
const CreateBusinessMenuItemSchema: ZodObject<CreateBusinessMenuItem>;
```

Defined in: [src/core/business-mgt/menu-management/menu-config.schema.ts:153](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu-config.schema.ts#L153)

Schema for creating a new business menu item.
Omits auto-generated fields and allows optional category specification.

## Remarks

A menu item must be created with at least one variant. Nested variants use the
menu item variant create schema with `menuItemId` omitted; the parent link is
assigned by the server once the menu item is created.
