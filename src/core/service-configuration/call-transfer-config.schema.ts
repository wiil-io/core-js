import { z } from "zod";

/**
 * @fileoverview Call transfer configuration schema definitions.
 *
 * Call transfer configurations enable AI agents to transfer calls to human operators or other
 * phone numbers based on specific conditions or user requests. Supports both blind (immediate)
 * and warm (announced) transfer types.
 *
 * @module service-configuration/call-transfer-config
 */

/**
 * Zod schema for individual call transfer configuration.
 *
 * Defines the structure for configuring call transfers in the telephony system. Call transfer
 * configurations are used by Agent Configurations to handle escalations and routing scenarios.
 * Multiple transfer configurations can be defined, each with different conditions and destinations.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: Agent Configuration (call_transfer_config array)
 * - **Purpose**: Enables agents to escalate or route calls to human operators or specialized teams
 * - **Transfer Types**:
 *   - **Blind Transfer**: Immediately transfers the call without announcement
 *   - **Warm Transfer**: Announces the call to the recipient before connecting the caller
 *
 * **Use Cases:**
 * - Sales inquiries → Transfer to sales team
 * - Technical support escalation → Transfer to senior technician
 * - Billing questions → Transfer to billing department
 * - Emergency situations → Transfer to on-call manager
 *
 * @typedef {Object} CallTransferConfigProperties
 * @property {string} transfer_number - The phone number to transfer calls to in E.164 international format (e.g., '+15551234567')
 * @property {'blind' | 'warm'} transfer_type - Transfer type: 'blind' for immediate transfer without announcement, 'warm' for announced transfer where recipient can accept or decline (default: 'blind')
 * @property {string[]} transfer_conditions - Array of natural language conditions or phrases that trigger this transfer (e.g., 'speak to sales', 'talk to manager', 'escalate to human')
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
    transfer_number: z.string().describe("Phone number in E.164 international format to transfer calls to (e.g., '+15551234567' for US numbers, '+442071234567' for UK numbers)"),
    transfer_type: z.enum(['blind', 'warm']).default('blind').describe("Type of call transfer: 'blind' for immediate transfer without announcement (faster, no option to decline), 'warm' for announced transfer where the recipient is informed before the caller is connected (professional, allows screening)"),
    transfer_conditions: z.array(z.string()).describe("Array of natural language conditions, keywords, or phrases that trigger this call transfer (e.g., 'speak to sales', 'talk to a human', 'escalate to manager', 'billing question'). The agent will match these conditions during conversations to determine when to initiate the transfer.")
});

/**
 * Type definition for call transfer configuration.
 *
 * Represents a single call transfer rule with target number, transfer method,
 * and the conditions that trigger the transfer.
 */
export type CallTransferConfig = z.infer<typeof CallTransferConfigSchema>;
