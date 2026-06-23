[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessLocationSchema

# Variable: BusinessLocationSchema

```ts
const BusinessLocationSchema: ZodObject<BusinessLocation>;
```

Defined in: [src/core/business-mgt/business-location.schema.ts:120](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/business-location.schema.ts#L120)

Zod schema for Business Location validation.

A Business Location is a physical or operational site belonging to an organization.
It captures the operating context for that site — contact details, weekly operating
hours, mailing address, geographic coordinates, and lifecycle status — and is
referenced by downstream business-management resources.

## Remarks

**Architecture Context:**
- **Extends**: BaseModelSchema (inherits `id`, `createdAt`, `updatedAt`)
- **Composes**: AddressSchema (mailing address), [WeeklyScheduleSchema](../../type-definitions/variables/WeeklyScheduleSchema.md)
  (operating hours), [GeoCoordinatesSchema](GeoCoordinatesSchema.md) (map placement)
- **Lifecycle**: Governed by [BusinessLocationStatus](../enumerations/BusinessLocationStatus.md); `status` is the single
  source of truth for active state (there is no separate `isActive` flag)

**Field Notes:**
- `businessHours` is required — every location must declare a weekly schedule
- Geographic filters require `coordinates` to be populated in order to match
- `externalLocationId` links the record to an external system when synced or imported

## Example

```typescript
const location: BusinessLocation = {
  id: 'loc_downtown',
  name: 'Downtown Branch',
  code: 'DTWN',
  status: BusinessLocationStatus.ACTIVE,
  isPrimary: true,
  timezone: 'America/New_York',
  businessHours: {
    '1': { isOpen: true, startTime: '09:00', endTime: '17:00' },
  },
  phoneNumber: '+15551234567',
  email: 'downtown@example.com',
  coordinates: { latitude: 39.7817, longitude: -89.6501 },
  createdAt: Date.now(),
  updatedAt: Date.now(),
};
```
