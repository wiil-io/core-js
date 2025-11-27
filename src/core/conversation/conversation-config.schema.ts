import { z } from "zod";
import { AssistantChatMessageSchema, AssistantEmailMessageSchema, MessageType, UserChatMessageSchema, UserEmailMessageSchema } from "./conversation-message.schema";
import { ConversationStatus, ConversationSummarySentiment, ServiceConversationType } from "../type-definitions";

/**
 * @fileoverview Conversation configuration schema definitions.
 * @module conversation/conversation-config
 */

/**
 * Conversation summary schema.
 *
 * @typedef {Object} ConversationSummary
 * @property {string} summary - Concise conversation summary
 * @property {string[]} key_points - Key points from the conversation
 * @property {string[]} action_items - Any action items or follow-ups needed
 * @property {string} sentiment - Overall conversation sentiment
 */
export const ConversationSummarySchema = z.object({
    summary: z.string(),
    key_points: z.array(z.string()),
    action_items: z.array(z.string()),
    sentiment: z.enum(ConversationSummarySentiment)
});

/**
 * Message schema for conversation messages.
 *
 * @typedef {Object} Message
 * @property {string} [id] - Optional internal message ID
 * @property {string} messageId - Unique identifier for this message
 * @property {string} content - Text content of the message
 * @property {string} message_type - Type of message sender (user or assistant)
 * @property {Date} timestamp - When the message was created
 * @property {Object} metadata - Additional message metadata (attachments, formatting, etc.)
 * @property {number} [created_at] - Unix timestamp when message was created
 */
export const MessageSchema = z.object({
    id: z.string().optional(),
    messageId: z.string(),
    content: z.string(),
    message_type: z.enum(MessageType),
    timestamp: z.date(),
    metadata: z.record(z.string(), z.any()),
    created_at: z.number().optional()
});

export type Message = z.infer<typeof MessageSchema>;

/**
 * Conversation direction enum.
 */
export enum ConversationDirection {
    INBOUND = 'inbound',
    OUTBOUND = 'outbound'
}

/**
 * Union of all conversation message types.
 */
export const ConversationMessageSchema = z.union([
    UserChatMessageSchema,
    AssistantChatMessageSchema,
    UserEmailMessageSchema,
    AssistantEmailMessageSchema
]);

/**
 * Conversation state history schema for tracking status changes.
 *
 * @typedef {Object} ConversationStateHistory
 * @property {string} status - The status at this point in time
 * @property {number} timestamp - Unix timestamp when this status was set
 * @property {string} [reason] - Why the status changed
 * @property {Object} [metadata] - Additional context about the state change
 */
export const ConversationStateHistorySchema = z.object({
    status: z.enum(ConversationStatus),
    timestamp: z.number(),
    reason: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional()
});

/**
 * Base conversation configuration schema.
 *
 * @typedef {Object} BaseConversationConfig
 * @property {string} channel_id - Channel ID this conversation belongs to
 * @property {string} organization_id - Account ID that owns this conversation
 * @property {string} project_id - Project ID this conversation is associated with
 * @property {string} deployment_config_id - Deployment configuration ID used for this conversation
 * @property {string} channel_identifier - Unique identifier for the communication channel
 * @property {string} [instruction_config_id] - Instruction configuration ID guiding AI behavior
 * @property {string} [partner_user_id] - External partner or user identifier
 * @property {string} conversation_type - Type of conversation (OTT_CHAT, TELEPHONY_CALL, SMS, etc.)
 * @property {string} [model_id] - AI model ID used for this conversation
 * @property {number} [user_id] - Internal platform user ID
 * @property {number} [created_at] - Unix timestamp when conversation was created
 * @property {Array} [messages] - Array of messages in this conversation
 * @property {boolean} is_campaign - Whether this conversation is part of a marketing campaign
 * @property {string} [customer_id] - Customer ID associated with this conversation
 * @property {string} [status] - Current status of the conversation
 * @property {number} durationInSeconds - Duration of the conversation in seconds
 * @property {string} [stt_model_id] - Speech-to-Text model ID if applicable
 * @property {string} [tts_model_id] - Text-to-Speech model ID if applicable
 * @property {Object} [conversationSummary] - Optional summary of the conversation content
 * @property {string} [created_day] - The day the message was created, formatted as YYYY-MM-DD
 * @property {Array} [state_history] - Historical record of status changes
 * @property {number} [updated_at] - Unix timestamp when conversation was last updated
 * @property {number} [deleted_at] - Unix timestamp when conversation was deleted
 */
export const BaseConversationConfigSchema = z.object({
    channel_id: z.string(),
    organization_id: z.string(),
    project_id: z.string(),
    deployment_config_id: z.string(),
    channel_identifier: z.string(),
    instruction_config_id: z.string().optional().nullable(),
    partner_user_id: z.string().optional(),
    conversation_type: z.enum(ServiceConversationType),
    model_id: z.string().optional(),
    user_id: z.number().optional(),
    created_at: z.number().optional().default(Date.now),
    messages: z.array(ConversationMessageSchema).optional().nullable(),
    is_campaign: z.boolean().default(false),
    customer_id: z.string().optional().nullable(),
    status: z.enum(ConversationStatus).nullable().optional(),
    durationInSeconds: z.number().nonnegative().optional().default(15),
    stt_model_id: z.string().optional().nullable(),
    tts_model_id: z.string().optional().nullable(),
    conversationSummary: ConversationSummarySchema.nullable().optional(),
    created_day: z.string().optional(),
    state_history: z.array(ConversationStateHistorySchema).nullable().optional(),
    updated_at: z.number().optional().nullable(),
    deleted_at: z.number().optional().nullable(),
});

/**
 * Call transfer schema for tracking call transfer details in telephony conversations.
 *
 * @typedef {Object} CallTransfer
 * @property {string} [transfer_type] - Type of call transfer - blind (unattended) or warm (attended)
 * @property {string} transfer_target - Target phone number for the call transfer
 * @property {number} [transfer_initiated_at] - Unix timestamp when the transfer was initiated
 * @property {number} [transfer_completed_at] - Unix timestamp when the transfer was completed
 * @property {string} transfer_status - Current status of the call transfer
 * @property {string} [transfer_reason] - Reason for the transfer as extracted from the conversation
 */
export const CallTransferSchema = z.object({
    transfer_type: z.enum(['blind', 'warm']).nullable().optional(),
    transfer_target: z.string(),
    transfer_initiated_at: z.number().optional(),
    transfer_completed_at: z.number().optional(),
    transfer_status: z.enum(['pending', 'completed', 'failed', 'returned']),
    transfer_reason: z.string().optional()
});

/**
 * Service conversation configuration schema.
 *
 * @typedef {Object} ServiceConversationConfig
 * @property {string} id - Unique identifier for this conversation configuration
 * @property {string} [record_id] - Optional record ID for external system integration
 * @property {string} [provider_message_id] - Provider email message ID from email service
 * @property {string} [direction] - Direction of the telephony call (INBOUND, OUTBOUND)
 * @property {string} [resource_url] - Resource URL for the call recording or details
 * @property {Object} [call_transfer] - Call transfer details if the call was transferred
 */
export const ServiceConversationConfigSchema = BaseConversationConfigSchema.safeExtend({
    id: z.string(),
    record_id: z.string().optional().nullable(),
    provider_message_id: z.string().optional().nullable(),
    direction: z.enum(ConversationDirection).nullable().optional(),
    resource_url: z.string().nullable().optional(),
    call_transfer: CallTransferSchema.nullable().optional()
});

/**
 * Decommission configuration schema.
 *
 * @typedef {Object} DecommissionRequest
 * @property {string} decommission_service_id - Service ID to decommission and shut down
 */
export const DecommissionConfigSchema = z.object({
    decommission_service_id: z.string(),
});

export type ConversationSummary = z.infer<typeof ConversationSummarySchema>;
export type ServiceConversationConfigType = z.infer<typeof ServiceConversationConfigSchema>;
export type DecommissionRequest = z.infer<typeof DecommissionConfigSchema>;
export type CallTransfer = z.infer<typeof CallTransferSchema>;
export type ConversationStateHistory = z.infer<typeof ConversationStateHistorySchema>;

/**
 * Enhanced interfaces for filtering and sorting conversations.
 */
export interface ConversationFilters {
    search?: string;
    conversationType?: ServiceConversationType[];
    channelId?: string;
    customerId?: string;
    hasMessages?: boolean;
    dateRange?: {
        start?: Date;
        end?: Date;
    };
}

export interface ConversationSorting {
    field: 'created_at' | 'customer_id';
    direction: 'asc' | 'desc';
}

export interface ConversationQueryOptions {
    page: number;
    pageSize: number;
    filters?: ConversationFilters;
    sorting?: ConversationSorting;
}
