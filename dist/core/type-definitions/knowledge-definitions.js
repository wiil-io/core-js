"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedDocumentTypes = exports.StorageTier = exports.KnowledgeTypes = exports.KnowledgeBaseProcessingStatus = void 0;
var KnowledgeBaseProcessingStatus;
(function (KnowledgeBaseProcessingStatus) {
    KnowledgeBaseProcessingStatus["PENDING"] = "pending";
    KnowledgeBaseProcessingStatus["PROCESSING"] = "processing";
    KnowledgeBaseProcessingStatus["COMPLETED"] = "completed";
    KnowledgeBaseProcessingStatus["FAILED"] = "failed";
})(KnowledgeBaseProcessingStatus || (exports.KnowledgeBaseProcessingStatus = KnowledgeBaseProcessingStatus = {}));
var KnowledgeTypes;
(function (KnowledgeTypes) {
    KnowledgeTypes["DOCUMENT"] = "document";
    KnowledgeTypes["URL"] = "url";
    KnowledgeTypes["BUSINESS_WEBSITE"] = "business_website";
    KnowledgeTypes["CORPUS"] = "corpus";
    KnowledgeTypes["BATCH_DOCUMENT"] = "batch_document";
})(KnowledgeTypes || (exports.KnowledgeTypes = KnowledgeTypes = {}));
var StorageTier;
(function (StorageTier) {
    StorageTier["FIRESTORE"] = "firestore";
    StorageTier["CLOUD_STORAGE_STANDARD"] = "cloud_storage_standard";
    StorageTier["CLOUD_STORAGE_COLDLINE"] = "cloud_storage_coldline";
})(StorageTier || (exports.StorageTier = StorageTier = {}));
var SupportedDocumentTypes;
(function (SupportedDocumentTypes) {
    SupportedDocumentTypes["PDF"] = "application/pdf";
    SupportedDocumentTypes["DOCX"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    SupportedDocumentTypes["TXT"] = "text/plain";
    SupportedDocumentTypes["MD"] = "text/markdown";
    SupportedDocumentTypes["RTF"] = "application/rtf";
    SupportedDocumentTypes["HTML"] = "text/html";
    SupportedDocumentTypes["WORD"] = "application/msword";
    SupportedDocumentTypes["CSV"] = "text/csv";
    SupportedDocumentTypes["XLS"] = "application/vnd.ms-excel";
    SupportedDocumentTypes["XLSX"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
})(SupportedDocumentTypes || (exports.SupportedDocumentTypes = SupportedDocumentTypes = {}));
