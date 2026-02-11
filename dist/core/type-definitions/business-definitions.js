"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestTimeToCall = exports.PreferredContactMethod = exports.CallPriority = exports.TIMEZONES = exports.DAYS_OF_WEEK = exports.BusinessDocumentTypes = exports.BusinessServiceDocumentTypes = exports.RestockStatus = exports.StockStatus = exports.StockAdjustmentType = exports.InventoryUnit = exports.ProductOrderType = exports.MenuOrderType = exports.PaymentStatus = exports.OrderStatus = exports.RecurrenceType = exports.ReservationSlotStatus = exports.AppointmentStatus = exports.ReservationSettingType = exports.ResourceReservationDurationUnit = exports.ResourceType = exports.CalendarProvider = exports.BusinessServiceType = void 0;
var BusinessServiceType;
(function (BusinessServiceType) {
    BusinessServiceType["MENU"] = "menu";
    BusinessServiceType["SERVICE"] = "service";
    BusinessServiceType["PRODUCT"] = "product";
    BusinessServiceType["APPOINTMENT"] = "appointment";
    //   SUBSCRIPTION = 'subscription' // Recurring services
})(BusinessServiceType || (exports.BusinessServiceType = BusinessServiceType = {}));
var CalendarProvider;
(function (CalendarProvider) {
    CalendarProvider["GOOGLE"] = "google";
    CalendarProvider["OUTLOOK"] = "outlook";
    CalendarProvider["CALENDLY"] = "calendly";
})(CalendarProvider || (exports.CalendarProvider = CalendarProvider = {}));
// Resource type enum
var ResourceType;
(function (ResourceType) {
    ResourceType["TABLE"] = "table";
    ResourceType["ROOM"] = "room";
    ResourceType["RENTALS"] = "rentals";
    ResourceType["RESOURCE"] = "resource";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
var ResourceReservationDurationUnit;
(function (ResourceReservationDurationUnit) {
    ResourceReservationDurationUnit["MINUTES"] = "minutes";
    ResourceReservationDurationUnit["HOURS"] = "hours";
    ResourceReservationDurationUnit["NIGHTS"] = "nights";
})(ResourceReservationDurationUnit || (exports.ResourceReservationDurationUnit = ResourceReservationDurationUnit = {}));
var ReservationSettingType;
(function (ReservationSettingType) {
    ReservationSettingType["CAPACITY"] = "capacity";
    ReservationSettingType["RESOURCE_SPECIFIC"] = "resource_specific";
})(ReservationSettingType || (exports.ReservationSettingType = ReservationSettingType = {}));
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["COMPLETED"] = "completed";
    AppointmentStatus["NO_SHOW"] = "no_show"; // For revenue tracking
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
var ReservationSlotStatus;
(function (ReservationSlotStatus) {
    ReservationSlotStatus["AVAILABLE"] = "available";
    ReservationSlotStatus["BOOKED"] = "booked";
    ReservationSlotStatus["BLOCKED"] = "blocked";
    ReservationSlotStatus["MAINTENANCE"] = "maintenance";
})(ReservationSlotStatus || (exports.ReservationSlotStatus = ReservationSlotStatus = {}));
var RecurrenceType;
(function (RecurrenceType) {
    RecurrenceType["NONE"] = "none";
    RecurrenceType["DAILY"] = "daily";
    RecurrenceType["WEEKLY"] = "weekly";
    RecurrenceType["MONTHLY"] = "monthly";
})(RecurrenceType || (exports.RecurrenceType = RecurrenceType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["CONFIRMED"] = "confirmed";
    OrderStatus["PREPARING"] = "preparing";
    OrderStatus["READY"] = "ready";
    OrderStatus["OUT_FOR_DELIVERY"] = "out_for_delivery";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["RETURNED"] = "returned";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["PARTIAL"] = "partial";
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var MenuOrderType;
(function (MenuOrderType) {
    MenuOrderType["DINE_IN"] = "dine_in";
    MenuOrderType["TAKEOUT"] = "takeout";
    MenuOrderType["DELIVERY"] = "delivery";
})(MenuOrderType || (exports.MenuOrderType = MenuOrderType = {}));
;
var ProductOrderType;
(function (ProductOrderType) {
    ProductOrderType["PICKUP"] = "pickup";
    ProductOrderType["DELIVERY"] = "delivery";
    ProductOrderType["SHIPPING"] = "shipping";
})(ProductOrderType || (exports.ProductOrderType = ProductOrderType = {}));
var InventoryUnit;
(function (InventoryUnit) {
    InventoryUnit["EACH"] = "each";
    InventoryUnit["PACK"] = "pack";
    InventoryUnit["BOX"] = "box";
    InventoryUnit["CASE"] = "case";
    InventoryUnit["DOZEN"] = "dozen";
    InventoryUnit["PAIR"] = "pair";
    InventoryUnit["GRAM"] = "gram";
    InventoryUnit["POUNDS"] = "lbs";
    InventoryUnit["KILOGRAM"] = "kg";
    InventoryUnit["MILLILITER"] = "ml";
    InventoryUnit["LITER"] = "l";
    InventoryUnit["METER"] = "m";
    InventoryUnit["CENTIMETER"] = "cm";
    InventoryUnit["ROLL"] = "rl";
    InventoryUnit["SET"] = "set";
    InventoryUnit["OTHER"] = "other"; // Catch-all for anything else
})(InventoryUnit || (exports.InventoryUnit = InventoryUnit = {}));
var StockAdjustmentType;
(function (StockAdjustmentType) {
    StockAdjustmentType["ADDITION"] = "addition";
    StockAdjustmentType["SUBTRACTION"] = "subtraction";
    StockAdjustmentType["ADJUSTMENT"] = "adjustment";
})(StockAdjustmentType || (exports.StockAdjustmentType = StockAdjustmentType = {}));
var StockStatus;
(function (StockStatus) {
    StockStatus["IN_STOCK"] = "in_stock";
    StockStatus["LOW_STOCK"] = "low_stock";
    StockStatus["OUT_OF_STOCK"] = "out_of_stock";
    StockStatus["DISCONTINUED"] = "discontinued";
})(StockStatus || (exports.StockStatus = StockStatus = {}));
var RestockStatus;
(function (RestockStatus) {
    RestockStatus["NEEDED"] = "needed";
    RestockStatus["ORDERED"] = "ordered";
    RestockStatus["RECEIVED"] = "received";
    RestockStatus["CANCELLED"] = "cancelled"; // Restock order cancelled
})(RestockStatus || (exports.RestockStatus = RestockStatus = {}));
var BusinessServiceDocumentTypes;
(function (BusinessServiceDocumentTypes) {
    BusinessServiceDocumentTypes["CUSTOMERS"] = "customers";
    BusinessServiceDocumentTypes["MENU_CATALOG"] = "menu_catalog";
    BusinessServiceDocumentTypes["PRODUCT_CATALOG"] = "product_catalog";
    BusinessServiceDocumentTypes["SERVICE_CATALOG"] = "service_catalog";
    BusinessServiceDocumentTypes["RESOURCE_CATALOG"] = "resource_catalog";
    BusinessServiceDocumentTypes["INVENTORY_CATALOG"] = "inventory_catalog";
    BusinessServiceDocumentTypes["SUPPLIER"] = "suppliers";
})(BusinessServiceDocumentTypes || (exports.BusinessServiceDocumentTypes = BusinessServiceDocumentTypes = {}));
var BusinessDocumentTypes;
(function (BusinessDocumentTypes) {
    BusinessDocumentTypes["CSV"] = "text/csv";
    BusinessDocumentTypes["XLS"] = "application/vnd.ms-excel";
    BusinessDocumentTypes["XLSX"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    BusinessDocumentTypes["TXT"] = "text/plain";
    BusinessDocumentTypes["JSON"] = "application/json";
    BusinessDocumentTypes["PDF"] = "application/pdf";
    BusinessDocumentTypes["DOCX"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    BusinessDocumentTypes["PPTX"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    BusinessDocumentTypes["PPT"] = "application/vnd.ms-powerpoint";
    BusinessDocumentTypes["HTML"] = "text/html";
    BusinessDocumentTypes["MD"] = "text/markdown";
    BusinessDocumentTypes["RTF"] = "application/rtf";
    BusinessDocumentTypes["JPEG"] = "image/jpeg";
    BusinessDocumentTypes["PNG"] = "image/png";
})(BusinessDocumentTypes || (exports.BusinessDocumentTypes = BusinessDocumentTypes = {}));
exports.DAYS_OF_WEEK = [
    { id: 0, name: 'Sunday', short: 'Sun' },
    { id: 1, name: 'Monday', short: 'Mon' },
    { id: 2, name: 'Tuesday', short: 'Tue' },
    { id: 3, name: 'Wednesday', short: 'Wed' },
    { id: 4, name: 'Thursday', short: 'Thu' },
    { id: 5, name: 'Friday', short: 'Fri' },
    { id: 6, name: 'Saturday', short: 'Sat' },
];
exports.TIMEZONES = [
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
];
// Customer-related enums
var CallPriority;
(function (CallPriority) {
    CallPriority["HIGH"] = "high";
    CallPriority["MEDIUM"] = "medium";
    CallPriority["LOW"] = "low";
})(CallPriority || (exports.CallPriority = CallPriority = {}));
var PreferredContactMethod;
(function (PreferredContactMethod) {
    PreferredContactMethod["EMAIL"] = "email";
    PreferredContactMethod["PHONE"] = "phone";
    PreferredContactMethod["SMS"] = "sms";
})(PreferredContactMethod || (exports.PreferredContactMethod = PreferredContactMethod = {}));
var BestTimeToCall;
(function (BestTimeToCall) {
    BestTimeToCall["MORNING"] = "morning";
    BestTimeToCall["AFTERNOON"] = "afternoon";
    BestTimeToCall["EVENING"] = "evening";
    BestTimeToCall["ANYTIME"] = "anytime";
})(BestTimeToCall || (exports.BestTimeToCall = BestTimeToCall = {}));
