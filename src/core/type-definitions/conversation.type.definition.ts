
export enum ConversationEventType {
    OTT_CALL_COMPLETED = 'OTT_CALL_COMPLETED',
    TELEPHONY_CALL_COMPLETED = 'TELEPHONY_CALL_COMPLETED',
    TRANSCRIPTION_COMPLETED = 'TRANSCRIPTION_COMPLETED',
    LLM_INTERACTION_COMPLETED = 'LLM_INTERACTION_COMPLETED',
    SMS_SENT = 'SMS_SENT',
}

export enum ServiceConversationType {
    OTT_CALL = 'OTT_CALL',
    OTT_CHAT = 'OTT_CHAT',
    TELEPHONY_CALL = 'TELEPHONY_CALL',
    SMS = 'SMS',
    EMAIL = 'EMAIL',
    WHATSAPP = 'WHATSAPP',
    TELEGRAM = 'TELEGRAM',
}



export enum ConversationStatus {
    PENDING = "pending",
    STARTED = "started",
    ACTIVE = "active",
    PAUSED = "paused",
    ENDED = "ended",
    SUMMARIZED = "summarized",
    UPDATED_SUMMARIZED = "updated_summarized"
}

export enum TranslationDirection {
    BIDIRECTIONAL = "bidirectional",
    UNIDIRECTIONAL = "unidirectional",
}



export enum ConversationSummarySentiment {
    POSITIVE = "positive",
    NEUTRAL = "neutral",
    NEGATIVE = "negative",
}