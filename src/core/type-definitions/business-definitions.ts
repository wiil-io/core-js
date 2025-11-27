
export enum BusinessServiceType {
    MENU = 'menu',           // Restaurant/food
    SERVICE = 'service',     // Professional services
    PRODUCT = 'product',     // Retail items
    APPOINTMENT = 'appointment', // Bookable services
    //   SUBSCRIPTION = 'subscription' // Recurring services
}


export enum CalendarProvider {
  GOOGLE = 'google',
  OUTLOOK = 'outlook',
  CALENDLY = 'calendly'
}
 
// Resource type enum
export enum ResourceType {
    TABLE = "table",
    ROOM = "room",
    RENTALS = "rentals",
    RESOURCE = "resource",
}

export enum ResourceReservationDurationUnit {
    MINUTES = "minutes",
    HOURS = "hours",
    NIGHTS = "nights"
}

export enum ReservationSettingType {
    CAPACITY = "capacity",
    RESOURCE_SPECIFIC = "resource_specific",
}


export enum AppointmentStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    NO_SHOW = 'no_show'     // For revenue tracking
}


export enum ReservationSlotStatus {
    AVAILABLE = "available",
    BOOKED = "booked",
    BLOCKED = "blocked",
    MAINTENANCE = "maintenance"
}

export enum RecurrenceType {
    NONE = "none",
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly"
}



export enum OrderStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PREPARING = 'preparing',
    READY = 'ready',
    OUT_FOR_DELIVERY = 'out_for_delivery',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    RETURNED = 'returned',
}

export enum PaymentStatus {
    PENDING = 'pending',
    PAID = 'paid',
    PARTIAL = 'partial',
    FAILED = 'failed',
    REFUNDED = 'refunded'
}


export enum MenuOrderType {
    DINE_IN = 'dine_in',
    TAKEOUT = 'takeout',
    DELIVERY = 'delivery'
};


export enum ProductOrderType {
    PICKUP = 'pickup',
    DELIVERY = 'delivery',
    SHIPPING = 'shipping'
}

export enum InventoryUnit {
    EACH = 'each',               // Single item
    PACK = 'pack',               // Small group/package (e.g., 6-pack)
    BOX = 'box',                 // Boxed items
    CASE = 'case',               // Larger shipping case
    DOZEN = 'dozen',             // 12 items
    PAIR = 'pair',               // Shoes, gloves, etc.
    GRAM = 'gram',               // For small quantities (e.g., spices)
    POUNDS = 'lbs',              // Pounds
    KILOGRAM = 'kg',             // Kilogram
    MILLILITER = 'ml',           // Milliliter
    LITER = 'l',                 // Liter
    METER = 'm',                 // Meter
    CENTIMETER = 'cm',           // Centimeter
    ROLL = 'rl',                 // Roll
    SET = 'set',                 // Set
    OTHER = 'other'              // Catch-all for anything else
}

export enum StockAdjustmentType {
    ADDITION = 'addition',
    SUBTRACTION = 'subtraction',
    ADJUSTMENT = 'adjustment'
}


export enum StockStatus {
    IN_STOCK = 'in_stock',
    LOW_STOCK = 'low_stock',
    OUT_OF_STOCK = 'out_of_stock',
    DISCONTINUED = 'discontinued'
}

export enum RestockStatus {
    NEEDED = 'needed',            // Needs to be ordered
    ORDERED = 'ordered',          // Order placed with supplier
    RECEIVED = 'received',        // Stock received and added
    CANCELLED = 'cancelled'       // Restock order cancelled
}

export enum BusinessServiceDocumentTypes {
    CUSTOMERS = 'customers',
    MENU_CATALOG = 'menu_catalog',
    PRODUCT_CATALOG = 'product_catalog',
    SERVICE_CATALOG = 'service_catalog',
    RESOURCE_CATALOG = 'resource_catalog',
    INVENTORY_CATALOG = 'inventory_catalog',
    SUPPLIER = 'suppliers'
}


export enum BusinessDocumentTypes {
    CSV = 'text/csv',
    XLS = 'application/vnd.ms-excel',
    XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    TXT = 'text/plain',
    JSON = 'application/json',
    PDF = 'application/pdf',
    DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    PPT = 'application/vnd.ms-powerpoint',
    HTML = 'text/html',
    MD = 'text/markdown',
    RTF = 'application/rtf',
    JPEG = 'image/jpeg',
    PNG = 'image/png'
}


export const DAYS_OF_WEEK = [
    { id: 0, name: 'Sunday', short: 'Sun' },
    { id: 1, name: 'Monday', short: 'Mon' },
    { id: 2, name: 'Tuesday', short: 'Tue' },
    { id: 3, name: 'Wednesday', short: 'Wed' },
    { id: 4, name: 'Thursday', short: 'Thu' },
    { id: 5, name: 'Friday', short: 'Fri' },
    { id: 6, name: 'Saturday', short: 'Sat' },
]

export const TIMEZONES = [
    'UTC',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney',
]

// Customer-related enums
export enum CallPriority {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low'
}

export enum PreferredContactMethod {
    EMAIL = 'email',
    PHONE = 'phone',
    SMS = 'sms',
}

export enum BestTimeToCall {
    MORNING = 'morning',
    AFTERNOON = 'afternoon',
    EVENING = 'evening',
    ANYTIME = 'anytime'
}