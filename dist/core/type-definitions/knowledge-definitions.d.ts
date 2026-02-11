export declare enum KnowledgeBaseProcessingStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    COMPLETED = "completed",
    FAILED = "failed"
}
export declare enum KnowledgeTypes {
    DOCUMENT = "document",
    URL = "url",
    BUSINESS_WEBSITE = "business_website",
    CORPUS = "corpus",
    BATCH_DOCUMENT = "batch_document"
}
export declare enum StorageTier {
    FIRESTORE = "firestore",
    CLOUD_STORAGE_STANDARD = "cloud_storage_standard",
    CLOUD_STORAGE_COLDLINE = "cloud_storage_coldline"
}
export declare enum SupportedDocumentTypes {
    PDF = "application/pdf",
    DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    TXT = "text/plain",
    MD = "text/markdown",
    RTF = "application/rtf",
    HTML = "text/html",
    WORD = "application/msword",
    CSV = "text/csv",
    XLS = "application/vnd.ms-excel",
    XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
}
