[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / Organization

# Type Alias: Organization

```ts
type Organization = {
  companyName: string;
  businessVerticalId?:   | "healthcare"
     | "health-wellness"
     | "retail"
     | "finance"
     | "real-estate"
     | "technology"
     | "education"
     | "legal"
     | "automotive"
     | "hospitality"
     | "professional"
     | "others"
     | null;
  metadata?: Record<string, any>;
  serviceStatus: ServiceStatus;
  lastServiceStatusChanged?: number | null;
  serviceStatusHistory?:   | {
     status: ServiceStatus;
     previousStatus:   | ACTIVE
        | INACTIVE
        | SUSPENDED
        | null;
     suspensionType:   | MANUAL
        | AUTOMATIC
        | SUBSCRIPTION_QUOTA_EXCEEDED
        | QUOTA_EXCEEDED
        | PAYMENT_FAILED
        | null;
     timestamp: number;
     reason: string;
     changedBy: string;
     isCurrent: boolean;
     id: string;
     createdAt?: number;
     updatedAt?: number;
   }[]
     | null;
  platformEmail?: string | null;
  id: string;
  createdAt?: number;
  updatedAt?: number;
};
```

Defined in: [src/core/account/organization.schema.ts:102](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L102)

Zod schema for organization entity.

Represents a complete organization (company/business account) within the platform,
including service status tracking and configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="companyname"></a> `companyName` | `string` | [src/core/account/organization.schema.ts:92](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L92) |
| <a id="businessverticalid"></a> `businessVerticalId?` | \| `"healthcare"` \| `"health-wellness"` \| `"retail"` \| `"finance"` \| `"real-estate"` \| `"technology"` \| `"education"` \| `"legal"` \| `"automotive"` \| `"hospitality"` \| `"professional"` \| `"others"` \| `null` | [src/core/account/organization.schema.ts:93](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L93) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/organization.schema.ts:94](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L94) |
| <a id="servicestatus"></a> `serviceStatus` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | [src/core/account/organization.schema.ts:95](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L95) |
| <a id="lastservicestatuschanged"></a> `lastServiceStatusChanged?` | `number` \| `null` | [src/core/account/organization.schema.ts:96](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L96) |
| <a id="servicestatushistory"></a> `serviceStatusHistory?` | \| \{ `status`: [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md); `previousStatus`: \| [`ACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#active) \| [`INACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#inactive) \| [`SUSPENDED`](../../type-definitions/enumerations/ServiceStatus.md#suspended) \| `null`; `suspensionType`: \| [`MANUAL`](../../type-definitions/enumerations/ServiceSuspensionType.md#manual) \| [`AUTOMATIC`](../../type-definitions/enumerations/ServiceSuspensionType.md#automatic) \| [`SUBSCRIPTION_QUOTA_EXCEEDED`](../../type-definitions/enumerations/ServiceSuspensionType.md#subscription_quota_exceeded) \| [`QUOTA_EXCEEDED`](../../type-definitions/enumerations/ServiceSuspensionType.md#quota_exceeded) \| [`PAYMENT_FAILED`](../../type-definitions/enumerations/ServiceSuspensionType.md#payment_failed) \| `null`; `timestamp`: `number`; `reason`: `string`; `changedBy`: `string`; `isCurrent`: `boolean`; `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; \}[] \| `null` | [src/core/account/organization.schema.ts:97](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L97) |
| <a id="platformemail"></a> `platformEmail?` | `string` \| `null` | [src/core/account/organization.schema.ts:98](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/account/organization.schema.ts#L98) |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/base.schema.ts#L10) |

## Example

```typescript
const organization: Organization = {
  id: '123*',
  companyName: 'Acme Corporation',
  primaryRegionId: 'us-west',
  businessVerticalId: 'technology',
  serviceStatus: ServiceStatus.ACTIVE,
  platformEmail: 'admin@acme.com',
  metadata: { industry: 'technology' },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
