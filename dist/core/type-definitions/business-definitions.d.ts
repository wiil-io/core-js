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
export declare enum ResourceType {
    TABLE = "table",
    ROOM = "room",
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
export declare enum AppointmentStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    NO_SHOW = "no_show"
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
