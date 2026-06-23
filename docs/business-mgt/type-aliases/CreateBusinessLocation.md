[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessLocation

# Type Alias: CreateBusinessLocation

```ts
type CreateBusinessLocation = {
  name: string;
  code?: string;
  externalLocationId?: string | null;
  status: BusinessLocationStatus;
  isPrimary: boolean;
  timezone?: string;
  businessHours: Record<string, {
     isOpen: boolean;
     startTime: string;
     endTime: string;
     breakTimes?: {
        start: string;
        end: string;
     }[];
  }>;
  phoneNumber?: string;
  email?: string;
  address?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
  };
  coordinates?:   | {
     latitude: number;
     longitude: number;
   }
     | null;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/business-mgt/business-location.schema.ts:200](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L200)

Payload for creating a business location, inferred from [CreateBusinessLocationSchema](../variables/CreateBusinessLocationSchema.md).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/business-location.schema.ts:121](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L121) |
| <a id="code"></a> `code?` | `string` | [src/core/business-mgt/business-location.schema.ts:122](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L122) |
| <a id="externallocationid"></a> `externalLocationId?` | `string` \| `null` | [src/core/business-mgt/business-location.schema.ts:123](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L123) |
| <a id="status"></a> `status` | [`BusinessLocationStatus`](../enumerations/BusinessLocationStatus.md) | [src/core/business-mgt/business-location.schema.ts:124](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L124) |
| <a id="isprimary"></a> `isPrimary` | `boolean` | [src/core/business-mgt/business-location.schema.ts:125](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L125) |
| <a id="timezone"></a> `timezone?` | `string` | [src/core/business-mgt/business-location.schema.ts:126](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L126) |
| <a id="businesshours"></a> `businessHours` | `Record`\<`string`, \{ `isOpen`: `boolean`; `startTime`: `string`; `endTime`: `string`; `breakTimes?`: \{ `start`: `string`; `end`: `string`; \}[]; \}\> | [src/core/business-mgt/business-location.schema.ts:127](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L127) |
| <a id="phonenumber"></a> `phoneNumber?` | `string` | [src/core/business-mgt/business-location.schema.ts:128](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L128) |
| <a id="email"></a> `email?` | `string` | [src/core/business-mgt/business-location.schema.ts:129](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L129) |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \} | [src/core/business-mgt/business-location.schema.ts:130](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L130) |
| `address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/base.schema.ts#L18) |
| `address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/base.schema.ts#L19) |
| `address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/base.schema.ts#L20) |
| `address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/base.schema.ts#L21) |
| `address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/base.schema.ts#L22) |
| `address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/base.schema.ts#L23) |
| <a id="coordinates"></a> `coordinates?` | \| \{ `latitude`: `number`; `longitude`: `number`; \} \| `null` | [src/core/business-mgt/business-location.schema.ts:131](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L131) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/business-location.schema.ts:132](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/business-location.schema.ts#L132) |
