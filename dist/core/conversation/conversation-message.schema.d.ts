import z from 'zod';
/**
 * @fileoverview Conversation message schema definitions for chat and email messages.
 *
 * Message schemas define the structure of individual messages exchanged in conversations between users
 * and AI agents. Supports multiple message types (chat, email) with distinct schemas for user-originated
 * and agent-originated messages, enabling proper message threading, context tracking, and channel-specific
 * formatting.
 *
 * @module conversation/conversation-message
 */
/**
 * Message type enum for distinguishing message senders.
 *
 * Identifies who sent a message in a conversation to enable proper message
 * routing, formatting, and context tracking.
 */
export declare enum MessageType {
    /** Message sent by end user/customer */
    USER = "user",
    /** Message sent by AI agent */
    AGENT = "assistant",
    /** Message sent by human agent (live support) */
    HUMAN_AGENT = "human_agent",
    /** System-generated message (events, notifications) */
    SYSTEM = "system"
}
/**
 * System message event type enum.
 *
 * Identifies the type of system event that triggered a system message,
 * used for handover tracking, agent status, and conversation transfers.
 */
export declare enum SystemMessageEventType {
    /** User or AI requested handover to human agent */
    HANDOVER_REQUESTED = "handover_requested",
    /** Human agent accepted the handover request */
    HANDOVER_ACCEPTED = "handover_accepted",
    /** Handover to human agent completed successfully */
    HANDOVER_COMPLETED = "handover_completed",
    /** Handover attempt failed */
    HANDOVER_FAILED = "handover_failed",
    /** Human agent joined the conversation */
    AGENT_JOINED = "agent_joined",
    /** Human agent left the conversation */
    AGENT_LEFT = "agent_left",
    /** Conversation transferred to another agent or queue */
    CONVERSATION_TRANSFERRED = "conversation_transferred"
}
/**
 * Base chat message schema.
 *
 * Foundation schema for all chat-based messages containing core fields shared by both user and
 * assistant messages. Extended by UserChatMessageSchema and AssistantChatMessageSchema with
 * role-specific identifiers for message threading and conversation flow tracking.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extended By**: UserChatMessageSchema, AssistantChatMessageSchema for role-specific messages
 * - **Relationship**: N:1 - Multiple messages belong to one conversation (via conversation_config_id)
 * - **Storage**: Stored in conversation message arrays and separate message collections
 * - **LLM Context**: llm_conversation_id enables multi-turn context tracking with LLM providers
 *
 * **Message Flow:**
 * - User sends message → UserChatMessage created → Agent processes → AssistantChatMessage generated
 * - Messages linked via user_message_id and assistant_message_id for threading
 */
export declare const BaseChatMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
/**
 * Base email message schema extending chat message with email-specific fields.
 *
 * Extends BaseChatMessageSchema with email-specific attributes including subject line and email
 * identifier flag. Used as foundation for user and assistant email messages in email-based
 * conversation channels.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseChatMessageSchema with email-specific fields
 * - **Extended By**: UserEmailMessageSchema, AssistantEmailMessageSchema
 * - **Channel**: Used exclusively for EMAIL conversation type
 * - **Threading**: Subject line enables email thread grouping and conversation continuity
 *
 * **Email Features:**
 * - Subject line for email clients and threading
 * - isEmail flag distinguishes email messages from chat messages in unified message stores
 */
export declare const BaseEmailMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    subject: z.ZodString;
    isEmail: z.ZodDefault<z.ZodLiteral<true>>;
}, z.core.$strip>;
/**
 * User chat message schema.
 *
 * Represents a message sent by a user/customer in a chat conversation. Contains user-specific
 * identifiers for message threading and links to the previous assistant message to maintain
 * conversation context and flow.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseChatMessageSchema with user-specific fields
 * - **Message Type**: Always 'user' (MessageType.USER)
 * - **Threading**: Links to previous assistant message via last_assistant_message_id
 * - **Flow**: User message → Agent processes → AssistantChatMessage generated
 *
 * **Message Threading:**
 * - user_message_id: Unique identifier for this user message
 * - last_assistant_message_id: References the assistant's previous message being responded to
 * - Enables tracking conversation turns and maintaining context
 */
export declare const UserChatMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    message_type: z.ZodDefault<z.ZodLiteral<MessageType.USER>>;
    user_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    last_assistant_message_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Assistant chat message schema.
 *
 * Represents a message generated by the AI agent in a chat conversation. Contains agent-specific
 * identifiers and links to the user message being responded to, enabling proper conversation
 * threading and context tracking.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseChatMessageSchema with assistant-specific fields
 * - **Message Type**: Always 'assistant' (MessageType.AGENT)
 * - **Threading**: Links to user message being responded to via last_user_message_id
 * - **Flow**: User message received → Agent generates → AssistantChatMessage created
 *
 * **Message Threading:**
 * - assistant_message_id: Required unique identifier for this assistant message
 * - last_user_message_id: References the user message being responded to
 * - Enables conversation turn tracking and response latency measurement
 */
export declare const AssistantChatMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    message_type: z.ZodDefault<z.ZodLiteral<MessageType.AGENT>>;
    assistant_message_id: z.ZodString;
    last_user_message_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * User email message schema.
 *
 * Represents an email message sent by a user/customer. Extends base email schema with user-specific
 * fields and optional provider message ID for integration with external email services (Gmail, Outlook, etc.).
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseEmailMessageSchema with user-specific fields
 * - **Message Type**: Always 'user' (MessageType.USER)
 * - **Channel**: Used exclusively for EMAIL conversation type
 * - **Provider Integration**: Links to external email service message IDs
 *
 * **Email Integration:**
 * - provider_message_id enables tracking emails across platforms
 * - Supports Gmail API, Outlook Graph API, SendGrid, etc.
 * - Used for reply-to threading and email service synchronization
 */
export declare const UserEmailMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    subject: z.ZodString;
    isEmail: z.ZodDefault<z.ZodLiteral<true>>;
    message_type: z.ZodDefault<z.ZodLiteral<MessageType.USER>>;
    provider_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
/**
 * Assistant email message schema.
 *
 * Represents an email message generated by the AI agent in response to a user email. Extends base
 * email schema with assistant message type, used for automated email responses and email-based
 * customer support interactions.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseEmailMessageSchema with assistant-specific fields
 * - **Message Type**: Always 'assistant' (MessageType.AGENT)
 * - **Channel**: Used exclusively for EMAIL conversation type
 * - **Use Cases**: Automated customer support replies, FAQ responses, ticket acknowledgments
 *
 * **Email Response Features:**
 * - Inherits subject line from BaseEmailMessageSchema for thread continuity
 * - Agent-generated content formatted for email clients
 * - Supports HTML formatting and attachments via message content
 */
export declare const AssistantEmailMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    subject: z.ZodString;
    isEmail: z.ZodDefault<z.ZodLiteral<true>>;
    message_type: z.ZodDefault<z.ZodLiteral<MessageType.AGENT>>;
}, z.core.$strip>;
/**
 * Human agent chat message schema.
 *
 * Represents a message sent by a human support agent in a chat conversation.
 * Used when conversations are handed over from AI to live agents for complex
 * issue resolution or customer preference.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseChatMessageSchema with human agent-specific fields
 * - **Message Type**: Always 'human_agent' (MessageType.HUMAN_AGENT)
 * - **Triggered By**: Handover from AI agent or direct human agent assignment
 * - **Session Tracking**: agent_session_id links to workforce management system
 *
 * @typedef {Object} HumanAgentChatMessage
 * @property {string} message_type - Fixed to 'human_agent'
 * @property {string} agent_message_id - Unique identifier for this human agent message
 * @property {string} agent_session_id - Agent workforce session ID for tracking
 * @property {string} [last_user_message_id] - ID of the user message being responded to
 */
export declare const HumanAgentChatMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    message_type: z.ZodDefault<z.ZodLiteral<MessageType.HUMAN_AGENT>>;
    agent_message_id: z.ZodString;
    agent_session_id: z.ZodString;
    last_user_message_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Human agent email message schema.
 *
 * Represents an email message sent by a human support agent. Used when email
 * conversations require human intervention for complex issues, escalations,
 * or sensitive customer interactions.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseEmailMessageSchema with human agent-specific fields
 * - **Message Type**: Always 'human_agent' (MessageType.HUMAN_AGENT)
 * - **Channel**: Used exclusively for EMAIL conversation type
 * - **Session Tracking**: agent_session_id links to workforce management system
 *
 * @typedef {Object} HumanAgentEmailMessage
 * @property {string} message_type - Fixed to 'human_agent'
 * @property {string} agent_session_id - Agent workforce session ID
 */
export declare const HumanAgentEmailMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    subject: z.ZodString;
    isEmail: z.ZodDefault<z.ZodLiteral<true>>;
    message_type: z.ZodDefault<z.ZodLiteral<MessageType.HUMAN_AGENT>>;
    agent_session_id: z.ZodString;
}, z.core.$strip>;
/**
 * System message schema.
 *
 * Represents system-generated messages for tracking conversation events such as
 * handovers, agent joins/leaves, and transfers. Not directly visible to users
 * but recorded for audit trails and conversation state tracking.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseChatMessageSchema with system-specific fields
 * - **Message Type**: Always 'system' (MessageType.SYSTEM)
 * - **Purpose**: Audit trail, conversation state tracking, event logging
 * - **Visibility**: Typically hidden from end users, visible in admin dashboards
 *
 * @typedef {Object} SystemMessage
 * @property {string} message_type - Fixed to 'system'
 * @property {string} system_message_id - Unique identifier for this system message
 * @property {SystemMessageEventType} event_type - Type of system event
 * @property {Object} [metadata] - Additional event-specific metadata
 */
export declare const SystemMessageSchema: z.ZodObject<{
    conversation_config_id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodDefault<z.ZodNumber>;
    llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    message_type: z.ZodDefault<z.ZodLiteral<MessageType.SYSTEM>>;
    system_message_id: z.ZodString;
    event_type: z.ZodEnum<typeof SystemMessageEventType>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type UserChatMessage = z.infer<typeof UserChatMessageSchema>;
export type AssistantChatMessage = z.infer<typeof AssistantChatMessageSchema>;
export type UserEmailMessage = z.infer<typeof UserEmailMessageSchema>;
export type AssistantEmailMessage = z.infer<typeof AssistantEmailMessageSchema>;
export type HumanAgentChatMessage = z.infer<typeof HumanAgentChatMessageSchema>;
export type HumanAgentEmailMessage = z.infer<typeof HumanAgentEmailMessageSchema>;
export type SystemMessage = z.infer<typeof SystemMessageSchema>;
export type ChatMessage = UserChatMessage | AssistantChatMessage | UserEmailMessage | AssistantEmailMessage | HumanAgentChatMessage | HumanAgentEmailMessage | SystemMessage;
