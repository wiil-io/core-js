"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationSummarySentiment = exports.TranslationDirection = exports.ConversationStatus = exports.ServiceConversationType = exports.ConversationEventType = void 0;
var ConversationEventType;
(function (ConversationEventType) {
    ConversationEventType["OTT_CALL_COMPLETED"] = "OTT_CALL_COMPLETED";
    ConversationEventType["TELEPHONY_CALL_COMPLETED"] = "TELEPHONY_CALL_COMPLETED";
    ConversationEventType["TRANSCRIPTION_COMPLETED"] = "TRANSCRIPTION_COMPLETED";
    ConversationEventType["LLM_INTERACTION_COMPLETED"] = "LLM_INTERACTION_COMPLETED";
    ConversationEventType["SMS_SENT"] = "SMS_SENT";
})(ConversationEventType || (exports.ConversationEventType = ConversationEventType = {}));
var ServiceConversationType;
(function (ServiceConversationType) {
    ServiceConversationType["OTT_CALL"] = "OTT_CALL";
    ServiceConversationType["OTT_CHAT"] = "OTT_CHAT";
    ServiceConversationType["TELEPHONY_CALL"] = "TELEPHONY_CALL";
    ServiceConversationType["SMS"] = "SMS";
    ServiceConversationType["EMAIL"] = "EMAIL";
    ServiceConversationType["WHATSAPP"] = "WHATSAPP";
    ServiceConversationType["TELEGRAM"] = "TELEGRAM";
})(ServiceConversationType || (exports.ServiceConversationType = ServiceConversationType = {}));
var ConversationStatus;
(function (ConversationStatus) {
    ConversationStatus["PENDING"] = "pending";
    ConversationStatus["STARTED"] = "started";
    ConversationStatus["ACTIVE"] = "active";
    ConversationStatus["PAUSED"] = "paused";
    ConversationStatus["ENDED"] = "ended";
    ConversationStatus["SUMMARIZED"] = "summarized";
    ConversationStatus["UPDATED_SUMMARIZED"] = "updated_summarized";
})(ConversationStatus || (exports.ConversationStatus = ConversationStatus = {}));
var TranslationDirection;
(function (TranslationDirection) {
    TranslationDirection["BIDIRECTIONAL"] = "bidirectional";
    TranslationDirection["UNIDIRECTIONAL"] = "unidirectional";
})(TranslationDirection || (exports.TranslationDirection = TranslationDirection = {}));
var ConversationSummarySentiment;
(function (ConversationSummarySentiment) {
    ConversationSummarySentiment["POSITIVE"] = "positive";
    ConversationSummarySentiment["NEUTRAL"] = "neutral";
    ConversationSummarySentiment["NEGATIVE"] = "negative";
})(ConversationSummarySentiment || (exports.ConversationSummarySentiment = ConversationSummarySentiment = {}));
