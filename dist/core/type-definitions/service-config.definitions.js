"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMRequestType = exports.ModelProprietor = exports.SupportedLLMKit = exports.SupportedProprietor = exports.LLMType = exports.AssistantType = exports.DeploymentProvisioningType = exports.OttCommunicationType = exports.MobilePlatform = exports.PhoneNumberType = exports.PhoneStatus = exports.PhonePurchaseStatus = exports.ProviderType = exports.DeploymentStatus = exports.DeploymentType = void 0;
// Enums
var DeploymentType;
(function (DeploymentType) {
    DeploymentType["CALLS"] = "calls";
    DeploymentType["SMS"] = "sms";
    DeploymentType["WEB"] = "web";
    DeploymentType["MOBILE"] = "mobile-app";
    DeploymentType["WHATSAPP"] = "whatsapp";
    DeploymentType["EMAIL"] = "email";
})(DeploymentType || (exports.DeploymentType = DeploymentType = {}));
var DeploymentStatus;
(function (DeploymentStatus) {
    DeploymentStatus["PENDING"] = "pending";
    DeploymentStatus["ACTIVE"] = "active";
    DeploymentStatus["PAUSED"] = "paused";
    DeploymentStatus["ARCHIVED"] = "archived";
})(DeploymentStatus || (exports.DeploymentStatus = DeploymentStatus = {}));
var ProviderType;
(function (ProviderType) {
    ProviderType["TWILIO"] = "twilio";
    ProviderType["SIGNALWIRE"] = "signal-wire";
    ProviderType["TELNYX"] = "telnyx";
})(ProviderType || (exports.ProviderType = ProviderType = {}));
var PhonePurchaseStatus;
(function (PhonePurchaseStatus) {
    PhonePurchaseStatus["PENDING"] = "pending";
    PhonePurchaseStatus["COMPLETED"] = "completed";
    PhonePurchaseStatus["FAILED"] = "failed";
    PhonePurchaseStatus["CANCELLED"] = "cancelled";
})(PhonePurchaseStatus || (exports.PhonePurchaseStatus = PhonePurchaseStatus = {}));
var PhoneStatus;
(function (PhoneStatus) {
    PhoneStatus["ACTIVE"] = "ACTIVE";
    PhoneStatus["INACTIVE"] = "INACTIVE";
    PhoneStatus["SMS_ACTIVE"] = "SMS_ACTIVE";
    PhoneStatus["CALL_ACTIVE"] = "CALL_ACTIVE";
})(PhoneStatus || (exports.PhoneStatus = PhoneStatus = {}));
var PhoneNumberType;
(function (PhoneNumberType) {
    PhoneNumberType["LOCAL"] = "local";
    PhoneNumberType["TOLL_FREE"] = "toll-free";
})(PhoneNumberType || (exports.PhoneNumberType = PhoneNumberType = {}));
var MobilePlatform;
(function (MobilePlatform) {
    MobilePlatform["IOS"] = "ios";
    MobilePlatform["ANDROID"] = "android";
    // WEB = 'web',
})(MobilePlatform || (exports.MobilePlatform = MobilePlatform = {}));
// Communication types enum
var OttCommunicationType;
(function (OttCommunicationType) {
    OttCommunicationType["TEXT"] = "text";
    OttCommunicationType["VOICE"] = "voice";
    OttCommunicationType["UNIFIED"] = "unified";
})(OttCommunicationType || (exports.OttCommunicationType = OttCommunicationType = {}));
var DeploymentProvisioningType;
(function (DeploymentProvisioningType) {
    DeploymentProvisioningType["DIRECT"] = "direct";
    DeploymentProvisioningType["CHAINED"] = "chained";
})(DeploymentProvisioningType || (exports.DeploymentProvisioningType = DeploymentProvisioningType = {}));
var AssistantType;
(function (AssistantType) {
    AssistantType["PHONE"] = "phone";
    AssistantType["WEB"] = "web";
    AssistantType["EMAIL"] = "email";
    AssistantType["GENERAL"] = "general";
})(AssistantType || (exports.AssistantType = AssistantType = {}));
var LLMType;
(function (LLMType) {
    LLMType["STS"] = "sts";
    LLMType["TTS"] = "tts";
    LLMType["STT"] = "stt";
    LLMType["TRANSCRIBE"] = "transcribe";
    LLMType["TEXT_PROCESSING"] = "text";
    // IMAGE = 'image',
    // VIDEO = 'video',
    LLMType["MULTI_MODE"] = "multi_mode";
})(LLMType || (exports.LLMType = LLMType = {}));
var SupportedProprietor;
(function (SupportedProprietor) {
    SupportedProprietor["OPENAI"] = "OpenAI";
    SupportedProprietor["GOOGLE"] = "Google";
    SupportedProprietor["ANTHROPIC"] = "Anthropic";
    SupportedProprietor["GROQ"] = "Groq";
    SupportedProprietor["DEEPGRAM"] = "Deepgram";
    SupportedProprietor["ELEVENLABS"] = "ElevenLabs";
    SupportedProprietor["DEEPSEEK"] = "DeepSeek";
    SupportedProprietor["CARTESIA"] = "Cartesia";
})(SupportedProprietor || (exports.SupportedProprietor = SupportedProprietor = {}));
var SupportedLLMKit;
(function (SupportedLLMKit) {
    SupportedLLMKit["OPEN_AI"] = "openai-kit";
    SupportedLLMKit["GOOGLE"] = "google-kit";
    SupportedLLMKit["ANTHROPIC"] = "anthropic-kit";
    SupportedLLMKit["GROQ"] = "groq-kit";
    SupportedLLMKit["DEEPGRAM"] = "deepgram-kit";
    SupportedLLMKit["ELEVENLABS"] = "elevenlabs-kit";
    SupportedLLMKit["DEEPSEEK"] = "deepseek-kit";
    SupportedLLMKit["CARTESIA"] = "cartesia-kit";
})(SupportedLLMKit || (exports.SupportedLLMKit = SupportedLLMKit = {}));
var ModelProprietor;
(function (ModelProprietor) {
    ModelProprietor["OPENAI"] = "OpenAI";
    ModelProprietor["GOOGLE"] = "Google";
    ModelProprietor["ANTHROPIC"] = "Anthropic";
    ModelProprietor["GROQ"] = "Groq";
    ModelProprietor["DEEPGRAM"] = "Deepgram";
    ModelProprietor["ELEVENLABS"] = "ElevenLabs";
    ModelProprietor["DEEPSEEK"] = "DeepSeek";
    ModelProprietor["CARTESIA"] = "Cartesia";
})(ModelProprietor || (exports.ModelProprietor = ModelProprietor = {}));
var LLMRequestType;
(function (LLMRequestType) {
    LLMRequestType["TEXT"] = "text";
    LLMRequestType["AUDIO"] = "audio";
    LLMRequestType["IMAGE"] = "image";
    LLMRequestType["VIDEO"] = "video";
    LLMRequestType["MULTIMODAL"] = "multimodal";
})(LLMRequestType || (exports.LLMRequestType = LLMRequestType = {}));
