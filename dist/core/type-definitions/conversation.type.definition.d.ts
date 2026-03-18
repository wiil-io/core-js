/**
 * @fileoverview Conversation type definitions and enumerations.
 *
 * Provides enumerations for conversation lifecycle management, event tracking,
 * communication channels, and outbound messaging status tracking across
 * telephony, email, and SMS channels.
 *
 * @module type-definitions/conversation
 */
/**
 * Service conversation channel types.
 *
 * Identifies the communication channel used for a conversation,
 * enabling channel-specific handling and routing logic.
 *
 * @see ServiceConversationConfigSchema - Uses this for channel identification
 */
export declare enum ServiceConversationType {
    /** WebRTC or OTT voice call */
    OTT_CALL = "OTT_CALL",
    /** WebRTC or OTT text chat */
    OTT_CHAT = "OTT_CHAT",
    /** Traditional PSTN/SIP telephony call */
    TELEPHONY_CALL = "TELEPHONY_CALL",
    /** SMS text messaging */
    SMS = "SMS",
    /** Email communication */
    EMAIL = "EMAIL",
    /** WhatsApp messaging */
    WHATSAPP = "WHATSAPP",
    /** Telegram messaging */
    TELEGRAM = "TELEGRAM"
}
/**
 * Conversation lifecycle status.
 *
 * Tracks the current state of a conversation from initiation through
 * completion and post-processing (summarization).
 *
 * @remarks
 * **Status Flow:**
 * ```
 * PENDING → STARTED → ACTIVE → PAUSED → ACTIVE → ENDED → SUMMARIZED
 * ```
 *
 * @see ServiceConversationConfigSchema - Uses this for lifecycle tracking
 */
export declare enum ConversationStatus {
    /** Conversation created but not yet started */
    PENDING = "pending",
    /** Conversation initiated, awaiting participant connection */
    STARTED = "started",
    /** Conversation actively in progress with connected participants */
    ACTIVE = "active",
    /** Conversation temporarily paused (hold, transfer in progress) */
    PAUSED = "paused",
    /** Conversation ended, awaiting post-processing */
    ENDED = "ended",
    /** Initial AI summary generated for the conversation */
    SUMMARIZED = "summarized",
    /** Summary updated after additional processing or review */
    UPDATED_SUMMARIZED = "updated_summarized"
}
/**
 * Translation direction for multilingual conversations.
 *
 * Configures whether real-time translation applies in one or both directions
 * during AI-assisted multilingual conversations.
 */
export declare enum TranslationDirection {
    /** Translate both participant's speech to each other's language */
    BIDIRECTIONAL = "bidirectional",
    /** Translate only one participant's speech (typically agent to customer) */
    UNIDIRECTIONAL = "unidirectional"
}
/**
 * Conversation summary sentiment classification.
 *
 * AI-generated sentiment analysis result for conversation summaries,
 * used for analytics, routing, and follow-up prioritization.
 */
export declare enum ConversationSummarySentiment {
    /** Customer expressed satisfaction, issue resolved, or positive outcome */
    POSITIVE = "positive",
    /** Neutral interaction without strong positive or negative indicators */
    NEUTRAL = "neutral",
    /** Customer expressed frustration, issue unresolved, or negative outcome */
    NEGATIVE = "negative"
}
/**
 * Call request status for outbound call lifecycle tracking.
 *
 * Tracks the progression of an outbound call request from creation
 * through execution and completion.
 *
 * @remarks
 * **Status Lifecycle:**
 * ```
 * PENDING → SCHEDULED → IN_PROGRESS → COMPLETED
 *                    ↘ FAILED
 *        ↘ CANCELLED
 * ```
 *
 * @see BusinessCallRequestSchema - Uses this for call tracking
 */
export declare enum CallRequestStatus {
    /** Call request created, awaiting processing or scheduled time */
    PENDING = "pending",
    /** Call scheduled for future execution within calling hours */
    SCHEDULED = "scheduled",
    /** Call currently active with AI agent engaged */
    IN_PROGRESS = "in_progress",
    /** Call successfully completed with conversation recorded */
    COMPLETED = "completed",
    /** Call failed due to technical error, no answer, or busy signal */
    FAILED = "failed",
    /** Call cancelled before execution by user or system */
    CANCELLED = "cancelled"
}
/**
 * Schedule type for outbound call timing configuration.
 *
 * Determines when and how outbound calls are executed relative
 * to the call request creation time.
 *
 * @see BusinessCallRequestSchema - Uses this for call scheduling
 */
export declare enum ScheduleType {
    /** Execute call as soon as possible within calling hours */
    IMMEDIATE = "immediate",
    /** Execute call at specific scheduledAt timestamp */
    SCHEDULED = "scheduled",
    /** Execute call on recurring schedule based on callingHours */
    RECURRING = "recurring"
}
/**
 * Email delivery status for tracking email lifecycle.
 *
 * Tracks the progression of an outbound email from queue through
 * delivery or failure, updated by provider webhooks.
 *
 * @remarks
 * **Status Lifecycle:**
 * ```
 * QUEUED → SENT → DELIVERED
 *              ↘ BOUNCED
 *              ↘ COMPLAINED
 *       ↘ FAILED
 * ```
 *
 * @see EmailRecordSchema - Uses this for delivery tracking
 */
export declare enum EmailStatus {
    /** Email request created, awaiting sending */
    QUEUED = "queued",
    /** Email successfully submitted to mail provider */
    SENT = "sent",
    /** Email confirmed delivered to recipient inbox */
    DELIVERED = "delivered",
    /** Email bounced (hard or soft bounce from recipient server) */
    BOUNCED = "bounced",
    /** Email failed to send due to technical error */
    FAILED = "failed",
    /** Recipient marked email as spam (complaint received) */
    COMPLAINED = "complained"
}
/**
 * SMS delivery status for tracking message lifecycle.
 *
 * Tracks the progression of an outbound SMS from queue through
 * delivery or failure, updated by carrier delivery reports.
 *
 * @remarks
 * **Status Lifecycle:**
 * ```
 * QUEUED → SENT → DELIVERED
 *              ↘ UNDELIVERED
 *       ↘ FAILED
 * ```
 *
 * @see SmsRequestSchema - Uses this for delivery tracking
 */
export declare enum SmsStatus {
    /** SMS request created, awaiting sending */
    QUEUED = "queued",
    /** SMS successfully submitted to carrier */
    SENT = "sent",
    /** SMS confirmed delivered to recipient device */
    DELIVERED = "delivered",
    /** SMS failed to send due to technical error */
    FAILED = "failed",
    /** SMS could not be delivered (invalid number, blocked, etc.) */
    UNDELIVERED = "undelivered"
}
