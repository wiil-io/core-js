"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCatalogScope = exports.DiscountType = exports.DiscountScope = exports.TaxCatalogScope = exports.TaxRateType = exports.TaxScope = exports.PropertyInquiryStatus = exports.PropertyInquiryType = exports.DepositStatus = exports.PropertyLeaseStatus = exports.PropertyPurchaseStatus = exports.RentalPeriod = exports.PropertyCondition = exports.ListingStatus = exports.ListingType = exports.PropertySubType = exports.PropertyType = exports.BestTimeToCall = exports.PreferredContactMethod = exports.CallPriority = exports.WeeklyScheduleSchema = exports.SimpleWeeklyScheduleSchema = exports.DayScheduleSchema = exports.SimpleDayScheduleSchema = exports.BreakTimeSchema = exports.TimeSlotSchema = exports.TIMEZONES = exports.DAYS_OF_WEEK = exports.BusinessDocumentTypes = exports.BusinessServiceDocumentTypes = exports.RestockStatus = exports.StockStatus = exports.StockAdjustmentType = exports.InventoryUnit = exports.ProductOrderType = exports.MenuOrderType = exports.PaymentStatus = exports.OrderStatus = exports.RecurrenceType = exports.ReservationSlotStatus = exports.ServiceProviderTimeOffStatus = exports.ServiceProviderTimeOffType = exports.AppointmentStatus = exports.ReservationStatus = exports.ReservationSettingType = exports.ResourceReservationDurationUnit = exports.ResourceType = exports.CalendarProvider = exports.BusinessServiceType = exports.ExternalRefSchema = void 0;
exports.VariantAxisType = exports.PricingChannel = exports.PricingRuleAdjustmentType = exports.PricingRuleApplyLevel = void 0;
const zod_1 = __importDefault(require("zod"));
/**
 * External reference schema for synchronization with external systems.
 */
exports.ExternalRefSchema = zod_1.default.object({
    externalId: zod_1.default.string().describe("Record ID in external system"),
    source: zod_1.default.string().describe("External platform identifier (e.g., doordash, uber-eats, opentable, resy)"),
    url: zod_1.default.url().nullable().optional().describe("Direct link to record in external system"),
    syncedAt: zod_1.default.number().nullable().optional().describe("Last sync timestamp"),
}).describe("External system reference for imported/synced records");
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
/**
 * Reservation resource type.
 * Identifies the kind of resource used by reservation and resource-management schemas.
 *
 * @enum {string}
 */
var ResourceType;
(function (ResourceType) {
    ResourceType["TABLE"] = "table";
    ResourceType["ROOM"] = "room";
    ResourceType["RENTAL"] = "rental";
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
/**
 * Reservation lifecycle status.
 * Shared status enum for table and room reservation workflows.
 *
 * @enum {string}
 */
var ReservationStatus;
(function (ReservationStatus) {
    ReservationStatus["PENDING"] = "pending";
    ReservationStatus["CONFIRMED"] = "confirmed";
    ReservationStatus["SEATED"] = "seated";
    ReservationStatus["CHECKED_IN"] = "checked_in";
    ReservationStatus["COMPLETED"] = "completed";
    ReservationStatus["CANCELLED"] = "cancelled";
    ReservationStatus["NO_SHOW"] = "no_show";
})(ReservationStatus || (exports.ReservationStatus = ReservationStatus = {}));
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["COMPLETED"] = "completed";
    AppointmentStatus["NO_SHOW"] = "no_show"; // For revenue tracking
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
var ServiceProviderTimeOffType;
(function (ServiceProviderTimeOffType) {
    ServiceProviderTimeOffType["RECURRING"] = "recurring";
    ServiceProviderTimeOffType["SPECIFIC"] = "specific";
})(ServiceProviderTimeOffType || (exports.ServiceProviderTimeOffType = ServiceProviderTimeOffType = {}));
var ServiceProviderTimeOffStatus;
(function (ServiceProviderTimeOffStatus) {
    ServiceProviderTimeOffStatus["APPROVED"] = "approved";
    ServiceProviderTimeOffStatus["PENDING"] = "pending";
    ServiceProviderTimeOffStatus["REJECTED"] = "rejected";
})(ServiceProviderTimeOffStatus || (exports.ServiceProviderTimeOffStatus = ServiceProviderTimeOffStatus = {}));
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
// ============================================================================
// SHARED TIME AND SCHEDULE SCHEMAS
// ============================================================================
/**
 * Time slot schema for scheduling.
 * Defines a start and end time in HH:MM format.
 */
exports.TimeSlotSchema = zod_1.default.object({
    start: zod_1.default.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)').describe("Start time in HH:MM format"),
    end: zod_1.default.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)').describe("End time in HH:MM format"),
});
/**
 * Break time schema (alias for TimeSlotSchema).
 */
exports.BreakTimeSchema = exports.TimeSlotSchema;
/**
 * Simple day schedule schema.
 * Defines basic availability for a single day.
 */
exports.SimpleDayScheduleSchema = zod_1.default.object({
    isOpen: zod_1.default.boolean().describe("Whether available this day"),
    startTime: zod_1.default.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)').describe("Start time"),
    endTime: zod_1.default.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)').describe("End time"),
});
/**
 * Day schedule schema with break times.
 * Extends simple day schedule with break periods.
 */
exports.DayScheduleSchema = exports.SimpleDayScheduleSchema.extend({
    breakTimes: zod_1.default.array(exports.BreakTimeSchema).optional().describe("Break periods during the day"),
});
/**
 * Simple weekly schedule schema.
 * Record of day index (0-6) to simple day schedule.
 */
exports.SimpleWeeklyScheduleSchema = zod_1.default.record(zod_1.default.string().regex(/^[0-6]$/, 'Day must be 0-6'), exports.SimpleDayScheduleSchema).describe("Weekly schedule without breaks");
/**
 * Weekly schedule schema with breaks.
 * Record of day index (0-6) to full day schedule with breaks.
 */
exports.WeeklyScheduleSchema = zod_1.default.record(zod_1.default.string().regex(/^[0-6]$/, 'Day must be 0-6'), exports.DayScheduleSchema).describe("Weekly business hours schedule with breaks");
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
// Property Management Enums
var PropertyType;
(function (PropertyType) {
    PropertyType["RESIDENTIAL"] = "residential";
    PropertyType["COMMERCIAL"] = "commercial";
    PropertyType["LAND"] = "land";
})(PropertyType || (exports.PropertyType = PropertyType = {}));
var PropertySubType;
(function (PropertySubType) {
    // Residential
    PropertySubType["HOUSE"] = "house";
    PropertySubType["APARTMENT"] = "apartment";
    PropertySubType["CONDO"] = "condo";
    PropertySubType["TOWNHOUSE"] = "townhouse";
    PropertySubType["VILLA"] = "villa";
    // Commercial
    PropertySubType["OFFICE"] = "office";
    PropertySubType["RETAIL"] = "retail";
    PropertySubType["WAREHOUSE"] = "warehouse";
    PropertySubType["INDUSTRIAL"] = "industrial";
    // Land
    PropertySubType["LOT"] = "lot";
    PropertySubType["FARM"] = "farm";
    PropertySubType["ACREAGE"] = "acreage";
})(PropertySubType || (exports.PropertySubType = PropertySubType = {}));
var ListingType;
(function (ListingType) {
    ListingType["SALE"] = "sale";
    ListingType["RENT"] = "rent";
    ListingType["BOTH"] = "both";
})(ListingType || (exports.ListingType = ListingType = {}));
var ListingStatus;
(function (ListingStatus) {
    ListingStatus["DRAFT"] = "draft";
    ListingStatus["ACTIVE"] = "active";
    ListingStatus["UNDER_OFFER"] = "under_offer";
    ListingStatus["SOLD"] = "sold";
    ListingStatus["LEASED"] = "leased";
    ListingStatus["WITHDRAWN"] = "withdrawn";
})(ListingStatus || (exports.ListingStatus = ListingStatus = {}));
var PropertyCondition;
(function (PropertyCondition) {
    PropertyCondition["NEW"] = "new";
    PropertyCondition["EXCELLENT"] = "excellent";
    PropertyCondition["GOOD"] = "good";
    PropertyCondition["FAIR"] = "fair";
    PropertyCondition["NEEDS_WORK"] = "needs_work";
})(PropertyCondition || (exports.PropertyCondition = PropertyCondition = {}));
var RentalPeriod;
(function (RentalPeriod) {
    RentalPeriod["DAILY"] = "daily";
    RentalPeriod["WEEKLY"] = "weekly";
    RentalPeriod["MONTHLY"] = "monthly";
    RentalPeriod["YEARLY"] = "yearly";
})(RentalPeriod || (exports.RentalPeriod = RentalPeriod = {}));
var PropertyPurchaseStatus;
(function (PropertyPurchaseStatus) {
    PropertyPurchaseStatus["INQUIRY"] = "inquiry";
    PropertyPurchaseStatus["OFFER_MADE"] = "offer_made";
    PropertyPurchaseStatus["UNDER_CONTRACT"] = "under_contract";
    PropertyPurchaseStatus["COMPLETED"] = "completed";
    PropertyPurchaseStatus["CANCELLED"] = "cancelled";
})(PropertyPurchaseStatus || (exports.PropertyPurchaseStatus = PropertyPurchaseStatus = {}));
var PropertyLeaseStatus;
(function (PropertyLeaseStatus) {
    PropertyLeaseStatus["PENDING"] = "pending";
    PropertyLeaseStatus["ACTIVE"] = "active";
    PropertyLeaseStatus["RENEWED"] = "renewed";
    PropertyLeaseStatus["TERMINATED"] = "terminated";
    PropertyLeaseStatus["EXPIRED"] = "expired";
})(PropertyLeaseStatus || (exports.PropertyLeaseStatus = PropertyLeaseStatus = {}));
var DepositStatus;
(function (DepositStatus) {
    DepositStatus["PENDING"] = "pending";
    DepositStatus["PAID"] = "paid";
    DepositStatus["RETURNED"] = "returned";
    DepositStatus["FORFEITED"] = "forfeited";
})(DepositStatus || (exports.DepositStatus = DepositStatus = {}));
var PropertyInquiryType;
(function (PropertyInquiryType) {
    PropertyInquiryType["OFFER"] = "offer";
    PropertyInquiryType["GENERAL"] = "general";
})(PropertyInquiryType || (exports.PropertyInquiryType = PropertyInquiryType = {}));
var PropertyInquiryStatus;
(function (PropertyInquiryStatus) {
    PropertyInquiryStatus["NEW"] = "new";
    PropertyInquiryStatus["CONTACTED"] = "contacted";
    PropertyInquiryStatus["VIEWING_SCHEDULED"] = "viewing_scheduled";
    PropertyInquiryStatus["FOLLOW_UP"] = "follow_up";
    PropertyInquiryStatus["CONVERTED"] = "converted";
    PropertyInquiryStatus["CLOSED"] = "closed";
})(PropertyInquiryStatus || (exports.PropertyInquiryStatus = PropertyInquiryStatus = {}));
// Tax Rule Enums
var TaxScope;
(function (TaxScope) {
    TaxScope["ORDER"] = "ORDER";
    TaxScope["ITEM"] = "ITEM";
    TaxScope["SERVICE"] = "SERVICE";
    TaxScope["DELIVERY"] = "DELIVERY";
})(TaxScope || (exports.TaxScope = TaxScope = {}));
var TaxRateType;
(function (TaxRateType) {
    TaxRateType["PERCENTAGE"] = "PERCENTAGE";
    TaxRateType["FIXED"] = "FIXED";
})(TaxRateType || (exports.TaxRateType = TaxRateType = {}));
var TaxCatalogScope;
(function (TaxCatalogScope) {
    TaxCatalogScope["ALL"] = "ALL";
    TaxCatalogScope["MENU"] = "MENU";
    TaxCatalogScope["PRODUCT"] = "PRODUCT";
    TaxCatalogScope["SERVICE"] = "SERVICE";
    TaxCatalogScope["SET"] = "SET";
})(TaxCatalogScope || (exports.TaxCatalogScope = TaxCatalogScope = {}));
// Discount Rule Enums
var DiscountScope;
(function (DiscountScope) {
    DiscountScope["ORDER"] = "ORDER";
    DiscountScope["ITEM"] = "ITEM";
    DiscountScope["SHIPPING"] = "SHIPPING";
    DiscountScope["SET"] = "SET";
})(DiscountScope || (exports.DiscountScope = DiscountScope = {}));
var DiscountType;
(function (DiscountType) {
    DiscountType["PERCENTAGE"] = "PERCENTAGE";
    DiscountType["FIXED"] = "FIXED";
})(DiscountType || (exports.DiscountType = DiscountType = {}));
var DiscountCatalogScope;
(function (DiscountCatalogScope) {
    DiscountCatalogScope["ALL"] = "ALL";
    DiscountCatalogScope["MENU"] = "MENU";
    DiscountCatalogScope["PRODUCT"] = "PRODUCT";
    DiscountCatalogScope["SERVICE"] = "SERVICE";
    DiscountCatalogScope["SET"] = "SET";
})(DiscountCatalogScope || (exports.DiscountCatalogScope = DiscountCatalogScope = {}));
// Pricing Rule Enums
var PricingRuleApplyLevel;
(function (PricingRuleApplyLevel) {
    PricingRuleApplyLevel["ITEM"] = "ITEM";
    PricingRuleApplyLevel["ORDER"] = "ORDER";
})(PricingRuleApplyLevel || (exports.PricingRuleApplyLevel = PricingRuleApplyLevel = {}));
var PricingRuleAdjustmentType;
(function (PricingRuleAdjustmentType) {
    PricingRuleAdjustmentType["PERCENTAGE"] = "PERCENTAGE";
    PricingRuleAdjustmentType["FIXED"] = "FIXED";
    PricingRuleAdjustmentType["OVERRIDE"] = "OVERRIDE";
})(PricingRuleAdjustmentType || (exports.PricingRuleAdjustmentType = PricingRuleAdjustmentType = {}));
var PricingChannel;
(function (PricingChannel) {
    PricingChannel["ALL"] = "ALL";
    PricingChannel["DIRECT"] = "DIRECT";
    PricingChannel["ONLINE"] = "ONLINE";
    PricingChannel["PHONE"] = "PHONE";
    PricingChannel["WALK_IN"] = "WALK_IN";
})(PricingChannel || (exports.PricingChannel = PricingChannel = {}));
// Variant Axis Enums
var VariantAxisType;
(function (VariantAxisType) {
    VariantAxisType["SWATCH"] = "swatch";
    VariantAxisType["TEXT"] = "text";
    VariantAxisType["IMAGE"] = "image";
    VariantAxisType["NUMERIC"] = "numeric";
})(VariantAxisType || (exports.VariantAxisType = VariantAxisType = {}));
