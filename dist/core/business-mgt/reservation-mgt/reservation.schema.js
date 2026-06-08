"use strict";
// import { z } from "zod";
// import { BaseModelSchemaWithAudit } from "../../base.schema";
// import { PaymentStatus, ReservationSettingType, ReservationStatus, ResourceReservationDurationUnit, ResourceType } from "../constants";
// import { OrderPricingSchema } from "../order-mgt/order.schema";
// export const ReservationSettingsSchema = BaseModelSchemaWithAudit.safeExtend({
//     organizationId: z.string().describe("Business account ID"),
//     locationId: z.string().nullable().optional().describe("Business location ID"),
//     reservationType: z.enum(ResourceType).describe("Type of reservation (table, room, rental, etc.)"),
//     settingType: z.enum(ReservationSettingType).describe("Type of reservation setting"),
//     defaultReservationDuration: z.number().int().positive().default(1).optional().describe("Default reservation duration"),
//     defaultReservationDurationUnit: z.enum(ResourceReservationDurationUnit).optional().default(ResourceReservationDurationUnit.HOURS).describe("Unit of the default reservation duration"),
//     isActive: z.boolean().default(false).describe("Whether this reservation setting is active"),
// });
// export const CreateReservationSettingsSchema = ReservationSettingsSchema.omit({
//     id: true,
//     createdAt: true,
//     updatedAt: true,
//     createdBy: true,
//     updatedBy: true,
//     deletedAt: true,
//     deletedBy: true,
//     uniqueKey: true,
//     version: true,
// });
// export const UpdateReservationSettingsSchema = CreateReservationSettingsSchema.partial().safeExtend({
//     id: z.string(),
// });
// export type ReservationSettings = z.infer<typeof ReservationSettingsSchema>;
// export type CreateReservationSettings = z.infer<typeof CreateReservationSettingsSchema>;
// export type UpdateReservationSettings = z.infer<typeof UpdateReservationSettingsSchema>;
// // Reservation schema
// export const ReservationSchema = BaseModelSchemaWithAudit.safeExtend({
//     organizationId: z.string().describe("Business account ID"),
//     locationId: z.string().nullable().optional().describe("Business location ID"),
//     reservationType: z.enum(ResourceType).describe("Type of reservation"),
//     roomTypeId: z.string().nullable().optional().describe("Room type/category ID for room reservations"),
//     assignedRoomId: z.string().nullable().optional().describe("Assigned room/resource ID"),
//     resourceId: z.string().optional().nullable().describe("ID of the reserved resource (table, room, etc.)"),
//     customerId: z.string().describe("Customer ID if registered"),
//     customerName: z.string().optional().describe("Customer's full name"),
//     customerEmail: z.email().optional().describe("Customer's email address"),
//     startTime: z.number().describe("Reservation start time as Unix timestamp"),
//     endTime: z.number().optional().describe("Reservation end time as Unix timestamp"),
//     duration: z.number().nonnegative().optional().describe("Duration based on resource type (in nights for rooms/rental, hours for rental, open-ended for tables)"),
//     personsNumber: z.number().int().nonnegative().optional().describe("Number of people for the reservation"),
//     source: z.string().nullable().optional().describe("Reservation source/channel (e.g., direct, marketplace, phone)"),
//     ratePerNight: z.array(z.object({
//         date: z.string().describe("Rate date (YYYY-MM-DD)"),
//         amount: z.number().nonnegative().describe("Nightly amount for this date"),
//     })).nullable().optional().describe("Per-night pricing breakdown"),
//     totalPrice: z.number().nonnegative().optional().describe("Total price for the reservation"),
//     totalWithTax: z.number().nonnegative().nullable().optional().describe("Total amount including tax"),
//     pricing: OrderPricingSchema.optional().describe("Detailed pricing breakdown for the reservation"),
//     depositPaid: z.number().nonnegative().default(0).describe("Deposit amount paid"),
//     paymentStatus: z.enum(PaymentStatus).nullable().optional().describe("Payment status for the reservation"),
//     status: z.enum(ReservationStatus).default(ReservationStatus.PENDING).describe("Current reservation status"),
//     notes: z.string().optional().describe("Special requests or notes"),
//     cancelReason: z.string().nullable().optional().describe("Reason for cancellation, if applicable"),
//     isResourceReservation: z.boolean().default(false).describe("Indicates if this reservation is for a specific resource"),
//     serviceConversationConfigId: z.string().nullable().optional().describe("Configuration ID for service conversation"),
// });
// export const CreateReservationSchema = ReservationSchema.omit({
//     id: true,
//     createdAt: true,
//     updatedAt: true,
//     createdBy: true,
//     updatedBy: true,
//     deletedAt: true,
//     deletedBy: true,
//     uniqueKey: true,
//     version: true,
//     cancelReason: true
// });
// export const UpdateReservationSchema = CreateReservationSchema.partial().safeExtend({
//     id: z.string(),
//     cancelReason: z.string().nullable().optional().describe("Reason for cancellation, if applicable"),
// });
// export type Reservation = z.infer<typeof ReservationSchema>;
// export type CreateReservation = z.infer<typeof CreateReservationSchema>;
// export type UpdateReservation = z.infer<typeof UpdateReservationSchema>;
// export enum WaitlistStatus {
//     WAITING = "waiting",
//     NOTIFIED = "notified",
//     SEATED = "seated",
//     ABANDONED = "abandoned",
// }
// export const WaitlistSchema = BaseModelSchemaWithAudit.safeExtend({
//     organizationId: z.string().describe("Business account ID"),
//     locationId: z.string().nullable().optional().describe("Business location ID"),
//     partyName: z.string().min(1).describe("Name for the party on the waitlist"),
//     partySize: z.number().int().positive().describe("Party size"),
//     addedAt: z.number().describe("Timestamp when party was added to waitlist"),
//     status: z.enum(WaitlistStatus).default(WaitlistStatus.WAITING).describe("Current waitlist status"),
//     quotedWaitMinutes: z.number().int().nonnegative().describe("Quoted wait time in minutes"),
// });
// export const CreateWaitlistSchema = WaitlistSchema.omit({
//     id: true,
//     createdAt: true,
//     updatedAt: true,
//     createdBy: true,
//     updatedBy: true,
//     deletedAt: true,
//     deletedBy: true,
//     uniqueKey: true,
//     version: true,
// });
// export const UpdateWaitlistSchema = CreateWaitlistSchema.partial().safeExtend({
//     id: z.string(),
// });
// export type Waitlist = z.infer<typeof WaitlistSchema>;
// export type CreateWaitlist = z.infer<typeof CreateWaitlistSchema>;
// export type UpdateWaitlist = z.infer<typeof UpdateWaitlistSchema>;
// // Query Options
// export interface ReservationFilters {
//     search?: string;
//     locationId?: string;
//     status?: ReservationStatus[];
//     reservationType?: ResourceType[];
//     resourceId?: string;
//     customerId?: string;
//     isResourceReservation?: boolean;
//     dateRange?: { start?: number; end?: number; };
//     includeDeleted?: boolean;
// }
// export interface ReservationSorting {
//     field: 'startTime' | 'endTime' | 'createdAt';
//     direction: 'asc' | 'desc';
// }
// export interface ReservationQueryOptions {
//     page: number;
//     pageSize: number;
//     filters?: ReservationFilters;
//     sorting?: ReservationSorting;
// }
// export interface WaitlistFilters {
//     search?: string;
//     locationId?: string;
//     status?: WaitlistStatus[];
//     partySizeRange?: { min?: number; max?: number };
//     dateRange?: { start?: number; end?: number };
//     includeDeleted?: boolean;
// }
// export interface WaitlistSorting {
//     field: "addedAt" | "quotedWaitMinutes" | "createdAt";
//     direction: "asc" | "desc";
// }
// export interface WaitlistQueryOptions {
//     page: number;
//     pageSize: number;
//     filters?: WaitlistFilters;
//     sorting?: WaitlistSorting;
// }
