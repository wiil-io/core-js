import { z } from "zod";

/**
 * @fileoverview Call transfer configuration schema definitions.
 * @module service-configuration/call-transfer-config
 */

/**
 * Zod schema for individual call transfer configuration.
 *
 * Defines the structure for configuring call transfers in the telephony system,
 * supporting both blind transfers (immediate) and warm transfers (announced).
 *
 * @typedef {Object} CallTransferConfigProperties
 * @property {string} transfer_number - The phone number to transfer calls to in E.164 format
 * @property {'blind' | 'warm'} transfer_type - Transfer type: 'blind' for immediate transfer, 'warm' for announced transfer (default: 'blind')
 * @property {string[]} transfer_conditions - Array of conditions that trigger this transfer (e.g., 'speak to sales', 'talk to manager')
 *
 * @example
 * ```typescript
 * const transferConfig: CallTransferConfig = {
 *   transfer_number: '+15551234567',
 *   transfer_type: 'warm',
 *   transfer_conditions: ['speak to sales', 'talk to manager', 'escalate']
 * };
 * ```
 */
export const CallTransferConfigSchema = z.object({
    transfer_number: z.string(),
    transfer_type: z.enum(['blind', 'warm']).default('blind'),
    transfer_conditions: z.array(z.string())
});

/**
 * Type definition for call transfer configuration.
 *
 * Represents a single call transfer rule with target number, transfer method,
 * and the conditions that trigger the transfer.
 */
export type CallTransferConfig = z.infer<typeof CallTransferConfigSchema>;
