import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { KnowledgeBaseProcessingStatus, KnowledgeTypes, StorageTier } from "../type-definitions";

/**
 * @fileoverview Knowledge source schema definitions for managing AI knowledge bases.
 * @module service-configuration/knowledge
 */

/**
 * Zod schema for Knowledge Source validation.
 *
 * Defines the complete configuration for a knowledge source, including content storage,
 * processing status, and storage tier optimization.
 *
 * @typedef {Object} KnowledgeSourceProperties
 * @property {string} id - Unique identifier for the knowledge source
 * @property {string} name - Human-readable name for the knowledge source
 * @property {KnowledgeTypes} sourceType - Type of knowledge source (document, URL, business website, corpus, batch document)
 * @property {boolean} request_success - Flag indicating if the knowledge source creation request was successful
 * @property {KnowledgeBaseProcessingStatus} processingStatus - Current processing status (pending, processing, completed, failed) (default: PENDING)
 * @property {string | null} [content] - Raw extracted content from the knowledge source
 * @property {string | null} [prepped_content] - Processed and prepared content optimized for AI consumption
 * @property {string | null} [content_path] - Storage path for the raw content file
 * @property {string | null} [prepped_content_path] - Storage path for the processed content file
 * @property {string | null} [original_content_url] - Original source URL or upload URL for the content
 * @property {string | null} [stored_content_url] - Cloud storage URL for accessing the stored content
 * @property {string | null} [prepped_content_url] - Cloud storage URL for accessing the processed content
 * @property {number} [content_size] - Size of the raw content in bytes
 * @property {number} [prepped_content_size] - Size of the processed content in bytes
 * @property {StorageTier} storage_tier - Storage tier used for this knowledge source (default: FIRESTORE)
 * @property {number} [last_accessed] - Unix timestamp when the knowledge source was last accessed
 * @property {number} access_count - Number of times this knowledge source has been accessed (default: 0)
 * @property {boolean} is_compressed - Flag indicating if the content is stored in compressed format (default: false)
 * @property {number} [compression_ratio] - Compression ratio achieved if content is compressed
 * @property {Record<string, any>} [metadata] - Additional metadata about the knowledge source
 * @property {string | null} [original_content_type] - Original MIME type of the source content
 * @property {string | null} [content_hash] - Hash of the content for deduplication and integrity verification
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
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
export const KnowledgeSourceSchema = BaseModelSchema.safeExtend({
  name: z.string(),
  sourceType: z.enum(KnowledgeTypes),
  request_success: z.boolean(),
  processingStatus: z.enum(KnowledgeBaseProcessingStatus).default(KnowledgeBaseProcessingStatus.PENDING),

  // Content storage
  content: z.string().optional().nullable(),
  prepped_content: z.string().optional().nullable(),
  content_path: z.string().optional().nullable(),
  prepped_content_path: z.string().optional().nullable(),

  // Public URLs for client access
  original_content_url: z.string().optional().nullable(),
  stored_content_url: z.string().optional().nullable(),
  prepped_content_url: z.string().optional().nullable(),

  // Storage metadata
  content_size: z.number().optional(),
  prepped_content_size: z.number().optional(),
  storage_tier: z.enum(StorageTier).default(StorageTier.FIRESTORE),

  // Access tracking for tier optimization
  last_accessed: z.number().optional(),
  access_count: z.number().default(0),

  // Compression info
  is_compressed: z.boolean().default(false),
  compression_ratio: z.number().optional(),
  metadata: z.record(z.string(), z.any()).optional().default({}),

  original_content_type: z.string().optional().nullable(),
  content_hash: z.string().optional().nullable(),
});

/**
 * Type definition for Knowledge Source.
 *
 * Represents a complete knowledge source including all metadata,
 * content storage, and processing information.
 */
export type KnowledgeSource = z.infer<typeof KnowledgeSourceSchema>;
