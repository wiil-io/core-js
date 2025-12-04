[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.18**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / KnowledgeSourceSchema

# Variable: KnowledgeSourceSchema

```ts
const KnowledgeSourceSchema: ZodObject<KnowledgeSource>;
```

Defined in: [src/core/service-configuration/knowledge.schema.ts:78](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/knowledge.schema.ts#L78)

Zod schema for Knowledge Source validation.

Knowledge Sources provide contextual information and domain knowledge for AI agents. They are
referenced by Instruction Configurations (1:N relationship) to give agents access to specific
information, documentation, or business knowledge needed for their tasks.

## Remarks

**Architecture Context:**
- **Relationship**: Referenced by Instruction Configurations via knowledgeSourceIds (1:N)
- **Purpose**: Provides domain knowledge, documentation, and context for agent responses
- **Storage Strategy**: Multi-tier storage (Firestore, Cloud Storage) with automatic optimization
- **Processing Pipeline**: Raw content → Processing → Prepared content optimized for AI consumption

**Storage Tiers:**
- **FIRESTORE**: Fast access for frequently used knowledge (stored in database)
- **CLOUD_STORAGE**: Cost-effective for less frequently accessed content
- **Automatic Optimization**: Access patterns drive tier migration for cost efficiency

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
