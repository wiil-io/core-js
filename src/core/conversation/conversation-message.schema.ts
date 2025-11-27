import z from 'zod';

/**
 * @fileoverview Conversation message schema definitions for chat and email messages.
 * @module conversation/conversation-message
 */

/**
 * Message type enum for distinguishing between user and assistant messages.
 */
export enum MessageType {
    USER = 'user',
    AGENT = 'assistant',
}

/**
 * Base chat message schema.
 *
 * @typedef {Object} BaseChatMessage
 * @property {string} conversation_config_id - Conversation configuration ID this message belongs to
 * @property {string} message - Text content of the message
 * @property {number} timestamp - Unix timestamp when message was sent
 * @property {string} [llm_conversation_id] - LLM conversation thread ID for context tracking
 */
export const BaseChatMessageSchema = z.object({
    conversation_config_id: z.string(),
    message: z.string(),
    timestamp: z.number().default(Date.now()),
    llm_conversation_id: z.string().optional().nullable(),
});

/**
 * Base email message schema extending chat message with email-specific fields.
 *
 * @typedef {Object} BaseEmailMessage
 * @property {string} subject - Subject line of the email
 * @property {boolean} isEmail - Flag indicating this is an email message
 */
export const BaseEmailMessageSchema = BaseChatMessageSchema.safeExtend({
    subject: z.string(),
    isEmail: z.literal(true).default(true),
});

/**
 * User chat message schema.
 *
 * @typedef {Object} UserChatMessage
 * @property {string} message_type - Fixed message type for user messages
 * @property {string} [user_message_id] - Unique ID for this user message
 * @property {string} [last_assistant_message_id] - ID of the last assistant message this is responding to
 */
export const UserChatMessageSchema = BaseChatMessageSchema.safeExtend({
    message_type: z.literal(MessageType.USER).default(MessageType.USER),
    user_message_id: z.string().optional().nullable(),
    last_assistant_message_id: z.string().optional(),
});

/**
 * Assistant chat message schema.
 *
 * @typedef {Object} AssistantChatMessage
 * @property {string} message_type - Fixed message type for assistant messages
 * @property {string} assistant_message_id - Unique ID for this assistant message
 * @property {string} [last_user_message_id] - ID of the user message this is responding to
 */
export const AssistantChatMessageSchema = BaseChatMessageSchema.safeExtend({
    message_type: z.literal(MessageType.AGENT).default(MessageType.AGENT),
    assistant_message_id: z.string(),
    last_user_message_id: z.string().optional(),
});

/**
 * User email message schema.
 *
 * @typedef {Object} UserEmailMessage
 * @property {string} message_type - Fixed message type for user email messages
 * @property {string} [provider_message_id] - ID from external provider if applicable
 */
export const UserEmailMessageSchema = BaseEmailMessageSchema.safeExtend({
    message_type: z.literal(MessageType.USER).default(MessageType.USER),
    provider_message_id: z.string().optional().nullable(),
});

/**
 * Assistant email message schema.
 *
 * @typedef {Object} AssistantEmailMessage
 * @property {string} message_type - Fixed message type for assistant email messages
 */
export const AssistantEmailMessageSchema = BaseEmailMessageSchema.safeExtend({
    message_type: z.literal(MessageType.AGENT).default(MessageType.AGENT),
});

export type UserChatMessage = z.infer<typeof UserChatMessageSchema>;
export type AssistantChatMessage = z.infer<typeof AssistantChatMessageSchema>;
export type UserEmailMessage = z.infer<typeof UserEmailMessageSchema>;
export type AssistantEmailMessage = z.infer<typeof AssistantEmailMessageSchema>;

export type ChatMessage = UserChatMessage | AssistantChatMessage | UserEmailMessage | AssistantEmailMessage;
