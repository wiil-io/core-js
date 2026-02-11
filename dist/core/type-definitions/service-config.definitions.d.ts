export declare enum DeploymentType {
    CALLS = "calls",
    SMS = "sms",
    WEB = "web",
    MOBILE = "mobile-app",
    WHATSAPP = "whatsapp",
    EMAIL = "email"
}
export declare enum DeploymentStatus {
    PENDING = "pending",
    ACTIVE = "active",
    PAUSED = "paused",
    ARCHIVED = "archived"
}
export declare enum ProviderType {
    TWILIO = "twilio",
    SIGNALWIRE = "signal-wire",
    TELNYX = "telnyx"
}
export declare enum PhonePurchaseStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    FAILED = "failed",
    CANCELLED = "cancelled"
}
export declare enum PhoneStatus {
    ACTIVE = "ACTIVE",// used in both SMS and Call channels
    INACTIVE = "INACTIVE",// not used
    SMS_ACTIVE = "SMS_ACTIVE",//used in SMS channel
    CALL_ACTIVE = "CALL_ACTIVE"
}
export declare enum PhoneNumberType {
    LOCAL = "local",
    TOLL_FREE = "toll-free"
}
export declare enum MobilePlatform {
    IOS = "ios",
    ANDROID = "android"
}
export declare enum OttCommunicationType {
    TEXT = "text",
    VOICE = "voice",
    UNIFIED = "unified"
}
export declare enum DeploymentProvisioningType {
    DIRECT = "direct",
    CHAINED = "chained"
}
export declare enum AssistantType {
    PHONE = "phone",
    WEB = "web",
    EMAIL = "email",
    GENERAL = "general"
}
export declare enum LLMType {
    STS = "sts",
    TTS = "tts",
    STT = "stt",
    TRANSCRIBE = "transcribe",
    TEXT_PROCESSING = "text",
    MULTI_MODE = "multi_mode"
}
export declare enum SupportedProprietor {
    OPENAI = "OpenAI",
    GOOGLE = "Google",
    ANTHROPIC = "Anthropic",
    GROQ = "Groq",
    DEEPGRAM = "Deepgram",
    ELEVENLABS = "ElevenLabs",
    DEEPSEEK = "DeepSeek",
    CARTESIA = "Cartesia"
}
export declare enum SupportedLLMKit {
    OPEN_AI = "openai-kit",
    GOOGLE = "google-kit",
    ANTHROPIC = "anthropic-kit",
    GROQ = "groq-kit",
    DEEPGRAM = "deepgram-kit",
    ELEVENLABS = "elevenlabs-kit",
    DEEPSEEK = "deepseek-kit",
    CARTESIA = "cartesia-kit"
}
export declare enum ModelProprietor {
    OPENAI = "OpenAI",
    GOOGLE = "Google",
    ANTHROPIC = "Anthropic",
    GROQ = "Groq",
    DEEPGRAM = "Deepgram",
    ELEVENLABS = "ElevenLabs",
    DEEPSEEK = "DeepSeek",
    CARTESIA = "Cartesia"
}
export declare enum LLMRequestType {
    TEXT = "text",
    AUDIO = "audio",
    IMAGE = "image",
    VIDEO = "video",
    MULTIMODAL = "multimodal"
}
