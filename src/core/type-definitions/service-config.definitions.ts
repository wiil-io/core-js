import { BusinessSupportServices } from "./account-definitions";

// Enums
export enum DeploymentType {
    CALLS = 'calls',
    SMS = 'sms',
    WEB = 'web',
    MOBILE = 'mobile-app',
    WHATSAPP = 'whatsapp',
    EMAIL = 'email',
}


export enum DeploymentStatus {
    PENDING = 'pending',
    ACTIVE = 'active',
    PAUSED = 'paused',
    ARCHIVED = 'archived'
}

export enum ProviderType {
    TWILIO = 'twilio',
    SIGNALWIRE = 'signal-wire',
    TELNYX = 'telnyx',
    MESSAGEBIRD = 'messagebird',
    SNS = 'sns',
}

export enum EmailProviderType {
    GOOGLE = 'google',
    OUTLOOK = 'outlook',
    SENDGRID = 'sendgrid',
    SES = 'ses',
    MAILGUN = 'mailgun',
    POSTMARK = 'postmark',
    SMTP = 'smtp',
}

export enum PhonePurchaseStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    FAILED = 'failed',
    CANCELLED = 'cancelled',
}

export enum PhoneStatus {
    ACTIVE = 'ACTIVE', // used in both SMS and Call channels
    INACTIVE = 'INACTIVE', // not used
    SMS_ACTIVE = 'SMS_ACTIVE', //used in SMS channel
    CALL_ACTIVE = 'CALL_ACTIVE', //used in Call channel
}


export enum PhoneNumberType {
    LOCAL = 'local',
    TOLL_FREE = 'toll-free',
}


export enum MobilePlatform {
    IOS = 'ios',
    ANDROID = 'android',
    // WEB = 'web',
}


// Communication types enum
export enum OttCommunicationType {
    TEXT = 'text',
    VOICE = 'voice',
    UNIFIED = 'unified'
}


export enum DeploymentProvisioningType {
    DIRECT = 'direct',
    CHAINED = 'chained',
}


export enum AssistantType {
    PHONE = "phone",
    WEB = "web",
    EMAIL = "email",
    GENERAL = "general", // for general purpose assistants not tied to a specific channel
}

export enum LLMType {
    STS = 'sts',
    TTS = 'tts',
    STT = 'stt',
    TRANSCRIBE = 'transcribe',
    TEXT_PROCESSING = 'text',
    // IMAGE = 'image',
    // VIDEO = 'video',
    MULTI_MODE = 'multi_mode'
}


export enum SupportedProprietor {
    OPENAI = 'OpenAI',
    GOOGLE = 'Google',
    ANTHROPIC = 'Anthropic',
    GROQ = 'Groq',
    DEEPGRAM = 'Deepgram',
    ELEVENLABS = 'ElevenLabs',
    DEEPSEEK = 'DeepSeek',
    CARTESIA = 'Cartesia',
}

export enum SupportedLLMKit {
    OPEN_AI = 'openai-kit',
    GOOGLE = 'google-kit',
    ANTHROPIC = 'anthropic-kit',
    GROQ = 'groq-kit',
    DEEPGRAM = 'deepgram-kit',
    ELEVENLABS = 'elevenlabs-kit',
    DEEPSEEK = 'deepseek-kit',
    CARTESIA = 'cartesia-kit',
}

export enum LLMRequestType {
    TEXT = "text",
    AUDIO = "audio",
    IMAGE = "image",
    VIDEO = "video",
    MULTIMODAL = "multimodal"
}


export enum AgentRoleTemplateIdentifier {
    CUSTOMER_SUPPORT_GENERAL = 'customer-support-general',
    TECHNICAL_SUPPORT_SPECIALIST = 'technical-support-specialist',
    SALES_REPRESENTATIVE = 'sales-representative',
    ONBOARDING_SPECIALIST = 'onboarding-specialist',
    BILLING_SUPPORT_SPECIALIST = 'billing-support-specialist'
}


export const AgentCapabilities = BusinessSupportServices;
export type AgentCapabilities = BusinessSupportServices;