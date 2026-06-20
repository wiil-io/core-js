[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessMenuItemSchema

# Variable: CreateBusinessMenuItemSchema

```ts
const CreateBusinessMenuItemSchema: ZodObject<CreateBusinessMenuItem>;
```

Defined in: [src/core/business-mgt/menu-management/menu-config.schema.ts:153](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/menu-management/menu-config.schema.ts#L153)

Schema for creating a new business menu item.
Omits auto-generated fields and allows optional category specification.

## Remarks

A menu item must be created with at least one variant. Nested variants use the
menu item variant create schema with `menuItemId` omitted; the parent link is
assigned by the server once the menu item is created.
