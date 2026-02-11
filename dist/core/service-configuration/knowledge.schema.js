"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeSourceSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
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
exports.KnowledgeSourceSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.z.string().describe("Human-readable name for the knowledge source (e.g., 'Product Documentation', 'Company Policies', 'Technical FAQs')"),
    sourceType: zod_1.z.enum(type_definitions_1.KnowledgeTypes).describe("Type of knowledge source determining how content is ingested (DOCUMENT for files, URL for web pages, BUSINESS_WEBSITE for site crawls, CORPUS for collections, BATCH_DOCUMENT for multiple files)"),
    request_success: zod_1.z.boolean().describe("Flag indicating whether the knowledge source creation and initial processing request completed successfully"),
    processingStatus: zod_1.z.enum(type_definitions_1.KnowledgeBaseProcessingStatus).default(type_definitions_1.KnowledgeBaseProcessingStatus.PENDING).describe("Current processing status of the knowledge source (PENDING: awaiting processing, PROCESSING: being prepared, COMPLETED: ready for use, FAILED: processing error)"),
    // Content storage
    content: zod_1.z.string().optional().nullable().describe("Raw extracted content from the knowledge source stored inline (null if content is stored in cloud storage for size optimization)"),
    prepped_content: zod_1.z.string().optional().nullable().describe("Processed and prepared content optimized for AI consumption with enhanced formatting, structure, and metadata (null if stored in cloud storage)"),
    content_path: zod_1.z.string().optional().nullable().describe("Storage path for the raw content file in the cloud storage system (e.g., 'knowledge/org-123/doc-456/content.txt')"),
    prepped_content_path: zod_1.z.string().optional().nullable().describe("Storage path for the processed content file in the cloud storage system (e.g., 'knowledge/org-123/doc-456/prepped.txt')"),
    // Public URLs for client access
    original_content_url: zod_1.z.string().optional().nullable().describe("Original source URL or upload URL where the content was obtained (for traceability and re-ingestion)"),
    stored_content_url: zod_1.z.string().optional().nullable().describe("Cloud storage URL for accessing the stored raw content via HTTP (signed URL or public URL)"),
    prepped_content_url: zod_1.z.string().optional().nullable().describe("Cloud storage URL for accessing the processed content via HTTP (signed URL or public URL)"),
    // Storage metadata
    content_size: zod_1.z.number().optional().describe("Size of the raw content in bytes, used for storage quota tracking and tier optimization decisions"),
    prepped_content_size: zod_1.z.number().optional().describe("Size of the processed content in bytes after preparation and enhancement"),
    storage_tier: zod_1.z.enum(type_definitions_1.StorageTier).default(type_definitions_1.StorageTier.FIRESTORE).describe("Current storage tier for this knowledge source: FIRESTORE for frequently accessed content (fast, expensive), CLOUD_STORAGE for infrequent access (slower, cost-effective)"),
    // Access tracking for tier optimization
    last_accessed: zod_1.z.number().optional().describe("Unix timestamp (milliseconds) when the knowledge source was last accessed by an agent, used for automatic tier migration"),
    access_count: zod_1.z.number().default(0).describe("Number of times this knowledge source has been accessed by agents, used to determine optimal storage tier placement"),
    // Compression info
    is_compressed: zod_1.z.boolean().default(false).describe("Flag indicating whether the content is stored in compressed format (e.g., gzip) to reduce storage costs"),
    compression_ratio: zod_1.z.number().optional().describe("Compression ratio achieved if content is compressed (e.g., 0.5 means compressed to 50% of original size)"),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().default({}).describe("Additional metadata about the knowledge source including tags, categories, custom attributes, source information, or processing details"),
    original_content_type: zod_1.z.string().optional().nullable().describe("Original MIME type of the source content (e.g., 'application/pdf', 'text/html', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')"),
    content_hash: zod_1.z.string().optional().nullable().describe("Hash of the content (e.g., SHA-256) for deduplication, change detection, and integrity verification"),
});
