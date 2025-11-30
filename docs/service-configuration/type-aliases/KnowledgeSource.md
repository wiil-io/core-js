[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / KnowledgeSource

# Type Alias: KnowledgeSource

```ts
type KnowledgeSource = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  sourceType: KnowledgeTypes;
  request_success: boolean;
  processingStatus: KnowledgeBaseProcessingStatus;
  content?: string | null;
  prepped_content?: string | null;
  content_path?: string | null;
  prepped_content_path?: string | null;
  original_content_url?: string | null;
  stored_content_url?: string | null;
  prepped_content_url?: string | null;
  content_size?: number;
  prepped_content_size?: number;
  storage_tier: StorageTier;
  last_accessed?: number;
  access_count: number;
  is_compressed: boolean;
  compression_ratio?: number;
  metadata: Record<string, any>;
  original_content_type?: string | null;
  content_hash?: string | null;
};
```

Defined in: [src/core/service-configuration/knowledge.schema.ts:101](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L101)

Type definition for Knowledge Source.

Represents a complete knowledge source including all metadata,
content storage, and processing information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/knowledge.schema.ts:61](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L61) |
| <a id="sourcetype"></a> `sourceType` | [`KnowledgeTypes`](../../type-definitions/enumerations/KnowledgeTypes.md) | [src/core/service-configuration/knowledge.schema.ts:62](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L62) |
| <a id="request_success"></a> `request_success` | `boolean` | [src/core/service-configuration/knowledge.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L63) |
| <a id="processingstatus"></a> `processingStatus` | [`KnowledgeBaseProcessingStatus`](../../type-definitions/enumerations/KnowledgeBaseProcessingStatus.md) | [src/core/service-configuration/knowledge.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L64) |
| <a id="content"></a> `content?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:67](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L67) |
| <a id="prepped_content"></a> `prepped_content?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:68](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L68) |
| <a id="content_path"></a> `content_path?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:69](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L69) |
| <a id="prepped_content_path"></a> `prepped_content_path?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:70](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L70) |
| <a id="original_content_url"></a> `original_content_url?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:73](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L73) |
| <a id="stored_content_url"></a> `stored_content_url?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:74](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L74) |
| <a id="prepped_content_url"></a> `prepped_content_url?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:75](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L75) |
| <a id="content_size"></a> `content_size?` | `number` | [src/core/service-configuration/knowledge.schema.ts:78](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L78) |
| <a id="prepped_content_size"></a> `prepped_content_size?` | `number` | [src/core/service-configuration/knowledge.schema.ts:79](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L79) |
| <a id="storage_tier"></a> `storage_tier` | [`StorageTier`](../../type-definitions/enumerations/StorageTier.md) | [src/core/service-configuration/knowledge.schema.ts:80](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L80) |
| <a id="last_accessed"></a> `last_accessed?` | `number` | [src/core/service-configuration/knowledge.schema.ts:83](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L83) |
| <a id="access_count"></a> `access_count` | `number` | [src/core/service-configuration/knowledge.schema.ts:84](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L84) |
| <a id="is_compressed"></a> `is_compressed` | `boolean` | [src/core/service-configuration/knowledge.schema.ts:87](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L87) |
| <a id="compression_ratio"></a> `compression_ratio?` | `number` | [src/core/service-configuration/knowledge.schema.ts:88](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L88) |
| <a id="metadata"></a> `metadata` | `Record`\<`string`, `any`\> | [src/core/service-configuration/knowledge.schema.ts:89](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L89) |
| <a id="original_content_type"></a> `original_content_type?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:91](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L91) |
| <a id="content_hash"></a> `content_hash?` | `string` \| `null` | [src/core/service-configuration/knowledge.schema.ts:92](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L92) |
