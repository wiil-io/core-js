"use strict";
/**
 * @fileoverview Conversation type definitions and enumerations.
 *
 * Provides enumerations for conversation lifecycle management, event tracking,
 * communication channels, and outbound messaging status tracking across
 * telephony, email, and SMS channels.
 *
 * @module type-definitions/conversation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsStatus = exports.EmailStatus = exports.ScheduleType = exports.CallRequestStatus = exports.ConversationSummarySentiment = exports.TranslationDirection = exports.ConversationStatus = exports.ServiceConversationType = void 0;
/**
 * Service conversation channel types.
 *
 * Identifies the communication channel used for a conversation,
 * enabling channel-specific handling and routing logic.
 *
 * @see ServiceConversationConfigSchema - Uses this for channel identification
 */
var ServiceConversationType;
(function (ServiceConversationType) {
    /** WebRTC or OTT voice call */
    ServiceConversationType["OTT_CALL"] = "OTT_CALL";
    /** WebRTC or OTT text chat */
    ServiceConversationType["OTT_CHAT"] = "OTT_CHAT";
    /** Traditional PSTN/SIP telephony call */
    ServiceConversationType["TELEPHONY_CALL"] = "TELEPHONY_CALL";
    /** SMS text messaging */
    ServiceConversationType["SMS"] = "SMS";
    /** Email communication */
    ServiceConversationType["EMAIL"] = "EMAIL";
    /** WhatsApp messaging */
    ServiceConversationType["WHATSAPP"] = "WHATSAPP";
    /** Telegram messaging */
    ServiceConversationType["TELEGRAM"] = "TELEGRAM";
})(ServiceConversationType || (exports.ServiceConversationType = ServiceConversationType = {}));
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
var ConversationStatus;
(function (ConversationStatus) {
    /** Conversation created but not yet started */
    ConversationStatus["PENDING"] = "pending";
    /** Conversation initiated, awaiting participant connection */
    ConversationStatus["STARTED"] = "started";
    /** Conversation actively in progress with connected participants */
    ConversationStatus["ACTIVE"] = "active";
    /** Conversation temporarily paused (hold, transfer in progress) */
    ConversationStatus["PAUSED"] = "paused";
    /** Conversation ended, awaiting post-processing */
    ConversationStatus["ENDED"] = "ended";
    /** Initial AI summary generated for the conversation */
    ConversationStatus["SUMMARIZED"] = "summarized";
    /** Summary updated after additional processing or review */
    ConversationStatus["UPDATED_SUMMARIZED"] = "updated_summarized";
})(ConversationStatus || (exports.ConversationStatus = ConversationStatus = {}));
/**
 * Translation direction for multilingual conversations.
 *
 * Configures whether real-time translation applies in one or both directions
 * during AI-assisted multilingual conversations.
 */
var TranslationDirection;
(function (TranslationDirection) {
    /** Translate both participant's speech to each other's language */
    TranslationDirection["BIDIRECTIONAL"] = "bidirectional";
    /** Translate only one participant's speech (typically agent to customer) */
    TranslationDirection["UNIDIRECTIONAL"] = "unidirectional";
})(TranslationDirection || (exports.TranslationDirection = TranslationDirection = {}));
/**
 * Conversation summary sentiment classification.
 *
 * AI-generated sentiment analysis result for conversation summaries,
 * used for analytics, routing, and follow-up prioritization.
 */
var ConversationSummarySentiment;
(function (ConversationSummarySentiment) {
    /** Customer expressed satisfaction, issue resolved, or positive outcome */
    ConversationSummarySentiment["POSITIVE"] = "positive";
    /** Neutral interaction without strong positive or negative indicators */
    ConversationSummarySentiment["NEUTRAL"] = "neutral";
    /** Customer expressed frustration, issue unresolved, or negative outcome */
    ConversationSummarySentiment["NEGATIVE"] = "negative";
})(ConversationSummarySentiment || (exports.ConversationSummarySentiment = ConversationSummarySentiment = {}));
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
var CallRequestStatus;
(function (CallRequestStatus) {
    /** Call request created, awaiting processing or scheduled time */
    CallRequestStatus["PENDING"] = "pending";
    /** Call scheduled for future execution within calling hours */
    CallRequestStatus["SCHEDULED"] = "scheduled";
    /** Call currently active with AI agent engaged */
    CallRequestStatus["IN_PROGRESS"] = "in_progress";
    /** Call successfully completed with conversation recorded */
    CallRequestStatus["COMPLETED"] = "completed";
    /** Call failed due to technical error, no answer, or busy signal */
    CallRequestStatus["FAILED"] = "failed";
    /** Call cancelled before execution by user or system */
    CallRequestStatus["CANCELLED"] = "cancelled";
})(CallRequestStatus || (exports.CallRequestStatus = CallRequestStatus = {}));
/**
 * Schedule type for outbound call timing configuration.
 *
 * Determines when and how outbound calls are executed relative
 * to the call request creation time.
 *
 * @see BusinessCallRequestSchema - Uses this for call scheduling
 */
var ScheduleType;
(function (ScheduleType) {
    /** Execute call as soon as possible within calling hours */
    ScheduleType["IMMEDIATE"] = "immediate";
    /** Execute call at specific scheduledAt timestamp */
    ScheduleType["SCHEDULED"] = "scheduled";
    /** Execute call on recurring schedule based on callingHours */
    ScheduleType["RECURRING"] = "recurring";
})(ScheduleType || (exports.ScheduleType = ScheduleType = {}));
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
var EmailStatus;
(function (EmailStatus) {
    /** Email request created, awaiting sending */
    EmailStatus["QUEUED"] = "queued";
    /** Email successfully submitted to mail provider */
    EmailStatus["SENT"] = "sent";
    /** Email confirmed delivered to recipient inbox */
    EmailStatus["DELIVERED"] = "delivered";
    /** Email bounced (hard or soft bounce from recipient server) */
    EmailStatus["BOUNCED"] = "bounced";
    /** Email failed to send due to technical error */
    EmailStatus["FAILED"] = "failed";
    /** Recipient marked email as spam (complaint received) */
    EmailStatus["COMPLAINED"] = "complained";
})(EmailStatus || (exports.EmailStatus = EmailStatus = {}));
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
var SmsStatus;
(function (SmsStatus) {
    /** SMS request created, awaiting sending */
    SmsStatus["QUEUED"] = "queued";
    /** SMS successfully submitted to carrier */
    SmsStatus["SENT"] = "sent";
    /** SMS confirmed delivered to recipient device */
    SmsStatus["DELIVERED"] = "delivered";
    /** SMS failed to send due to technical error */
    SmsStatus["FAILED"] = "failed";
    /** SMS could not be delivered (invalid number, blocked, etc.) */
    SmsStatus["UNDELIVERED"] = "undelivered";
})(SmsStatus || (exports.SmsStatus = SmsStatus = {}));
