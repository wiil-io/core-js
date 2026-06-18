[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [account](../README.md) / Organization

# Type Alias: Organization

```ts
type Organization = {
  companyName: string;
  businessVerticalId?:   | "retail"
     | "healthcare"
     | "health-wellness"
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
  primarySlug?: string | null;
  primaryWiilUrl?: string | null;
  transactionsCurrency?: string | null;
  businessInformation?: string | null;
  detailedBusinessInformation?: string | null;
  id: string;
  createdAt?: number;
  updatedAt?: number;
};
```

Defined in: [src/core/account/organization.schema.ts:97](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L97)

Zod schema for organization entity.

Represents a complete organization (company/business account) within the platform,
including service status tracking and configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="companyname"></a> `companyName` | `string` | [src/core/account/organization.schema.ts:82](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L82) |
| <a id="businessverticalid"></a> `businessVerticalId?` | \| `"retail"` \| `"healthcare"` \| `"health-wellness"` \| `"finance"` \| `"real-estate"` \| `"technology"` \| `"education"` \| `"legal"` \| `"automotive"` \| `"hospitality"` \| `"professional"` \| `"others"` \| `null` | [src/core/account/organization.schema.ts:83](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L83) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/account/organization.schema.ts:84](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L84) |
| <a id="servicestatus"></a> `serviceStatus` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | [src/core/account/organization.schema.ts:85](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L85) |
| <a id="lastservicestatuschanged"></a> `lastServiceStatusChanged?` | `number` \| `null` | [src/core/account/organization.schema.ts:86](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L86) |
| <a id="servicestatushistory"></a> `serviceStatusHistory?` | \| \{ `status`: [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md); `previousStatus`: \| [`ACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#active) \| [`INACTIVE`](../../type-definitions/enumerations/ServiceStatus.md#inactive) \| [`SUSPENDED`](../../type-definitions/enumerations/ServiceStatus.md#suspended) \| `null`; `suspensionType`: \| [`MANUAL`](../../type-definitions/enumerations/ServiceSuspensionType.md#manual) \| [`AUTOMATIC`](../../type-definitions/enumerations/ServiceSuspensionType.md#automatic) \| [`SUBSCRIPTION_QUOTA_EXCEEDED`](../../type-definitions/enumerations/ServiceSuspensionType.md#subscription_quota_exceeded) \| [`QUOTA_EXCEEDED`](../../type-definitions/enumerations/ServiceSuspensionType.md#quota_exceeded) \| [`PAYMENT_FAILED`](../../type-definitions/enumerations/ServiceSuspensionType.md#payment_failed) \| `null`; `timestamp`: `number`; `reason`: `string`; `changedBy`: `string`; `isCurrent`: `boolean`; `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; \}[] \| `null` | [src/core/account/organization.schema.ts:87](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L87) |
| <a id="platformemail"></a> `platformEmail?` | `string` \| `null` | [src/core/account/organization.schema.ts:88](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L88) |
| <a id="primaryslug"></a> `primarySlug?` | `string` \| `null` | [src/core/account/organization.schema.ts:89](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L89) |
| <a id="primarywiilurl"></a> `primaryWiilUrl?` | `string` \| `null` | [src/core/account/organization.schema.ts:90](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L90) |
| <a id="transactionscurrency"></a> `transactionsCurrency?` | `string` \| `null` | [src/core/account/organization.schema.ts:91](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L91) |
| <a id="businessinformation"></a> `businessInformation?` | `string` \| `null` | [src/core/account/organization.schema.ts:92](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L92) |
| <a id="detailedbusinessinformation"></a> `detailedBusinessInformation?` | `string` \| `null` | [src/core/account/organization.schema.ts:93](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/account/organization.schema.ts#L93) |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L10) |
