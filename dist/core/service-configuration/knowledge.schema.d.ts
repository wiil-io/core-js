import { z } from "zod";
import { KnowledgeBaseProcessingStatus, KnowledgeTypes, StorageTier } from "../type-definitions";
/**
 * @fileoverview Knowledge source schema definitions for managing AI knowledge bases.
 *
 * Knowledge Sources provide contextual information, documentation, and domain knowledge that
 * Instruction Configurations can reference to enhance agent capabilities. They support multiple
 * content types and intelligent storage tier management for cost optimization.
 *
 * @module service-configuration/knowledge
 */
/**
 * Zod schema for Knowledge Source validation.
 *
 * Knowledge Sources provide contextual information and domain knowledge for AI agents. They are
 * referenced by Instruction Configurations (1:N relationship) to give agents access to specific
 * information, documentation, or business knowledge needed for their tasks.
 *
 * @remarks
 * **Architecture Context:**
 * - **Relationship**: Referenced by Instruction Configurations via knowledgeSourceIds (1:N)
 * - **Purpose**: Provides domain knowledge, documentation, and context for agent responses
 * - **Storage Strategy**: Multi-tier storage (Firestore, Cloud Storage) with automatic optimization
 * - **Processing Pipeline**: Raw content → Processing → Prepared content optimized for AI consumption
 *
 * **Storage Tiers:**
 * - **FIRESTORE**: Fast access for frequently used knowledge (stored in database)
 * - **CLOUD_STORAGE**: Cost-effective for less frequently accessed content
 * - **Automatic Optimization**: Access patterns drive tier migration for cost efficiency
 *
 * @typedef {Object} KnowledgeSourceProperties
 * @property {string} id - Unique identifier for the knowledge source
 * @property {string} name - Human-readable name for the knowledge source
 * @property {KnowledgeTypes} sourceType - Type of knowledge source (DOCUMENT, URL, BUSINESS_WEBSITE, CORPUS, BATCH_DOCUMENT)
 * @property {boolean} request_success - Flag indicating if the knowledge source creation and initial processing request was successful
 * @property {KnowledgeBaseProcessingStatus} processingStatus - Current processing status (PENDING, PROCESSING, COMPLETED, FAILED) (default: PENDING)
 * @property {string | null} [content] - Raw extracted content from the knowledge source (may be null if using cloud storage)
 * @property {string | null} [prepped_content] - Processed and prepared content optimized for AI consumption with enhanced formatting
 * @property {string | null} [content_path] - Storage path for the raw content file in the storage system
 * @property {string | null} [prepped_content_path] - Storage path for the processed content file in the storage system
 * @property {string | null} [original_content_url] - Original source URL or upload URL where the content was obtained
 * @property {string | null} [stored_content_url] - Cloud storage URL for accessing the stored raw content
 * @property {string | null} [prepped_content_url] - Cloud storage URL for accessing the processed content
 * @property {number} [content_size] - Size of the raw content in bytes for storage tracking
 * @property {number} [prepped_content_size] - Size of the processed content in bytes after preparation
 * @property {StorageTier} storage_tier - Current storage tier for this knowledge source (FIRESTORE or CLOUD_STORAGE) (default: FIRESTORE)
 * @property {number} [last_accessed] - Unix timestamp (milliseconds) when the knowledge source was last accessed by an agent
 * @property {number} access_count - Number of times this knowledge source has been accessed, used for tier optimization (default: 0)
 * @property {boolean} is_compressed - Flag indicating if the content is stored in compressed format to save space (default: false)
 * @property {number} [compression_ratio] - Compression ratio achieved if content is compressed (e.g., 0.5 for 50% compression)
 * @property {Record<string, any>} [metadata] - Additional metadata about the knowledge source (tags, categories, custom attributes)
 * @property {string | null} [original_content_type] - Original MIME type of the source content (e.g., 'application/pdf', 'text/html')
 * @property {string | null} [content_hash] - Hash of the content for deduplication and integrity verification
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when last updated
 *
 * @example
 * ```typescript
 * const knowledgeSource: KnowledgeSource = {
 *   id: '123*',
 *   name: 'Product Documentation',
 *   sourceType: KnowledgeTypes.DOCUMENT,
 *   request_success: true,
 *   processingStatus: KnowledgeBaseProcessingStatus.COMPLETED,
 *   content: 'Raw document content...',
 *   prepped_content: 'Processed content...',
 *   storage_tier: StorageTier.FIRESTORE,
 *   access_count: 42,
 *   is_compressed: false,
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export declare const KnowledgeSourceSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    sourceType: z.ZodEnum<typeof KnowledgeTypes>;
    request_success: z.ZodBoolean;
    processingStatus: z.ZodDefault<z.ZodEnum<typeof KnowledgeBaseProcessingStatus>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prepped_content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    content_path: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prepped_content_path: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    original_content_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    stored_content_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prepped_content_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    content_size: z.ZodOptional<z.ZodNumber>;
    prepped_content_size: z.ZodOptional<z.ZodNumber>;
    storage_tier: z.ZodDefault<z.ZodEnum<typeof StorageTier>>;
    last_accessed: z.ZodOptional<z.ZodNumber>;
    access_count: z.ZodDefault<z.ZodNumber>;
    is_compressed: z.ZodDefault<z.ZodBoolean>;
    compression_ratio: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    original_content_type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    content_hash: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
/**
 * Type definition for Knowledge Source.
 *
 * Represents a complete knowledge source including all metadata,
 * content storage, and processing information.
 */
export type KnowledgeSource = z.infer<typeof KnowledgeSourceSchema>;
