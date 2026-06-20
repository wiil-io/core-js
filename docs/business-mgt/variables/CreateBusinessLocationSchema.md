[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessLocationSchema

# Variable: CreateBusinessLocationSchema

```ts
const CreateBusinessLocationSchema: ZodObject<CreateBusinessLocation>;
```

Defined in: [src/core/business-mgt/business-location.schema.ts:158](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/business-location.schema.ts#L158)

Zod schema for creating a new business location.

Omits the system-managed fields (`id`, `createdAt`, `updatedAt`) that are
populated automatically during creation, while enforcing all required fields.

## Example

```typescript
const newLocation: CreateBusinessLocation = {
  name: 'Airport Kiosk',
  status: BusinessLocationStatus.ACTIVE,
  isPrimary: false,
  timezone: 'America/Chicago',
  businessHours: {
    '1': { isOpen: true, startTime: '06:00', endTime: '22:00' },
  },
};
```
