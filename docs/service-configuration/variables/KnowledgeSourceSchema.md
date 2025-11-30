[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / KnowledgeSourceSchema

# Variable: KnowledgeSourceSchema

```ts
const KnowledgeSourceSchema: ZodObject<KnowledgeSource>;
```

Defined in: [src/core/service-configuration/knowledge.schema.ts:60](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/knowledge.schema.ts#L60)

Zod schema for Knowledge Source validation.

Defines the complete configuration for a knowledge source, including content storage,
processing status, and storage tier optimization.

## Example

```typescript
const knowledgeSource: KnowledgeSource = {
  id: '123*',
  name: 'Product Documentation',
  sourceType: KnowledgeTypes.DOCUMENT,
  request_success: true,
  processingStatus: KnowledgeBaseProcessingStatus.COMPLETED,
  content: 'Raw document content...',
  prepped_content: 'Processed content...',
  storage_tier: StorageTier.FIRESTORE,
  access_count: 42,
  is_compressed: false,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
