import z from "zod";
/**
 * External reference schema for synchronization with external systems.
 */
export declare const ExternalRefSchema: z.ZodObject<{
    externalId: z.ZodString;
    source: z.ZodString;
    url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type ExternalRef = z.infer<typeof ExternalRefSchema>;
export declare enum BusinessServiceType {
    MENU = "menu",// Restaurant/food
    SERVICE = "service",// Professional services
    PRODUCT = "product",// Retail items
    APPOINTMENT = "appointment"
}
export declare enum CalendarProvider {
    GOOGLE = "google",
    OUTLOOK = "outlook",
    CALENDLY = "calendly"
}
/**
 * Reservation resource type.
 * Identifies the kind of resource used by reservation and resource-management schemas.
 *
 * @enum {string}
 */
export declare enum ResourceType {
    TABLE = "table",
    ROOM = "room",
    RENTAL = "rental",
    RENTALS = "rentals",
    RESOURCE = "resource"
}
export declare enum ResourceReservationDurationUnit {
    MINUTES = "minutes",
    HOURS = "hours",
    NIGHTS = "nights"
}
export declare enum ReservationSettingType {
    CAPACITY = "capacity",
    RESOURCE_SPECIFIC = "resource_specific"
}
/**
 * Reservation lifecycle status.
 * Shared status enum for table and room reservation workflows.
 *
 * @enum {string}
 */
export declare enum ReservationStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    SEATED = "seated",
    CHECKED_IN = "checked_in",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    NO_SHOW = "no_show"
}
export declare enum AppointmentStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    NO_SHOW = "no_show"
}
export declare enum ServiceProviderTimeOffType {
    RECURRING = "recurring",
    SPECIFIC = "specific"
}
export declare enum ServiceProviderTimeOffStatus {
    APPROVED = "approved",
    PENDING = "pending",
    REJECTED = "rejected"
}
export declare enum ReservationSlotStatus {
    AVAILABLE = "available",
    BOOKED = "booked",
    BLOCKED = "blocked",
    MAINTENANCE = "maintenance"
}
export declare enum RecurrenceType {
    NONE = "none",
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly"
}
export declare enum OrderStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    PREPARING = "preparing",
    READY = "ready",
    OUT_FOR_DELIVERY = "out_for_delivery",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    RETURNED = "returned"
}
export declare enum PaymentStatus {
    PENDING = "pending",
    PAID = "paid",
    PARTIAL = "partial",
    FAILED = "failed",
    REFUNDED = "refunded"
}
export declare enum MenuOrderType {
    DINE_IN = "dine_in",
    TAKEOUT = "takeout",
    DELIVERY = "delivery"
}
export declare enum ProductOrderType {
    PICKUP = "pickup",
    DELIVERY = "delivery",
    SHIPPING = "shipping"
}
export declare enum InventoryUnit {
    EACH = "each",// Single item
    PACK = "pack",// Small group/package (e.g., 6-pack)
    BOX = "box",// Boxed items
    CASE = "case",// Larger shipping case
    DOZEN = "dozen",// 12 items
    PAIR = "pair",// Shoes, gloves, etc.
    GRAM = "gram",// For small quantities (e.g., spices)
    POUNDS = "lbs",// Pounds
    KILOGRAM = "kg",// Kilogram
    MILLILITER = "ml",// Milliliter
    LITER = "l",// Liter
    METER = "m",// Meter
    CENTIMETER = "cm",// Centimeter
    ROLL = "rl",// Roll
    SET = "set",// Set
    OTHER = "other"
}
export declare enum StockAdjustmentType {
    ADDITION = "addition",
    SUBTRACTION = "subtraction",
    ADJUSTMENT = "adjustment"
}
export declare enum StockStatus {
    IN_STOCK = "in_stock",
    LOW_STOCK = "low_stock",
    OUT_OF_STOCK = "out_of_stock",
    DISCONTINUED = "discontinued"
}
export declare enum RestockStatus {
    NEEDED = "needed",// Needs to be ordered
    ORDERED = "ordered",// Order placed with supplier
    RECEIVED = "received",// Stock received and added
    CANCELLED = "cancelled"
}
export declare enum BusinessServiceDocumentTypes {
    CUSTOMERS = "customers",
    MENU_CATALOG = "menu_catalog",
    PRODUCT_CATALOG = "product_catalog",
    SERVICE_CATALOG = "service_catalog",
    RESOURCE_CATALOG = "resource_catalog",
    INVENTORY_CATALOG = "inventory_catalog",
    SUPPLIER = "suppliers"
}
export declare enum BusinessDocumentTypes {
    CSV = "text/csv",
    XLS = "application/vnd.ms-excel",
    XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    TXT = "text/plain",
    JSON = "application/json",
    PDF = "application/pdf",
    DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    PPT = "application/vnd.ms-powerpoint",
    HTML = "text/html",
    MD = "text/markdown",
    RTF = "application/rtf",
    JPEG = "image/jpeg",
    PNG = "image/png"
}
export declare const DAYS_OF_WEEK: {
    id: number;
    name: string;
    short: string;
}[];
export declare const TIMEZONES: string[];
export declare enum CallPriority {
    HIGH = "high",
    MEDIUM = "medium",
    LOW = "low"
}
export declare enum PreferredContactMethod {
    EMAIL = "email",
    PHONE = "phone",
    SMS = "sms"
}
export declare enum BestTimeToCall {
    MORNING = "morning",
    AFTERNOON = "afternoon",
    EVENING = "evening",
    ANYTIME = "anytime"
}
export declare enum PropertyType {
    RESIDENTIAL = "residential",
    COMMERCIAL = "commercial",
    LAND = "land"
}
export declare enum PropertySubType {
    HOUSE = "house",
    APARTMENT = "apartment",
    CONDO = "condo",
    TOWNHOUSE = "townhouse",
    VILLA = "villa",
    OFFICE = "office",
    RETAIL = "retail",
    WAREHOUSE = "warehouse",
    INDUSTRIAL = "industrial",
    LOT = "lot",
    FARM = "farm",
    ACREAGE = "acreage"
}
export declare enum ListingType {
    SALE = "sale",
    RENT = "rent",
    BOTH = "both"
}
export declare enum ListingStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    UNDER_OFFER = "under_offer",
    SOLD = "sold",
    LEASED = "leased",
    WITHDRAWN = "withdrawn"
}
export declare enum PropertyCondition {
    NEW = "new",
    EXCELLENT = "excellent",
    GOOD = "good",
    FAIR = "fair",
    NEEDS_WORK = "needs_work"
}
export declare enum RentalPeriod {
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly",
    YEARLY = "yearly"
}
export declare enum PropertyPurchaseStatus {
    INQUIRY = "inquiry",
    OFFER_MADE = "offer_made",
    UNDER_CONTRACT = "under_contract",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare enum PropertyLeaseStatus {
    PENDING = "pending",
    ACTIVE = "active",
    RENEWED = "renewed",
    TERMINATED = "terminated",
    EXPIRED = "expired"
}
export declare enum DepositStatus {
    PENDING = "pending",
    PAID = "paid",
    RETURNED = "returned",
    FORFEITED = "forfeited"
}
export declare enum PropertyInquiryType {
    OFFER = "offer",
    GENERAL = "general"
}
export declare enum PropertyInquiryStatus {
    NEW = "new",
    CONTACTED = "contacted",
    VIEWING_SCHEDULED = "viewing_scheduled",
    FOLLOW_UP = "follow_up",
    CONVERTED = "converted",
    CLOSED = "closed"
}
export declare enum TaxScope {
    ORDER = "ORDER",
    ITEM = "ITEM",
    SERVICE = "SERVICE",
    DELIVERY = "DELIVERY"
}
export declare enum TaxRateType {
    PERCENTAGE = "PERCENTAGE",
    FIXED = "FIXED"
}
export declare enum TaxCatalogScope {
    ALL = "ALL",
    MENU = "MENU",
    PRODUCT = "PRODUCT",
    SERVICE = "SERVICE",
    SET = "SET"
}
export declare enum DiscountScope {
    ORDER = "ORDER",
    ITEM = "ITEM",
    SHIPPING = "SHIPPING",
    SET = "SET"
}
export declare enum DiscountType {
    PERCENTAGE = "PERCENTAGE",
    FIXED = "FIXED"
}
export declare enum DiscountCatalogScope {
    ALL = "ALL",
    MENU = "MENU",
    PRODUCT = "PRODUCT",
    SERVICE = "SERVICE",
    SET = "SET"
}
export declare enum PricingRuleApplyLevel {
    ITEM = "ITEM",
    ORDER = "ORDER"
}
export declare enum PricingRuleAdjustmentType {
    PERCENTAGE = "PERCENTAGE",
    FIXED = "FIXED",
    OVERRIDE = "OVERRIDE"
}
export declare enum PricingChannel {
    ALL = "ALL",
    DIRECT = "DIRECT",
    ONLINE = "ONLINE",
    PHONE = "PHONE",
    WALK_IN = "WALK_IN"
}
export declare enum VariantAxisType {
    SWATCH = "swatch",
    TEXT = "text",
    IMAGE = "image",
    NUMERIC = "numeric"
}
